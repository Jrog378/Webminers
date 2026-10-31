# Dossier: faith — Ligonier's AI answer assistant and the human handoff

Coverage window: Oct 25 to Oct 31, 2026. Claim IDs refer to `claims-faith.json`.
Scope: technology only. The Fox article opens with a political aside from the CEO. It is irrelevant to the tool, so leave it out (no claim recorded).

## 1. What
- Ligonier Ministries has an AI "intelligent answer assistant" called **Ask Ligonier**. It answers questions about the Bible, theology and the Christian life, and it draws its answers from Ligonier's own teaching library (f06, f14, f15).
- It sits inside Ligonier's redesigned mobile app, **Grow: From Ligonier**. Fox calls the app "Grow" and does not name the assistant. Ligonier's own pages call the assistant "Ask Ligonier" (f03, f06, f16, f17). This settles the naming question in topics.json: Grow is the app, and Ask Ligonier is the AI feature inside it.
- **Status: limited beta. Do not call it a public launch.**
  - Ligonier Labs labels it "Ask Ligonier (Beta)" and says "Access to these early experiments is limited to select users during their testing phase" (f13).
  - The Ask Ligonier page says it is "in-development" and that access "is currently limited to Ministry Partners during this beta phase" (f15).
  - The App Store release notes say "This feature is available to Ministry Partners." These notes first appear with Grow version 12.0.1, dated 2026-09-17 (f16).
  - The Grow website offers "30 free days of Ask Ligonier ... and other Ministry Partner benefits" (f18). That means a non-partner can try it, but ongoing access is gated.
  - Safe wording: "in a limited beta, mainly for Ligonier's Ministry Partners, with a 30-day trial offered through the Grow app."

## 2. How (guardrails, all as described by CEO Chris Larson to Fox; none independently tested)
- **Closed source library.** "It is just trained on our library" (f07). The CEO says that is 50 years of teaching from 800+ teachers, and Fox says "tens of thousands of pieces of content" (f04, f05). Note the wording: Fox and Larson say "trained on." Ligonier's own pages say "drawing answers from." That sounds like retrieval, but no technical details are published. Unverified: which model it uses, and whether it is fine-tuned or retrieval-based.
- **Sandbox plus deferral to a human.** "we've given it a sandbox to work within, and any time that somebody tries to push it beyond the borders, we're going to deflect or defer to a real human" (f08). Unverified: who that human is, and whether it is a live connection or only a referral. In 2018 Ligonier launched a human-staffed, 24/6 chat service under the same name, Ask Ligonier (f20). It is plausible the deferral goes to that team, but I found no source confirming the team still exists or is the handoff target. Do not assert it.
- **Crisis referral.** If a user discusses suicidality, it points them "to the suicide hotline or other real-world resources" (f09). By Barna's own framing, that is a *referral*, not a *connection* (f25).
- **No pretending to be human.** Ligonier also says it should not replace a pastor, elder or parent (f07, f10).
- Fox adds, unsourced, that human support is "a feature most large language model AI tools refuse to implement" (f12). This is the reporter's characterization, and the same week's Barna piece contradicts it: Barna describes OpenAI's trusted-contact feature from May 2026. Don't repeat Fox's line.

## 3. Who
- Ligonier Ministries, founded by R.C. Sproul. Chris Larson is its president and CEO (f02). Ligonier Labs is its experiments site (f13).
- Reporter: Peter D'Abrosca, Fox News Digital, Oct 31, 2026 (f01).
- Context: Barna Group (Daniel Copeland, VP of research), with Gloo as research partner (f26, f27, f29).

## 4. Why it matters
- Barna's Oct 22 data asked 10 crisis scenarios. For suicide or self-harm, 94% of pastors and 63% of practicing Christians want AI to connect the person to a human right away (f21). The widest gap is spiritual crisis, "such as a person who no longer knows what they believe": 71% of pastors versus 32% of practicing Christians, and 23% of practicing Christians say AI can just continue (f22, f23). A theology bot is exactly where spiritual-crisis conversations will land.
- Pastors themselves are wary. Only 10% feel positive about AI doing spiritual counseling, and 29% about AI interpreting scripture (f31). 94% say churches need AI guidelines, but 79% of churches have none (f30). A ministry publishing explicit guardrails is an example of the kind of policy most churches lack.
- Samples: 1,514 US adults (683 practicing Christians) in Nov 2025, and 442 Protestant pastors in Dec 2025 (f28). The margins of error are on the Barna page.

