# Dossier: news. Frontier AI labs say their models refuted the Exponential Time Hypothesis

Window: Sat Oct 24 to Tue Oct 27, 2026. Claim IDs (nX) refer to claims-news.json.

## Primary-source status (read this first)
- **OpenAI blog post** (openai.com/index/building-scientific-understanding-with-academic-communities/): **NOT fetched**. It returned HTTP 403. Nothing in this dossier quotes it directly.
- **Anthropic formal-math/eth**: **fetched**. I read the README (github.com tree page and raw README) and extracted the full text of `paper.pdf` locally. This is the main primary source.
- **OpenAI preprint** (github.com/openai/math, preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf): **fetched** and text extracted. This is a usable OpenAI primary source for the ETH claim. It does not cover the blog post's "academic program" details.
- **The Verge** (theverge.com/.../openai-eth-kaseya-science-math-physics): **NOT fetchable** because the domain is blocked for the fetch tool. I substituted Scientific American and Forklog for the second outlet. TechCrunch was read.
- The fallback (the Anthropic IoT story) is **not needed**, since primary sources were fetched.

## 1. What
- Both labs separately claim an algorithm that solves 3-SAT (and in fact counts the solutions) in subexponential time, 2^{o(n)}. That refutes the Exponential Time Hypothesis (ETH), the 1999 conjecture of Impagliazzo and Paturi that 3-SAT needs 2^{Ω(n)} time (n1, n14).
- OpenAI's ETH result was one of three big releases on Oct 26. The other two were Kakeya in all dimensions and the "existence" half of Yang-Mills, per Scientific American (n17, n27). The academic program has a different review track per field. Math results were posted openly. For ETH there is an outside working group (Impagliazzo, Paturi, Williams) plus a planned conference. Physics goes to experts first, a group under David Gross. Forklog and TechCrunch report this; it is not read from OpenAI directly (n23, n30, n31).
- Anthropic's paper, "A 2^{o(n)} Time Algorithm for 3-SAT", is credited to "Claude, Anthropic" and dated Oct 26, 2026. It posted within hours of OpenAI's announcement (n4, n18).

## 2. How
- **Anthropic:** The method uses tensor-network contraction, a grid/swap decomposition, and grouping nodes into K balanced classes, plus sparsification. The main theorem is a #k-SAT bound of 2^{O(min{k^2 n log log n/√log n, km/√log m})}, and for 3-SAT the README gives 2^{O(n log log n/√log n)}. The paper has a Lean 4 + Mathlib formalization (Lean v4.33.1) of two statements, `ETHIsFalse` and `MainTheorem`. Those use only the three standard axioms and are accepted by Lean's kernel, by leanchecker, and by the independent kernel nanoda via Comparator (n9). The build takes about 8 minutes on 24 vCPUs and peaks at about 7 GB.
- **OpenAI:** The preprint takes a different-looking route: "shared linear summaries", low-degree replacement forms, and counting common zeros of sparse polynomials over F2. The runtime is (n+m)^{O_k(1)} 2^{O_k(n log log n/√log n)} with polynomial space (n14). The preprint is dated 17 Oct, revised 25 Oct (n15). I found **no mention of Lean in OpenAI's paper text**. The visible part of its `build/` folder holds only .tex files. The listing was truncated, so I cannot rule out Lean files. Forklog reports Lean formalization on Oct 19 (n29). Treat that as unverified.

## 3. Who
- Anthropic: an "internal research Claude model". Anthropic researchers helped only with the presentation. Mathematician Levent Alpöge is the public face (n4, n18).
- OpenAI: an "unnamed internal OpenAI model" (n16). Dan Roberts is OpenAI's science lead, per TechCrunch.
- Outside experts: Ryan Williams (MIT), and Russell Impagliazzo and Ramamohan Paturi (UC San Diego, the authors of ETH), are vetting OpenAI's ETH result. David Gross leads the physics group (n30).

