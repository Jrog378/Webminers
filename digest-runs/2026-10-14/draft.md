---
series: ai-digest
title: "Anthropic AI Self-Replication Test | Eureka Reports Oct 14"
headline: "Anthropic Says Small AI Models May Be Months From Copying Themselves Onto Cheap Gadgets"
dek: "Anthropic tests whether AI can spread itself across cheap devices, a preprint finds that no-think switches leak, and a small sandbox refuses to run behind weak walls."
description: "Anthropic says small AI models may be months from copying themselves onto cheap devices. Plus: reasoning models that keep thinking when told to stop."
datePublished: "2026-10-14T07:00:00-04:00"
dateModified: "2026-10-14T07:00:00-04:00"
coverage: "Sat, Oct 10 – Tue, Oct 13, 2026"
reviewStatus: pending
reviewedBy: "Justin Rogers"
reviewedOn: null
editorsNote: null
hero: null
models: []
formats:
  news: qa
  research: explainer
  invention: comparison
sixty:
  - "Anthropic's Frontier Red Team said on Oct 12, 2026 that a 9-billion-parameter model got AI inference running on 8 of 9 hardware types in its own tests, and that GLM-5.2 was the only one of the open-weight models it tested to reliably complete its simplified end-to-end replication test, reaching all 8 nodes in 4 of 5 trials."
  - "A preprint by Dianqiao Lei, Kevin Qinghong Lin, Pan Lu, Philip Torr and James Zou, which the authors say was accepted to NeurIPS 2026, found that DeepSeek-V4-Flash still wrote out visible reasoning in 99.9% of open-ended answers with its thinking switched off."
  - "Plimsoll, a pre-1.0 open-source sandbox tool from a single author, labels every run with one of four isolation tiers and refuses requests whose minimum it can't meet, though its README says it has no external users yet and no third-party security audit."
sections:
  research:
    claimStatus: preprint