## 5. What's contested / counterpoint
- **Strongest counterpoint, from Barna and not from Ligonier:** "The human handoff only works if there's someone to hand off to" (f26). Barna also says "The survey did not define who the human helper would be or how an AI handoff would happen" (f24). Ligonier has not said publicly who receives the handoff.
- **Referral is not connection.** Chatbots usually give a hotline number, and "the next step is left to the person" (f25). A 2025 RAND-led study in *Psychiatric Services*, which HealthDay reported on and Barna cites, found ChatGPT, Claude and Gemini "inconsistent in answering intermediate-risk questions about suicide" (f43). It says nothing about Ligonier's tool.
- **Authority and single-tradition framing.** This critique comes from Bible Society research on *other* Bible chatbots, presented at a Cambridge conference in January 2026 and reported by Christian Today. Those bots "regularly framed one interpretive approach as definitive". Dr Jonas Kurlberg adds that AI answers "are often assumed to be neutral or factual" (f40, f41). A single-ministry library is open about its tradition, which is arguably a strength. But answers still come back with confident, instant authority. Dr Zoltán Schwáb asks whether "wrestling with the biblical text is often more important than receiving the answer" (f42). Don't claim Bible Society tested Ligonier. It did not.
- **No independent evaluation.** I found no third-party review or test of Ask Ligonier. Every guardrail claim comes from Ligonier via Fox. App Store user reviews from October 2026 complain about the Grow app's navigation and stability, not the AI (f19). Hacker News had nothing (per candidates-faith.json), and the Reddit search turned up nothing substantive.

## 6. What's next
- The tool is still "in-development" beta, and Ligonier invites feedback inside the chat (f15). No date for wider access was found.
- Open questions to flag rather than answer: who staffs the human handoff, the underlying model, data and privacy handling, and whether access will widen beyond Ministry Partners.

## Key numbers
- 50 years of teaching, 800+ teachers, tens of thousands of content pieces (Larson/Fox; f04, f05)
- Grow 12.0.1 with Ask Ligonier for Ministry Partners: 2026-09-17 (f16). 30-day free trial (f18).
- Barna handoff (Oct 22): 94/63 for suicide; 71/32 for spiritual crisis; 23% of practicing Christians say no handoff needed (f21, f22)
- Barna guidelines (Oct 6): 94% say needed, 79% have none, 10% positive on AI spiritual counseling (f30, f31)

## Quotable lines (1–3)
1. "any time that somebody tries to push it beyond the borders, we're going to deflect or defer to a real human." (Chris Larson, Fox News) https://www.foxnews.com/politics/christian-group-touts-ethical-tech-features-concerns-out-of-control-ai-tools-persist
2. "We don't want it to take the place of a pastor or a local church elder or even a parent." (Larson, same URL)
3. "The human handoff only works if there's someone to hand off to." (Daniel Copeland, Barna) https://www.barna.com/research/ai-hand-off-to-human-crisis/

## Also in this thread
- **Barna, Oct 26: who teens turn to for advice.** Survey of 1,500 teens ages 13–18 (Feb 2026, with Christ In Youth). Teens are most comfortable asking mom (84%) and dad (78%), with AI at 35% (f32, f34). Watch-out: Faith-Activated teens are *more* trusting of AI. 46% strongly agree it is a safe place for questions they wouldn't ask out loud, versus 28% of all teens (f33). Youth pastor Richard Hamilton: "a trusted adult, not an algorithm" (f35). This links well to the feature, since the most devout teens are the most likely users of a theology bot. https://www.barna.com/research/who-teens-turn-to-for-advice/
- **Elah Ring S1 (HackerNoon, Oct 26).** The team behind the Bible app Blessed (10M+ users, self-reported) built a screen-free ring that senses stress and nudges you with a light and vibration. It pairs with an app companion, "FaithMate," which the company says "is not a replacement for a pastor" and is not a medical or emergency device (f36–f38). **Caveat: this is a paid release under HackerNoon's Business Blogging Program (f39). Treat it as a company statement. No independent coverage was found, and price and availability were not stated.** https://hackernoon.com/why-we-built-a-screen-free-smart-ring-after-reaching-10m-users-with-a-bible-app

## Unverified / gaps
- The model, the architecture ("trained on" versus retrieval), and the data/privacy policy for Ask Ligonier.
- Who receives the "real human" handoff, and whether the 2018 human chat team still operates.
- No launch date or general-availability plan.
- No independent test, review or expert reaction specific to Ask Ligonier. No HN or Reddit discussion found.
- RNS's 2018 article was 403. The 2018 human-chat launch is sourced to the ECPA Rush to Press release instead (f20).
- f43 came from WebFetch's summary of HealthDay, not from the paper itself.
