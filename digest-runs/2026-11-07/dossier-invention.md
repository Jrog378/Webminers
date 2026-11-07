# Dossier: invention — Linum P-JiT 21K (text-to-image model trained for about $21K, Apache 2.0)

Window: Wed Nov 4 – Fri Nov 6, 2026. Primary source dated **November 4, 2026**: https://www.linum.ai/field-notes/pjit-21k
Status: **company release / blog post.** No paper, no peer review, no outside replication. All cost and efficiency numbers come from Linum. No press coverage found. The only outside reaction is the HN thread.

Sources read in full:
- Linum's field notes, "Training a Text-to-Image Model for $21K" (Nov 4): https://www.linum.ai/field-notes/pjit-21k
- GitHub README: https://github.com/Linum-AI/pjit-21k (read via raw.githubusercontent.com/Linum-AI/pjit-21k/main/README.md)
- Hugging Face model card: https://huggingface.co/Linum-AI/pjit-21k
- Linum's earlier post, "Pyramid-JiT: Low-Res Drafts, High-Res Images" (Oct 6, 2026). This is where the 11x and 4x claims come from: https://www.linum.ai/field-notes/pyramid-jit
- Linum's data-filtering post (Aug 26, 2026): https://www.linum.ai/field-notes/data-filtering-gen-video
- Show HN thread, 270 pts, 29 comments: https://news.ycombinator.com/item?id=50368208
- Outside context from arXiv abstracts: JiT (2511.13720), MicroDiT "Stretching Each Dollar" (2407.15811), PixArt-alpha (2310.00426), FDFO (2603.12893)

NOTE for the editor: `https://hn.algolia.com/api/v1/items/50368208` first returned the Inkling 2 Small thread, which looks like a cache mix-up. A second fetch and the HN Firebase API both confirm that 50368208 is the Linum Show HN post: "Show HN: A decent text-to-image model trained for ~$20K (Apache 2.0 Weights)", by schopra909, 270 pts. The 270-point figure in topics.json is correct.

---

## 1. What
- An open-weights text-to-image model called **P-JiT 21K** (Pyramid-JiT). It has **2.18B parameters** at sampling and uses a frozen **Qwen3.5-4B** text encoder. Linum calls it a "Research release · Apache 2.0", with code on GitHub and weights on Hugging Face.
- Linum frames it as an experimental side result on the way to its next video model, Linum v3: "this $21K training run is a proof-of-concept along the way to our next video model."
- The HF card warns: "Research checkpoint: this is an experimental research artifact, not a production model … You should expect rough edges."
- It works at five sizes of about 1 megapixel (1024x1024, 864x1216, 1152x864, 1248x832, 1280x720).

## 2. How
- **No VAE ("pixel-space").** Most image models first squeeze the image with a separate compressor, a VAE, and generate in that compressed space. P-JiT drops the VAE and generates raw pixels directly in big 32x32-pixel patches. It builds on the JiT idea from Li & He's paper "Back to Basics: Let Denoising Generative Models Denoise" (arXiv 2511.13720, Nov 2025), which showed that "simple, large-patch Transformers on pixels can be strong generative models: using no tokenizer, no pre-training, and no extra loss."
- **Fewer tokens, so cheaper attention.** Linum v2 and "most models (e.g. FLUX-2)" use 16x16 token reduction. P-JiT uses 32x32, which "implies a 4× reduction in attention context-window." A 1024² image becomes 1,024 image tokens plus 256 text tokens.
- **"Pyramid" readouts.** Extra heads partway through the network predict the final image at quarter and half resolution. This gives the early layers a stronger learning signal and "helps accelerate convergence." There is also a PixelREPA head aligned to DINOv3-L. These training-only heads add about 0.24B parameters and are dropped at sampling.
- **Training recipe (company-reported).** About 610M samples at 512², then about 50M at 1024², on 64 H100s (8 nodes). Noise-schedule curriculum, widened after 80M samples. Muon plus AdamW optimizer. Post-training uses a variant of FDFO (Finite Difference Flow Optimization, arXiv 2603.12893, Mar 2026) "with JEV-Image and human-in-the-loop judges."
- **Prompting.** The model was trained on dense captions of 50 to 80 words, and "short prompts give noticeably worse images." By default, `generate.py` has **Claude Opus 5.5 via OpenRouter** rewrite your prompt, which needs an API key. `--no_upsample` turns this off. Practical point: the default workflow depends on a paid, closed model.
- **Hardware to run it.** A CUDA GPU. The weights are 8.7 GB in fp32 and the text encoder is 8 GB in bf16.

