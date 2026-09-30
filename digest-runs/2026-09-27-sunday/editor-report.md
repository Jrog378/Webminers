PASS

# faith-editor report: 2026-09-27-sunday (Coding with Christ)

Draft checked: `draft.md` (with `image.json`, `seo.json`, `factcheck.json` rounds 1–3). Draft not edited.

## Required fixes to draft.md

None.

## Required publisher steps (not draft failures)

1. **Add `models`.** The draft has no `models` field. The publisher must set it to the AI models that actually ran. `scripts/validate-issues.js` fails the build without it.
2. **Sync `seo.json` description to the draft.** `seo.json` still has the pre-round-3 wording, which states the claim as fact: "Transform Iran's Bible-based Kairos AI chatbot answers from a vetted library and points seekers to pastors. How it works and what is unverified." The draft frontmatter has the attributed version from fact-check round 3: "Transform Iran says its Bible-based Kairos AI chatbot answers from a vetted library and points seekers to pastors. How it works and what is unverified." Publish the draft's version. Update `seo.json` to match, or make sure the draft frontmatter is what ships.

## Checklist

1. **Scripture:** I fetched https://bible-api.com/Acts+8:30-31?translation=web again. The frontmatter `text` matches the API text exactly after whitespace normalization. The Hebrews 10:25 fragment ("not forsaking our own assembling together") also matches WEB.
2. **Guardrails:** The draft stays within broadly shared teaching, with no denominational disputes and no prosperity promises. It says plainly that a tool does not replace the Church ("A tool can point the way to a church. It cannot be one."). The tone is hopeful without being triumphalist. The Wisdom Corner names two real concerns, accuracy and belonging, and anchors them in Hebrews 10:25.
3. **Scope, non-political, no geography:** Pass.
   - The Feature (an AI chatbot that points seekers to Scripture and pastors), Also Encouraging (the Music Bible app) and Wisdom Corner (AI for spiritual guidance) are all about technology and drawing closer to Christ.
   - A scan of the body, title, headline, dek, description, image alt/caption and seo.json title/description found only the allowed organization name "Transform Iran." "Iran," "Iranian" and "Nashville" appear only inside exact source titles in `sources`, which are exempt.
   - There is no government, persecution, protest or death-toll framing. The earlier "amid protests" was removed from the Keyvan account. The VPN line is a plain technology fact.
   - "Spanish" is a language, not a place. The NPR poll is described as "1,011 adults," with the national label dropped, and the fact-checker confirmed this is still accurate.
4. **Honest framing (featureType):** Pass. See judgment call 2.
5. **Banned words/patterns:** None found. The body has 0 em dashes; the only one is inside an exact source title. The one question in the Reflection frames the judging test and is not a transition device. Estimated reading level is about grade 8, with an average sentence of about 15.5 words.
6. **Section lengths / H2s:** All five exact prefixes are present, and all lengths are in range.
   - Reflection: 272 words (target 250 ±25%)
   - Feature: 531 words (target 600 ±25%)
   - Also Encouraging: one cited item
   - Wisdom Corner: 170 words (target 150 ±25%)
   - Prayer: 2 sentences
7. **Frontmatter / citations / factcheck:**
   - gray-matter parses from the repo root.
   - `reviewStatus: pending`, `editorsNote: null`, `reviewedOn: null`.
   - ISO dates carry the -04:00 offset.
   - Citations are [1]–[12], in first-use order, with no gaps or orphans.
   - `factcheck.json`: round 2 passed everything. Round 3's two fixes, the attributed headline/description and the full Silk quote ("...from Christians in their own personal pursuit of truth."), are both applied in the draft. Nothing is unresolved.
8. **models:** Missing. This is a publisher step (see above).
9. **Editor's note:** No agent-written Editor's note anywhere.

## Judgment calls

1. **Question title: "Does Kairos AI Hand Seekers to Pastors? | Coding with Christ" (60 chars): fair, keep.**
   - The Sunday routine explicitly allows `{Feature as a question or claim}`.
   - The question is the article's real test. The dek says so ("The test is whether it hands seekers to pastors."), and the Reflection builds the Acts 8 standard around it.
   - The body answers it honestly: Transform Iran says yes, with specific accounts (the woman pushed to "involve their pastor," Keyvan's church referral). The body also says these "cannot be independently checked."
   - A hedged answer to a real open question is not a tease. It would be a tease only if the body dodged the question or answered "no."
   - Advisory, optional: if a claim title is ever preferred, this one is ≤60 chars and factual: "Kairos AI Chatbot Points Seekers to Pastors, Ministry Says | Coding with Christ". It runs over 60 with the suffix, though, so keep the question.
2. **Dated 2026-09-30, covers Sun Sep 20 – Sat Sep 26, `featureType: this-week`: honest as displayed.**
   - The page shows the "This week" label next to "Covers Sun, Sep 20 – Sat, Sep 26, 2026" (src/components/faith-issue.js), so readers see the exact window.
   - The news hook, Silk's account in MNN on Sep 24, falls inside that window. The Feature states outright that Kairos is not new ("newly launched" in August 2025) and that the news is Silk's account.
   - Two supporting sources fall just outside the window. The Citizen is dated Sep 29, and NPR published Sep 25 and updated Sep 28, which the draft states. These are corroboration, not the hook.
   - Dating the issue truthfully on Sep 30 is more honest than backdating it to Sunday 06:00. Note that the routine normally uses Sunday 06:00; the publisher should keep Sep 30 deliberately for this late run.
3. **Acts 8 retold without place names: faithful and pastoral.**
   - Every narrative detail kept is accurate to WEB Acts 8:26–39: a court official riding home from worship, reading Isaiah aloud, the angel and the desert road, the Spirit's direction, Philip running, the invitation into the chariot, the good news about Jesus, and the request for baptism.
   - The retelling loses the note that the gospel is crossing to a foreigner from far away. That is a real but secondary theme, and the Reflection's point does not depend on it: God sends a person to explain the Word to a reader who has it but cannot understand it.
   - The application is pastoral and not about technology ("Be willing to run to the chariot"). It correctly guards the Word ("Luke does not treat the text as the problem").
   - No change required.
4. **No `models` field:** This is a publisher step, not a failure (see above).

## Advisory (not required)

- Fact-check round 3 noted that internal fields contain geography and persecution words: `seo.json` "note", the `verse.json` candidates, and `image.json` "tried". These are fine as long as none is rendered or copied into `content/faith/`.
