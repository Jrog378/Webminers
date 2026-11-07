PASS

# Editor report: 2026-11-08 Coding with Christ (Bible Loop)

Reviewed `draft.md` against `editorial/style-guide.md` and `content/faith/_template.md`. The draft was not edited.

## Required fixes

None blocking.

## Checks

1. **Scripture: PASS.** Re-fetched `https://bible-api.com/Psalms+119:9-11?translation=web` with curl. After trimming and collapsing whitespace, the API text matches the frontmatter `verse.text` exactly, including the curly apostrophe in "Don’t". Translation: World English Bible. It also matches `verse.json`. The secondary quote in the Wisdom Corner, "These words, which I command you today, shall be on your heart; and you shall teach them diligently to your children...", is an exact WEB prefix of Deuteronomy 6:6-7 (re-fetched), and the ellipsis marks the cut.
2. **Guardrails: PASS.** The draft stays within broadly shared teaching. It has no denominational disputes and no prosperity promises. It does not say tech replaces the Church: "An app can open the door. Parents, youth leaders and the church walk through it with them." The tone is hopeful and measured. The Wisdom Corner names a real concern (streaks and leaderboards turning devotion into a score) and backs it with a source.
3. **Scope / non-political / no geography: PASS.** The feature (Bible Loop) and both Also Encouraging items (sign-language Scripture apps and animation; the 30-Day Bible Challenge in the Bible App) are about technology. The draft names no countries, regions, cities or national labels. Languages (English, Spanish, Portuguese, French) are not places. "International Mission Board" is a credited proper name. The fact-check's "ASL" detail was correctly left out. There is no political content.
4. **Honest framing: PASS.** `featureType: this-week` fits a Nov 4 launch inside the "Sun, Nov 1 – Sat, Nov 7, 2026" window. The draft openly says the app "has been on Google Play since July 2024". The Oct 6 challenge announcement is dated as Oct 6 and is not presented as this week's news.
5. **Banned words/patterns: PASS.** No banned words found. The body has 0 em dashes (the only dash is the en dash in `coverage`, which follows the template). There are no rhetorical-question transitions. Sentences average about 16.4 words, which fits grade 8–10.
6. **Lengths and sections: PASS.** Reflection 244 (target 250), Feature 634 (600), Wisdom Corner 181 (150, +21%, within ±25%). Also Encouraging is 120 words and Prayer is 37 words. All five H2s use the exact prefixes `Reflection:`, `Feature:`, `Also Encouraging:`, `Wisdom Corner:`, `Prayer:`.
7. **Frontmatter and citations: PASS.**
   - Frontmatter parses with gray-matter. The repo has no `node_modules`, so the repo-root command could not run as written. I ran the same parse with gray-matter@4 installed in a scratch directory. Someone should run `npm install` before the build.
   - `reviewStatus: pending` and `editorsNote: null`.
   - `datePublished` and `dateModified` are both `2026-11-08T06:00:00-05:00`.
   - Citations [1] to [10] are first used in order. Every anchor matches its number, there are no gaps, and all 10 sources are used.
   - `factcheck.json`: all 5 "fix" items and the 1 "cut" item are reflected in the draft:
     - "created by Life.Church"
     - "One App Store reviewer"
     - preprint labeled "not yet peer-reviewed", with "does not name that app" and "frequently used"
     - the faith.tools claim is attributed and marked as unconfirmed, and its source date is 2026-11-05
     - the Psalm 119 authorship claim was removed
     - "This week, Christian app makers..." was cut

     The data-deletion statement is now a paraphrase rather than a quote.
8. **`models`: REQUIRED.** `scripts/validate-issues.js` fails the build without a non-empty `models` list. The draft already has one: Claude Opus 5.5 for research, writing and editing, and Claude Sonnet 5.5 for verse lookup, fact-checking and SEO. The publisher/orchestrator must confirm or overwrite it so it records the models that actually ran. `hero` matches `image.json`.
9. **Editor's note: PASS.** No agent-written Editor's note appears anywhere. `editorsNote: null`.

## Optional (non-blocking) suggestions

- Wisdom Corner: "cites a study by Smith et al. (CHI '26) of Christian young adults aged 18-25" is broader than the source. Per `factcheck.json`, the study sampled "Black Christian young adults aged 18-25". Consider restoring the qualifier so the sample is described accurately.
- Feature: in "teens are an important part of that vision", the quote's "that vision" has no antecedent in the draft. Consider a short lead-in, or paraphrase the vision before the quote.
- Feature: the fact-check suggests saying the 88%/73% OneHope-Barna figures are from 2021, so readers do not take them as new.
