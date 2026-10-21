PASS

# Editor report: Eureka Reports, Oct 21, 2026 (round 2)

No required fixes. The round-1 failure is fixed: the closing section `## Muse, GPT-6-Astra and Sphinx: checking claims before trusting them` has been cut. The round-1 advisories have been applied: "Git hook" is now defined, "One outside warning" replaces "The sharpest", and "a second model, Sonnet 5.5" replaces "a stronger model".

## Required fixes

None.

## Checks

1. **Banned words and patterns: PASS.** I searched for every banned word. The only hits are "harness" in the exact source title "VLM harness" and its URL (exempt), and "navigation" used literally for robot navigation. Em dashes: 0 (max 2). There is no "not just X, it's Y". The bold questions in the invention section belong to the `qa` format and are not transitions.
2. **Reading level: PASS.** These are script estimates. News: FK about 8.9, 15.4 words per sentence. Research: FK about 9.6, 17.1. Invention: FK about 8.3, 15.6. All are within grade 8–10 and under 20 words per sentence.
3. **Lengths, formats, H2s: PASS.** Against the `format.json` targets: news 602 vs 580 (+4%), research 666 vs 650 (+2%), invention 390 vs 330 (+18%). All are within ±25%. Formats match: news is `timeline`, research is `claim-vs-evidence` with the table, invention is `qa`. The frontmatter `formats` matches, and the order is news, research, invention as planned. Every H2 names its specific topic. Removing the optional closing section is allowed.
4. **Frontmatter: PASS.** It parses with gray-matter. `reviewStatus: pending` and `editorsNote: null` are set. `datePublished` and `dateModified` are `2026-10-21T07:00:00-04:00`, which is ISO with an offset (the publisher sets the final dates). Citations: the 21 sources are first cited in order [1] through [21], and every `[[n]](#source-n)` pair matches. There are no gaps, no orphan sources and no stray bracket citations. Cutting the closing section left no source orphaned, because [2], [9] and [19] are all still cited in their own sections.
5. **factcheck.json: PASS.** It has two `fix` items and no `cut` items, and both fixes are in the draft. RoboDojo: the table and sixty bullet 2 say "the paper's listed prior best of 29.6% (31.4% for the best prior agentic method)". RoboHarm: the draft says "refused 2 of 100 ... on safety grounds (3 of 100 counting refusals for any reason)".
6. **Non-political and no geography: PASS.** There are no politicians, government officials, policy, legislation, elections or conflict. The body has no countries, regions, cities or national framing. "U.S." appears only in the exact TechCrunch source title, which is exempt. SenseNova, Unitree, Sensor Tower and LinkedIn appear only as organization credits.
7. **`models`: NOTE (required).** `models` must be set: `scripts/validate-issues.js` fails the build if it is missing or empty, or if any entry lacks a `model` or a non-empty `roles` list. The current value is a placeholder, and the publisher must replace it with the models that actually ran. `hero: null` is expected, since the publisher sets it from `image.json`.
8. **No agent-written Editor's note: PASS.** `editorsNote: null`, and the body has no Editor's note text.
9. **Reads like a reporter: PASS.** No paragraph ends on a moral or restates the intro. The news section ends on Claroc's passive-DNS point, the research section on the Pantograph quote, and the invention section on the epigraph credit.

## Advisory (not blocking)

- A few paragraphs still run past the guide's 1–3 sentences: "**What was exposed.**" (4), "The report was posted to arXiv on Oct 15..." (4), "**How the test worked.**" (4), "**Why the gap.**" (4) and "**Does passing mean the code is right?**" (5). Split them if convenient.
