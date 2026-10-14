# Dossier: invention: Plimsoll

Primary: https://github.com/plimsollmark/plimsoll (read in full via a git clone of main at commit 57e71ff, 2026-10-12). I read README.md, SECURITY.md, docs/limitations.md, docs/isolation-tiers.md, docs/notes/pids-limit, docs/compare, sandbox/sandbox.go and sandbox/validation.go.
HN: https://news.ycombinator.com/item?id=50049388 ("Show HN: Plimsoll, a self-hosted sandbox for code your AI agent writes", 16 pts, posted 2026-10-11 23:47 UTC by the author, "cagster"; Algolia lists 2 replies).
Status: a young single-author open-source project (Apache-2.0, Go, v0.21.0). This is not research. Nothing is peer-reviewed or audited, and the author says so.

## 1. What
Plimsoll is a self-hosted Go daemon (`plimsolld`) plus Go, Python and TypeScript clients. It runs untrusted code, such as code an AI agent wrote, through one of several sandbox backends. Every result carries an **isolation tier**, one of `process` < `container` < `kernel` < `vm`. A request can set a **floor** (`MinimumIsolation`). If the backend is weaker than the floor, the request is refused before dispatch, and the error (`ErrInsufficientIsolation`) means "nothing ran".
- The name comes from the Plimsoll line, the load-limit mark painted on a ship's hull "where anyone can check it".
- Tier mapping (README):
  - `wasm` (QuickJS in-process) is `process`, and the README says not to use it for hostile code.
  - docker+runc is `container`.
  - docker+gVisor (runsc) is `kernel`.
  - E2B and Docker Cloud Sandboxes microVMs are `vm` (both hosted and billed).
  - NVIDIA OpenShell is `container`.
  - With no provider set, nothing runs (the safe default).
- Second feature: **capability grants**. Code in the sandbox has no network. To call an API it goes through a broker outside the sandbox, which checks the exact route and attaches a credential minted per run. The credential never enters the sandbox.
- Extras: SHA-256 "run records" for each request and result, which the clients recompute; a separate `plimsoll-attest` tool signs records and refuses a chain with a call missing; sessions/notebook-style cells; integrations for Agno, CrewAI, Google ADK, Vercel AI SDK, Trigger.dev and Mastra; and a daily per-caller allowance of paid microVM seconds.

## 2. How
- The floor check is `CheckMinimumIsolation(actual, minimum)` in sandbox/validation.go. Its comment says to "Call it immediately before admission and dispatch so a stale discovery/readiness result can never authorize a run." It is called from each provider's run path (wasm.go, docker_run.go, docker_session.go, dockercloud_run.go, openshell/session.go).
- If a request sets no floor (`IsolationUnknown`), the check returns nil. **The per-request floor is opt-in.** An operator-wide floor also exists (`SANDBOX_MIN_ISOLATION`, checked at startup), and `PLIMSOLL_HARDENED=1` refuses to start without VM or verified-kernel isolation.
- The Go client checks the tier again when the result comes back. A mismatch raises `ErrIsolationEvidenceMismatch`, which explicitly does NOT mean safe to retry, because code may have run.
- How a tier is established:
  - docker/kernel: docker must register the `runsc` runtime, and a startup smoke test checks from inside a container that the filesystem is read-only, that loopback is the only network interface, and that the pids limit is in force.
  - E2B and Docker Cloud: the `vm` tier is inferred **from provider identity**. The smoke test checks that a microVM is created and that egress is blocked, but it does not check for a hypervisor.
- Plimsoll does not build walls itself: "Isolation itself is delegated to gVisor and Firecracker." It is the gatekeeper and the reporter.

## 3. Who
- One maintainer. Git author "carrollco"; the notes article is signed "Carroll Guertin, 2026-10-11"; HN handle "cagster". All 77 commits on main are by that one author.
- First public commit 2026-09-10. The commit log mentions "Sync from the private tree" and SECURITY.md mentions a "former name", so earlier development happened privately.
- Release cadence: v0.18 to v0.21 between 2026-10-04 and 2026-10-09.
- The clients are published (PyPI `plimsoll-client` 0.21.0; npm `@plimsollmark/client` 0.21.0, created 2026-10-02). Registry stats show about 205 weekly PyPI downloads and 361 weekly npm downloads. **These are NOT evidence of adoption**: they include the project's own CI and mirrors, and the README itself says "no external users yet".
- GitHub showed 25 stars and 1 fork on 2026-10-14 (WebFetch of the repo page).

## 4. Why it matters
- The author's thesis (docs/isolation-tiers.md) is that hosted sandbox vendors describe isolation in prose ("isolated per request"). The author says six services checked in September 2026 (E2B, Modal, Daytona, Vercel Sandbox, Cloudflare, Northflank) neither report the wall a run actually got nor refuse a run below a stated minimum. **This is the author's survey, not independently verified.**
- A concrete case that supports the thesis comes from an independent source: Northflank's own blog (2026-04-29) says it uses gVisor "where nested virtualisation is unavailable". So which wall a run gets can depend on the host it lands on.
- The motivation story: an embeddable JS sandbox advertised a `MemoryLimit` that did nothing.
- The author's pids-limit article (2026-10-11, author's own measurements on one laptop) shows the general problem:
  - Docker accepts `--pids-limit` under every runtime, but under Kata it was not applied (200 of 200 processes started at a limit of 64).
  - Under gVisor it is enforced on the host cgroup, but the guest got only 14 processes at 64, because gVisor's own tasks count against the limit.
  - The Kata side is independently corroborated: kata-containers#4887 was closed as not planned, with the reporter writing "there is no way to provide this value to the agent".
  - Plimsoll's response is to prove the limit at startup and refuse to serve if it can't.
