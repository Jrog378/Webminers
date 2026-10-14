FAIL

# Editor report: 2026-10-14 (Anthropic AI self-replication test)

Reviewed: `content/digest/2026-10-14-anthropic-ai-self-replication-test.md`. It is identical to `digest-runs/2026-10-14/draft.md` except for the publisher-filled `hero` and `models`. One required fix. Everything else passes.

## Required fixes

1. **The closing section restates the intro and frames the news story wrongly (check 9, plus the "only when a real link exists" rule for closings).**
   Text:
   > ## Self-replication, no-think switches and sandboxes: holding AI to its limits
   >
   > All three stories ask whether AI stays inside the limits people set for it. Reasoning models keep thinking after being told to stop. Anthropic says small models can already set themselves up on new hardware, and Plimsoll refuses to run agent code when the request demands a stronger wall than it can provide.

   - Sentences 2 and 3 repeat the dek ("a preprint finds that no-think switches leak, and a small sandbox refuses to run behind weak walls") one story at a time. Readers learn nothing new. This is the "generic conclusion that restates the intro" pattern.
   - The theme is forced, and it works against the News section. In Anthropic's test, the models were *told* to set up copies, and researchers restarted the copies by hand. Nothing escaped a limit people set. Saying all three stories are about AI staying "inside the limits people set for it" brings back the alarm that the News section carefully avoids.
   - Fix: delete the whole closing section, since closings are optional. Or replace it with 2–3 sentences that make a link the sections don't already state, with no "AI escaping limits" framing.

## Checks passed

- **Banned words and patterns:** none found. The search covered delve, tapestry, landscape, realm, testament to, game-changer, revolutionize, unlock, harness, seamless, robust, cutting-edge, navigate, fast-paced and "not just". The only bold questions are the Q&A headings, so there are no rhetorical-question transitions. Em dashes: 1, inside the exact Tom's Hardware title in `sources` (exempt anyway), and 0 in the body. The limit is 2.
- **Reading level (estimated Flesch-Kincaid grade / average sentence length):**
  - News: 8.3 / 16.6 words
  - Research: 9.5 / 19.4 words
  - Invention: 8.9 / 19.1 words
  - Closing: 8.4 / 17.7 words

  All are within grade 8–10 and under 20 words.
- **Lengths against `format.json`:**
  - News: about 663 words vs 600 (+10%)
  - Research: about 582 vs 600 (−3%)
  - Invention: about 362 vs 350 (+3%)

  All are within ±25%.
- **Formats match `format.json`:**
  - news = `qa` (6 bold questions)
  - research = `explainer` (all four run-in labels)
  - invention = `comparison` (table plus analysis)

  No format repeats within the issue, and this combination doesn't appear in the recent issues listed. H2s are specific. Each section opens with a direct answer.
- **Frontmatter:**
  - The `gray-matter` parse succeeds for both files. Note: gray-matter is listed in `package.json` but `node_modules` is not installed in the repo, so I ran the parse with a copy installed in a scratch directory.
  - `reviewStatus: pending` and `editorsNote: null`.
  - `datePublished` / `dateModified` are ISO dates with an offset (`2026-10-14T07:00:00-04:00`).
  - 21 sources, cited `[[1]]`…`[[21]]` in first-use order, with no gaps, no orphans and no number/anchor mismatches.
- **Fact-check:** `factcheck.json` had 10 `fix` items. All 10 are applied in the draft, and `factcheck-round2.json` passes 20 of 20 with `fix: 0, cut: 0`. Nothing is unresolved.
- **Non-political / no geography:** passes. The only place-bearing names are university credits (Tsinghua, Oxford, Stanford). The Anthropic post's mention of a government password regulation was correctly left out. There are no politicians, policy fights or national framing.
- **`models`:** set by the publisher (Claude Opus 5.5; Claude Sonnet 5.5, with roles). This field is **required**: `scripts/validate-issues.js` fails the build without it. The validator currently reports "all required fields present". The hero image file exists at `public/images/eureka/2026-10-14-anthropic-ai-self-replication-test/`.
- **No agent-written Editor's note** anywhere in the frontmatter or body.

## Advisory (not blocking)

- "Each 9B copy takes over 1 to 2 days" can be misread as "takes over [a device]". Suggest "Each 9B copy takes more than a day or two to set up."
- Several paragraphs run past the style guide's 1–3 sentences. Examples: "**The caveat.** The label is evidence, not proof. …" (6 sentences), "**What they found.** …" (5) and "The name comes from the Plimsoll line…" (5). Consider splitting them.

## Resolution (publisher)
Closing section removed (optional per style guide); "takes over 1 to 2 days" reworded to "takes one to two days or more to set up". No other changes. Result: PASS after 1 round.
