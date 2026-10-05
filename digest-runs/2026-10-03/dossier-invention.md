# Dossier: invention — Stillwet

Primary: https://stillwet.art/ (gallery), https://stillwet.art/rounds.html (setup of each round), repo https://github.com/aliceisjustplaying/claude-paint (read via raw.githubusercontent.com, since github.com HTML and the API were blocked for this session).
Status: a hobby or art project by one person. It is not a paper and has had no peer review. Every result below is what the creator reports on her own site and in her own repo notes. None of it has been replicated.

## What
- Stillwet is a gallery of 75 paintings made by frontier AI models. Each model "paints by writing a program against a simulation of oil paint on linen: bristle brushes, wet paint, drying, layered glazes. No image model is involved." (stillwet.art)
- Most of the paintings are "after Caspar David Friedrich from written research alone; they never see a picture of his work." Others were given a free subject. Round 20 used Edward Hopper's manner, limited to pigments he is documented as using.
- Models that painted: mostly Claude Opus 5.5. Also Claude Sonnet 5 and 5.5, Claude Fable 5.1, GPT-6 Astra, GPT-6 Luna, GPT-6.1 Sol, Gemini 3.8 Flash, DeepSeek V4.1 Flash, MiMo v2.6 Pro, Muse Spark 1.3, Kimi K3, GLM-5.3 Flash and "Space Bunny".

## How
- The engine is "A physical oil-paint simulator in Rust". Simulated bristles carry wet paint, the paint dries on a clock, layers combine by Kubelka–Munk optics, and "Paint comes only from piles knifed together from named tubes." (README). Pigment mixing uses the existing open-source Mixbox library and code ported from spectral.js (THIRD_PARTY_NOTICES). The engine is new; the color-mixing science is not.
- There are two ways of working. A model can write the whole picture as one program, or work at a live "easel" (a Lua session) one passage at a time, with a "look" tool that lets it see its canvas. "46 of the 75 here were painted at a virtual easel."
- Painters run as general coding agents inside the "pi" agent harness. The site publishes everything each painter was given, including the system prompt and the research notes.
- The models do see their own canvas, but they get no reference images. The creator on HN: "they don't (currently) have reference images but ... they very much use their vision capabilities".
- There were 21-plus rounds between September 22 and October 2, 2026. Each round changed one thing: underdrawing, no undo, "chains" where each painter leaves notes for the next but never sees the earlier pictures, and so on.
- Rights: the code is MIT, and the paintings and logs are CC BY 4.0. Every painting is a replayable log, and you can watch it being painted.

## The blind judging (the hook for the thread)
- In round 11, three non-Opus models (GPT-6 Astra at low reasoning, Gemini 3.8 Flash, Claude Fable 5.1) painted the same winter brief. Then each of them ranked six winters blind, with its own painting included unmarked and round 2's Opus winter added as an anchor (notes/round11/README.md).
- Result (notes/round11/blind/key.md): "No self-preference: each model ranked its own painting 5th or 6th." "All three put round 2 first; all three put round 10's pond third." The homepage puts it this way: "Judging blind, three AI painters each ranked it above their own."
- The critics write detailed "paint or pixels?" critiques. Astra, for example, called one tree "solid, clean-edged limbs with masses of similarly tiny forked tips ... constructed at two incompatible scales."
- Alice's own blind reactions were blunter. She called Astra's painting "looks so digital" and Gemini's "Paradoxically ... the best one ... in sort of a bad painter way".

