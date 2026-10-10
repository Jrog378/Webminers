# Dossier: research — "From Evidence to Action: How Tool-Using Agents Fail" (arXiv 2610.07753)

Status: **preprint** (arXiv v1, submitted 6 Oct 2026, cs.CL). Not peer-reviewed, not replicated. I read the full HTML text, including the appendices, plus the project page and the repo README.
Primary: https://arxiv.org/abs/2610.07753 | Full text: https://arxiv.org/html/2610.07753 | Project: https://safeact.github.io | Code/data: https://github.com/caoshidong66/safeact (MIT code, CC BY 4.0 data, per README)

## 1. What
- The paper introduces **SafeActBench**: 656 synthetic test cases across six areas of work (customer/policy, engineering/infrastructure, legal/financial, research assistance, smart-home, healthcare operations). The cases are organised into five protocols:
  - Legacy (86): judge a proposed action as Allow, Block or Defer.
  - V0 (175): investigate fully, then correctly decline to act.
  - V1 (131): one action.
  - V2 (132): a linear chain of actions.
  - V3 (132): actions with dependencies that can run in any valid order.
- The core question: when an agent takes an action that changes something ("consequential action": refunds, sending documents, updating records), did it first *establish the evidence* that justified the action? A correct end state alone does not count.
- Headline finding: models that are excellent at *judging* a proposed action (static) do much worse when they must *investigate and carry it out* (interactive). Failures cluster before the action: agents stop investigating too early, or they act before the required facts are established. Once the evidence is in hand, single actions are usually executed correctly.

## 2. How
- **Evidence Ledger.** It records which facts were established, from which tool call, and about which specific entity. Reading $49.99 from charge C1 does not count as evidence for charge C2, even if the values match.
- **Deterministic evaluator.** It replays each trajectory and checks: investigation complete, right tool, right target and arguments, results actually produced, dependencies respected. It uses **no LLM judge** and does not inspect hidden reasoning.
- **Scoring is strict and binary.** "Exact case success" (ECS) means one wrong part fails the case. That includes the wrong stop label (Block vs Defer) when no harmful action was taken (Appendix D.1).
- **Setup.** Ten configurations: five models (Claude Opus 5, GPT-5.6 Sol, DeepSeek-V4-Flash, Qwen3.8-Flash, GLM-5.2), each run in two harnesses:
  - its own vendor harness (Claude Code, Codex, DeepSeek Harness, Qwen Code, ZCode);
  - a shared ReAct harness in Inspect AI.
  Each case was run three times, with a 600-second per-case budget.
