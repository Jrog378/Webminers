# Dossier: invention — Qwenputer (RISC-V CPU compiled into Qwen3.5-4B)

Window: Wed Oct 28 – Fri Oct 30, 2026. Researched 2026-10-31.
Primary: https://divagr.com/blog/qwenputer (Divyansh Agrawal). Repo: https://github.com/divagr18/qwenputer (README read via raw.githubusercontent.com). Model: https://huggingface.co/divagr1925/Qwen3.5-4B-Qwenputer.

## Status and honest caveat (must appear in copy)
- This is a **hobby / demo project by one person**, not a product and not peer-reviewed research. The author on HN: "I just do these during my free time." The blog calls it "a pretty fun experimental model" and "very much an experiment".
- No paper, no independent replication. All benchmark numbers are **self-reported** by the author, on small sets (README: "Greedy decoding, 40 problems per set", so 97.5% = 39 of 40).
- It is slower than ordinary computing ("a big calculation takes seconds rather than milliseconds"), the checkpoint is twice the size of base Qwen (18.8 GB), and it needs a custom driver (RvChat) rather than a plain `generate()` call.
- **Date note:** the blog post is dated 22 October 2026 and the HF model was created 2026-10-19 — before the window. It entered the window as a Hacker News front-page item on 2026-10-29 (695 points) and on Lobsters the same day. Frame it as "this week's most discussed build", not "launched this week".

## 1. What
A stock Qwen 3.5 4B language model with a 32-bit RISC-V CPU (RV32IM + Zba + a small bignum unit) added as 11 extra layers in front of Qwen's 32. The CPU uses the model's own Gated DeltaNet (GDN) layers as RAM. It runs arithmetic, C and MicroPython in the model's forward passes. Experimental extras: an in-weight "filesystem" (up to 512 files, ~53,000 tokens, persistable between chats) and an "NPU" build that runs Karpathy's 260K-parameter stories model as a C program on the CPU (about 41 seconds per story token).

## 2. How (plain-language)
- Qwen 3.5 uses Gated DeltaNet, a linear RNN, in 3 of 4 attention layers; each head keeps a fixed-size state matrix.
- Normally the gate makes old contents fade and writes blend. Set gate = 1 (nothing fades), write strength beta = 1 (full overwrite), and use one-hot keys (point at exactly one row): each write overwrites one row exactly and each one-hot query reads it back exactly. That is RAM.
- No training: "a compiler sets every weight directly." Each CPU step becomes attention heads (lookups), feed-forward units (arithmetic as exact lookup tables) and DeltaNet heads (memory).
- The CPU runs as the model decodes: each instruction is a few generated tokens (ADDR, VAL, STEP) — the trace is the execution log.
- Qwen calls it through its normal tool-call format, but the author says nothing outside the model executes the call; the compiled layers write the `<tool_response>` themselves. Qwen's original weights are unchanged; the computer is added in extra dimensions and layers.
- Analogy for readers: it is like teaching the model's scratchpad to stop "smudging", so it can hold exact numbers like computer memory.

## 3. Who
Divyansh Agrawal (GitHub divagr18, HF divagr1925), independent; describes it as spare-time work. Code MIT, weights Apache-2.0 (derivative of Qwen/Qwen3.5-4B). HF model: 102 likes, 572 downloads at time of check (API, 2026-10-31).