## 4. Why it matters
- ETH is a standard hardness assumption. Claude's own literature search found **800+ papers** with results that hold only under ETH or something that implies it (n11). TechCrunch says many papers "will need to be revisited" (n25).
- Anthropic's paper says that refuting ETH also refutes SETH. It does **not** refute the Orthogonal Vectors hypothesis, which supports much of fine-grained complexity.
- The previous deterministic record was O(1.328^n) (n12). Moving from "exponential with a smaller base" to "subexponential" is a qualitative change.
- On AI and science, this may be the first time an AI model found a result of this size with "no human input" (Anthropic's claim, n4), and that the result also comes with a machine-checked proof.

## 5. What's contested / caveats (carry these into the writeup)
- **Not practical.** In Anthropic's own words, the bound beats brute force on formulas with m=5n clauses only for n > 10^10000, and n alone needs a far larger threshold (the PDF superscripts render poorly). For comparison, brute force is already impractical at n = 100 (n6, n2). SciAm says OpenAI's algorithm is "just a tiny bit faster than exponential" (n26).
- **Not P vs NP.** Both Anthropic's paper (n13) and the coverage say this result does not settle P vs NP. Williams says only that people should give "a little more weight" to P = NP (n21).
- **Machine-checked does not mean human-checked.** This is the strongest counterpoint, and it comes from Anthropic's own Appendix E (n7, n8, n10):
  - "no person is known to have checked" the Lean development, which AI models wrote and other instances of the same models reviewed.
  - No machine can check whether the Lean statements actually say "ETH is false". A human has to read and judge that file.
  - The Lean proof differs from the printed proof, and only AI models compared the two.
- **Peer review:** none for either paper. Both are preprints or research artifacts. OpenAI's outside reviewers say their participation "should not be taken as an endorsement" (n30).
- **Priority dispute.** Alpöge suggested OpenAI built on "pre-existing work". TechCrunch does not verify this (n18). Anthropic dates its discovery to Oct 16, and OpenAI's preprint is dated Oct 17. I found no OpenAI response.
- **Release norms.** Williams earlier called OpenAI's September mass release a "DDOS attack on mathematicians" (n24). SciAm notes the model is proprietary and the methods are undisclosed (n28).
- **Cryptography.** In principle, faster SAT algorithms could weaken some key sizes. Per Williams, OpenAI "checked" and was "reasonably confident" there were no breaks (n22). That is a secondhand report of OpenAI's own check.
- **Expert view of the math.** Williams says there are "two or three alien-looking parts" and that OpenAI's algorithm can't "possibly be the best" (n19, n20). So the scrutiny so far is of OpenAI's proof. I found no outside expert comment on Anthropic's proof specifically.

## 6. What's next
- Williams, Impagliazzo and Paturi have an open letter asking for feedback, and Williams is pushing for an OpenAI-funded conference (n23).
- The Anthropic paper has a Hexagon (hexagonmath.org) link "to appear", per the README.
- The working groups' verification is pending. SciAm reports that the advisory group AGMAI wants the Yang-Mills paper released.
- Human checking of the Lean statement files is the obvious next step. The README keeps `MainResults.lean` short so that "a reader can check this".
- A simplified exposition of OpenAI's proof by Shiva Kintali was mentioned on John D. Cook's blog. I did not read Kintali's piece.

## Key numbers
- 2^{o(n)}: the new runtime class, against the prior record of O(1.328^n) (deterministic 3-SAT).
- Anthropic: found Oct 16, 14M output tokens, "no human input".
- 800+ papers rely on ETH or stronger hypotheses (Claude's literature search).
- n > 10^10000: the point where Anthropic's bound first beats brute force on m=5n formulas.
- The Lean build takes about 8 min on 24 vCPUs, about 7 GB, and spans 1,050 Lean modules.
- OpenAI's repo holds 721 manuscripts in 373 families, and about 42% of top-line results are formalized (repo README).

## Quotable lines
1. "The result is purely asymptotic and says nothing about solving formulas in practice." Anthropic README, https://raw.githubusercontent.com/anthropics/formal-math/main/eth/README.md
2. "there are two or three alien-looking parts" (Ryan Williams, MIT, on OpenAI's proof). https://techcrunch.com/2026/10/27/frontier-ai-labs-say-their-models-refuted-the-exponential-time-hypothesis-what-does-that-mean/
3. "at the time of writing no person is known to have checked it" (Anthropic paper, Appendix E, on its Lean proof). https://raw.githubusercontent.com/anthropics/formal-math/main/eth/paper.pdf

## The counterpoint (one paragraph for the writer)
Lean guarantees the proof follows from the stated theorem. It cannot guarantee that the stated theorem means "ETH is false". Anthropic says so plainly: AI models wrote the Lean development, other instances of the same models reviewed it, and no human is known to have checked it. OpenAI's preprint mentions no Lean formalization in its text. Its outside reviewers, including the two people who proposed ETH, say their involvement is not an endorsement. Even if everything holds, the speedup only appears at sizes beyond 10^10000 variables. So the honest framing is "a big theoretical claim, unusually well-instrumented, still awaiting human verification". It is not "AI solved a famous problem".

## Unverified (do not state as fact)
- That OpenAI's ETH proof was formalized in Lean on Oct 19. This is from Forklog only, it is absent from OpenAI's paper text, and the build/ listing was truncated.
- Anything in OpenAI's blog post, including the exact name and structure of the "academic program". The page returned 403.
- Alpöge's "pre-existing work" allegation, which I have only as TechCrunch's paraphrase. I did not find his original post.
- The Verge's framing and expert quotes, since the page could not be fetched.
- The exact thresholds besides 10^10000. The PDF superscripts render ambiguously: one bound reads as roughly 10^(10^8), and a search snippet's "10^108" is a mis-parse.
- Whether the "slightly weaker Lean statement" comment on John D. Cook's blog refers to OpenAI or Anthropic. It is a blog commenter, not verified.
- No HN thread was found for this story.

## Also in this thread
- Anthropic's Lean file `MainResults.lean` is kept short so humans can audit it. This ties to the issue thread, "checking AI output rather than trusting it".
- OpenAI's github.com/openai/math repo: 721 AI-generated manuscripts at mixed verification stages.
- Context: an earlier, unrelated 2021 arXiv preprint by G. Camerani also claimed "#ETH is False" (arXiv:2102.02624). ETH was still treated as open afterwards, a reminder that such claims need checking. I did not find a published refutation of that preprint.
- SciAm's companion piece on OpenAI and Yang-Mills ("OpenAI just scooped human researchers on a million-dollar quantum math problem"). Not read.

## Sources read
- https://github.com/anthropics/formal-math/tree/main/eth
- https://raw.githubusercontent.com/anthropics/formal-math/main/eth/README.md
- https://raw.githubusercontent.com/anthropics/formal-math/main/eth/paper.pdf (full text extracted)
- https://github.com/openai/math
- https://github.com/openai/math/tree/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026 (and build/)
- https://raw.githubusercontent.com/openai/math/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf (full text extracted)
- https://techcrunch.com/2026/10/27/frontier-ai-labs-say-their-models-refuted-the-exponential-time-hypothesis-what-does-that-mean/
- https://www.scientificamerican.com/article/dueling-proofs-from-openai-and-anthropic-astound-scientists/
- https://forklog.com/en/openai-says-its-ai-refuted-the-exponential-time-hypothesis/
- https://www.johndcook.com/blog/2026/10/27/eth-false/
- https://arxiv.org/abs/2102.02624
