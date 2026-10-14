# Dossier: research. "Thinking Inertia: LLMs Keep Thinking When Told Not To"

- Primary: https://arxiv.org/abs/2610.11765 (v1, submitted 8 Oct 2026, cs.CL, CC0). Full text read at https://arxiv.org/html/2610.11765
- Authors: Dianqiao Lei (Tsinghua), Kevin Qinghong Lin (Oxford, project lead), Pan Lu (Stanford), Philip Torr (Oxford), James Zou (Stanford). Affiliations are from the project page and README: https://thinking-inertia.github.io/ and https://raw.githubusercontent.com/thinking-inertia/code/main/README.md
- Code: github.com/thinking-inertia/code (MIT, 3 stars per the HF API). Data: HF dataset thinking-inertia/llm-nothinking-trajectories (public).
- HF Daily Papers: listed 13 Oct 2026, 215 upvotes, submitted by the first author under the Stanford University org.

## Status (read this before writing)
- **arXiv preprint.** The arXiv page has no journal or venue comment.
- **The authors claim it was accepted at NeurIPS 2026.** The README says "2026.09 — Our paper is accepted as a Poster at NeurIPS 2026!" and the first author's HF comment calls it "our #NeurIPS2026 work". Kevin Lin's X post (seen through digg) says the same.
- **I could not confirm this.** On 14 Oct I downloaded NeurIPS's public data file (neurips.cc/static/virtual/data/neurips-2026-orals-posters.json, 9,242 accepted orals and posters). It has no entry with this title. Searching it for Dianqiao Lei and Kevin Qinghong Lin turned up only their other papers. The paper might be listed under a different title or in a workshop, so I can't rule acceptance out.
- **Suggested label:** "preprint, not yet peer-reviewed; the authors say it has been accepted to NeurIPS 2026." Or just "preprint" per the editor's instruction. Don't call it peer-reviewed. No independent replication exists yet, since the paper is 6 days old.

## 1. What
Reasoning models now come with a "thinking" on/off switch. The paper tests whether switching thinking off, or telling the model to answer directly, actually gives an answer-only response. Often it does not. The model still writes visible working before the answer. The authors call this "Thinking Inertia". It gets stronger as questions become more open: least on yes/no, more on multiple-choice, most on open-ended math.

## 2. How
- Each response is split into pre-answer text T and final answer A. Three metrics:
  - ETR (Empty-Thinking Rate): % of responses that are strictly answer-only.
  - QRel.: embedding similarity between the question and T, using Qwen3-Embedding-4B.
  - EIR (Explicit Inference Rate): a blinded GPT-5.5 judge labels whether T contains an actual inference step, as opposed to filler or paraphrase.
- Six modes: Think-On, Think-Off, "Think step by step", Soft ("short lead-in allowed, do not explain"), Strict ("Give the final answer directly without any reasoning"), and Prefix (pre-filling "The answer is \boxed{").
- Six models: Qwen3-4B, Qwen3-32B, Qwen3-235B-A22B, DeepSeek-V4-Flash, GPT-5.4, Gemini-3-Flash.
- Six benchmarks: BoolQ and StrategyQA (yes/no), MMLU and MMLU-Pro (multiple choice), GSM8K and MATH (open-ended).
- 572,688 outputs in the full corpus.
- Human check: 600 sampled outputs and 5 annotators. Human labels agreed 98.8% with the GPT-5.5 judge and 96.7% with a Claude Opus 4.8 judge.

## 3. Who
Academic groups at Tsinghua, Oxford (Torr) and Stanford (Zou, Lu). No company is involved. The models tested include commercial APIs from OpenAI, Google and DeepSeek.

## 4. Why it matters
- Thinking switches are sold as a way to get fast, cheap answers. The paper shows the switch controls the *request*, not the *response*: "stopping explicit reasoning cannot be assumed from model settings or instructions alone".
- Forcing the model to stop has a price on open-ended tasks. Strict prompting raised answer-only compliance from about 0% to about 40% but cut accuracy by about 15 points.
- Practical tip: offering candidate answers (multiple choice, or yes/no verification) makes direct answers much easier. The authors suggest "task-aware routing".
- **Writer caution on "cost/speed":** the paper measures *visible text*, not tokens billed or latency. The authors themselves warn: "Visible compliance should not, however, be equated with lower inference cost when hidden reasoning may remain active." Saying it "affects cost and speed" is fair as motivation. Don't present it as a measured cost result.

