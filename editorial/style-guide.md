# Eureka Reports: Style Guide

The series is **Eureka Reports** (formerly the working name "AI Digest"), served at `/eureka` on webminers.dev. Internal folders keep the old name: issues live in `content/digest/`, runs in `digest-runs/`, agents are `digest-*`.

Loaded by the writer, format editor, fact-checker, SEO and editor agents on every run. Source of truth for these rules is the plan at `~/Claude/Code/Planning/ai-digest-plan.md`.

## Write like a reporter

- Lead with the news or the finding in the first sentence. No throat-clearing ("In the ever-evolving world of AI…").
- Inverted pyramid: what happened, why it matters, how it works, what's next.
- Grade 8–10 reading level. Sentences average under 20 words. Paragraphs run 1–3 sentences.
- Be concrete: names, numbers, dates, institutions. "A 7-billion-parameter model from Stanford" beats "a new model from researchers".
- Define every technical term the first time it appears, in a clause, not a glossary.
- One analogy per deep dive, chosen with care.
- Quote people. Short quotes from papers, press releases and public posts, with links.
- Vary the rhythm. Mix short and long sentences on purpose.

## Banned AI tells (the editor rejects drafts that contain them)

- Words: delve, tapestry, landscape (as a metaphor), realm, testament to, game-changer, revolutionize, unlock, harness, seamless, robust, cutting-edge, navigate (as a metaphor), "in today's fast-paced world".
- Patterns: "It's not just X, it's Y"; triplets in every sentence; ending paragraphs with a moral; rhetorical questions as transitions; heavy em-dash use (max 2 per issue); generic conclusions that restate the intro.
- Hype without evidence. Every superlative needs a source.

## Accuracy and citations

- Every factual claim gets an inline numbered citation to a primary source: the paper (arXiv or DOI), the company's own announcement, or the original reporting outlet. Never an aggregator.
- Citation syntax in markdown: `[[n]](#source-n)`, numbered in order of first use, matching the `sources` list in frontmatter.
- Published issues are audited monthly. Corrections and material updates are added as dated entries in `updates` frontmatter (rendered as "Updates and corrections"); `dateModified` changes only with a real content change.
- Claims that fail fact-check get fixed or cut. They are never softened and kept.
- Preprints are labeled "not yet peer-reviewed". Company claims are attributed ("OpenAI says…"), not stated as fact.
- Sentiment is reported with evidence and a link ("top-voted comments on Hacker News questioned…"), never invented.
- Never fabricate a quote, number, name, date or URL. If the dossier doesn't support it, it doesn't go in.

## AI disclosure and authorship

- Byline: "Webminers AI Desk". Justin Rogers is the reviewer, never the author.
- No fake human personas.
- Every issue gets one openly licensed hero image (see `digest-image-finder`): commercial use and modification allowed, credited under the image, rotated across sources. No faces in stories about persecution or vulnerable people; no logos implying endorsement.
- Every issue lists the AI models that made it (`models` frontmatter), shown in the "How this was made" box. It records what actually ran, set by the publisher step.
- **The Editor's note is Justin's alone.** No agent writes, drafts into the page, or signs an Editor's note. Drafts ship with `editorsNote: null` and `reviewStatus: pending`, and the page shows a placeholder until Justin reviews and writes it.

## Issue structure (Eureka Reports)

Frontmatter fields: see `content/digest/_template.md`. Body is markdown with one H2 per section:

- `## Research: <specific headline>` — about 650 words
- `## News: <specific headline>` — about 550 words
- `## Cool Invention: <specific headline>` — about 350 words, never a paid placement, always an honest caveat
- `## <Closing heading>` — optional 2–3 sentence thread connecting the sections, only when a real link exists

Sections may appear in any order (lead with the strongest story) and any section may be skipped in a quiet week. H2s always name the specific topic, never a bare "Research".

Each deep dive opens with a 1–2 sentence direct answer (who, what, number, date).

## Format library (chosen per section by the format editor)

Vary the shape so issues never read alike. Each is plain markdown.

| Format | Shape | Best for |
| --- | --- | --- |
| `explainer` | Bold run-in labels: **What they found.** **How it works.** **Why it matters.** **What's still uncertain.** | Default for a single paper or launch |
| `qa` | 4–6 bold questions a reader would ask, each answered in 1–3 short paragraphs | Confusing or contested topics |
| `by-the-numbers` | Short intro, then a list of 4–6 bolded figures, each with one sentence of context and a citation | Benchmarks, funding, adoption stats |
| `timeline` | Short intro, then a dated list of events leading to now | Stories with a history, policy fights |
| `claim-vs-evidence` | A two-column markdown table (What's claimed / What the evidence shows), then analysis | Hype-heavy announcements |
| `three-things` | "Three things to know" numbered list, each a mini-paragraph | Fast-moving news, product launches |
| `comparison` | Markdown table comparing the new thing with 2–3 alternatives, then analysis | Inventions, model releases |

Rules: no two sections in one issue share a format; no identical combination of formats within the last 6 issues; `explainer` at most once per issue.

## Faith content (Coding with Christ, Sundays)

- Scripture quoted exactly from the World English Bible via bible-api.com, never written by a model.
- Stay within historic, broadly shared Christian teaching; avoid denominational disputes.
- No prosperity-style promises; no claims that technology replaces the Church, the Spirit or discipleship.
- Ministry stories need a named organization and a link. Never fabricate testimonies or conversions.
