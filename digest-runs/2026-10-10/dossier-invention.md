# Dossier: invention — Big Arrow on the Screen (`bigarrow`)

Primary: https://github.com/franzenzenhofer/big-arrow-on-the-screen (README, code, CHANGELOG, CLAUDE.md, docs/ read in full via a clone on 2026-10-10; HEAD 0abf5cc, 2026-10-09)
Community: Show HN https://news.ycombinator.com/item?id=50018817 (all ~160 comments read via the HN Algolia API)
Status: one developer's open-source tool, MIT, 2 days old. No press coverage found (one web search, nothing relevant). Everything about how well it works comes from the author. Nobody has independently tested it.

## What
- A macOS command-line tool plus an "agent skill" for Claude Code and Codex. An AI agent can use it to draw a big arrow with a text sign (or a ring or box) on top of everything on the screen, pointing at a button, field, window or tab. README: "It never clicks, types or captures. It only points. Deliberately."
- The overlay lets clicks pass through and never takes keyboard focus. Every arrow removes itself: after a time limit (8 s for `point`, 300 s for `start`), when the agent process that drew it exits, when the user replies (a Claude Code hook), or when the user clicks the sign.
- Extras: `--say` reads the sign aloud. `{{value}}` in the sign becomes a one-click copy button (added 2026-10-09, not yet released). `--png` renders to an image file for documentation. Styles include straight, bend, zigzag and spiral.

