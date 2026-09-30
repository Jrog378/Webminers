# Dossier: invention — Jeff (github.com/firelex/jeff)

Researched 2026-09-30. All numbers below are the authors' own unless marked otherwise. Everything was read directly: README and LICENSE via raw.githubusercontent, repo/release/issue data via the GitHub API, the HN thread via the Algolia items API, and the HF model card via its raw README. I also read TypeSafe's homepage and docs, and the Von, AutoJev and Laya pages.

## Framing correction (important)
The scout's "same request format as 'Jev' (TypeSafe AI)" is accurate, but the writer must not suggest any affiliation. The README says: "Jeff uses the same request format as Jev, but it is not affiliated with or endorsed by TypeSafe, the makers of Jev." The author repeats this on HN ("I'm not affiliated with TypeSafe"). I confirmed the format match against TypeSafe's own docs. Both use `POST .../v1/systemone` with `state`, `model`, `questions`, and the question types `choice` / `noul` / `score`. Jeff is a hobbyist, open-weight, local imitation of a commercial hosted product. Its code descends from AutoJev (Denis Yarats, MIT), another independent Jev clone.

## 1. What
- Small open-weight "decision models": fine-tunes of Qwen3.5-0.8B, Qwen3.5-2B and Gemma 4 E2B. You give a situation and a list of options in plain words, and it returns a probability for each option from one forward pass, with no generated text.
- Three question types: `choice` (up to 254 options on the v1.1 Qwen models, 26 on Gemma), `noul` (yes/no probability) and `score` (a point on a scale).
- Timeline: repo created 2026-09-28 (API `created_at` 16:18 UTC). v1.0 released Sep 28. v1.1 released 2026-09-29 18:28 UTC.
- Traction as of 2026-09-30: 1,176 GitHub stars, 49 forks. HN post "Jeff – Jev-compatible 0.8B decision models, trained at home, ~30 ms" had 570 points and 222 comments (item 49883844, posted Sep 28 20:23 UTC). Jeff-Qwen3.5-0.8B on HF had 820 downloads and 14 likes.

## 2. How (and how the numbers were measured)
- **Training:** full-weight fine-tuning, one epoch, batches of 256, cross-entropy over the option letters, "then one fitted temperature for calibration". All synthetic data was written by an open model (Qwen3.8-Flash-Next) on two DGX Sparks. Training ran on one RTX PRO 6000: about 2 h for the 0.8B and about 3.5 h for the 2B. "No cloud GPUs, and no closed-model output in the training data."
- **Speed methodology (README, "Speed and size"):** "Median time per decision over the same 200 benchmark questions (about 200 input tokens each), one question at a time, from raw text to probabilities."
  - 0.8B: 22 ms on RTX PRO 6000, 28 ms on M4 Max (MLX), 463 ms on CPU (32 threads).
  - 2B: 24 ms, 60 ms and 708 ms.
  - Gemma4-E2B: 29 ms on GPU, not supported on MLX, 1.0 s on CPU.
  - These are local, single-request, short-prompt figures on high-end hardware. The CPU numbers are about 20x slower. The Jev comparison (114–212 ms) comes from Jev's published Doom runs "including the network", and the README concedes: "The two times were not measured on the same hardware."
- **Accuracy methodology:** "4,599 questions from five public benchmarks" (BBH, Financial PhraseBank, JudgeBench, RAGTruth, WinoGrande), plus JevBench's public hard tier (105 items). Overall scores: 0.8B 79.1, 2B 82.0, Gemma 81.6, against Jev (published) 83.0 and AutoJev-27B (published) 84.9. The README states: "The published Jev and AutoJev figures were measured on a different sample of the same benchmarks." Jeff wins on classification and grounding (Financial PhraseBank about 95–96 vs Jev 77.0; RAGTruth about 86–88 vs 77.3). It trails badly on reasoning (BBH 64.9/68.7 vs 94.3; JevBench hard 46.7/57.1 vs 73.3).
- **Calibration:** the metric is ECE ("Calibration error (ECE)" column on the HF card). v1.1 values are 0.021 (0.8B), 0.026 (2B) and 0.031 (Gemma). The Jev figure of "≈0.06" is the author's own "average of its per-benchmark figures", not a number from TypeSafe. The ECE is the author's measurement on their own panel.

