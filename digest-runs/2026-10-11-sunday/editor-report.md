PASS

# Editor report: 2026-10-11 Coding with Christ

Draft: `digest-runs/2026-10-11-sunday/draft.md` (not edited)

## Required fixes

None in the draft.

## Required at publish (not a draft defect)

- **`models` is required.** It is `null` in the draft. The publisher step must set it to the AI models that actually ran, with their roles. `scripts/validate-issues.js` fails the build without it.
- `hero: null` is intentional. The publisher sets it from image.json.

## Checks

1. **Scripture: pass.** I re-fetched `https://bible-api.com/Philippians+4:6-7?translation=web` with curl. After trimming and collapsing whitespace, the API text is identical to the frontmatter `text`. Translation is "World English Bible" and it matches verse.json.
2. **Guardrails: pass.** The content stays within broadly shared Christian teaching. The Catholic edition is reported as a product, not a doctrinal dispute. There are no prosperity promises. The draft does not claim tech replaces the Church, the Spirit or discipleship. It says the opposite: "The next steps are prayer, obedience and life with a local church." The tone is hopeful and measured, and self-reported numbers are flagged repeatedly. The Wisdom Corner names a real concern (AI video treating Scripture as content), with attributed critics and James 1:22.
3. **Scope, non-political, no geography: pass.**
   - Every item centers on a technology:
     - the Bible app's search data
     - a dyslexia typeface (accessibility)
     - an offline AI Bible prototype
     - the AI sermon-video tool
   - The only place names are inside credited proper names: "University of Cambridge", "2K/DENMARK", "Grove City College", "Abilene Christian University", "Global Bible Month". The source title's "the World" falls under the source-title exemption.
   - The draft leaves out NPR's "in Pennsylvania", the release's "worldwide", and the Gloo release's "people who could be imprisoned" framing.
   - No political content.
4. **Honest framing: pass.** `featureType: this-week`. The lead release is dated Oct 6, 2026, inside the coverage window "Sun, Oct 4 – Sat, Oct 10, 2026". Older sources (2013, 2022, 2024, 2025) are dated in the text as background.
5. **Banned words and patterns: pass.** No banned words. No "not just X, it's Y". No rhetorical-question transitions. Em dashes: 0. The "--" in source #4's title is part of a source title, not an em dash. Estimated reading level is about grade 8 (Flesch-Kincaid ~7.6, about 15 words per sentence).
6. **Section lengths and H2s: pass.** Word counts exclude citation markers.
   - Reflection: 252 (target 250)
   - Feature: 535 (target 600, allowed range 450–750)
   - Wisdom Corner: 175 (target 150, allowed range 113–188)
   - Also Encouraging: 208 (no length target)
   - Prayer: 39 (no length target)

   All five H2 prefixes are present and exact: `## Reflection:`, `## Feature:`, `## Also Encouraging:`, `## Wisdom Corner:`, `## Prayer:`.
7. **Frontmatter and citations: pass.**
   - gray-matter 4 parses the frontmatter. The repo has no node_modules installed, so I ran the parse with a scratchpad copy of gray-matter.
   - `reviewStatus: pending` and `editorsNote: null` are set.
   - `datePublished` and `dateModified` are both "2026-10-11T06:00:00-04:00" (ISO with offset).
   - Citations run 1–10 in order of first use. Each `[[n]]` matches `#source-n`. All 10 sources are cited, with no gaps or orphans.
8. **factcheck.json: pass, no unresolved items.** 25 of 28 items were "pass" and 3 were "fix". All three fixes are now in place:
   - Bilbro is "an English professor at Grove City College".
   - The Brad East line matches NPR's "reducing it to an action movie" wording.
   - The source titles and URLs for #2 and #9 are corrected, and claim-map.json sources 2 and 9 already point to the new URLs.
9. **Editor's note: pass.** The body has no agent-written Editor's note, and `editorsNote` is null.

## Optional (not required)

- SEO's note that the headline and dek "still say 'led'" no longer applies. The headline now reads "Were Among Its Top Bible App Searches" and the dek reads "Psalm 91 was the top search", both of which match the release.
