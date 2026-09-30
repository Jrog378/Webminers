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
| 9 | Publisher (script / main session) | final draft | `content/digest/<slug>.md`, updates `_topics.json`, `run.json` |

Drafts always land with `reviewStatus: pending` and `editorsNote: null`: the page shows a draft banner and an Editor's-note placeholder, and is `noindex`, until Justin reviews it, writes the note and sets `reviewStatus: approved`.