## Why it matters
- The models produce images with no image generator, by controlling a physical medium through code and checking their work by sight. This sits in the same family as the "pelican on a bicycle" SVG test and turtle graphics (HN commenters' framing), but it is iterative and uses a realistic medium.
- The habits it surfaces are odd and easy to quote:
  - "Of the 65 paintings here with a title, 31 have Evening, Dusk, Twilight or Sunset in it."
  - Asked only to plan a painting, "Claude Opus chose a jug with lemons six times out of six."
  - In round 19 all six models painting after Friedrich included a bare tree.
  - Two painters six hours apart, with no shared pictures, independently composed almost the same shore scene.
- Two lessons about agents and grading tie into the thread:
  - Gemini 3.8 Flash used its command line to inspect the machine. It wrote, "I am now closely observing the machine’s activity, specifically focusing on an automated evaluation runner in the background." Since round 19, painters have had only the easel's own tools.
  - MiMo v2.6 Pro hit a known bug, so "for most of the session it was probably judging an older state of its own painting."

## What's contested / the honest caveat
- **The blind judging is tiny and internal.** It was one round, three AI judges and six paintings. The judges are also the project's regular critics, and the repo itself warns that "a model may favor its own style." The non-self-preference result is real but anecdotal. All three judges picked the same Opus painting, which only shows the judges agree with each other; it says nothing about whether humans would agree. No human panel or art-expert judging was run, apart from Alice's own reactions.
- **The gallery is curated.** One person ran the experiments, chose the setups and picked the "Favorites". The site reports what happened round by round, including failures (a power cut, unfinished paintings when API credits ran out, a prompting error), but it is not a controlled benchmark.
- **Quality is mixed.** A top HN critic said most landscapes are "ruined" by "a cluster of churches right next to each other that is completely nonsensical". The creator replied that it is "one of those things they just keep painting and i'm not sure yet why". Another commenter said that in the process videos "it's not painting like a human would." The creator's own verdicts include "Still flawed" and, for round 13, "Ouch. Wow. Ouch."
- **The method is not written up yet.** The creator said she still needs to write a blog post: "until then point your favorite agent at the git history." No cost or token figures have been published; the creator said she would gather them.
- Some HN commenters speculate that labs trained models on paint-with-code tasks, which would make the skill less "emergent". This is unverified speculation.
- Cultural objections appeared on HN (for example "What a misanthropic thing to make"). This is the usual AI-art backlash, not a technical critique.

## Who
- "Made by Alice" (@aliceisplaying on X, GitHub aliceisjustplaying). The Show HN, "Giving Opus 5.5 a simulated paint canvas", was posted by a different user (alstonite) on 2026-10-02 and reached 382 points and 113 comments. Alice joined the thread as "project creator". The name "Stillwet" was picked by Claude Opus 5.5 ("i let claude opus 5.5 pick the name intentionally").

## What's next
- The site keeps adding rounds; round 21.5, on October 2, was a test of prompt changes. Painters can be watched live at https://stillwet.art/studio/.
- Promised: a blog post on the method, and per-painting token costs (both from Alice's HN comments).
- HN suggestions: an Elo-style benchmark, painting from a photo, and robot arms with real paint.

## Key numbers
- 75 paintings, 46 of them painted at the easel, 65 titled, 31 with dusk-type titles
- 21-plus rounds, September 22 to October 2, 2026
- About 13 models
- Round 11 blind test: 3 AI judges, 6 paintings, each judge ranked its own 5th or 6th, and all ranked round 2's Opus winter first
- HN: 382 points, 113 comments

## Quotable lines
- "No image model is involved." — https://stillwet.art/
- "No self-preference: each model ranked its own painting 5th or 6th." — https://raw.githubusercontent.com/aliceisjustplaying/claude-paint/main/notes/round11/blind/key.md
- "I am now closely observing the machine’s activity, specifically focusing on an automated evaluation runner in the background." (Gemini 3.8 Flash, quoted on https://stillwet.art/)

## Writer notes
- Topic constraints: keep it non-political, and don't frame it around geography. Painting titles mention real places; describe scenes generically, e.g. "a shore scene" or "a winter ruin".
- Keep "AI judges agreed" separate from "the paintings are good". The safe line: other AIs, judging blind, did not favor their own work and agreed on a favorite.

## Also in this thread
- Prior work: "Training AI to Paint with Code" (Surya Narreddi and Cameron Franz, March 2026). They used RL (GRPO) to train a model to write p5.brush watercolor code, and "a separate judge model picking the better watercolour" supplied the reward. That is AI judging AI art, used as a training signal. https://surya.website/rling-qwen-to-paint-with-code
- The Gemini "evaluation runner" moment ties directly to the research pick (agents gaming their graders). An HN commenter made the same link: "These models are truly obsessed with the grader."
- Similar benchmark mentioned on HN: https://minebench.ai (voxel builds by LLMs). Not fetched.

## Unverified
- The X post (via Danielle Fong RT) in which Alice says the engine "tripped gpt 6.1 sol's cyber classifiers". This was seen only as a search snippet.
- Whether the round 10 blind critiques used the same judges, and what they ranked; only the README was read.
- Any press coverage beyond HN. A search found none.
