---
series: ai-digest
title: "AI Labs Say Models Refuted ETH | Eureka Reports Oct 28"
headline: "OpenAI and Anthropic Say AI Models Refuted the Exponential Time Hypothesis, Plus Chat Models That Miss Faked Seconds in Video and a Local File Agent"
dek: "Two labs claim a major computer science result that still awaits human checking, chat models guess on doctored video, and a desktop agent checks its own small models."
description: "OpenAI and Anthropic say AI models refuted the Exponential Time Hypothesis. Plus a deepfake forensics benchmark and Hob, a local file agent."
datePublished: "2026-10-28T07:00:00-04:00"
dateModified: "2026-10-28T07:00:00-04:00"
coverage: "Sat, Oct 24 – Tue, Oct 27, 2026"
reviewStatus: pending
reviewedBy: "Justin Rogers"
reviewedOn: null
editorsNote: null
hero: null
models:
  - model: "Claude Sonnet 5.5"
    roles: [orchestration, scouting, format planning, fact-checking, SEO, image search]
  - model: "Claude Opus 5.5"
    roles: [topic selection, deep research, writing, editing]
formats:
  research: explainer
  news: qa
  invention: by-the-numbers
sixty:
  - "OpenAI and Anthropic each say an internal AI model found an algorithm that refutes the Exponential Time Hypothesis, though Anthropic says its version beats brute force only above 10 to the power 10,000 variables and no person is known to have checked its Lean proof."
  - "In a preprint that is not yet peer-reviewed, researchers report that the audio-visual chat models Qwen2.5-Omni and Qwen3-Omni scored only 51 to 52 AUROC, about a coin flip, at spotting a few edited seconds in long videos, while probes on the same models' internal features reached 90.8 for audio and 80.8 for visual."
  - "Hob, an MIT-licensed desktop app from Frigade, runs a file-handling AI agent on local models from Gemma 4 E4B Compact up to gpt-oss 120B on machines with at least 8 GB of RAM, and uses code guards to catch small models that claim work they never did."
sections:
  research:
    claimStatus: preprint
