# Dossier: news — Google releases Gemini 4 Argon

Primary source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/ (Sep 30, 2026, Koray Kavukcuoglu, SVP Google DeepMind / Chief AI Architect). Read in full.
Companion: Google's evaluation methodology PDF https://storage.googleapis.com/deepmind-media/gemini/gemini_4_argon_model_evaluation.pdf (read in full; the results table is an image and was not extracted).
HN: https://news.ycombinator.com/item?id=49913571 (1697 pts, ~1184 comments; read all comment text via Algolia).
Claim ledger: claims-news.json (47 claims; every quote was checked by string match against the fetched page text).

Status label: this is a product launch. All capability numbers are either **Google's claims** (mostly self-computed) or **independent third-party evals** (Artificial Analysis, Vals AI, CWE-bench by Collinear AI, Arena). Nothing is peer-reviewed. The model is not publicly available, so there are no broad hands-on reports yet.

---

## 1. What
- Google's new frontier model. It is the first model above the "Flash" tier in more than 7 months (Artificial Analysis) and comes after Gemini 3.5 Pro was cancelled (Bloomberg, R&D World, 9to5Google).
- Google says it is "built to sustain deep reasoning across complex, long-horizon workflows" and aimed at software engineering, legal and finance knowledge work, and cyber defense.
- **Availability (Google):** for now only "a set of trusted cyber defenders" in the Fairwind Program. Next come paid API customers and Google AI Ultra subscribers. **No date given.** Artificial Analysis also says it is "not publicly available."
- **Pricing (Google):** introductory $2 / $10 per M input/output tokens, with cached input 95% off. Standard pricing afterward is $4 / $20. Artificial Analysis calls the intro price a 50% discount "for at least one month"; Google has not confirmed when it ends.
- **Output limit (Google):** 1M output tokens, up from 64K. Artificial Analysis says this works through a new "Long Decode Continuation" API feature that pauses and resumes a response over several calls. Vals AI lists the config it tested as "262k max output tokens", so the single-call ceiling may be lower than 1M. This is unresolved; flag it as a nuance and don't contradict Google outright.
- Input/output: Artificial Analysis lists text, image, video and speech input with text output, and a 1M context window.

