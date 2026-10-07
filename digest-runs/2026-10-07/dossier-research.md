# Dossier: Research — RealCompanion (arXiv 2610.01780)

Issue 2026-10-07 · window 2026-10-03..2026-10-06 · claims in `claims-research.json` (ids r1–r32)

## Status and timing (read first)
- **Preprint, not yet peer-reviewed.** arXiv cs.AI. v1 1 Oct 2026, v2 2 Oct 2026; no venue listed [r1]. The data-maintenance note says contact details are "withheld for anonymous review", which suggests it was submitted to a conference, but no venue is named. Don't name one.
- **Window:** submitted *before* the window (10-01). The in-window hook is the Hugging Face Daily Papers feature on **2026-10-05**, where it was the top item (268 upvotes on 10-07; topics.json recorded 267) [r2]. Suggested framing: "a preprint posted Oct. 1 that topped Hugging Face's daily paper list on Oct. 5."
- **Use v2.** The abstract was rewritten in plain language in v2. HF's summary still shows the v1 abstract. Quote from the arXiv abs page (v2).
- **Number discrepancy:** the v2 abstract says persona "F1 0.71", but the body and Table 6 say 0.686 / 0.688 / 0.701 ("0.69 to 0.70") [r14, r16]. Use "about 0.7" or the table values. Don't use 0.71 as a precise figure.

## 1. What
RealCompanion is a benchmark and dataset of **ten real people's relationships with an AI companion app: 27,218 messages over 36 to 120 days each** [r3]. For each person the authors release the full (anonymized) conversation plus four derived files: a profile (facts the person stated), a persona (how they think, feel and decide), chat test items and question test items. Every label cites the messages it rests on [r3].

