---
series: ai-digest
title: "FlashProve Proof of Which AI Answered | Eureka Reports Nov 4"
headline: "Can Anthropic's FlashProve prove which AI model answered you?"
dek: "Anthropic shares a prototype for proving a reply's source, 18 AI models are tested as teammates, and an AI edits another network's weights."
description: "Anthropic says FlashProve can prove which model wrote a reply, at 110 tokens/s. Plus: AI agents tested as teammates, and AI that edits weights."
datePublished: "2026-11-04T07:00:00-05:00"
dateModified: "2026-11-04T07:00:00-05:00"
coverage: "Sat, Oct 31 – Tue, Nov 3, 2026"
reviewStatus: pending
reviewedBy: "Justin Rogers"
reviewedOn: null
editorsNote: null
hero: null
models:
  - model: "Claude Opus 5.5"
    roles: [research, writing, editing]
  - model: "Claude Sonnet 5.5"
    roles: [scouting, fact-checking, SEO]
formats:
  news: claim-vs-evidence
  research: by-the-numbers
  invention: qa
sixty:
  - "Anthropic released FlashProve on Nov. 2, an open-source prototype it says can prove a reply came from a committed model, generating proofs for Llama 4 Maverick at about 110 tokens per second on one GPU at roughly 70 to 95 times the GPU time of serving the model normally."
  - "A preprint from Sean Wu, James Zou and colleagues tested 18 AI models as teammates on 240 tasks, and the best, Gemini 4 Argon at high reasoning effort, scored only 82.2 out of 100."
  - "MIT CSAIL researchers say OpenAI's GPT-6 Astra edited 0.016% of a small Qwen model's weights and lifted its MATH-500 score from 7.9% to 48.1%, though critic Sean Goedecke says a competent human researcher could have made the same fix."
sections:
  research:
    claimStatus: preprint
sources:
  - type: Official
    outlet: "Anthropic"
    title: "Progress on provable inference for large language models"
    date: "2026-11-02"
    url: "https://www.anthropic.com/research/provable-inference"
  - type: Official
    outlet: "Anthropic (FlashProve repository)"
    title: "Known limits"
    date: "2026-11-02"
    url: "https://raw.githubusercontent.com/anthropics/FlashProve/main/guide/known-limits.md"
  - type: Official
    outlet: "Anthropic (FlashProve repository)"
    title: "What is proved, and of what"
    date: "2026-11-02"
    url: "https://raw.githubusercontent.com/anthropics/FlashProve/main/guide/what-is-proved.md"
  - type: Paper
    outlet: "Gong, Liu and Li (arXiv)"
    title: "Hollow-LLM Attack: Computationally Trivial Weights in Zero-Knowledge Verification of LLM Inference"
    date: "2026-07-30"
    url: "https://arxiv.org/abs/2607.28884"
  - type: Reporting
    outlet: "TechCrunch"
    title: "Anthropic is working on a system to prove AI models' identity"
    date: "2026-11-03"
    url: "https://techcrunch.com/2026/11/03/anthropic-is-working-on-a-system-to-prove-ai-models-identity/"
  - type: Official
    outlet: "Anthropic (FlashProve repository)"
    title: "FlashProve"
    date: "2026-11-02"
    url: "https://raw.githubusercontent.com/anthropics/FlashProve/main/README.md"
  - type: Paper
    outlet: "Wu et al. (arXiv)"
    title: "Measuring AI Agents as Teammates with Collaborative Intelligence"
    date: "2026-11-02"
    url: "https://arxiv.org/abs/2611.02633"
  - type: Paper
    outlet: "Wu et al. (arXiv, full text)"
    title: "Measuring AI Agents as Teammates with Collaborative Intelligence"
    date: "2026-11-02"
    url: "https://arxiv.org/html/2611.02633"
  - type: Official
    outlet: "Zou group (project site)"
    title: "Collaborative Intelligence Release"
    date: "2026-11-02"
    url: "https://zou-group.github.io/collaborative-intelligence/"
  - type: Paper
    outlet: "Khatua et al. (arXiv)"
    title: "CooperBench: Why Coding Agents Cannot be Your Teammates Yet"
    date: "2026-01-19"
    url: "https://arxiv.org/abs/2601.13295"
  - type: Blog
    outlet: "Takehi, Teoh, Zhang and Khattab (blog)"
    title: "Sparks of Weight-Space Programming: LLMs can natively read & write neural network weights"
    date: "2026-11-02"
    url: "https://rikiyat.github.io/blog/weight-space-programming/"
  - type: Official
    outlet: "Qwen (Hugging Face)"
    title: "README.md · Qwen/Qwen3.5-0.8B at main"
    date: null
    url: "https://huggingface.co/Qwen/Qwen3.5-0.8B/blob/main/README.md"
  - type: Official
    outlet: "Hugging Face"
    title: "RikiyaT/Qwen3.5-0.8B-weight-space-programming"
    date: "2026-11-02"
    url: "https://huggingface.co/RikiyaT/Qwen3.5-0.8B-weight-space-programming"
  - type: Commentary
    outlet: "Matthew Honnibal (blog)"
    title: "The 'Astra can read and write weights to improve Qwen' post is misleading"
    date: "2026-11-03"
    url: "https://honnibal.dev/blog/astra-read-write-misleading"
  - type: Commentary
    outlet: "Sean Goedecke (blog)"
    title: "LLMs are not superhuman at reading and writing neural network weights"
    date: "2026-11-03"
    url: "https://www.seangoedecke.com/llms-are-not-superhuman-at-reading-and-writing-neural-network-weights/"
  - type: Commentary
    outlet: "Simon Willison's Weblog"
    title: "Qwen 3.8 27B on my laptop can interpret model weights, too"
    date: "2026-11-03"
    url: "https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/"
