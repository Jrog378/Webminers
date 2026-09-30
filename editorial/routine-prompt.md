You are running the scheduled Webminers Eureka Reports pipeline in a fresh cloud checkout of github.com/Jrog378/Webminers. You start with no other context; everything you need is in this repo.

## 0. Date gate
Run `TZ=America/New_York date '+%F %A %H:%M'`. If the date is after 2026-12-31, stop immediately: do nothing, commit nothing, and reply "Past end date, skipped."

## 1. Issue date and coverage window
This runs on Tuesday or Friday evening US Eastern. The issue date is tomorrow in America/New_York:
- Tuesday run → Wednesday issue; coverage window = the previous Saturday through Tuesday.
- Friday run → Saturday issue; coverage window = Wednesday through Friday.
If `content/digest/` already has an issue for that date, stop and reply "Issue already exists."
Set `runDir = digest-runs/<issue-date>/` and create it.

## 2. Read the setup
Read `.claude/agents/README.md` (pipeline order and file handoffs), every `.claude/agents/digest-*.md`, `editorial/style-guide.md` and `content/digest/_template.md`. The plan behind them is summarized in the style guide; follow the style guide over anything else.

## 3. Run the pipeline
Run each step as a subagent (Agent tool) that follows its definition file, passing it `section`, `window` and `runDir`. Run the three scouts in parallel, then the topic selector, then the three deep divers in parallel, then the format editor, writer, fact-checker, SEO and editor. Always pass forward the caveats each agent reports (blocked sources, unverified items, attributions) to the next agent that needs them.

Loops:
- Fact-check: send every `fix`/`cut` item back to the writer, then re-run the fact-checker on the changed sentences. At most 2 rounds. Anything still failing is cut. If a whole section can't be verified, drop that section.
- Editor: send required fixes back to the writer, at most 2 rounds.
- If fewer than 2 sections survive, or the editor still fails after 2 rounds: do NOT publish. Write `runDir/run.json` with `status: "held"` and the reasons, commit only `runDir`, push it to a new branch `digest/<issue-date>-held`, and stop.

## 4. Publish
- Copy the final draft to `content/digest/<slug>.md` (slug from `seo.json`, format `YYYY-MM-DD-<keywords>`).
- Frontmatter must have `reviewStatus: pending`, `reviewedOn: null`, `editorsNote: null`, and `datePublished`/`dateModified` = issue date 07:00 America/New_York with the correct UTC offset (-04:00 before Nov 1, 2026; -05:00 from Nov 1).
- Run `digest-image-finder` (it can run alongside fact-checking once the draft exists; give it the final slug once SEO has set it, or move the file to `public/images/eureka/<slug>/` after). Copy `image.json`'s `hero` into frontmatter `hero`, and append `{date, slug, source: credit.sourceName, sourceUrl, license}` to `content/_images.json` (create if missing). If no suitable image is found, leave `hero: null` — never use an image without a verified commercial-use license.
- Write `runDir/REVIEW.md`, a checklist for Justin: the issue's live URL (`https://webminers.dev/eureka/<slug>`); the hero image with direct links to its source page (`credit.sourceUrl`) and license (`credit.licenseUrl`), its library, and why it was chosen; every entry in `sources` as a numbered link list; fact-check pass/fix/cut counts and any items that were cut; and the approval steps (write `editorsNote`, set `reviewStatus: approved` and `reviewedOn`).
- Set frontmatter `models` to the AI models that actually ran in this session and what each did: use your own model and each subagent's model as actually used (group roles by model; display names like "Claude Opus 5.5", "Claude Sonnet 5.5"). Never list a model that didn't run.
- Append each section's topic to `content/digest/_topics.json` (create it if missing): `{date, section, title, primaryUrl, slug}`.
- Write `runDir/run.json`: status, issue date, window, sources tried and failed, topics, formats, fact-check counts, editor result.

## 5. Verify and push
- Run `npm ci` then `npm run build`. The build must succeed. If it fails because of the new issue file, fix only that file and rebuild; if it fails for any other reason, push to a branch `digest/<issue-date>` instead of main and stop.
- Commit only `content/digest/`, `content/_images.json`, `public/images/eureka/`, `public/sitemap.xml` and `runDir`, with the message `Eureka Reports draft for <issue-date> (needs review)`.
- Push to `main`. If pushing to main is rejected, push the same commit to a branch `digest/<issue-date>` instead.

## Hard rules
- Never fabricate a fact, number, name, quote, date or URL. Open sources only, no logins.
- Never write, draft into the page, or sign an Editor's note. Justin writes it when he reviews.
- Never modify site code, agent definitions, the style guide, or any existing issue.
- Reply at the end with: issue date, the three topics, fact-check pass/fix/cut counts, editor result, and where you pushed.
