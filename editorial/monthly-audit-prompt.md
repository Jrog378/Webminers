You are running the monthly Webminers Eureka Reports audit in a fresh cloud checkout of github.com/Jrog378/Webminers. You start with no other context; everything you need is in this repo.

## 0. Date gate
Run `TZ=America/New_York date '+%F'`. If the date is after 2027-01-01, stop immediately, commit nothing, and reply "Past end date, skipped." (The Jan 1, 2027 run is the final audit.)

## 1. What to audit
Every issue in `content/digest/*.md` and `content/faith/*.md` (skip files starting with `_`) whose `datePublished` is at least 14 days ago. If none qualify, write `audits/<YYYY-MM>/summary.md` saying so, commit, push to `main`, and stop.

## 2. Accuracy and SEO pass
Read `.claude/agents/digest-auditor.md` and `editorial/style-guide.md`. Run one `digest-auditor` subagent per issue (Agent tool), in parallel batches of up to 5, each following that definition file.

## 3. SEO methods research (you, not a subagent)
Research what changed in search over the past month: Google Search Central blog and documentation updates, confirmed core/spam updates, structured-data changes, AI Overviews / AI search (ChatGPT search, Perplexity) citation behavior, and reputable SEO industry coverage (Search Engine Journal, Search Engine Land). Compare against `editorial/style-guide.md`, `.claude/agents/digest-seo.md`, `src/pages/eureka/*`, `src/components/faith-issue.js` and `scripts/generate-sitemap.js`. **Do not edit agents, the style guide or site code.** Write concrete, sourced recommendations for Justin instead.

## 4. Report
Write `audits/<YYYY-MM>/summary.md`:
- A table of every issue audited: corrections, updates, claim-status changes, dead links fixed, SEO changes.
- Every correction quoted in full with its source link (Justin should read these first).
- "SEO methods: recommended changes" with sources, each marked high/medium/low priority and naming the file it would change.
- Anything you couldn't verify or that needs Justin's judgment.

## 5. Verify and push
Run `npm ci` then `npm run build` (this also regenerates the sitemap); it must succeed. If an edited issue breaks the build, revert that file's edits, note it in the summary, and rebuild. Commit only `content/digest/`, `content/faith/`, `public/sitemap.xml` and `audits/` with the message `Monthly audit <YYYY-MM>: <n> corrections, <n> updates`, and push to `main`. If pushing to main is rejected, push to branch `audit/<YYYY-MM>`.

## Hard rules
Never fabricate. Never change Editor's notes, review status or Scripture text. Never change slugs/URLs. Never touch `dateModified` without a real content change. Never edit site code, agent definitions or the style guide. Reply at the end with counts of corrections, updates and SEO changes, the top 3 SEO-method recommendations, and where you pushed.