## 4. Why it matters
- A concrete, inspectable demonstration that a language model's internal state can be made to hold exact values — a vivid way to explain what an RNN-style "memory" inside a model is.
- Counter-example to "LLMs are inherently non-deterministic" (HN commenter jwitthuhn).
- Arithmetic: author reports Qwen 4B on DeepMind mul_big going 55% → 97.5% (Python tool: 100%); NUPA long-integer 48.6% → 100% (same as Python tool; this NUPA figure is from the earlier CHIP-8 version per README).
- Exactness check: "about 230,000" CPU output positions replayed against a reference machine, zero mismatches; passes official riscv-tests; 18 million instructions free-running without error (author claims).
- Author pitches it as an AI-safety testbed (follow-up posts on hiding reasoning in RNN state and on in-weight monitors) — not researched in depth here.
- It already spawned derivatives inside the window: nesformer (NES 6502 CPU in Qwen weights, reuses Qwenputer's compiler).

## 5. What's contested (top objections)
- **"No external runtime" overstated (strongest counterpoint, HN user gcr):** a custom host runtime loads firmware, boots the CPU, compiles/loads the program, and skips Qwen's own layers while the CPU runs; gcr calls the "not a plugin" framing "a little dishonest". The blog itself concedes RvChat is needed and it "doesn't run with a plain generate() call yet". (Note: the README says the older CHIP-8 version runs under stock `model.generate()`; the RISC-V version does not.)
- **Why not just use a real computer / tool call?** Lobsters' top comment (xal, 23 points): CPU and Qwen are separate networks combined so each wastes compute in the other's mode; "you could get the same result by using a normal RISC-V emulator". Lobsters (schuelermine) and HN (andai, lumost, aerodexis) ask the same. Reply in thread (pralkarz): the benefit is "the joy" of building it.
- **Sub-100% scores:** HN gavinray: "how a calculator that isn't 100% accurate is useful?" The CPU's output is reported exact, so misses presumably come from Qwen's use of it (e.g. not calling it, or mis-transcribing) — this explanation is my inference, not stated by the author; README notes Qwen "tends to re-verify exact results" in the CHIP-8 version.
- **Not new in principle:** blog itself cites Schlag, Irie, Schmidhuber (ICML 2021) on delta-rule linear attention as fast-weight memory. Prior compiled-computer work: Loom (Turkcan, arXiv 2604.08816, Apr 2026: C programs in a looped transformer with analytically derived weights, 22-opcode ISA in 8 layers); Percepta blog "Can LLMs be computers" (Mar 2026). Claimed novelty is doing it exactly inside a production pretrained model.

## 6. What's next
Author: a `python()` tool running MicroPython inside the weights, and a faster CPU. Open questions raised by commenters: could a model be trained from scratch with such circuitry (traverseda, Ericson2314), and could gradients flow through a fixed-weight CPU (nullc).

## Key numbers (all author-reported)
- 4B base model; 11 CPU layers + Qwen's 32; RV32IM + Zba + bignum.
- Checkpoint 18.8 GB (~2x base), mostly zero padding; runs on single 24 GB GPU.
- ~3,200 CPU trace tokens/sec on an NVIDIA L4 (batched executor).
- 230,000 output positions, 0 mismatches; 18M instructions free-running, no errors.
- Text drift KL 6e-4 vs noise floor 5e-4.
- mul_big 55 → 97.5 (tool 100); div_big 72.5 → 97.5 (tool 95); 40 problems per set.
- Filesystem: changed facts 90% vs 30% pasting old chats; 512 files / ~53k tokens.
- HN 695 points (item 50282838, 2026-10-29); Lobsters 45 points, 9 comments.

## Quotable lines
- "To be very clear, it is not a plugin, a tool or a sandbox." — https://divagr.com/blog/qwenputer
- "Because a CPU inside a language model clearly wasn't cursed enough, I decided the prudent thing would be to give it a filesystem too." — https://divagr.com/blog/qwenputer
- "The central claim about “no external runtime” or “not a plugin” feels a little dishonest to me since this doesn’t work without some pretty invasive changes to the inference driver." — gcr, https://news.ycombinator.com/item?id=50286992

## Counterpoint (for the writer)
Practically, nothing here beats a normal computer: a regular RISC-V emulator or Python tool is faster and at least as accurate, and the in-model CPU still depends on a custom driver. Its value is as a demonstration and research testbed, not as a way to make AI better at maths today.

## Also in this thread
- nesformer — NES 6502 CPU in Qwen3.5 weights, builds on Qwenputer's compiler (Show HN 2026-10-30, 176 pts): https://github.com/dbreunig/nesformer
- doomformer — CAUTION: topics.json describes it as "DOOM game logic as a transformer"; the README actually describes the reverse: "Neural networks computed by voodoo dolls inside DOOM maps." (Show HN 2026-10-29, 123 pts): https://github.com/mottopanikeiku/doomformer
- Loom (arXiv preprint, not peer-reviewed): https://arxiv.org/abs/2604.08816

## Unverified
- GitHub star/fork count (API blocked for this repo in session).
- Author's AI-safety follow-up posts (not read).
- Percepta post content beyond subtitle (page text did not render; HN commenter says they implemented WASM in a transformer — not confirmed).
- The 18M-instruction and riscv-tests claims: author's statements only, not independently replicated.
- Why benchmark scores are below 100% despite exact CPU output — not explained by author.
