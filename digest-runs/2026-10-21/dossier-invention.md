# Dossier: invention — Sphinx (git hook that quizzes you on your AI agent's code)

Sources read in full (2026-10-21): landing page https://sphinx-six-theta.vercel.app/ ; README https://github.com/parthh01/sphinx (read via raw.githubusercontent.com/parthh01/sphinx/main/README.md) ; eval report https://github.com/parthh01/sphinx/blob/main/eval/RESULTS.md ; npm registry metadata for `sphinx-understand` ; all 89 comments of the HN thread https://news.ycombinator.com/item?id=50137950 (via HN Algolia API) ; the X post the page links for its epigraph.
Status: an open-source developer tool (MIT, v0.1.x). Not research, so peer review doesn't apply. No press coverage found. Everything about how it works comes from the authors' own README and page (claimed, not independently tested).

## 1. What
- Sphinx is a Git hook. When you push to a protected branch (by default `main` or `master`), Git waits while a separate "reviewer" LLM asks you to predict what the change will do. Get it wrong and it explains, then gives you a new scenario. Get it right and the same push continues. [README]
- Free, FOSS, MIT licensed. Installed with `npm install -g sphinx-understand`, then `sphinx install`. [page, README, LICENSE]
- Latest npm version is 0.1.11. The package was first published 2026-10-16. The Show HN was posted 2026-10-18 by user `critiquebrowser` and got 252 points and 89 comments. [npm registry, HN API]

## 2. How
- The reviewer is a separate model that "reads the committed change through read-only Git tools and does not see the conversation that produced the code." [README]
- Questions are meant to cover "behavior, failure modes, and invariants rather than file names or function names." The check is open-book. [README]
- Number of questions: small changes get up to one (none for docs or trivial edits). Large changes get up to three at the default depth. A "distance" setting (high/low/mixed) moves questions between design and implementation detail. [README]
- Reviewer backends: your existing Claude Code or Codex plan (setup suggests Haiku or GPT-6 Luna), OpenRouter, or any OpenAI-compatible endpoint. Sphinx has no hosted service. [README]
- A typical check makes "about 5 to 8 requests, plus about one per answer". There's no default cap on calls. [README]
- Works with Claude Code, Codex, Cursor, OpenCode, Pi, or plain git. "Your answers never reach the coding agent." [page]
- Escape hatches: "Skip this time", `sphinx yolo` (checks off), and Pause. Every skip is logged. A pass lasts 24 hours for the same change. If `gh` is signed in, it can set a GitHub commit status `sphinx/understanding`. [README]
- Requirements: Node 22.19+. Runs on macOS, Linux or WSL. Native Windows isn't supported. [README]

## 3. Who
- Repo `parthh01/sphinx`. The npm maintainer is `critique-ai` (email domain critique-labs.ai). The copyright line reads "Sphinx contributors". HN submitter: `critiquebrowser`. I could not verify a full personal name.

## 4. Why it matters
- It targets a widely felt problem: shipping agent-written code you don't understand. HN commenters describe it from experience: "sometimes when people ask deeper questions about it, I get fucked. Because I don't understand my own PR." (openphalanx). Another: "We started running into bad bugs recently due to people just copy pasting the Jira into the prompt" (sailorganymede).
- Design choice worth highlighting: it tests the person rather than adding another AI reviewer of the code. HN commenter alexwrich: "I like that it tests whether the person understands the change instead of adding another AI reviewer."

