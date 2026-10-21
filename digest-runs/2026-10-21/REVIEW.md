# Review checklist: 2026-10-21-meta-muse-chat-sharing-paused

Live URL (once deployed): https://webminers.dev/eureka/2026-10-21-meta-muse-chat-sharing-paused

## Hero image
- Source page: https://wordpress.org/photos/photo/6726a05b1d/
- License: CC0 1.0 (https://creativecommons.org/publicdomain/zero/1.0/)
- Library: WordPress Photo Directory; author Nilo Velez
- Why: padlock stands in for the privacy story; no faces, logos, text or places. StockSnap and Rawpixel files were unusable (403 / under 1200 px), so WordPress was reused (also used for the 2026-10-18 issue).

## Sources
1. [Meta Muse exposes users' personal and business secrets when they share conversations](https://arstechnica.com/security/2026/10/meta-muse-exposes-users-personal-and-business-secrets-when-they-share-conversations/) (Ars Technica (Dan Goodin), 2026-10-20, Reporting)
2. [GhostShares](https://blog.claroc.io/ghostshares-muse-passive-dns/) (Claroc Research Team (Claroc blog), 2026-10-18, Official)
3. [Meta pauses Muse AI chat sharing](https://www.theverge.com/tech/1014627/meta-muse-ai-sharing-ai-chats) (The Verge (Emma Roth), 2026-10-20, Reporting)
4. [Introducing Muse, a personal AI agent](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/) (Meta Newsroom, 2026-09-08, Official)
5. [Muse, Meta's extraordinarily privileged AI assistant, has a serious 0-day](https://arstechnica.com/security/2026/09/muse-metas-extraordinarily-privileged-ai-assistant-has-a-serious-0-day/) (Ars Technica, 2026-09-21, Reporting)
6. [OpenAI removes ChatGPT self-doxing option](https://www.theregister.com/2025/08/01/openai_removes_chatgpt_selfdoxing_option/) (The Register, 2025-08-01, Reporting)
7. [370K Grok AI chats made public without user consent](https://9to5mac.com/2025/08/20/370k-grok-ai-chats-made-public-without-user-consent/) (9to5Mac, 2025-08-20, Reporting)
8. [Meta's Muse hits 10M U.S. downloads in 40 days, a milestone reached by only 11 other apps](https://techcrunch.com/2026/10/20/metas-muse-hits-10m-u-s-downloads-in-40-days-a-milestone-reached-by-only-11-other-apps/) (TechCrunch, 2026-10-20, Reporting)
9. [Has GPT-6-Astra Achieved Embodied Intelligence?](https://arxiv.org/abs/2610.22471) (SenseNova Joint Research Team (arXiv), 2026-10-19, Paper)
10. [Introducing GPT-6 Astra: the most intelligent and aligned model in the world](https://community.openai.com/t/introducing-gpt-6-astra-the-most-intelligent-and-aligned-model-in-the-world/1394703) (OpenAI Developer Community (repost of OpenAI announcement), 2026-09-03, Social)
11. [An Unexpected Robot Policy](https://arxiv.org/abs/2609.24170) (Zhang et al. (arXiv), 2026-09-21, Paper)
12. [RoboICL](https://arxiv.org/abs/2609.34261) (RoboICL (arXiv), 2026-09-28, Paper)
13. [AA-Robotics v0.1](https://artificialanalysis.ai/articles/aa-robotics) (Artificial Analysis, 2026-10, Reporting)
14. [RoboHarm](https://robocurve.org/roboharm/) (Robocurve, 2026-09-18, Reporting)
15. [VLM harness](https://pantograph.com/journal/vlm-harness) (Pantograph, 2026-09, Reporting)
16. [Sphinx](https://sphinx-six-theta.vercel.app/) (Sphinx, 2026-10-21, Official)
17. [sphinx-understand](https://registry.npmjs.org/sphinx-understand) (npm registry, 2026-10-19, Official)
18. [Show HN: Sphinx – A hook that quizzes you on your AI's code before shipping](https://news.ycombinator.com/item?id=50137950) (Hacker News (critiquebrowser), 2026-10-18, Social)
19. [sphinx](https://github.com/parthh01/sphinx) (GitHub (parthh01), 2026-10-21, Official)
20. [eval/RESULTS.md](https://github.com/parthh01/sphinx/blob/main/eval/RESULTS.md) (GitHub (parthh01), 2026-10-15, Official)
21. [you can outsource your thinking / but you cannot outsource your understanding](https://x.com/yacineMTB/status/2018886083120153046) (X (@yacineMTB), 2026-02-04, Social)

Note: the writer reconstructed several source titles (e.g. Verge, Meta newsroom, Claroc, RoboICL, AA-Robotics, RoboHarm, Pantograph, Sphinx page); worth a glance against the live pages.

## Fact-check
- Checked 48 entries: 46 pass, 2 fix (applied), 0 cut.
- Fixes: RoboDojo prior best now 29.6% (31.4% best prior agentic method); RoboHarm 2/100 safety refusals (3/100 any reason).
- Caveats: OpenAI launch page is a community-forum repost (openai.com returned 403); Meta has no published statement (only an email to Ars Technica and The Verge); Claroc's 6,800 figure is unreplicated and Claroc sells related tooling; ledger claims-research.json r34 has a stale 'sum to 3' note (draft is correct).

## Editor
- Round 1 FAIL (closing section was a recap; cut). Round 2 PASS.

## Models
- Listed per the agent definitions' model settings (Opus: selector, deep divers, writer, editor; Sonnet: scouts, format editor, fact-checker, image finder, SEO and this orchestration).

## To approve
1. Read the issue and the hero image.
2. Write `editorsNote` in the frontmatter (agents never do).
3. Set `reviewStatus: approved` and `reviewedOn: <date>`.
4. Commit and push.
