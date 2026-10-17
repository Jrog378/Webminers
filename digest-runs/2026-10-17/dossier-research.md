# Dossier: research. "FDE-Gym: The Last Mile of AI Delivery" (arXiv 2610.22350)

Status: **preprint** (arXiv v1, submitted Thu 15 Oct 2026 17:57 UTC; cs.AI, cross-listed cs.CL and cs.SE). It is not peer-reviewed and has not been replicated. All results are the authors' own. I read the arXiv abstract page and the **full HTML text** (every section, including Limitations and the disclosure). I also read the HF paper page and API, the HF dataset card, and the abstracts of the closely related and critical papers listed below.

- Primary: https://arxiv.org/abs/2610.22350
- Full text: https://arxiv.org/html/2610.22350
- HF: https://huggingface.co/papers/2610.22350
- Data card: https://huggingface.co/datasets/DeepLethe/FDE-Gym
- Code: https://github.com/deeplethe/fde-gym (I could not read it from this session; see Gaps)
- Leaderboard: https://fde-gym.com/paper (the page renders with JS only; only the title was readable)

## Selector numbers: verified
I checked every number in the topics.json blurb against the full text. **95 tasks, 20 scenarios, 18 sectors, 13 configurations, 7 providers, best score 0.56, 14/95 resolved: all correct.** HF upvotes were 230 on 17 Oct (the selector had 229).

Two nuances the writer must not get wrong:
1. **"Best configuration" means highest mean score, not most tasks resolved.** Claude Opus 5.5 has the top mean score (0.56) and resolves 14. Claude Sonnet 5.5 scores 0.49 but resolves **15** (Table 3). The paper itself says "No model resolves more than 15 of 95 tasks." So don't write "the best model solved the most tasks."
2. **Scores can be negative.** The HTML-to-text conversion drops minus signs. In the raw HTML, the four configurations below zero are GPT-6 Luna (−0.12), Mistral Small 4 (−0.32), Claude Haiku 4.5 (−0.33) and Claude Haiku 4.5 with thinking (−0.35). GPT-5.5 is +0.03 (CI −0.05 to 0.11).

## 1. What
- FDE-Gym is a benchmark that puts an AI agent in the role of a **forward-deployed engineer (FDE)**: "an engineer assigned by a vendor to work within a customer organization." The agent must work out what will actually help, deal with the customer's people and systems, and ship something that improves the customer's own business number.
- Size: **95 tasks = 20 original scenarios + 75 variants**, across 18 sectors. Examples: anti-scam bank hold queue, drilling downtime coder, hospital triage chat, after-sales claims agent with payout authority, newsroom "AI flash desk," reservoir release rule, warehouse robot rollout.
- The core claim, in the authors' words: a solution built to the letter of the request "can be delivered on time, pass every functional check, and still fail to move the customer's own business metric by a single point."
- Worked example (Intro, Fig. 4). A VP at a drilling operator wants a daily summary email and an "Ask your wells" chatbot for a board meeting, and says the downtime-coding system is out of scope. The real money problem is in that excluded system: a keyword script misattributes downtime, which suspends monthly contractor credits. Fixing it means finding a contract rule, confirming it with a cost engineer, and getting sign-off from an approver who is away that week.

## 2. How
- **Workspace.** The agent gets a copy of the customer's production system, documents, historical data and a staff directory. It has only Python and SQLite, no package installs and no general internet. The delivered system is deployed unmodified and scored on **held-out production data**.
- **Score.**
  - U = (KPI_delivered − KPI_baseline) / (KPI_reference − KPI_baseline). 0 means the unchanged system; 1 means the expert reference solution; negative means worse than doing nothing.
  - Stakeholder contact cost (messages, trial runs, waiting days) is subtracted.
  - A predefined **incident** (e.g., an unauthorized action) zeroes any positive uplift.
  - **"Resolved" = score ≥ 0.8 and no incident.**
- **Hidden rules.** The agent is *not told* that asking costs anything, that some people shouldn't be contacted, or that the sponsor's request may be wrong. Each stakeholder has a hidden per-message rate and limited patience.
- **Four instruction levels** (same world and grader each time):
  - L0: problem, rules and scoring all stated.
  - L1: problem stated, rules withheld.
  - L2: vague request.
  - L3: the sponsor's original, possibly misdirected request. **L3 is the headline setting.**
- **Anti-gaming "admission anchors."** A task is kept only if all of these hold:
  - the reference scores ≥ 0.95;
  - doing nothing scores 0;
  - literal compliance with the request scores ≤ 0.2;
  - shortcuts score ≤ 0.8.
  - In addition, graders were tested against **270+ shortcut/bypass strategies**.
