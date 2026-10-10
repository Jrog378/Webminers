PASS

# Editor report: Eureka Reports, 2026-10-10 (round 2)

No required fixes. Both round-1 fixes are in, and the draft passes every check.

## Round-1 fixes verified

1. **Citation order.** The Invention lede now cites [[12]] (repo README) before [[13]] (LICENSE). First-use order across the body is 1 to 21, with no gaps and no out-of-order numbers. Every `[[n]]` matches `#source-n`.
2. **Duplicate early-testers sentence.** It is gone from News para 3, which now ends "We found no independent test of the agent in the coverage reviewed." The testers appear only in "Who gets it, and when."
3. **Advisories taken up.** The HN line now reads "18 points and 2 comments as of Oct 10." The Research summary line now reads "So agents stumble in the investigation before an action, while the action itself mostly goes right [[8]](#source-8)." It is a cited finding, not a moral.

## Checks

- **Banned words/patterns:** none found. I grepped for every banned word plus "not just" and "editor's note". Em dashes: 0 (max 2). The only en dash is in the `coverage` frontmatter. There are no question marks in the body, so no rhetorical-question transitions.
- **Reading level (estimated):** News FK ~10.2, avg 15.2 words/sentence. Research FK ~8.1, avg 14.2. Invention FK ~6.9, avg 13.5. Closing FK ~7.6, avg 16.0. Every section averages under 20 words per sentence.
- **Lengths vs format.json:** News 561/550 (+2%), Research 625/600 (+4%), Invention 405/350 (+16%). All are within ±25%.
- **Formats:** news=three-things, research=by-the-numbers (6 bolded figures), invention=explainer (all four run-in labels). These match format.json and the `formats` frontmatter. The order is news, research, invention. H2s are specific and number-led.
- **Frontmatter:** it parses with gray-matter 4.0.3 (see note below). `reviewStatus: pending`, `editorsNote: null`, and `datePublished`/`dateModified` are `2026-10-10T07:00:00-04:00` (ISO with offset). There are 21 sources, each cited in the body: no gaps, no orphans.
- **Fact-check:** 17 fixes in factcheck.json, all confirmed applied in factcheck-round2.json. Round 2 had 2 fixes, and both are resolved in the draft. The README test list now reads "geometry, placement, joints, a golden image, copy buttons, window-server behavior." The GitHub source dates read "2026-10". No open fix/cut items.
- **Non-political, no geography:** no politicians, officials, policy fights, elections, legislation, protests, conflicts or culture-war content. No countries, regions, cities or national framing. "Fortune 100", "Mac/macOS" and company names are not geography. `country_city_political_flags` is empty.
- **Editor's note:** none written by an agent. `editorsNote: null`.
- **Reporter voice:** no paragraph ends on a moral. The closing section links the three stories without restating the intro.

## Notes for the publisher

- **`models` is required.** `scripts/validate-issues.js` fails the build without it. It is currently the placeholder `model: "TBD"`, which the publisher must overwrite with the models that actually ran. Not a draft failure.
- **`hero: null`** is pending the image finder. Not a draft failure.
- **gray-matter check:** `npm ci` has NOT been run in the repo, because `/home/user/Webminers/node_modules` does not exist and `require('gray-matter')` fails with MODULE_NOT_FOUND. I installed gray-matter@4.0.3 (the lockfile version) into a scratch directory outside the repo and ran the exact parse command with `NODE_PATH` pointed there. It parsed cleanly: `models`, `sources` (21), `formats` and the dates all came through as expected. Run `npm ci` in the repo before the build step.

## Advisory (not blocking)

- News is at the top of the grade band (~10.2). Splitting the Levy quote sentence in item 3 would bring it down.
- A few paragraphs run past the 1-3 sentence guideline: News item 1 (6 sentences), item 2 (5) and "What the numbers don't show" (6). They are list items or caveat blocks, so this is acceptable, but they are dense.
- Invention "**Why it matters.**" is a single commenter quote, which is thin next to the other labels.
