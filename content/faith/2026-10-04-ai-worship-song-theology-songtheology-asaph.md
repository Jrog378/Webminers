---
series: coding-with-christ
title: "Can AI Check a Worship Song's Theology? | Coding with Christ"
headline: "Two Worship Leaders Built Claude-Powered Tools to Score the Theology of Worship Songs"
dek: "SongTheology grades a song's lyrics and Asaph tracks a church's setlists. A researcher asks whether they deepen reflection or replace it."
description: "SongTheology scores worship lyrics out of 35 and Asaph tracks a church's setlists, both on Claude. What they measure and what no one has checked."
datePublished: "2026-10-04T06:00:00-04:00"
dateModified: "2026-10-04T06:00:00-04:00"
featureType: this-week
coverage: "Sun, Sep 27 – Sat, Oct 3, 2026"
reviewStatus: pending
reviewedBy: "Justin Rogers"
reviewedOn: null
editorsNote: null
hero:
  src: "/images/eureka/2026-10-04-ai-worship-song-theology-songtheology-asaph/open-hymn-music-book-worship-songs-1905.webp"
  width: 1600
  height: 1219
  alt: "Large open choir book of hymn notation on a stand, a historic look at the worship song lyrics AI tools now evaluate"
  caption: "A ca. 1905 photograph of a large hymn book open on its stand, the kind of sung theology AI worship-song checkers are now asked to judge."
  credit:
    title: "Large music book open to \"A Vesper (hymn) for the Feast of Santa Clara\" (CHS-4470)"
    author: "C.C. (Charles C.) Pierce"
    authorUrl: "https://commons.wikimedia.org/wiki/File:Large_music_book_open_to_%22A_Vesper_(hymn)_for_the_Feast_of_Santa_Clara%22,_located_in_the_library_at_Mission_Santa_Barbara_and_Santa_Clara_Mission,_ca.1905._(CHS-4470).jpg"
    license: "Public domain"
    licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/"
    sourceName: "Wikimedia Commons (USC Digital Library, California Historical Society Collection)"
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Large_music_book_open_to_%22A_Vesper_(hymn)_for_the_Feast_of_Santa_Clara%22,_located_in_the_library_at_Mission_Santa_Barbara_and_Santa_Clara_Mission,_ca.1905._(CHS-4470).jpg"
    modified: "Resized and converted to WebP"
models:
  - model: "Claude Opus 5.5"
    roles: [story scouting, research, writing, editing]
  - model: "Claude Sonnet 5.5"
    roles: [orchestration, verse lookup, fact-checking, SEO, image search, publishing]
verse:
  reference: "Colossians 3:16"
  text: "Let the word of Christ dwell in you richly; in all wisdom teaching and admonishing one another with psalms, hymns, and spiritual songs, singing with grace in your heart to the Lord."
  translation: "World English Bible"
  url: "https://bible-api.com/Colossians+3:16?translation=web"
sources:
  - type: Reporting
    outlet: "Christianity Today"
    title: "How Great Is Our Claude - Christianity Today"
    date: "2026-10-02"
    url: "https://www.christianitytoday.com/2026/10/ai-claude-worship-leader-setlist-lyric-evaluation/"
  - type: Official
    outlet: "Asaph's Table"
    title: "SongTheology | Worship Song Evaluator — Asaph's Table"
    date: "undated (accessed 2026-10-05)"
    url: "https://asaphstable.com/songtheology/"
  - type: Official
    outlet: "Asaph"
    title: "Asaph: AI Worship Setlist Generator"
    date: "undated (accessed 2026-10-05)"
    url: "https://asaph.io/"
  - type: Official
    outlet: "Asaph"
    title: "About Asaph"
    date: "undated (accessed 2026-10-05)"
    url: "https://asaph.io/about"
  - type: Official
    outlet: "Mark Porter"
    title: "Mark Porter"
    date: "undated (accessed 2026-10-05)"
    url: "https://markporter.co.uk/"
  - type: Official
    outlet: "Living Lutheran"
    title: "ELCA releases paper on artificial intelligence considerations | Living Lutheran"
    date: "2026-10-01"
    url: "https://www.livinglutheran.org/theology-beliefs/elca-releases-paper-on-artificial-intelligence-considerations/"
  - type: Official
    outlet: "ELCA"
    title: "Artificial Intelligence (AI) and ELCA Social Teaching"
    date: "2026"
    url: "https://cdn.elca.org/cdn/wp-content/uploads/ELCA_AI_Foundational_Paper_2026.pdf"
  - type: Reporting
    outlet: "OSV News"
    title: "Evangelization Lab helps churches bring digital travelers to the Catholic faith - OSV News"
    date: "2026-09-28"
    url: "https://www.osvnews.com/evangelization-lab-helps-churches-bring-digital-travelers-to-the-catholic-faith/"
  - type: Analysis
    outlet: "Reformed Worship"
    title: "How Should We Think about AI in Worship?: Theological Considerations for Worship Leaders"
    date: "2026-07-13"
    url: "https://reformedworship.org/resource/how-should-we-think-about-ai-worship-theological-considerations-worship-leaders"
