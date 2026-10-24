# Dossier: research. Anthropic + Theorem, "LLMs are making formal software verification feasible at a much larger scale"

Primary: https://www.anthropic.com/research/formal-verification (published Oct 22, 2026, Anthropic Frontier Red Team, in collaboration with Theorem)
Appendix (6-page PDF): https://www-cdn.anthropic.com/files/4zrzovbb/website/6867eadf760258fa8b42a504600cd3c036d16358.pdf
HN: https://news.ycombinator.com/item?id=50202217 (437 points, 279 comments when fetched Oct 24, 2026)

**Status label:** a company research blog post with an appendix. It is **not peer-reviewed** and there is no arXiv paper. Part of the artifact is public and machine-checkable: the Theorem repo runs CI that re-checks the published proofs. I found **no independent replication**, and all the press I found restates the post. Every headline number below is an **Anthropic/Theorem claim**.

Note on the title: topics.json says "at larger scale". The real title is "LLMs are making formal software verification feasible at a *much* larger scale".

---

## 1. What

- Claude, working with Theorem's tooling, wrote machine-checked Rocq proofs about **compiled RISC-V binaries** of OSS-Fuzz fuzz targets. Each proof says the target never crashes (no memory-safety error flagged by AddressSanitizer, no failed assertion, no fault) on any input under 64 MB.
- Headline (Anthropic claim): **239 entry points across 123 OSS-Fuzz libraries**, **~180 million lines of Rocq**, a typical proof of **~600,000 lines**, binaries with a median of **18,000 RISC-V instructions**, done "over the span of a few weeks".
- Bugs (Anthropic claim): "hundreds of bugs" turned up while proving. Named examples: a counter underflow in a decompressor that only triggers on inputs of about 20 MB, an out-of-bounds read in an image decoder that needs a 64 MB input and more than 2 GB of RAM, a rediscovery of CVE-2026-56132 in libexpat, and a logic bug where a file-restriction feature was not always enforced. Libraries are mostly not named, presumably pending disclosure.
- Side experiments (Anthropic claims, few details):
  - zlib (RFC 1950) spec written by Claude, with a proof that the Linux kernel's zlib x86 binary implements it, using x86 semantics that Claude generated.
  - A Python interpreter in Rust proved in Verus against a λπ-based formal semantics. On 1.7M random programs it matched CPython 99.95% of the time.
  - A "widely used PDF reader" (unnamed) where a week of work found "as many security bugs in one week as are typically reported in a year."
- Release: a subset of the proofs, the RISC-V/Linux semantics (LPS), and a Claude skill. Theorem offers a free "OSS Verify" service to qualifying open-source projects.

## 2. How

- **Spec from tests.** An existing fuzz harness becomes the spec: "this test never crashes on any input under 64 MB". Because harness assertions abort on failure, proving no-crash also proves whatever the harness asserts, such as round-trip properties.
- **Binary level.** The compiled binary itself is interpreted with Theorem's formal RISC-V plus Linux process semantics. Source code is not translated into Rocq. The appendix argues this avoids translation and interpreter mismatch errors.
- **Three theorems per target (appendix).**
  1. The ASan build never crashes.
  2. The plain build never crashes.
  3. The two builds produce the same trace of stdin/stdout/stderr bytes, the same exit status, and the same final filesystem state, for all memory layouts.
- **Agentic loop.** When a proof attempt hit a bug, Claude patched the code, the spec was regenerated, and the proof restarted. Footnote 6 admits this opens the door to reward hacking: Claude could rewrite a program so it trivially never crashes. Mitigations: patches were penalized and "logged and audited".
- **Proof reuse.** Most of each proof covers the C runtime and ASan initialization that every program shares, so agents copied and adapted each other's proofs. On a controlled 36-task set, a shared workspace cut token use by 17%.
- **Raw volume (appendix).** Claude wrote "around one billion lines of Rocq" in total. About 180M of those ended up in proofs that passed. Over half of each proof is machine-emitted tables. Checking one proof takes "30 minutes to several hours of CPU time".

## 3. Who

- Anthropic Frontier Red Team plus Theorem (theorem.dev). Authors: Keane Lucas, Aengus Lynch, Luna Tong, Luke Champine, Zygi Straznickas, Dino Distefano, Harshikaa Agrawal, Evyatar Ben Asher, Ava Howell, Sami Jawhar, Chris Rohlf, Nickolai Zeldovich, Nicholas Carlini, Rajashree Agrawal, Jason Gross.
- Jason Gross (author, Theorem) answered questions in the HN thread as `jasongross`. He linked the model, which is based on mit-plv/riscv-coq and Sail.
- Nickolai Zeldovich (author) co-wrote MachCSL with Frans Kaashoek (arXiv 2609.04043, Sept 2026, preprint). That is the project the appendix cites as evidence that agents may "hit a complexity wall". The appendix section "How do Claude's proofs look to a human formal verification expert?" is unsigned. The post links it as "an expert's take", so it is an in-house expert, not an independent reviewer.

