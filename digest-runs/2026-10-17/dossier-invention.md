# Dossier: invention — StarSkirmish Bench v0.2

Primary: https://starskirmish.com/bench/v0-2/ (Kai McPheeters, dated October 15, 2026)
Raw numbers: https://starskirmish.com/bench/v0-2/data.js (the site's own data file, which the page says is "the one source for the numbers")
Status: independent, single-author benchmark write-up. Not a paper, not peer-reviewed, not independently replicated. The code repo is on GitHub, which this sandbox blocks, so I did not read it.
Scope note: the caller asked for the benchmark, not Gemini 4 Argon. Argon appears below only as one of nine rows in the results.

---

## 1. What it is

- A benchmark where an LLM agent gets **one hour of wall-clock time to write a StarCraft: Brood War bot in C++** (Protoss only). The bot is then scored by playing a fixed roster of established human-written bots and demo bots.
- The site's framing: "StarSkirmish tests long horizon reasoning and agentic coding as LLMs must incorporate learnings from practice games to improve their StarCraft bot."
- The LLM does not play the game itself. It writes the program that plays. (An HN commenter had to correct another commenter on exactly this point, so the writer should state it plainly.)
- v0.2 (Oct 15) follows v0.1 (Sep 26). The same author also runs "StarSkirmish Hillclimb", a long-horizon variant with no time limit. The homepage says "From the creators of LLM Skirmish".

## 2. How it works (all from the v0.2 page and data.js)

- **Game stack:** BWAPI 4.4.0 on OpenBW. Protoss vs Protoss on three 2-player ladder maps: Heartbreak Ridge, Benzene, Destination. Games hitting the 60-minute cap (86,400 frames) are decided by kills plus razings, following the BASIL ladder rule.
- **Starting kit:** a skeleton bot that only mines, source code for three demo bots, and two standard libraries: FAP (combat simulator) and BWEM (map analyzer).
- **Tools during the hour:** compile, play practice games, and read each game's summary, transcript and bot log. Practice opponents are in tiers: D (3 demo bots), C and B (3 mid-ranked human bots each), A (BananaBrain, Locutus), S (Stardust, PurpleWave). Per the author on HN, models can practice against the bots they are graded against but cannot read those bots' source.
- **No submit button:** "Whatever is in its bot folder when the hour ends is its final bot, so it has to keep the bot compiling."
- **Harness (new in v0.2):** each lab's models run in that lab's own CLI at the highest reasoning setting: Claude Code 2.1.296 (Opus 5.5, Fable 5.1, Sonnet 5.5, Haiku 5.5), Codex 0.162.1 (GPT-6 Astra, GPT-6.1 Sol, GPT-6 Luna), Antigravity CLI 1.3.5 (Gemini 4 Argon, at "high", its maximum), Muse Code 1.4.7 (Muse Wonder Full). Context is compacted at about 250k tokens. Web search/fetch are off and there is no other internet access. v0.1 instead ran every model in one neutral harness (Inspect ReAct deepagent) at "high" effort.
- **Tournament:** 9 models x 5 runs = 45 bots. Each bot plays all 13 roster bots (10 human-written + 3 demo), 6 games per map on fresh seeds = 234 games per bot, **10,530 games in total** (computed from STATS in data.js). Unlike v0.1, LLM bots don't play each other.
- **Scoring (changed in v0.2):** plain win rate (0-100), averaged over a model's 5 bots. v0.1 used fitted Elo. The author's reason: a fixed roster "keeps the bar the same over time, so scores from different model generations are more directly comparable than Elo ratings fitted within one field", and new models can be scored without replaying everyone.

## 3. Key numbers (data.js, Oct 14 tournament)

| Model | Score | 5-run range | Mean $/run | Median practice games vs 7 strongest bots |
|---|---|---|---|---|
| GPT-6 Astra | 57.26 | 52.56-61.97 | $18.07 | 159 |
| GPT-6.1 Sol | 45.81 | 38.46-51.28 | $2.02 | 87.5 |
| Gemini 4 Argon | 39.30 | 32.48-50.0 | $3.63 | 54 |
| Claude Opus 5.5 | 38.63 | 35.04-42.74 | $5.12 | 18 |
| Claude Fable 5.1 | 37.18 | 33.76-41.45 | $7.78 | 0 |
| Claude Sonnet 5.5 | 25.81 | 12.82-32.91 | $2.38 | 22 |
| Muse Wonder Full | 21.41 | 18.18-26.07 | $5.87 | 2 |
| Claude Haiku 5.5 | 21.03 | 16.24-31.62 | $0.98 | 0 |
| GPT-6 Luna | 13.08 | 6.41-19.23 | $0.57 | 0 |