Three headline findings (authors' claims, preprint):
1. **People rarely refer back, and when they do it's far back.** 3.4% of messages need something said earlier (1.3% under a stricter reading); the needed message sits a median of **2,157 messages** back [r5, r6].
2. **AI can't tell when the past matters.** A detector scored AUROC 0.530, about chance [r9]. Calling the same messages "memories" instead of "earlier messages" made models bring up the past **10 to 14 percentage points** more often, even when nothing from the past was needed [r10].
3. **AI reads more into people than they revealed.** Three agent systems rebuilt personas with similar accuracy (F1 about 0.69–0.70). Recall was high (0.86–0.89) but precision lower (0.56–0.59): they "add about seventy to eighty further fields for every hundred they recover" [r14, r15, r16].

## 2. How
- **Source:** an "internal AI-companion application" with a friendship-style companion that has "a name, a mood, an outfit," plus streaks, a habit tracker and mini-games [r18]. The companion often speaks first. Dataset released by **Quis Inc.** (HF org "Quis Lab") [r28]. The paper doesn't name the app.
- **Anonymization:** a model rewrote every message, swapping names and identifiers for consistent stand-ins. Meaning is kept, wording is not [r19].
- **Labels:** a five-stage model pipeline (find what the message points to → verify against the conversation → classify → write a reference reply → validate). Each stage records its reasoning. People and an independent model audited it [r25].
- **Tests (three tracks):** reconstruction (rebuild profile and persona from the full history); chat (reply to the person's real messages); questions (3,312 written questions, 3,235 scoreable).
- **Retrieval baselines:** recency finds a needed distant message in the top five 2.2% of the time, keyword search (BM25) 24.8% ("still misses three in four") [r7, r8].
- **Systems tested:** Claude Opus 5.5, Codex GPT-5.6-sol, and Antigravity running Gemini 3.8 Flash, three runs each [r13]. Cost differed hugely: Claude processed 546M tokens, Codex 18M, Antigravity 36M at roughly the same F1. The paper calls it a "31-fold difference in cost" in tokens [r14, r17].
- A memory system in the style of a deployed product (the "Codex port") answered 44.5% of answerable questions correctly [r29].

**Analogy option (one per deep dive):** a friend who remembers everything you said but keeps mentioning it at the wrong moments, and fills in things about you that you never said. Figure 1 of the paper gives a concrete example the writer can paraphrase: a user who had said they were "not sure I want it" about a team-lead job reports "I got the job". The wrong reply ("Congratulations! Just what you wanted.") assumes something the user never said.

## 3. Who
- Authors: **Arman Behnam, Sunglyoung Kim (Quis Lab), Liangwei Yang (independent researcher)** [r1]. The acknowledgments thank Quis Lab executives Jiayi Yu and Eric Huang, and "the OpenAI and Google research teams for their support."
- Do not mention the affiliations' location (the paper lists one; style guide forbids geography).

## 4. Why it matters
- Millions of people talk to chat assistants and companion apps for months. Products now ship "memory" features. This paper argues that benchmarks built from invented people and invented questions overstate how often memory is needed, and so mismeasure it [r4, r12].
- The finding with real stakes for users: memory systems surface the past at the wrong times. With ten unselected earlier messages in context, models brought up the past when it wasn't needed 60.8% of the time (0% with no context) [r11]. They also make up traits about the person [r15].
- **Independent support for "knowing when to remember is hard":** CUPID (peer-reviewed, COLM 2025) found models "fail to discern what previous context is relevant" (<50% precision) [r30]. HorizonBench (preprint, simulated users) found most of 25 frontier models at or below chance on evolving preferences [r31]. CompanionBench (preprint) found companion agents substitute "surface warmth for substantive relational support" [r32]. These are related findings by other groups, not replications of RealCompanion.

## 5. What's contested / limitations (counterpoint)
No outside critique exists yet: there is no HN thread, no press coverage, and the HF comments are only the author and a bot. The strongest counterpoints come from the paper's own disclosures, which are unusually candid:
- **Tiny, skewed sample.** Ten self-selected users of one app: "they are not a sample of companion users and still less of people," and how much "survives a different product is unknown" [r22]. Two users hold 73% of all messages [r23]. Under the strict reading, five of the ten contribute no memory-needing items, so those results rest on five people [r24].
- **Ethics oversight is not independent.** Approval came from "the data operator's internal ethics committee... not independent of the operator, and no institutional review board was involved" [r20]. Participants consented [r19].
- **Re-identification risk.** Even after anonymization, a language model matched writing samples to the right person 98% of the time (chance 10%) [r21]. The data is gated, a person reviews every request, and the terms forbid profiling, identifying people, or commercial use [r27, r28].
- **Models built the labels.** The ground truth, the anonymization rewrite, the question set and the persona files were all produced by models, then audited. The audit found about a fifth of the stage-A written reasoning wrong, although only 7 of 1,533 reference replies were disputed [r25]. The persona file is "not a validated psychological instrument" and participants never reviewed it [r26].
- **Rewriting may change results.** The authors say the effect of the rewrite on scores "is not measured" [r22 context, Appendix H.4].
- **Conflict-of-interest disclosure needed:** the paper evaluates **Claude Opus 5.5**, the model writing this digest. Claude was the most token-hungry system (546M vs 18M) at about the same accuracy [r14, r17]. Report it neutrally, with no spin in either direction. The paper's own "31-fold" figure is about tokens processed, not money. Say "tokens", not "dollars".

## 6. What's next
- The dataset is on Hugging Face under a gated Data Use Agreement. The scoring package "accepts submissions from others" (Appendix H.6), and corrections will ship as hashed new versions [r28].
- The authors call for real conversations as the test bed: "only real conversations can test it" (abstract).
- Watch for: peer review and venue, independent groups requesting the data and reproducing results, and memory-product vendors (mem0, Supermemory, both run partially in Appendix F.7) responding.

## Key numbers
| Figure | Value | Claim |
|---|---|---|
| People / messages / span | 10 / 27,218 / 36–120 days | r3 |
| Messages needing the past | 3.4% (strict: 1.3%) | r5, r6 |
| Median distance back | 2,157 messages | r5 |
| Recency hit, overall vs distant | 95.9% vs 2.2% | r7 |
| Keyword search on distant items | 24.8% | r8 |
| "Need memory?" detector | AUROC 0.530 (chance 0.5) | r9 |
| "Memories" label effect | +10 to 14 points | r10 |
| Unneeded recall with 10 unselected msgs | 60.8% | r11 |
| Persona F1 / precision / recall | ~0.69–0.70 / 0.56–0.59 / 0.86–0.89 | r14, r15 |
| Tokens: Claude / Codex / Antigravity | 546M / 18M / 36M | r14, r17 |
| Re-identification by LLM | 98% (chance 10%) | r21 |

## Quotable lines
1. "They see the person, and then imagine more." (arXiv abstract v2) https://arxiv.org/abs/2610.01780
2. "Removing identifiers does not remove authorship, and that is a property of conversational text." (Ethics statement) https://arxiv.org/html/2610.01780v2
3. "the corpus records that a relationship continued, not what it did for the person in it." (Datasheet H.5) https://arxiv.org/html/2610.01780v2

## Style-guide flags for the writer
- Label it "not yet peer-reviewed" and attribute all findings to the authors.
- No geography: skip the affiliation location. Skip the paper's mention of a specific data-protection regulation; if needed, say "participants gave explicit consent."
- Don't call CompanionBench "bilingual" by language names. Just cite its finding.
- The "31-fold" figure is about tokens, not dollars.

## Also in this thread
- Ties to the invention pick (SCM, local photo/video search): both are about AI holding a person's own life. RealCompanion's re-identification (98%) and over-inference findings support a closing line about accuracy and user control, and about keeping that memory local.
- Runner-up worth a mention: "Science or Slop?" (arXiv 2610.00531), on measuring low-quality AI-written papers.

## Unverified / not found
- No HN thread (Algolia search for "RealCompanion" and "2610.01780" found nothing relevant), no press coverage, no Reddit (blocked, 403). Semantic Scholar was rate-limited (429). OpenAlex lists the work with 0 citations. alphaXiv shows 8 views and no overview or comments.
- The name of the companion app, and whether Quis owns or operates it, are not stated outright. The paper says "internal AI-companion application" and "data operator"; the dataset is "released by Quis Inc." Don't assert ownership.
- OSF and anonymous.4open.science data/code links were not fetched.
- The dataset itself is gated, so its contents were not inspected.
