# Eureka Reports agents

Pipeline for the Wednesday/Saturday Eureka Reports (see `~/Claude/Code/Planning/ai-digest-plan.md`). Every run works in `digest-runs/<YYYY-MM-DD>/`.

| Step | Agent | Reads | Writes |
| --- | --- | --- | --- |
| 1 | `digest-scout` ×3 (research, news, invention), parallel | sources, `_topics.json` | `candidates-<section>.json` |
| 2 | `digest-topic-selector` | candidates | `topics.json` |
| 3 | `digest-deep-diver` ×3, parallel | topics | `dossier-<section>.md`, `claims-<section>.json` |
| 4 | `digest-format-editor` | topics, dossiers, recent issues | `format.json` |
| 5 | `digest-writer` | everything above + style guide | `draft.md`, `claim-map.json` |
| 6 | `digest-fact-checker` (fresh context) | draft, live URLs | `factcheck.json` → failures go back to the writer |
| 7 | `digest-seo` | draft | edits draft, `seo.json` |
| 8 | `digest-editor` | draft, reports | `editor-report.md` → failures go back to the writer |
| 8b | `digest-image-finder` (after the writer; alongside fact-check) | draft, topics, `content/_images.json` | `image.json`, `public/images/eureka/<slug>/<descriptive-name>.webp` |
| 9 | Publisher (script / main session) | final draft | `content/digest/<slug>.md`, updates `_topics.json`, `run.json` |

Drafts always land with `reviewStatus: pending` and `editorsNote: null`: the page shows a draft banner and an Editor's-note placeholder, and is `noindex`, until Justin reviews it, writes the note and sets `reviewStatus: approved`.

## Sunday: Coding with Christ (published inside Eureka Reports)

Runs Saturday evening for the Sunday 06:00 ET article. Works in `digest-runs/<YYYY-MM-DD>-sunday/`; publishes to `content/faith/<slug>.md` (served at `/eureka/<slug>`).

| Step | Agent | Writes |
| --- | --- | --- |
| 1 | `faith-scout` (tiered lookback: this week → month in review → further back → nothing) | `candidates-faith.json`, `topics.json` |
| 2 | `digest-deep-diver` with `section: faith` | `dossier-faith.md`, `claims-faith.json` |
| 3 | `faith-verse` | `verse.json` |
| 4 | `faith-writer` | `draft.md`, `claim-map.json` |
| 5 | `digest-fact-checker` (fresh context) | `factcheck.json` → back to writer |
| 6 | `digest-seo` with title pattern `{Feature} \| Coding with Christ` | `seo.json` |
| 6b | `digest-image-finder` | `image.json`, `public/images/eureka/<slug>/<descriptive-name>.webp` |
| 7 | `faith-editor` | `editor-report.md` → back to writer |
| 8 | Publisher | `content/faith/<slug>.md`, `content/faith/_topics.json`, `run.json` |

If the scout finds nothing in any tier, the run publishes nothing that week.

## Monthly: accuracy and SEO audit

Runs on the 1st of each month (`editorial/monthly-audit-prompt.md`). One `digest-auditor` per issue that's at least 14 days old re-checks claims against newer publications, adds dated `updates` (corrections or updates, shown under "Updates and corrections" on the page), moves claim status on evidence, fixes dead links, and tunes titles/descriptions when search data supports it. New SEO methods are researched and written up as recommendations in `audits/<YYYY-MM>/summary.md`; agents, the style guide and site code are never edited by the audit.
