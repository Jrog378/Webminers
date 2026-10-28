# Review checklist: Eureka Reports, 2026-10-28

Live URL (once approved): https://webminers.dev/eureka/2026-10-28-ai-labs-exponential-time-hypothesis-refuted

## Hero image
**None.** `hero: null`. The image finder searched StockSnap, Rawpixel, WordPress Photo Directory and Nappy (via Openverse) and found nothing relevant, large enough, watermark-free and not already used (the best fit, a Rubik's Cube with code, ran on 2026-09-30). Tier 2 libraries were not tried. Details in `image.json`. Add one by hand if you want it.

## Sources (frontmatter `sources`, in order)
1. [The Exponential Time Hypothesis is False](https://raw.githubusercontent.com/openai/math/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf) (OpenAI (openai/math preprint))
2. [A 2^{o(n)} Time Algorithm for 3-SAT](https://raw.githubusercontent.com/anthropics/formal-math/main/eth/paper.pdf) (Claude, Anthropic (formal-math))
3. [Frontier AI labs say their models refuted the Exponential Time Hypothesis. What does that mean?](https://techcrunch.com/2026/10/27/frontier-ai-labs-say-their-models-refuted-the-exponential-time-hypothesis-what-does-that-mean/) (TechCrunch)
4. [formal-math/eth README](https://raw.githubusercontent.com/anthropics/formal-math/main/eth/README.md) (Anthropic (GitHub, formal-math))
5. [openai/math](https://github.com/openai/math) (OpenAI (GitHub))
6. [Dueling proofs from OpenAI and Anthropic astound scientists](https://www.scientificamerican.com/article/dueling-proofs-from-openai-and-anthropic-astound-scientists/) (Scientific American)
7. [OpenAI says its AI refuted the Exponential Time Hypothesis](https://forklog.com/en/openai-says-its-ai-refuted-the-exponential-time-hypothesis/) (Forklog (AI-translated secondary reporting))
8. [AV-FABLE: Audio-Visual Manipulation Forensics in Long-Form Videos](https://arxiv.org/abs/2610.33413) (AV-FABLE authors (arXiv abstract))
9. [AV-FABLE: Audio-Visual Manipulation Forensics in Long-Form Videos](https://arxiv.org/html/2610.33413v1) (AV-FABLE authors (arXiv full text))
10. [FakeParts: a New Family of AI-Generated DeepFakes](https://arxiv.org/abs/2508.21052) (FakeParts authors (arXiv))
11. [Explainable Forensics of Manipulated Segments in Untrimmed Long Videos](https://arxiv.org/abs/2606.02402) (Feng et al. (arXiv, ICML 2026))
12. [Deepfake-Eval-2024: A Multi-Modal In-the-Wild Benchmark of Deepfakes Circulated in 2024](https://arxiv.org/abs/2503.02857) (Deepfake-Eval-2024 authors (arXiv))
13. [Hob docs (docs/README.md)](https://raw.githubusercontent.com/FrigadeHQ/hob/main/docs/README.md) (Frigade (Hob docs))
14. [LICENSE](https://raw.githubusercontent.com/FrigadeHQ/hob/main/LICENSE) (Frigade (GitHub, FrigadeHQ/hob))
15. [README.md](https://raw.githubusercontent.com/FrigadeHQ/hob/main/README.md) (Frigade (GitHub, FrigadeHQ/hob))
16. [Show HN: Hob - Open-source, on device alternative to Claude Cowork and ChatGPT](https://news.ycombinator.com/item?id=50246238) (Hacker News (Show HN thread, item 50246238))
17. [Hob](https://www.hob.chat/) (Hob)
18. [app/src/main/agent/claims.ts](https://raw.githubusercontent.com/FrigadeHQ/hob/main/app/src/main/agent/claims.ts) (Frigade (GitHub, FrigadeHQ/hob))
19. [app/src/main/agent/repeat.ts](https://raw.githubusercontent.com/FrigadeHQ/hob/main/app/src/main/agent/repeat.ts) (Frigade (GitHub, FrigadeHQ/hob))
20. [app/src/main/python/landlock.ts](https://raw.githubusercontent.com/FrigadeHQ/hob/main/app/src/main/python/landlock.ts) (Frigade (GitHub, FrigadeHQ/hob))

## Fact-check
- Round 1: 57 claim groups checked, 50 pass, 6 fix, 1 cut. Cut: two sentences saying Forklog reported an Oct 19 Lean formalization of OpenAI's ETH proof (Forklog's date was about different results). Fixed: Williams "will need to be revisited" made conditional; Alpöge quote marks removed; Forklog paraphrase; TASLE visual-only citation; Hob Apple Silicon citation; four source titles.
- Round 2: 11 checked, 10 pass, 1 fix (Forklog "voluntary and unpaid" is OpenAI's statement), applied.
- Round 3 (rewritten Hob section): 16 checked, 16 pass.
- Not verifiable: OpenAI's own blog post (403), so it is not cited. The Verge could not be fetched. Hob's repo page needed raw.githubusercontent.com. "We found no independent review of Hob" is a negative search result. Forklog is AI-translated secondary reporting.
- Editor: round 1 failed (Hob section lacked the comparison format; switched to by-the-numbers), round 2 PASS.

## To approve
1. Spot-check the sources above, especially the two ETH papers and the TechCrunch/SciAm quotes.
2. Write `editorsNote` in the issue frontmatter (agents never write it).
3. Set `reviewStatus: approved` and `reviewedOn` to the date.
