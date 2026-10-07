# Dossier: News — Mistral Large 4 (public preview)

Window 2026-10-03..2026-10-06. Issue 2026-10-07. Researched 2026-10-07.
Claims ledger: `claims-news.json` (ids N1..N30 cited below).

## Style-guide flags for the writer (read first)

- **Geography is everywhere in the sources.** Mistral's post leans on "Forged in Europe", "sovereign AI", "outperforming any open-weight model developed in the US or Europe", "leads open-weight models developed outside China", "European datacenters", "€3 billion Series D ... largest ... European technology company". TechCrunch frames it as "Europe is still in the mix" and quotes a head of state. HN's top comments are heavily regional. **None of that can be used.** Use only the region-free versions of the claims: "competitive with the strongest open-source models", "trained on its own 3,800 GPUs", "weights promised by end of month".
- Do not use the TechCrunch line referencing a head of state (political + geographic).
- "Sovereign AI" is a Mistral marketing term with a political/geographic meaning. Avoid; if needed, paraphrase as "customers want control over where and how they run models" attributed to Mistral (N9).
- **Conflict-of-interest disclosure:** Mistral's post names *Claude Opus 5.5* (the model writing this digest) as one of the closed models that "score near zero" on a cyber test because they refuse (N13). If the writer mentions that comparison, the issue should disclose that Eureka Reports is produced with Opus 5.5. Safer: describe it as "several leading closed models" without naming them, or disclose.
- All "~1T parameters" and "beats rivals" claims are **company claims** (Mistral) or **reporting** (TechCrunch). The parameter count cannot be independently verified until weights ship; Artificial Analysis and Simon Willison repeat the figure but are relaying Mistral's spec.

## 1. What happened