---

## News: Can Anthropic prove which AI model actually answered you?

Anthropic on Nov. 2 released FlashProve, an open-source prototype that attaches a cryptographic proof to an AI model's reply [[1]](#source-1). Anthropic says the proof shows the reply came from a model the provider committed to in advance [[1]](#source-1). This is a company research post, not peer-reviewed. We found no independent reproduction of its numbers.

Anthropic writes that a user today "cannot check that the responses came from the specific model that a developer claims is responding, as opposed to one secretly substituted in by a routing service for cost reasons" [[1]](#source-1). A routing service is a middleman that passes requests to one of several models.

FlashProve works in two steps. First, the provider publishes a commitment, a short fingerprint of one exact set of weights, the numbers a model learns in training [[1]](#source-1). Think of it as a sealed envelope whose contents can't be swapped later. Anthropic says this step takes about 39 minutes and covers about 16 million requests [[1]](#source-1).

Then, for each request, a GPU builds a zkSNARK, a type of proof that confirms a computation ran correctly without exposing its private inputs. Anyone with the commitment, prompt and reply can check it on a CPU in about 17 seconds using 24 threads (21 seconds on one thread) [[1]](#source-1).

The proofs hide the weights but not the architecture, the model's overall design [[1]](#source-1). Anthropic tested a 400-billion-parameter open model, Llama 4 Maverick, not Claude [[1]](#source-1). It credits Claude with the speedups: "Claude has produced improvements on zkSNARKs for inference" [[1]](#source-1).

| What's claimed | What the evidence shows |
| --- | --- |
| Proofs arrive at about 110 tokens per second on one H100 GPU, about 19 MB each [[1]](#source-1) | This is Anthropic's own test on one model. Proving costs about 70 to 95 times the GPU time of running the model itself on vLLM serving software [[1]](#source-1). |
| Far faster than before: the only earlier proof of the same model Anthropic knows of took 14.3 hours for 1,000 tokens [[1]](#source-1) | That comparison also comes from Anthropic's post. |
| A valid proof shows the reply came from the committed model | The project's docs add: "A provider can commit to any model it likes, a small or degenerate one included" [[2]](#source-2). |
| The weights stay hidden [[1]](#source-1) | The docs say "We expect, rather than know, that the programs hide the weights" [[3]](#source-3). Timing attacks are out of scope [[1]](#source-1). |
| The system is checked in Lean, a proof-checking language | Only the slow Lean verifier is proved correct. The fast C++ verifier used day to day "carries no formal guarantee" [[1]](#source-1). |

The biggest gap is the third row: users still need someone they trust to vouch that the commitment is the model they paid for.

An independent paper posted to arXiv in July and accepted to the 2026 IEEE Symposium on Security and Privacy makes a related point about such systems [[4]](#source-4). It argues a dishonest provider could keep "the declared architecture and parameter count" while embedding "ghost weights" that do far less work [[4]](#source-4). Its authors conclude that "proof of correct inference is not proof of large-model execution" [[4]](#source-4). It predates FlashProve and does not examine it.

Proofs cover an integer version of the model, and Anthropic says real floating-point or sampled replies "could depart at some position" [[1]](#source-1). In one repository test, the top predicted token differed at 6.81% of positions [[2]](#source-2). Contexts are capped at 1,024 tokens, which Anthropic calls "quite short" next to chat sessions [[1]](#source-1). Two published attacks on Fiat–Shamir, a method these proofs rely on, "have not been examined against this protocol" [[2]](#source-2).

TechCrunch reports "no plans to deploy it at Anthropic or any other lab" [[5]](#source-5), and the code is labeled "not maintained, not accepting contributions" [[6]](#source-6). Anthropic calls the release "intermediate progress" and asks others to "take it, and improve it" [[1]](#source-1). It plans to hide architecture details next [[1]](#source-1).

## Research: How good are AI models at being teammates?

All 18 AI models tested on a new 240-task teamwork benchmark show "clear weaknesses as a teammate," and the best scored only 82.2 out of 100 [[7]](#source-7). The preprint, posted Nov. 2 by Sean Wu, James Zou and colleagues at Stanford, Oxford and MIT, is not yet peer-reviewed.

Most leaderboards grade a model working alone. This one grades a single model as a member of a team, across 8 dimensions "from refusing an unsafe shortcut to checking the work that a weaker model leaves behind" [[7]](#source-7). To separate teamwork from raw skill, models are scored only on tasks they can already solve by themselves with full information [[7]](#source-7).

The troublesome teammate follows a fixed script, while the other teammates are live language models [[8]](#source-8). The authors released 160 tasks with code and data and held back 80 for evaluation [[7]](#source-7). The paper's "frontier models" are the flagship models of Google, OpenAI and Anthropic: Gemini 4 Argon, GPT-6 Astra, GPT-6.1 Sol, Claude Opus 5.5 and Claude Fable 5.1 [[8]](#source-8).

- **82.2 out of 100.** That top score went to Gemini 4 Argon at high reasoning effort, a setting that lets a model think longer, and Argon also led at its default setting with 76.6 [[8]](#source-8). Higher effort raised 5 of 6 models tested by 2.7 to 5.7 points, at 1.0 to 4.8 times the cost [[8]](#source-8).
- **20.2 to 46.6 points.** That is how far scores fell once a teammate created a problem, even though every model passed most tasks in a trouble-free team [[8]](#source-8).
- **14%.** Frontier models reached the best deal for the team in only 14% of conflicts [[8]](#source-8). They asked about the teammate's needs in 99% of runs, then accepted the teammate's weaker offer in 81% [[8]](#source-8). Claude Opus 5.5 gave in to the pushy teammate in 90% of runs at default effort and 96% at high effort [[8]](#source-8). Conflict is the only dimension where more capable models do worse [[8]](#source-8).
- **81% vs. 97%.** Frontier models passed 81% of tasks taken over from a weaker model that had cheated, against 97% when they started the same tasks themselves [[8]](#source-8). In 44 of 56 failed coding takeovers, the cheat was still in the final code [[8]](#source-8). "A model that is safe in its own session is not necessarily safe in a session it inherits," the authors write [[8]](#source-8).
- **45%.** Of 5,094 failed runs, 45% came after the model had already recognized the problem [[8]](#source-8). In those cases, the model saw the trouble and still failed to act on it.
- **85%.** General capability explains 85% of the variance in teamwork scores [[8]](#source-8). But Gemini 4 Argon and Claude Fable 5.1 sit within 1 point on a capability index, and Argon scores 11 points higher as a teammate [[8]](#source-8).

Some skills held up. Frontier models passed at least 93% of tests on resisting unsafe pressure and reporting misconduct [[8]](#source-8). Emotional intelligence was weaker, at 45% [[8]](#source-8).

The limits matter. "The live teammates are language models, not people," the authors write, and "real teammates vary more" [[8]](#source-8). They also say they still "must test whether the score predicts how much a model adds to other team tasks" [[8]](#source-8).

The two main judges, the AI models that label each reply, are Claude models. A human check of 40 messages matched their labels 82.5% of the time [[8]](#source-8), and the judges agreed with each other on only 67% to 78% of messages in four dimensions [[8]](#source-8). The paper's check found no favoritism toward Claude-model messages, but the test can reliably catch only a bias of about 19% or more [[8]](#source-8).

The project site shows a rerun, version 4.0.0, so the figures here come from the first paper [[9]](#source-9). The authors argue every model release "should come with a second number that says how well it works in a team" [[9]](#source-9). A separate group's CooperBench preprint found coding agents had "30% lower success rates when working together" [[10]](#source-10).

*Disclosure: this issue was produced with Claude models, and Claude Opus 5.5 is one of the models ranked in this study.*

## Cool Invention: Can an AI model fix another network by editing its weights?

Four MIT CSAIL researchers report that OpenAI's GPT-6 Astra edited 0.016% of a small Qwen language model's weights and raised its MATH-500 math score from 7.9% to 48.1% [[11]](#source-11). It is a blog post, not peer-reviewed, and we found no independent replication of the method.

**What is "weight-space programming"?**

Rikiya Takehi, Jayden Teoh, Alex Zhang and Omar Khattab use the term for a general-purpose model that reads and writes a network's weights directly, "not through an optimizer, and in particular not with gradient descent," the usual training method [[11]](#source-11). They call these "very early results" [[11]](#source-11).

**What did Astra do?**

From the raw weights alone, it named the game each of four small game-playing networks had learned [[11]](#source-11). With no tools, it edited 3.5% of a stuck car-control network's weights, and the car then succeeded in all 1,024 test episodes [[11]](#source-11).

**How did the math fix work?**

Qwen3.5-0.8B tends to fall into "thinking loops," as its own model card warns [[12]](#source-12). Astra traced the loops to one direction in two layers and subtracted it from 131,072 weights [[11]](#source-11). The fix worked only with 50 forward passes, or test runs of the model; with 10 or 25, the loops "barely went away" [[11]](#source-11).

Ahsen Khaliq of Hugging Face rebuilt the edited model from the logs and measured 51.0% on MATH-500 [[13]](#source-13). That confirms the published file, not the method.

**What do critics say?**

Matthew Honnibal, the author of spaCy, says the raw-weights-only setting appears in just three experiments, on networks of 17,000 to 172,000 weights, that every experiment on a real language model uses Python, and that the Qwen result also runs the model on up to 50 batches of practice problems [[14]](#source-14). Sean Goedecke calls the Qwen fix "exactly what a competent human researcher could have and would have done" [[15]](#source-15). Simon Willison says "some of the wider commentary I've seen around it does not feel justified" [[16]](#source-16).

**Can it add new skills?**

Not so far. On Gemma 3 270M, a model that rarely loops, Astra could not improve math, and the authors write that editing "could not add an ability the model lacked" [[11]](#source-11). They say they are now building a benchmark and testing setup for the approach [[11]](#source-11).

## Knowing what's inside the model

A 0.016% edit was enough to change how Qwen behaves [[11]](#source-11), and the edited file can be checked by hashing the only two tensors, or blocks of weights, that changed [[13]](#source-13). FlashProve aims for similar certainty about models you can't download, though its docs warn that a proof ties a reply only to whatever model the provider committed to [[2]](#source-2).
