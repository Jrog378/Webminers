# Dossier: news. Meta pauses Muse chat sharing after researchers find shared conversations exposed on the open web

Claims ledger: `claims-news.json` (news-01 to news-30). Pages were read on 2026-10-21.
Framing note: following the brief, this dossier leaves out country details. The TechCrunch background figure used is the total download count (10.9M), not a country figure. Muse's regional availability is omitted.

## Sources read in full
| Source | Type | Date | URL |
|---|---|---|---|
| Claroc Research Team, "GhostShares" (the researchers' write-up) | Primary research by a vendor. Not peer-reviewed | 2026-10-18, updated 2026-10-20 | https://blog.claroc.io/ghostshares-muse-passive-dns/ |
| Ars Technica, Dan Goodin (original reporting, includes Meta's statement) | Reporting | 2026-10-20 12:33 UTC | https://arstechnica.com/security/2026/10/meta-muse-exposes-users-personal-and-business-secrets-when-they-share-conversations/ |
| The Verge, Emma Roth (corroborates, names Meta spokesperson) | Reporting | 2026-10-20 18:07 UTC | https://www.theverge.com/tech/1014627/meta-muse-ai-sharing-ai-chats |
| Meta, Muse launch post (Meta's own privacy claims) | Official | 2026-09-08 | https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/ |
| TechCrunch, Sensor Tower download data (background) | Reporting | 2026-10-20 | https://techcrunch.com/2026/10/20/metas-muse-hits-10m-u-s-downloads-in-40-days-a-milestone-reached-by-only-11-other-apps/ |
| Ars Technica, earlier Muse zero-day (context) | Reporting | 2026-09-21 | https://arstechnica.com/security/2026/09/muse-metas-extraordinarily-privileged-ai-assistant-has-a-serious-0-day/ |
| The Register, ChatGPT precedent | Reporting | 2025-08-01 | https://www.theregister.com/2025/08/01/openai_removes_chatgpt_selfdoxing_option/ |
| 9to5Mac, Grok precedent | Reporting | 2025-08-20 | https://9to5mac.com/2025/08/20/370k-grok-ai-chats-made-public-without-user-consent/ |
| Hacker News thread | Social | 2026-10-20 | https://news.ycombinator.com/item?id=50166433 |

## 1. What happened
- Muse is Meta's personal AI agent. When a user shares a conversation, Muse publishes it as a page that anyone with the link can open, with no login needed. The security firm Claroc found these links could be discovered without anyone being given them. A single passive-DNS search returned **more than 6,800** share hostnames (news-04, news-05).
- Claroc opened "a few hundred" of the pages. Most were harmless. A minority were sensitive: a home-sale budget, a to-do note with a bank-fraud alert and a partial account number, a small-business loan application, a revenue review marked for a company's CEO, a real-estate investor's performance report, a workplace's full-year staff vacation calendar, and a candidate's confidential prep notes for an executive-search call with a frontier AI lab (news-12, news-13, news-14).
- Ars asked Meta about the findings, and Meta said it was pausing the sharing feature (news-01, news-02). The Verge got the same statement from a Muse spokesperson (news-03).

## 2. How it worked (mechanism)
- Muse built each share's web address as **conversation title + random ID**, as a subdomain of the content domain `cf.metaaiusercontent.com` (news-06, news-08).
- Opening a share makes the browser look up that hostname in DNS. Passive-DNS providers record those lookups and keep them searchable. The full hostname gets logged, random ID included, so the part meant to be unguessable was effectively published (news-07).
- The title in the hostname also told anyone browsing the list what each page contained before opening it, "like a table of contents" (Claroc).
- Muse's robots.txt kept search engines away from the share pages, but that made no difference: "robots.txt governs crawling, not access" (news-10). The public scanning service urlscan.io also held 75+ saved scans of share pages (news-11).
- Ars's summary of the root cause: putting the title "in the subdomain rather than in the URL path" (news-09).
- Small inconsistency to watch for: Claroc's screenshot caption describes the user-facing share URL as `muse.ai/s/<slug>`, while content is served from the `*.cf.metaaiusercontent.com` hostnames. Ars's example hostnames are "simplified", and Claroc labels its own examples as made up. The writer should not present any example hostname as real.

## 3. Who
- **Researchers:** the Claroc Research Team. Asaf Aprozper, Claroc's co-founder and CTO, is the named contact (via Ars) (news-17).
- **Meta:** statement emailed to Ars, and to The Verge via Muse spokesperson **Tracy Clayton** (news-02, news-03).
- **Reporters:** Dan Goodin (Ars Technica) and Emma Roth (The Verge).

## 4. Why it matters
- Muse is designed to hold a lot of personal access. Meta says it can "open a browser, fill out forms, and negotiate on their behalf" (news-24), and Meta's launch post calls it "a secure, private personal AI agent" (news-23). Ars reports that Zuckerberg said it was "built from the ground up for privacy and security" (news-25).
- It is used at scale: 10.9M downloads since its September debut, per Sensor Tower data reported by TechCrunch (news-26). Keep this as background.
- This is the third version of a known failure pattern. In 2025, shared ChatGPT chats turned up in search results and OpenAI removed the option (news-28). Later in 2025, 370,000+ shared Grok chats were indexed by search engines (news-29). This time search engines played no part: the leak came from DNS, which robots.txt and "noindex" cannot stop.
- It is Muse's second security story in about a month. In September, Patrick Wardle found a zero-day that allowed account takeover, and Meta later shipped a hotfix (news-27). Ars ties the two together: "The ease in discovering share links further justifies asking if Muse is worthy of the access it requires."

## 5. What's contested / counterpoints
- **The researchers are a vendor.** Claroc sells a browser extension that flags public AI share links, and the post ends with "Book a demo" (news-20). The findings are corroborated only in the sense that Ars and The Verge relay them and Meta paused the feature. No independent party has reported reproducing the 6,800 count.
- **Meta presents this as link access working as designed.** Meta's statement says the page "can be accessed by those with the link." Meta talks about changes to "how these links can be discovered" and does not call it a vulnerability or a breach (news-02). Claroc agrees that every page was public because a user chose to share it (Claroc: "Muse did what it was asked").
- **Limited scope, and no evidence of harm.** Most pages were harmless (news-14). Claroc reports no evidence of misuse (news-15) and says its study "is not a measure of Muse's total exposure" (news-19). Claroc's search used a *commercial* passive-DNS service. The barrier to entry is low, though not zero, and urlscan.io is public.
- **Disclosure friction.** Claroc reported through the bug bounty on Oct 8. Aprozper says he got no reply through the bounty or on LinkedIn. Meta acted only after the press asked (news-16, news-17).
- **Lasting residue.** After the pause, rechecked pages no longer open, but the hostnames, *including titles*, stay in passive-DNS history (news-18). The titles alone can reveal things, for example a meeting between named parties.
- Community reaction was thin. The HN thread got 9 points and 1 comment: "I can't understand why anyone would use a 'personal agent' built by an advertising company" (news-30). Reddit could not be reached (blocked). No major independent security researchers commented, as far as I could find.

## 6. What's next
- Meta says it will "review this report and consider changes to how these links can be discovered." No timeline, and no statement on whether sharing will return or how.
- Claroc says it will "delete the stored discovery data once Meta confirms it has what it needs." It also observed new share hostnames still appearing in passive DNS before the pause ("27 on the day we last looked").
- Claroc's advice to organizations: inventory who uses Muse, treat an AI share link as an outbound transfer of data, and block `muse.ai` / `metaaiusercontent.com` on managed devices if it can't be monitored.
- Meta's launch post promises a future "Muse Confidential VM", where only the user holds the key. It is unrelated to share links but likely to come up.

## Key numbers
- 6,800+ share hostnames found with one passive-DNS query (Claroc)
- "a few hundred" opened. Six sensitive examples described by category only
- 75+ saved share-page scans on urlscan.io (Claroc)
- 40 shares rechecked on Oct 20: none opened (Claroc update)
- Timeline: launch Sep 8, 2026. Claroc's content checks Oct 7 to 8. Bug bounty report Oct 8. Write-up Oct 18. Ars story and Meta pause Oct 20.
- 10.9M downloads since the September debut (Sensor Tower via TechCrunch). Background only

## Quotable lines
1. "If you had asked us beforehand, we would have guessed that gathering these would take real effort. It took one query." (Claroc, https://blog.claroc.io/ghostshares-muse-passive-dns/)
2. "An ID only works as a secret while it stays secret, and a hostname is not a secret." (Claroc, same URL)
3. "However, we've paused this functionality while we review this report and consider changes to how these links can be discovered." (Meta, via Ars: https://arstechnica.com/security/2026/10/meta-muse-exposes-users-personal-and-business-secrets-when-they-share-conversations/)

## Strongest counterpoint (one line for the writer)
The finding comes from a vendor that sells share-link monitoring. Every exposed page was one a user had chosen to make public by link, and most were harmless, with no evidence of misuse. The real flaw is narrower than "Muse leaked chats": the titles were placed in DNS-visible hostnames, which made public-by-link pages findable by strangers, and those titles stay in DNS history even after the pause.

## Suggested "also in this thread"
- 2025 precedents: ChatGPT's "Make this chat discoverable" removal (The Register, URL above) and 370k Grok shares indexed (9to5Mac, URL above).
- Muse's September zero-day (Ars, URL above), as a pattern of trust issues for a high-privilege agent.
- Fits the issue theme: "whether a 'shared' chat stays where you meant it to."

## Unverified / gaps
- **No first-party Meta statement was published.** I searched Meta's newsroom (about.fb.com, including its post-search API, on 2026-10-21) and found no post on the pause. Meta's only statement is the emailed one quoted by Ars and The Verge. Attribute it as "Meta told Ars Technica" / "a Muse spokesperson told The Verge."
- Whether Meta responded to or paid out on Claroc's bug bounty report is unknown. Only Claroc's side ("no reply") is on record.
- The 6,800 count, the sensitive examples, and the 75+ urlscan entries are Claroc's claims only. I did not reproduce them, and deliberately did not query passive DNS or urlscan, to avoid touching exposed user content.
- Whether sharing has resumed, or with what changes, is unknown as of 2026-10-21.
- I could not fetch the original Forbes Grok report or the Fast Company ChatGPT report directly. The precedents rest on The Register and 9to5Mac.
- Reddit was unreachable. No expert commentary independent of Claroc and the two outlets was found.
- Unite.ai coverage (https://www.unite.ai/meta-suspends-muse-chat-sharing-after-researchers-find-links-in-public-dns/) is bylined "AI Research Agent" and only restates Claroc. Not used.
