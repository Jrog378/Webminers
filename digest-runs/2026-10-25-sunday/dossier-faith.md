# Dossier: faith (Coding with Christ, Sunday 2026-10-25, month-review)

**Feature:** 70 million faith questions a week: people are asking AI about God, and Scripture-grounded tools are trying to answer faithfully.
**Claims ledger:** `claims-faith.json` (54 entries; every quote checked word for word against the saved page text). Claim IDs are given in brackets below.

Editorial guardrails for the writer (style guide and topic notes):
- No geography. The OpenAI post has three user stories, each tied to a city or state. It also has an "AI Sentiment Tracker" item on one nation's public and a governance argument in the Lehane essay. **Omit all of it.** The YouVersion source also mentions a city where a hub opened. Omit that too.
- The breakdown by religion gets at most one brief, non-comparative mention.
- Do not say these chats lead anyone to a church or a Bible. Nothing in the sources says so.
- Attribute OpenAI numbers to OpenAI ("OpenAI says"). Attribute BT Servant's trustworthiness claims to unfoldingWord or Lindsley. No one has tested them independently.

---

## 1. What

**OpenAI analysis (Oct 8, 2026).** OpenAI's Global Affairs newsletter "The Prompt" says people turn to ChatGPT "more than 70 million times" a week "with questions primarily about religion" [f01]. The figure comes from a new OpenAI report, *Faith, Community & AI* [f02]. The weekly breakdown:
- **22 million** are about studying religious texts, "including understanding difficult passages and exploring scholarly interpretations" [f03].
- **16 million** are about practices, holidays and observance [f04].
- **16 million** are about beliefs, meaning and spiritual guidance [f05].
- Christianity-related requests rise around Easter [f06].

The Christian Post reviewed the full report. It found that **nearly half of Christianity-related messages were about Bible passages**, and another **13%** were about worship, sermons or church practices [f11]. Relevant reports the same figures independently [f12]. The data cover **September 2025 to September 2026** [f09]. If the writer mentions the breakdown by religion, keep it to one line: about 45% Islam, 34% Christianity, 4% Hinduism, 2% Judaism, 1% Buddhism [f10].

**BT Servant (unfoldingWord).** BT Servant is a free AI assistant for Bible study and translation. People use it inside chat apps such as WhatsApp, Signal and Telegram, or on the web, by text or voice [b08, b17, b18]. unfoldingWord announced it in January 2026 as a tool for church-based Bible translators [b12, b13]. Mission Network News (Oct 21, 2026) now presents it to everyday Bible readers: "the same tools that help Bible translators are available to you!" [b03]. The site says it is "Grounded in vetted biblical resources — not the open internet" [b15], and that it "Supports pastors, teachers, and translators. Never replaces them." [b16]. It lists English, Indonesian, Spanish "and many more languages" [b17]. The project is open source and run by unfoldingWord [b19].

## 2. How

**How OpenAI counted.** Neither the newsletter nor the coverage explains how requests were sorted into religious categories, or how privacy was protected. The newsletter gives no time period; the Sept 2025 to Sept 2026 span comes from the Christian Post [f09]. I could not find the full report on openai.com (see Unverified).