sources:
  - type: Official
    outlet: "Anthropic Frontier Red Team (William Zhou, Daniel Freeman)"
    title: "AI models may be capable of self-replicating without access to a datacenter"
    date: "2026-10-12"
    url: "https://www.anthropic.com/research/self-replicating-ai"
  - type: Reporting
    outlet: "Tom's Hardware (Zak Killian)"
    title: "Anthropic warns of self-replicating AI worm threat that doesn't need data centers to self-improve and spread — current deployment is impractical but could become a worry as tech improves"
    date: "2026-10-13"
    url: "https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropic-warns-of-self-replicating-ai-worm-threat-that-doesnt-need-data-centers-to-self-improve-and-spread-current-deployment-is-impractical-but-could-become-a-worry-as-tech-improves"
  - type: Reporting
    outlet: "eWeek (Kezia Grace Jungco)"
    title: "Anthropic Warns of AI Self-Replication on Smart Devices"
    date: "2026-10-13"
    url: "https://www.eweek.com/news/anthropic-self-replicating-ai-iot-devices/"
  - type: Social
    outlet: "Hacker News"
    title: "AI models may be capable of self-replicating without access to a datacenter"
    date: "2026-10-12"
    url: "https://news.ycombinator.com/item?id=50061603"
  - type: Paper
    outlet: "Lei, Lin, Lu, Torr, Zou (arXiv)"
    title: "Thinking Inertia: LLMs Keep Thinking When Told Not To"
    date: "2026-10-08"
    url: "https://arxiv.org/abs/2610.11765"
  - type: Paper
    outlet: "Lei, Lin, Lu, Torr, Zou (arXiv, full text)"
    title: "Thinking Inertia: LLMs Keep Thinking When Told Not To"
    date: "2026-10-08"
    url: "https://arxiv.org/html/2610.11765"
  - type: Official
    outlet: "GitHub (thinking-inertia)"
    title: "README.md"
    date: "2026-10"
    url: "https://raw.githubusercontent.com/thinking-inertia/code/main/README.md"
  - type: Social
    outlet: "Hugging Face Papers"
    title: "Thinking Inertia: LLMs Keep Thinking When Told Not To"
    date: "2026-10-13"
    url: "https://huggingface.co/papers/2610.11765"
  - type: Paper
    outlet: "Jason Zhu, Hongyu Li (arXiv)"
    title: "Towards Concise and Adaptive Thinking in Large Reasoning Models: A Survey"
    date: "2025-07-13"
    url: "https://arxiv.org/html/2507.09662"
  - type: Paper
    outlet: "Yanda Chen et al. (arXiv)"
    title: "Reasoning Models Don't Always Say What They Think"
    date: "2025-05-08"
    url: "https://arxiv.org/abs/2505.05410"
  - type: Paper
    outlet: "Wenjie Ma et al. (arXiv)"
    title: "Reasoning Models Can Be Effective Without Thinking"
    date: "2025-04-14"
    url: "https://arxiv.org/abs/2504.09858"
  - type: Official
    outlet: "GitHub (plimsollmark)"
    title: "plimsoll"
    date: "2026-10-12"
    url: "https://github.com/plimsollmark/plimsoll"
  - type: Social
    outlet: "Hacker News (cagster)"
    title: "Show HN: Plimsoll, a self-hosted sandbox for code your AI agent writes"
    date: "2026-10-11"
    url: "https://news.ycombinator.com/item?id=50049388"
  - type: Official
    outlet: "GitHub (plimsollmark)"
    title: "SECURITY.md"
    date: "2026-10-12"
    url: "https://github.com/plimsollmark/plimsoll/blob/main/SECURITY.md"
  - type: Official
    outlet: "gVisor"
    title: "gVisor documentation"
    date: "2026-10-14"
    url: "https://gvisor.dev/docs/"
  - type: Official
    outlet: "GitHub (plimsollmark)"
    title: "Self-hosted E2B alternatives for AI-agent code, compared"
    date: "2026-10-11"
    url: "https://github.com/plimsollmark/plimsoll/blob/main/docs/compare/index.html"
  - type: Official
    outlet: "GitHub (plimsollmark)"
    title: "validation.go"
    date: "2026-10-12"
    url: "https://github.com/plimsollmark/plimsoll/blob/main/sandbox/validation.go"
  - type: Reporting
    outlet: "Northflank Blog (Deborah Emeni)"
    title: "Kata Containers vs gVisor"
    date: "2026-04-29"
    url: "https://northflank.com/blog/kata-containers-vs-gvisor"
  - type: Official
    outlet: "GitHub (plimsollmark)"
    title: "isolation-tiers.md"
    date: "2026-10-12"
    url: "https://github.com/plimsollmark/plimsoll/blob/main/docs/isolation-tiers.md"
  - type: Official
    outlet: "GitHub (plimsollmark)"
    title: "docs/notes/pids-limit"
    date: "2026-10-11"
    url: "https://github.com/plimsollmark/plimsoll/blob/main/docs/notes/pids-limit/index.html"
  - type: Official
    outlet: "GitHub (kata-containers)"
    title: "Can't set the number of processes limit in the container"
    date: "2022-08-11"
    url: "https://github.com/kata-containers/kata-containers/issues/4887"
---

## News: Anthropic says small AI models may be months from copying themselves onto cheap gadgets

