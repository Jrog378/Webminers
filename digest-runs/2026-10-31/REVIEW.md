# Review checklist: Eureka Reports 2026-10-31

Live URL (after approval): https://webminers.dev/eureka/2026-10-31-robots-txt-ai-training-opt-out-token

## Hero image
- Source page: https://wordpress.org/photos/photo/83461f065c/
- License: CC0 1.0 (https://creativecommons.org/publicdomain/zero/1.0/)
- Library: WordPress Photo Directory; "Security Lock And Chain" by Jennifer Bourn
- Why: a locked, chained gate stands in for a site asking AI crawlers to stay out. Chosen after StockSnap (Cloudflare 403 on download), Rawpixel (timeout) and Nappy (no results) failed; Unsplash/Pexels/Pixabay had no API keys.
- Check: a padlock shows a faint, partly legible embossed brand word ("Maste"). Swap if you object.

## Sources
1. [Machine-Readable Training Preference Signal](https://www.ietf.org/archive/id/draft-kelley-aipref-training-preference-signal-00.txt)
2. [draft-kelley-aipref-training-preference-signal-00 - Machine-Readable Training Preference Signal](https://datatracker.ietf.org/doc/draft-kelley-aipref-training-preference-signal/)
3. [[ai-control] New draft: draft-kelley-aipref-training-preference-signal-00](https://mailarchive.ietf.org/arch/msg/ai-control/mddjatOxSR0h6GmLRBWlc839c7w/)
4. [Supporting a shared AI training control for websites](https://developers.google.com/search/blog/2026/10/ai-training-control)
5. [Your content, your choice: clearer preferences for training and grounding](https://blogs.bing.com/search/2026/10/your-content-your-choice-clearer-preferences-for-training-and-grounding/)
6. [Making it easier for websites to express AI training preferences](https://daily.dev/posts/making-it-easier-for-websites-to-express-ai-training-preferences-ycc0xghgx)
7. [OpenAI, Google, Microsoft, Anthropic Back One AI Opt-Out Token](https://aiweekly.co/alerts/openai-google-microsoft-anthropic-back-one-ai-opt-out-token)
8. [Complete Reference On Allowing & Blocking LLM Crawlers](https://www.vanessafox.com/complete-reference-blocking-llm-crawlers/)
9. [Google's common crawlers](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers)
10. [Google Adopts New AI Training Control](https://www.seroundtable.com/google-ai-training-control-42430.html)
11. [Memory Tax: Dissecting the Net Value of Agent Memory](https://arxiv.org/abs/2610.34073)
12. [Memory Tax: Dissecting the Net Value of Agent Memory](https://huggingface.co/api/papers/2610.34073)
13. [Memory Tax: Dissecting the Net Value of Agent Memory](https://arxiv.org/html/2610.34073v1)
14. [Memory Tax](https://hexuan21.github.io/MemoryTax/)
15. [PlugMem: A Task-Agnostic Plugin Memory Module for LLM Agents](https://arxiv.org/abs/2603.03296)
16. [README.md](https://raw.githubusercontent.com/hexuan21/MemoryTax/main/README.md)
17. [Is Complex Agentic Memory Always Needed? Naive RAG Is Stronger Than We Thought](https://arxiv.org/abs/2610.30755)
18. [Diagnosing Retrieval vs. Utilization Bottlenecks in LLM Agent Memory](https://arxiv.org/abs/2603.02473)
19. [Harness the Memory: A Holistic Evaluation of Memory Substrates in Memory Agents](https://arxiv.org/abs/2608.15008)
20. [Hindsight vs RAG for AI Agents, and When to Use Each](https://hindsight.vectorize.io/guides/2026/04/21/comparison-hindsight-vs-rag-for-ai-agents)
21. [Qwenputer: a fully functioning, deterministic RISC-V CPU inside Qwen3.5](https://divagr.com/blog/qwenputer)
22. [Qwenputer: A functioning, deterministic RISC-V CPU inside Qwen3.5](https://hn.algolia.com/api/v1/items/50282838)
23. [README.md](https://raw.githubusercontent.com/divagr18/qwenputer/main/README.md)
24. [Comment 50284989](https://news.ycombinator.com/item?id=50284989)
25. [Comment 50286992](https://news.ycombinator.com/item?id=50286992)
26. [Qwenputer: a fully functioning, deterministic RISC-V CPU inside Qwen3.5](https://lobste.rs/s/zftely)
27. [README.md](https://raw.githubusercontent.com/dbreunig/nesformer/main/README.md)

## Fact-check
- Round 1: 88 checks, 62 pass, 25 fix, 1 cut (the Python-tool speed cell in the invention comparison table).
- Round 2 on changed sentences: 22 pass, 0 fix, 0 cut.
- Editor round 1 failed on the closing section; it was deleted. Round 2 result is in editor-report.md.
- Known limits: OpenAI's own post returned 403, so OpenAI's timing is attributed to secondary reporting (daily.dev, AI Weekly, Vanessa Fox). Research numbers are the preprint authors' own and not peer-reviewed.

## Approval steps
1. Read the issue and the sources above.
2. Write `editorsNote` in the frontmatter (agents never write it).
3. Set `reviewStatus: approved` and `reviewedOn: <date>`.
4. Commit and push.