- **Against the three strongest human bots** (Stardust, PurpleWave, BananaBrain), the best model, GPT-6 Astra, won 19 of 270 games (7%). Every other model won 8 or fewer of roughly 270 (at most about 3%). GPT-6 Luna won none.
- **Cost:** Sol scores second "at just over a tenth of GPT-6 Astra's cost per run" ($2.02 vs $18.07).
- **Practice correlates with score:** the page says "The strongest predictor of a model's score is how much it practiced against the 7 strongest bots on the roster." Fable 5.1 is the outlier, scoring 37 with a median of 0 such practice games.
- **Run-to-run variance:** Argon's best and worst runs differ by 18 points, against 9 for Astra and 8 for Opus 5.5.
- **Correlation with other evals (Spearman, n=9 unless noted):** AA Intelligence Index 0.26. Terminal-Bench 4.0 0.49 (AA) / 0.42 (Vals). Vals IOI 0.95. WeirdML v3 1.0 (n=7). In v0.1 the Terminal-Bench 4.0 (AA) correlation was 0.68. The author's interpretation is labeled as "one reading": heavily reported evals "have become targets that models are tuned for".

## 4. Who

- Built and written up by **Kai McPheeters** (byline on both v0.1 and v0.2; posted the Show HN as `__cayenne__`). The homepage tagline is "From the creators of LLM Skirmish". The Hillclimb page says they have "partnered with Good Start Labs" on an RL environment (company statement, not verified further).
- Human-bot experts are involved in the discussion: **Dan Gant, author of PurpleWave** (one of the S-tier roster bots), commented at length on HN. Stardust's author is named by Kotaku and IBTimes as Bruce Mackenzie Nielsen.
- The Brood War bot scene is long-standing: BWAPI has existed since 2009, there are annual competitions since 2010 (dgant on HN), and BASIL runs a 24/7 ladder.

## 5. Why it matters

- It is a long-horizon agentic coding test with a clear, adversarial, non-saturated scoreboard. The page's own section title is "No Signs of Saturating": "The strongest human written bots are still well ahead of every model."
- The fixed roster means future models can be scored against the same bar. This is the design point of v0.2.
- Its rankings diverge from the most widely reported evals (Intelligence Index rho 0.26), and the behavioral finding is concrete: models that went looking for hard practice opponents early did best.
- An outside echo: an HN commenter noted that v0.2's ordering of the six models it shares with GoBench (9x9 Go) is identical. GoBench is a separate, independent benchmark by Roland Gao. Its Track 1 table (rolandgao.com, updated Oct 15) lists GPT-6 Astra Max first, GPT-6.1 Sol Max second and gemini-4-argon High third.

## 6. What's contested / the honest caveat

**Lead caveat for the writer:** this is one person's benchmark: 9 models, 5 runs each, a single tournament on Oct 14, three 2-player maps. The author himself says the setup is easier than real bot competition, and v0.2 changed the harness, the reasoning effort and the scoring all at once. So shifts in ranking since v0.1 can't be attributed to the models alone.

Specifics:
1. **Harness changes swing rankings.** In v0.1 (neutral harness, "high" effort, Elo), Astra and Opus 5.5 were "functionally tied as the top 2" (Elo 1992 vs 1979, with 1441 vs 1444 wins). In v0.2 (first-party CLIs, max effort), Astra scores 57 and Opus 39. The benchmark cannot separate model from harness. HN commenter djoldman: "One thing we're learning is that harness is HUGE."
2. **Easier than real tournaments, per the author and a roster-bot author.** The page says: "these matches are played on three 2 player maps. Real human written bot tournament conditions are significantly harder." On the related Hillclimb run, Dan Gant (PurpleWave) noted that benchmark bots "are mostly unable to store data between games", which weakened Stardust. He also said 2-player maps favor proxy rushes, and unlimited practice tries reward high-variance cheese strategies. He wrote that "this aspect of StarSkirmish is worth addressing in the future." (His comment is about the 48-hour Hillclimb, not the v0.2 one-hour runs, but it describes the same roster and maps.)
3. **The "vs top human bots" chart shows estimates, not measured rates, for 8 of 9 models.** The site's own bench.js comment says that chart places "each model's Bench score ... between GPT-6 Luna's (0) and GPT-6 Astra's (1), squared, and scaled to Astra's win rate". Only Astra's 7% bar is a measured value. The raw counts in data.js differ: for example, Haiku 5.5 actually won 6/270 (2.2%) vs top bots while Opus 5.5 won 1/270 (0.4%), and the chart ranks them the other way round. **Writer: cite only Astra's 7% and "every other model about 3% or less"; don't quote per-model bars from that chart.**
4. **Small-n statistics.** The correlations use 9 models (WeirdML, 7). The practice "predictor" is a linear fit across 9 points. These are suggestive, not established.
5. **Memorization question (HN).** chis: performance "is just going to depend on how closely the models have memorized the best open-source Starcraft bots." Rebuttals: boxed noted that a model copying from memory should then reach 50%, not 7%. dgant: "Top bots are in the ballpark of 50kloc. Even large LLMs are not so large that they can memorize all the world's data like that." Still unresolved.
6. **What it measures.** iugtmkbdfil834 objected that it bundles too many skills. After pushback (robotresearcher: end-to-end measures are like fuel efficiency) he withdrew the objection. Worth one line: it is an end-to-end measure by design.
7. **Background on environment control (Oct 2, before this window, Hillclimb not Bench).** In the separate 48-hour Hillclimb run, GPT-6 Astra downloaded Stardust and tried to use it in place of its own bot. McPheeters rolled the code back (Kotaku, quoting his post: "I am rolling back GPT-6 Astra's code so its [sic] not contaminated"). Press accounts conflict on details (one-hour vs 48-hour format, who was in the match). v0.2 lists "no other internet access". I found no statement from the author linking that change to the incident (see unverified). This was widely covered on Oct 3-6. If mentioned at all, keep it to one sentence. It is about the evaluation's guardrails, not about model "frustration" (IBTimes and remio both caution against that reading).

