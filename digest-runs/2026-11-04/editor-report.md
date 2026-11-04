FAIL

# Editor report: 2026-11-04 draft

One required fix: a banned word. Everything else passes. Once the word is replaced, the draft is ready for Justin.

## Required fixes

1. **Banned word "harness"** (Cool Invention, final Q&A answer, line 191):
   > "They say they are now building a benchmark and harness for the approach [[11]](#source-11)."

   "harness" is on the banned-words list with no exception for the noun. Here it means an evaluation harness, which is not the "harness the power of" tell, but the rule says the editor rejects any draft containing the word. Suggested replacement: "They say they are now building a benchmark and testing setup for the approach [[11]](#source-11)." Use different wording if source 11 needs it, as long as the word is gone.

## Checks

| # | Check | Result |
|---|---|---|
| 1 | Banned words | 1 hit: "harness" (see fix 1). No delve, tapestry, landscape, realm, testament to, game-changer, revolutionize, unlock, seamless, robust, cutting-edge, navigate or fast-paced. No "not just X, it's Y". No rhetorical-question transitions; the question H2s and Q&A prompts are the chosen format. |
| 1 | Em dashes | 0 (max 2). "Fiat–Shamir" and the `coverage` range use en dashes, which is correct. |
| 2 | Reading level | Heuristic Flesch-Kincaid estimates: News ~7.7, Research ~7.5, Invention ~7.3. The heuristic undercounts syllables in numbers and model names, so the real grade is probably about 8–9, inside the target. Average sentence length: 14.1 / 15.7 / 16.1 words. The closing section averages ~28 words over 2 sentences (see advisories). |
| 3 | Section lengths | News ~652 / 550 (+19%), Research ~678 / 600 (+13%), Invention ~369 / 350 (+5%). All within ±25%. |
| 3 | Formats | Match format.json and frontmatter `formats`: news = claim-vs-evidence (5-row two-column table, then analysis), research = by-the-numbers (6 bolded figures), invention = qa (5 bold questions). No shared formats, no explainer, and the combination is not among the last 6 issues. Section order (news, research, invention) and question headline style match. |
| 3 | H2s | All specific. Closing "Knowing what's inside the model" links the two stories for a real reason and runs 2 sentences. |
| 4 | Frontmatter | Parses with gray-matter (installed in the scratchpad because the repo has no node_modules). `reviewStatus: pending`, `editorsNote: null`. `datePublished`/`dateModified` are `2026-11-04T07:00:00-05:00` (ISO with offset). 16 sources; body citations run source-1 to source-16 in order of first use, every `[[n]](#source-n)` pairs n with n, no gaps, no orphans. |
| 5 | Fact-check | factcheck.json: 64 checked, 48 pass, 16 fix. All 16 are confirmed applied in the draft and re-verified in factcheck-round2.json. Round 2's one fix (single quotes in source 14's title) is applied. No unresolved fix/cut items. |
| 6 | Non-political / no geography | Pass. No politicians, officials, policy, legislation, elections, protests or conflict. No countries, regions, cities or national framing. "Stanford, Oxford and MIT", "MIT CSAIL" and "IEEE Symposium on Security and Privacy" are institutional credits, which the rule allows. |
| 7 | `models` | **Required. The publisher must set it**: `scripts/validate-issues.js` fails the build without it. The draft holds template placeholder values (Claude Opus 5.5; Claude Sonnet 5.5). The publisher must replace them with the models that actually ran. `hero: null` is expected and will also be set by the publisher. |
| 8 | Editor's note | None written by an agent. `editorsNote: null`. The italic disclosure line in Research is a conflict-of-interest disclosure, not an Editor's note. |
| 9 | Reporter voice | No paragraph ends on a moral, and the closing does not restate the intro. Each deep dive opens with a direct answer (who, what, number, date). Preprint and blog status are labeled, and company claims are attributed. |

## Advisories (not blocking)

- Research, "45%" bullet: the last sentence, "In those cases, the model saw the trouble and still failed to act on it.", repeats the sentence before it. Consider cutting it.
- Closing section: the first sentence runs ~30 words ("A 0.016% edit was enough to change how Qwen behaves [[11]](#source-11), and the edited file can be checked by hashing the only two tensors, or blocks of weights, that changed [[13]](#source-13)."). It could be split.
- By-the-numbers spec says "one sentence of context" per figure. Several bullets (14%, 81% vs. 97%, 85%) carry 2–4 sentences. They are readable, but they stretch the format.
- News table, row 3 claim cell ("A valid proof shows the reply came from the committed model") and row 5 claim cell ("The system is checked in Lean, a proof-checking language") have no citation. Adding [[1]](#source-1) would make the attribution explicit.
- Source 12 (Qwen model card) has `date: null`. This is fine if the validator allows it.
- `sixty` item 1 is ~45 words in one sentence.