sources:
  - type: Paper
    outlet: "OpenAI (openai/math preprint)"
    title: "The Exponential Time Hypothesis is False"
    date: "2026-10-25"
    url: "https://raw.githubusercontent.com/openai/math/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
  - type: Paper
    outlet: "Claude, Anthropic (formal-math)"
    title: "A 2^{o(n)} Time Algorithm for 3-SAT"
    date: "2026-10-26"
    url: "https://raw.githubusercontent.com/anthropics/formal-math/main/eth/paper.pdf"
  - type: Reporting
    outlet: "TechCrunch"
    title: "Frontier AI labs say their models refuted the Exponential Time Hypothesis. What does that mean?"
    date: "2026-10-27"
    url: "https://techcrunch.com/2026/10/27/frontier-ai-labs-say-their-models-refuted-the-exponential-time-hypothesis-what-does-that-mean/"
  - type: Official
    outlet: "Anthropic (GitHub, formal-math)"
    title: "formal-math/eth README"
    date: "2026-10-26"
    url: "https://raw.githubusercontent.com/anthropics/formal-math/main/eth/README.md"
  - type: Official
    outlet: "OpenAI (GitHub)"
    title: "openai/math"
    date: "2026-10-26"
    url: "https://github.com/openai/math"
  - type: Reporting
    outlet: "Scientific American"
    title: "Dueling proofs from OpenAI and Anthropic astound scientists"
    date: "2026-10-27"
    url: "https://www.scientificamerican.com/article/dueling-proofs-from-openai-and-anthropic-astound-scientists/"
  - type: Reporting
    outlet: "Forklog (AI-translated secondary reporting)"
    title: "OpenAI says its AI refuted the Exponential Time Hypothesis"
    date: "2026-10-27"
    url: "https://forklog.com/en/openai-says-its-ai-refuted-the-exponential-time-hypothesis/"
  - type: Paper
    outlet: "AV-FABLE authors (arXiv abstract)"
    title: "AV-FABLE: Audio-Visual Manipulation Forensics in Long-Form Videos"
    date: "2026-10-24"
    url: "https://arxiv.org/abs/2610.33413"
  - type: Paper
    outlet: "AV-FABLE authors (arXiv full text)"
    title: "AV-FABLE: Audio-Visual Manipulation Forensics in Long-Form Videos"
    date: "2026-10-24"
    url: "https://arxiv.org/html/2610.33413v1"
  - type: Paper
    outlet: "FakeParts authors (arXiv)"
    title: "FakeParts: a New Family of AI-Generated DeepFakes"
    date: "2025-08-28"
    url: "https://arxiv.org/abs/2508.21052"
  - type: Paper
    outlet: "Feng et al. (arXiv, ICML 2026)"
    title: "Explainable Forensics of Manipulated Segments in Untrimmed Long Videos"
    date: "2026-06-01"
    url: "https://arxiv.org/abs/2606.02402"
  - type: Paper
    outlet: "Deepfake-Eval-2024 authors (arXiv)"
    title: "Deepfake-Eval-2024: A Multi-Modal In-the-Wild Benchmark of Deepfakes Circulated in 2024"
    date: "2025-03-04"
    url: "https://arxiv.org/abs/2503.02857"
  - type: Official
    outlet: "Frigade (Hob docs)"
    title: "Hob docs (docs/README.md)"
    date: "2026-10-27"
    url: "https://raw.githubusercontent.com/FrigadeHQ/hob/main/docs/README.md"
  - type: Official
    outlet: "Frigade (GitHub, FrigadeHQ/hob)"
    title: "LICENSE"
    date: "2026-10-27"
    url: "https://raw.githubusercontent.com/FrigadeHQ/hob/main/LICENSE"
  - type: Official
    outlet: "Frigade (GitHub, FrigadeHQ/hob)"
    title: "README.md"
    date: "2026-10-27"
    url: "https://raw.githubusercontent.com/FrigadeHQ/hob/main/README.md"
  - type: Social
    outlet: "Hacker News (Show HN thread, item 50246238)"
    title: "Show HN: Hob - Open-source, on device alternative to Claude Cowork and ChatGPT"
    date: "2026-10-26"
    url: "https://news.ycombinator.com/item?id=50246238"
  - type: Official
    outlet: "Hob"
    title: "Hob"
    date: "2026-10-27"
    url: "https://www.hob.chat/"
  - type: Official
    outlet: "Frigade (GitHub, FrigadeHQ/hob)"
    title: "app/src/main/agent/claims.ts"
    date: "2026-10-27"
    url: "https://raw.githubusercontent.com/FrigadeHQ/hob/main/app/src/main/agent/claims.ts"
  - type: Official
    outlet: "Frigade (GitHub, FrigadeHQ/hob)"
    title: "app/src/main/agent/repeat.ts"
    date: "2026-10-27"
    url: "https://raw.githubusercontent.com/FrigadeHQ/hob/main/app/src/main/agent/repeat.ts"
  - type: Official
    outlet: "Frigade (GitHub, FrigadeHQ/hob)"
    title: "app/src/main/python/landlock.ts"
    date: "2026-10-27"
    url: "https://raw.githubusercontent.com/FrigadeHQ/hob/main/app/src/main/python/landlock.ts"
---

## News: OpenAI and Anthropic say their AI models refuted the Exponential Time Hypothesis

