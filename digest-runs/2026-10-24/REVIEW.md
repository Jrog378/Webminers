# Review checklist: Can AI Prove Code Never Crashes? | Eureka Reports Oct 24

Live URL (noindex until approved): https://webminers.dev/eureka/2026-10-24-claude-proofs-code-never-crashes

## Hero image
- Library: Wikimedia Commons (from Flickr) (Tier 2 fallback; Tier 1 libraries timed out, returned 403/no results, or were skipped for rotation)
- Source page: https://commons.wikimedia.org/wiki/File:Green_circuit_board_II_(2389301870).jpg
- License: CC BY 2.0 (https://creativecommons.org/licenses/by/2.0/) — credit required, shown in the page credit
- Why: generic backlit circuit board standing in for software reliability; no specific-to-story image was available. Swap if you prefer something more specific.
- Inspected for watermarks, faces and logos: none.

## Sources
1. [LLMs are making formal software verification feasible at a much larger scale](https://www.anthropic.com/research/formal-verification) (Anthropic Frontier Red Team with Theorem, 2026-10-22)
2. [Comprehensive Formal Verification of an OS Microkernel](https://sel4.systems/Research/pdfs/comprehensive-formal-verification-os-microkernel.pdf) (seL4 team (ACM Transactions on Computer Systems), 2014-02-01)
3. [Appendix: LLMs are making formal software verification feasible at a much larger scale](https://www-cdn.anthropic.com/files/4zrzovbb/website/6867eadf760258fa8b42a504600cd3c036d16358.pdf) (Anthropic (appendix PDF), 2026-10-22)
4. [OSS Verify: proofs about OSS-Fuzz fuzz targets](https://github.com/theorem-labs/oss-verify-proofs) (GitHub (theorem-labs), 2026-10-22)
5. [LLMs are making formal software verification feasible at a much larger scale (comment 50202977)](https://news.ycombinator.com/item?id=50202977) (Hacker News (gr_norm, comment 50202977), 2026-10-23)
6. [LLMs are making formal software verification feasible at a much larger scale (comment 50203094)](https://news.ycombinator.com/item?id=50203094) (Hacker News (jasongross, comment 50203094), 2026-10-23)
7. [Prediction: AI will make formal verification go mainstream](https://martin.kleppmann.com/2025/12/08/ai-formal-verification.html) (Martin Kleppmann (personal blog), 2025-12-08)
8. [OSS Verify](https://theorem.dev/oss-verify/) (Theorem, 2026-10-22)
9. [Securing our frontier model training environment](https://openai.com/index/securing-our-frontier-model-training-environment/) (OpenAI, 2026-10-23)
10. [An agent used DNS to reach an external chatbot](https://alignment.openai.com/misalignment-reports/an-agent-used-dns-to-reach-an-external-chatbot/) (OpenAI Alignment (misalignment report), 2026-09-25)
11. [OpenAI now trains its frontier AI models with no internet access](https://www.theverge.com/ai-artificial-intelligence/1018021/openai-training-top-ai-models-no-internet) (The Verge (Emma Roth), 2026-10-23)
12. [OpenAI says it will no longer train its AI models on the live internet, citing “significant risks”](https://techcrunch.com/2026/10/23/openai-says-it-will-no-longer-train-its-ai-models-on-the-live-internet-citing-significant-risks/) (TechCrunch (Tim Fernholz), 2026-10-23)
13. [Why can’t we just keep rogue AIs off the internet?](https://www.theverge.com/ai-artificial-intelligence/999881/why-cant-we-airgap-rogue-ai-agents) (The Verge (Robert Hart), 2026-09-24)
14. [Securing our frontier model training environment (comment 50216667)](https://news.ycombinator.com/item?id=50216667) (Hacker News (bakies, comment 50216667), 2026-10-23)
15. [OpenAI’s misalignment monitoring system had “a number of novel vulnerabilities,” third-party evaluators found.](https://www.theverge.com/ai-artificial-intelligence/1017179/openais-misalignment-monitoring-system-had-a-number-of-novel-vulnerabilities-third-party-evaluators-found) (The Verge (Jay Peters), 2026-10-22)
16. [Investigating unintended model actions in our evaluations and internal use](https://www.anthropic.com/research/investigating-unintended-model-actions) (Anthropic, 2026-10-09)
17. [What did Enron know? The Enron Brain](https://www.thisandthat.chat/enron/) (this+that, 2026-10-23)
18. [Methodology: The Enron Brain](https://www.thisandthat.chat/enron/methodology.html) (this+that, 2026-10-23)
19. [Show HN: We had AI write a wiki from 45k Enron emails, every fact cited](https://news.ycombinator.com/item?id=50207620) (Hacker News (jreynar), 2026-10-23)
20. [dynegy.sources.json](https://www.thisandthat.chat/enron/dynegy.sources.json) (this+that, 2026-10-23)
21. [Dynegy](https://www.thisandthat.chat/enron/dynegy.html) (this+that (The Enron Brain), 2026-10-23)

## Fact-check
- Round 1: 58 claims checked, 49 pass, 8 fix, 1 cut (cut: "That is the only human check on the accuracy figure").
- Round 2: 27 claim groups, 24 pass, 3 fix (tooling-bug wording, "of Theorem" affiliation, "startup"). Writer applied them; they were NOT re-verified because the 2-round limit was used. The "Hacker News readers raised the same objection" lead-in was removed by the orchestrator.
- Known soft spots: OpenAI page (source 9) 403s to bots and was read via a reader proxy; Anthropic/Theorem and this+that figures are all company claims; GitHub API was blocked.

## To approve
1. Write `editorsNote` in the frontmatter.
2. Set `reviewStatus: approved` and `reviewedOn` to the date.
