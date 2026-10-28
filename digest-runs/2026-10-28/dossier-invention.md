# Dossier: invention — Hob

**Pick:** Hob, a free, open-source (MIT) desktop app from Frigade that runs a Claude Cowork-style file agent on local open-weight models.
**Primary:** https://github.com/FrigadeHQ/hob (the github.com page returned 403. I read the README, docs, LICENSE and source through raw.githubusercontent.com, so the fallback was not needed)
**Launch:** Show HN, 2026-10-26T16:12Z, user pancomplex ("Christian"). 164 pts. https://news.ycombinator.com/item?id=50246238
**Status:** Shipping software, app version 0.2.2 (app/package.json). There is no independent review or press coverage. A web search for Hob turned up no articles.

## Confirmed from the repo (the caller asked about license, platforms and models)
- **License: MIT.** The LICENSE file says "MIT License / Copyright (c) 2026 Frigade". package.json says `"license": "MIT"`. The README links to the "MIT license".
- **Platforms: Mac, Windows, Linux.** The README has download links for `Hob-mac-arm64.dmg`, `Hob-windows-x64.exe` and `Hob-linux-x86_64.AppImage`. The release workflow builds on macos-14, windows-latest and ubuntu-latest. The Mac build is Apple Silicon only (the site says "Apple Silicon Macs"). At least 8 GB of RAM is required.
- **Models** (from docs/README.md): "Google's Gemma 4 for most computers (E4B Compact on 8 GB Macs, E4B on 16 GB, 26B from 24 GB) and OpenAI's gpt-oss 120B for workstations." The full catalog (catalog/catalog.json) lists Qwen3 1.7B (last resort), Gemma 4 E2B, E4B, E4B Compact, 26B A4B, 26B Compact, gpt-oss 20B and gpt-oss 120B (63.39 GB). Every entry is Apache-2.0. Images go to a small Qwen3-VL 4B model. Dictation uses a local Whisper model (HN post).
  - **Discrepancy:** On HN the author said an 8 GB M1/M2 Mac gets "Gemma 4 E2B". The current docs say "E4B Compact on 8 GB Macs". The E4B Compact catalog entry was added 2026-10-22. Go with the docs, or say "a small Gemma 4 model".

## What
A desktop "AI coworker" that works on your folders, spreadsheets, PDFs and photos. It writes and runs sandboxed Python, draws charts, fills in PDF forms (Mac only), searches the web through a local metasearch engine (SearXNG), and supports MCP connectors and Agent Skills plugins. It runs in 32 languages and needs no account. Docs tagline: "The full AI coworker experience. None of the cloud."

## How
- Electron with llama.cpp running in its own process (HN post). package.json lists `electron` 44 and `node-llama-cpp` 3.22.1. It uses Metal on Mac and CUDA or Vulkan elsewhere (docs).
- Model picker: it "looks at your memory and memory bandwidth and then picks the smartest one that stays above about 15 tokens a second with room for a decent context" (author, HN). Models are "ranked on agent work (multi-step tasks and tool use)" (docs). The catalog gives each model an agentScore.
- Safety: an approval card before anything in your folders changes, Undo for every task, and code sandboxed to the chat's folder (docs). The sandbox uses sandbox-exec on macOS, Landlock on Linux and a low-integrity process on Windows, with no network unless asked (HN).
- **The key lesson: guards, not prompts.** The author wrote: "4B models happily saying 'here's your chart' without ever calling the chart tool or get stuck in an infinite call loop. I spent a fair amount of the work building guards vs tweaking prompts (that didn't really work for small models)." The source code bears this out:
  - `app/src/main/agent/claims.ts` uses a regex to catch replies that claim files were "renamed / moved / deleted" when no file changed. It then sends the model a "[Note from Hob, not from the user: ...]" telling it to use the tools or admit the task isn't done. It also checks whether file names the reply mentions actually exist on disk ("checking the files instead of the words works in any language"). It catches chart claims made without a `make_chart` call, using a chart-word regex in many languages. It also handles "shall I proceed?" stalls and replies that stop partway through a task ("small models run out of steam mid-task").
  - `app/src/main/agent/repeat.ts` detects loops. If the same passage of 160 or more characters appears three times in a row, the reply is cut.

## Who
Frigade (frigade.com). The site footer says "Backed by Y Combinator". The developer is "Christian" (HN pancomplex), who built it as a solo dev over "the last couple of weeks" and chose the name by a vote with coworkers ("Hob vs Garth").

## Why it matters
- It brings the file-handling agent experience of the Claude and ChatGPT desktop apps to people who want privacy and offline use, with setup handled for them. One experienced engineer on HN said the model and runtime "decision paralysis" was what had stopped them, and "having something Just Work(tm) makes getting started so much easier."
- The code shows a general point: with small models you check what the agent did against the file system and tool log, and don't trust what its reply says. This fits the issue's thread about checking AI output rather than trusting it.

## What's contested / counterpoints
1. **Capability.** HN user wilg tried it and called it "not really usable for any real work". Asked why, they said "The models are really dumb, mainly." They also complained that it left 18 GB of models with no way to clean them up. The author promised a cleanup fix. The author concedes "local models are weaker than frontier cloud models", and his capability claims come from "my own evals". He has published no benchmarks yet ("Not yet").
2. **Not unique.** jrm4: "there are a zillion of these, including ones that do what yours does." Commenters named Open WebUI, Osaurus, Orca, koboldcpp, Hermes and LM Studio. The author says he tried Jan, OpenWork, Chatbox and Lobe, and that none of them handled local files well.
3. **Sandbox limits (from the source).** The Linux sandbox file says: "Without Landlock (older kernels) the code runs unlimited". It also says network blocking needs kernel 6.7+. The Windows build is not code-signed yet, so the FAQ tells users to click through the "Windows protected your PC" warning.
4. Electron instead of native (_aavaa_). The author: "even Claude's own Desktop app is made in Electron."

## Key numbers
- 164 HN points (topics.json/candidates file; the API reported 164)
- 8 GB RAM minimum; 16 GB "good for everyday tasks" (site)
- 10–25 GB disk for Hob and its models, about 75 GB for the largest (site)
- gpt-oss 120B build is 63.39 GB; Gemma 4 E4B is 5.15 GB (catalog)
- About 15 tokens/sec floor in model selection (author, HN)
- 32 languages
- Loop guard: a 160-char passage repeated 3 times

## Quotable lines
- "The full AI coworker experience. None of the cloud." (https://raw.githubusercontent.com/FrigadeHQ/hob/main/docs/README.md)
- "I spent a fair amount of the work building guards vs tweaking prompts (that didn't really work for small models)." (author, https://news.ycombinator.com/item?id=50246238)
- "Small models do this; checking the files instead of the words works in any language." (code comment, https://raw.githubusercontent.com/FrigadeHQ/hob/main/app/src/main/agent/claims.ts)

## Also in this thread
- ADRs for AI (https://adrs.systems): git-versioned decision records that agents can query. This was the runner-up.
- Farol (https://github.com/winnin/farol): a PR risk map for the human approver.
- Project Zero, "Fuzzers vs. AI" (https://projectzero.google/2026/10/fuzzing-v-AI.html). Not read.

## Unverified
- That releases actually exist at /releases/latest. I could not reach github.com/releases. The links are in the README and the release workflow exists.
- The Windows low-integrity and macOS sandbox-exec details come only from the HN post. I read only the Linux Landlock code.
- The HN comment count (42 per the scout). I did not recount it.
- No GitHub star count was available because the API was blocked.
