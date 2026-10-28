# Dossier: research. AV-FABLE, "Audio-Visual Manipulation Forensics in Long-Form Videos"

Primary (abstract): https://arxiv.org/abs/2610.33413
Primary (full text, read in full incl. appendices A, C, F, G, H): https://arxiv.org/html/2610.33413v1
Submitted: Sat Oct 24, 2026, 03:01 UTC (v1 only). 41 pages, 10 figures. cs.CV (primary), cs.MM. License CC BY 4.0.
HF papers page: https://huggingface.co/papers/2610.33413

**Status label:** **arXiv preprint, not peer-reviewed, not replicated.** No venue is listed. **The dataset, code and weights are not released yet.** The paper says they "will be publicly released", and no repo or project URL appears on arXiv or HF. Every number below is an **author-reported result on the authors' own benchmark**.

---

## 1. What

- A **benchmark** (AV-FABLE = "Forensic Audio-visual Benchmark for Long-form Events") plus a **detection method** (NFSR = "Native Forensics via Separated Readouts").
- The task: in a real, minute-long video where only a few seconds were altered, find **when** the edit happened and **which stream** was altered (audio, visual, or both). The system also gives a whole-video real/fake score and a short explanation.
- Scale: **16,650 pristine/manipulated twin pairs**, which is **33,300 videos and 998.1 hours**. There are 10,306 audio events and 11,847 visual events across **27 editing configurations**.
- Sparsity: videos have a **median length of 88 s**. Edits cover a **median of 9.45%** of each fake video, and 91.5% of fakes have at most 30% altered time. The median event lasts about 9 s.
- Mix: 4,903 audio-only, 6,376 visual-only and 5,371 both-track fakes. In 561 both-track videos the audio and visual edits do not overlap in time.
- What gets edited: speech, environmental sounds, actions, objects and attributes. Operations are replacement, insertion, regeneration and removal.

## 2. How

**Building the data (pipeline "SEE-Forge"):**
- Source footage comes from existing research datasets: **ActivityNet** (third-person activities), **EPIC-KITCHENS-100** (egocentric kitchen footage) and **HDTF** (talking heads, used only as a held-out test).
- An "event catalog" is built for each video from captions, transcripts, acoustic onsets, motion and object interactions. Then **Gemini 3.7 Flash** acts as planner: it picks one real event and specifies the edit. A second model checks that the edit is feasible.
- Generators are named in Table 6. Video: MiniMax H3, LTX 2.3/2.5, Wan Fun/VACE, CogVideoX-Fun. Foley/audio: MMAudio, FoleyCrafter, HunyuanVideo-Foley, ThinkSound, Stable Audio, TangoFlux, AudioX, Dasheng AudioGen. Speech: Qwen3-TTS, F5-TTS, XTTS-v2. Four configurations are held out for OOD testing: Omni2Sound, Wan-FLF2V, OmniWeaving, and Wan2.2-TI2V-5B (TI2V route).
- Each edit gets 2 to 5 s of surrounding context. The result is spliced back into the original, with checks on motion continuity, visual anchors and loudness at the seams. SAM 2 masks keep visual edits local.
- **Pristine twins:** every fake has an untouched twin that went through identical cropping and export steps. A classifier given only file metadata (codec, bitrate and so on) reaches at most 54.6 AUROC, near chance. So the fakes do not give themselves away through file format.
- **Human review:** two reviewers independently checked all 22,153 events. Raw retention agreement was 96.4%, with Cohen's kappa of 0.841 for retention and 0.823 for explanation eligibility. A third reviewer settled the 7.7% of events where they disagreed. Reviewers did not re-draw the edit boundaries.

**Scoring:**
- "Native-track" evaluation: an audio prediction cannot get credit for a visual edit, even at the same timestamp. The headline metric is **AV-mAP**, the mean of audio mAP and visual mAP.
- Why it matters (paper): "A joint timeline can therefore reward a prediction for finding the right moment even when it identifies the wrong stream." Example from the paper: NFSR's visual predictions alone score 64.04 Joint-mAP, higher than every visual-only baseline, while missing every audio event.
- Thresholds are set once, at a 5% false-alarm budget on 256 real validation videos, and are never retuned for test sets.