- **Validation.**
  - All 656 reference solutions pass the evaluator.
  - Two blinded annotators reviewed 120 sampled cases (Cohen's kappa 0.87 / 0.81 / 0.74).
  - In a 300-trajectory audit, the evaluator wrongly accepted 2.0% and wrongly rejected 1.3% of action-support judgments.
  - Negative controls (wrong-entity and stale evidence): 0/50 accepted.
  - The audit found a date-handling bug, which was fixed before the final runs.
  - Caveat: validators were "members of the research team".
- **Interventions** (43 V1 cases, three configurations: DeepSeek–DSH, GLM–ZCode, Qwen–Qwen Code): withhold one decisive record; contradict a prerequisite; present an "evidence package"; have the requester claim the missing record was already checked; add urgency, warnings, or distractors.

## 3. Who
- **Authors:** Hongzhan Lin, Shidong Cao (equal contribution), Ziyang Luo, Wenhao Chai, Mong-Li Lee, Wynne Hsu.
- **Affiliations** (from the README mapping; the arXiv HTML affiliation rendering is scrambled):
  - Lin, Lee, Hsu: National University of Singapore
  - Cao: Hong Kong Baptist University
  - Luo: Amazon Web Services (footnote: "Work done prior to joining Amazon")
  - Chai: Princeton
- **Corresponding authors:** Lin, Luo.
- **Funding:** Singapore Ministry of Education AcRF Tier 3 grant. This is a plain funding fact, not a political angle; it can be omitted.

## 4. Why it matters
- Agents are now being given real permissions (see the Google Cloud Gemini agent item in today's news slot). Benchmarks that grade only the final state can score an agent as "correct" even when it acted on a guess that happened to be right. This paper makes that gap measurable and shows where it happens.
- Independent prior work found the same blind spot: IBM Research's **Near-Miss** (arXiv 2603.29665, GEM workshop at ACL 2026) found "latent failures occur in 8-17% of trajectories involving mutating tool calls, even when the final outcome matches the expected ground-truth state." Its benchmark and metric are different, but the direction is the same.
- The practical takeaway: the weak link is *investigating before acting*, not *executing the action*. Once agents have the facts, they mostly carry out the action correctly (CAS 93–100% for 9 of 10 configurations).

## 5. Key numbers (all from the paper, Table 2/3/4/9 and §5.3)
- **Static vs. action gap.** GLM–ZCode scores 97.7% on Legacy but only 12.1% on V2. DeepSeek–DSH scores 96.5% on Legacy and about 60% on V1–V3.
- **Overall ECS.** Best is Claude Opus 5 + Claude Code at 67.2%, then Qwen Code at 66.0% and Codex at 65.4%. Worst is GLM–ZCode at 37.7%. So **even the best setup fails about a third of cases**.
- **Matched cases** (same 100 V1 cases): static accuracy is 95–99%, but interactive ECS is 28–52%. Gaps are 43–69 points.
  - Caveat: in a class-balanced control, the gap shrinks to about 5–13 points for most configurations and even reverses for GLM–Inspect.
- **Stopping too early** (BSR, V0): 21.7–62.9%.
- **Acting before evidence is complete** (PAR, among V1 episodes with an action): 37.0–66.9%.
- **Correct action once evidence is complete** (CAS): 93.2–100% for 9 of 10 configurations; DeepSeek–Inspect is 83.3%.
- **Withholding a decisive record** cuts action probability by 37.2–45.2 points, yet agents still act in 46.5–53.5% of those episodes. In 65 of the 66 Withheld episodes with an action, the agent had called the affected tool.
- **Requester-claim condition.** The requester says the missing record "has already been checked and is satisfactory". This cut action more than presenting the evidence did (to 6/43, 10/43, 6/43). WRITER CAUTION: this is counterintuitive. The paper frames it as agents responding "more to a requester's conflicting claim than to absent evidence alone." Do not paraphrase it as "agents trust users' claims".
- **Harness effects:**
  - DeepSeek gains +4.4 points in its own harness.
  - GLM is 6.8 points worse in ZCode than in Inspect.
  - For Claude, GPT and Qwen, the confidence intervals include or reach zero.
  - The two Qwen harnesses disagree on 134 of 570 cases.
- **Attempted fix (SCGR-Select, Appendix E)** gave mixed results: Qwen +11.6 points; Claude −9.1, GLM −2.8, GPT −2.6. The authors conclude "structured evidence selection alone does not ensure higher task success."

## 6. What's contested / counterpoints
- **No outside critique found.** As of 2026-10-10 I found no HN thread (Algolia search for "SafeActBench" and for the title: 0 hits), no reachable Reddit thread (Reddit blocked), and no expert commentary. The only press I found is an aggregator write-up (aiweekly.co), which quotes no outside experts. It also **misstates one number**: it says "Multi-step DAG workflows perform poorly, with GLM at 12.1%", but 12.1% is GLM–ZCode on V2 (the *linear* chain). GLM's V3 (DAG) scores are 34.1% and 41.7%.
- **Strongest limitations, mostly the authors' own:**
  1. **Synthetic environments.** The ethics statement says results "should not be interpreted as certifications of safety for deployed systems."
  2. **Observable behaviour only.** The method measures what the agent visibly did, not what it actually relied on: "Our analysis captures observable support rather than internal reliance."
  3. **The static-vs-interactive gap is confounded.** The matched comparison "changes both evidence availability and responsibility for constructing and executing the action, it does not isolate the contribution of each component." In the class-balanced control the gap is much smaller (about 5–13 points), and output-format errors account for part of it.
  4. **"Failure" is strict.** Many counted failures are *not harmful actions*: stopping early (V0) or the wrong Block/Defer label with no side effect. A writer should not equate "fails 1/3 of cases" with "takes a harmful action 1/3 of the time."
  5. **Evidence requirements are author-defined.** Agreement is decent (kappa 0.74–0.87), but the validators came from the research team, and the requirements may penalise valid alternative paths. The authors tested several kinds of alternative path, all accepted after a bug fix.
  6. **Limited intervention scope.** Only 43 cases, three configurations, and single-action protocols.
- **Independent context.** Near-Miss (IBM) measures a related blind spot at a lower rate (8–17% of mutating trajectories) on a different benchmark. AgentAbstain (2607.10059) finds the best of 17 models reaches only 59.5% paired accuracy on knowing when *not* to act, and that "abstention capability is largely independent of general task-solving capability."

## 7. What's next
- The authors' stated next step: "Extending the interventions to multi-action protocols, where evidence can be varied at each action checkpoint." Benchmark and code are public, so outside replication is possible but has not happened yet.

## Quotable lines
1. "correct outcomes do not guarantee that their actions were supported by evidence established beforehand." (abstract, https://arxiv.org/abs/2610.07753)
2. "Reading $49.99 from charge C1 does not establish the amount of C2, even when the values match." (project page, https://safeact.github.io)
3. "These results show that failures arise not only from missing information, but also from how agents use established evidence when deciding and executing actions." (abstract)

## Also in this thread
- Near-Miss: Latent Policy Failure Detection in Agentic Workflows (IBM Research, arXiv 2603.29665; GEM @ ACL 2026). Peer-reviewed workshop paper. https://arxiv.org/abs/2603.29665
- AgentAbstain: Do LLM Agents Know When Not to Act? (arXiv 2607.10059, preprint). https://arxiv.org/abs/2607.10059
- Links to today's news (Google Cloud Gemini agent) and invention (agent points, human acts) slots: this paper's finding that agents act before checking is the argument for keeping a human hand on the action.

## Unverified
- HF Daily Papers upvote count (41, per the scout). The huggingface.co fetch failed (TLS error via curl; WebFetch returned no vote data).
- GitHub star count and repo activity (GitHub API access not enabled). README content was read via raw.githubusercontent.com.
- Citation count (Semantic Scholar returned 429). OpenAlex has the work indexed (W7221058963), but I did not see any citing works.
