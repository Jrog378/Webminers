# Dossier: research. "Memory Tax: Dissecting the Net Value of Agent Memory"

- **Primary:** https://arxiv.org/abs/2610.34073 (v1). Full text read at https://arxiv.org/html/2610.34073v1. Metadata re-checked through the arXiv API.
- **Status:** **Preprint, not peer-reviewed.** Submitted to arXiv 2026-10-25 (cs.CL). Listed on HF Daily Papers 2026-10-28 (HF API `submittedOnDailyAt: 2026-10-28`, 157 upvotes, submitted by `hexuan21`, the first author). OpenAlex shows 0 citations (W7224013415). No independent replication of *this* paper yet. An independent preprint (below) reaches the same headline result.
- **Authors:** Xuan He, Sining Zhoubian, Ruozhen Yang, Yuhao Wen, Zhineng Wang, Yuyang Hu, Ke Yang, Yuyu Zhang, Ping Nie, Jiawei Han, ChengXiang Zhai. Affiliations: UIUC (lead, including Han and Zhai), Tsinghua, Renmin University, Verdent.ai, U. Waterloo.
- **Project page:** https://hexuan21.github.io/MemoryTax/ ; **repo:** https://github.com/hexuan21/MemoryTax ; **results data:** https://huggingface.co/datasets/hexuan21/MemoryTax-Res

## 1. What
Products such as AI assistants and agents often add a "memory system". It rewrites past conversations into facts, summaries, graphs or hierarchies so the agent can recall them later. This paper asks how much that machinery actually adds compared with the simplest alternative: keep the raw conversation history, chunk it, and search it (naive RAG). Its finding is that many dedicated memory systems score **below** naive RAG, often while costing far more. The paper splits a system's net value into:
- **Memory benefit:** questions the memory system answers correctly and RAG misses.
- **Memory tax:** questions RAG answers correctly and the memory system misses, because evidence was lost, buried, or rewritten.
- Net value = benefit minus tax. When the tax is larger, memory ends up below RAG.

## 2. How
- **11 open-source memory systems in 4 families.** Flat store: A-Mem, SimpleMem, MemOS. Hierarchical/lifecycle: MemoryOS, LightMem, OpenViking. Graph-based: HippoRAG2, PlugMem, MAGMA. Trained policy: Mem-T, Memory-R2.
- **3 benchmarks:** LongMemEval-s (all 500 questions; a 100-question subset for GPT-5.6 Luna), PersonaMem-v2 (20% stratified subset), MINT-Eval (10% stratified subset).
- **3 answering models:** Qwen3.5-4B, Qwen3.6-27B, GPT-5.6 Luna (low reasoning effort). All systems share the same embedder (Qwen3-Embedding-0.6B) and reranker. Answers are graded by an LLM judge (Qwen3.6-27B).
- **The baseline:** "naive RAG" here is hybrid BM25 plus dense retrieval with a reranker over buffer-merged raw chunks, in 1-round and 2-round variants. That is a solid modern pipeline, not a bare vector search.
- **Fairness control.** "Retrieval Scope" sets each system's top-k so it sees at least as much of its own store as RAG (1-round) sees of the raw history. In practice this mostly *raised* top-k above the repository defaults, which generally *helped* the memory systems (Appendix B.3).
- **Diagnosing the tax:**
  - *Faithfulness:* answer using only the "gold" memory units, and hand-annotate facts traced from raw history into memory.
  - *Accessibility:* how many retrieval rounds it takes to recover the evidence, and how far query-evidence similarity drifts.
  - *Robustness:* build memory with one model, then answer with another.
  - *Benchmark headroom:* trivial baselines across more benchmarks.
- **Generalization:** experiential memory (ALFWorld, WebShop, Mind2Web, BigCodeBench, AppWorld, tau-Bench) and world-model / video memory.
- Scale, per the project page: "200+ experiment runs, 20B+ tokens, 10M+ LLM calls".

