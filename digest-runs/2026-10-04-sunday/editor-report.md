FAIL

# Editor report: 2026-10-04 Coding with Christ

Reviewed: `content/faith/2026-10-04-ai-worship-song-theology-songtheology-asaph.md` (assembled), against `digest-runs/2026-10-04-sunday/draft.md` and `editorial/style-guide.md`. The only differences from the draft are `hero` and `models`, both filled by the publisher.

One required fix. Everything else passes.

## Required fixes

1. **Wisdom Corner: a quote is attributed to "he" with no antecedent.** The fact-check fix changed the sentence before it from "Porter notes..." to "CT notes...". That left this sentence pointing at no one, because Porter is not named until the next paragraph:

   > Lyrics are not the whole song, either. "Over time, they acquire meanings and uses that aren't captured in the text," he said [[1]](#source-1).

   The quote is Porter's (fact-check confirms it). Name him: `..." Porter said [[1]](#source-1).` Then change the next paragraph's `"You can't use it to shortcut your own reflection and engagement," Porter said` to `he added`, or leave it as it is.

## Checks

1. **Scripture: PASS.** I re-fetched `https://bible-api.com/Colossians+3:16?translation=web` with curl (translation_id `web`). After trimming and collapsing whitespace it matches the frontmatter `text` exactly: "Let the word of Christ dwell in you richly; in all wisdom teaching and admonishing one another with psalms, hymns, and spiritual songs, singing with grace in your heart to the Lord." The inline 1 Thessalonians 5:21 also matches the API text exactly ("Test all things, and hold firmly that which is good."). All the Reflection's quoted fragments of Col 3:16 are exact.
2. **Guardrails: PASS.** The piece stays within broadly shared teaching. It cites a Lutheran paper and a Catholic ministry without taking sides. It makes no prosperity promises. Both the article and the founders state outright that tools don't replace pastoral judgment ("Technology can't replace your pastoral heart", "Keep our hearts fixed on you, and not on our tools"). The tone is hopeful but measured. The Wisdom Corner names a real concern (a score standing in for discernment, criteria written by the builders, no denominational backing) and grounds it in 1 Thess 5:21.
3. **Scope, non-political, no geography: PASS.** The feature and both Also Encouraging items are about technology (AI song tools, an AI theology paper, digital outreach) and how it bears on drawing people to Christ. The body has no place names or national labels. "ELCA" appears only as an organization credit, and the "Houston area" detail from CT was correctly left out. The place names in the hero credit title/sourceName and in source URLs are exact titles and credits, which the style guide exempts. There is no political, government or culture-war content.
4. **Honest framing: PASS.** `featureType: this-week` is correct. The CT story is dated Oct 2, Living Lutheran Oct 1 and OSV Sept 28, all inside the coverage window Sep 27 to Oct 3. The July Reformed Worship piece is labeled "in July".
5. **Banned words and patterns: PASS.** No banned words. The body has 0 em dashes. The only em dash is in source 2's exact title, which is exempt. Sentences average about 17 words, about grade 8 to 10. The one rhetorical question in the Reflection sets up the feature's question and isn't a filler transition.
6. **Section lengths and structure: PASS.** Reflection 275 words (target 250, +10%), Feature 607 (600), Wisdom Corner 183 (150, +22%, within ±25%). All five H2s are present with exact prefixes: `Reflection:`, `Feature:`, `Also Encouraging:`, `Wisdom Corner:`, `Prayer:`.
7. **Frontmatter and citations: PASS.**
   - The gray-matter parse succeeds for both the content file and draft.md. gray-matter isn't installed in the repo, so I ran it from a scratch install of v4.
   - `reviewStatus: pending`, `editorsNote: null`, `reviewedOn: null`.
   - `datePublished` and `dateModified` are `2026-10-04T06:00:00-04:00`.
   - Citations [1] to [9] are numbered in order of first use, every anchor matches its number, there are no gaps, and all 9 sources are cited (no orphans).
   - `factcheck.json`: all 6 fix/cut items are resolved in the text. The "Anthropic" mention and the self-claim are removed. CT is credited for the absence of independent evaluation. The ELCA wording is credited to Living Lutheran. "CT notes" replaces "Porter notes". Col 1:28 and 3:12-15 are cited. Reformed Worship has been retyped. The Porter fix is what produced required fix 1.
   - `scripts/validate-issues.js` passes.
8. **Models: present.** `models` is set by the publisher (Claude Opus 5.5; Claude Sonnet 5.5). It is required, and the build fails without it, so it must stay in the file.
9. **No agent-written Editor's note: PASS.** `editorsNote: null`, and the body has no Editor's note text.

## Advisory (not blocking)

- Source 9 uses `type: Analysis`. The template lists `Paper | Official | Reporting | Social`, but the validator accepts it. Keep it, or switch to `Reporting` if the renderer expects the fixed set.
- Also Encouraging, OSV item: the quote "into a space where you are in a sacramental loving relationship..." belongs to Digital Missionary Katie Ruvalcaba (per factcheck). Naming her is optional but would be clearer.
