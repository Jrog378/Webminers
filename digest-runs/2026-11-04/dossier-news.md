# Dossier: news — Anthropic's progress on provable inference (FlashProve)

Primary: https://www.anthropic.com/research/provable-inference (fetched HTTP 200, read in full; dated "Nov 2, 2026", Frontier Red Team)
Repo: https://github.com/anthropics/FlashProve (README, AGENTS.md, guide/what-is-proved.md, guide/known-limits.md, docs/what-is-not-hidden.md read through raw.githubusercontent.com; the GitHub API was blocked, so no star or fork counts)
Technical report: https://www.anthropic.com/document/flashprove-technical-report (resolves to a PDF; NOT read)
Status label: **company research post plus open-source prototype. Not peer-reviewed, no independent reproduction found.** Every performance number is Anthropic's own claim.

## 1. What
- Anthropic published a research post and open-sourced **FlashProve**, a prototype that lets a model provider attach a cryptographic proof (a zkSNARK) to a response. The proof shows the response came from a model the provider committed to earlier, and it does not reveal the weights.
- The post frames the problem plainly: today a user "cannot check that the responses came from the specific model that a developer claims is responding, as opposed to one secretly substituted in by a routing service for cost reasons, or even by an attacker who has tampered with the token stream."
- The release has five artifacts: the blog post, a technical report, a "(Claude-written) protocol specification", code (a GPU prover, a fast C++ verifier, and a "provably correct" verifier in Lean), and Lean proofs with a visualizer. Everything is under Apache 2.0.
- Anthropic presents it as unfinished: "This research post is meant to share intermediate progress, and not a completed research agenda." The README says: "A research artifact: not maintained, not accepting contributions." TechCrunch reports there are "no plans to deploy it at Anthropic or any other lab."

## 2. How (plain terms)
- **Offline step:** the provider publishes a *commitment*, a short fingerprint that pins down one exact set of weights while keeping them hidden. It takes about 39 minutes per model and is good for about 16 million requests before the provider must commit again.
- **Online step:** for each request (prompt plus reply), the provider's GPU produces a proof file showing that "The committed model produces these output tokens when evaluated." Anyone holding the commitment, the prompt, and the reply can check the proof on an ordinary CPU.
- The claimed properties are completeness, soundness ("effectively impossible ... to produce a valid proof of a false statement"), zero-knowledge (nothing is revealed about the weights or about which experts ran), and succinctness. The architecture is **not** hidden.
- The engineering tricks: proving only the experts that actually ran (about 17B of 400B parameters per token), proving finished replies in batches after the fact, and streaming the weights so one 80 GB GPU plus about 290 GB of host RAM is enough.
- **Trust in the code:** the security properties are stated and proved in the Lean proof assistant. The slow Lean verifier is proved correct. The fast C++ verifier "carries no formal guarantee" and is only tested against the Lean one.
- The post says Claude produced many of the optimizations: "Claude has produced improvements on zkSNARKs for inference."

## 3. Who
- Authors: Roy Rinberg and Alex Allain (Anthropic); Alessandro Chiesa (EPFL, StarkWare), Miranda Christ (MIT, RESI), Rahul Dalal (Anthropic STEM Fellows Program, Succinct), Giacomo Fenzi (EPFL), Ben Mayer (Anthropic Fellows Program, MIT), and Guy Weissenberg (EPFL). The team is Anthropic's Frontier Red Team.
- Test model: Meta's Llama 4 Maverick (an open-weights model), using a third party's public 4-bit conversion. Anthropic did not prove a Claude model.

## 4. Why it matters
- It addresses a basic trust question: is the answer from the model you paid for, or from something cheaper swapped in by a router, the provider, or an attacker?
- Uses named by Anthropic: independent evaluators confirming they are testing the model actually being served; customers of third-party routing services; tamper detection on compromised servers (including "a more advanced model could run in place of the one that was authorized and present itself as the weaker model"); text provenance (for example, proving that a frontier security model really scanned a library); and checks for regulators that only approved models were served.
- Speed jump, by Anthropic's numbers: earlier open systems proved the same model at about 0.02 tokens/s (VerInf, which took 14.3 hours for 1,000 tokens and produced a 93.6 GB proof). FlashProve claims about 110 tokens/s with 19 MB proofs. Anthropic's conclusion is that overhead is "roughly 2 orders of magnitude ... much less than previously expected."
- Context: Anthropic says it met its Frontier Safety Roadmap goal (a provable-inference prototype by Sept 30, 2026) through a *separate* project that signs inference traffic and recomputes it on a trusted server. FlashProve pursues the same goal by a different, purely cryptographic method. A footnote says the goal was renamed "inference verification."

## Key numbers (all claimed by Anthropic, Llama 4 Maverick 400B MoE, 4-bit, one H100)
| Metric | Value |
|---|---|
| Prover throughput | ~110 tokens/s (batch of 24) |
| Proof size | 18.78 MB per 1,024-token request (~19 MB) |
| Cost vs. normal serving (vLLM) | ~72x GPU time per GPU (66–77 across runs); ~94x at the highest vLLM load; "~70-95x" overall |
| Online proving time | ~223 s for a batch of 24 requests |
| Offline commit | ~39 min, once per model; valid for ~16M requests |
| Verification | 17 s on 24 CPU threads; 21 s single-thread; no GPU |
| Client download | ~6.5 MB commitment plus one proof per request |
| Context limit | 1,024 tokens |
| Soundness bound (README) | false-accept probability about q/2^124 + 2^-101 after q hash queries |
| Integer vs. float divergence (repo) | top token differed at 6.81% of positions in one measurement |

