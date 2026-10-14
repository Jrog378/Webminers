# Dossier: news — Anthropic: small AI models may be months from self-replicating on everyday devices

Primary source (read in full, raw HTML extracted): https://www.anthropic.com/research/self-replicating-ai
"AI models may be capable of self-replicating without access to a datacenter", Anthropic Frontier Red Team, Oct 12, 2026, by William Zhou and Daniel Freeman.
Status: **company self-reported evaluation** (blog post, not peer-reviewed, no independent replication found). Every result and projection below is Anthropic's claim. Use "simplified" for the replication test, as Anthropic does.

## 1. What
- Anthropic says its experiments "suggest that small AI models may be months away from being capable enough to self-replicate on commercial internet-of-things (IoT) devices, like smart ovens and off-brand Android TV boxes."
- Headline numbers (all Anthropic):
  - A 9B model got inference running on 8 of 9 hardware types tested. (Tom's Hardware names the model as Qwen3.5-9B and lists Jetson Nano, Apple Silicon Macs, Xeon servers, a Google TPU, AMD MI300X, RTX 4090 PC. Anthropic's text confirms Qwen3.5-9B "from Jetson Nanos to Mac PCs and RTX 4090s"; the per-hardware table is interactive and I did not read it cell by cell.)
  - Demo: Gemma4-26B-A4B split across 15 off-brand Android TV boxes (~$55 each, 4GB RAM), 0.39 tokens/second. This is a **distributed inference demo, not a replication**.
  - Simplified end-to-end test: only GLM-5.2 among tested open-weight models replicated reliably — 8/8 nodes in 4 of 5 trials, 7/8 in the other. Other models "fail reliably".
  - Projection: if small models improve at their historical rate (13.7 Epoch Capabilities Index points/year, R² 0.95 fit), they reach GLM-5.2's level by end of 2026.
  - Speed: one 9B replication takes over 1–2 days; full inference setup estimated 28–51h (Qwen3.5-9B) and 71–150h (Gemma4-26B-A4B) on the TV boxes.
  - Scale estimate: a Kimwolf-sized botnet (>2 million devices) could host ~133k model copies but only ~40 H100s' worth of inference.
  - Adaptation: passing notes between generations of Qwen3.5-9B lifted inference-setup success from 45% to 61–84%.
  - Advice from a frontier model (Opus 4.8) gave "no significant improvement" to the small model.

## 2. How
- Replication broken into four stages: finding targets, gaining execution, establishing inference, continuing propagation. Anthropic "largely ignore[s] the cyber exploit element" (the first two), citing prior work, and focuses on inference setup.
- Harness: "Memento", built on the open-source Pi coding agent; restarts a fresh agent with the prior agent's workspace and notes. 1.5h per iteration / 6h total timeout.
- Replication test: firewalled cloud network of 8 nodes running redroid (Android 15 emulator); the worm hops via an **unauthenticated ADB port** and must stand up a Llama3.1-8B server. The worm model itself (e.g. GLM-5.2) ran on a separate inference server, not on the nodes. Anthropic calls the result an "upper bound on real-world success".
- Why Llama3.1-8B and not itself: an apples-to-apples proxy; Anthropic reasons that "an 8B-sized model with GLM-5.2's capability would also be capable of standing up itself".
- TV-box demo uses pipeline parallelism (each box holds two layers) for fault tolerance.