---

## Reflection: Songs That Carry the Word of Christ

Paul wrote Colossians to believers he wanted to see mature in Christ (Colossians 1:28). By chapter 3 he is describing what that new life looks like day to day. Put on compassion and kindness. Bear with one another and forgive. Let the peace of Christ rule in your hearts (Colossians 3:12-15). Then comes this week's verse.

Notice where the word of Christ lives. It is to "dwell in you richly," and Paul is writing to a whole church. This is a shared calling, not a private study plan. The word settles into a people as they are "teaching and admonishing one another."

Notice, too, how the word travels. Paul names "psalms, hymns, and spiritual songs" as ways believers teach each other. Songs teach, whether we mean them to or not. A line sung every Sunday can shape a heart for years.

That is why the question behind this week's feature matters. Does a song carry the word of Christ, or only a feeling about him? Some worship leaders now ask software to help them answer.

Paul places that test in the right hands. The teaching happens "in all wisdom," and the singing comes "with grace in your heart to the Lord." Wisdom grows in people who read, pray and sing together. A tool can point to a weak lyric, but the word is meant to dwell in a congregation.

Here is one practice for this week. Before Sunday, read the words of one song you will sing as slowly as you would read Scripture. Ask what it teaches about Christ and his work. Then sing it to him on purpose, with your church beside you.

## Feature: Two Claude-Built Tools Score Worship Songs for Theology