## 4. Why it matters

- Classic baseline: seL4 took 2.2 person-years to build and about 20 person-years to prove. The seL4 paper itself notes that 9 of those 20 py went into reusable frameworks and tools, and 11 py into the seL4-specific proof. Anthropic's "2 vs 20 person-years" framing is accurate but leaves out that split.
- Anthropic's pitch: AI makes bugs cheap to find and exploit, so testing is not enough and code needs proofs. The post cites "over 1,000 vulnerabilities" disclosed for the Linux kernel. The LWN link is Debian advisory DSA-6528-1 (Sep 29, 2026), which lists **1,313 unique CVE IDs** by my count.
- Independent prior framing: Martin Kleppmann (Dec 2025) predicted AI would make formal verification mainstream, because proof checkers reject hallucinated proofs. He said the hard part would move to writing the spec.
- Theorem's roadmap (company claim): 95% of nixpkgs' machine code could be verified for about $134M by end of 2027, "if models can be made to improve at verification much faster than they improve overall". OpenSSL's proof would cost about $220K at today's rates.

## 5. What's contested / limitations

**Stated by the authors (quote these, not the HN framing):**
- "'Formally verified' does not mean 'bug-free.'"
- Only single-threaded, static RISC-V binaries linked against musl are covered, while most deployments are x86/ARM with dynamic glibc.
- ASan does not catch all memory-safety bugs. Not all entry points were verified. Dead code is not covered. Callers can still misuse the library.
- Reward-hacking risk from Claude patching code (footnote 6).
- The trusted base includes the RISC-V/Linux models, the theorem statements, and Rocq, plus (footnote 5) the hardware, OS and OCaml compiler.
- Appendix: the proofs are "verbose". Human proof engineers "would have immediately introduced abstractions". "It remains to be seen whether agents can scale this verbose proof style directly to more complex programs". MachCSL "suggests that the answer might be no".

