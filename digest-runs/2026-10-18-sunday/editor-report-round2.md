PASS

# Editor report, round 2: 2026-10-18 Coding with Christ

Reviewed file: `content/faith/2026-10-18-ai-sings-whole-bible-music.md` (the published copy). Inputs: the round 1 `editor-report.md` and `factcheck-round2.json`. The content file was not edited.

## Round 1 required fixes: all resolved

1. **Also Encouraging restored.** The heading `## Also Encouraging: AI translation with expert review for The Chosen, and a sound board that takes plain language` is present, so there are now five H2s with exact prefixes: Reflection, Feature, Also Encouraging, Wisdom Corner, Prayer. Both items fall inside the window (Sep 17 to Oct 17): Movieguide on Oct 13, and the Gloo hackathon held Oct 6-8 and reported Oct 13. Both are cited. The Chosen item is labeled honestly as a re-report: "Movieguide followed up on ...", "first reported by Deseret News in May". The hackathon dates are stated, so the item does not imply it is from this week.
2. **Citations in order of first use.** Measured first-use order is 1, 2, 3, ... 12. Every `[[n]](#source-n)` label matches its anchor. There are 12 sources and all 12 are cited, so there are no gaps or orphans. `claim-map.json` uses the same 12 URLs in the same order.
3. **Source type.** Source 5 (Washington Examiner, op-ed by Micah Fiechter) is now `type: Official`. All 12 types are in the allowed set: Reporting or Official.
4. **Hero credit.** `credit.title` is now "Original copy of the Gutenberg Bible". There is no place name in the title, alt text or caption.

## Round 2 fact-check fixes: all applied

- [1][2]: "but we found no published error rates from either [[1]](#source-1) [[2]](#source-2)." Applied.
- Deseret News: the body says "first reported by Deseret News in May". Source 10 is outlet Deseret News, date 2026-05-30, with the deseret.com URL. Applied.
- Movieguide: source 9 title is "How AI Helps THE CHOSEN Reach Even More Viewers". The sentence reads "Citing a fact sheet, it reports that for subtitles ..." and the item opens with "followed up on". Applied.
- The other 14 of 17 checks passed. Nothing is unresolved.

## Re-checks (nothing new broke)

- **Scripture:** re-fetched `https://bible-api.com/Deuteronomy+6:6-7?translation=web` with curl. After trimming and collapsing whitespace, the API text matches the frontmatter `text` exactly. Translation is World English Bible.
- **Section lengths (prose words, citations and table removed):**
  - Reflection: 285 (allowed 188-313)
  - Feature: 622 (allowed 450-750)
  - Also Encouraging: 152, 2 items
  - Wisdom Corner: 169 (allowed 113-188)
  - Prayer: 2 sentences
- **No geography:** none in the body. "Biola University", "NC Baptists", "Washington Examiner" and "Deseret News" are organization names used as credits. "minority languages" and "Spanish" are languages, not places.
- **Non-political:** no governments, officials, legislation, persecution framing or culture-war content.
- **Scope:** both new items are about technology serving Scripture engagement and worship: AI translation of a Gospel drama, and a sound tool for church services.
- **Guardrails:** still within broadly shared Christian teaching. The tone is measured. The Wisdom Corner still names a real concern honestly.
- **Honest framing:** `featureType: month-review` matches the content. The Feature says "This is a look back at the past month, not this week's news."
- **Banned words and patterns:** none found.
- **Em dashes:** none in the body. There is 1 in the whole file, inside the exact ChurchLeaders source title (`'We're Doing This for the Lord'—Biola University Students ...`). That is a reproduced citation title and within the max of 2 per issue.
- **Frontmatter:** parses with gray-matter 4.x. The repo has no `node_modules`, so gray-matter was installed in a temporary scratch directory. `reviewStatus: pending`, `reviewedOn: null`, `editorsNote: null`. Both dates are `2026-10-18T06:00:00-04:00`. `scripts/validate-issues.js` prints "all required fields present".
- **`models`:** set (Claude Opus 5.5; Claude Sonnet 5.5, with roles). This field is required: `scripts/validate-issues.js` fails the build without it. The publisher must set it from the models that actually ran.
- **Editor's note:** none anywhere. `editorsNote` is null and the body has no Editor's note text.

## Recommended (not blocking)

- **The Chosen item is long.** The template asks for "one or two sentences each". The Chosen item has four sentences. It could be cut to two, for example by merging the Deseret background into one sentence. The Holy Sound item meets the guidance.
- **`digest-runs/2026-10-18-sunday/draft.md` is stale.** It still has 4 sections, the old citation numbering (`[[1]](#source-1)` = TheSinging.Bible), `hero: null` and `models: null`. Sync it with the published file or mark it superseded, so nobody republishes from it.
- Still open from round 1: source 9 in round 1 (now source 12) credits "Baptist Press (via Religion Unplugged)" but links the republication. Prefer the original Baptist Press URL if it is open.
