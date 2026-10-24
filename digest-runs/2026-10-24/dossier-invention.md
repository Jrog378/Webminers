# Dossier: invention, "Enron Brain" (this+that)

Primary: https://www.thisandthat.chat/enron/ (overview) and https://www.thisandthat.chat/enron/methodology.html (methodology, costs, audits)
HN: https://news.ycombinator.com/item?id=50207620 ("Show HN: We had AI write a wiki from 45k Enron emails, every fact cited", 55 pts, posted 2026-10-23 by jreynar; read via https://hn.algolia.com/api/v1/items/50207620)
Status: a vendor demo with self-reported numbers. It is not a paper, it has not been peer reviewed and no one has replicated it. I found no independent press coverage (one web search turned up only the site's own pages).
Framing note: "Enron" is used here only as the name of the company whose public email corpus was the test data. The HN thread drifted into politics and corporate-fraud talk. That is excluded on purpose and is not needed for the story.

## 1. What
- this+that (a "company brain" startup) had an AI read 45,047 Enron emails from eight mailboxes. The AI wrote 214 entity pages about the companies, regulators and banks Enron dealt with, holding 49,401 facts. "Every fact cites the email it came from."
- Facts have dates and can expire. Each page has a time slider ("Drag it and the page shows what was known on that date"). 19,528 of the published facts expire. On 175 pages the relationship changes over time, for example Dynegy goes from trading counterparty to agreed acquirer (Nov 2001) to adversary.
- "No one edited a page or a fact." A person stepped in three times, all during setup: keeping 54 of 57 proposed entity types, choosing which classes get pages, and cutting 30 ambiguous names.

## 2. How (from the methodology page)
Four steps. Steps 1 to 3 ran on Claude Opus 5 and step 4 on Opus 5.5.
1. **Find the types.** The model read 3,200 sampled messages and was given 22 generic seed types. It proposed 57 (21 seeds plus 36 of its own).
2. **Find the entities.** Aliases were merged by rule, then by the model. An organization needed at least 25 messages to become a page candidate (444 qualified, 215 were queued, 214 were kept with at least 5 facts).
3. **Build a page.** The model read every message naming the entity and returned facts, each quoting its source sentence. Every quote was string-checked against its message: 37 of 62,205 candidates failed and were discarded. 12,223 were merged as repeats. "Neither the merge nor the closing pass can drop a fact."
4. **Verify.** A newer model read each fact beside its cited messages and kept, rewrote or dropped it. "Nothing may come from what the model knows." Verification rewrote 16,046 facts in pass 1 and 5,714 in pass 2, and dropped 541 (mostly facts about a different organization with a similar name).
- Dev/test split: the method was developed on eight other mailboxes and the published pages were built from a different eight (4.0% overlap among 3,200 sampled messages).
- Data is published per page (`<entity>.json`, `<entity>.sources.json`), along with every audit verdict (`/enron/audit.json`).

## 3. Who
- this+that, a startup selling a "company brain" product. The page says: "We made these pages with a prototype of something we're building." The publisher is the vendor, so the numbers are self-reported marketing as well as research.
- Jeff Reynar (HN: jreynar), a co-founder. On HN he wrote: "I've worked on named entity detection, fact extraction, knowledge management and NLP throughout my career, starting in the NLP stone age of the 1990s." (His first comment was auto-flagged "dead" as possibly LLM-written and was vouched back. Other users disputed whether he had written it himself.)
- The data is the CMU Enron Email Dataset (about 150 users, about 0.5M messages), originally released by FERC (https://www.cs.cmu.edu/~enron/).

## 4. Why it matters
- It shows one way to make an AI summary of a big document pile checkable: every sentence is tied to a verbatim quote, the quote is string-matched mechanically, and a separate judge checks that the statement stays within the quote. The tooling and verdicts are published for anyone to check.
- The authors picked the corpus so anyone can check their work: "We wanted a corpus anyone can check our work against."
- An HN commenter (grey-area) on the general relevance: "applicable to so many domains where people want to query a model about a dataset."

## 5. What's contested / caveats (the honest caveat)
- **Training-data leakage is the central hard problem, and the authors say so.** Reynar on HN: "The hardest part was that the model already knows Enron. It kept adding details from the public record that the email didn't contain." Even after two verification passes, 8 of 500 sampled facts still had a detail that "matches the public record, not the mail" (27 before verification).
- **The accuracy figures come from AI judging AI.** The 93% figure is 466 of 500 sampled facts "fully supported" by their mail, judged by another model (Claude Fable 5.1). "0 of 500 wrong at their core" also comes from that judge. Humans checked only 50 verdicts: "A person graded 50 of the third audit's fact verdicts blind and agreed with 48." (Both disagreements traced to a tooling bug and were later judged supported.) My observation, not stated as a concern by anyone: the judge, builder and verifier are all Claude-family models.
- **About 1 in 15 facts still overstates something.** "about one in 15 had one detail a careful reviewer would soften, such as a surname added to a first name, a verb a shade stronger than the mail's, or a quote credited to the wrong speaker."
- **A cited fact is not the same as a true fact.** "Neither check can tell whether a message was right. A fact here is what the mail said." My spot check shows this: Dynegy fact f67 reads "Enron's Matthew Lenhart wrote on November 9, 2001 that the deal was signed and Dynegy had acquired Enron," citing the mail "they inked the deal.  dynegy has aquired us." The quote is faithful, but the acquisition never closed (the page's own fact f208 records Dynegy terminating it on Nov 28, 2001). The fact carries an expiry condition ("The merger closes or collapses."). Many sources are forwarded press clippings ("Enron Mentions" digests), so "what Enron knew" partly means "what the press said that someone forwarded."
- **Not every check was held out.** The summary and phase checks "aren't held out", and the phase re-check after the fix "isn't a held-out measurement." Phases were "the weakest part of the pages" (25 of 540 failed in the third audit).
- **Cost.** About $11,215 at list prices for one company's eight mailboxes ($8,857 to build plus $2,358 to check). That works out to "37 cents a message read, 18 cents a fact and $41 a page". "We made no attempt to bring that down." It actually ran on a Claude subscription. In a model bake-off on one entity, Haiku 4.5 cost about a tenth as much but found about half the facts, with 13.9% of quotes not in the message, against 1.3% for Opus 5.
- **Other stated limits.** Dates are message dates, not event dates. Alias merges can be wrong. Type discovery saw only 3,200 messages. In 95 long messages the model never read later mentions. Coverage is one company in one era (1999 to 2002).
- **Community objections (HN).** (a) "one incorrect fact could be very damaging and it's very hard to check them all" (grey-area, on use in law or business). Reynar's reply: in the product, people approve proposed changes, "a key defense from the brain turning into slop," and "this demo ... was much closer to fully automated." (b) Plain dismissal: "A LLM produced tons of irrelevant slop and you're expecting other humans to read it." (Kwpolska). (c) Confusion over the "wiki" label (Kim_Bruning: "where's the wiki?"), which Reynar acknowledged. (d) Meta-skepticism that the post and founder comments were themselves AI-written.
- **Privacy.** The authors note "The people who wrote it didn't choose to publish it, so the pages are about organizations." Phone digits and credentials are masked by pattern, but "Names and email addresses appear as they do in the corpus." CMU's corpus page asks users to "be sensitive to the privacy of the people involved."

## 6. What's next
- The authors list prompt improvements they saw in test output but did not apply (skip meeting logistics, expire facts when later mail resolves them, record day-to-day workers rather than only executives). These are "queued for the product". "We haven't measured that."
- In the product, people approve proposed changes rather than the brain being fully automated (Reynar, HN).
- HN asks: open-source the extraction and expiry machinery (jollyllama), and apply it to other public email corpora such as journalism or investigations. Reynar offered to help journalists with "(legitimate) access" to a corpus.

## Key numbers
45,047 messages; 8 mailboxes; 214 pages; 49,401 facts; 62,205 candidate facts; 37 failed the verbatim-quote check; 541 dropped in verification; 466/500 (93%) "fully supported" after the second pass; 0/500 wrong at core; 8/500 still had a public-record detail; 48/50 human agreement with the AI judge; about $11,215 at list price; $0.18 per fact; $41 per page.

## Spot check (my own, from the published sources JSON)
I checked four Dynegy facts against the excerpts in https://www.thisandthat.chat/enron/dynegy.sources.json. Each excerpt contained the cited phrase and supported the statement:
- f71 ($9B stock plus $13B debt): NYT clipping, "agreed to be acquired yesterday by the rival Dynegy Inc. for about $9 billion in stock and the assumption of $13 billion in debt."
- f208 (termination on Nov 28, 2001): Dow Jones clipping, "Dynegy Inc. (DYN) terminated its troubled merger agreement with Enron Corp."
- f247 (Northern Natural Gas): Bloomberg clipping, "Dynegy Inc. said it plans to take over Enron Corp.'s Northern Natural Gas Co. pipeline unit next month".
- f67: faithful to the mail, but the mail's claim was premature (see section 5).
I also tallied audit.json. The verdict counts match the methodology table: 392/459/466 fully supported, 108/40/34 partial, and 27/13/8 outside knowledge.
Limitation: I checked the excerpts against the site's own copy of the messages, not against the raw CMU tarball.

## Quotable lines
- "Every fact cites the email it came from. When the mail shows a fact stopped being true, the page expires it on that date." (https://www.thisandthat.chat/enron/)
- "The hardest part was that the model already knows Enron. It kept adding details from the public record that the email didn't contain." (Jeff Reynar, https://news.ycombinator.com/item?id=50207620)
- "Neither check can tell whether a message was right. A fact here is what the mail said." (https://www.thisandthat.chat/enron/methodology.html)

## Counterpoint (strongest)
The accuracy claims come from an AI judging AI output, with only 50 verdicts checked by a human. Even after verification, the model kept slipping in outside knowledge (8 of 500) and softer overstatements (about 1 in 15). For legal or business use, an HN commenter argues that "one incorrect fact could be very damaging and it's very hard to check them all". The founder concedes the product needs a human approval step that this demo skipped.

## Also in this thread
- This fits the digest theme of making AI work checkable: the formal-verification research pick (proofs) and this demo (quotes plus a judge model) both pair a generator with a mechanical or independent check.
- Related earlier art: the CMU Enron corpus has long been the standard public email testbed (https://www.cs.cmu.edu/~enron/). I did not read it, but MIT Technology Review's "The Immortal Life of the Enron E-mails" turned up in search: https://www.technologyreview.com/s/515801/the-immortal-life-of-the-enron-e-mails/.

## Unverified
- Reynar's background claims (NLP career since the 1990s) are self-described and I did not check them independently.
- HN cost "about $11,000" vs methodology $11,215: consistent, but token counts and pricing are self-reported and I did not check them independently.
- Model names (Opus 5, Opus 5.5, Fable 5.1, Haiku 4.5, Sonnet 5) are as stated by the vendor. I did not confirm that each is a separately released product.
- Whether the HN founder comments were AI-assisted is disputed in-thread and unresolved.
- I found no independent replication, press coverage or expert review.
- The spot check used the site's own message excerpts, not the original CMU files.
