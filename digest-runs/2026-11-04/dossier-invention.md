# Dossier: invention | Sparks of Weight-Space Programming

Primary: https://rikiyat.github.io/blog/weight-space-programming/ (fetched in full, HTTP 200, read 2026-11-04)
Status: **blog post by the authors. Not peer-reviewed, no arXiv preprint found.** One partial outside re-check exists: Hugging Face's Ahsen Khaliq rebuilt the edited Qwen checkpoint from the logs and re-ran MATH-500. That confirms the published checkpoint scores what the post says. It does **not** independently repeat the method, meaning a new LLM run that finds the fix. Simon Willison also re-ran the Experiment 1 prompts on other models (details below). There is no independent replication of the headline claims.
Claim IDs refer to claims-invention.json.

## 1. What
- The term the post coins: "Weight-Space Programming." A general-purpose LLM reads and writes another neural network's weights directly, "not through an optimizer, and in particular not with gradient descent" (inv-02). The model used is OpenAI's GPT-6 Astra.
- There are eight experiments in three groups: **read** (identify what a network does), **fix** (repair a failing network), and **write from scratch**. The networks range from tiny game-playing networks to a real 0.8B language model.
- Headline: Astra edited 0.016% of Qwen3.5-0.8B's weights (131,072 of 0.8B). MATH-500 went from 7.9% to 48.1%, GSM8K from 13.8% to 67.1%, and IFEval (instruction following) from 21.0% to 62.3% (inv-11, inv-12, inv-14).

## 2. How (the setting differs by experiment, which matters)
| Exp | Task | Size | Tools? | Runs network? | Result |
|---|---|---|---|---|---|
| 1 | Name the game a policy network learned | 17,253 weights | No | No | 4/4 correct (inv-04) |
| 2 | Name the shape a diffusion model draws | 23,824 | No | No | 3/3, drawn as outlines when the real shapes are filled (inv-05) |
| 3 | Training language and copying heads, from the middle layers only | 7.2M | Python | No | 3/3, every copying head found (inv-06) |
| 4 | Fix a car policy stuck on a ramp | 171,664 | No | No (one recorded episode given) | 0% to 100% over 1,024 episodes, 3.5% of weights edited (inv-07) |
| 5 | Write MinAtar game networks from zero weights | about 20K | No | No | Beat PPO-100M in all 3 games; beat PPO-500M only on Breakout (inv-08) |
| 6 | Write a 9x9 Go network from scratch | 1.48M | Python sandbox | 0 to 50 forward passes | Beats equal-size PPO with 50 passes (inv-09) |
| 7 | Which Gemma 3 270M fine-tune is sycophantic? | 270M | Python | Attention patterns only, in the relaxed version | **Failed** from weights alone; 3/3 once it saw attention patterns (inv-10) |
| 8 | Make Qwen3.5-0.8B better at math | 0.8B | Python kernel | 10/25/50 forward passes | 7.9% to 48.1% on MATH-500 at 50 passes; barely changed at 10 or 25 (inv-13) |
| 8b | Same, on Gemma 3 270M | 270M | Python | Up to 50 | **Failed**: no gain beyond about 1 point (inv-15) |

- The Qwen mechanism: Qwen3.5-0.8B gets stuck in "thinking loops." Qwen's own model card warns about this (inv-16). In the post, 93% of base MATH-500 answers hit the 32,768-token limit. Astra found one direction in the MLPs of layers 15 and 19 and subtracted it. The authors themselves compare this to "removing a behavior by deleting a single direction" (inv-11). This is the same family of technique as steering vectors and abliteration.
- No training, no gradients. In Experiment 8, the Python kernel ran on CPU with no GPU.
- Transparency: full logs are public at github.com/RikiyaT/lm_understand-logs (inv-18). The repo had about 732 stars per a WebFetch summary. The edited Qwen is on Hugging Face, and the card hash-checks that only two tensors differ from base Qwen (inv-20).

## 3. Who
- Rikiya Takehi and Jayden Teoh (equal contribution), Alex Zhang, Omar Khattab, all listed as MIT CSAIL (inv-01). Khattab is known for DSPy, which is LLM-driven prompt and program optimization. The post presents this work as extending that line of work to weights.
- Astra is an OpenAI model. The authors are not from OpenAI, and the post does not claim any OpenAI involvement.

## 4. Why it matters
- Today, weights come from training, from networks trained to produce them, or from compilers. The post claims a general-purpose model, used off the shelf, can do some of this by reasoning about the weights.
- Uses the authors propose (their speculation): "auditing without evaluation" (finding problems such as backdoors directly from weights), cheaper optimization, adding or removing a capability without data, and model self-improvement (Section "What Comes Next?").
- Concrete takeaway for readers: a small, targeted, hash-verifiable weight edit fixed a known flaw in a public model, and anyone can download it.

