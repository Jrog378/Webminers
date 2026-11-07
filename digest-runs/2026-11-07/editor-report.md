PASS

# Editor report: Eureka Reports, 2026-11-07

No required fixes. The draft meets every hard rule. The advisories below are optional tightening. The draft can go to Justin once the publisher sets `models` and `hero`.

## Required fixes

None.

## Advisories (not blocking)

1. **Cool Invention is near the length cap.** It runs about 464 words against a target of 380 (+22%). The ±25% limit is 475, so any extra copy added here would push it over.
2. **Paragraph length.** The guide asks for 1 to 3 sentences per paragraph. Twelve paragraphs run 4 to 6 sentences. The longest are:
   - News, paragraph 2 (5 sentences), starting "The model is a Mixture-of-Experts design, meaning only part of the network runs for each token."
   - Research, "**What they found.**" (5 sentences) and "**How it works.**" (6 sentences).
   - Research, "**Why it matters.**", "**What's still uncertain.**", the student-analogy paragraph and the STACK paragraph (4 sentences each).
   - Cool Invention, the opening paragraph and the "To run it you need a CUDA GPU" paragraph (4 sentences each).
   The 2026-10-31 report treated this as advisory, so it is advisory here too. Splitting "How it works." in two would help most.
3. **The closing section has 4 sentences.** The guide says 2 to 3. You could cut "Each headline figure comes from the people who made the thing." and fold that idea into the last sentence. The closing does not end on a moral and does not restate the intro or dek. It names a real thread (cost, plus who verified each figure).
4. **`description` wording.** "Plus LoCo's shorter reasoning and a $21K image model." Round 2 of the fact-check pointed to this line. Its required fix covered only the H2, which is now fixed. For consistency with the H2 and the dek, consider "a $21K-of-compute image model".
5. **Optional detail from fact-check round 2 (news-17, verdict pass).** The source page says the model reached the third-party service "using its search tools", and the team "hardened our infrastructure". You may restore either detail. The current sentence is accurate without them.
6. **Two undated sources.** Source 4 (Tinker docs) and source 8 (HN thread) have `date: null`, with a comment explaining why in each case. The validator does not require dates.

## Checks

| # | Check | Result |
|---|---|---|
| 1 | Banned words | 0 hits for delve, tapestry, landscape, realm, testament to, game-changer, revolutionize, unlock, harness, seamless, robust, cutting-edge, navigate and "fast-paced". No "not just X, it's Y" and no rhetorical questions in the body. |
| 1 | Em dashes | 0 (max 2). The only dash is the en dash in the `coverage` range, which is correct. |
| 2 | Reading level | These are heuristic Flesch-Kincaid estimates. News is about 9.1 (16.4 words per sentence on average), Research about 9.6 (18.6), Cool Invention about 8.5 (19.6) and the closing about 5.8 (16.0). Every section is under 20 words per sentence and inside the grade 8–10 range. |
| 3 | Section lengths | News is 576 words against 580 (-1%), Research 659 against 620 (+6%) and Cool Invention 464 against 380 (+22%). All are within ±25%. |
| 3 | Formats | These match format.json and the frontmatter `formats`. News is claim-vs-evidence (a 4-row two-column table, then analysis). Research is explainer (all four bold run-in labels). Cool Invention is comparison (a 4-model table, then analysis). No two sections share a format, explainer appears once, and the combination does not appear in the last 6 issues. The order is news, research, invention. The headline is number-led ("594B-parameter..."). |
| 3 | H2s | All are specific. Each deep dive opens with a direct answer (who, what, number, date). The Cool Invention section carries an honest caveat. |
| 4 | Frontmatter | Parses with gray-matter 4.0.3. The repo has no node_modules, so the package was installed in the scratchpad. `reviewStatus: pending`, `editorsNote: null`, `reviewedOn: null`. `datePublished` and `dateModified` are `2026-11-07T07:00:00-05:00`, ISO with an offset. There are 23 sources. Body citations first appear in order 1 to 23, every `[[n]](#source-n)` matches n to n, and there are no gaps or orphans. The draft also passes the checks in `scripts/validate-issues.js` (models array with roles, reviewStatus, no editorsNote, offset date, citations within range). |
| 5 | Fact-check | factcheck.json round 1 had 7 fix items and 1 cut item. All are applied in the draft and re-verified as pass in factcheck-round2.json: LoCo's 41.7–45.4% with "maintaining or improving accuracy" (body and sixty), the ablation's 45.4%, "scored below LoCo on all three benchmarks", $21K for the whole release including restarts and post-training, the cut list of left-out costs (now absent), FD-DINOv2 with the raw-prompt figures 0.45/0.30, the October-post and convergence caveat, and fp32/bf16 sizes. Round 2 had 2 fix items. Both are applied: the text now says "and the same commenter wondered", and the H2 now says "$21K of compute". No fix or cut items remain unresolved. |
| 6 | Non-political / no geography | Pass. There are no politicians, officials, legislation, elections, protests, conflicts or culture-war content. "Policy" appears once and refers to Thinking Machines' own release policy. There are no countries, regions, cities or national framing. "Xi'an Jiaotong University", "WeChat AI at Tencent" and "Sony" appear only as credits. "western" appears only in The Decoder's exact source title (source 6), which is exempt. "July 14, 2030" is a date in a paper example, not a place. |
| 7 | `models` | **Required. The publisher must set it**, because `scripts/validate-issues.js` fails the build without it. The draft holds placeholder values (Claude Opus 5.5 and Claude Sonnet 5.5, marked PLACEHOLDER). The publisher must replace them with the models that actually ran. `hero: null` also needs to be filled by the publisher or image step (see image.json). |
| 8 | Editor's note | Absent. `editorsNote: null`. No agent-written Editor's note appears in the frontmatter or body. |
| 9 | Reporter voice | No paragraph ends on a moral. The closing does not restate the intro. Company claims are attributed ("Thinking Machines says", "Linum says", "its authors report"). The preprint is labeled "not yet peer-reviewed". HN sentiment is quoted and linked. There is one analogy (the student). |