## 5. What's contested (top HN objections)
1. **Easy to bypass or game.** "Nothing prevents a lazy person from copy-pasting the question to the agent" (lecarore). Another said devs would "probably just ask their agent to remove the hook anyways like they do with our husky hook" (dawnerd). The README concedes this itself (see counterpoint).
2. **Who is it for?** "People who care about the problem will definitely not be using this... People who don't care... will continue to not care." (altmanaltman). "cute and novel, but practically useless" (compounding-err).
3. **Comprehension isn't correctness.** "understanding what a PR does versus knowing how to tell if it's wrong" (alyssassan). You can pass while still shipping "a leftover debug print, an assertion weakened..." (princejain756).
4. **Friction / confirmation fatigue.** "Soon we will have agents that interact with Sphinx for us." (jamienk). One builder of a similar tool "immediately got frustrated with it and stopped using it" (chacha-bong).
5. **Not new.** Several people have built similar tools: vibecheck.dev (PR-level merge gate), PEAK "Proof of Effort And Knowledge" from about 6 months earlier with anti-cheat, and a few private "quiz me on the PR" skills. PEAK's builder said OSS maintainers he asked "all hated the idea."
6. **Naming and quote.** The name clashes with the Sphinx docs tool (sphinx-doc.org). The landing page jokingly credits the epigraph to "Sun Tzu". It actually comes from an X post by @yacineMTB (kache), 2026-02-04: "you can outsource your thinking / but you cannot outsource your understanding". HN commenters and a blog credit Karpathy with popularizing it. I couldn't verify the Karpathy/Sequoia link from a primary source.

## The honest caveat (strongest counterpoint)
The authors are frank about the tool's limits, and their own evaluation shows the grader is unreliable:
- README: "This is practice, not a security gate. Anyone with local access, including a coding agent, can bypass hooks or get outside help. Passing does not prove who wrote the code or that you understood it unaided. The examiner is an LLM and can be wrong."
- eval/RESULTS.md (2026-10-15) uses only "five small, synthetic Git repositories". The latest run is "**not an all-green semantic evaluation**", and the report says "No tested route is established here as reliably correct for arbitrary repositories or answers." In one documented case, a correct answer was marked wrong ("a current product false negative"). Switching to a stronger model (Sonnet 5.5) "reproduced the material false negative."
- Scope: "Version 0.1 checks local commits and pushes only. It does not cover web merges, CI-required checks, or deployments."
- Privacy cost: "Code leaves your machine." The changed code goes to the reviewer provider. `.env` and key files are excluded, but ignore rules "will not catch a secret pasted into ordinary source."
- Independent critique comes from HN (bypass, comprehension ≠ correctness), not from press or researchers.

## Key numbers
- HN: 252 points, 89 comments, posted 2026-10-18 04:33 UTC.
- npm: v0.1.11. First published 2026-10-16. Downloads 262 / 374 / 1,364 on Oct 16 / 17 / 18. (npm's API shows 0 for Oct 19–20, probably a reporting lag, so don't quote those.)
- About 5–8 model requests per check. Up to 3 questions at default depth. Pushes block for up to 25 minutes. A pass is valid 24 hours.
- Eval: 5 synthetic repos. In the latest live run, 12 of 14 generated-question verdict probes matched. 560 unit/integration tests pass, but the authors say that doesn't establish grading quality.

## Quotable lines
- "Before your agent's code ships, it asks you a question about what that code actually does." — https://sphinx-six-theta.vercel.app/
- "This is practice, not a security gate... The examiner is an LLM and can be wrong." — https://github.com/parthh01/sphinx
- "Nothing prevents a lazy person from copy-pasting the question to the agent" — HN user lecarore, https://news.ycombinator.com/item?id=50137950

## Also in this thread
- vibecheck.dev (https://github.com/bhurghundii/vibecheck.dev), a similar tool gating at the PR merge level (mentioned on HN, not read).
- PEAK "Proof of Effort And Knowledge" by jeffreysmith, with anti-cheat (https://substack.com/@jeffksmithjr/p-195763168, mentioned on HN, not read).
- Ties to the digest thread: "whether you actually understand the code your agent wrote."

## Unverified
- The full real-world identity of the author beyond the handle parthh01 and the critique-labs.ai domain.
- GitHub star count and repo creation date (GitHub API access was blocked in this session).
- Karpathy's use of the quote at Sequoia AI Ascent (secondary sources only).
- Whether the demo exchange reflects real output. The page itself labels it "An illustrative exchange."
