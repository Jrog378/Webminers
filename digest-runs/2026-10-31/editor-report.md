PASS

# Editor report: Eureka Reports, 2026-10-31 (round 2)

Round 1 failed on one required fix: the closing section restated the dek. Round 2 checked the published file `content/digest/2026-10-31-robots-txt-ai-training-opt-out-token.md`. The closing section has been cut. The uncited "About 70%" closing line is now an attributed, cited sentence. "Qwen3.5-4B" is now written the same way throughout. There are no required fixes, and the issue can go to Justin for review.

## Required fixes

None.

## Advisory (not blocking)

- **New sentence not in the fact-check ledger.** "The authors concede that current benchmarks are \"retrieval-friendly,\" which leaves memory little room to show its value. [13]" was added after factcheck-round2.json ran, and claim-map.json lists it with `claimIds: []`. dossier-research.md line 56 supports it ("Benchmark bias (the authors concede this): current benchmarks are \"retrieval-friendly\""). If time allows, confirm the exact phrase in the arXiv HTML [13].
- **Paragraph length.** Two paragraphs go past the guide's limit of 1 to 3 sentences. One is News item 2, first paragraph, which has 6 sentences and starts "Anthropic \"has already started implementing support...\"". The other is the Research "**What to weigh.**" paragraph, which also has 6 sentences. Both passed in round 1, so this is optional tightening.
- **Cool Invention reading level** is about FK 10.3 by our estimate, at the top of the target range. The table cells push it up, and the prose reads lower.

## Checks passed

- **Banned words and patterns:** no banned words in the body. "Harness" appears only in the exact source title "Harness the Memory: ..." (line 124), which is exempt. "not just" appears only inside a direct Vectorize quote [20]. It is not the "It's not just X, it's Y" pattern. The body has no rhetorical questions. **Em dashes: 0** (max 2).
- **Reading level and sentence length (estimated):** News is about FK 9.0 with an average of 15.5 words per sentence. Research is about FK 9.0, averaging 15.7. Cool Invention is about FK 10.3, averaging 19.2. All sections average under 20 words per sentence.
- **Section lengths against format.json (±25%):** News is 572 words against a target of 580 (-1%). Research is 598 against 640 (-7%). Cool Invention is 326 against 340 (-4%).
- **Formats and H2s:** News uses `three-things`, Research uses `by-the-numbers` (6 bolded figures), and Cool Invention uses `comparison` (a table). These match format.json, and the order is news, research, invention. Every H2 names a specific topic. Each deep dive opens with a direct answer. Removing the closing section is allowed because that section is optional.
- **Frontmatter:** parses with gray-matter. It has `reviewStatus: pending` and `editorsNote: null`. `datePublished` and `dateModified` are `2026-10-31T07:00:00-04:00`, which is ISO with an offset. The body cites sources 1 to 27 in order of first use. There are 27 sources, with no gaps, no orphans and no mismatched `[[n]](#source-n)` pairs. `node scripts/validate-issues.js` reports "all required fields present".
- **Fact-check:** round 1 fixes and cuts were all applied. factcheck-round2.json shows 22 checked and 22 passed, with `fix: 0` and `cut: 0`. See the advisory above about the one sentence added after that check.
- **Non-political and no geography:** the issue has no politicians, officials, legislation, elections, protests or policy fights. The IETF is a standards body, and "policy token" is the draft's technical term. There are no countries, regions, cities or national framing. "UIUC" and "Travel Lemming" appear only as credits.
- **Editor's note:** no agent wrote one, and `editorsNote: null`. The only "editor's note" in the body describes AI Weekly's own note and is cited [7].
- **Reporter voice:** no paragraph ends on a moral or restates the intro now that the closing section is gone. The Google-Extended inference is clearly labeled "Our reading, not Google's statement".
- **Preprints and attribution:** Memory Tax, Bao et al. and Huang et al. are labeled as preprints. Yuan, Su and Yao are identified as a workshop paper. Company claims are attributed.
- **Hero image:** filled. It is CC0 1.0 from the WordPress Photo Directory and has a credit, alt text and a caption. It shows no faces and no logos.

## Note for the publisher

`models` (the AI models used in this run) is required. `scripts/validate-issues.js` fails the build without it. It is now set: Claude Sonnet 5.5 and Claude Opus 5.5, with their roles. Make sure it records what actually ran.