On 2026-10-06 Mistral launched a **public preview** of Mistral Large 4 ("ML4", nicknamed "le Chonk") via its API (N1, N2). Mistral says it is "a 1 trillion-parameter natively multimodal model with 49 billion active parameters" (N3), i.e. a mixture-of-experts model (Mistral's product card: "Open-weight hybrid instruct-and-reasoning MoE with multimodal input", N24). **Weights are not out yet**: Mistral says "Weights drop end of this month" (N2); TechCrunch reports "in just three weeks, after safety testing is complete" (N17). Until then Mistral is red-teaming with "cybersecurity leaders, vetted partners, and state authorities" (N4; do not dwell on the "state authorities" part).

Price on Mistral's card: $1.36 per million input tokens, $4.18 per million output (N25); Artificial Analysis lists the same (N21).

## 2. How (technical)

- Mixture-of-experts: 1T total parameters, 49B active per token (Mistral claim, N3). Define for readers: only a slice of the network fires for each word, which keeps running cost lower than the headline size suggests.
- Trained from scratch on 3,800 NVIDIA Grace Blackwell GPUs in Mistral's own datacenters (N5). TechCrunch quotes VP Science Pierre Stock saying "only 4,000 Nvidia GPUs" (N18): rounding discrepancy; use 3,800 from the primary source.
- Training data spans "more than 160 languages" (N6).
- Heavy reinforcement learning post-training: "a single training run produces roughly 33 billion tokens per day" at ~3k GPUs (N7). Mistral says the RL run "is still in flight" and the model "is showing no signs of saturation" (N8). So the preview is explicitly not the final model.
- Only two reasoning settings via API, "none" and "high" (Simon Willison, N27; HN simonw, N29).
- Context window 524k tokens per Artificial Analysis (N21). Not stated in Mistral's post itself; treat as AA-reported.

## 3. Who

- Mistral (company announcement, byline "By Mistral", N1).
- Pierre Stock, Mistral VP Science, quoted by TechCrunch (N17, N18, N19).
- TechCrunch reporter: Anna Heim, published 2026-10-06 14:33 UTC (N16).
- Independent evaluators: Artificial Analysis (N20, N21, N22), Vals AI (N23; note Mistral itself commissioned/used Vals for its finance and legal comparisons, N14, so Vals is not fully arm's-length on those two), Simon Willison (N26–N28).

## 4. Why it matters

- One of the largest models ever promised as open weights (downloadable and self-hostable). Mistral's pitch: open weights give customers control, especially in security work where "provider-level refusals can block legitimate vulnerability research" (N9).
- Cyber angle is the most distinctive claim: Mistral says ML4 scores 82% on a vulnerability reproduce-and-patch test, "the highest of any model", and that several closed models score near zero there because they refuse (N12, N13). This is double-edged: a strong offensive-capable open model. Mistral simultaneously claims ML4's refusal rate on malicious cyber prompts "is higher than all OSS models" (N15).
- Independent signal of a real jump: Artificial Analysis Intelligence Index 38 (N20), up from 9 for Mistral Large 3 per Simon Willison (N28). Willison: "back to being maybe about 6 months behind the frontier" (N27).
- Big community response: HN thread 1,552 points (N29), 912 comments counted via API at fetch time.

## 5. What's contested (counterpoints)

**Strongest counterpoint (independent):** third-party leaderboards put ML4 well short of the top overall.
- Vals AI: ranks **#32 of 44** on the Vals Index at 48.05% (N23). Its best result is #6 of 75 on Harvey's Legal Agent Benchmark (N23). On Finance Agent v2 it is 22/75 (N23b). This sits awkwardly with Mistral's claim that, on Vals-run finance and legal tasks, "the model exceeds GPT-6-Astra in both cases" (N14). Both can be true (Astra may score lower on those specific tests), but I could not verify Astra's scores on those boards.
- Vals measured Terminal-Bench 4.0 at 22.73% (N23b) vs Mistral's self-reported 28.3% (N10). Different harnesses likely; worth a sentence: "independent runs came in lower on at least one coding test."
- Artificial Analysis: Intelligence Index 38, "above average among other reasoning models in a similar price tier (median: 26)" (N20); also "very verbose": 200M tokens to run the index vs median 81M (N22). Verbosity raises real cost above the sticker price.
- Simon Willison: "certainly not a Fable-class model" (N27).
- HN top skeptic (manlymuppet): "This model doesn't knock anybody's socks off. The model is ... mediocre, and this mediocrity has also arrived months late." (N30). Another (lifeisloving): hard to win customers when rivals are "1/2 - 1/3 the price but with similar capabilities" (N30b). Another (charcircuit) notes the "Frontier performance" headline but no comparison to Opus 5.5 (N30c). Positive side: prodigycorp, "Impressive vision benchmarking" and "strong on cyber benchmarks" (N29b).
- Mistral's own benchmark selection: Mistral's comparisons are mostly against open models; the one blind human coding eval it published put ML4 **second of five, behind Claude Opus 5** (3.74 vs 4.22) (N11). Conflict-of-interest note applies if Claude is named.
- **Not yet open:** weights, architecture details, and post-training methodology are all promised later (N2, N8). Open-weight claims cannot be checked until then.
- **Discrepancies to handle:** 3,800 vs ~4,000 GPUs (N5 vs N18); "end of this month" vs "three weeks" (N2 vs N17); HN commenter pizlonator quoted lower prices ($.68 in / $2.09 out) than the official card ($1.36/$4.18) — unverified, possibly a launch promo or a different listing; use the official card.

## 6. What's next

- Open weights by end of October, "along with more details on the architecture, additional benchmarks, and our post-training methodology" (N8).
- Mistral expects "large and rapid improvements in the weeks and months to come" as RL continues (N8).
- ML4 to serve as base for "a new generation of specialized and optimized Mistral models" (N8).
- Watch for: independent re-runs once weights ship; whether the 1T/49B figures hold up in the released config (one HN commenter, Luker88, cites "1050B, 49 Active", unverified).

## Key numbers (all attributed)

| Number | What | Source |
|---|---|---|
| 1T total / 49B active | Parameters (Mistral claim) | N3 |
| 3,800 | NVIDIA Grace Blackwell GPUs used to train (Mistral) | N5 |
| 160+ | Languages in training data (Mistral) | N6 |
| 82% | Vulnerability reproduce-and-patch test, "highest of any model" (Mistral) | N12 |
| 93% | Cybench challenges solved (Mistral) | N12 |
| 61.7% / 28.3% | DeepSWE v1.1 / Terminal-Bench 4 (Mistral) | N10 |
| 22.73% | Terminal-Bench 4.0 measured by Vals | N23b |
| 38 | Artificial Analysis Intelligence Index (median for price tier: 26) | N20 |
| 9 | Mistral Large 3's AA score (per Willison) | N28 |
| #32 of 44 | Vals Index rank (48.05%) | N23 |
| $1.36 / $4.18 | Per million input / output tokens | N25, N21 |
| 1,552 | HN points | N29 |

## Quotable lines

1. "ML4 is a 1 trillion-parameter natively multimodal model with 49 billion active parameters." — Mistral, https://mistral.ai/news/mistral-large-4/
2. "It's certainly not a Fable-class model, but it's great to see Mistral put out a model that's back to being maybe about 6 months behind the frontier." — Simon Willison, https://simonwillison.net/2026/Oct/6/le-chonk/
3. "In the meantime, we'll work with trusted partners and governments to make sure that the open source weights can be used to defend, but not to [perform] malicious attacks." — Pierre Stock to TechCrunch, https://techcrunch.com/2026/10/06/mistrals-new-1t-model-aims-to-leapfrog-closed-and-open-rivals/ (contains "governments"; fine as a security statement but the writer may prefer quote 1 or 2.)

## Suggested format

`claim-vs-evidence` fits well (Mistral's claims vs. AA/Vals/Willison numbers). `by-the-numbers` is the backup.

## Also in this thread (runners-up, verified only at headline level by me)

- Reflection's Beam, 501B open-weight model (https://reflection.ai/blog/introducing-beam), another very large open-weight release the same week. Not researched in depth; avoid TechCrunch's nationality headline.
- Google EmbeddingGemma 2 (https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/): small open model, contrast to "chonk". Not researched.

## Unverified / blocked

- Parameter count (1T / 49B active) is Mistral's claim only; no weights to inspect. AA and Willison repeat it.
- "Exceeds GPT-6-Astra" on Vals finance/legal: could not find Astra's scores on the Vals boards (Vals legal benchmark page 404; finance_agent page showed v1.1 only).
- "Top five globally" on the Artificial Analysis Cyber Index: AA cyber-index URL guessed returned 404; AA leaderboard page connection reset. Unverified.
- "Space Bunny" OpenRouter stealth-model speculation (HN): unverified, do not use.
- HN-quoted lower pricing ($.68/$2.09): unverified.
- Reddit (r/LocalLLaMA JSON search) returned 403. Web search index had no other press coverage of ML4 yet (stale results about older Mistral Large).
- Note for orchestrator: my first fetch of HN item 49977979 returned the SCM Show HN thread (likely a proxy/cache glitch); a refetch returned the correct "Mistral Large 4" thread (1552 pts). The candidate link is correct.
