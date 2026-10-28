PASS

# Editor report: 2026-10-28 (Eureka Reports), round 2

The round 1 required fix is resolved. The Cool Invention section now uses `by-the-numbers`, which matches `format.json` (`invention: by-the-numbers`, `previousFormat: comparison`) and the frontmatter `formats` block. Nothing blocks the draft. A few optional cleanups are listed below.

## Required fixes

None.

## Before publish (publisher step)

- **`models` is not set, and it is required.** `scripts/validate-issues.js` fails the build without it. The publisher must set it to the AI models that actually ran.
- The hero image is also still to be added by the publisher.
- `editorsNote` must stay `null` and `reviewStatus` must stay `pending` for Justin.

## Optional cleanups (not blocking)

- In the fifth bullet the bold figure is about the loop guard, but the sentence opens with the file guard: "**3 times in a row.** A guard that checks whether files a reply names exist on disk, because "checking the files instead of the words works in any language" [[18]](#source-18), sits beside a loop guard that cuts off a reply when a long passage repeats three times in a row [[19]](#source-19)." The sentence is 40 words long. Consider leading with the loop guard, or putting the file guard in its own sentence.
- "**Zero telemetry.**" The docs say "there is no telemetry", so the figure is accurate, but it is a softer "number" than the other four. Acceptable as it stands.
- The Invention section reads at about grade 6 (see below), under the 8 to 10 target. That is fine for a short product piece and was accepted in round 1.
- Several paragraphs run 4 to 7 sentences, against the style guide's 1 to 3. In Invention the longest is the caveat paragraph, "The honest caveat. We found no independent review of Hob, ..." at 7 sentences. The same paragraphs in News and Research passed in round 1. Splitting them is optional.

## Checks

| Check | Result |
|---|---|
| Banned words and patterns | Pass. A grep for every banned word (delve, tapestry, landscape, realm, testament, game-changer, revolutionize, unlock, harness, seamless, robust, cutting-edge, navigate, fast-paced) and for "not just" found no hits. 0 em dashes (max 2). The only en dash is in `coverage`. The only question marks are the qa-format bold questions in News, not rhetorical transitions. |
| Reading level | Pass. Script estimates of Flesch-Kincaid grade: News 8.8, Research 7.6, Invention 6.1, Closing 9.0. Average sentence length: News 13.7 words, Research 13.7, Invention 14.7, Closing 19.5. All are under 20. |
| Section lengths (±25%) | Pass. News 656 words against a 600 target (+9%). Research 673 against 650 (+4%). Invention 323 against 350 (−8%). Closing is 2 sentences. |
| Formats | Pass. News is qa, with 5 bold questions. Research is explainer, with all four labels. Invention is by-the-numbers: a short intro, then 5 bolded figures (8 GB, four model sizes, 15 tokens a second, zero telemetry, 3 times in a row), each one sentence with a citation, then the honest caveat. No two sections share a format, and explainer is used once. The order (news, research, invention) matches `format.json`. |
| H2s specific | Pass. All four H2s name the specific topic. |
| Frontmatter | Pass. Parses with gray-matter (installed in the scratchpad because the repo has no `node_modules`). `reviewStatus: pending`, `editorsNote: null`, `reviewedOn: null`. `datePublished` and `dateModified` are both `2026-10-28T07:00:00-04:00`. `formats.invention` is `by-the-numbers`. |
| Citations vs sources | Pass. 20 sources. The body cites 1 through 20 in order of first use, with no gaps and no orphans. Every `[[n]]` links to `#source-n` with the same n. |
| Fact-check | Pass. `factcheck-round3.json` passed all 16 Hob claims, with no `fix` or `cut` items. The round 3 note that the "zillion of these" quote ran against the commenter's supportive tone is handled: the draft now says "Another commenter, who said they would upvote every such app, noted ...". The 6 `fix` items and 1 `cut` item in `factcheck.json`, and the 1 `fix` in `factcheck-round2.json`, stay resolved. The News and Research text is unchanged from round 1. |
| Non-political, no geography | Pass. There are no politicians, officials, policy, elections, protests or conflict. There are no countries, regions, cities or national framing. MIT, Tsinghua University and Peking University appear only as credits. Mac, Windows, Linux, Microsoft and Y Combinator are products and companies, not places. |
| `models` | Not set, which is expected at this stage. **The publisher must set `models`. It is required, and the build fails without it.** |
| Editor's note | Pass. There is no agent-written Editor's note anywhere, and `editorsNote: null`. |
| Reporter voice | Pass. No paragraph ends on a moral or restates the intro. The new Hob caveat ends on a sourced quote ("the code runs unlimited"). The closing section links the three stories without repeating the leads. The round 1 optional points (Y Combinator placement, attributing the "fake their work" claim, the uncited Lean inference) are all addressed. |