Worship leaders have built AI tools that help plan setlists and score songs on qualities like scriptural grounding, Christianity Today reported on Oct 2 [[1]](#source-1). One, SongTheology, grades a single song's lyrics. The other, Asaph, tracks the balance of a church's song choices over time [[1]](#source-1).

Both tools run on Claude, an AI model [[1]](#source-1).

**How SongTheology works.** Worship leader Tyler Anson Newberry wrote the scoring grid. The tool uses Claude to analyze lyrics "pulled from Google" and give theological feedback [[1]](#source-1). A song can earn up to 35 points across seven categories, including "scriptural grounding," "gospel presence" and "pastoral durability" [[1]](#source-1). Each category is scored 1 to 5. A total of 30 to 35 reads "Use freely," and anything below 18 reads "Probably avoid" [[2]](#source-2).

The questions behind the categories are pastoral ones. God-centeredness asks, "Where is the center of gravity: God’s character and works, or mainly my experience of God?" Pastoral durability asks, "Can someone suffering sing it honestly?" [[2]](#source-2) The page says the tool "evaluates lyrics only, irrespective of artist or church affiliation." Leaders can also score their own original lyrics, which the site says are "used only to generate this score, then discarded" [[2]](#source-2).

Newberry and his wife, Leslianne Newberry, left full-time church ministry just over a year ago to start Asaph's Table, a nonprofit that supports and trains worship leaders [[1]](#source-1). He built the tool for a gap he sees. "A lot of younger worship leaders don’t have a mental theology grid for the worship songs they encounter," he told CT [[1]](#source-1).

The most-searched song so far is the hymn "Come, Thou Fount of Every Blessing" [[1]](#source-1). CT reported that the popular song "Gratitude" by Brandon Lake scores 20 out of 35, with flags for "gospel clarity" and "emotion without theological grounding" [[1]](#source-1). That number is the tool's output, not a ruling by any church.

**How Asaph works.** Asaph, founded by worship leader Alex Moyse, does not grade single songs. It is designed to track "the emotional and theological balance of a church’s worship sets over time" [[1]](#source-1). The company says a church can import its song library and see "underused themes, gaps in theology or overused emotions" [[3]](#source-3). It can sync with the church-planning service Planning Center through a browser extension, or work from an uploaded spreadsheet [[3]](#source-3).

Like SongTheology, Asaph relies on Claude [[1]](#source-1). Moyse said his team uses the model in a limited way. "It’s doing a lot of the grunt work, and there is still a human in the loop," he said [[1]](#source-1). He was plain about the model's limits, too: "AI is not trained to think about this stuff" [[1]](#source-1). The company tells users "you always have final say" [[3]](#source-3) and that "Technology can't replace your pastoral heart" [[4]](#source-4).

**What hasn't been checked.** Both founders wrote their own evaluation criteria and use Claude to apply them, and neither tool is endorsed by a particular denomination or tradition [[1]](#source-1). Christianity Today's report describes no independent evaluation of either tool's scores. The results described here are the tools' own output, as reported by Christianity Today and the companies.

Mark Porter, a researcher of congregational music who has served churches as a worship leader, director of music, organist and choir leader [[5]](#source-5), experimented with Asaph for CT. "It can put together a coherent musical set," he said. "I think anything that pushes people to be more reflective about the selection of music can be a good thing. But there’s the question ‘Does this tool do that?’" [[1]](#source-1)

Newberry seems to hold the same hope for his own tool. He calls SongTheology "a tool to help you begin to not need this tool" [[1]](#source-1).

## Also Encouraging: An ELCA AI paper and Evangelization Lab's parish outreach

**Humans stay accountable.** The ELCA has released a six-page theological foundation paper on artificial intelligence that, Living Lutheran reports, is not new social teaching but "the beginning of a conversation" [[6]](#source-6). The paper asks that "every application of AI includes human beings in the loop who remain accountable for its use," and it names "the potential reduction in human capacity for critical thinking" as a danger [[7]](#source-7).

**From a digital bulletin to a mission field.** Evangelization Lab trains dioceses and parishes to turn their digital presence into "a much more active source of interpersonal communication," OSV News reported Sept 28 [[8]](#source-8). The aim is to help seekers move off the internet and "into a space where you are in a sacramental loving relationship with Christ and his Church" [[8]](#source-8).

## Wisdom Corner: When a score stands in for discernment

The quiet risk is handing a tool a judgment that belongs to people. A score out of 35 looks settled. It isn't. Both founders wrote their own criteria, and no denomination stands behind either tool [[1]](#source-1). CT notes that the people using AI to build these tools "also have a point of view that informs the instructions they are giving the technology" [[1]](#source-1). Lyrics are not the whole song, either. "Over time, they acquire meanings and uses that aren’t captured in the text," Porter said [[1]](#source-1).

"You can’t use it to shortcut your own reflection and engagement," Porter said [[1]](#source-1). Writing in Reformed Worship in July, Benjamin P. Snoek drew the line in the same place: "There is a problem, though, when we leverage technology to shortcut, not support, the priestly work incumbent on worship leaders" [[9]](#source-9).

Scripture gives the testing to God's people: "Test all things, and hold firmly that which is good" (1 Thessalonians 5:21, World English Bible). A flag on a lyric can start that work. Prayer, the Scriptures and the counsel of the church are where it gets finished.

## Prayer: For those who lead our singing

Lord Jesus, let your word dwell in us richly, and give those who choose our songs wisdom, patience and joy. Keep our hearts fixed on you, and not on our tools. Amen.
