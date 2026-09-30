FAIL

# Editor report: Eureka Reports, Sep 30, 2026 (digest-runs/2026-09-30/draft.md)

Two required fixes, both in the Research section. Neither one changes a fact-checked claim. Every other check passes.

## Required fixes

1. **Rhetorical question used as a transition (banned pattern).** Research, line 151:
   > **Is it really a first?** Co-author Yuanhao Zeng wrote on Hugging Face ...

   Change the label to a statement, for example `**The "first" claim.**`. The rest of the paragraph stays as it is. Zeng's quote and the [4] comparison passed fact-check and don't change.

2. **Paragraph ends on the draft's own verdict, with an unsourced superlative.** Research, line 151, last sentence:
   > A fairer reading is that this paper is among the first to show it for language-model skills through single words.

   This closes the paragraph on an editorial judgment. The style guide bans moral endings and says every superlative needs a source, and "among the first" has no citation. Fact-check never covered this sentence; it passed only the Zeng quote. Delete the sentence so the paragraph ends on the cited [4] toy-case quote. If you want the contrast kept, use a sourced, factual line: `That study involved classifying digits, not language-model skills [[4]](#source-4).` Leave Zeng's "to our knowledge, this is the first time a *capability* is" and "That is the authors' claim." unchanged.

## Checks passed

- **Banned words:** none found (delve, tapestry, landscape, realm, testament to, game-changer, revolutionize, unlock, harness, seamless, robust, cutting-edge, navigate, "in today's fast-paced world"). No "It's not just X, it's Y" and no triplet habit.
- **Em dashes:** 1 in the whole file, under the max of 2. It is in the Laya source title in the frontmatter, not in the body.
- **Section lengths and formats** (±25% of format.json): Research is about 690 words against a 650 target (by-the-numbers, 5 bolded figures). News is about 570 against 580 (claim-vs-evidence table plus analysis). Invention is about 380 against 380 (comparison table). All three formats differ from each other, and `explainer` is not used. The H2s name specific topics. The closing section is 2 sentences and makes a real link between the Research and News stories.
- **Reading level (estimated):** Research FK about 9.2 (average 16.4 words per sentence). News about 10.7 (15.4). Invention about 9.4 (19.1). All sections average under 20 words per sentence.
- **Frontmatter:** parses with gray-matter. It has `reviewStatus: pending`, `editorsNote: null`, and ISO dates with offset (`2026-09-30T07:00:00-04:00`). The title is 57 characters and the description 148. There are 21 sources, and body citations run [1] to [21] in order of first use, with no gaps, no orphans and no number mismatches.
- **factcheck.json:** all round-1 fix and cut items show as applied in the draft. The three round-2 fixes are also in the draft and count as resolved: "Unverified." plus Delangue's "take with a grain of salt" caveat (line 171), the Laya title and `2026-09` date, and the TypeSafe `undated (accessed 2026-09-30)` date.
- **Editor's note:** no agent-written note anywhere. `editorsNote: null`.
- **Moral or restated-intro endings:** apart from fix 2, no paragraph ends on a moral. The referee analogy (line 141) is the one analogy allowed per deep dive. The closing section connects the stories without restating the intro.

## Advisory (not required)

- The News reading level (about 10.7) is pushed up by the 51-word Delangue cell in the table (line 171). If you want it lower, split the cell into two sentences without changing any words: "... posted that OpenAI would have caught its own agents before Hugging Face did if it had been running the platform. He added "take with a grain of salt, we need much more transparency!", per TechCrunch [[9]](#source-9)."
- Round-2 fact-check evidence gives the Laya page title with a hyphen ("Laya - 33ms ..."). The frontmatter uses an em dash ("Laya — 33ms ..."). Matching the page exactly would also bring the em-dash count to 0.
- Company name styling: line 155 has "Nvidia CEO Jensen Huang"; the rest of the body uses "NVIDIA".