## 3. Who
- The author is Mathias Strasser, per the LICENSE ("Copyright (c) 2026 Mathias Strasser (Jeff)"). GitHub user is firelex and HF user is mstrasser. The LICENSE also carries Denis Yarats' AutoJev copyright.
- Jev comes from TypeSafe AI (typesafe.ai), a hosted proprietary "System One" model. TypeSafe's docs say: "Jev is TypeSafe's flagship model and the first System One model." Pricing and launch date come only from secondary sources, so they are listed under unverified.

## 4. Why it matters
- It is a runnable, free, local version of an idea that got a lot of buzz in September 2026: small models that return typed decisions with probabilities instead of text, aimed at routing, tagging and moderation inside software. HN commenter benterix gives the privacy angle: "The biggest disadvantage of Jev is that it's a proprietary product and you need to send them your data."
- The author did it on home hardware in hours, which is a good "the barrier to entry is falling" story.

## 5. What's contested / the honest caveat
- **Every speed, accuracy and calibration number is self-reported.** The comparison with Jev uses different benchmark samples and different hardware.
- **Independent test (partial, positive):** puhuk, who filed issue #1, reran the tests on v1.1: "On the panel I get 79.1 and 81.9, matching your README." They also report that BANKING77 (not in training) went "from 23.4% to 66.2% (0.8B)". This reproduces the benchmark panel. It is not an independent speed or calibration test. I found no independent measurement of the 22 ms figure.
- **Real-world reports on HN (negative, anecdotal):**
  - AgentMasterRace: "I compared it to Jev in my current use cases and it's very inaccurate. 70% vs 94% . for classification, it's unacceptable."
  - Oras, classifying job ads: "I tried the 0.8B model, completely useless in classification. Qwen Jeff-Qwen3.5-2B was better, but still missed job type."
  - folayii: "83.1 vs 83.0 on your panel against 70 vs 94 in someone's actual use case is the whole story with zero-shot classification."
- **Launch bug, fixed fast:** v1.0 "never picked an option past the 26th, because no training question had more than 19 options". It was reported by a user within hours and fixed in v1.1. v1.1 also made two benchmarks (MASSIVE, CLINC150) "no longer zero-shot".
- **The authors' own caveats:** "Small models don't reason." "English and text only." "Wording matters enormously." The 2B plays games worse than the 0.8B.
- **Skeptics' alternatives:** several HN commenters argue that classic classifiers are enough. nico reports that embeddings plus logistic regression "matches or beats Jev and Laya in all basic classification tasks". anvuong disputes calling softmax outputs "probabilities". These are opinions and anecdotes, not verified.
- **Suggested one-line caveat for the writer:** "The speed and accuracy figures are the developer's own, measured on a high-end workstation GPU and a top-spec MacBook with short prompts. One outside tester reproduced the benchmark scores, but early users on Hacker News reported it falling well short of TypeSafe's hosted Jev on their own classification tasks."

