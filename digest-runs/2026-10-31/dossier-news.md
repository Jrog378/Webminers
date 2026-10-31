# Dossier: news — One robots.txt line to opt out of AI training (`__usage_ai-training`)

Window: Wed Oct 28 – Fri Oct 30, 2026. All announcements dated Fri Oct 30, 2026.
Framing per brief: a story about how the mechanism works (what the signal is, who honors it, what it doesn't cover). No political, legal, or geographic angle.

## Source access notes (read first)
- **OpenAI primary post (https://openai.com/index/helping-websites-express-ai-training-preferences/) could not be read.** Both WebFetch and curl got HTTP 403. A reader-proxy and Wayback workaround was blocked by the permission system (classified as bot-check circumvention), so I did not retry. OpenAI's position here comes only from secondary sources (daily.dev summary, Vanessa Fox, AI Weekly). The writer should attribute it as "OpenAI said, according to..." or have someone confirm it directly.
- The Verge article was not fetchable.
- Read in full: the IETF draft text (ietf.org archive .txt), the Google Search Central post (raw HTML), the Bing blog post (via WebFetch), the Google common-crawlers doc, the IETF mailing-list announcement, SE Roundtable (x2), and Vanessa Fox's reference guide.

## 1. What
- An IETF Internet-Draft, `draft-kelley-aipref-training-preference-signal-00` ("Machine-Readable Training Preference Signal"), dated 30 Oct 2026. It defines one shared **policy token**, `__usage_ai-training`, which goes in the User-Agent line of an ordinary robots.txt group.
- Example from the draft:
  ```
  User-Agent: __usage_ai-training
  Disallow: /
  Allow: /press-kit/
  ```
  The draft reads this as a preference *against* AI training for the whole site and *in favor* of it under /press-kit/.
- It adds "no new directive names and no new grammar." Existing robots.txt parsers treat it like a group for an unknown bot and ignore it.
- Status: individual draft, not a Working Group document. Datatracker says it is "not endorsed by the IETF" and has "no formal standing." Discussion takes place on the AIPREF WG list.

## 2. How (mechanism details)
- **Meaning of "AI training":** taken from the AIPREF WG vocabulary draft (draft-ietf-aipref-vocab-08): "Using an asset to modify the learned parameters of a generative AI model." Training of models used only for non-generative tasks (classification, ranking, scoring) is excluded.
- **Opt-in by naming:** `User-Agent: *` groups "MUST NOT be interpreted as matching the policy token." If the token never appears, "no preference has been expressed." Existing robots.txt files therefore say nothing about training until an owner adds the line.
- **Per-path:** standard RFC 9309 longest-match Allow/Disallow, so owners can opt in or out by section.
- **Not a crawl block:** "This policy token is not a directive for crawling behavior." Rules for crawler tokens (GPTBot, Googlebot, etc.) keep their old meaning. The two kinds of rule are "independent and orthogonal."
- **Precedence:** "Specific expressions SHOULD take precedence over general ones." Vendors may treat their own tokens (Google-Extended, etc.) as more specific. "Private agreements MAY override preferences expressed via this mechanism."
- **Timestamp:** the preference that applies is the robots.txt "in effect when the asset was retrieved."

## 3. Who (honors it, and when)
| Party | Commitment | Timing | Source quality |
|---|---|---|---|
| Anthropic | Draft author (Kevin Kelley, Anthropic). "Anthropic has already started implementing support for this draft." | Started; no date | Primary (IETF list) |
| Google | Will treat a token opt-out as a Google-Extended disallow when Google-Extended is not named explicitly | "in 2027" (blog) / "early 2027" (crawler docs) | Primary |
| Microsoft Bing | "Starting February 1, 2027, Microsoft will honor the new preferences as it crawls." | Feb 1, 2027 | Primary |
| OpenAI | Will honor it; existing crawler controls remain | "in the coming months" | **Secondary only** (post 403) |

- Others named in the draft's acknowledgments as contributors to the WG discussion (affiliations listed "for identification only"): Meta, Amazon Web Services, Cloudflare, Common Crawl, Internet Archive, Creative Commons, EFF, BBC, News Corp, Financial Times, GitHub, Adobe, Bright Data, and others. **Being thanked is not a commitment to honor the token.** Do not say Meta or Amazon support it.

## 4. Why it matters
- Until now, opting out meant listing every vendor's token separately (GPTBot, Google-Extended, ClaudeBot, Applebot-Extended...). Google: owners can now "express their AI training preferences across multiple AI providers in a single step."
- It separates *training* from *search and answers*. Bing: "Training and grounding are independent preferences," and the preferences "do not change eligibility for traditional Bing search results." Google: Google-Extended "does not impact a site's inclusion in Google Search" and is not a ranking signal.

## 5. What's contested / what it does NOT cover
- **Voluntary, no enforcement.** It is a robots.txt preference. Scrapers that don't participate can ignore it, and the draft adds no security beyond RFC 9309 ("The security considerations of Section 3 of [ROBOTS] apply"). AI Weekly's editor note: "no enforcement teeth."
- **Training only.** Vanessa Fox: it "says nothing about web search, AI answers, or user-triggered requests." Nate Hake (Travel Lemming; named in the draft's acknowledgments) says the draft "basically exempts the preferences from applying to anything a user does" (via SE Roundtable). **This is the strongest counterpoint from outside the authors.**
- **Not finished.** Hake: "it's not actually done at the ietf level -- and some significant areas of dispute remain." The draft itself says it tracks a vocabulary that is still evolving.
- **Not retroactive.** It only affects future collection. Vanessa Fox notes that content already trained on stays in models. AI Weekly says the same, attributing it loosely.
- **Side effect at Google.** Under the token, Google treats an opt-out as a Google-Extended disallow, which also removes the site from Gemini grounding. Google: "Websites that specifically allow Google-Extended are eligible to appear in responses and receive clicks via grounding in Gemini Apps." Vanessa Fox flags this as a cost.
- **Not live yet.** As of Oct 30, no major consumer honors it in production except Anthropic, which has "started implementing." Fox advises owners who want training blocked now to use the existing per-vendor tokens.
- **Excluded per brief:** the Google post links the proposal to a regulatory code of practice and mentions "regulators." Leave this out of the copy.

## 6. What's next
- Microsoft enforcement begins Feb 1, 2027. Bing also asks sites on legacy NoArchive/NoCache directives to set the new preferences by Mar 1, 2027.
- Google: "We aim to support this new control along with other AI providers in 2027."
- Kelley plans a PR against the WG's attach draft (draft-ietf-aipref-attach), so the token could move into WG documents. The current -00 draft expires 3 May 2027.

## Key numbers
- 1 token; 0 new grammar; 4 companies committed (Anthropic, Google, Microsoft from primary sources; OpenAI from secondary); Bing date Feb 1, 2027; draft -00 dated Oct 30, 2026, expires May 3, 2027.

## Quotable lines
1. "This policy token is not a directive for crawling behavior." (IETF draft, https://www.ietf.org/archive/id/draft-kelley-aipref-training-preference-signal-00.txt)
2. "Training and grounding are independent preferences." (Microsoft Bing, https://blogs.bing.com/search/2026/10/your-content-your-choice-clearer-preferences-for-training-and-grounding/)
3. The draft "basically exempts the preferences from applying to anything a user does." (Nate Hake, via https://www.seroundtable.com/google-ai-training-control-42430.html)

## Also in this thread
- Bing's separate *grounding* controls (AI Grounding / Limited Grounding), which have their own timeline. Useful as a sidebar on "training vs answers."
- The 2026-10-24 issue item on OpenAI no longer training on the live internet. Contrast it: that was one lab's own policy, this is a shared signal.
- The AIPREF vocabulary draft (draft-ietf-aipref-vocab-08) as background for future tokens beyond training.

## Unverified
- Every detail of OpenAI's own post, including timing ("coming months") and the claim that "existing crawler controls stay in effect." Seen only via daily.dev, Vanessa Fox, and AI Weekly.
- AI Weekly's line calling the token "a coordination mechanism rather than a security control." Its attribution to OpenAI is unclear.
- Nate Hake quotes come via SE Roundtable from an X/forum discussion. The original post was not read.