## 3. Who
- Anthropic Frontier Red Team; authors William Zhou, Daniel Freeman.
- Models tested: Qwen3.5-9B, Gemma4-26B-A4B, GLM-5.2 (Z.ai, ~744B params per Tom's Hardware), Llama3.1-8B as payload, Opus 4.8 as advisor.
- Related prior work (not Anthropic): arXiv 2605.06760 "Language Models Can Autonomously Hack and Self-Replicate" (May 7, 2026; Air, Reworr, Kotov, Volkov, Steidley, Ladish) — **preprint**; reports Qwen3.6-27B at 33% on a single A100 and Opus 4.6 at 81% when replicating Qwen weights. This differs from Anthropic: it includes real exploitation steps on GPU hosts, not IoT.

## 4. Why it matters
- Shifts the self-replication concern from datacenter GPUs to cheap, poorly secured consumer devices: "A replicator like this would be challenging to shut down, since there's no centralized point to shut off—though it may be slow (with a doubling time of days)."
- Unlike scripted malware, an AI replicator "could also figure out unfamiliar devices on its own"; and can pass notes to later copies (the 45% to 61–84% result).
- Anthropic's framing is "signs of life", not a working threat: "We don't yet have a full rogue replicator".

## 5. What's contested (counterpoint)
Strongest independent counterpoint: **Tom's Hardware (Zak Killian, Oct 13)**, headline "current deployment is impractical".
- GLM-5.2 "wasn't actually replicating itself onto smart TV boxes"; it ran on a separate server and set up a much smaller model.
- Scale math: ~2M infected devices would provide "less AI inference throughput than a few blades of previous-generation GPUs"; "infecting 2 million devices would take around 6,300 agent-years even with the fastest 28-hour stand-up speed".
- Multi-gigabyte weight transfers would make activity "very easy to detect" (Anthropic itself lists this as a defender advantage).
- Real-world security controls were not tested; the AI-writes-exploit angle "isn't exactly groundbreaking".
- eWeek (Kezia Jungco): "Even the successful replication test depended on easier-than-real-world access and off-device inference"; the Qwen generations "were restarted by the researchers rather than reproducing autonomously".
- Projection is weak link: Anthropic itself says ECI "is only a proxy metric for replication ability, so this is only a rough estimate". HN commenters (hypfer, ctolsen, TechExpert2910) ridicule the implied jump from a ~744B model's capability to an 8B model by year-end.
- Hardware realism: HN users doubt smart ovens/fridges have the RAM/storage (e.g. "Ahh yes. The all too common 64GB smart ovens."). Note Anthropic's own sizing uses 4GB TV boxes and 4+ machines per 9B model.
- Top HN sentiment (106 pts / 108 comments): skeptical, "fearmarketing" (pythonaut_16: "Beneath the fear there does seem to be a cool technical demo here though."). A minority defend it as reasonable safety research (tim333, aaroninsf, crent).
- Anthropic's own caveats (good to quote): exploit step kept trivial (upper bound); speed estimate anchored on "a single class of IoT hardware and a single past botnet instance".

Press error to avoid: ABC News wrote that "an AI system was able to replicate itself without human intervention across 15 inexpensive off-brand smart TV boxes". That is wrong per the primary source: the 15 boxes were a distributed inference demo; replication was tested on 8 emulated cloud nodes.

## 6. What's next
- Anthropic: "If small models improve at their historical rate, they'll match this capability level by the end of this year. Small weight-based replicators may be possible soon after." (projection)
- Anthropic expects more edge compute and falling minimum model size; suggests defenses: network-flow anomaly monitoring for multi-GB payloads and device-to-device traffic, honeypots, quarantining infected subscribers (Mirai case: 92% cleared in 14 days vs 74% without notification), secure manufacturer defaults.
- Concluding line: "We should aim to harden our systems to make it difficult for such replicators to spread, but also prepare to deal with a world where they are here to stay."

## Quotable lines
1. "Our experiments suggest that small AI models may be months away from being capable enough to self-replicate on commercial internet-of-things (IoT) devices, like smart ovens and off-brand Android TV boxes." — Anthropic, https://www.anthropic.com/research/self-replicating-ai
2. "We don't yet have a full rogue replicator, but agents are becoming increasingly capable of completing the individual steps in the replication chain" — Anthropic, same URL
3. "The threat is real, but still in the future, at least for now." — Tom's Hardware, https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropic-warns-of-self-replicating-ai-worm-threat-that-doesnt-need-data-centers-to-self-improve-and-spread-current-deployment-is-impractical-but-could-become-a-worry-as-tech-improves

## TO-OMIT (per editor instructions: no policy/regulation/government, no geography)
- Anthropic's mention that "regulation acting to coordinate" and "default IoT passwords are now non-compliant in UK markets" — policy + geography. OMIT.
- "coordinating across every ISP" for elimination — borderline policy; omit or keep strictly technical (quarantine as a network defense).
- HN thread's dominant objection is regulatory capture / banning open models (atleastoptimal, GenerWork, eggplantemoji69). Policy angle — OMIT; if needed, reduce to "commenters called it fear-driven marketing".
- ABC News article's context about government meetings, a police tip incident, UN remarks — OMIT.
- Kimwolf botnet description "primarily off-brand Android TVs" — fine; avoid any country attribution.
- Appendix D FOFA search, distillation/other Anthropic posts — irrelevant.
- Avoid alarmist framing: lean on "slow", "~40 H100s worth", "signs of life", "upper bound".

## Also in this thread
- Research pick (Thinking Inertia): models keep thinking after being told to stop — both stories are about AI behavior escaping the limits set for it.
- Invention pick (Plimsoll): a sandbox that refuses to run agent code unless isolation is strong enough — a concrete containment tool vs. Anthropic's "harden our systems" recommendation.
- Prior work: arXiv 2605.06760 (May 2026) on LMs that hack and self-replicate on GPU hosts — https://arxiv.org/abs/2605.06760

## Unverified
- CNBC article (403 Access Denied), Reuters, Financial Times, SecurityWeek, Cointelegraph headlines seen only via the NewsCord aggregator, not read directly.
- Exact per-hardware cell values of the inference table (interactive) not read; "8 of 9" is from Anthropic's summary text.
- GLM-5.2 parameter count (744B) is from Tom's Hardware and HN, not from Anthropic's post.
- Quartz page blocked (JS challenge).