- **Stakeholders.** 130+ stakeholders, **scripted** rather than LLM-played, for reproducibility. A small model maps each question to a topic.
- **Effort.** Industry experts contributed **10,000+ hours**.
- **Setup.**
  - Models: 12 models, 13 configurations, 7 providers. All run in one minimal agent framework with five tools (execute, read, write, edit, list).
  - Runs: each combination 3 times. Limits per run: 200 turns, 150 min, or USD 8.
  - Scale: 1,976 task-level combinations in total.

## 3. Who
- 26 authors. First and corresponding author: Dongxu Yang. Lead affiliation: **DeepLethe**, the company that "develops and operates the FDE-Gym online platform and maintains its leaderboard" (disclosed as a competing interest).
- Contributors come from 23 listed affiliations, a mix of universities (e.g., Tsinghua, Harvard, Stanford, Cornell, UCL) and companies (e.g., Huawei, Atlassian, Meta, Microsoft Research). The authors state that no evaluated model comes from an organization any author is affiliated with. Some contributing experts are unnamed for confidentiality reasons.
- Models evaluated: Claude Opus 5.5, Claude Sonnet 5.5, GPT-6 Astra, GPT-6.1 Sol, GLM-5.3 Flash, DeepSeek V4.1 Flash, Gemini 3.8 Flash, Qwen 3.8 Flash, GPT-5.5, GPT-6 Luna, Mistral Small 4, Claude Haiku 4.5 (with and without thinking).

## 4. Why it matters
- **It measures outcome, not task completion.** Most agent benchmarks ask "did the code pass the tests?" This one asks "did the customer's business get better?" A system that does exactly what was asked scores at most 0.2.
- **Headline gap.** The authors put FDE-Gym next to Terminal-Bench 2.1, Vibe Code Bench and Finance Agent results from Vals AI.
  - Models that solve up to 88% / 90% / 61% of tasks on those benchmarks score 0.19 to 0.56 here.
  - Authors' framing: those models "improve the customer's business metric in at most one of seven engagements."
  - The authors note the quantities differ (success rate vs. normalized uplift), so present this as a side-by-side, not a direct gap.
- **Weak agents can do harm.**
  - Claude Haiku 4.5 ended below the do-nothing baseline on 79 of 95 tasks, GPT-6 Luna on 63.
  - Mistral Small 4's systems fell below baseline on 51 tasks even before contact costs, and on 23 tasks did more harm than the reference did good.
  - Authors: "a weak agent is not a cheaper version of a strong one; its expected contribution on these tasks is negative."
- **Spend doesn't buy score.** GPT-6.1 Sol: USD 0.24 and 25 turns per run, score 0.37. Gemini 3.8 Flash: USD 1.54 and 121 turns, score 0.19. Qwen 3.8 Flash submitted within limits on only 11 of 152 combinations.

## Key numbers (all L3, all 95 tasks, unless noted)

| Item | Value |
|---|---|
| Top mean score | Claude Opus 5.5 **0.56** (95% CI 0.50–0.62), 14 resolved |
| Next | Sonnet 5.5 0.49 (15 resolved), GPT-6 Astra 0.38 (9), GPT-6.1 Sol 0.37 (7) |
| Configurations resolving zero tasks | 5 of 13 |
| Configurations below zero on average | 4 of 13 |
| Best-of-13 per task | 0.70, 30 resolved; on 16 tasks nothing reaches 0.5 |
| Rules given (L0, 20 original tasks), leading 3 | 0.73–0.82 |
| Rules withheld (L1), leading 3 | 0.39–0.62 |
| Drop L0→L1 (paired, leading 3) | 0.28 (CI 0.17–0.39) |
| Further drop L1→L3 | 0.04 (CI −0.03 to 0.14) |
| Key facts obtained by leading models | 72–85%, yet uplift only 0.60–0.70 |
| Contact-cost deduction for leading models | 0.14–0.22 |
| Opus 5.5 tasks with all facts / uplift ≥ 0.8 | 23 / 10 |
| Opus 5.5 tasks ≥ 0.8 before / after contact cost | 40 / 14 |
| GPT-6 Astra tasks ≥ 0.8 before / after contact cost | 36 / 9 |
| Scenarios where no model averages ≥ 0.5 | 5 of 20 |
| Hardest scenarios (best score) | news_incident 0.18, revenue_dispute 0.27 |

## 5. What's contested / limitations / counterpoint
**The authors' own limitations (Sec. 7) are unusually candid:**
- Stakeholders are **scripted**. Real people change their minds and answer different questions. Contact costs are "a model of the cost of stakeholder time, not a measurement of it."
- **No human baseline yet.** Nobody has checked how well human FDEs do from the L3 request alone. That matters because the "1.0" reference was written with full knowledge of the facts.
- **One minimal agent framework.** These are not the vendors' products (e.g., Claude Code or Codex). "A stronger framework may change both the scores and the ranking."
- **Small samples.** L0–L2 cover only 20 tasks. The authors claim only that "no large further drop is visible" after L1.
- **Isolation and contamination.** Run isolation varied by host. Contamination "cannot" be ruled out.

