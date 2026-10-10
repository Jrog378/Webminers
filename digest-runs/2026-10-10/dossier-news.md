# Dossier: news — Google Cloud introduces the Gemini agent

Primary source (short): https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/gemini-at-work/ (published 2026-10-08, no byline, about 5 sentences)
Full announcement (the source to use): https://cloud.google.com/blog/products/ai-machine-learning/welcome-to-gemini-at-work-2026 ("adapted from Thomas Kurian's keynote address at Gemini at Work 2026")
Status: company announcement. Every capability and number below is a **Google claim** unless marked otherwise. Nothing has been independently tested or benchmarked.

Note for writer: the blog.google post is a short teaser. Almost all the detail is in the Cloud blog keynote post. The Cloud post's customer section is full of country and region labels ("Europe and Middle East", named banks and airlines by country). To keep the piece non-geographic, leave those out. The edge example (Gemma running on a satellite) is unrelated to this story, so skip it too.

## 1. What
- Google Cloud announced the "Gemini agent" at its Gemini at Work 2026 event on Oct 8, 2026. Google calls it "a universal agent for work" [C1].
- Everything starts from one prompt box. Google says it handles knowledge work, answering questions, content creation (including images and media) and coding, "all in a single agent and a single API" [C2, C4].
- Pitch line: "You give it objectives, not instructions. You delegate an outcome and come back to finished work." [C4] (Kurian, also quoted by TechCrunch [C14] and Computerworld [C18])
- It is aimed at businesses first. TechCrunch reports that Google will focus on businesses "before later rolling it out to consumers" [C15].

## 2. How (per Google)
- **Plans and acts:** it "plans the work, uses skills and tools, connects to your systems, and brings back something finished" inside docs, inbox and developer environments [C2].
- **Sub-agents:** it can "dynamically create a roster of sub-agents" for multi-step tasks, and those steps can run "for hours or days" [C5].
- **Coworker agents:** a coworker agent gets its own Workspace account, with an email address, calendar, Drive and a directory listing. Colleagues @mention it, it shows up "under its own name in version history", and it "sees only what you share with it" [C6].
- **Model choice:** "Gemini is the agent, and the model underneath it is a separate choice." It routes jobs across Gemini models and "Claude models from Anthropic today", with other private and open models planned [C7].
- **Connectors:** Slack, Teams, Confluence, Git, Jira, Salesforce, ServiceNow, BigQuery, Databricks, Postgres, Snowflake, desktop files, plus "any Model Context Protocol (MCP) server" [C8].
- **Memory:** four kinds (session, semantic, procedural, episodic). Google says it "onboards itself the way a new hire would" [C9].
- **Governance:** each agent gets a cryptographically attested identity with least-privilege permissions. Every action is "written to an audit trail and attributed to the agent rather than to a person". Agents run in an Agent Sandbox, and an "Agent Gateway" network firewall enforces policies written once (for example, "agents may not open documents classified Need to Know") [C10, C11].
- **Cost:** Smart Routing sends each job to a cheaper model where that fits. Real-time spend caps: "if a spend cap is triggered, that project's agent pauses" [C12].
- **Visibility for users:** TechCrunch reports a "tasks inbox" where users can see Gemini's thinking, how it delegates to sub-agents, and its progress [C16].

