# Dossier: faith — AI tools that check the theology of worship songs (SongTheology and Asaph)

Coverage window: Sept 27 to Oct 3, 2026. Primary source: Christianity Today, "How Great Is Our Claude," Kelsey Kramer McGinnis, Oct 2, 2026 (datePublished 2026-10-02T10:00Z). Claims ledger: `claims-faith.json` (49 entries, ids f* = feature, a* = also-encouraging).

Writer constraints: no place names (the source names a city for each founder, a U.S. state, the researcher's university and country. Drop all of them). No politics (the ELCA paper and the Reformed Worship essay both contain political material. Leave it out). **Disclosure:** both tools run on Anthropic's Claude. If the digest is written with Claude or has any tie to Anthropic, say so plainly in one line.

## 1. What
- **SongTheology** is a free web tool from Asaph's Table, a nonprofit that cares for worship leaders. You search a song by title (and optionally artist). It scores the lyrics out of 35 on seven categories, 1 to 5 each: scriptural grounding, doctrinal clarity, God-centeredness, gospel presence, clarity vs. ambiguity, congregational usefulness, pastoral durability. It then writes a summary and lists "flags to note." [CT; asaphstable.com/songtheology]
  - Bands: 30–35 "Strong · Use freely"; 24–29 "Good · Use thoughtfully"; 18–23 "Use with caution"; below 18 "Probably avoid." [tool page]
  - The page says "This tool evaluates lyrics only, irrespective of artist or church affiliation." Leaders can also score their own original lyrics, which the page says are "used only to generate this score, then discarded."
  - Category prompts worth quoting: God-centeredness asks "Where is the center of gravity: God’s character and works, or mainly my experience of God?" Pastoral durability asks "Can someone suffering sing it honestly? Does it make room for waiting, weakness, repentance, or unanswered prayer?"
- **Asaph** is a commercial "AI worship planning assistant" with free and paid tiers. It does not grade single songs. It looks across a church's whole library and its setlists over time, showing "underused themes, gaps in theology or overused emotions," suggesting sets from a sermon passage, and gathering anonymous team feedback. It has an optional Planning Center Chrome extension and CSV import. [CT; asaph.io; asaph.io/features/worship-song-analysis]

## 2. How
- SongTheology: founder Tyler Anson Newberry wrote the grid language. Claude analyzes lyrics "pulled from Google" against that grid and writes the feedback. [CT]
- Asaph: also "relies on Claude." Founder Alex Moyse says the team uses the model "in a limited way": "It’s doing a lot of the grunt work, and there is still a human in the loop." [CT] Asaph's own FAQ: "AI gives you a starting point—you always have final say." [asaph.io]
- Both founders say they wrote their own evaluation criteria and use Claude to apply them. "Neither tool is endorsed by a particular denomination or tradition." [CT]

## 3. Who
- **Tyler Anson Newberry**: worship leader with 30+ years in Southern Baptist and nondenominational churches. He and his wife **Leslianne Newberry** left full-time church ministry just over a year ago to start Asaph's Table, a registered 501(c)(3). [CT; asaphstable.com/about-us]
- **Alex Moyse**: worship leader and Asaph founder. His father played in a 1980s pop band and produced early contemporary worship albums (color only, optional). An app directory lists the company as Three Times Good Pty Ltd. [CT; faith.tools]
- **Mark Porter**: researcher of Christian congregational music, with a doctorate in ethnomusicology. He has also served churches as worship leader, music director, organist and choir leader. He tested Asaph for the story. [CT; markporter.co.uk] (Omit his university and country.)

## 4. Why it matters
- Newberry: "A lot of younger worship leaders don’t have a mental theology grid for the worship songs they encounter." Without denominational guides, many leaders pick songs "based on musical preferences rather than theological content." [CT]
- Worked example: "Gratitude" (Brandon Lake) scores 20/35 and is flagged for "gospel clarity" and "emotion without theological grounding." The evaluation says it "never names Christ, mentions the cross, grace, forgiveness, or any redemptive work." [CT] (Handle with care. The score is the tool's output, not a church judgment.)
- "Come, Thou Fount of Every Blessing" is the most-searched song. Newberry guesses this is because people want to know what "Ebenezer" means. [CT] This is a good human detail.
- Moyse's aim is to free leaders' time. He also hopes local churches can share their own songs with nearby congregations, to "invert the system that brings worship music from the industry down to the local church." [CT]
- Newberry hopes it serves "the regular people sitting in the pews who wonder, Am I basically listening to junk food?" [CT]

## 5. What's contested (counterpoint / wisdom concern)
Verified directly in the CT article and backed by a separate essay:
- **Porter (independent researcher, in CT):** "You can’t use it to shortcut your own reflection and engagement." "Ask, ‘Does this tool help me to think more deeply? Or does it just reduce this all to a mechanical task?’" He found Asaph "can put together a coherent musical set" but asked whether it actually makes people more reflective.
- **Lyrics-only blind spot:** "songs have histories of being interpreted in different ways... Over time, they acquire meanings and uses that aren’t captured in the text." CT calls this "a significant shortcoming" in Porter's view.
- **Builder bias:** Porter notes "the AI models behind Asaph matter" and that tool-builders' "point of view... informs the instructions they are giving the technology."
- **No church body behind it:** neither tool is denominationally endorsed. [CT]
- **Second independent voice:** Benjamin P. Snoek, writing in *Reformed Worship* (Calvin Institute of Christian Worship), July 13, 2026. He calls Asaph's repertoire reports potentially "an insightful starting point," but warns: "There is a problem, though, when we leverage technology to shortcut, not support, the priestly work incumbent on worship leaders." He also quotes Asaph's older tagline, "built for worship leaders who don’t have time to waste," as an example of efficiency marketing.
- Founders' own guardrails: Moyse says he doesn't want leaders to "outsource their discernment to Claude." Newberry: "It’s a tool to help you begin to not need this tool." To skeptics: "To those who don’t want to bring AI into this process, I get it."
- The wisdom concern in topics.json is fully supported by these sources.

## 6. What's next
- Moyse wants churches to see what songs other congregations in their area or denomination are using. [CT]
- Newberry sees SongTheology as "one of many resources" he is building. [CT]

## Key numbers
- 35 points max, 7 categories, 1–5 each (SongTheology).
- 20/35: the "Gratitude" example.
- 30+ years: Newberry's ministry.
- Asaph users: the **homepage says "900+ worship leaders," but the About page says "300+."** This is an inconsistency, so avoid the number or attribute it ("Asaph says...").
- Asaph claims a database of "10,000+ songs." [asaph.io, company claim]

## Quotable lines
1. "It’s a tool to help you begin to not need this tool." — Tyler Newberry, in CT: https://www.christianitytoday.com/2026/10/ai-claude-worship-leader-setlist-lyric-evaluation/
2. "You can’t use it to shortcut your own reflection and engagement." — Mark Porter, in CT (same URL)
3. "Can someone suffering sing it honestly?" — SongTheology grid, https://asaphstable.com/songtheology/

## Also in this thread (each verified by reading its URL)
1. **ELCA AI foundation paper** (Living Lutheran, Oct 1, 2026; the post first appeared in Covalence): https://www.livinglutheran.org/theology-beliefs/elca-releases-paper-on-artificial-intelligence-considerations/ . I read the full 6-page PDF: https://cdn.elca.org/cdn/wp-content/uploads/ELCA_AI_Foundational_Paper_2026.pdf
   - Not new social teaching; "the beginning of a conversation"; ethicists will take it up again in January 2027.
   - It frames the topic with the Golden Rule (Matthew 7:12) and calls AI "a breathtaking means" of God-given human innovation.
   - It asks that "every application of AI includes human beings in the loop who remain accountable for its use." It names "the potential reduction in human capacity for critical thinking" as a danger, which ties straight back to the feature. It also respects the consciences of members on both sides.
   - Avoid: the regulation, labor and data-center passages (political).
2. **Evangelization Lab** (OSV News, Jay Sorgi, Sept 28, 2026): https://www.osvnews.com/evangelization-lab-helps-churches-bring-digital-travelers-to-the-catholic-faith/ (Cloudflare blocked curl, so I read it via WebFetch.)
   - It trains diocesan staff and parishes to turn their web presence into "a mission field" instead of "a digital bulletin." The goal is getting seekers "off this internet space and into a space where you are in a sacramental loving relationship with Christ and his Church." One diocese reports "about 55 couples a month" in marriage preparation because digital outreach is paired with human formation.
   - Omit the founder's city and the diocese's name.
3. **Wycliffe Bible translation statistics**: https://wycliffe.org.uk/statistics/
   - **CORRECTION to topics.json:** the page says "almost 1 every 3 days," not "about every four days." That rate covers Bibles *and* New Testaments, not complete Bibles alone.
   - The page is dated "Updated: 1 September 2026" (ProgressBible September 2026 snapshot), not Sept 30.
   - Figures: 807 complete Bibles (up 2), 1,844 New Testaments, 3,224 languages with no Scripture yet, "1 in 5 people" still waiting, about one new language project starting per day.
   - The **stats page itself does not mention technology.** For the "helped by technology" angle, use Wycliffe UK's 2023 stories instead: https://wycliffe.org.uk/blog/story/three-ways-technology-is-speeding-up-bible-translation/ (AI drafting and checking tools) and https://wycliffe.org.uk/story/why-is-the-pace-of-bible-translation-increasing (technology plus trained local translators).
   - Omit the UK/Ireland staffing section.

## Unverified / gaps
- No HN or Reddit discussion of the CT piece found. A search turned up only an apparent repost on orthodoxhouse.com, which I did not read. Community reaction is limited to the quotes in the article.
- I did not test SongTheology's scores myself. The "Gratitude" 20/35 result is CT's report, and LLM output may vary between runs.
- No independent source confirms Moyse's biography beyond CT and the faith.tools listing (which is itself AI-researched).
- The claim that the grid is "research-based" comes from Asaph's Table's own footer and is not substantiated.
- No research on accuracy or validity exists for either tool. Everything is claimed or anecdotal.
- The Lanier Theological Library episode on Asaph's Table returned 403, so it was not read.