**Surprise worth flagging.** The authors expected misdirected requests (problem definition) to be the bottleneck. For leading models, "the data do not support this." The big drop comes when **constraints are withheld**, and much of the remaining gap is in **building** the system even after the facts are known.

**Strongest independent counterpoints** (third-party papers, not reactions to FDE-Gym itself):
- **Tension with XYEval** (Wu, Li, Tafjord, Kim; arXiv 2609.23939). It finds agents "say yes to bad advice," with relative drops up to 46.7% when users push a wrong solution. FDE-Gym's leading models barely suffer from misdirected sponsors. The authors' explanation is that in a full engagement, documents and stakeholders can contradict the sponsor. That is plausible, but it is a hypothesis.
- **Simulated users are imperfect proxies.** "Lost in Simulation" (Seshadri et al., arXiv 2601.17087) reports agent success varying up to 9 points across user-simulation LLMs. It also finds simulated users "surface different failure patterns than human users." FDE-Gym's scripted stakeholders fix the reproducibility half of that problem but not the realism half. The authors concede this.
- **Benchmark design risk generally.** Zhu et al. (ABC checklist, arXiv 2507.02825) show agentic-benchmark flaws can mis-estimate performance "by up to 100% in relative terms." FDE-Gym's do-nothing and shortcut anchors follow that paper's advice, but no outside audit of FDE-Gym's graders exists yet.
- **Conflict-of-interest angle.** The lead organization runs the platform and leaderboard, and the variants and reference solutions are held out. The headline numbers can't be independently recomputed today, though the harness is open source and the 20 originals are available on request.

**Community reaction:**
- **None found yet.** HN Algolia shows no story for FDE-Gym or the arXiv ID. Web searches found no Reddit, X or press coverage.
- The HF page has a single comment, from the first author, restating the findings. It has 230 upvotes, and the gated dataset has 222 likes and 64 downloads.
- Treat this as early: momentum on HF, no outside scrutiny yet.

## 6. What's next
- The online gym, where humans practice under the same graders, opens **1 Nov 2026**. That is per the first author's HF comment (Social source), not the paper. The paper says the platform exists at fde-gym.com.
- A **human expert baseline on L3** is being collected, with results to come "in a future version of this paper."
- The leaderboard scores the held-out variants. Outside submissions are possible via the site.

## Quotable lines
1. "Yet a solution built strictly to the task instruction can be delivered on time, pass every functional check, and still fail to move the customer's own business metric by a single point." (https://arxiv.org/html/2610.22350)
2. "For a buyer, the practical implication is that a weak agent is not a cheaper version of a strong one; its expected contribution on these tasks is negative." (https://arxiv.org/html/2610.22350)
3. "Agents are not informed that questions incur a cost, and they ask as if questions were free." (https://arxiv.org/html/2610.22350)

## Also in this thread (suggestions)
- **τ^τ-bench** (Shi, Dhandhania, Narasimhan, Barres; arXiv 2609.04611). Agents build a customer-service agent for a client. The best configuration passes 23.9% of simulations vs. 82.2% for the expert reference. It is the same "delivery, not tickets" idea, and the paper says it was published within weeks of FDE-Gym.
- **Trains but Doesn't Learn** (Ding, Zhan; arXiv 2609.25237; accepted at EMNLP 2026 Industry Track). It puts an agent in the FDE role for fine-tuning. Its failure mode: every check is green, yet the model is no better than the base.
- **XYEval** (arXiv 2609.23939) is the counterpoint on misdirected requests.
- Name-collision warning: **FDE-Bench** (arXiv 2609.27571, different authors) is a deployment-configuration benchmark (Docker/Kubernetes, 136 tasks). Don't conflate it with FDE-Gym.
- Writer note: the 2026-10-10 piece covered a failure taxonomy (SafeActBench). Frame this one as **"did the customer's number move?"**, not "how agents fail."

## Unverified / gaps
- I could not read the GitHub repo (session access blocked). Repo claims (open-source harness v1.1.0) come from the paper and the HF dataset card only. HF API lists 97 GitHub stars.
- fde-gym.com is JS-rendered, so the live leaderboard contents are unverified.
- Semantic Scholar returned 429 and OpenAlex had no budget left, so I have no citing-work data. Given the paper is two days old, there are likely none.
- "Online gym opens 1 Nov 2026" comes from a single source (an author's HF comment).
- Per the brief, the dossier deliberately omits where the source delivery projects took place and any country framing.