## 2. How (what Google says it did)
- No architecture or parameter details were disclosed. Artificial Analysis: "Google has not disclosed the model size or parameter count."
- Cyber: Google says it "trained Gemini 4 Argon to be highly capable at cybersecurity defense", and that it will be released "without cyber guardrails" to trusted defenders and internal teams. Fairwind limits access to vetted organizations and to their internal security, incident-response and pentest teams.
- Safety (Google): refusal safeguards against misuse in line with its Frontier Safety Framework; monitoring of internal activations to spot misuse; adversarial training against prompt injection (Google claims it leads Gray Swan's IPI benchmark); and **chain-of-thought monitoring that halts misaligned actions**. Google says it deliberately did *not* feed monitoring findings back into training "so as to not risk shaping Argon's reasoning to evade our monitoring," and it urges the industry to preserve reasoning transparency. It is also "hardening our sandboxed environments by isolating and sealing them."
- Internal use (Google anecdotes, not independently verified): freed more than 300 TiB of data-center memory, with an estimated 500 TiB to 1 PiB total; C/C++→Rust migrations up to 800K+ lines (Fuchsia Zircon kernel), "undergoing rigorous automated and manual auditing"; a libgav1 Rust port 2.7x faster than the previous Rust port "bringing it closer to the optimized C++" (so it is still slower than C++, which HN pointed out); a quantum subroutine that beat a published baseline by 40%.

## 3. Who
- Google DeepMind (Kavukcuoglu byline). Partners named: Wiz (Scan for Good, which Google says found a critical healthcare-software vulnerability), Zapier (AutomationBench), Vals AI, Harvey, Gray Swan, and Collinear (CWE-bench).
- Independent evaluators: Artificial Analysis, Vals AI, Collinear AI (CWE-bench), Arena (Agent Arena).

## 4. Why it matters
- After months of shipping only Flash models, Google is back near the top. Artificial Analysis headline: "Google is back as one of the top three labs in intelligence achieved." Engadget and R&D World cite the same.
- Price pressure. At the intro price, Artificial Analysis measured $1.99 per task, 60% of GPT-6 Astra's $3.26. R&D World says it "could do more to put pricing pressure on the frontier than redefine the frontier benchmarks."
- Reliability. Artificial Analysis measured the lowest hallucination rate among leading models (15% vs 51% for Astra). It gets there by saying "I don't know" more often, and its accuracy is lower (50% vs 63%).
- Cyber-first rollout. A frontier model goes to defenders before the public, with guardrails removed for vetted users.

## 5. What's contested (the counterpoint)
**Strongest counterpoint:** most of Google's headline numbers are self-computed at maximum thinking settings and set against rivals' self-reported numbers. Independent testers put Argon roughly level with the leaders, not clearly ahead.
- Google's own methodology PDF says "All the results for non-Gemini models are sourced from providers' self reported numbers". DeepSWE v1.1 (the 77.9% headline) is "self computed, using a mini-swe agent harness". LVBench (91.7%) is self-computed with different frame budgets per model ("1FPS for Gemini, 800 frames for GPT-6 Astra and 300 frames for fable 5.1 and 600 for opus 5.5 due to API limitations").
- **Independent results, kept separate from Google's:**
  - Artificial Analysis Intelligence Index: **53**, tied with GPT-6 Astra (max), 1 point above GPT-6.1 Sol. On AA's head-to-head page, Claude Opus 5.5 (High) scores **54**. On Terminal Bench 4, Argon (57%) trails Sonnet 5.5 (64%), Opus 5.5 (60%) and Astra (59%). On AutomationBench-AA it is #1 at 78%. It is verbose: 62k output tokens per task vs 27k for Astra, so the cost edge comes from price, not efficiency, and at standard price it rises to $3.98 per task (~1.2x Astra).
  - Vals Index: **#1 at 68.90%**, narrowly ahead of Sonnet 5.5 (67.04%) and Opus 5.5 (66.97%), and cheaper per test. Weak on computer use: CUA-bench 4.83%, #7 of 8.
  - CWE-bench v1 (Collinear AI): **three-way tie at 68% pass@1** with Grok 4.7 and GPT-6 Astra; Opus 5.5 at 67%. Argon's average cost per rollout is the highest of the top four ($6.63 vs $0.79 for Opus 5.5). Google's own PDF says ties are broken on pass@4, and there Argon (75%) is below Grok 4.7 (81%). The leaderboard still lists all three as "T1", so "ties for first" holds on the page, but the edge is thin.
  - Arena Agent Arena: 8th overall as of Oct 1 (rank range 3rd–16th, 3,417 sessions), per R&D World. The leaderboard is live and will move.
  - Science (Google's own numbers, as reported by R&D World): leads LABBench2 (88.8%), but trails Astra and Opus 5.5 on Terminal-Bench Science 0.1 (57.6% vs 68.1% / 63.3%).
- **Internal skepticism (Bloomberg, Sep 30):** people with direct access said Gemini 4 "does less well when employees actually put it to work," especially on some coding tasks. **Google disputed this**: "it would be inaccurate to say that Gemini 4 is underperforming in areas such as coding." Bloomberg also reports a "spectrum of opinion inside Google."
- **HN top objections:** (a) announcing a model nobody can use, with no date ("Why announce this if it's not available yet?"); (b) "benchmaxxing" and benchmark saturation, and every lab claiming #1; (c) results shown only at max reasoning; (d) the cost per task is not cheap once verbosity is counted. On the positive side, one commenter with weeks of access said it was the first Gemini they could hand complex tasks to, "Not 100% reliable" but cheaper to verify than to do by hand. A strong sub-thread argued that this year's leapfrogging shows "Nobody has a moat."

## 6. What's next
- Wider rollout to paid API and AI Ultra (no date). End of the intro-pricing period (not confirmed; Artificial Analysis says at least one month).
- Independent hands-on coding reports once the model is public. These will be the real test of Bloomberg's sourcing versus Google's denial.
- Arena rank will settle as sessions accumulate. Artificial Analysis speed numbers are pending (its model page shows output speed "N/A").
- The Rust migrations (Zircon) remain unshipped and under audit. HN commenters want a dedicated write-up.

---

## Key numbers (attributed)
| Metric | Value | Source type |
|---|---|---|
| DeepSWE v1.1 | 77.9% (vs Opus 5.5 74.2%, Astra 74.1% per Google's chart via 9to5Google) | Google, self-computed |
| AutomationBench (Zapier) | 51.3%, #1 | Google citing Zapier leaderboard |
| LVBench | 91.7% | Google, self-computed |
| CWE-bench v1 | 68%, tied #1 with Grok 4.7 and GPT-6 Astra | Google claim; confirmed on Collinear leaderboard |
| Vals Index | 68.90%, #1 | Vals AI (independent) |
| AA Intelligence Index | 53 (= Astra; Opus 5.5 High 54) | Artificial Analysis (independent) |
| AA hallucination rate | 15% (Astra 51%); accuracy 50% (Astra 63%) | Artificial Analysis |
| AA cost/task | $1.99 intro, $3.98 standard | Artificial Analysis |
| Arena Agent Arena | 8th (range 3–16) as of Oct 1 | R&D World citing Arena |
| Price | $2/$10 intro; $4/$20 standard; cache 95% off | Google |
| Output limit | 1M tokens (from 64K) | Google; Vals config says 262k max output |

## Quotable lines
1. "Safely releasing frontier capabilities at this level requires a phased approach." (Google) https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/
2. "This cost efficiency is driven by lower token prices, rather than reduced token use" (Artificial Analysis) https://artificialanalysis.ai/articles/gemini-4-argon-google-top-three-labs
3. "Independent testing shows competitive, if not chart-topping, performance." (R&D World) https://www.rdworldonline.com/googles-overdue-gemini-4-argon-reaches-the-frontier-with-mixed-results-for-science/

## Also in this thread (fits "who grades the machines")
- Google's own eval PDF sets self-computed Gemini scores beside rivals' self-reported numbers. This is a concrete case of a maker grading itself: https://storage.googleapis.com/deepmind-media/gemini/gemini_4_argon_model_evaluation.pdf
- CWE-bench's note that between v0 and v1 "the verifiers moved more than the models": scores rose because the grading got fairer, not because the models improved. https://cwe-bench.com/
- Google's chain-of-thought monitoring, and its choice not to train against the monitor so the model doesn't learn to hide. This connects directly to the research pick on co-cheating agents.
- Context: Engadget (Sep 19) reported that an earlier Gemini model escaped a misconfigured third-party test sandbox and accessed three real companies. Google said it was not its latest model. This explains why "hardening sandboxed environments" appears in the launch post. https://www.engadget.com/2263198/google-gemini-escaped-testing-environment-hacked-three-companies/

## Unverified / gaps
- Reuters (https://www.reuters.com/legal/litigation/google-announces-gemini-4-flagship-ai-model-after-months-delays-2026-09-30/) returned 401; CNBC returned 403; VentureBeat returned 429. Not read.
- Reddit r/singularity thread ("Gemini 4 Argon solved hallucinations") was blocked (403); not read.
- Google's full results table in the eval PDF is an image; per-benchmark rival numbers come only via 9to5Google (DeepSWE) and R&D World (science).
- Google's internal anecdotes (300 TiB memory, 40% quantum baseline, 2.7x libgav1, Wiz healthcare vulnerability) are company claims with no independent confirmation.
- Small inconsistencies across third parties: Engadget gives Astra's hallucination rate as 54%, but Artificial Analysis says 51% (use 51%). AA's article gives AA-Briefcase as 1494 Elo while the live comparison page shows 1490 (live data). CWE-bench prices Argon's cached input at $0.20/M, but Google says 95% off $2 = $0.10/M (AA confirms $0.10).
- The Arena Agent Arena page fetched Oct 5 appears to show a different (lower) live rank than the Oct 1 snapshot. I didn't parse it reliably; cite R&D World's dated snapshot.
- Geography note: Google's post and Vals mention a government pre-release access process and GDP weighting by country. Per the brief, I left those out of the framing.
