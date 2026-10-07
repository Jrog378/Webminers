# Dossier: Cool Invention — SCM (Screen Memories)

Issue 2026-10-07, window 2026-10-03..2026-10-06. Primary source: https://github.com/allenv0/SCM (README read in full via raw.githubusercontent.com; LICENSE and package.json also read).
Status: open-source app (MIT), developer's own claims. No independent benchmarks, no press coverage found. Treat all performance and privacy statements as the developer's claims ("the developer says...", "according to the project's README...").

## 1. What
- SCM ("Screen Memories") is a free, open-source Mac app that lets you search photos and videos in any folder by describing them in plain language. README tagline: "Deep AI search for every photo and every frame of video in any folder on macOS." [c1]
- Local-first: "no accounts, no cloud, no uploads. Inference runs on your Mac." [c2]
- Five search modes: Files (whole photos/videos by meaning), Scenes (moments inside a video, jump to timecode), OCR (visible text), Dialogue (exact spoken words via Whisper), LLMs (opt-in local chat with cited answers). [c3]
- License: MIT, "Copyright (c) 2026 Allen Lee". Current version 0.2.4 in package.json / README; the Homebrew cask lists 0.2.5. [c4, c5, c16]
- Free: author on HN, "It's 100% free and open source!" [c15]

## 2. How (plain-language translation for the writer)
- Image search uses an embedding model (a model that turns pictures and text into lists of numbers so similar meanings land close together). Default is CLIP ViT-L/14@336; three SigLIP variants are switchable. Results are "scored by cosine similarity against image embeddings". [c6, c7]
- Video: ffmpeg finds shot boundaries (camera cuts), splits each video into segments, and "Each segment embeds its midpoint frame and keeps a poster". Density is user-chosen: Eco = 1 point per 60 s, Balanced (default) = 1 per 30 s, down to Ultra Pro = 1 per 2.5 s. [c8, c9]
  - WRITER NOTE: despite the "every frame" tagline, the README itself says it samples one frame per segment. Do not repeat "every frame" as fact; attribute it as the app's pitch and explain the sampling.
- Dialogue: Whisper tiny.en (~150MB default) transcribes speech; search is exact-word matching, no AI ranking. [c10]
- OCR: Tesseract, English plus 35 toggleable languages. [c11]
- Opt-in chat: llama.cpp runs a small local model (Qwen3 1.7B default, ~1.1GB, "fits 8GB Macs"). Answers cite evidence the app already extracted. [c12]
- Weights download once (~435MB for default CLIP) then "fully offline". [c13]
- Built with Electron + JavaScript (Transformers.js + ONNX, Tesseract.js WASM). The author says this was chosen to keep it portable, and that a native Swift + MLX v2 is being explored "separately for speed". [c14]

## 3. Who
- Developer: Allen Lee (LICENSE, package.json "author": "Allen Lee"); posted Show HN as user allenleee on 2026-10-04. Describes himself on HN: "I'm actually an iOS/macOS dev". [c4, c14, c17]
- Project site: https://scm.allenlee.site/ says "Built with 💛 for filmmakers". [c18]

## 4. Why it matters
- Lets ordinary people search their own photo and video folders in plain language without sending media to a cloud service. Developer's privacy claim: "your media never leaves the machine." [c2]
- Lands on the moment inside a video, not just the file (Scenes mode jumps to the timecode). [c3]
- Works on any folder, not only a photos library. One HN commenter noted Apple Photos search wasn't an option for them because "the photos are on an external SMB network drive." [c22]
- Comparison context: Apple Photos (macOS 27 with Apple Intelligence) already offers natural-language search and finding "a key moment in a video", but within the Photos library. [c23] Immich, a self-hosted photo server, also offers CLIP-based "Contextual CLIP search". [c24] An HN commenter pointed to Immich as the cross-platform option. [c25]