## 3. Who
- **Linum**, which describes itself as "a 2-person research lab training our own generative video models entirely from scratch." The two are the brothers **Sahil Chopra and Manu Chopra**, both listed as Co-CEOs. The README says: "Linum is a team of two brothers building a tiny-yet-powerful AI research lab."
- Authorship disclosure: per Linum, Claude Opus 5.5 wrote the GitHub repo and the HF model card from Linum's internal repo, and helped build the gallery and diagrams. Linum wrote the blog text and did the training.
- Earlier work in the same series: Linum v2 (an open-weight video model shipped in January 2026), JiT-DDT, and P-JiT (Oct 6, 2026).

## 4. Why it matters
- It shows that a two-person team can train a usable 2B image model from scratch on a small compute bill and open-source it under a permissive license (Apache 2.0).
- Linum's stated aim is cheaper video. Attention cost grows with the square of token count. Linum says "a short 720p, 5 second video cost 110K tokens" for Linum v2, and it aims for "a 10× improvement in speed and cost" in Linum v3. In the founders' words, image models are the step where a model learns "nouns before they learn verbs".
- An HN commenter (tensor) argued that efficiency work is understudied at big labs. Another commenter disputed this (see section 5).

## 5. What's contested / counterpoint
**What the $21K covers (company-reported).** Linum's table:
- Pretraining: 8,139 H100-hours, $20,348
- Post-training: 276 H100-hours, $690
- Total: **8,415 H100-hours, $21,038**, "priced at $2.50 per H100-hour" and "restarts included"

That is a GPU-rental figure for the final run only. It does **not** count:
- the frozen Qwen3.5-4B text encoder, which someone else pretrained
- data collection and filtering (the August post describes filtering "tens of billions of images and videos" and running EAST "for weeks … across a massive cluster of CPUs")
- captioning of 660M images
- earlier ablation runs, the human judges, or salaries

The writer should say "about $21K **of compute for the final training run**, by the company's own accounting."

**The efficiency numbers are measured against Linum's own older model, not outside models.**
- The "11×" comes from the Oct 6 post: P-JiT "reaches Linum v2's FD-DINOv2 on 11.3× fewer training samples." FD-DINOv2 is a measure of how close generated images are to real ones. It was scored at 256² against 30K "in-domain" real images, and only four Linum v2 checkpoints survive.
- On the same earlier checkpoint, Linum's own prompt-following benchmarks went the other way: "Surprisingly, Linum v2 beats pixel-space models in prompt-following benchmarks" (GenEval 0.855 for v2 vs 0.817 for P-JiT; counting 0.80 vs 0.56).
- **The $21K model has no standard benchmark scores** (no FID, GenEval or DPG). It is judged by its validation-loss curve and a 249-image gallery picked by the company.

**$21K is cheap, but not a first.** Earlier published low-budget text-to-image runs:
- PixArt-alpha (2023) reported "$26,000 vs. $320,000" against Stable Diffusion v1.5, at up to 1024px.
- Sony's MicroDiT paper (2024) reported a 1.16B model trained for "only $1,890".

Avoid "cheapest ever" framing. Linum itself makes no such claim. Its contribution is an open pixel-space recipe plus Apache weights.

**Limitations Linum states itself:**
- "This model was not trained with images of rendered text … so it cannot write text or generate posters." This was a deliberate data filter.
- "There are a few areas where the model struggles: full body, many entities (e.g. 6 cars, crowds), multi-person interactions, and world knowledge." The README gives examples: "six strings on a guitar, the dots on a die".
- Linum says a larger model (e.g. 7B) plus more post-training "would likely mitigate these issues."

**Community objections (HN, Nov 5–6):**
- *Undisclosed training data* was the most repeated question:
  - "What open source datasets did you use? Or did you pirate like the big labs ?" (robotswantdata)
  - "Where do people get 660 million labelled images from?" (jcattle)
  - mkl asked about "the 660M training images and prompts".
  - We found no answer from the authors in the thread. Neither the blog nor the model card names the data sources.
