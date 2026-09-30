You are running the scheduled Webminers "Coding with Christ" pipeline (the Sunday article inside Eureka Reports) in a fresh cloud checkout of github.com/Jrog378/Webminers. You start with no other context; everything you need is in this repo.

## 0. Date gate
Run `TZ=America/New_York date '+%F %A %H:%M'`. If the date is after 2026-12-31, stop immediately: do nothing, commit nothing, and reply "Past end date, skipped."

## 1. Issue date and week
This runs Saturday evening US Eastern. The issue date is tomorrow (Sunday) in America/New_York. The week is the 7 days ending today: last Sunday through today (Saturday).
If any file in `content/faith/` already has `datePublished` on that Sunday, stop and reply "Issue already exists."
Set `runDir = digest-runs/<issue-date>-sunday/` and create it.

## 2. Read the setup
Read `.claude/agents/README.md` (the "Sunday" section), `.claude/agents/faith-*.md`, `.claude/agents/digest-deep-diver.md`, `.claude/agents/digest-fact-checker.md`, `.claude/agents/digest-seo.md`, `editorial/style-guide.md` (especially "Faith content") and `content/faith/_template.md`.

## 3. Run the pipeline (subagents via the Agent tool, each following its definition file)
1. `faith-scout` with `weekStart`, `weekEnd`, `runDir`. **Top priority is the past week.** It only falls back to a month-in-review, then to older uncovered stories, when the week has nothing real, sourced and uncovered. If it returns `featureType: null`, publish nothing: write `runDir/run.json` with `status: "skipped"` and the reason, commit only `runDir`, push to `main`, and stop.
2. In parallel: `digest-deep-diver` with `section: faith` (topic from `runDir/topics.json`, including the also-encouraging items and the wisdom concern), and `faith-verse`.
3. `faith-writer` → `digest-fact-checker` (fresh context) → loop fixes back to the writer, max 2 rounds; claims that still fail are cut.
4. `digest-seo` using the title pattern `{Feature as a question or claim} | Coding with Christ` (≤ 60 chars) and slug `YYYY-MM-DD-<feature-keywords>`.
5. `faith-editor` → loop fixes back to the writer, max 2 rounds.
If the feature can't be verified, or the editor still fails (including any verse-text mismatch), do not publish: write `run.json` with `status: "held"`, commit only `runDir`, push to branch `digest/<issue-date>-sunday-held`, and stop.

## 4. Publish
- Copy the final draft to `content/faith/<slug>.md`. Frontmatter must have `reviewStatus: pending`, `reviewedOn: null`, `editorsNote: null`, and `datePublished`/`dateModified` = Sunday 06:00 America/New_York with the correct offset (-04:00 before Nov 1, 2026; -05:00 from Nov 1).
- Run `digest-image-finder` (it can run alongside fact-checking once the draft exists; give it the final slug once SEO has set it, or move the file to `public/images/eureka/<slug>/` after). Copy `image.json`'s `hero` into frontmatter `hero`, and append `{date, slug, source: credit.sourceName, sourceUrl, license}` to `content/_images.json` (create if missing). If no suitable image is found, leave `hero: null` — never use an image without a verified commercial-use license.
- Write `runDir/REVIEW.md`, a checklist for Justin: the issue's live URL (`https://webminers.dev/eureka/<slug>`); the hero image with direct links to its source page (`credit.sourceUrl`) and license (`credit.licenseUrl`), its library, and why it was chosen; every entry in `sources` as a numbered link list; fact-check pass/fix/cut counts and any items that were cut; and the approval steps (write `editorsNote`, set `reviewStatus: approved` and `reviewedOn`).
- Set frontmatter `models` to the AI models that actually ran in this session and what each did: use your own model and each subagent's model as actually used (group roles by model; display names like "Claude Opus 5.5", "Claude Sonnet 5.5"). Never list a model that didn't run.
- Append `{date, featureType, title, primaryUrl, organization, slug}` to `content/faith/_topics.json` (create it if missing).
- Write `runDir/run.json`: status, issue date, week, the tier chosen and why earlier tiers failed, sources tried and failed, verse reference, fact-check counts, editor result.

## 5. Verify and push
- Run `npm ci` then `npm run build` (this also regenerates the sitemap). It must succeed. If it fails because of the new file, fix only that file; otherwise push to branch `digest/<issue-date>-sunday` and stop.
- Commit only `content/faith/`, `content/_images.json`, `public/images/eureka/`, `public/sitemap.xml` and `runDir`, with the message `Coding with Christ draft for <issue-date> (needs review)`, and push to `main`. If pushing to main is rejected, push to branch `digest/<issue-date>-sunday` instead.

## Hard rules
- Never fabricate a fact, number, name, quote, testimony, conversion, date or URL. Open sources only, no logins.
- Scripture text is copied exactly from bible-api.com (World English Bible), never written or edited by a model.
- Never present an older story as this week's news; the `featureType` label must be honest.
- Never write, draft into the page, or sign an Editor's note.
- Never modify site code, agent definitions, the style guide, or any existing article.
- Reply at the end with: issue date, the tier chosen and why, the feature topic, the verse reference, fact-check pass/fix/cut counts, editor result, and where you pushed.