OpenAI and Anthropic each say an internal AI model found an algorithm that refutes the Exponential Time Hypothesis, or ETH, a central conjecture in computer science [[1]](#source-1) [[2]](#source-2). Both results are posted as preprints, not peer-reviewed papers. No person is known to have checked Anthropic's machine-checked proof [[2]](#source-2).

**What is the Exponential Time Hypothesis?** It is about 3-SAT, a logic puzzle. You get a long list of conditions, each joining three true-or-false variables, and must say whether any setting of the variables satisfies them all. ETH holds that, in the worst case, answering this for n variables takes time that grows exponentially with n [[1]](#source-1).

Plenty of research leans on it. A literature search run by Claude found more than 800 papers with results that hold only if ETH, or a stronger hypothesis, is true [[2]](#source-2). Ryan Williams of MIT told TechCrunch that many ETH-dependent papers "will need to be revisited" if the labs' claims hold up [[3]](#source-3).

**What exactly do the labs claim?** Both describe algorithms that run in subexponential time, meaning the running time grows more slowly than any exponential [[1]](#source-1) [[4]](#source-4). The previous record for a deterministic 3-SAT algorithm, O(1.328^n), was still exponential [[2]](#source-2).

Anthropic says an internal Claude research model found the core algorithm on Oct 16, using 14 million output tokens "and no human input" [[2]](#source-2). Researchers then helped improve the presentation [[2]](#source-2). OpenAI's preprint, "The Exponential Time Hypothesis is False," is dated Oct 17 and was revised Oct 25 [[1]](#source-1). It comes from an unnamed internal model [[5]](#source-5). It was one of three big results OpenAI released, spanning "math, physics and computer science" [[6]](#source-6) [[3]](#source-3). Anthropic's paper acknowledges OpenAI's claim as independent and concurrent [[2]](#source-2).

TechCrunch reports that Anthropic mathematician Levent Alpöge suggested OpenAI was basing its solutions on pre-existing work [[3]](#source-3). That comes from TechCrunch's account. We could not find his original post.

**Is the proof machine-checked?** Anthropic's is, with fine print. It used Lean, software that checks every step of a proof mechanically. Anthropic says its Lean proofs rest only on Lean's three standard axioms and pass three checkers, including one built independently, called nanoda [[2]](#source-2).

But AI models wrote that Lean code, and other instances of the same models reviewed it. "At the time of writing no person is known to have checked it," the paper says [[2]](#source-2). The Lean proof also differs from the printed proof, and only AI models compared the two [[2]](#source-2). The README adds that "no machine checks that this file says what the paper says" [[4]](#source-4).

OpenAI's repository says its results are "at different stages of verification" and not all have Lean versions [[5]](#source-5).

**Does it settle P vs NP or make computers faster?** No to both, for now. Anthropic says its result "does not bear on the P vs NP question directly" and yields no practical algorithms [[2]](#source-2). Its bound beats brute-force search, which tries every setting, only when n tops 10 to the power 10,000 on its test formulas [[2]](#source-2). Brute force "is already impractical for n = 100," the paper notes [[2]](#source-2). Scientific American calls OpenAI's algorithm "just a tiny bit faster than exponential time" [[6]](#source-6).

Still, Williams told TechCrunch that every computer scientist "should probably put a little more weight on the plausibility of P = NP" [[3]](#source-3). On encryption, Williams said OpenAI "checked, and they were reasonably confident" the result implied no breaks [[3]](#source-3). That is OpenAI's own check, relayed secondhand.

**Who is checking the work?** OpenAI's outside reviewers for the result are Williams, Russell Impagliazzo and Ramamohan Paturi, with David Gross leading a physics group, according to Forklog, an AI-translated secondary report [[7]](#source-7). Forklog reports the researchers stressed their participation is not an endorsement, and that OpenAI said participation is voluntary and unpaid [[7]](#source-7).

Williams sees "two or three alien-looking parts" in OpenAI's proof [[3]](#source-3). "I don't think that OpenAI's algorithm could possibly be the best algorithm you can get," he said [[3]](#source-3). He and colleagues released an open letter asking scientists for feedback [[3]](#source-3). He had earlier called OpenAI's release of proofs a "DDOS attack on mathematicians" [[3]](#source-3). Scientific American notes that the model behind OpenAI's proofs remains proprietary [[6]](#source-6).

## Research: AI chat models can't spot a few faked seconds in long videos, but their internals can

Audio-visual AI chat models did no better than a coin flip at spotting a few doctored seconds in long videos, a preprint posted to arXiv on Oct 24 reports [[8]](#source-8) [[9]](#source-9). Yet the evidence was sitting inside the same models [[8]](#source-8). The paper, which introduces a benchmark called AV-FABLE, is not yet peer-reviewed.

"A few manipulated seconds can change the meaning of an otherwise authentic video," the authors write [[9]](#source-9). A replaced sentence can change what someone seems to have said. An inserted sound can suggest an event that never happened [[9]](#source-9).

**What they found.** The team tested Qwen2.5-Omni and Qwen3-Omni, chat models that take in both sound and pictures. Asked directly, they scored only 51 to 52 detection AUROC [[9]](#source-9). AUROC is a 0-to-100 score for telling fakes from real footage, and 50 is a coin flip.

Then the researchers used linear probes, simple classifiers that read a model's internal signals, on the same models' frozen perception features. Those reached 90.8 AUROC on audio and 80.8 on visuals [[9]](#source-9). The evidence "is encoded in these representations but not effectively exposed through language outputs," the authors suggest [[8]](#source-8).

So they built a detector around that idea, called NFSR. It reads frozen Qwen3-Omni audio and visual features, with separate decoders that mark when each track was edited [[9]](#source-9). On test videos like its training data, it scored 96.04 detection AUROC and 91.30 AV-mAP, a 0-to-100 score for pinpointing edits on the audio and visual timelines [[9]](#source-9). A rival method, UMMAFormer, reached 84.76 AV-mAP on the same features [[9]](#source-9). NFSR's false-alarm rate stayed between 2.97% and 4.67%, close to its 5% budget [[9]](#source-9).

**How it works.** AV-FABLE holds 16,650 pairs of videos, 33,300 in all and about 998 hours [[9]](#source-9). Each fake has a "pristine twin," its untouched original, put through the same cropping and export steps. That stops a detector from cheating on file format: classifiers given only metadata reach at most 54.6 AUROC [[9]](#source-9).

Videos run a median of 88 seconds, and edits cover a median of 9.45% of each fake [[9]](#source-9). The median edited event lasts about 9 seconds [[9]](#source-9). Footage comes from existing research datasets: ActivityNet, EPIC-KITCHENS-100 and HDTF [[9]](#source-9). Gemini 3.7 Flash, as the paper names it, picked a real event in each video and planned the edit. A second model checked that the edit could be done [[9]](#source-9). Two human reviewers checked all 22,153 events, and a third settled the 7.7% where they disagreed [[9]](#source-9).

Scoring keeps the audio and visual tracks apart. "A joint timeline can therefore reward a prediction for finding the right moment even when it identifies the wrong stream," the authors write [[9]](#source-9).

**Why it matters.** Partial fakes fool people. A separate study, FakeParts, found they cut human detection accuracy by up to 26% compared with traditional deepfakes [[10]](#source-10). An earlier benchmark, TASLE, tackled AI-made segments hidden in long real videos, but only on the visual track [[11]](#source-11) [[9]](#source-9). AV-FABLE adds audio and uses held-out TASLE videos as one of its tests [[9]](#source-9). NFSR posted the top AV-mAP in all three tests on data unlike its training set [[9]](#source-9).

**What's still uncertain.** These are the authors' own numbers on their own benchmark, with no outside replication. On unfamiliar data, finding visual edits "remains the main open problem," with visual overlap scores of 26.42 to 41.21 [[9]](#source-9). Shrinking video to 360p cut visual localization from 53.1 to 10.9 mAP in one test [[9]](#source-9). The authors concede that "pipeline-specific cues cannot be fully excluded," so the detector may be learning traces left by the generators [[9]](#source-9). Explaining what changed is the hardest part, and models often misidentify the operation or target [[9]](#source-9).

Real-world fakes are tougher still. Deepfake-Eval-2024, by other researchers, found open-source detectors' AUC fell 50% for video and 48% for audio on deepfakes from the wild [[12]](#source-12). AV-FABLE has not faced that test.

The dataset, code and weights are promised but not released. Where licenses restrict it, source media won't be shared; the release will offer annotations and reconstruction utilities instead [[9]](#source-9). The authors say they do not provide end-to-end pipelines "intended for impersonation, fraud, or other malicious uses" [[9]](#source-9). The team is from Tsinghua University and Peking University, with corresponding authors Jun Zhou and Xiu Li [[9]](#source-9).

## Cool Invention: Hob runs a file-handling AI agent on your own computer, with code guards for small models

Hob is a desktop app from Frigade that runs an AI agent for your files on your own machine, using local models through llama.cpp [[13]](#source-13). It is open source under the MIT license [[14]](#source-14), with downloads for Mac, Windows and Linux [[15]](#source-15). Its developer, who posted it to Hacker News on Oct 26, says small models claimed tool results without calling the tools or got stuck in loops. So he spent "a fair amount of the work building guards vs tweaking prompts" [[16]](#source-16). Hob's site says it is backed by Y Combinator [[17]](#source-17).

- **8 GB.** That's the minimum RAM, and the Mac version needs Apple Silicon [[17]](#source-17).
- **Four model sizes.** The docs pair Gemma 4 E4B Compact with 8 GB Macs, E4B with 16 GB, 26B with 24 GB and up, and gpt-oss 120B with workstations [[13]](#source-13).
- **15 tokens a second.** Hob picks "the smartest one that stays above about 15 tokens a second with room for a decent context," the developer wrote [[16]](#source-16).
- **Zero telemetry.** "Chats and files stay on your machine, and there is no telemetry," the docs say, and folder changes need your approval and can be undone [[13]](#source-13).
- **3 times in a row.** A guard that checks whether files a reply names exist on disk, because "checking the files instead of the words works in any language" [[18]](#source-18), sits beside a loop guard that cuts off a reply when a long passage repeats three times in a row [[19]](#source-19).

**The honest caveat.** We found no independent review of Hob, and the developer has published no benchmarks yet [[16]](#source-16). One Hacker News tester said, "The models are really dumb, mainly" [[16]](#source-16). Another commenter, who said they would upvote every such app, noted that "there are a zillion of these" [[16]](#source-16). The Windows build isn't yet signed with a Microsoft certificate, so Windows shows a warning [[17]](#source-17). The developer says each system gets its own sandbox tool [[16]](#source-16), but we read only the Linux code. It says that on older kernels without Landlock, "the code runs unlimited" [[20]](#source-20).

## Proofs, probes and file checks: looking past what the model says

All three stories check what an AI did instead of what it said. Anthropic's Lean files, AV-FABLE's feature probes and Hob's disk checks each go around the model's own answer, and each check still awaits human or independent review.