## 5. What is contested (the counterpoint)
The strongest critique comes from outside the authors and is consistent across sources:
- **The headline mixes two different settings.** Matthew Honnibal (spaCy author) calls the post misleading. The "just by looking at raw weights" condition (no tools, no running the network) applies only to Experiments 1, 2 and 4, on networks of 17K to 172K weights. Every real-language-model result used Python, and the Qwen result also ran the model on up to 50 batches of practice problems (inv-24, inv-25). Simon Willison makes the same split (inv-23).
- **A skilled human could do it.** Sean Goedecke shows the game-identification signal falls out of a three-line weight-norm heatmap (inv-27). He also argues the Qwen fix is "basically the Heretic abliteration playbook," that is, what "a competent human researcher could have and would have done" (inv-26). The top-voted HN skeptic, who says they work in weight-space learning, points to prior weight editing such as ROME (2022) and calls the Qwen fix "basically a steering vector" (inv-29, inv-31).
- **It is a fix, not a new skill.** Even by the authors' own account, the gain came from removing loops. On Gemma, which rarely loops, Astra could not improve math: "it could not add an ability the model lacked" (inv-15). The fix also needed the full 50-pass budget (inv-13).
- **Where did the skill come from?** Many HN commenters suspect OpenAI trained Astra on interpretability or weight data, so the skill may not have emerged on its own. This is unverified speculation (inv-30).
- **Partial supporting evidence:** Willison found that Qwen 3.8 27B on a laptop could also identify 3 of the 4 Experiment 1 games, failing on Freeway (inv-22). This suggests the reading skill is not unique to Astra. It also suggests the task is easier than it sounds.

Honest caveat for the writer: "A blog post from MIT researchers, not peer-reviewed. The edited model's score was re-checked by Hugging Face, but nobody has independently repeated the method yet, and critics argue the most impressive result uses standard interpretability techniques with code and test runs, not raw reading of weights."

## 6. What is next
- The authors say they are "building a benchmark and a harness" for Weight-Space Programming (inv-17).
- The open question to watch: can anyone repeat the Qwen-style fix with a different frontier model, and can these edits *add* capability rather than remove a blocker?

## Key numbers
- 0.016%: 131,072 of 0.8B weights edited (Qwen).
- MATH-500 7.9% to 48.1%; GSM8K 13.8% to 67.1%; IFEval 21.0% to 62.3% (50 forward passes).
- Answers hitting the token limit: 93% to 33%.
- Hugging Face re-run of the checkpoint: 51.0% MATH-500, with 31.6% hitting the limit.
- Car fix: 0% to 100% over 1,024 episodes, editing 3.5% of weights, no tools.
- Gemma 3 270M math: 6.8% to at most 7.7%, which is no real gain.
- HN: about 2,922 points and 879 comments (item 50341174).

## Quotable lines
1. "Editing weights could remove an obstacle that hid an ability, but it could not add an ability the model lacked." (authors), https://rikiyat.github.io/blog/weight-space-programming/
2. "What the Qwen result actually shows is that Astra can be prompted to devise and perform tasks that a human ML engineer could do." (Matthew Honnibal), https://honnibal.dev/blog/astra-read-write-misleading
3. "It's a cool paper, but some of the wider commentary I've seen around it does not feel justified." (Simon Willison), https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/

## Also in this thread
- Willison's laptop re-run with Qwen 3.8 27B: https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/
- Goedecke's "LLMs are not superhuman at reading and writing neural network weights" (HN item 50344861, 140 points): https://www.seangoedecke.com/llms-are-not-superhuman-at-reading-and-writing-neural-network-weights/
- Edited model you can download, with a hash-verified diff: https://huggingface.co/RikiyaT/Qwen3.5-0.8B-weight-space-programming
- Link to the news pick: Anthropic's provable inference work is also about knowing exactly which weights you are running. Here, a 0.016% edit changed behavior a lot, and the edit was checked by hashing two tensors.

## Unverified / gaps
- The live demo Space (akhaliq/weight-space-programming-demo) was linked from the post and the model card, but the HF API returned no JSON, so I could not confirm it is running.
- I read the logs repo README only through a WebFetch summary, because GitHub API access was blocked. The star count (about 732) and the "1,125 turns ... tool-free" quote are not checked against raw text.
- Goedecke's footnote that all problems needing fewer than 32k tokens were already solved by base Qwen is his claim, and I did not check it. His description of the grid as "8x8" also conflicts with the post's 10x10.
- I found no arXiv version, no peer review, and no statement from OpenAI about Astra's training data.
- The X thread from Rikiya Takehi showed up in search but was not read. Aggregator posts (datacamp, xenospectrum, etc.) were not read and are not used.
- I did not read the press coverage the search surfaced. None of it appeared to be from major outlets.
