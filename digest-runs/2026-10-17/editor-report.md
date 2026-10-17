FAIL

# Editor report: Eureka Reports, Oct 17, 2026

One banned word and one clumsy sentence need fixing. Everything else passes. Both fixes are one-line edits in the Cool Invention section.

## Required fixes

1. **Banned word "harness"** (Cool Invention, caveat paragraph). The style guide bans "harness" outright. Unlike "landscape" and "navigate", it has no "as a metaphor" exception, so the noun use counts too.
   - Current: "In v0.1, which used one shared harness, GPT-6 Astra and Claude Opus 5.5 were "functionally tied" at the top"
   - Suggested: "In v0.1, which ran every model in one shared setup, GPT-6 Astra and Claude Opus 5.5 were "functionally tied" at the top"
   - Do not change the facts or the citation [[16]](#source-16).

2. **"Hacker News" appears twice in one 49-word sentence** (Cool Invention, last paragraph). It reads like a bot and is the longest sentence in the issue.
   - Current: "Hacker News commenter dgant, who writes as a StarCraft bot developer, objected on Hacker News that unlimited practice tries reward high-variance play:"
   - Suggested: "Hacker News commenter dgant, who writes as a StarCraft bot developer, objected that unlimited practice tries reward high-variance play:"
   - Keep the quote and the attribution "who writes as a StarCraft bot developer" as they are. Fact-check round 2 approved that wording. Do not add a full name or a PurpleWave credit.

## Checks

**1. Banned words and patterns**
- Every banned word was grepped. "harness" had 1 hit (fix 1). All others had 0: delve, tapestry, landscape, realm, testament to, game-changer, revolutionize, unlock, seamless, robust, cutting-edge, navigate, fast-paced.
- No "It's not just X, it's Y" patterns.
- No rhetorical-question transitions. The only question marks are inside quotes or the source title.
- Em dashes: 0 (max 2). The en dash in `coverage` is a date range, so it doesn't count.

**2. Reading level** (rough syllable-count estimate)
| Section | Words | Avg sentence | FK grade (est.) |
| --- | --- | --- | --- |
| News | 644 | 14.3 | 9.9 |
| Research | 637 | 14.5 | 7.1 |
| Cool Invention | 391 | 14.0 | 6.5 |
| Closing | 48 | 16.0 | 7.6 |
- Every section averages under 20 words a sentence.
- Research and Invention estimate a little under grade 8. Model names and numbers pull the estimate down, so this is acceptable and not a fix.
- Advisory: several sentences run over 30 words and could be split. Examples: the Jun 26 wallet bullet (36 words), the Bengio sentence (34) and the Jun 16 OCR sentence (33).

**3. Section lengths, formats, headings**
| Section | Target | Allowed (±25%) | Actual | Result |
| --- | --- | --- | --- | --- |
| News | 580 | 435–725 | 644 | OK |
| Research | 640 | 480–800 | 637 | OK |
| Cool Invention | 340 | 255–425 | 391 | OK |
- Order is news, research, invention. This matches `format.json`.
- News is a `timeline`: short intro, then a dated list. OK.
- Research is an `explainer` with all four bold labels. Explainer is used only once. OK.
- Cool Invention is `by-the-numbers` with 6 bolded items and a caveat. OK.
  - Advisory: "**Practice.**" is not a figure. The other five are, so the 4–6 figure rule is still met.
- The `formats` frontmatter matches `format.json`.
- All H2s name the specific topic.
- Advisory: several paragraphs run 4–5 sentences, past the guide's 1–3. Examples: "What they found." in Research and the caveat paragraph in Invention.

**4. Frontmatter**
- `gray-matter` is not installed: the node command failed with a module error. I parsed the frontmatter with PyYAML instead, and it parses cleanly.
- `reviewStatus: pending`: OK.
- `editorsNote: null`: OK.
- `datePublished` and `dateModified` are "2026-10-17T07:00:00-04:00": ISO with offset, OK.
- There are 18 sources. The body cites sources 1–18, first used in order, with no gaps and no orphans. Every `[[n]]` matches its `#source-n`.
- The source #18 date is a labeled access date, as fact-check asked.

**5. Fact-check**
- `factcheck.json` round 1 had 8 `fix` items and no `cut` items. All 8 are applied in the draft:
  - the 0.2-by-design wording
  - FDE-Bench title and date
  - "highest reasoning setting that model offers"
  - Show HN title and "more than 180 points"
  - dgant comment title and attribution
  - Hillclimb wording
  - source #18 access date
- Round 2 rechecked 7 claims and passed all 7. Nothing is unresolved.

**6. Non-political and no geography: PASS**
- No politicians, government officials, policy fights, legislation, elections, protests, conflicts or culture-war content.
- Yoshua Bengio is quoted as a researcher.
- No countries, regions, cities or national framing. "Sepolia" is the name of a test network, not a place.
- Source titles (for example, Ars Technica's "hacked") are exempt, and the body avoids that wording, as `format.json` asked.

**7. `models` is required**
- The publisher step must set `models` to the AI models that actually ran. `scripts/validate-issues.js` fails the build without it.
- The current value is a placeholder: Claude Opus 5.5, writing.
- `hero: null` is also left for the publisher to set from `image.json`.

**8. Editor's note**
- No agent-written Editor's note anywhere. The only match is `editorsNote: null`.

**9. Reporter voice**
- No paragraph ends on a moral or restates the intro.
- "So the new gap can't be pinned on the models alone." is a factual inference from the cited v0.1 and v0.2 differences, so it's fine.
- The closing "Unwritten rules" thread links the three sections with citations and adds a point instead of repeating the dek. It's acceptable under the optional-closing rule.