**The key finding (the hook):**
- Asked directly (zero-shot), the audio-visual LLMs **Qwen2.5-Omni and Qwen3-Omni score 51 to 52 detection AUROC** (50 is a coin flip) and at most 0.30 mAP on localization. video-SALMONN 2+ scores 49.98.
- **Linear probes on the same models' frozen perception features reach 90.8 AUROC (audio) and 80.8 (visual).** The authors' reading: "manipulation evidence is encoded in these representations but not effectively exposed through language outputs."
- Fine-tuning Qwen3-Omni to output timestamps as text helps only partly: audio mAP 57.30, visual mAP 18.30.

**NFSR (the method):**
- Reads the **frozen** Qwen3-Omni audio and visual encoders, taking an intermediate layer ("detail") plus the interface layer that feeds the LM.
- Applies "host conditioning": FiLM modulation by the whole video's mean and standard deviation, so a local change is judged relative to its own video.
- Feeds **separate audio and visual temporal decoders** (ActionFormer-style pyramid, focal loss plus DIoU loss).
- Training: 256-dim readouts at 0.25 s resolution, 12 epochs.

## 3. Key numbers (all author-reported)

| Setting | NFSR AUROC | NFSR AV-mAP | Notes |
|---|---|---|---|
| In-domain | 96.04 | 91.30 (A 92.24 / V 90.36) | UMMAFormer on same features: 84.76 AV-mAP, 89.18 AUROC. Attribution F1 83.61. FAR 3.52% |
| OOD: source transfer (HDTF + TASLE subset) | 89.86 | 70.15 (A 98.37 / V 41.92) | TASLE-trained baselines lead V-mAP here because those videos match their training distribution |
| OOD: held-out generators | 79.40 | 49.12 | AV-FABLE-trained ActionFormer slightly beats NFSR on V-mAP |
| OOD: held-out TI2V route+generator | 84.56 | 68.07 (visual only) | ActionFormer (AV-FABLE) leads AUROC 85.46 and Attr. F1 but has lower AV-mAP, 61.57 |

- Zero-shot AV-LLMs: about 50 to 52 AUROC in every setting.
- False alarms: realized FAR is 2.97% to 4.67% across all sets without recalibration.
- Weak spot, in the authors' words: "Visual coverage under shift remains the main open problem: NFSR reaches 26.42–41.21 V-IoU".
- Robustness (Appendix F.5, 512-video subset):
  - 360p video cuts visual mAP from **53.1 to 10.9**.
  - H.264 CRF 35 cuts visual mAP from 53.1 to 26.0.
  - Audio noise cuts audio mAP from 85.6 to 29.1.
  - A missing modality leaves the other track intact.
- Ablations: removing intermediate-layer features costs 6.55 AV-mAP in-domain and 8.72 OOD. Removing host conditioning costs 4.73 OOD.
- Cross-talk test: on audio-only speech swaps, the separated visual head fires on 2.9% of both fakes and real twins, so it does not react to the soundtrack. A cross-modal variant fires on 4.6% of real twins but 11.8% to 15.1% of fakes.
- Explanations stay weak. Even when given the true interval, fine-tuned models get operation/target macro-F1 of only about 16 and 21 in-domain. They also abstain on 67% to 77% of manipulated inputs.

## 4. Who

- 11 authors, all at **Tsinghua University** except Kewei Zhang (Peking University). Equal contribution: Yuesheng Huang and Hoi Fan Au. Corresponding authors: **Jun Zhou and Xiu Li**.
- Closest prior work, all external:
  - **TASLE/MSLoc** (Feng et al., ICML 2026, arXiv 2606.02402): long untrimmed video forensics, **visual only**. AV-FABLE uses a source-disjoint TASLE subset as one OOD test.
  - **AV-Deepfake1M / 1M++** (Cai et al.): audio-visual localization, but in **short talking-head clips**.
  - **ActivityForensics**, **AVID** (audio-visual inconsistency grounding), and **FakeParts** (partial deepfakes, Aug 2025).

## 5. Why it matters

- Swapping a few seconds of a real video, such as a changed sentence, an inserted sound or an altered gesture, is a more realistic threat than a fully synthetic clip. A whole-video "real/fake" label cannot say where the lie is.
- A notable, easy-to-explain finding: off-the-shelf multimodal chat models **can't tell** when asked, but their internal features **do carry the signal**. If you ask the model, it guesses. If you read its features, you get about 81 to 91 AUROC.
- Independent support for the threat: FakeParts (arXiv 2508.21052) reports that partial deepfakes reduce human detection accuracy "by up to 26%" compared with traditional deepfakes.

