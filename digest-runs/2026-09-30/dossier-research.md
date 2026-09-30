# Dossier: research — "Post-Training Leaves Behavioral Shadows on Unrelated Decisions"

arXiv 2609.29233 · cs.CL (also cs.AI, cs.LG) · **Status: preprint (arXiv v1 only). Not peer-reviewed, not independently replicated.**

## Dates (exact)
| Event | Date / time (UTC) | Source |
|---|---|---|
| GitHub repo `myboker/ATD` created | 2026-09-22 12:36 | GitHub API |
| arXiv v1 submitted | **Thu 2026-09-24 08:39** | arXiv abs page / API |
| HF Daily Papers feature (submitted by co-author Yuanhao Zeng, "Lines") | **2026-09-29** | HF API `submittedOnDailyAt` |
| Author's HF discussion post | 2026-09-29 05:42 | HF paper page |
| The Neuron explainer (Corey Noles) | 2026-09-29 13:54 | theneuron.ai |
| HF upvotes at fetch time | 262 (fetched 2026-09-30) | HF API |
| GitHub stars at fetch time | 15 (fetched 2026-09-30) | GitHub API |
| Citing works | 0 (OpenAlex, 2026-09-30) | OpenAlex |

Framing for the writer: "posted Sep 24, drew attention this week (HF #1 paper Sep 29)." Posting was before the Sat–Tue window; the attention came inside it.

**Watch out:** the arXiv listing abstract (abs page, API, and HF summary) has dropped text ("5,664nses yield… control thadisrupts prompt-resperiments showtransfer…"). The **PDF abstract is intact**. Quote from the PDF or HTML full text, not the listing.

## Who
Ziyang Zhang (Peking U.), Yubin Jing (Georgia Tech), Yuanhao Zeng (ShanghaiTech), Yuyao Li (Tsinghua), Haofan Wang and Yichen Gong (Lovart AI, corresponding author Gong). Three authors did the work as interns at Lovart AI, and the PDF is branded "Lovart / RESEARCH". So this is really an industry lab paper (Lovart AI) with academic co-authors.

## What
A model fine-tuned privately (the "teacher") changes its choices even on prompts that have nothing to do with what it was trained for. The authors call this the **behavioral shadow**. They find prompts where the original public model is almost exactly 50/50 between two ordinary words (e.g. "jacket" vs "tie"), ask the teacher for one word, and train a fresh copy of the public model on thousands of these (prompt, word) pairs. The student gets measurably better at the teacher's skill (e.g. coding) without ever seeing code, the teacher's data, its probabilities, or its weights. The method is called **Active Taskless Distillation (ATD)**.

## How (key mechanics)
- Near-tie filter: keep prompts where the public model's pair probability is within 0.5 ± 0.02 and its top-1 token is one of the two words.
- Teacher is queried once, greedy, one token. The answer is kept only if it's one of the two words. Primary run: **17,858 queries → 5,664 kept (≈31.7%)**, over a 128-word vocabulary. An audit found no code, math, digits or task terms in the kept data.
- Student: same public model (Qwen2.5-1.5B-Instruct) plus a rank-16 LoRA, trained on cross-entropy over the single word, 157 steps.
- Teacher (primary): Qwen2.5-1.5B-Instruct plus a rank-16 code-DPO LoRA.
- Controls: same prompts and same training, but the labels are scrambled. The strictest control ("exact nuisance-matched") keeps the identical word multiset and difficulty bins and agrees with the teacher on only 50% of prompts. The claimed gain is signal minus control.

## Key numbers (all author-reported)
- **HumanEval+ (164 tasks): student 51.22% vs exact control 45.88%, +5.34 pp, 95% CI [1.22, 9.60], 4 seeds.** Base 43.29%, teacher 51.22%.
- Five independently rebuilt acquisitions/teachers × 3 seeds: mean +4.80 pp, 15/15 pairs positive.
- Across adaptation regimes: LoRA r32 +6.55, r64 +9.15, full fine-tune +4.67 (all CIs exclude zero).
- Six multiple-choice tasks: gains from +0.81 (RACE-high) to +2.90 (HellaSwag) pp vs shuffle control, all CIs exclude zero.
- Other models (Llama-3.2-1B, Qwen3-1.7B, Qwen3-4B): positive mean gains, **but CIs include zero** for all three.
- Active near-tie selection beats passive prompts at the same query budget: +4.27 pp.
- Source-specific: code shadows help code most and science shadows help science. A 50/50 math+code mix recovers both.
- Worked example: on HumanEval/158 every student seed adopts the teacher's `len(set(w))` rule. That rule never appears in the training data.

## Why it matters
- Extends "subliminal learning" (Cloud et al., Anthropic Fellows / Truthful AI; now in Nature 2026) from **traits/preferences** to **capabilities**, using only **one word per prompt**.
- Safety and data provenance: model-generated data may carry information that its visible content doesn't show.
- Privacy of fine-tunes: the paper's own framing is whether a *private* post-training update on a *public* base can be observed and partly recovered through black-box, one-token queries. That matters for fine-tuning-as-a-service on open-weight bases.
- Policy tie-in (context only, not claimed by the paper): distillation is a live U.S.–China flashpoint. On CNBC (Sep 28), Jensen Huang called distillation "competition". CNBC also reports Treasury Sec. Bessent called it "theft", and that Anthropic accused Alibaba (Qwen) and DeepSeek of "illicit distillation". Keep this separate from the paper's claims. The paper does not claim to extract frontier models. See the counterpoint below.