- *Quality:* "It does however seem to struggle with a lot of the typical t2i models struggle with. Over smoothing, lots of uncanney shine, mangled limbs" (gunalx). "Except almost every hand is wrong" (mkl).
- *Cherry-picking:* "Looking at the failures, I wonder how much cherry picking went into the showcase." (micw)
- *Recipe:* jjcm asked for the full training recipe. The release has model and inference code. Training-objective reference code is in a separate pyramid-jit repo, per the README.

**Small inconsistency.** The blog's block diagram gives the trunk FFN inner width as "5,376". The README's architecture table says "SwiGLU 7,936". The writer should not cite either.

## 6. What's next
- Linum says this run is a stepping stone to **Linum v3**, its next open-weight video model, aiming for 10x lower speed and cost. The Oct 6 post promised more research checkpoints.
- Linum: "We'll dive more into these concerns and our full post-training stack in the coming weeks."
- Possible larger model: Linum suggests "a larger model (e.g. 7B parameters)" would fix the weak spots. That is a suggestion, not an announcement.
- Community ideas: quantization and running in the browser with WebGPU (gigel82), and a $1K training "arena" (fzysingularity).

---

## Key numbers (all company-reported unless noted)
| Item | Value | Source |
|---|---|---|
| Total compute cost | $21,038 (8,415 H100-hours at $2.50/hr) | Linum blog |
| Pretraining / post-training | $20,348 (8,139 h) / $690 (276 h) | Linum blog |
| Hardware | 64x H100, 8 nodes | Linum blog |
| Training samples | ~610M at 512² + ~50M at 1024² = ~660M | Linum blog |
| Params | 2.18B at sampling (~2.42B in training), plus a frozen 4B text encoder | Linum blog |
| Attention context | 4x smaller than 16x16 patching (32x32 patches) | Linum blog |
| Convergence | 11.3x fewer samples to match Linum v2 FD-DINOv2 (on the earlier 138M-sample P-JiT) | Linum Oct 6 post |
| Weights size | 8.7 GB fp32 (DiT) + 8 GB text encoder | GitHub README |
| Team | 2 people | Linum blog |
| HN | 270 pts, 29 comments (independent count via HN API) | HN |
| HF (Nov 7) | 122 downloads, 39 likes; repo created 2026-11-03 | HF API |
| Comparison: PixArt-alpha (2023) | ~$26,000 training | arXiv 2310.00426 |
| Comparison: MicroDiT (2024) | $1,890, 1.16B params | arXiv 2407.15811 |

## Quotable lines
1. "We're a 2-person research lab training our own generative video models entirely from scratch." (Linum) https://www.linum.ai/field-notes/pjit-21k
2. "You have to learn nouns (people, places, things) before you can learn verbs (actions, movement)." (Linum) https://www.linum.ai/field-notes/pjit-21k
3. Counterpoint from HN: "Looking at the failures, I wonder how much cherry picking went into the showcase." (micw) https://news.ycombinator.com/item?id=50368208

## Writer guidance
- Say: "Linum says the final training run cost about $21,000 in rented GPU time."
- Don't say: "built for $21K" with no qualifier.
- Attribute "4x" and "11x" to Linum, and note the comparison is against its own previous model.
- Mention that it cannot render text and that the training data sources are not disclosed.
- Mention that the default prompt helper uses Claude via a paid API (it can be turned off).

## Unverified
- Where the 660M training images come from, and their licensing. Not disclosed. Community asked, no answer found.
- Image quality relative to other open models such as FLUX-2 or SD-class models: no head-to-head benchmark exists for the 21K checkpoint.
- Whether $2.50/H100-hour matches what Linum actually paid, or is a notional market rate. The blog says "priced at".
- The actual date and timing of GPU use: the HF repo was created Nov 3 and the blog is dated Nov 4. The founder's HN post says "This past month we were pressure testing".
- Independent reproduction of the $21K figure: none found. Web search found only Linum's own pages.

## Suggested "also in this thread"
- The research pick, "Think Less, Locally" (making reasoning models stop early), and the news pick, Inkling 2 Small (open weights after testing). Both fit the "AI getting cheaper" thread.
- Background: Karpathy's nanochat, cited on HN as training GPT-2-level text for about $50 (https://github.com/karpathy/nanochat). Only the HN comment was read, not the repo.
- Background: MicroDiT ($1,890, 2024) and PixArt-alpha (~$26K, 2023), to show the trend of cheaper image models.