## Key numbers (all from the arXiv HTML)
- DeepSeek-V4-Flash (284B) with thinking disabled: visible explicit inference in 99.9% of open-ended responses.
- With Think-Off, most models are 80–100% answer-only on yes/no tasks. On open-ended tasks the answer-only rate "collapses to nearly zero everywhere".
- Open-ended, Think-Off to Strict: mean ETR rises from about 0 to about 40%, accuracy falls about 15 points, and EIR falls from 99.69% to 62.00%.
- Yes/no, Think-Off to Strict: EIR falls from 5.15% to 0.12%. Multiple choice: 45.57% to 25.39%. Accuracy stays mostly flat.
- Same questions rewritten (Qwen3-32B): changing multiple choice to yes/no raised answer-only from 10.5% to 62.5% with accuracy 77.8% to 78.9%. Changing it to open-ended dropped accuracy to 52.6% and answer-only to 0%.
- Prefix forcing ("The answer is \boxed{") did *not* work better than the Strict instruction.
- Exception: GPT-5.4 kept high answer-only compliance on yes/no and multiple choice, even under "think step by step".

## 5. What's contested / limitations
- **Not new as a raw observation.** A 2025 survey (arXiv 2507.09662) already reports: "Zhu et al. (2025a) find that LRMs do not always follow the instruction to skip thinking under NoThinking setting." What this paper adds is the measurement framework and the answer-space pattern.
- **Visible-only measurement.** The authors make no claims about hidden computation: "Our claims therefore concern visible output, not the absence of task-relevant computation from hidden states." Related work shows visible chain-of-thought need not match internal computation ("Reasoning Models Don't Always Say What They Think", arXiv 2505.05410).
- **Scope.** Six models and six benchmarks, mostly deterministic decoding. The authors list multilingual, code, tool-use, multi-turn and stochastic settings as open. EIR depends on an LLM judge, though it was cross-checked with a second judge family and with humans.
- **Opposite-direction evidence:** "Reasoning Models Can Be Effective Without Thinking" (arXiv 2504.09858) found that bypassing thinking with a simple prompt "can be surprisingly effective" when tokens are matched. So no-think modes aren't useless. The disagreement is about whether they produce *answer-only* output.
- **Community skepticism (only one data point):** an HF commenter (urroxyz) wrote: "if you train a model to think, it'll think... At what point in the dataset is it trained to recognize 'DON'T USE REASONING TOKENS'? None... and why would it be?" The objection is that the result is unsurprising given how these models are trained.
- **Low discussion overall.** No HN thread was found (Algolia search on title and URL). Digg's X aggregation shows "Not enough discussion yet" (28 likes, about 2.1K views). James Zou reposted. Rohan Paul summarized it.

## 6. What's next (authors)
Train models for "calibrated stopping rather than uniform suppression". Measure real reasoning-token cost and latency. Run internal-state analyses to see "whether computation disappears, moves to a hidden channel, or is only omitted from view". Extend to more languages and to interactive tasks.

## Quotable lines
1. "explicit no-think controls cannot reliably eliminate visible inference" (https://arxiv.org/abs/2610.11765)
2. "stopping explicit reasoning cannot be assumed from model settings or instructions alone" (https://arxiv.org/abs/2610.11765)
3. "Knowing when NOT to think may be just as important as knowing how to think." (first author, HF comment: https://huggingface.co/papers/2610.11765)

## Counterpoint (strongest, non-author)
Prior work already observed that reasoning models don't always obey no-think instructions (survey arXiv 2507.09662, citing Zhu et al. 2025a). Visible text is also an imperfect window into what a model computes (arXiv 2505.05410). And the paper itself does not measure cost or latency. Its contribution is a cleaner yardstick plus the finding that the answer format, more than the switch, drives the behavior.

## Also in this thread
- Thinkless: LLM Learns When to Think (arXiv 2505.13379). RL training to pick short or long reasoning; reports cutting long-chain thinking by 50–90% on some math benchmarks.
- Reasoning Models Can Be Effective Without Thinking (arXiv 2504.09858). The "NoThinking" baseline.
- Reasoning Models Don't Always Say What They Think (arXiv 2505.05410). Chain-of-thought faithfulness.
- Thread link to the issue: all three stories are about whether a model obeys a stated limit. Here the limit is "don't think".

## Unverified
- NeurIPS 2026 acceptance. Author-claimed and not found in the NeurIPS public accepted-papers data.
- Affiliations come only from the project page and README. The arXiv HTML author block rendered only "James Zou".
- Rohan Paul's summary and Kevin Lin's X post were seen only through the digg aggregator, not on X directly.
- Citing works: OpenAlex and Semantic Scholar were rate-limited, so none were checked. There are probably none yet given the paper's age.
- The repo contents beyond the README were not inspected, and the GitHub API was not authorized in this session.