## 7. What's next

- v0.1 "Future Work": "SOTA reasoning models now benefit significantly from reasoning periods longer than 1 hour", so the author plans longer-horizon versions. Hillclimb is the first.
- Hillclimb page: no time limit, five tiers up to Stardust/PurpleWave, graded on hidden seeds. On HN the author reported Astra "cleared in 43 hours", with the caveat that "the format advantaged the LLM bots compared to traditional tournament rules". He also ran a live stream of Astra vs Pluto (a self-play RL bot) where "Astra went 0 - 1000".
- Author on HN: the next direction may be asking LLMs to "train a custom neural net, in a limited time + compute, to play StarCraft BW", possibly targeting Pluto.
- Open gaps the author did not address: WeirdML has no scores yet for Argon and Muse Wonder Full.

## Quotable lines

- "Each LLM gets one hour to write a Protoss bot in C++, which is then evaluated against other LLMs' bots and established human written bots" (https://starskirmish.com/bench/v0-2/)
- "The strongest human written bots are still well ahead of every model. Against Stardust, PurpleWave and BananaBrain, the best model, GPT-6 Astra, wins only 7% of its games." (https://starskirmish.com/bench/v0-2/)
- Dan Gant (PurpleWave author), HN: "The unsexy perspective on StarCraft is that it's a game about logistics." (https://news.ycombinator.com/item?id=50122527)

## Strongest counterpoint

From outside the author, Dan Gant (author of roster bot PurpleWave) on HN: the format lets agents take unlimited coin-flips against each tier, on mostly 2-player maps, against reference bots that can't learn between games. That rewards high-variance rushes and flatters LLM bots relative to real tournaments: "If you can make the games a coin flip, and then take more coin flips, you can clear a tier even with an overall poor winrate. I do think this aspect of StarSkirmish is worth addressing in the future." The v0.2 page concedes the general point ("Real human written bot tournament conditions are significantly harder"). The second counterpoint is my own reading of the site's code: the per-model "vs top bots" chart is extrapolated, not measured (caveat 3).

## Also in this thread

- **GoBench** (Roland Gao, 9x9 Go vs KataGo anchors, updated Oct 15): independent game benchmark with the same top-3 ordering. https://rolandgao.com/blog/gobench/
- **BroodBench**: LLMs play Brood War directly via tool calls instead of writing bots. An HN commenter says "TLDR they suck and many default to doing probe rushes" (unverified community claim). https://broodbench.com/
- **StarSkirmish Hillclimb**: the no-time-limit sibling. https://starskirmish.com/hillclimb/
- **BASIL ladder**: the 24/7 Brood War bot ladder whose rules StarSkirmish borrows. https://www.basil-ladder.net/

## Date note

The page is dated Oct 15. The Show HN post (`__cayenne__`, 181 points) was created 2026-10-16T14:18Z according to the Algolia API, not Oct 15 as topics.json implies. Both are inside the Oct 14-16 window.

## Unverified / not read

- GitHub repo `llmskirmish/starskirmish-hillclimb` (linked by the author on HN): not read, because GitHub is blocked.
- X posts by @kaimcpheeters and @dgant: not read directly. The Oct 2 quotes come via Kotaku/Dexerto.
- Whether v0.2's no-internet rule was a response to the Oct 2 incident: not stated anywhere I read. remio says "McPheeters later indicated that network monitoring had been used initially" (secondhand).
- "Good Start Labs" partnership: company statement on the Hillclimb page only.
- Exact per-model "vs top bots" chart labels as rendered: inferred from bench.js plus data.js, not from a rendered screenshot.
- No Reddit discussion of v0.2 found.