**How BT Servant works.**
- Ian Lindsley built it for unfoldingWord. He describes it as a tool translators use to "ask questions about a passage they're translating, no different than talking to a translation consultant" (MNN). His analogy for how it answers: "It's as though when BT Servant is asked a question, he looks back at his desk, and he has a bunch of books on it... make sure that you pull the answer from these trusted resources" [b05].
- Lindsley gave the assistant explicit instructions. In his words: "You are an Orthodox Christian, and in no situation should you tell the user to do anything that's heretical or that's against Scripture" [b06]. ("Orthodox" here means doctrinally sound, not the Eastern Orthodox Church. MNN writes "orthodox Christianity" in lowercase elsewhere.)
- **Important technical point from the repo README:** the engine "integrates OpenAI models plus ChromaDB-backed resources" [b20]. Its translation-help answers are "Retrieval-augmented answers using ChromaDB + OpenAI" [b21]. So BT Servant is *not* a separately trained model. It uses a general-purpose model (by default, OpenAI's) and has it look up a curated library before answering. This technique is called retrieval-augmented generation. "Not the open internet" describes where the answers come from, not how the underlying model was trained. The writer should say it this way, for example: "it runs on a general AI model but is told to answer from a curated shelf of Bible translation resources." The README also describes Bible passages stored as data files and a fallback to English when a language's resources are missing.
- Setup is meant to be easy: "It's as easy to install as it is to add a contact" [b09].

## 3. Who

- **OpenAI**, in its Global Affairs newsletter. No author is named for the faith item. The Christian Post story is by senior reporter Leonardo Blair (Oct 20). The Relevant story was published Oct 22.
- **unfoldingWord**: Ian Lindsley (developer), and "Dane" (single name, quoted at the January launch). The site lists ETEN Innovation Lab, Word Collective and Spoken Worldwide as partners. I saw them only as partner links on the site.
- **Mission Network News** reporter Katey Hearth wrote both BT Servant articles (Jan 9 and Oct 21, 2026). MNN is a ministry news service. Its stories include prayer requests and do not test the tool.
- **Counterpoint voice:** Bobby Gruenewald, founder and CEO of YouVersion, in a Christian Daily International interview republished by the Christian Post (Mar 17, 2026) [c01 to c04].

## 4. Why it matters

The two stories connect. OpenAI's own data show that Scripture questions are already one of the main reasons people bring faith to a chatbot: 22 million text-study requests a week, and nearly half of Christianity-related messages about Bible passages [f03, f11]. So the useful question is where the answers come from. BT Servant is one answer: a free tool that answers from a curated library inside apps people already use [b04, b15]. OpenAI itself says AI "is not — and should not become — an arbiter of religious truth or a replacement for spiritual guidance. Those roles belong to individuals, religious leaders, and congregations" [f13, f14]. It also says religious life is "rooted in shared traditions, personal conviction, and connections among people. AI can support those activities, but it cannot and should not substitute for them" [f15].

## 5. What's contested (counterpoint and wisdom concern)

**Strongest counterpoint (independent of both OpenAI and unfoldingWord):** YouVersion's CEO says AI is not ready to answer questions about Scripture. "The best model with the best performance, with the most popular versions of the Bible that are most indexed, misquotes Scripture at least 15% of the time... Some of them as much as 60% of the time" [c01]. For that reason, YouVersion has chosen not to launch a public chatbot that answers theological questions [c02]. He also warns that readers "might not recognize when a verse is misquoted or subtly altered" [c03]. He urges people to know the Bible themselves and to seek guidance from trained pastors [c04].
- *Status:* this is a claim made in an interview. No methodology is published, so call it his estimate, not a study. I found no peer-reviewed study of Bible misquotation by AI models. The closest academic work covers Quran and Hadith citation (search results only, not read).

**Limits of BT Servant (from the sources themselves):**
- All trustworthiness claims come from its developer. MNN does not test them, and I found no independent evaluation or published error rate [b07].
- It still runs on a general model trained on internet data [b20]. Retrieval and instructions reduce the risk of errors but do not remove it.
- It is young and changing. For most of its life it was a one-person project, and "We're constantly adding improvements and fixing things" [b10].
- Even the ministry outlet asks readers to pray users will use it "with discernment" [b11].

**Limits of the OpenAI data:** the analysis comes from the company that sells the product. Classification methods are not public. And nothing in it says these conversations lead anyone to Scripture or a church.

**Wisdom concern (for the closing note):** General chatbots can sound authoritative while misquoting or misreading Scripture [c01, c03]. They can also quietly stand in for a pastor or a church family. Two sources independent of each other make the same point:
- OpenAI says AI should not be an arbiter of religious truth and that these roles belong to "individuals, religious leaders, and congregations" [f13].
- Sam Altman posted on Oct 3: "I am very uncomfortable about people trying to ascribe religious force or a surrender of human judgment to AI models, and think it is a real safety issue" [f17]. His post is a statement about AI safety, not politics. If quoted, quote only the sentence and leave out the surrounding Grok/Vatican context.

The section should point readers back to the text itself and to a real community. Scripture must come from the World English Bible via bible-api.com (style rule).

## 6. What's next

- BT Servant is still adding features and fixes, with a growing developer team [b10]. Organizations can contact unfoldingWord to deploy it with their teams (site).
- Gruenewald says YouVersion has privately pressed AI developers to improve how models handle Scripture, and would help them get reliable Bible texts if they reached consistent accuracy (same article as c01).
- The full OpenAI *Faith, Community & AI* report would let the writer cite the Bible-passage figure from the primary source. I could not reach it (see Unverified).

---

## Key numbers

| Figure | Source | Status |
|---|---|---|
| 70M+ weekly religion-focused ChatGPT requests | OpenAI [f01] | Company claim |
| 22M weekly text-study requests | OpenAI [f03] | Company claim |
| 16M practices; 16M beliefs/meaning | OpenAI [f04, f05] | Company claim |
| ~half of Christianity-related messages are about Bible passages; 13% worship/sermons/church | OpenAI report via Christian Post and Relevant [f11, f12] | Company claim, secondhand |
| Data period Sept 2025 to Sept 2026 | Christian Post [f09] | Reporting |
| AI misquotes Scripture 15% to 60% of the time | YouVersion CEO [c01] | His estimate, no methodology |
| BT Servant: free; text or voice; WhatsApp, Telegram, Signal and web | btservant.ai, MNN [b08, b17, b18] | Official |

## Quotable lines

1. "AI is not — and should not become — an arbiter of religious truth or a replacement for spiritual guidance." OpenAI report, quoted by the Christian Post: https://www.christianpost.com/news/chatgpt-gets-70m-requests-about-religion-weekly-most-about-islam.html (also in Relevant). Note that this line contains an em dash, which counts toward the style limit.
2. "It's as though when BT Servant is asked a question, he looks back at his desk, and he has a bunch of books on it." Ian Lindsley, unfoldingWord: https://www.mnnonline.org/news/bt-servant-offers-tools-for-studying-scripture/
3. "Supports pastors, teachers, and translators. Never replaces them." BT Servant site: https://www.btservant.ai/
4. Counterpoint: "misquotes Scripture at least 15% of the time." Bobby Gruenewald, YouVersion: https://www.christianpost.com/news/ais-bible-misquotes-range-from-15-to-60-youversion-ceo.html

## Community reaction

- **Hacker News:** no thread on the OpenAI faith post or BT Servant (Algolia search). John 1:1 was posted as "Show HN: New Forms of Reading" on Oct 21 and had 1 point and 0 comments when I checked [a12].
- **Substack comments on the OpenAI post:** a single hostile, anti-religious comment. It is not representative and should not be used.
- **Reddit:** not reachable (the candidates file notes a 403).
- **Faith press:** Christian Post and Relevant covered the numbers straight. Relevant's light framing: "The average request sounds a lot more like small group than a debate about whether God exists." This is commentary, attributable to Relevant.

## Also in this thread (alsoEncouraging)

1. **Calvin University Center for Faith and Technology** (Crosswalk, Oct 20, 2026; verified on Calvin's own page).
   - Housed in the School of Engineering and Computer Science [a01, a02].
   - Director: Derek Schuurman [a04].
   - It plans to "Provide resources, facilitate workshops and panels" for churches and practitioners [a05].
   - Its stance, from the Calvin page: "Rather than approaching technology with uncritical enthusiasm or fear-driven resistance... with courage, curiosity, wisdom, and discernment" [a06].
   - President Greg Elzinga: Christians should be "thoughtfully considering how technology can be developed and used in ways that serve our neighbors" [a03].
   - Primary: https://calvin.edu/faith-and-technology. Crosswalk names a city; omit it.
2. **John 1:1 iPhone app** (john11.app; posted Oct 21).
   - Free and fully offline. "No ads. No accounts. No in-app purchases." [a07]
   - Readers swipe sideways to follow "a quotation, an echo, a shared person or place" to another passage [a08].
   - Contains 292,374 ranked connections and 10 translations in 7 languages, including the World English Bible and the KJV [a09].
   - Collects anonymous usage counts. "There are no plans to monetize the app." [a10]
   - Publisher: Repertorium LLC [a11].
   - Caveat: no independent reviews, and there was no reaction on HN.
3. **Emory Candler course "Speaking of God in an Age of Artificial Intelligence"**: UNVERIFIED. The WABE page returned 403 and a Cloudflare challenge. There is no archive copy, and I found no course page. Search snippets (not read firsthand) attribute it to Brady Beard (Pitts Theology Library) and Sarah Bogue (Candler). They describe it as free, in three sessions (Introductions and Definitions; Ethical Framing; Applying Our Frameworks), and say Beard advises clergy to talk with their congregations and have a data-protection plan. **Recommendation:** mention it in one line at most, attributed to WABE, or drop it. It is not in the claims ledger.

## Unverified

- **The full OpenAI *Faith, Community & AI* report.** The newsletter does not link to it, and searches found no copy on openai.com. The "nearly half... Bible passages" figure, the 13% figure, the arbiter quote, the Sept 2025 to Sept 2026 period and the breakdown by religion are all secondhand, from the Christian Post (which says it reviewed the report) and Relevant. Two outlets agree, but neither is the primary.
- How OpenAI classified the requests, and how it handled privacy: not disclosed in anything I read.
- BT Servant's exact resource list (unfoldingWord translation notes, translation words, and so on). The README mentions "translation helps" and "FIA" resources, but I did not confirm the full list. User numbers and accuracy are unknown.
- The GitHub API was blocked for this repo. I read the README via raw.githubusercontent.com and could not confirm the license.
- The Emory course details (above).
- The YouVersion 15% to 60% figure has no published methodology.
- Overlap check: YouVersion is in topic memory (Oct 11) for its usage data. Using the CEO's misquote warning as a counterpoint is a different angle, but the editor should confirm.