- Tie to the thread: it is a "stay inside the limits" tool. A request can say "only run this if the walls are at least this strong".

## 5. What's contested / limitations (the counterpoint)
The strongest counterpoint comes from the project's own docs, and no independent critique exists yet. The tier is **evidence, not proof**:
- "The tier is evidence the daemon collected: its configuration and its own startup checks. It is not attestation." (README)
- "A compromised Docker daemon, or an E2B control plane ... that did not do what it says, defeats the evidence." (SECURITY.md)

So the label is only as trustworthy as the configuration and the hosted vendor. For the `vm` tier it is a statement of which vendor was configured, not a measurement.

Other limits, all from the project's own pages:
- Single author, pre-1.0, "no external users yet". Breaking changes land without deprecation, and v0.21 clients and daemons refuse 0.20 ones.
- "No third-party security audit has ever been performed". The self-review ledgers exist but are withheld.
- Self-hosted, the strongest wall is gVisor. The VM tier exists only through paid hosted E2B or Docker Cloud. There is no microVM of its own and no Kubernetes deployment.
- gVisor cost time: a one-file TypeScript compile-and-run took 4.1 s vs 1.95 s as a plain container (author's measurement).
- gVisor is Linux-only, so a Mac gets the container tier (HN post).
- The floor is opt-in per request (source code).
- A grant is "a way out for data": the broker checks the route, not the payload.
- Sandbox output can carry prompt injection, and Plimsoll does not inspect output.
- There is no claim against timing or cache side channels at any tier.
- The comparison page is written by Plimsoll's maintainer and labels itself "one vendor's comparison".

Community reaction: minimal. The HN thread had one substantive reply (wanderingbit), asking whether an exe.dev SSH sandbox plus a credential-injecting proxy is enough. The author answered: "plimsoll is more for running code for agents or MCP servers. It's not for running agents." No press, Reddit or blog coverage was found (web search for "plimsoll sandbox AI agent isolation tier gVisor" returned nothing about the project).

## 6. What's next
- No public roadmap was found. The README states that breaking changes are expected before 1.0.
- The author asks on HN: "If you run agent-written code today, what do you run it in? Would a tier label change what you trust?"
- The isolation-tiers page invites correction: "If your service does report the tier and enforce a caller's minimum, open an issue and this section will be corrected."
- The pids-limit article says Kata failing the startup check was one reason it was not added as a runtime.

## Key numbers
- 4 tiers: process, container, kernel, vm.
- 6 backends: wasm, docker/runc, docker/runsc, e2b, dockercloud, openshell.
- v0.21.0 (2026-10-09); first public commit 2026-09-10; 77 commits; 1 author.
- About 88k lines of Go excluding gen/ (wc of the clone, includes tests).
- HN: 16 points, 2 replies (Algolia).
- GitHub: 25 stars, 1 fork (2026-10-14).
- pids test (author, one laptop, limit 64):
  - runc: 57 of 200 processes started.
  - gVisor: 14 started, then the container exited.
  - Kata: 200 of 200 started, so the limit was not applied.
- gVisor overhead: 4.1 s vs 1.95 s (median of 20, 2026-09-29, author's measurement).

## Quotable lines
- "every result says how strong that sandbox was. A request can demand a minimum strength; if the sandbox is weaker, nothing runs." (https://github.com/plimsollmark/plimsoll)
- "code that needs a VM can't quietly run on my test setup: below the floor, nothing runs." (author, https://news.ycombinator.com/item?id=50049388)
- "It is not attestation, cryptographic proof from the hardware of what software is running, and no provider here offers that." (https://github.com/plimsollmark/plimsoll)

## Writer guidance
- Describe it as "a young, single-developer open-source project". Do not imply users or adoption; the README says there are none.
- Say Plimsoll "reports" or "labels" the isolation strength based on its configuration and startup checks. Do not say it "proves" or "verifies" it.
- Say it sits in front of existing sandboxes (gVisor, Firecracker microVMs via E2B and Docker Cloud) rather than being a new kind of sandbox.
- The six-vendor "nobody else does this" claim is the author's survey. Attribute it to the author or leave it out.

## Also in this thread
- The pids-limit note (repo docs/notes/pids-limit): a good "promises vs enforcement" side story, since Docker accepts a limit that Kata silently ignores. Corroborated by kata-containers#4887.
- Northflank's Kata/gVisor fallback (https://northflank.com/blog/kata-containers-vs-gvisor) shows the problem Plimsoll targets: the strength of the wall depends on the host.
- A runner-up if the editor drops this one: SolidCraft (topics.json).

## Unverified
- That none of the six hosted vendors reports the tier or enforces a minimum (author's survey; I did not check each vendor's docs).
- All performance and pids numbers are the author's single-machine measurements and were not reproduced. I did not run the code.
- The published GitHub Pages URLs (plimsollmark.github.io/plimsoll/...) were not fetched. The content was read from the repo's docs/ source files.
- The HN story metadata says 4 comments but Algolia returned 2. There may be deleted or flagged replies.
- Download counts may be CI or mirror traffic and say nothing about real users.
- What the "former name" of the project was, and how long it was developed privately.