**Gaps I found by reading the released artifacts (strongest counterpoint, from Theorem's own repo):**
- **Termination is not proven in the public release.** The post says Claude proved programs "will always exit normally". The proofs README says: "An agreement statement does not exclude a run that never ends. Only a halts statement does. No proof in this release proves a halts statement, so none of them rules out a run that never ends." The appendix agrees: a trace "simply ends" on a crash or a silent infinite loop. I could not tell whether any unreleased proof covers termination. Writer: phrase it as "never crashes on covered inputs", not "always exits".
- **The public subset is smaller than the headline.** The README lists "60 entry points in 25 libraries". Across all OSS-Fuzz statements: "20,164 statements: 138 proved ... 19,797 open." The post says it withholds proofs for patched or unpatched bugs, so the gap is explained, but readers can only check about a quarter of the 239.
- **Memory premise.** "The budget is a premise: an input on which the plain build needs more memory is not covered" (2 GiB for ASan statements).
- **Larger trusted base than the post lists.** The README adds the Rocq `vm_compute` bytecode machine, six standard-library axioms, the `elf-snapshot` and `rocq-read-file` tools that load binaries into Rocq, and the `oft check` wrapper.
- **The LZO "round-trip" example is narrower than described.** The post says the LZO fuzz test "asserts that if you compress an input, then decompress it, the result is the same as the original." The harness code quoted in the appendix asserts only `r == LZO_E_OK && decompressed_len == size`, i.e. that both steps succeed and the length matches. The appendix's own description is "gets back exactly as many bytes as it started with". **This is my reading of the quoted code, not a source's claim.** I may be missing a later memcmp that the excerpt leaves out. Flag it as unverified and don't headline it.
- **OSS Verify reports are not human-reviewed by default.** Theorem FAQ: "Findings and patches are generated by AI models, and we don't promise that a person reviews them before we send them." This is relevant to the maintainer-burden debate.

**HN objections (Social; one commenter each unless noted):**
- *Spec/validation gap, the most common theme.* "How do you know what the LLM proved is what you want?" (woggy). Verification vs validation (mentalgear). "Is the spec also AI generated, and could the models lie to make a spec they can verify?" (adamddev1). Counter-reply from nemo1618: one generic Rocq theorem applies to every binary, and you write properties as ordinary asserts.
- *Not "real" formal verification.* gr_norm: "not formal verification in the sense of a correctness proof against a full specification". 1aqaf-12-dq: "they cheat yet again, take existing test suites". fathermarz: "closer to validation than verification."
- *Scaling wall / "convex hull"* (top comment, jaykru). He quotes the appendix's MachCSL caveat. Reply from author Jason Gross: "In software verification, you can verify just about all the software that exists despite the convex hull hypothesis, because the bottleneck is just scale."
- *Methodology awkwardness.* jsenn questions whether routing through ASan "makes it seem like this is less general than it sounds".
- *Python interpreter not published.* anonymous908213, hostile in tone: "Anthropic would have published it if they did". Also asks why random programs were used instead of real-world Python.
- *Lean/LLM gaming precedent.* j16sdiz cites a case where Lean checked but the paper didn't match. rafaelRiv: "llms tend to try to remove all type check and cheat."
- *Positive/practitioner.* nemo1618: "No human would dream of writing 600,000 lines of Rocq to verify one binary... it's about using scale itself as the basis of a new technique." sestep reports merging agent PRs backed by Rocq equivalence proofs at work (closed source). malisper (pgrust) reports proving about 12% of Postgres C behaves the same as his Rust port, single-threaded only, and a reply objects that concurrency is the hard part.
- *Marketing fatigue.* "One wonders how deep is Anthropic's queue of marketorials" (cadamsdotcom). "shovels sellers" (hirako2000).

## 6. What's next

- Anthropic says broader scope "is well within reach", via semantics for more architectures and OS behaviors such as x86. Claude-generated x86 semantics already exist and boot an Ubuntu userspace (footnote 7, company claim).
- Theorem: free OSS Verify enrollment (PR to theorem-labs/oss-verify; static riscv64 builds required), and the Nix roadmap. Theorem's Oct 19 edit claims verification speed "doubled about every two months" between May and September 2026 on its 36-task eval, a company eval.
- Open questions to watch: whether outside groups re-check the released proofs, whether halts or termination proofs land, whether x86/ARM and multithreading get covered, and whether the agent-style verbosity hits the wall that MachCSL experience predicts.

---

## Key numbers (all Anthropic/Theorem claims unless noted)

| Number | Value | Source |
|---|---|---|
| Entry points / libraries proved | 239 / 123 | post |
| Lines of Rocq in passing proofs | ~180M (of ~1B written) | post + appendix |
| Typical proof | ~600K lines, ~1,400 files | post + appendix |
| Median binary | 18,000 RISC-V instructions | post |
| Input bound | < 64 MB (64 MiB) | post / appendix |
| Publicly released | 60 entry points / 25 libraries; 138 statements proved of 20,164 | Theorem README |
| Token efficiency | Opus 5.5 proves half of 36 tasks with ~40% fewer tokens than Opus 5 | post |
| Shared workspace savings | 17% fewer tokens | post |
| Python interpreter agreement | 99.95% of 1.7M random programs; 7/7 injected bugs broke the proof vs 2/7 caught by random tests | post + appendix |
| seL4 | 2.2 py build, ~20 py proof (9 py frameworks, 11 py seL4-specific) | seL4 TOCS 2014 paper (peer-reviewed) |
| Linux CVEs in the linked advisory | 1,313 unique IDs (my count) | LWN/Debian DSA-6528-1 |
| Nixpkgs estimate | ~$134M for 95% of machine code by end 2027 (conditional) | Theorem blog |

## Quotable lines

1. "This doesn’t mean these libraries contain no bugs. Instead, it means that any remaining bugs either are to be found within the artifacts listed above or are outside the scope of Claude’s proof." (https://www.anthropic.com/research/formal-verification)
2. "No proof in this release proves a halts statement, so none of them rules out a run that never ends." (https://github.com/theorem-labs/oss-verify-proofs, README)
3. "No human would dream of writing 600,000 lines of Rocq to verify one binary. ... it's about using scale itself as the basis of a new technique." (nemo1618, https://news.ycombinator.com/item?id=50205258)

## Also in this thread (suggestions)

- MachCSL (Kaashoek and Zeldovich, arXiv 2609.04043, preprint): agents helped verify the xv6 kernel on RISC-V with concurrency. Found 11 xv6 bugs, 1 Sail RISC-V bug and 1 Sail-to-Lean extraction bug; the effort took 102 days. https://arxiv.org/abs/2609.04043
- Martin Kleppmann, "Prediction: AI will make formal verification go mainstream" (Dec 2025). https://martin.kleppmann.com/2025/12/08/ai-formal-verification.html
- Theorem, "Bootstrapping the Verified Software Stack" (Sep 29, 2026). https://theorem.dev/blog/verified-software-stack/
- Anthropic, "Using Claude to reduce the attack surface of code" (Oct 20, 2026, listed as related on the post; not read). https://www.anthropic.com/research/attack-surface-reduction

## Unverified / gaps

- I could not verify CVE-2026-56132 (libexpat) against NVD or the libexpat changelog. I did not fetch them.
- The PDF reader, the decade-old logic bug, and the "hundreds of bugs" count rest on Anthropic's word, and the libraries are unnamed.
- The Python interpreter code and the x86 semantics are not published, as far as I could find.
- Whether unreleased proofs include halts/termination statements.
- Whether the LZO harness has a content check beyond the excerpt in the appendix.
- The GitHub API was blocked (403 in this session), so I read the READMEs through raw.githubusercontent.com. I did not browse the proof files or SCOPE.md.
- No independent expert write-up found. Press coverage I found (lavx.hu and others listed in search) restates the post. WebProNews and DevOps.com were behind a JS/cookie wall.
- The 36-task token comparison uses shrunken programs (283–2,491 instructions, 64-byte inputs, a "mini-ASan"; appendix). It is not clear how well it carries over to full-size proofs.