Anthropic's Frontier Red Team said on Oct 12 that small AI models "may be months away from being capable enough to self-replicate on commercial internet-of-things (IoT) devices, like smart ovens and off-brand Android TV boxes" [[1]](#source-1). The post, by William Zhou and Daniel Freeman, reports the company's own evaluations [[1]](#source-1). Every result below is Anthropic's claim, and its key replication test was, in Anthropic's word, "simplified" [[1]](#source-1).

**What does "self-replicating" mean here?**

Anthropic splits the job into four stages: finding targets, gaining access to run code, getting a model running and spreading further [[1]](#source-1). Its tests focused on getting a model running and largely set the hacking stages aside [[1]](#source-1). Models of 30 billion parameters and under, the internal settings a model learns, can already do many single steps but "make mistakes when composing them end to end," Anthropic says [[1]](#source-1).

**What did the tests show?**

In Anthropic's evaluations, a 9-billion-parameter model "got inference running on 8 of the 9 hardware types we tested" [[1]](#source-1). Inference means running a trained model to produce answers. Tom's Hardware names the model as Qwen3.5-9B and says the hardware ranged from Nvidia Jetson Nano devices to Apple Silicon Macs and at least one PC with an RTX 4090 [[2]](#source-2).

For the replication test, Anthropic built a walled-off network of 8 cloud computers running an Android 15 emulator, software that imitates an Android device [[1]](#source-1). The worm had to hop from node to node through an ADB port that required no login and set up a Llama 3.1 8B model on each [[1]](#source-1). Only GLM-5.2 did it reliably. It reached all 8 nodes in 4 of 5 trials and 7 of 8 in the other, while the other models "fail reliably" [[1]](#source-1).

**Why "simplified"?**

Anthropic kept the hacking step trivial and calls the result "an upper bound on real-world success" [[1]](#source-1). GLM-5.2 also wasn't copying itself. Tom's Hardware notes that it ran on a separate server and set up "the much smaller Llama 3.1 8B" on each target [[2]](#source-2).

In another experiment, successive copies of Qwen3.5-9B passed notes forward, which lifted setup success from 45% to between 61% and 84%, Anthropic says [[1]](#source-1). eWeek points out that those copies "were restarted by the researchers rather than reproducing autonomously" [[3]](#source-3). Advice from a stronger frontier model, Opus 4.8, did not measurably help [[1]](#source-1).

**Did an AI copy itself across 15 TV boxes?**

No. Anthropic ran one model, Gemma4-26B-A4B, split across 15 off-brand Android TV boxes that cost about $55 each [[1]](#source-1). It produced 0.39 tokens, or word pieces, per second [[1]](#source-1). That was a test of running a model on cheap hardware, not a replication.

**How close is a real threat?**

Anthropic projects that if small models keep improving at their historical rate, "they'll match this capability level by the end of this year" [[1]](#source-1). That forecast rests on a general capability index rising 13.7 points a year, which Anthropic calls "only a rough estimate" [[1]](#source-1).

It also describes a slow threat. Each 9B copy takes one to two days or more to set up, and a swarm the size of the Kimwolf botnet, a network of hijacked devices, would have "at most about 40 H100s-worth of inference," which Anthropic calls "a tiny amount of compute in absolute terms" [[1]](#source-1). Tom's Hardware estimates that infecting 2 million devices would take about 6,300 agent-years, and notes that real-world security controls were not tested [[2]](#source-2). "The threat is real, but still in the future, at least for now," its subheading says [[2]](#source-2).

Readers were skeptical too. An early comment on a Hacker News thread (106 points, 109 comments when checked) called the post "fearmarketing," while granting "there does seem to be a cool technical demo here" [[4]](#source-4). Other commenters doubted the year-end projection for small models [[4]](#source-4).

**What does Anthropic suggest?**

"We don't yet have a full rogue replicator," the post says [[1]](#source-1). A replicator spreading at scale would leave a network signature that traffic monitoring could flag [[1]](#source-1). Anthropic's closing advice: "We should aim to harden our systems to make it difficult for such replicators to spread, but also prepare to deal with a world where they are here to stay" [[1]](#source-1).

## Research: Reasoning models keep "thinking" out loud after being told not to, preprint finds

Telling a reasoning model to skip its thinking often fails, according to a preprint posted to arXiv on Oct 8 by Dianqiao Lei, Kevin Qinghong Lin, Pan Lu, Philip Torr and James Zou [[5]](#source-5). With thinking switched off, DeepSeek-V4-Flash still wrote out visible reasoning in 99.9% of open-ended answers [[6]](#source-6).

The arXiv version is a preprint. The authors, from Tsinghua University, the University of Oxford and Stanford University, say it has been accepted to NeurIPS 2026, in both the arXiv comments field [[5]](#source-5) and the project README [[7]](#source-7).

**What they found.** Reasoning models write out step-by-step working before they answer, and many now come with a switch to turn that off. The authors found that "explicit no-think controls cannot reliably eliminate visible inference" [[5]](#source-5). They call the effect "Thinking Inertia," and it grows "as the answer space opens" [[5]](#source-5). With thinking off, most models gave answer-only replies 80% to 100% of the time on yes/no questions, but almost never on open-ended ones [[6]](#source-6). GPT-5.4 was the main exception when a step-by-step prompt was added: it stayed answer-only on yes/no and multiple-choice questions where other models resumed reasoning [[6]](#source-6).

**How it works.** Picture a student told "just write the answer" who keeps showing their work anyway. The team tested six prompt settings, from thinking switched on to a strict demand for a bare answer, on six models [[5]](#source-5): three sizes of Qwen3, DeepSeek-V4-Flash, GPT-5.4 and Gemini-3-Flash [[6]](#source-6). Questions came from six benchmarks, from yes/no sets like BoolQ to math sets like GSM8K and MATH, for 572,688 outputs in all [[6]](#source-6). A GPT-5.5 judge flagged whether the text before each answer held a real reasoning step. On 600 outputs checked by people, the human labels agreed with that judge 98.8% of the time and with a second judge, Claude Opus 4.8, 96.7% of the time [[6]](#source-6).

Pushing harder had a price. On open-ended tasks, a strict "answer directly" prompt raised the answer-only rate from near zero to about 40%, but cut accuracy by about 15 percentage points [[6]](#source-6). Pre-filling the reply with "The answer is" did not reliably work either [[6]](#source-6).

The question's format mattered more. When the same multiple-choice questions were rewritten as yes/no for Qwen3-32B, answer-only replies rose from 10.5% to 62.5%, while accuracy held at 77.8% versus 78.9% [[6]](#source-6).

**Why it matters.** The paper warns that "stopping explicit reasoning cannot be assumed from model settings or instructions alone" [[6]](#source-6). The authors suggest "task-aware routing": answer directly when the question gives enough support, and keep the reasoning when cutting it would cost accuracy [[6]](#source-6). "Knowing when NOT to think may be just as important as knowing how to think," the first author wrote on Hugging Face [[8]](#source-8).

**What's still uncertain.** The basic observation is not new. A 2025 survey already noted that "Zhu et al. (2025a) find that LRMs do not always follow the instruction to skip thinking," where LRMs are large reasoning models [[9]](#source-9). This paper adds a way to measure it and the link to answer format.

The study also looks only at visible text, not hidden computation, cost or speed [[6]](#source-6). The authors warn: "Visible compliance should not, however, be equated with lower inference cost when hidden reasoning may remain active" [[6]](#source-6). Other work shows that visible reasoning does not always reflect a model's actual process [[10]](#source-10), and that skipping thinking by prompt "can be surprisingly effective" [[11]](#source-11).

One Hugging Face commenter was blunter: "if you train a model to think, it'll think" [[8]](#source-8). The authors list code, tool use, other languages and multi-turn chats as untested, and want to train models for "calibrated stopping rather than uniform suppression" [[6]](#source-6).

## Cool Invention: Plimsoll labels how strong every sandbox is and refuses to run code behind a weaker wall

Plimsoll runs untrusted code, such as code an AI agent wrote, inside a sandbox, and "every result says how strong that sandbox was" [[12]](#source-12). A request can demand a minimum strength: "if the sandbox is weaker, nothing runs" [[12]](#source-12). Its author shared the open-source project on Hacker News on Oct 11 [[13]](#source-13).

The name comes from the Plimsoll line, the load limit painted on a ship's hull. Strength comes in four tiers, weakest first: process, container, kernel and vm [[12]](#source-12). Plimsoll doesn't build the walls. It hands that job to gVisor and Firecracker and acts as the gatekeeper in front of them [[14]](#source-14). gVisor "intercepts application system calls and acts as the guest kernel," the basis of the kernel tier [[15]](#source-15).

| Setup | Strongest wall | Says which wall you got? | Refuses runs below a minimum? |
| --- | --- | --- | --- |
| Plimsoll, self-hosted with gVisor | Kernel tier; a TypeScript compile-and-run took 4.1 s vs 1.95 s in a plain container, in the author's test [[16]](#source-16) | Yes, on every result [[12]](#source-12) | Yes, if the request sets a floor [[12]](#source-12) [[17]](#source-17) |
| Plimsoll with E2B or Docker Cloud microVMs | VM tier, billed by the second [[16]](#source-16) | Yes, but inferred from which provider is configured [[14]](#source-14) | Yes, if the request sets a floor [[12]](#source-12) [[17]](#source-17) |
| Six hosted sandbox services the author checked | Can vary by host; Northflank uses gVisor "where nested virtualisation is unavailable" [[18]](#source-18) | No, per the author [[19]](#source-19) | No, per the author [[19]](#source-19) |

The idea came from a JavaScript sandbox that "advertised a MemoryLimit that did nothing," the author writes [[19]](#source-19). In tests on one laptop, the author found that Docker accepted a 64-process limit under the Kata runtime, yet 200 of 200 processes started [[20]](#source-20). The author says a Kata issue about the limit not reaching the guest, opened in 2022 [[21]](#source-21), was closed as not planned [[20]](#source-20).

**The caveat.** The label is evidence, not proof. The README says the tier "is not attestation, cryptographic proof from the hardware of what software is running" [[12]](#source-12). A compromised Docker daemon or E2B control plane "defeats the evidence," the security notes add [[14]](#source-14). The per-request floor is also opt-in, so a request that sets none skips the check [[17]](#source-17). The project is "pre-1.0, single author, no external users yet," and has had no third-party security audit [[12]](#source-12). As the author put it, "the bus factor is one" [[13]](#source-13).
