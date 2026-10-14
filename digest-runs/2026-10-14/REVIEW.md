# Review checklist: Eureka Reports, Wed Oct 14, 2026

Live URL (once approved): https://webminers.dev/eureka/2026-10-14-anthropic-ai-self-replication-test
File: content/digest/2026-10-14-anthropic-ai-self-replication-test.md (pushed to branch digest/2026-10-14; npm ci failed on lockfile drift, so it was not pushed to main)

## Hero image
- Library: WordPress Photo Directory (CC0 1.0): Raspberry Pi Zero board
- Source page: https://wordpress.org/photos/photo/59766469f8/
- License: https://creativecommons.org/publicdomain/zero/1.0/
- Why: a cheap single-board computer matches the news story's "cheap devices" angle; no faces, logos or landmarks. A partial SD-card brand label was cropped out. Rotated away from Wikimedia Commons, used in the last two issues.
- [ ] Look at the image on the page and confirm you're happy with it.

## Sources
1. [Anthropic Frontier Red Team (William Zhou, Daniel Freeman) — AI models may be capable of self-replicating without access to a datacenter](https://www.anthropic.com/research/self-replicating-ai) (Official, 2026-10-12)
2. [Tom's Hardware (Zak Killian) — Anthropic warns of self-replicating AI worm threat that doesn't need data centers to self-improve and spread — current deployment is impractical but could become a worry as tech improves](https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropic-warns-of-self-replicating-ai-worm-threat-that-doesnt-need-data-centers-to-self-improve-and-spread-current-deployment-is-impractical-but-could-become-a-worry-as-tech-improves) (Reporting, 2026-10-13)
3. [eWeek (Kezia Grace Jungco) — Anthropic Warns of AI Self-Replication on Smart Devices](https://www.eweek.com/news/anthropic-self-replicating-ai-iot-devices/) (Reporting, 2026-10-13)
4. [Hacker News — AI models may be capable of self-replicating without access to a datacenter](https://news.ycombinator.com/item?id=50061603) (Social, 2026-10-12)
5. [Lei, Lin, Lu, Torr, Zou (arXiv) — Thinking Inertia: LLMs Keep Thinking When Told Not To](https://arxiv.org/abs/2610.11765) (Paper, 2026-10-08)
6. [Lei, Lin, Lu, Torr, Zou (arXiv, full text) — Thinking Inertia: LLMs Keep Thinking When Told Not To](https://arxiv.org/html/2610.11765) (Paper, 2026-10-08)
7. [GitHub (thinking-inertia) — README.md](https://raw.githubusercontent.com/thinking-inertia/code/main/README.md) (Official, 2026-10)
8. [Hugging Face Papers — Thinking Inertia: LLMs Keep Thinking When Told Not To](https://huggingface.co/papers/2610.11765) (Social, 2026-10-13)
9. [Jason Zhu, Hongyu Li (arXiv) — Towards Concise and Adaptive Thinking in Large Reasoning Models: A Survey](https://arxiv.org/html/2507.09662) (Paper, 2025-07-13)
10. [Yanda Chen et al. (arXiv) — Reasoning Models Don't Always Say What They Think](https://arxiv.org/abs/2505.05410) (Paper, 2025-05-08)
11. [Wenjie Ma et al. (arXiv) — Reasoning Models Can Be Effective Without Thinking](https://arxiv.org/abs/2504.09858) (Paper, 2025-04-14)
12. [GitHub (plimsollmark) — plimsoll](https://github.com/plimsollmark/plimsoll) (Official, 2026-10-12)
13. [Hacker News (cagster) — Show HN: Plimsoll, a self-hosted sandbox for code your AI agent writes](https://news.ycombinator.com/item?id=50049388) (Social, 2026-10-11)
14. [GitHub (plimsollmark) — SECURITY.md](https://github.com/plimsollmark/plimsoll/blob/main/SECURITY.md) (Official, 2026-10-12)
15. [gVisor — gVisor documentation](https://gvisor.dev/docs/) (Official, 2026-10-14)
16. [GitHub (plimsollmark) — Self-hosted E2B alternatives for AI-agent code, compared](https://github.com/plimsollmark/plimsoll/blob/main/docs/compare/index.html) (Official, 2026-10-11)
17. [GitHub (plimsollmark) — validation.go](https://github.com/plimsollmark/plimsoll/blob/main/sandbox/validation.go) (Official, 2026-10-12)
18. [Northflank Blog (Deborah Emeni) — Kata Containers vs gVisor](https://northflank.com/blog/kata-containers-vs-gvisor) (Reporting, 2026-04-29)
19. [GitHub (plimsollmark) — isolation-tiers.md](https://github.com/plimsollmark/plimsoll/blob/main/docs/isolation-tiers.md) (Official, 2026-10-12)
20. [GitHub (plimsollmark) — docs/notes/pids-limit](https://github.com/plimsollmark/plimsoll/blob/main/docs/notes/pids-limit/index.html) (Official, 2026-10-11)
21. [GitHub (kata-containers) — Can't set the number of processes limit in the container](https://github.com/kata-containers/kata-containers/issues/4887) (Official, 2022-08-11)

## Fact-check
- Round 1: 64 claims checked, 54 pass, 10 fix, 0 cut. Round 2: 20 checked, 20 pass, 0 fix, 0 cut.
- Nothing cut. Open caveats: Kata issue #4887 (source 21) could not be loaded directly (GitHub 403); the "closed as not planned" claim is attributed to the Plimsoll author. The NeurIPS acceptance is attributed to the authors (arXiv comment field and README); it was not found in NeurIPS's own list.
- Editor: 1 required fix (optional closing section restated the dek) resolved by removing the closing; one wording fix applied.

## Approval steps
- [ ] Write `editorsNote` (agents never do)
- [ ] Set `reviewStatus: approved`
- [ ] Set `reviewedOn` to the review date