## What's contested / limitations (the counterpoint)
No independent expert critique was found (see Gaps). The strongest limits come from the paper itself and from reading its tables:
1. **Needs a shared public ancestor.** Transfer failed for an incompatible ancestor (Qwen3-Coder-30B teacher → Qwen3-1.7B student; Coder-7B → Qwen2.5-1.5B), even with big teacher gaps. Anthropic's original subliminal-learning post found the same thing for traits ("fails when student models and teacher models have different base models"). This does **not** show a way to copy a closed frontier model.
2. **Small models only** (1B–4B). Beyond the primary Qwen2.5-1.5B, per-model CIs include zero.
3. **Low bandwidth.** On MBPP+ (teacher gap only +2.38) recovery was ~0 (+0.33, CI includes zero). A teacher that memorized HumanEval+ answers (+39 pp gap) and a cipher teacher (~97 pp gap) transferred nothing.
4. **Small absolute effect, wide CI.** +5.34 pp on 164 tasks is roughly 9 problems. The CI runs from 1.22 to 9.60 over 4 seeds.
5. **Reproducibility scope.** The repo reproduces the main result from frozen released data (and can retrain students on GPU). It states that "Regenerating the original private teacher or collecting new responses is outside this release."
6. **"First" claim is the authors'.** A co-author's HF post says "to our knowledge, this is the first time a capability is" transmitted this way. Cloud et al. already showed an MNIST classifier learning to classify digits "despite being trained on no class logits and no handwritten digit inputs" (a toy capability transfer, via logits rather than hard single tokens). So hedge it: "among the first to show this for language-model skills via single words."
7. Authors' own caveat: "does not yield reliable transfer in every tested setting" and "alignment with the teacher does not always translate into downstream gains."

## What's next
The authors call ATD "an initial exploration". They suggest better query selection and training objectives (the RPM objective, and multi-token K=20 observations, which gave +6.37 pp on GSM8K with Qwen2.5-0.5B). Nobody cites it yet. Watch for independent replication and for tests on larger or different-lineage models.

## Quotable lines
1. "We find that language models can transfer capabilities through task-unrelated text." (paper abstract, https://arxiv.org/pdf/2609.29233v1)
2. "Can a model teach another model to code — without ever showing it code? Surprisingly, yes." (co-author Yuanhao Zeng, HF paper page, https://huggingface.co/papers/2609.29233)
3. "…it would be a leap to claim someone can now clone GPT-6 by asking it whether it prefers 'soup' or 'pear.'" (The Neuron, https://www.theneuron.ai/explainer-articles/ai-models-may-be-able-to-teach-each-other-skills-without-talking-about-them/)

## Community / press reaction
- **Hugging Face:** #1 paper of the day Sep 29, 262 upvotes. The only discussion comments are the author's post and one "Interesting".
- **The Neuron** (Corey Noles, Sep 29): mainstream explainer. Accurate and appropriately hedged ("if the result holds up").
- **Hacker News:** **no thread about this paper** (Algolia searches for the arXiv ID, title, "taskless distillation" and "behavioral shadow" all came up empty). The "distillation thread" the scout flagged is *"Jensen Huang says AI distillation is 'competition.'"* (HN 49879032, Sep 28, 72 pts, 81 comments total). It links to CNBC and **never mentions this paper**. Its main topics are copyright/ToS and whether distillation is theft. Use it only as policy context.
- Reddit: search API returned non-JSON (blocked). Nothing found.
- No LessWrong, X, or expert blog reaction found via web search.

## Suggested "also in this thread"
- Cloud et al., Subliminal Learning (Anthropic Fellows / Truthful AI, Jul 2025; Nature 2026, doi 10.1038/s41586-026-10319-8): https://alignment.anthropic.com/2025/subliminal-learning/
- CTGT, "What a Distilled Model Inherits From Its Teacher" (Jul 29, 2026): distilling DeepSeek V4 Flash into GPT-OSS-120B boosted finance skill but did not transfer censorship. This is a cross-family case, consistent with the same-ancestor requirement. https://www.ctgt.ai/research/distillation-censorship-transfer (HN 170 pts)
- CNBC, Jensen Huang on distillation as "competition" (Sep 28): https://www.cnbc.com/2026/09/28/nvidias-jensen-huang-ai-distillation-china.html
- Links to the news pick's theme: both stories are about what models reveal or do "out of sight".

## Unverified
- Independent expert reaction: none found.
- Nature publication details of Cloud et al. come from the paper's reference list and OpenAlex (Nature, 2026-04-15), not from reading nature.com.
- CNBC's report of Bessent's and Anthropic's statements is second-hand. The primary statements were not read.
- The Semantic Scholar citation check was rate-limited (429). OpenAlex shows 0 citations.