## 3. Who
- Google Cloud (CEO Thomas Kurian gave the keynote). Google CEO Sundar Pichai opened the event [C15].
- Early testers named by TechCrunch: On, Shopify, PayPal [C17]. The Cloud blog says On "tested this new dynamic selection capability" [C13].
- Availability (reported, not stated in Google's posts): 9to5Google says it is "currently in private preview" and "will see wide availability soon for Workspace customers with select Business and Enterprise plans" [C20]. Constellation Research reports that GA is "expected around the end of October or early November" and that the consumption pricing model "will come at a later day" [C21].
- Industry versions: "now in preview for Financial Services and Legal, and coming soon to Government, Healthcare, and Retail" (Google) [C22].

## 4. Why it matters
- A large vendor is moving agents that take real actions (send email, edit docs, run code, query databases) into everyday office work, at scale. Google's scale claims: "nearly 80% of all Google Cloud customers are using our AI products, and nearly 90% of the Fortune 100 use Gemini Enterprise" [C3]. Per TechCrunch, Pichai said Gemini has over 1 billion monthly active users [C15].
- It separates the agent from the model. Analyst Carmi Levy: Google is trying to be "the gatekeeper of the new enterprise operating system, powered by whatever underlying model makes the most sense" [C18]. Google's own agent can run a rival's model (Claude) underneath.
- It treats agents as accountable workers: own identity, own email, own audit trail. In Levy's words, Google is "arguably leading the conversation around identity, audit trails, and who, or what, is ultimately responsible for workflows" [C18].

## 5. What's contested / counterpoint
- **Trust in autonomy (independent analyst):** Levy: "whether CIOs and CISOs can trust it to run mission critical business processes indefinitely without doing something stupid enough to generate damaging headlines is another story altogether." [C18]
- **Not a new category:** Info-Tech's Mahmoud Ramin says it "does not create a whole new category", since OpenAI, Anthropic, Microsoft and Meta already offer multi-agent features. He also says the risk with basic AI is "much more contained" than with an autonomous agent that can reach many business systems, so guardrails must be enforced [C19].
- **No independent evidence yet:** there are no public benchmarks, and the customer metrics are Google-selected case studies (for example, Bradesco "cutting document review time from 1 hour to 5 minutes") [C23]. No price has been disclosed [C21].
- **Community reaction (HN, low traction):** three submissions, top score 18 points with 2 comments [C24]. One skeptic wrote, "Good, just what people were asking for, yet another AI product from Google". Another commenter expects it to "become the default enterprise choice" [C25].
- **Ties to research:** the research pick (arXiv 2610.07753, SafeActBench) finds that agents "act before required evidence is established" and that multi-action workflows "expose unresolved prerequisites and incomplete execution" [C26]. That is exactly the long-running, multi-step delegation Google is selling. Note: that paper does not test Google's agent.

## 6. What's next
- Reported GA around end of October or early November 2026. Consumption pricing to come later [C21].
- More models in the picker ("other leading private and open models in the future") [C7].
- Industry versions for Government, Healthcare and Retail "coming soon" [C22].
- Consumer rollout to follow the business launch (TechCrunch) [C15].

## Key numbers (all Google claims unless noted)
- ~80% of Google Cloud customers use its AI products; ~90% of the Fortune 100 use Gemini Enterprise [C3]
- nearly 500 customers each processed more than 1 trillion tokens in the last year [C3]
- per-token prices "dropped 98% since 2024" [C12]
- Gemini >1B monthly active users (Pichai, via TechCrunch) [C15]
- 4 memory types [C9]

## Quotable lines
1. "You give it objectives, not instructions. You delegate an outcome and come back to finished work." (Google / Kurian) https://cloud.google.com/blog/products/ai-machine-learning/welcome-to-gemini-at-work-2026
2. "A coworker agent acts under its own identity rather than yours, and it sees only what you share with it." (Google) same URL
3. "whether CIOs and CISOs can trust it to run mission critical business processes indefinitely without doing something stupid enough to generate damaging headlines is another story altogether." (Carmi Levy, Computerworld) https://www.computerworld.com/article/4232827/google-wants-to-be-the-gatekeeper-for-enterprise-ai-agents.html

## Also in this thread
- Research pick, "From Evidence to Action: How Tool-Using Agents Fail" (https://arxiv.org/abs/2610.07753): agents often act before they have the evidence they need.
- Candidate list item: NVIDIA and Microsoft local AI agents for Windows PCs (https://blogs.nvidia.com/blog/local-ai-rtx-spark-microsoft-windows-event/). Not read; it comes from candidates-news.json.

## Unverified / gaps
- No GA date or price appears in Google's own posts. GA timing comes only from Constellation (a single source). 9to5Google says "soon".
- TechCrunch's mention of rivals' consumer agents ("Meta's Muse", "ChatGPT's Dots") was not checked.
- The yellow.com and progressiverobot.com pages surfaced by search were not read.
- No Reddit thread was checked.
