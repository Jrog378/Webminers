# Monthly audit: 2026-11 (run 2026-11-01)

Eight issues were at least 14 days old and were audited (4 digest, 4 faith). Totals: **2 corrections, 7 updates, 4 SEO changes, 3 links fixed.** Newer issues (Oct 21 onward) were not yet eligible.

## Issues audited

| Issue | Corrections | Updates | Claim status | Dead/moved links fixed | SEO changes |
|---|---|---|---|---|---|
| digest 2026-09-30 one-word answers | 2 | 2 | preprint (unchanged) | 0 | description |
| digest 2026-10-03 Gemini 4 Argon | 0 | 3 | preprint (unchanged) | 2 | none |
| digest 2026-10-07 Mistral Large 4 | 0 | 2 | preprint (unchanged) | 0 | title |
| digest 2026-10-10 Gemini agent | 0 | 0 | preprint (unchanged) | 0 | description |
| faith 2026-09-30 Kairos | 0 | 0 | n/a | 0 | none |
| faith 2026-10-04 worship song theology | 0 | 0 | n/a | 0 | none |
| faith 2026-10-11 Bible app searches | 0 | 0 | n/a | 1 (moved URL) | none |
| faith 2026-10-18 AI sings the Bible | 0 | 0 | n/a | 0 | description |

Per-issue detail is in the JSON files in this folder.

## Corrections (read first)

1. **2026-09-30 digest, news section.** Old: "whose company NVIDIA bought for $12.9 billion earlier this month". New: "whose company NVIDIA agreed to buy for $12.9 billion earlier this month" with new source 21. Reason: the deal is agreed, not closed; expected to close in the first half of 2027. Source: https://www.adweek.com/dealroom/nvidia-confirms-purchase-of-hugging-face-for-nearly-13-billion/
2. **2026-09-30 digest, invention section.** Old: runs locally and was trained on one workstation GPU with "no closed-model output in the training data". New: runs locally, and the base models' synthetic training data "was written by an open model," the README says, though "some public data sets in the mix contain text their authors generated with closed models". Reason: the quoted line was true for v1.1 but the current README no longer says it; the one-GPU clause was dropped because the README no longer states it. Source: https://github.com/firelex/jeff

## Updates added (frontmatter `updates`)

- 09-30 digest: Jeff v1.2 removed train/test overlap (0.8B score 79.1 to 78.7; outside reproduction tested v1.1). Von repo now archived.
- 10-03 digest: Argon opened to developers and the Gemini app on Oct 13. Vals now ranks Argon 4th (69.24%); Gemini 4 Carbon leads CWE-bench. Stillwet rebuilt its site.
- 10-07 digest: Mistral released Large 4 weights (launch page now shows 52B active, $0.70/$2.10 pricing, 41% Terminal-Bench 4.0 vs 28% preview). RealCompanion preprint v3 dropped the 98% re-identification sentence without explanation.

## SEO changes (all with stated reason in the audit JSON)

- 09-30 digest description: "agent safety platform" to "watchdog for rogue AI agents" (wording used by coverage).
- 10-07 digest title: now "Mistral Large 4: Claims vs Benchmarks | Eureka Reports Oct 7" (adds the run's primary keyword, 60 chars).
- 10-10 digest description: leads with coworker-agent email, labels the study a preprint.
- 10-18 faith description: restores the "say" attribution, adds "Bible-in-song apps".

## SEO methods: recommended changes

Caution: the web search tool returned mostly secondary SEO blogs this month, and some looked machine-generated. Nothing below is verified against Google's own pages. Confirm on the primary page before acting.

1. **Verify the Sept 2026 spam update fallout. Priority: medium.** Coverage (Search Engine Roundtable, https://www.seroundtable.com/google-september-2026-spam-update-42163.html) says it began Sept 24 and finished around Oct 4-6. Check Search Console for the Oct 3-10 issues. No file change; the auditor-added hedges and attribution fit the "scaled content" risk, but see the item below on AI authorship disclosure.
2. **Add AI-search crawler rules to robots.txt. Priority: medium.** `public/robots.txt` currently has only `User-agent: *` and the sitemap line. The Oct 31 issue is itself about AI training opt-out tokens. Decide deliberately which of GPTBot, OAI-SearchBot, PerplexityBot and Google-Extended to allow, since allowing search-type bots affects AI citations. Files: `public/robots.txt`. Needs Justin's judgment.
3. **Keep NewsArticle schema; do not rely on FAQ markup. Priority: low.** Reports (https://www.techwyse.com/news/ai-search/google-faq-rich-results-deprecated-2026, https://ppc.land/google-kills-faq-rich-results-what-seos-saw-coming-since-2019/) say Google retired the FAQ rich result in May 2026 and is removing Rich Results Test and API support through August. The site does not use FAQPage markup (`src/pages/eureka/[slug].js` emits NewsArticle only), so no change; keep it that way. Verify against Google's FAQ documentation.
4. **AI citation behavior. Priority: low.** Vendor posts claim roughly 70% of AI Overview citations churn over 2-3 months and that ChatGPT citations lean on Bing-ranked pages. These are unverified vendor claims. If true, ensuring Bing indexing (Bing Webmaster Tools, submit `public/sitemap.xml`) helps. Files: none, a Search Console/Bing setup task.
5. **Faith issues schema parity. Priority: low.** Confirm `src/components/faith-issue.js` emits the same `citation`, `dateModified` and series fields as `src/pages/eureka/[slug].js`; I only grepped it and did not do a field-by-field diff.

## Needs Justin's judgment / unverified

- **dateModified format:** two auditors wrote date-only values. I normalized all three edited digests to `2026-11-01T09:00:00-05:00` (an arbitrary time, to match the full-timestamp format used elsewhere). Change if you prefer another time. Faith 10-11 used `2026-11-01T06:00:00-05:00`.
- **10-03 digest, source 15 (Stillwet homepage):** still loads but no longer contains the quoted text (75 paintings etc.). Archive.org was unreachable; a Wayback snapshot should be added. The update entry explains the change to readers.
- **10-03 digest, source 9:** Bloomberg original is blocked to us; the replacement is The Star's syndicated copy, which credits Bloomberg and contains the three quoted passages.
- **10-07 digest:** the body still carries the preview benchmark and pricing figures; the update explains the change. Consider a rewrite. Also, RealCompanion's dataset page says a person reviews requests while the Hugging Face setting shows automatic approval (logged in the JSON, not published).
- **GitHub links** could not be opened directly from this environment (proxy block); several were checked through WebFetch only. A few specific files (Jeff LICENSE/v1.1 release, SafeAct repo, Big Arrow files) were not individually verified.
- RNS and Newsfile (faith 10-11) block bots; left as is, supported by secondary coverage.
- OpenAlex lookups were skipped (rate limit); Crossref found no published versions.
- **Tooling:** `npm ci` fails because `package-lock.json` is out of sync (missing `yaml@2.9.1`) and Node is 22 while `package.json` requires 24.x. I used `npm install --no-save` instead, left the lockfile untouched, and `npm run build` succeeded. `scripts/validate-issues.js` could not run before the install (missing `gray-matter`); I did not re-run it after. Fix the lockfile.
