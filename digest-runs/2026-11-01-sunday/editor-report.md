FAIL

# Editor report, round 2: 2026-11-01 Coding with Christ (Ask Ligonier)

Draft reviewed: `digest-runs/2026-11-01-sunday/draft.md`. The draft was not edited. `hero: null` and `models` were ignored as instructed (both are set by the publisher).

Round-1 fixes #1 and #3 are resolved. Fix #2 is only half done, and claim-map.json now records a ring sentence that is not in the draft. That leaves one small required fix.

## Required fix

### 1. Ring item: the body still doesn't say what the ring does, and claim-map.json doesn't match the draft (round-1 fix #2, second half)
The H2 no longer makes the unsupported prayer claim. Good. But the body sentence is unchanged from round 1:

> "The company says the ring has no screen and prompts with its Cross-Light and a gentle vibration [[10]](#source-10)."

"prompts" still has no object, so the reader can't tell what the ring prompts or how it relates to faith. That leaves the item only weakly centered on how the technology helps people draw closer to Christ. Round-1 fix #2 asked the writer to "say plainly what the ring prompts, in words the source supports."

The claim-map has also drifted from the draft. claim-map.json line 71 (and the "Editor round 1" note on line 19) records the sentence as:

> "The company says the ring senses stress and nudges the wearer with its Cross-Light and a gentle vibration, and it has no screen."

That sentence is not in the draft. "senses stress" is also not in factcheck.json. It comes only from the dossier summary and has no ledger claim or verified quote.

Fix (either option):
- (a) Confirm on the HackerNoon page what the ring senses and what the prompt is for, add that to factcheck.json, and write it into the draft as a company claim. For example: "The company says the ring has no screen. It [verified behavior, e.g. senses stress] and nudges the wearer with its Cross-Light and a gentle vibration [[10]](#source-10)." Then make claim-map line 71 match the draft word for word.
- (b) If you can't verify it, keep the verified wording only: "The company says the Cross-Light and gentle vibration provide a screen-free interaction [[10]](#source-10)." Add one cited clause on how the company ties the ring to faith, using FaithMate's verified "companion for a life of faith" wording (f38). Then correct claim-map lines 19 and 71 so they match the draft.

## Round-1 fixes confirmed resolved

- **#1 Citation order:** Resolved. Sources 4 and 5 are swapped (Grow website is 4, App Store is 5). First uses now run 1 through 11 in order: 1, 2, 3, 4 (Feature paragraph 1), 5 (Feature paragraph 3), then 6 to 11. Every inline label matches its anchor (`[[n]](#source-n)`), all 11 sources are cited, and there are no gaps or orphans. claim-map line 40 now shows citation 5 for the App Store sentence.
- **#2 H2 claim:** The headline part is resolved. It now reads "## Also Encouraging: Devout Teens and AI, and a Screen-Free Faith Ring", with no prayer-prompt claim. The body part is still open (see the required fix above).
- **#3 Teen item scope:** Resolved. The label is "**Devout teens find AI a safe place to ask.**". The item leads with the Faith-Activated 46% vs 28% AI finding, gives the parent figures as context, and ends with Hamilton's "trusted adult, not an algorithm" quote. The long first sentence is split in two.
- **Advisories:** The Sproul wording is now quoted as Larson's ("grounded in Dr. R.C. Sproul's lifetime of teaching"), and "exactly where" is softened to "a likely place". The long paragraphs are still there (optional).

## Checks re-run this round

- **Scripture:** I re-fetched `https://bible-api.com/Galatians+6:2?translation=web`. After trimming and collapsing whitespace, the API text is `Bear one another’s burdens, and so fulfill the law of Christ.` (World English Bible). The frontmatter `text` matches it exactly, curly apostrophe included. The partial quote of Proverbs 11:14, "in the multitude of counselors there is victory", also matches the WEB API text exactly.
- **Guardrails, scope, no geography, no politics:** The new text adds no places, national labels, officials or political content. "Christ In Youth" is an organization's proper name, which is allowed. The tone is unchanged and the Wisdom Corner is unchanged.
- **Honest framing:** `featureType: this-week` still fits (Fox, Oct 31, within the coverage window). Older items are dated in the text.
- **Banned words and patterns:** None found. 0 em dashes.
- **Section lengths:** Reflection about 276 words, Feature about 698, Also Encouraging about 181, Wisdom Corner about 153, Prayer about 44. All are within ±25% of target. All five H2 prefixes are exact.
- **Frontmatter:** It parses with gray-matter@4 (scratch install; the repo has no node_modules). `reviewStatus: pending`, `editorsNote: null`, and the dates are `2026-11-01T06:00:00-05:00`.
- **factcheck.json:** No unresolved items, and every round-0 fix is still reflected in the draft. The one exception is the claim-map/draft ring mismatch described above.
- **No agent-written Editor's note** anywhere.

## Note for the publisher
`models` is required: `scripts/validate-issues.js` fails the build without it. The publisher must set it from the models that actually ran.