## 6. What's next / how a reader tries it
- **License:** "Code: MIT (including AutoJev's). Model weights: Apache 2.0." The training data is not released, and some sources are CC BY-SA. The GitHub API reports MIT and the HF card reports apache-2.0.
- **Try it:** `uv sync --no-default-groups` (add `--extra mac` for Apple silicon or `--extra cuda` for NVIDIA), then `hf download mstrasser/Jeff-Qwen3.5-0.8B`, then run `jeff-serve` and POST to `localhost:8765/v1/systemone`. It needs Python/uv comfort. The weights are 1.7 GB (0.8B, 16-bit). It runs on CPU, but at about 0.5 s per decision.
- **Next steps named in the repo:** a Phi-4-mini base (PR #4, merged into the codebase but not yet trained) and domain fine-tunes (a chess example is on the model card).

## Key numbers (all author-reported)
| Item | Value |
|---|---|
| Sizes | 0.8B (1.7 GB), 2B (4.2 GB), Gemma E2B (9.3 GB) |
| Latency, 0.8B | 22 ms RTX PRO 6000 / 28 ms M4 Max / 463 ms CPU (median, ~200-token prompts) |
| 5-benchmark overall | 79.1 (0.8B), 82.0 (2B) vs Jev 83.0 (published, different sample) |
| ECE | 0.021 (0.8B), 0.026 (2B) |
| Max options | 254 (v1.1 Qwen), 26 (Gemma) |
| Voice-nav fine-tune | 31.7% → 95.8% held-out, about half an hour on one GPU |

## Quotable lines
- "You describe a situation and list the options in plain words; Jeff returns a calibrated probability for each option from a single forward pass." (https://github.com/firelex/jeff)
- "No cloud GPUs, and no closed-model output in the training data." (https://github.com/firelex/jeff)
- "83.1 vs 83.0 on your panel against 70 vs 94 in someone's actual use case is the whole story with zero-shot classification." (HN, folayii: https://news.ycombinator.com/item?id=49883844)

## Comparison table candidates (all read)
| Tool | Type | Size / runs on | Speed claim (self-reported) | License | URL |
|---|---|---|---|---|---|
| Jeff | Fine-tuned small decoder LLMs (Qwen3.5 / Gemma 4) | 0.8B–2B; GPU, Mac (MLX), CPU | 22 ms GPU / 28 ms M4 Max | Code MIT, weights Apache 2.0 | https://github.com/firelex/jeff |
| Jev (TypeSafe AI) | Proprietary hosted "System One" model | API only (`api.typesafe.ai/v1/systemone`) | Homepage: "Completed in 0.114s" in its workflow demo; "193.6x Faster, 444.6x Cheaper" vs LLMs | Proprietary | https://docs.typesafe.ai/introduction |
| Von | ModernBERT encoder, non-autoregressive | 395M; CPU (OpenVINO), CUDA, ROCm, MPS | "Sub-15ms" (repo description) | Apache 2.0 | https://github.com/wfzyx/von |
| Laya (ConvAI Innovations) | Bidirectional encoder, multilingual | "32.8 milliseconds on a single GPU", 100+ languages | 32.8 ms | Apache 2.0 weights | https://laya.convaiinnovations.com/ |
| AutoJev-27B (reference, Jeff's parent) | Full-weight Qwen3.8-27B fine-tune | ~49 GiB BF16 weights; big GPU | not stated | Code MIT, weights Apache 2.0 | https://github.com/denis-pplx/autojev |

Note that Von and Laya both advertise TypeSafe wire-protocol compatibility too. Von says it is "byte-compatible with the TypeSafe specification". Jeff is one of several clones, not a unique one. The most useful distinction is that Jeff is the one built on small general LLMs (more world knowledge, slower), while Von and Laya are encoder-based (faster, weaker zero-shot, per the HN commenter earino on Laya).

## Also in this thread (unverified leads)
- HN story, Sep 29: "OpenAI Answers TypeSafe's Jev with a Decision API Built on Luna" (The New Stack, https://thenewstack.io/openai-decision-api-luna/). I only got the page shell and headline, not the body. Verify before use.
- Lichen (https://github.com/Mushroom-Systems/lichen) and jevgrep (https://github.com/dzhng/jevgrep) are other Jev-ecosystem projects. Not read.

## Unverified
- Jev's launch date (Sep 15, 2026), its pricing ($0.042 per million input tokens) and "no published weights". These appeared in web-search summaries and HN/Laya mentions, but I did not read them on a TypeSafe page. The Laya page does say "charging $0.042 per million input tokens", but that is a third party.
- The claim that TypeSafe was "founded by Diogo Almeida, a co-inventor of ChatGPT at OpenAI". This appears only on the Laya page, which is a competitor. Do not use it.
- Jev's published benchmark figures (83.0 overall, etc.) were taken from Jeff's README. I did not confirm them on a TypeSafe page.
- No Lobsters or Reddit discussion was found. The Lobsters search returned nothing and the Reddit JSON request failed.
- There is no independent check of the 22/28 ms latency or the ECE figures.