## How
- One Swift binary. Its only dependency is Apple's swift-argument-parser (Package.swift). I grepped the source for networking APIs (URLSession, Network, NWConnection) and found none, which fits the README's "no telemetry ... no AI inside."
- The overlay is a borderless, non-activating `NSPanel` at `.screenSaver` window level with `ignoresMouseEvents = true` and `canBecomeKey = false` (Sources/BigArrowOverlay/OverlayPanel.swift). The code comment credits an Apple Developer Technical Support forum answer (May 2026), which says `.screenSaver` (level 1000) is required to sit above full-screen apps. I checked that independently.
- Finding the target: raw coordinates, a rectangle, a window, a UI element by its accessibility label (`--element "Allow" --app "System Settings"`), or IDs from Peekaboo (Peter Steinberger's macOS automation CLI). Drawing needs no permission. Finding elements by label needs macOS Accessibility, granted to the terminal or IDE that launched it.
- The author reports 104 automated tests (I counted 104 test functions in Tests/), CI on macOS 15, and "also passed on macOS 26 and 27". He also reports 18 behaviour checks on a clean CI runner. All of this is self-reported.

## Who
- Franz Enzenhofer (HN user `franze`). Commits use a fullstackoptimization.com email. One HN commenter remembers taking his SEO course.
- History: first commit 2026-10-08 10:39 CEST, Show HN 2026-10-09 11:03 UTC, v0.4.5 released the same day, 154 commits in about 2 days.
- AI-assisted: 113 commit messages carry "Co-Authored-By: Claude Opus 5.5" and 2 carry "Claude Fable 5.1". 15 commits are authored by "Arthur Ficial", which CLAUDE.md shows is the name used for the separate test Mac ("Arthur Mac"). One outside contributor: Jeroen Rombouts (PR #37, a bug fix).

## Why it matters
- It takes the opposite approach to "computer-use" agents. When the agent reaches a step the human should do (permission prompts, 2FA, payments, signatures) or one the agent refuses to do, it points instead of clicking. The author on HN: "Claude refuses to do certain actions (enter passwords, change security settings, create new accounts on external services) even in Yolo mode running as sudo."
- HN commenters found uses beyond the developer one: a "guiding agent rather than doing agent" for learning complex apps (Blender), helping parents or relatives with a computer, and documentation screenshots. One commenter (mistersquid) tried it: "Claude walked me through how to use Apple's Compressor.app to speed up a video."
- Traction: 366 points on HN (Algolia, read 2026-10-10). The GitHub page showed about 449 stars on 2026-10-10 (summarised by a fetch tool, not a verbatim quote). The README's "Starred by" list of companies comes from the author reading stargazers' profiles. That is not evidence that those companies use it.

## What's contested (top objections, HN)
1. **"Where" is not "whether."** tilemarch: "An arrow on the screen solves 'where do I click'; it doesn't solve 'should this happen'." ex-aws-dude: "If you can't even take the time to understand what you're clicking why even go through the formality of 'approving'". The author's fix (v0.4.3) is a skill instruction telling the agent to write the consequence on the sign ("Franz, click Pay: ..."). The model is asked to do this, and the tool does not enforce it.
2. **Deception and scams.** hn8726 asked what stops the tool from covering a "Decline" button. user-: "Seems great for scammers targeting old people tbh". The author's FAQ answer is "Not beyond what it can already do": an agent with shell access can do far worse. Rings and boxes are outlines, signs avoid covering the target, and a click removes the arrow, each backed by a test. Another commenter agreed (SwtCyber: the agent "is already executing arbitrary code in your shell"). This holds against a misbehaving agent. It does not settle the separate question of fake arrows from other sources (Maken: "How could you tell apart the legit arrow ... from all the fake ones?").
3. **"LLM slop."** Several top-level comments dismiss it as AI-generated (einpoklum, mococa, cyberjunkie). The commit trailers confirm heavy use of Claude. socializer said the original hero screenshot's arrows were "obviously and badly misaligned" and were "stealth-replaced". The CHANGELOG (0.4.3/0.4.4) does record the re-staging, so it was disclosed, just not announced in the thread.
4. **Is it needed at all?** usrbinbash asked "a label for a label?" m-s-y asked why it needs to be a skill (answered: about 1,400 tokens loaded on demand). Others called it wasteful or "Clippy".

## Strongest counterpoint
An arrow makes clicking easier exactly at the moments (approvals, payments, permissions) where the user is supposed to stop and think. The only safeguard is a prompt instruction to the agent, so the tool could end up turning consent into rubber-stamping. Sources: tilemarch and ex-aws-dude on HN, plus LoneRanger1024: "permission prompts need different treatment ... the assistant should explain what clicking it will do."

## Honest caveats for the writer
- macOS only (14+, Xcode 16+ to build). No Windows or Linux. The author says an iPad version is impossible because iPadOS doesn't let apps draw over other apps.
- Two days old. Every number on reliability, CPU use (1.4% "on a CI runner") and tokens (182/1,398) is self-reported.
- Label-based targeting needs Accessibility permission for the user's terminal. Inside Chrome web pages it only works if Chrome is started with `--force-renderer-accessibility`.
- The tool contains no AI. It only helps if you already run an agent (Claude Code or Codex) with shell access to your Mac.
- The README is jokey and was heavily AI-assisted. Quote the README's claims as the author's claims.

## What's next
- Unreleased on main: copy buttons. The author declined novelty requests (rainbow arrows, airhorn) to keep the arrow "calm and quick to read".
- An HN commenter asked for Linux support. No such plan appears in the repo docs I read.
- docs/decisions includes an MCP server decision (2026-10-08). I did not read it in detail, so I can't say what was decided.

## Key numbers
- HN: 366 points, about 160 comments, posted 2026-10-09 11:03 UTC.
- 154 commits, first on 2026-10-08. v0.4.5 on 2026-10-09. 113 commits co-authored with Claude Opus 5.5.
- 104 tests (author, I counted 104). CPU 1.4% (author). Skill 182 tokens always loaded, 1,398 when used (author).
- Default lifetimes: 8 s (`point`), 300 s (`start`).

## Quotable lines
- "It never clicks, types or captures. It only points. Deliberately." (README) https://github.com/franzenzenhofer/big-arrow-on-the-screen
- "'Guiding agent' rather than 'doing agent'." (inanutshellus, HN) https://news.ycombinator.com/item?id=50019008
- "An arrow on the screen solves 'where do I click'; it doesn't solve 'should this happen'" (tilemarch, HN) https://news.ycombinator.com/item?id=50020731

## Also in this thread (suggestions)
- Prior art: Don Hopkins' 1989 PostScript pointing-hand overlay for NeWS (HN 50019247). Zoom's annotation arrow (HN 50019468).
- Peekaboo (github.com/openclaw/Peekaboo), "a macOS CLI and menu-bar app for screen capture, accessibility inspection, and native UI automation." It is the "doing" counterpart, and bigarrow reads its output.
- It ties into the digest thread: the research pick (agents failing when their actions change things) and the Google news pick (agents doing business tasks). bigarrow is the "keep the human's hand on the mouse" option.

## Unverified
- Exact current star, fork and issue counts (the fetch tool summarised the page: 449 stars, 6 forks).
- The "also passed on macOS 26 and 27" claim, and every behaviour-check result (I did not run CI or the binary; no Mac available).
- Whether the "Starred by" companies actually use the tool.
- "Twenty-six tools were checked first ... None did this." I did not audit the research folder's list.