## Key numbers
- **90 of 99** memory-system results fall below naive RAG (2-round): 11 systems, 3 benchmarks and 3 backbones (project page). My own count of the positive deltas in Table 1 agrees: 9 cells beat RAG (2rd). The largest gain is +3.9 (Mem-T, MINT-Eval, GPT-5.6 Luna).
- **LongMemEval-s with GPT-5.6 Luna:** RAG (2rd) 90.0, full context 84.0, gold context 92.8. The best memory systems (A-Mem, SimpleMem) reach 84.0. OpenViking reaches 63.0 (−27.0).
- **OpenViking on LongMemEval-s with Qwen3.5-4B:** 31.8 vs RAG 72.2 (−40.4), the largest gap.
- **Information loss (Table 2, sampled facts, % with no loss):** MemoryOS 98.4, MAGMA 93.6, MemOS 85.8, PlugMem 79.6, SimpleMem 65.6, OpenViking 39.4. OpenViking has 38.0% of facts with no memory unit at all.
- **Trivial baselines on other benchmarks:** an IDF-keyword matcher passes 50% on some benchmarks, and RAG-Hybrid reaches about 70%.
- **Fix ("src-aug", from the project page):** also retrieve from raw history and rerank jointly. SimpleMem on LongMemEval-s with Qwen3.6-27B went from 73.6 to 82.8, and its tax fell from 12.0 to 5.2.
- **How often prior papers ran a RAG baseline:** of the evaluated systems' papers plus several other influential ones, only 3 (LightMem, PlugMem, Mem-T) reported a RAG baseline, and those setups were under-specified (Appendix B.2).

## 3. Who
- Lead lab: UIUC (Jiawei Han and ChengXiang Zhai, data mining and information retrieval).
- **Disclosure point:** PlugMem, one of the systems evaluated, comes from overlapping authors (Ke Yang, Xuan He, Jiawei Han, ChengXiang Zhai; ref "Yang et al. 2026a", TIMAN-group repo). PlugMem is one of the few systems that edges out RAG in some cells (+0.1 and +3.3 on MINT-Eval).
- Systems evaluated include industry projects: OpenViking (Volcengine) and MemOS (MemTensor).

## 4. Why it matters
- Agent memory is a fast-growing product category, and the project page charts a quarterly surge in agent-memory papers. The result means simply keeping raw history and searching it well is a hard baseline to beat, and often a cheaper one.
- The benefit/tax framing explains the result without calling memory useless. On a per-question basis, memory does solve some questions RAG misses. It also drops others.
- It is a methodological warning: most memory papers compared memory systems only against each other.
- The practical fix is easy to explain: always keep a path back to the raw source. It echoes the advice "keep the receipts".

## 5. What's contested / limitations / counterpoint
- **Independent corroboration (same direction):**
  - arXiv 2610.30755, "Is Complex Agentic Memory Always Needed? Naive RAG Is Stronger Than We Thought" (Bao et al., submitted 2026-10-22, preprint). Raw-RAG ranks first in 6 of 7 benchmark-model settings across LoCoMo, LongMemEval, MEME and MemoryAgentBench.
  - arXiv 2603.02473 (Yuan, Su, Yao, preprint). On LoCoMo, retrieval method matters far more than write strategy, and raw chunks with zero LLM calls "matches or outperforms" fact extraction and summarization.
  - These are separate groups, but all are preprints.
