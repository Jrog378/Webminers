FAIL

# Editor report: 2026-10-25 Coding with Christ draft

Draft: `digest-runs/2026-10-25-sunday/draft.md`. Checked against `editorial/style-guide.md` and `.claude/agents/faith-editor.md`.

## Required fixes

### 1. Citations are not numbered in order of first use (style guide, "Accuracy and citations")

The style guide says: "numbered in order of first use, matching the `sources` list in frontmatter." All four published faith issues follow this rule. In this draft the citations first appear in the order 1, 4, 2, 3, 6, 5, 7, 9, 10, 11, 8, 12. For example, the Feature's opening paragraph cites `[[1]]` and then `[[4]](#source-4)`, and `[[2]]` doesn't appear until the next paragraph ("The Christian Post, which says it reviewed OpenAI's analysis ... [[2]](#source-2)"). Source 8 (YouVersion / Christian Post, Mar 17) is first cited in the Wisdom Corner, after sources 9, 10 and 11.

Fix: renumber the inline citations and reorder the `sources` list together, using this old-to-new mapping:

| Old | New | Source |
| --- | --- | --- |
| 1 | 1 | OpenAI, "70M Prompts About Faith" |
| 4 | 2 | MNN, "BT Servant offers tools for studying Scripture" |
| 2 | 3 | Christian Post, "ChatGPT gets 70M requests..." |
| 3 | 4 | Relevant, "ChatGPT Gets More Than 70 Million..." |
| 6 | 5 | MNN, "BT Servant expedites Bible translation work" |
| 5 | 6 | btservant.ai |
| 7 | 7 | bt-servant-engine README |
| 9 | 8 | Crosswalk, Calvin center |
| 10 | 9 | calvin.edu/faith-and-technology |
| 11 | 10 | john11.app |
| 8 | 11 | Christian Post, YouVersion misquotes |
| 12 | 12 | Christian Post, Sam Altman |

Every `[[n]](#source-n)` pair has to match its new position in `sources`. Sources and citations otherwise line up: 12 sources, all 12 cited, no gaps, no orphans, and every bracket number matches its anchor.

### 2. The Wisdom Corner runs slightly long

The target is 150 words ±25%, so 188 at most. This section has about 190 words, not counting citation markers. Trim it to roughly 150–175 words. One easy cut is to shorten "And do it among God's people, who are called to keep meeting together and to stir one another up to love and good works (Hebrews 10:24-25)." to something like "And do it together with God's people (Hebrews 10:24-25)." Keep "The article gives no method for that estimate." because it is the honesty caveat.

### 3. The headline says "AI" when the data cover only ChatGPT

Headline: "People Ask AI About Faith 70 Million Times a Week. Where Do the Answers Come From?" The source counts only ChatGPT requests ("More than 70 million ChatGPT requests each week"). Calling it "AI" stretches one company's product figure to all AI. Fix: "People Ask ChatGPT About Faith 70 Million Times a Week. Where Do the Answers Come From?" The `dek`, `description` and body already say ChatGPT or "a chatbot" correctly.

## Checks passed

- **Scripture:** re-fetched `https://bible-api.com/Acts+17:11?translation=web` with curl. After trimming and collapsing whitespace, the API text matches frontmatter `verse.text` exactly: "Now these were more noble than those in Thessalonica, in that they received the word with all readiness of mind, examining the Scriptures daily to see whether these things were so." The quotes in the Reflection and Wisdom Corner ("received the word with all readiness of mind", "examining the Scriptures daily to see whether these things were so") also match. The place name "Thessalonica" appears only inside the exact Scripture text, which must not be edited, so it is not a geography violation.
- **Guardrails:** stays within broadly shared Christian teaching. No denominational disputes and no prosperity promises. The draft states plainly that tools don't replace the Church or the Spirit: "A tool can point to a passage. Only the Spirit, working through the Word and the Church, forms a disciple." It also quotes BT Servant's own line "Never replaces them." The tone is hopeful without being triumphalist. The Wisdom Corner names a real concern honestly (AI misquoting Scripture, with the lack of a published method disclosed). The Hebrews 10:24-25 reference is a paraphrase, not a quotation.
- **Scope, non-political, no geography:** the Feature centers on AI chatbots and BT Servant as Scripture-study tools. The Also Encouraging items cover a Bible app (John 1:1) and a faith-and-technology center. The body has no country, region, city or national labels. The Christian Post title mentioning Islam is an exact source title and isn't geographic. There are no governments, officials, elections, legislation or culture-war content. Sam Altman is a company CEO, not an official. Advisory only: the Calvin item is about an institution rather than a tool. It fits as discipleship resources about technology, but a short clause on how it helps Christians use tech in following Christ would make the scope clearer.
- **Honest framing:** `featureType: month-review`, with coverage "Thu, Sep 24 – Sat, Oct 24, 2026". The dek says "A month in review." Dated items fall inside the window (Oct 3, 8, 20, 21, 22). Older items are labeled as older ("in January", "In a March interview"). Nothing presents the story as this week's news. "A good habit for this week" in the Reflection is devotional, not a news claim. The John 1:1 app is no longer called "new".
- **Banned words and patterns:** no banned words found. No "not just X, it's Y" constructions and no rhetorical-question transitions in the body. **Em dashes:** none in the body. The two in frontmatter are exact page titles ("BT Servant — Trusted Scripture guidance, in the tools you already use"; "John 1:1 — read the Bible through its connections"), which are exempt and within the max of 2 anyway. The coverage line uses an en dash. **Reading level:** about 14.6 words per sentence, Flesch-Kincaid grade about 8.2. Within target.
- **Sections:** all five H2s match the template prefixes (`## Reflection:`, `## Feature:`, `## Also Encouraging:`, `## Wisdom Corner:`, `## Prayer:`). Lengths: Reflection about 259 words (target 250), Feature about 667 (target 600, limit 750), Wisdom Corner about 190 (see fix 2).
- **Frontmatter:** parses with gray-matter. `node_modules` isn't installed at the repo root, so I ran the same command with gray-matter installed in a scratch directory. `reviewStatus: pending`, `editorsNote: null`, `reviewedOn: null`. `datePublished` and `dateModified` are "2026-10-25T06:00:00-04:00", which is the correct offset before Nov 1.
- **factcheck.json:** all six `fix` items are applied in the draft: "for the first time" removed; "reviewed OpenAI's analysis"; "Relevant quotes the first part of that line"; "publicly posted engine"; "church-centric"; "The article gives no method"; and "new" dropped for John 1:1. No unresolved items remain. The file reports `cut: 1`, but that item isn't listed in `results`, and nothing in the draft looks like it came from a cut claim.
- **models:** present (Claude Opus 5.5; Claude Sonnet 5.5). Note for the publisher: `models` is required, because `scripts/validate-issues.js` fails the build without it. It must list the models that actually ran in this session.
- **Editor's note:** none anywhere. `editorsNote: null`, and the body has no Editor's note text.
