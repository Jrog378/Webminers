FAIL

# Editor report: 2026-10-18 Coding with Christ

Reviewed file: `content/faith/2026-10-18-ai-sings-whole-bible-music.md` (the published copy). Note: `digest-runs/2026-10-18-sunday/draft.md` is out of date. It still has `hero: null` and `models: null`, but the body is identical.

## Required fixes

### 1. Section missing: `## Also Encouraging:` (checklist 5)
The draft has four H2s: Reflection, Feature, Wisdom Corner, Prayer. The faith template, `faith-writer` step 3 and this editor's checklist all require five sections, each with its exact H2 prefix. Every earlier faith issue (09-30, 10-04, 10-11) has the section. The Eureka "skip a section in a quiet week" rule covers the weekday digest sections. It does not cover the faith template. The section was cut on purpose because the only item left was out of window. That is a fair editorial reason, but the editor cannot waive the rule. Fix one of these ways:
- Restore `## Also Encouraging: …` with 2–3 short, cited items from inside the window (Sep 17 – Oct 17). topics.json lists The Chosen AI-dubbing item (movieguide.org, dated 2026-10-13). If it is used, label it honestly as a re-report of an earlier release. Or
- Justin (the owner) explicitly approves a four-section issue for this week. That is his decision, not an agent's.

### 2. Citations are not numbered in order of first use (checklist 6, style guide "Accuracy and citations")
The first cited sentence of the Feature uses sources 2 and 6 before source 1:
> "Two projects, The Music Bible and TheSinging.Bible, say AI now sings every chapter of the Bible, but neither has published error rates [[2]](#source-2) [[6]](#source-6)."

First-use order in the body is 2, 6, 1, 3, 4, 5, 7, 8, 9. Renumber `sources` and every inline citation so they run 1, 2, 3, ... in order of first use. Current to new: 2→1, 6→2, 1→3, 3→4, 4→5, 5→6, 7→7, 8→8, 9→9. Then update `claim-map.json` to match. There are no gaps and no orphans now: all 9 sources are cited, and no citation points past the list.

### 3. Source type `Opinion` is not an allowed type
> `- type: Opinion`
> `outlet: "Washington Examiner (op-ed by Micah Fiechter)"`

`content/faith/_template.md` allows only `Paper | Official | Reporting | Social`. `src/components/faith-issue.js` prints `source.type` as a badge without checking it, so the build passes. The value is still off-schema. (The fact-checker's suggested fix introduced it. The 10-04 issue's `Analysis` is the same kind of drift and is no precedent.) The piece is a first-party statement by The Music Bible's founder, so use `type: Official`. Keep the outlet text "(op-ed by Micah Fiechter)" so readers can see what it is. Adding `Opinion` as a type would be a template change for Justin, not a per-issue choice.

### 4. Place name in visible hero credit (checklist 3, no geography)
> `"credit": {"title": "One of the original copies of the Gutenberg Bible in the Morgan Library in New York", ...}`

`src/components/hero-image.js` prints `credit.title` as the visible link text of the credit line, so "New York" (a city) and the library's location appear on the page. The style guide exempts exact titles only inside the `sources` list. Change `credit.title` to something without the place, e.g. `"Original copy of the Gutenberg Bible"`, or drop `title` (the component then shows "Image"). The image is CC0, so no exact title is legally required. The `alt` and `caption` are already clean.

## Recommended (not blocking)

- **Overlap with the 2026-09-30 issue.** That issue's Also Encouraging item already covered The Music Bible's Sep 22 app launch: 11 genres plus 3 in Spanish, Suno and ChatGPT, and the "occasionally, a word or phrase may be repeated" quote. This Feature repeats those facts. The overlap is acceptable for a month-review because the main material is new: TheSinging.Bible (never covered) and its app and stream rollout, the Oct 11 op-ed, the competing counts, the Barna Oct 6 data, and the accuracy gap. But `faith-scout`'s rule asks us to say what is new when we return to a covered story. Consider one clause in the Feature, e.g. "We noted The Music Bible's app launch in our Sep 30 issue; since then …".
- Source 9 credits "Baptist Press (via Religion Unplugged)" but links the republication. If the original Baptist Press URL is open, prefer it (style guide: original outlet, not an aggregator).
- The Reflection ends "A recording can repeat the words. It cannot talk them over with your child." The Wisdom Corner ends "A recording can carry the words into a commute. It cannot replace …". The same closing move twice leans toward "ending paragraphs with a moral". Consider changing one.

## Checks passed

- **Scripture:** re-fetched `https://bible-api.com/Deuteronomy+6:6-7?translation=web`. After trimming and collapsing whitespace, the API text matches the frontmatter `text` exactly. Reference, translation (World English Bible) and URL are correct.
- **Guardrails:** stays within broadly shared Christian teaching. No denominational disputes. "Protestant pastors" is only Barna's survey population. No prosperity promises. The piece says outright that a recording "cannot replace reading the Bible, gathered worship or the voices of God's people". The tone is hopeful and measured, not triumphalist. The Wisdom Corner names a real concern (melody shapes meaning, mispronunciation, plays are not growth) with sourced quotes and Colossians 3:16.
- **Scope and non-political:** centered on Scripture-engagement technology. No governments, officials, legislation, persecution or culture-war content. "Washington Examiner" and "NC Baptists" are organization names used as credits. "Spanish" is a language, not a national label. The only geography problem is fix 4.
- **Honest framing:** `featureType: month-review`. The Feature says "This is a look back at the past month, not this week's news." Pre-window items are dated as background (Aug 25 launch, Answered Faith "in September", Baptist Press "in January"). `coverage` "Thu, Sep 17 – Sat, Oct 17, 2026" has the correct weekdays.
- **Banned words and patterns:** none found. Em dashes: 0. Reading level about grade 7–8 (Flesch-Kincaid estimate 7.1, average sentence about 16 words). That is at the low edge of grade 8–10 and acceptable.
- **Lengths (prose, citations removed):** Reflection 285 (limit 188–313), Feature 606 without the table, 706 with it (limit 450–750), Wisdom Corner 169 (limit 113–188), Prayer 2 sentences.
- **Frontmatter:** parses with gray-matter 4.x. `reviewStatus: pending`, `reviewedOn: null`, `editorsNote: null`. `datePublished` and `dateModified` are `2026-10-18T06:00:00-04:00` (correct offset before Nov 1). `scripts/validate-issues.js` passes.
- **factcheck.json:** 56 checked: 43 pass, 13 fix, 0 cut. All 13 fixes are applied in the current text: source titles; the Crosswalk attribution; "we found no outside check"; "Suno and ChatGPT, among others"; the separate Music Bible and TheSinging.Bible claims; "We found no published error rates"; "it falls between these categories". The Gloo/Holy Sound item (old cite 10) was removed with the Also Encouraging section. No unresolved items.
- **`models`:** set (Claude Opus 5.5; Claude Sonnet 5.5, with roles). This field is required: `scripts/validate-issues.js` fails the build without it, and the publisher must set it from the models that actually ran.
- **Editor's note:** none anywhere (`editorsNote: null`, and no Editor's note text in the body).