## 6. What's contested / limitations (strongest counterpoint)

- **Independent counterpoint (Deepfake-Eval-2024, arXiv 2503.02857, different authors):** detectors that score well on academic benchmarks collapse on real deepfakes from the wild, with "AUC decreasing by 50% for video, 48% for audio, and 45% for image models compared to previous benchmarks." AV-FABLE is still a synthetic academic benchmark built with a known set of generators, so the 96 AUROC in-domain figure says nothing yet about real-world performance.
- **Authors' own admission on shortcuts:** "pipeline-specific cues cannot be fully excluded". Generator texture, resampling or synthesis residue inside the edited window could be what the detector learns, rather than semantic implausibility.
- **Big OOD drop:** AV-mAP falls from 91.30 in-domain to 49.12 on unseen generators. Visual IoU under shift is 26 to 41.
- **Fragile to ordinary compression:** 360p and heavy H.264 compression wreck visual localization. Real social-media video is routinely re-encoded.
- **Labels mark where edits were applied, not where they are perceptible.** Reviewers did not re-draw boundaries.
- **Speech replacement, the most "deepfake-like" case, is small:** 518 ActivityNet examples, plus an audio-only supplement of 716 (built on 242 real hosts).
- **Self-built benchmark, self-proposed winner:** NFSR is both designed and evaluated by the benchmark's authors, and has no external replication.
- **Not yet released,** so nobody can check it. Source media will not be redistributed where licenses forbid it; the release will instead offer annotations, timestamps and "reconstruction utilities".
- **Community reaction: none found.** No HN thread (Algolia search). The HF page shows no comments in the fetched HTML. Reddit was not reachable. No press coverage found. Semantic Scholar was rate-limited. OpenAlex returned no match. Citations are expected to be zero at 4 days old.

## 7. What's next

- The authors list next steps: "Extending the benchmark to broader real-world editing processes, refining perceptual boundary annotations, improving robustness to media corruption, and developing more faithful evidence-grounded explanations".
- Public release of the dataset manifest, splits, evaluator with unit tests, code and weights is promised, with no date.
- Dual-use stance: the authors say they "do not provide end-to-end pipelines intended for impersonation, fraud, or other malicious uses".

## Quotable lines

1. "A few manipulated seconds can change the meaning of an otherwise authentic video." (https://arxiv.org/html/2610.33413v1)
2. "A joint timeline can therefore reward a prediction for finding the right moment even when it identifies the wrong stream." (https://arxiv.org/html/2610.33413v1)
3. "manipulation evidence is encoded in these representations but not effectively exposed through language outputs." (https://arxiv.org/abs/2610.33413)

## Also in this thread

- TASLE: Explainable Forensics of Manipulated Segments in Untrimmed Long Videos (ICML 2026). https://arxiv.org/abs/2606.02402
- Deepfake-Eval-2024: in-the-wild benchmark showing large detector drops. https://arxiv.org/abs/2503.02857
- FakeParts: partial deepfakes are harder for humans. https://arxiv.org/abs/2508.21052
- AV-Deepfake1M (ACM MM 2024), audio-visual localization in talking-head clips. https://arxiv.org/abs/2311.15308
- Fits the issue thread "checking AI output rather than trusting it": the paper's own finding is that you shouldn't trust a multimodal model's verbal answer about authenticity.

## Writer cautions

- Say "preprint" and "the authors report", and don't call it peer-reviewed.
- Don't say the data is available. It is promised only.
- AUROC 50 = chance. Translate it this way: "the chat models did no better than a coin flip when asked."
- Don't imply it works on real-world viral deepfakes. It was tested only on synthetic edits built by the authors, and the closest real-world check (TASLE subset, HDTF) is still academic data.
- Generator names such as "Gemini 3.7 Flash" and "MiniMax H3" are as written in the paper. They are not independently checked.

## Unverified

- The HF upvote count (32) and comment count (1) come from the scout. I could not see them in the fetched HF HTML.
- Whether a GitHub repo or project page exists. None is linked on arXiv or HF as of Oct 28.
- Citing works: Semantic Scholar was rate-limited (429).
