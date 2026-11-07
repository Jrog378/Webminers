# Dossier: research — "Think Less, Locally: Local Preference Learning for Reasoning Compression" (LoCo)

- Primary: https://arxiv.org/abs/2611.04814 (full text read at https://arxiv.org/html/2611.04814)
- Status: **preprint, not peer-reviewed**, v1 only. No independent replication found.
- Dates: submitted to arXiv Tue 3 Nov 2026 (12:44 UTC); listed on Hugging Face Daily Papers 4 Nov 2026 (https://huggingface.co/api/papers/2611.04814, `submittedOnDailyAt: 2026-11-04`). The arXiv submission date is one day **before** the Nov 4–6 window. The HF listing date is inside it.
- Authors: Muyao Yuan, Liyan Xu (project lead), Weizhan Zhang, Muyan Jiao, Jiangnan Li, Jinchao Zhang, Jie Zhou. Affiliations: Xi'an Jiaotong University (School of Computer Science and Technology) and WeChat AI, Tencent. Paper says "Work done at WeChat AI."

## 1. What
LoCo ("Local Compression") is a fine-tuning recipe that teaches a reasoning model to stop deliberating once it already has enough to answer. It does not simply reward shorter answers overall. Training data comes only from the model's own math solutions. The released checkpoint is LoCo-7B, a LoRA/DPO fine-tune of DeepSeek-R1-Distill-Qwen-7B.

## 2. How (plain version first, then details)
Plain version: take the model's own long solution, find the point where it already had the answer but kept re-checking, let it re-try from that exact point, keep the shortest re-try that is still correct, and train the model to prefer "wrap up now" over "keep going" at that point.

Details (Sec. 4–5):
1. **Source traces**: 3 rollouts per question on the 14,027-question "math14k" pool (from TokenSqueeze). The shortest correct rollout is kept.
2. **Confidence screening**: the CoT is split into steps at paragraph breaks. For each step the method takes the average top-1 token probability (confidence) and how much it changed from the previous step (volatility). Steps with low confidence (≤25th percentile) *and* high volatility (≥75th percentile) are flagged.
3. **Judge re-check**: Qwen3-30B labels each flagged next step as OVERTHINK, NORMAL or FINAL_ANSWER_WRAPUP. Only OVERTHINK steps are kept, at most 10 per trace.
4. **Verified continuation**: the prefix is frozen and 8 continuations are sampled. The shortest one whose answer matches the gold answer is kept, and only if it is shorter than the original.
5. **Pairs and DPO**: chosen = short continuation, rejected = the original continuation. Pairs need at least 300 tokens of savings, and each question gives at most 3 pairs. Training is DPO (β=0.1) with a LoRA adapter (rank 256), 2 epochs, on 4 H20 GPUs.
- Evaluation: 8 samples per problem, temperature 0.6, up to 32,768 new tokens. Metrics are accuracy, tokens, and AUC (area under the accuracy-vs-token-budget curve).

## 3. Who
Academic and industry team from Xi'an Jiaotong University and Tencent WeChat AI (see above). Code is on GitHub (MIT), described as "an official implementation of the paper": https://github.com/MuyaoYuan/LoCo. Weights are public on Hugging Face as MuyaoYuan/LoCo-7B (MIT, base model DeepSeek-R1-Distill-Qwen-7B, last modified 2026-11-04). The abstract says "will be publicly released", but the repo and weights are in fact up now. Traction: 60 upvotes on HF Papers, 9 GitHub stars per the HF API, 178 downloads and 22 likes on the model.

## 4. Why it matters
Reasoning models often keep checking after they already have the answer. Every extra token adds cost and waiting time. The paper says: "Such extended reasoning comes at a substantial inference cost, significantly increasing decoding latency and memory consumption." Chen et al. (arXiv 2412.21187) independently documented this overthinking: "excessive computational resources are allocated for simple problems with minimal benefit." LoCo's specific contribution is to make the stop-or-continue decision depend on where the model is in its reasoning.

## 5. Key numbers (full paper, Tables 1–3; base = DeepSeek-R1-Distill-Qwen-7B)
Math (accuracy %, average tokens, base → LoCo):
| Benchmark (n) | Acc base → LoCo | Tokens base → LoCo | Length cut |
|---|---|---|---|
| MATH-500 (500) | 91.88 → 91.80 (−0.08) | 4015 → 2243 | −44.1% |
| AMC23 (40) | 90.31 → 91.56 (+1.25) | 6285 → 3663 | −41.7% |
| Olympiad (675) | 61.33 → 62.78 (+1.45) | 8972 → 4968 | −44.6% |
| AIME24 (30) | 50.83 → 54.17 (+3.34) | 13493 → 7364 | −45.4% |
| AIME25 (30) | 37.92 → 40.42 (+2.50) | 15134 → 8291 | −45.2% |

Code (trained on math only):
| Benchmark (n) | Acc base → LoCo | Tokens base → LoCo | Length cut |
|---|---|---|---|
| MBPP (257) | 84.05 → 84.05 (0.00) | 3403 → 2167 | −36.3% |
| LiveCodeBench v5 (167) | 41.77 → 42.51 (+0.74) | 12319 → 9278 | −24.7% |
| CodeContests (165) | 18.48 → 20.61 (+2.13) | 14900 → 11413 | −23.4% |

- Headline: completions are about 42–45% shorter on math and 23–36% shorter on code. Accuracy is about the same, with small reported gains.
- Baselines: TokenSqueeze (NeurIPS) and DAST. TokenSqueeze compresses by 22.5–39.2% on math but loses accuracy on AIME (−2.08 / −2.09). DAST sometimes makes answers *longer*, e.g. +6.9% tokens on AIME24.
- Ablations (AMC23/AIME24/AIME25): the "Global" version, which pairs whole short and long solutions, only cuts length by 5.2% / 11.1% / 15.8%. Random or evenly spaced cutpoints compress about as much but lose accuracy (e.g. AIME24 −2.50 / −2.08). Using GPT-5.4 to write the short continuations compresses less, by 31.8–36.0%.
- The detector's cutpoints fall late in the trace, at a mean relative position of 0.57. About half are in the final 40% of steps.

**How to report it honestly:** the length reduction is large and consistent. The accuracy *gains* are small and mostly within the reported ± standard deviation. Examples: AIME24 54.17 ± 4.27 vs base 50.83 ± 6.61, AIME25 40.42 ± 3.75 vs 37.92 ± 5.62, MBPP 84.05 ± 1.94 vs 84.05 ± 0.91. AIME has only 30 problems. The safe wording is "cut thinking length roughly in half on math with no loss in accuracy", not "improves accuracy". (This reading of overlapping error bars is our analysis, not a claim from the authors.)

## 6. What's contested / limitations (counterpoint)
- **Benchmark noise (independent)**: Hochlehnert et al., "A Sober Look at Progress in Language Model Reasoning" (arXiv 2504.07086), found that math reasoning benchmarks are "highly sensitive to subtle implementation choices" and that methods are "prone to overfitting, especially on small-scale benchmarks like AIME'24." This is the strongest outside reason to treat LoCo's small accuracy gains as unproven. Note that LoCo does sample 8 completions per problem and reports ± values.
- **Scope**: only one model was tested, a 7B distilled model, and the training data is math only. No results are shown for larger models or for frontier reasoning models. The paper has **no limitations section**.
- **Gold answers and an outside judge are needed**: the training data uses gold answers to verify the short continuations, and a separate 30B judge model. So the recipe needs problems with checkable answers.
- **Novelty question**: an earlier paper, STACK ("Think Less, Know More: State-Aware Reasoning Compression...", Sui, Li, Song, arXiv 2604.09150, Apr 2026, ACL 2026 Findings per its ACL Anthology listing), also learns "state-conditioned compression strategies" with DPO. It reports a 59.9% length reduction on three math benchmarks. LoCo does not cite STACK. We checked LoCo's full reference list and the only Sui et al. entry is the 2025 overthinking survey. The two were not compared on the same setup.
- **Possible tension with "underthinking" (our analysis)**: LoCo flags low-confidence, high-volatility steps as overthinking. Wang et al., "Thoughts Are All Over the Place" (arXiv 2501.18585), report that switching between thoughts too often "correlates with incorrect responses" on hard math. The judge step is meant to catch genuine difficulty, but the paper does not report how accurate the judge is.
- No HN or Reddit discussion was found (HN Algolia search for the arXiv ID and title returned nothing relevant). No press coverage was found.

## 7. What's next
- Code and weights are already public, so outsiders can check the results on other models now.
- Open questions: does this work on larger and frontier reasoning models? On non-math reasoning beyond code? How does it compare head-to-head with STACK? Can the judge and gold-answer dependencies be removed?

## Quotable lines
1. "A model may get the correct answer early in the reasoning process yet continue generating unnecessary reasoning, reflecting a preference to keep thinking rather than to stop when sufficient reasoning has been reached." (https://arxiv.org/html/2611.04814)
2. "This formulation teaches the model when to continue reasoning and when to conclude, rather than simply encouraging shorter trajectories overall." (https://arxiv.org/abs/2611.04814)
3. Example from Appendix B: asked what day July 14, 2030 is, the model had already derived and double-checked "Sunday". It then spent 986 more tokens re-deriving it, while the preferred continuation took 212. (https://arxiv.org/html/2611.04814)

## Suggested "also in this thread"
- STACK, "Think Less, Know More" (arXiv 2604.09150): an earlier state-aware compression method, ACL 2026 Findings.
- TokenSqueeze (NeurIPS): the main baseline, from which LoCo borrows its training pool and metrics.
- Chen et al., "Do NOT Think That Much for 2+3=?" (arXiv 2412.21187): the foundational overthinking paper.
- Wang et al., "Underthinking" (arXiv 2501.18585): the opposite failure mode.

## Unverified
- ACL 2026 Findings status for STACK comes from the search-result snippet and ACL Anthology URL (aclanthology.org/2026.findings-acl.1128). I did not open that page.
- I could not check the GitHub README directly (proxy 403). Its contents (MIT license, "official implementation", LoRA checkpoint) come via a WebFetch summary. The HF model API independently confirms the weights and the MIT license.
- Semantic Scholar was rate-limited (429) and OpenAlex returned nothing usable, so citing work was not checked. The paper is 4 days old and is unlikely to have citations yet.
- Real-world wall-clock or cost savings: the paper reports tokens only, not latency or dollars.