- **Counterpoint, nuance from other researchers:** arXiv 2608.15008, "Harness the Memory" (Huang et al., preprint), finds "no single substrate consistently dominates". Broad retrieval helps long-context factual QA but "can harm sequential decision-making".
- **Counterpoint from the paper's own data:** memory wins on some tasks. In experiential memory, distilling web-task traces into workflows "can outperform naive RAG", while tool use falls behind it.
- **Counterpoint, vendor view** (Vectorize/Hindsight, a memory vendor; attribute it to them): "RAG is often the wrong tool for memory because memory queries are not just document similarity problems." Memory systems argue they handle things like temporal reasoning and references that have no semantic overlap with the query.
- **Benchmark bias (the authors concede this):** current benchmarks are "retrieval-friendly", which leaves little headroom for memory's benefits. The result may say as much about the benchmarks as about memory. The paper argues that many real queries are retrieval-friendly too.
- **Limitations stated by the authors:**
  - The baseline selection is "representative rather than exhaustive", and further system-specific tuning "may yield better performance".
  - The benchmarks are static, offline and English-only.
  - No frontier model stronger than GPT-5.6 Luna (low).
  - Two of the three benchmarks are evaluated on stratified subsets (20% and 10%).
- **Other caveats:**
  - The LLM judge is Qwen3.6-27B, which is also one of the answering backbones. Judge-human agreement is reported in Table 5, but I could not extract the numbers for LongMemEval-s and MINT-Eval.
  - Reproduction code for each baseline is still "pending" (README TODO).
  - Results are tied to pinned repository commits, and vendors may have updated their systems since.
  - Press (explainx.ai) notes the preprint status, the judge choice, and the pending code.
- **No HN, Reddit or X discussion found.** HN Algolia shows no story for the arXiv ID or title. The authors' X post exists (linked from the README) but was not read.

## 6. What's next
- The authors promise to open-source all code. Results and intermediate data are already on HF; per-baseline reproduction code is pending.
- Proposed design directions:
  1. Make deviations "recoverable" by retrieving from source history alongside memory.
  2. Recursive memory: store past queries and retrieval paths. The project page calls the results mixed.
  3. Model future demand, treating memory "as an implicit recommendation system", as a middle ground between building memory ahead of time and just in time.
- Calls for harder benchmarks and for reporting naive RAG next to every memory result.
- Future scope: multimodal, latent and parametric memory.

## Quotable lines
1. "we find many dedicated memory systems underperform naive RAG in many cases, indicating a negative net value." (https://arxiv.org/abs/2610.34073)
2. "Memory process can reduce evidence accessibility by fragmenting, diluting, or rephrasing it, creating memory tax even evidence is not lost." (https://arxiv.org/html/2610.34073v1)
3. "From this view, memory can partly be seen as an implicit recommendation system that estimates future relevance of past information." (https://arxiv.org/html/2610.34073v1)

## Plain-language framing for the writer
A memory system is like a note-taker who reads your chat history and writes summaries. The summaries help sometimes, by linking scattered facts or inferring preferences. But some details get dropped, split across notes, or reworded so they can't be found. Searching the original transcript doesn't have that problem. In this study, the losses usually outweighed the gains.

## Also in this thread
- arXiv 2610.30755, "Is Complex Agentic Memory Always Needed? Naive RAG Is Stronger Than We Thought" (Oct 22, preprint). Independent, same conclusion.
- arXiv 2603.02473, "Diagnosing Retrieval vs. Utilization Bottlenecks in LLM Agent Memory". Raw chunks match costly write strategies.
- arXiv 2608.15008, "Harness the Memory". No single memory substrate wins; route by regime.
- Ties to the issue thread ("what an AI keeps"): the news item on website opt-outs and the Qwenputer item, where model state becomes exact RAM.

## Unverified
- HF Daily Papers *comments*: none were returned by the API or page fetch.
- Exact judge-human agreement values for LongMemEval-s and MINT-Eval (Table 5). Only PersonaMem-v2 = 100% (MCQ) was legible.
- The recursive-memory result being "mixed" comes only from the summarizer's reading of the project page. I could not see the paper's design-implication table (the reference was blank in the HTML extraction).
- The aiweekly.co article on 2610.30755 says "30.4x faster than EverMemOS". I did not confirm this in that paper's abstract.
- Semantic Scholar was rate-limited (429), so I have no citation data from it.
