PASS

# Editor report: Eureka Reports, 2026-10-03

Checked `draft.md` against `editorial/style-guide.md` and `format.json`. There are no required fixes. The advisory notes below are optional polish for Justin or the writer.

## 1. Banned words and patterns
- Grep run for every banned word (delve, tapestry, landscape, realm, testament to, game-changer, revolutionize, unlock, harness, seamless, robust, cutting-edge, navigate, fast-paced, "not just").
  - "harness" appears once: "using a mini-swe agent harness [[4]]". This is the technical noun (an evaluation harness), not the banned verb. Allowed.
  - "robust" appears only inside a direct quote from the paper ("robustness to connected sources"). Allowed.
- Em dashes: 0 in the whole file (max is 2). The only en dash is in the `coverage` frontmatter date range.
- No rhetorical-question transitions. The one question in the body, "Why announce this if it's not available yet?", is a quoted Hacker News comment.

## 2. Reading level (estimated with Flesch-Kincaid, citations stripped)
| Section | Words | Avg sentence length | FK grade |
| --- | --- | --- | --- |
| News | ~631 | 17.5 | ~8.8 |
| Research | ~637 | 15.2 | ~8.4 |
| Cool Invention | ~417 | 17.4 | ~8.2 |
| Closing | ~54 | 18.0 | ~9.3 |
Every section is within grade 8–10, and every average sentence length is under 20 words.

## 3. Lengths, formats, H2s
- News: 631 words against a 580 target (+9%). OK.
- Research: 637 against 650 (-2%). OK.
- Invention: 417 against 340 (+23%). This is inside the ±25% limit but close to it (about 436 if citation tokens are counted). Advisory: trim about 20–40 words. The caveat paragraph is the easiest place to cut.
- The order (news, research, invention) matches `format.json`. Formats match both `format.json` and the frontmatter `formats`: claim-vs-evidence table followed by analysis, explainer with all four labels, and a "Three things to know" numbered list plus an honest caveat. `explainer` is used once.
- H2s are specific and follow the `question` headline style. The closing H2 "Who grades the machines" is specific, and the link between the sections is real.

## 4. Frontmatter and citations
- `gray-matter` is not installed (no `node_modules`), so the node check could not run. I parsed the frontmatter with Python `yaml.safe_load` instead, and it parsed cleanly.
- `reviewStatus: pending` is present. `editorsNote: null` is present.
- `datePublished` and `dateModified` are both `2026-10-03T07:00:00-04:00`, which is ISO with an offset.
- 21 sources. Body citations run 1–21 in order of first use. Every `[[n]]` matches its `#source-n`, with no gaps, no orphans and no missing sources.

## 5. Fact-check
- `factcheck.json` had 13 `fix` items and `factcheck-round2.json` had 7 `fix` items, with no `cut` items. I spot-checked the round-2 fixes against the draft and all are applied: "9 of the 15 authors", "avoid human-written labels", the blog-post wording, and dates removed from sources 10, 15, 17 and 19. The round-1 fixes are reflected too: "trusted defenders", Mixbox "non-commercial use only", affiliations cited to [13], and the paraphrased Bloomberg denial. Nothing in the draft contradicts the fact-check results.

## 6. Non-political and no geography
- No politicians, government officials, policy, legislation, elections, protests or conflict. Grep for country, region, city, government and policy terms found nothing.
- Universities named as credits (Rutgers, UC San Diego, University of Michigan, McGill, King Fahd University of Petroleum and Minerals) are allowed, and the story is never about where they are.

## 7. `models` (required)
- `models` is required: `scripts/validate-issues.js` fails the build without it. The frontmatter currently holds a placeholder, which is marked as such. The publisher must overwrite it with the models that actually ran.

## 8. Editor's note
- No agent-written Editor's note anywhere in the draft. `editorsNote: null`.

## 9. Reporter voice (advisory, not blocking)
- Research, "What they found" section: "It is a side effect of the optimization, not a plan." This writer gloss repeats the quote just before it ("does not imply intentional coordination") and leans toward the "X, not Y" tell. Suggest cutting it.
- Research, "What's still uncertain" section: "The contribution is the diagnosis and the fix's design." This is an uncited summary line ending the section. Suggest cutting it or ending on the authors' own disclaimer.
- Paragraph length: the Invention caveat paragraph ("The blind test was one round…") runs 5 sentences, and two Research paragraphs run 4 ("They tested two fixes…" and "CrossFit cut false agreement…"). The guide says 1–3 sentences per paragraph. Suggest splitting them.
- No paragraph ends on a moral, and the closing section does not restate the intro.