## 5. What's contested / limits / counterpoint
**Strongest counterpoint: a valid proof says the reply matches *a committed* model, not *the* model you think it is.**
- An independent preprint, "Hollow-LLM Attack" (Gong, Liu, Li; arXiv 2607.28884, July 30, 2026; it predates FlashProve and covers ZK inference in general), argues that ZK inference "does not bind the effort expended to produce the output." A dishonest provider can keep the declared architecture and parameter count but use "ghost weights" so that it really does small-model work: "proof of correct inference is not proof of large-model execution." This is a preprint with no peer review, and I found no test of it against FlashProve.
- FlashProve's own docs concede the same gap: "**The provider chooses the model.** A yes does not say whose weights they are, that the shipped committer made the commitment, or which real model it is. A provider can commit to any model it likes, a small or degenerate one included." Users must "Get the commitment ID from a party you trust." So the identity guarantee depends on a trusted party vouching for the commitment.
- **There is some tension with the press framing.** TechCrunch writes that the system "would be robust against impostors ... even when the impostor is the lab that built and runs the model." That is true only once the lab's commitment is trusted. The lab could commit to a cheaper model from the start.

Other limits (Anthropic's own list plus the repo):
- Cost: a ~70–95x GPU-time overhead and post-hoc proving (guarantees arrive after the fact) mean it cannot yet prove every token at production scale. RuntimeWire says these limits help explain why no provider has deployed such proofs.
- Proofs cover an *integer* version of the model under greedy decoding. Real floating-point or sampled replies can diverge; the repo measured a 6.81% top-token mismatch in one test. The "clipped-gap" policy meant for real serving is much weaker: "with loose limits, close scores or flat (all-zero) weights almost any output passes."
- Only 1,024 tokens of context, while frontier chats run to hundreds of thousands of tokens.
- Weight hiding is expected but not shown in the shipped code: "We expect, rather than know, that the programs hide the weights ... few attacks were sought." At least 11 things are visible by design, and timing side channels are out of scope.
- The fast C++ verifier has no formal guarantee. The Lean statements still need manual auditing. Two published Fiat–Shamir attacks "have not been examined against this protocol."
- Regulatory use: even Anthropic notes that proving the hardware served inference "does not establish that the hardware is not, e.g., training on the side."
- Only MoE models are supported, and the architecture is visible.

Community reaction: muted. On HN, two submissions of the post scored 9 and 6 points with 0 comments, and the repo submission scored 1 point (Algolia API, checked Nov 4). Coverage is mostly restatement: TechCrunch, RuntimeWire, Unite.AI (an AI-written article), MarkTechPost (403, not read), and crypto outlets. A Helius CEO social post linking it to Zcash appears only as a paraphrase in TechFlow. I found no named cryptographer commenting.

## 6. What's next
- Anthropic says it plans to hide the architecture as well: "In future work we plan to also hide architecture details."
- It also wants longer contexts ("Ideally, this context length could be increased to full context windows") and porting to dense and other architectures. It invites others to "take it, and improve it."
- No deployment is planned (TechCrunch). Commercial competitor Attestable reports 53–77 tok/s on a dense 31B model with no open-source release (per Anthropic's post).

## Quotable lines
1. "When you talk to an AI model, you have almost none." (https://www.anthropic.com/research/provable-inference)
2. "proof of correct inference is not proof of large-model execution" (Hollow-LLM, https://arxiv.org/abs/2607.28884)
3. "A provider can commit to any model it likes, a small or degenerate one included" (FlashProve docs, https://raw.githubusercontent.com/anthropics/FlashProve/main/guide/known-limits.md)

## Writer cautions
- Date: the post shows Nov 2, 2026, while TechCrunch says "published Tuesday" (Nov 3). Use Nov 2, the date on the primary source.
- Do not say Claude's outputs are now provable. Only Llama 4 Maverick was proved.
- Attribute every number to Anthropic, and flag that none has been independently reproduced.
- Keep the pacing and regulation use cases to a neutral mention, or omit them (style guide: no politics).
- Skip the crypto-market angle (Zcash price move); it is financial.

## Also in this thread
- LEANGUARD: Lean-verified guardrails for tool-using agents (https://arxiv.org/abs/2611.02332), the same Lean-verification theme (a runner-up in topics.json).
- The invention pick, weight-space programming (https://rikiyat.github.io/blog/weight-space-programming/). If models can write weights, knowing *which* weights ran matters more. It also pairs with the Hollow-LLM "ghost weights" idea.
- Hollow-LLM Attack (https://arxiv.org/abs/2607.28884) as a one-line "but see" item.

## Unverified
- The technical report PDF was not read, including the 16M-request limit rationale and the post-hoc proving discussion.
- MarkTechPost returned 403 and was not read.
- The Helius CEO (Mert Mumtaz) Zcash remark is known only through TechFlow's paraphrase; I did not see the original post.
- The Attestable and VerInf figures come only from Anthropic's post; I did not check their sources.
- Unite.AI's statement that "AI systems under human direction wrote nearly all the software, Lean proofs, and documentation" is not confirmed in the pages I read. The post confirms only that Claude produced the optimizations and the protocol specification.
- I have no GitHub stars or issue activity (API access was blocked).