## 5. What's contested / caveats (the honest caveat)
Top objections from the HN thread (https://news.ycombinator.com/item?id=49952111, 175 points, fetched 2026-10-07):
1. **Indexing cost and time for big video libraries (the main caveat).** A user with ~12,000 videos said the unknown processing time stopped them from trying it. [c19] A commenter who built something similar: "frame sampling rate is the whole ballgame. One frame a second on 12k videos is days, keyframes only got me to an overnight run." [c20] Another warned sampling "can be tricky if what you are looking for lasted less than interval period" (i.e., a brief moment can fall between samples). [c21] Others asked directly for time/disk cost of an hour of footage and a 90-minute HD file; no answer from the author in the thread. [c26]
   - Mitigations the README claims: scene-cut detection, five density presets, and "each preset shows its measured time and disk cost before you commit"; shot plans are cached so re-imports skip detection. [c9]
   - Developer's own speed numbers (CPU): CLIP default ~480–570 ms per image; SigLIP-2-B/16 ~50–100 ms per image ("Fastest bulk import"). [c7] No independent measurement exists.
   - DERIVED, NOT CLAIMED (do not state as fact without labeling): at Balanced, a 1-hour video is ~120 sample points; at ~0.5 s each that is roughly a minute of image embedding per hour of footage, before shot detection and Whisper transcription. 12,000 videos would scale accordingly. Use only as "back-of-envelope" if at all; safer to quote the HN commenter.
2. **Mac-only, Apple Silicon only (for the Homebrew install).** README: "macOS ... menu-bar/tray features are macOS-only" and "Homebrew (Apple Silicon, macOS 12+)". Cask has `depends_on arch: :arm64`. Author: "It's ARM Mac for now". [c5, c16, c14]
3. **Not Developer ID signed.** The Homebrew cask strips the macOS quarantine flag because "the build is signed with a local development certificate (not a Developer ID), so Gatekeeper would otherwise block first launch". It says this will be removed once releases are notarized. A fair caveat for general readers: installing bypasses a macOS safety check. [c16]
4. **Copies your media.** "Media is copied into the app-managed library" — so disk use roughly duplicates the imported files. An HN commenter (general, not SCM-specific) said they dislike apps building their own library on top of files. [c27, c28]
5. **Code quality / "vibe-coded" criticism.** Commenters said Apple's Vision framework "smokes tesseract in both speed and accuracy" on Mac; the author agreed ("You're totally right") and explained portability. [c29, c14] One commenter alleged the app was generated by an LLM without review and flagged a file as likely having edge-case bugs; this is an unverified opinion, report only as criticism if at all. Another called it "JS bloatware" for using Electron. [c30]
6. Missing features asked for: searching by people/faces/pets (no answer seen). [c31]

Strongest counterpoint (independent of author): hn3ufz62f7's "frame sampling rate is the whole ballgame... days" (c20), plus the Apple Photos built-in alternative (c23).

## 6. What's next
- Author: "Exploring a native Swift + MLX v2 track separately for speed." [c14]
- Author said he'd research reusing Apple Photos' cached pre-analysis after a commenter suggested it ("thanks for this! will do some research on it"). [c32]
- Cask: quarantine bypass "will be removed once releases are Developer ID signed + notarized". [c16]

## Key numbers
- HN: 175 points, 73 comments (topics.json), posted 2026-10-04 09:24 UTC. [c17]
- GitHub: ~409 stars, 29 forks, 9 commits at fetch time 2026-10-07 (from WebFetch summary of the repo page; volatile; say "hundreds of stars" or omit). [c33]
- Default model download ~435MB; Qwen3 1.7B chat ~1.1GB; Whisper tiny.en ~150MB. [c13, c12, c10]
- 5 search modes; 4 vision models; 5 video density presets; 35 extra OCR languages.
- Requires macOS 12+ (Monterey), Apple Silicon for the Homebrew cask. [c5, c16]

## Quotable lines
- "Local-first — no accounts, no cloud, no uploads. Inference runs on your Mac." (README) https://github.com/allenv0/SCM
- "frame sampling rate is the whole ballgame. One frame a second on 12k videos is days, keyframes only got me to an overnight run." (HN user hn3ufz62f7) https://news.ycombinator.com/item?id=49953375
- "Stop Scrubbing. Start Finding." (project site) https://scm.allenlee.site/

## Suggested format
`comparison` fits well: SCM vs Apple Photos search vs Immich (columns: where it runs, what it searches, platforms, cost). Keep claims to what the claim ledger supports; Immich platforms: self-hosted server with Android and iOS apps (c24).

## Also in this thread
- Ties to the research pick (RealCompanion): both are about AI holding on to a person's own life; SCM's angle is that the memory index stays on the user's machine (c2), while the sampling caveat (c20, c21) is a reminder an index can miss moments.

## Unverified / gaps
- No independent measurement of indexing time or search accuracy. README says presets display "measured time and disk cost", but no numbers are published there; MDs/bench-* files could not be located (404 on guessed paths, GitHub API blocked).
- Star/fork/commit counts come from a WebFetch summarizer, not raw HTML (github.com returned 403 to curl).
- Author's identity beyond the name "Allen Lee" and HN self-description not verified. Do not add any location.
- Claim it "works perfectly on M1/M2/M3 machines (16g/64g)" is the author's own HN reply (c34); unverified.
- Version mismatch: README/package.json 0.2.4, cask 0.2.5.
- No press coverage found (web search returned unrelated "ScreenMemory" products; do not confuse SCM with the paid app ScreenMemory or with Invenio).

## Blocked sources
- GitHub REST API (api.github.com, gh CLI): 403, repository not enabled for this session.
- github.com HTML via curl: 403 (WebFetch worked).
- Reddit search JSON: 403.
- raw.githubusercontent.com, HN (news.ycombinator.com and Algolia API), scm.allenlee.site, Apple Support, Immich docs: OK.
