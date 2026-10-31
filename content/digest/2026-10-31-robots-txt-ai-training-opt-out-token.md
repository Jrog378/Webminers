---
series: ai-digest
title: "AI Training Opt-Out in robots.txt | Eureka Reports Oct 31"
headline: "One robots.txt Line Lets Websites Opt Out of AI Training, Plus 90 of 99 Memory Tests Lost to Plain Search and a CPU Built Inside Qwen"
dek: "A shared token asks AI companies not to train on your pages, add-on agent memory often trails a simple search, and a hobbyist turns a model's scratchpad into exact RAM."
description: "A draft standard lets websites opt out of AI training with one robots.txt line. Plus agent memory versus plain search, and a CPU built inside Qwen."
datePublished: "2026-10-31T07:00:00-04:00"
dateModified: "2026-10-31T07:00:00-04:00"
coverage: "Wed, Oct 28 – Fri, Oct 30, 2026"
reviewStatus: pending
reviewedBy: "Justin Rogers"
reviewedOn: null
editorsNote: null
hero: {"src": "/images/eureka/2026-10-31-robots-txt-ai-training-opt-out-token/chain-padlock-robots-txt-ai-training-opt-out.webp", "width": 1600, "height": 1066, "alt": "Rusty chain and brass padlock locking ornate metal doors, a symbol of the robots.txt AI training opt-out", "caption": "A locked gate stands in for a website asking AI companies to stay out, the idea behind the robots.txt opt-out token.", "credit": {"title": "Security Lock And Chain", "author": "Jennifer Bourn", "authorUrl": "https://wordpress.org/photos/author/jenniferbourn/", "license": "CC0 1.0", "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/", "sourceName": "WordPress Photo Directory", "sourceUrl": "https://wordpress.org/photos/photo/83461f065c/", "modified": "Resized and converted to WebP"}}
models:
  - model: "Claude Sonnet 5.5"
    roles: [orchestration, scouting, format planning, fact-checking, SEO, image search]
  - model: "Claude Opus 5.5"
    roles: [topic selection, deep research, writing, editing]
formats:
  research: by-the-numbers
  news: three-things
  invention: comparison
sixty:
  - "A draft internet standard from Anthropic's Kevin Kelley, dated Oct 30, lets websites opt out of AI training with one robots.txt token, __usage_ai-training, which Microsoft says it will honor starting Feb 1, 2027, and Google aims to support in 2027."
  - "In a preprint that is not yet peer-reviewed, a UIUC-led team reports that 90 of 99 results from 11 AI agent memory systems scored below naive RAG, a plain search over the raw conversation history."
  - "Divyansh Agrawal's hobby project Qwenputer compiles a 32-bit RISC-V CPU into the Qwen3.5-4B model, and he reports it scored 97.5% on a 40-problem big-number multiplication set, against 55% for the stock model."
sections:
  research:
    claimStatus: preprint
sources:
  - type: Official
    outlet: "Kevin Kelley, Anthropic (IETF Internet-Draft)"
    title: "Machine-Readable Training Preference Signal"
    date: "2026-10-30"
    url: "https://www.ietf.org/archive/id/draft-kelley-aipref-training-preference-signal-00.txt"
  - type: Official
    outlet: "IETF Datatracker"
    title: "draft-kelley-aipref-training-preference-signal-00 - Machine-Readable Training Preference Signal"
    date: "2026-10-30"
    url: "https://datatracker.ietf.org/doc/draft-kelley-aipref-training-preference-signal/"
  - type: Official
    outlet: "IETF mail archive (ai-control list)"
    title: "[ai-control] New draft: draft-kelley-aipref-training-preference-signal-00"
    date: "2026-10-30"
    url: "https://mailarchive.ietf.org/arch/msg/ai-control/mddjatOxSR0h6GmLRBWlc839c7w/"
  - type: Official
    outlet: "Google Search Central Blog"
    title: "Supporting a shared AI training control for websites"
    date: "2026-10-30"
    url: "https://developers.google.com/search/blog/2026/10/ai-training-control"
  - type: Official
    outlet: "Microsoft Bing Blogs"
    title: "Your content, your choice: clearer preferences for training and grounding"
    date: "2026-10-30"
    url: "https://blogs.bing.com/search/2026/10/your-content-your-choice-clearer-preferences-for-training-and-grounding/"
  - type: Reporting
    outlet: "daily.dev"
    title: "Making it easier for websites to express AI training preferences"
    date: "2026-10-30"
    url: "https://daily.dev/posts/making-it-easier-for-websites-to-express-ai-training-preferences-ycc0xghgx"
  - type: Reporting
    outlet: "AI Weekly"
    title: "OpenAI, Google, Microsoft, Anthropic Back One AI Opt-Out Token"
    date: "2026-10-30"
    url: "https://aiweekly.co/alerts/openai-google-microsoft-anthropic-back-one-ai-opt-out-token"
  - type: Reporting
    outlet: "Vanessa Fox"
    title: "Complete Reference On Allowing & Blocking LLM Crawlers"
    date: "2026-10-30"
    url: "https://www.vanessafox.com/complete-reference-blocking-llm-crawlers/"
  - type: Official
    outlet: "Google Crawling Infrastructure (documentation)"
    title: "Google's common crawlers"
    date: "2026-10-30"
    url: "https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers"
  - type: Reporting
    outlet: "Search Engine Roundtable"
    title: "Google Adopts New AI Training Control"
    date: "2026-10-30"
    url: "https://www.seroundtable.com/google-ai-training-control-42430.html"
  - type: Paper
    outlet: "He et al. (arXiv)"
    title: "Memory Tax: Dissecting the Net Value of Agent Memory"
    date: "2026-10-25"
    url: "https://arxiv.org/abs/2610.34073"
  - type: Social
    outlet: "Hugging Face Daily Papers (API)"
    title: "Memory Tax: Dissecting the Net Value of Agent Memory"
    date: "2026-10-28"
    url: "https://huggingface.co/api/papers/2610.34073"
  - type: Paper
    outlet: "He et al. (arXiv full text)"
    title: "Memory Tax: Dissecting the Net Value of Agent Memory"
    date: "2026-10-25"
    url: "https://arxiv.org/html/2610.34073v1"
  - type: Paper
    outlet: "He et al. (project page)"
    title: "Memory Tax"
    date: "2026-10-25"
    url: "https://hexuan21.github.io/MemoryTax/"
  - type: Paper
    outlet: "Yang et al. (arXiv)"
    title: "PlugMem: A Task-Agnostic Plugin Memory Module for LLM Agents"
    date: "2026-02-06"
    url: "https://arxiv.org/abs/2603.03296"
  - type: Official
    outlet: "He et al. (GitHub, hexuan21/MemoryTax)"
    title: "README.md"
    date: "2026-10-31"
    url: "https://raw.githubusercontent.com/hexuan21/MemoryTax/main/README.md"
  - type: Paper
    outlet: "Bao et al. (arXiv)"
    title: "Is Complex Agentic Memory Always Needed? Naive RAG Is Stronger Than We Thought"
    date: "2026-10-22"
    url: "https://arxiv.org/abs/2610.30755"
  - type: Paper
    outlet: "Yuan, Su and Yao (arXiv; ICLR 2026 MemAgents Workshop)"
    title: "Diagnosing Retrieval vs. Utilization Bottlenecks in LLM Agent Memory"
    date: "2026-03-02"
    url: "https://arxiv.org/abs/2603.02473"
  - type: Paper
    outlet: "Huang et al. (arXiv)"
    title: "Harness the Memory: A Holistic Evaluation of Memory Substrates in Memory Agents"
    date: "2026-08-15"
    url: "https://arxiv.org/abs/2608.15008"
  - type: Official
    outlet: "Vectorize (Hindsight guides)"
    title: "Hindsight vs RAG for AI Agents, and When to Use Each"
    date: "2026-04-21"
    url: "https://hindsight.vectorize.io/guides/2026/04/21/comparison-hindsight-vs-rag-for-ai-agents"
  - type: Official
    outlet: "Divyansh Agrawal (blog)"
    title: "Qwenputer: a fully functioning, deterministic RISC-V CPU inside Qwen3.5"
    date: "2026-10-22"
    url: "https://divagr.com/blog/qwenputer"
  - type: Social
    outlet: "Hacker News (item 50282838)"
    title: "Qwenputer: A functioning, deterministic RISC-V CPU inside Qwen3.5"
    date: "2026-10-29"
    url: "https://hn.algolia.com/api/v1/items/50282838"
  - type: Official
    outlet: "Divyansh Agrawal (GitHub, divagr18/qwenputer)"
    title: "README.md"
    date: "2026-10-31"
    url: "https://raw.githubusercontent.com/divagr18/qwenputer/main/README.md"
  - type: Social
    outlet: "Hacker News (comment by the author)"
    title: "Comment 50284989"
    date: "2026-10-29"
    url: "https://news.ycombinator.com/item?id=50284989"
  - type: Social
    outlet: "Hacker News (comment by gcr)"
    title: "Comment 50286992"
    date: "2026-10-29"
    url: "https://news.ycombinator.com/item?id=50286992"
  - type: Social
    outlet: "Lobsters"
    title: "Qwenputer: a fully functioning, deterministic RISC-V CPU inside Qwen3.5"
    date: "2026-10-29"
    url: "https://lobste.rs/s/zftely"
  - type: Official
    outlet: "dbreunig (GitHub, nesformer)"
    title: "README.md"
    date: "2026-10-30"
    url: "https://raw.githubusercontent.com/dbreunig/nesformer/main/README.md"
---

## News: One robots.txt line lets websites opt out of AI training by many companies

Website owners may soon be able to tell many AI companies not to train on their pages with a single line in robots.txt, the plain-text file where sites leave instructions for web crawlers. A draft standard dated Oct 30 defines one shared token for the job: `__usage_ai-training` [[1]](#source-1).

The draft comes from Kevin Kelley of Anthropic. It is an individual proposal filed with the Internet Engineering Task Force (IETF), and the IETF's own tracker says it is "not endorsed by the IETF" [[2]](#source-2). Anthropic says it has started implementing support, Google says it plans to support it, and Microsoft says it will honor it from Feb 1, 2027 [[3]](#source-3) [[4]](#source-4) [[5]](#source-5).

**Three things to know**

1. **It is one line, with no new grammar.** The token goes where a crawler's name normally goes, in a robots.txt User-Agent line. The draft adds "no new directive names and no new grammar," so older robots.txt readers simply skip it [[1]](#source-1). Owners can still choose by folder. In the draft's example, `Disallow: /` paired with `Allow: /press-kit/` expresses a preference against training everywhere except the press kit, where it expresses a preference in favor [[1]](#source-1).

   "AI training" here means "using an asset to modify the learned parameters of a generative AI model" [[1]](#source-1). Silence counts for nothing. A catch-all `User-Agent: *` group does not apply, so a site without the token has expressed no preference [[1]](#source-1).

2. **Three companies have plans, and a fourth is reported.** Anthropic "has already started implementing support for this draft," Kelley wrote on an IETF mailing list [[3]](#source-3). Google says the token lets owners "express their AI training preferences across multiple AI providers in a single step," and it aims to support it "in 2027" [[4]](#source-4). "Starting February 1, 2027, Microsoft will honor the new preferences as it crawls," Microsoft says [[5]](#source-5). OpenAI will roll out support "in the coming months," according to a daily.dev summary of OpenAI's announcement [[6]](#source-6). AI Weekly and Vanessa Fox also report that OpenAI announced support [[7]](#source-7) [[8]](#source-8).

   Search stays separate. "Training and grounding are independent preferences," Microsoft says [[5]](#source-5). Grounding is when an AI assistant pulls in web pages to answer a question. Microsoft says neither setting changes whether a site can appear in regular Bing results, subject to its normal crawl and indexing requirements [[5]](#source-5). Google says Google-Extended, its own AI-training token, "does not impact a site's inclusion in Google Search" [[9]](#source-9).

3. **It asks. It does not block.** "This policy token is not a directive for crawling behavior," the draft says [[1]](#source-1). Nothing forces anyone to obey, and an editor's note on AI Weekly's alert says it has "no enforcement teeth" [[7]](#source-7). Private deals between a site and an AI company can also override it [[1]](#source-1).

   It covers training only. The signal "says nothing about web search, AI answers, or user-triggered requests," Vanessa Fox writes [[8]](#source-8). Nate Hake of Travel Lemming, in posts on X shown by Search Engine Roundtable, said the draft "basically exempts the preferences from applying to anything a user does." He added that "it's not actually done at the ietf level -- and some significant areas of dispute remain" [[10]](#source-10).

   Google adds a catch. Unless a site names Google-Extended itself, Google plans to read a token opt-out "as if the publisher had disallowed Google-Extended" [[4]](#source-4). Google says sites that "specifically allow Google-Extended are eligible to appear" in grounded answers in Gemini Apps [[4]](#source-4). Our reading, not Google's statement: a site that opts out with the new token and does not name Google-Extended would not count as specifically allowing it, so it could lose eligibility for those answers.

## Research: In 90 of 99 tests, AI memory add-ons lost to a plain search of the chat history

Purpose-built memory systems for AI agents often do worse than simply searching the raw conversation history, a team led from UIUC reports [[11]](#source-11). "We find many dedicated memory systems underperform naive RAG in many cases, indicating a negative net value," the authors write [[11]](#source-11). The preprint was posted to arXiv on Oct 25 and is not yet peer-reviewed [[11]](#source-11). It drew 157 upvotes after Hugging Face Daily Papers listed it on Oct 28 [[12]](#source-12).

A memory system rewrites an agent's past chats into facts, summaries or graphs so it can recall them later. Naive RAG, short for retrieval-augmented generation, skips that step. It cuts the raw history into chunks, searches them and hands the best matches to the model [[13]](#source-13).

The paper splits a memory system's value into a "memory benefit" and a "memory tax" [[11]](#source-11). The benefit counts questions memory gets right that RAG misses. The tax counts questions RAG gets right that memory misses. When the tax is bigger, memory loses.

Picture a note-taker who summarizes your meetings. The notes can tie scattered facts together, but some details get dropped, split up or reworded until you can't find them. Memory "does solve some queries RAG misses," the authors write, "while losing others that RAG already solves" [[13]](#source-13).

- **90 of 99.** That many results, from 11 memory systems on 3 benchmarks with 3 AI models, fell below the paper's stronger, two-round RAG baseline, according to the project page [[14]](#source-14). The models were Qwen3.5-4B, Qwen3.6-27B and GPT-5.6 Luna at a low reasoning setting [[13]](#source-13).
- **31.8 versus 72.2.** The widest gap: OpenViking scored 31.8 on the LongMemEval-s benchmark with Qwen3.5-4B, against 72.2 for the paper's two-round RAG baseline [[13]](#source-13).
- **39.4%.** OpenViking kept only 39.4% of sampled facts with no loss, against 98.4% for MemoryOS [[13]](#source-13). Lost information "becomes a direct cause of memory tax," and even saved facts can be fragmented, diluted or rephrased until search misses them [[13]](#source-13).
- **3.** Of the earlier memory papers the authors reviewed, only three, for LightMem, PlugMem and Mem-T, reported a RAG comparison [[13]](#source-13).
- **About 70%.** That is what a basic RAG-Hybrid baseline reaches on some of the memory benchmarks the authors checked, and a simple keyword matcher tops 50% on some [[13]](#source-13). The authors concede that current benchmarks are "retrieval-friendly," which leaves memory little room to show its value [[13]](#source-13).
- **73.6 to 82.8.** The authors' proof-of-concept fix keeps "a lightweight path back to the source history" [[13]](#source-13). Searching raw history alongside SimpleMem's memory lifted its LongMemEval-s score from 73.6 to 82.8 with Qwen3.6-27B and cut its tax from 12.0 to 5.2, per the project page [[14]](#source-14).

**What to weigh.** These are the authors' own numbers. The grader is an AI judge running Qwen3.6-27B, which is also one of the models answering questions [[13]](#source-13). Two benchmarks were tested on 20% and 10% samples "due to cost constraints" [[13]](#source-13). PlugMem, one of the systems tested, comes from overlapping authors [[15]](#source-15). The authors call their system list "representative rather than exhaustive" and say more tuning "may yield better performance" [[13]](#source-13). Code to reproduce each system is not yet released [[16]](#source-16).

Memory does win sometimes. On web tasks, turning long action records into workflows "can outperform naive RAG," though several methods fall behind it on tool use [[13]](#source-13).

Two separate studies point the same way. Bao et al., in a preprint, found raw-history RAG ranked first in six of seven benchmark-model settings [[17]](#source-17). In a workshop paper, Yuan, Su and Yao found that raw chunks, needing zero AI model calls, "matches or outperforms expensive lossy alternatives" [[18]](#source-18). A preprint by Huang et al. found "no single substrate consistently dominates" [[19]](#source-19). Memory vendor Vectorize argues that "RAG is often the wrong tool for memory because memory queries are not just document similarity problems" [[20]](#source-20).

## Cool Invention: Qwenputer builds a working CPU inside a 4B language model

Divyansh Agrawal built a working computer processor inside Qwen3.5-4B, a small open language model, using the model's own Gated DeltaNet layers as RAM [[21]](#source-21). His write-up is dated Oct 22 [[21]](#source-21). A Hacker News post about it from Oct 29 shows 695 points [[22]](#source-22).

The processor is a 32-bit RISC-V CPU that takes up 11 layers in front of Qwen's 32 [[21]](#source-21). Gated DeltaNet layers keep a fixed-size grid of numbers as a running scratchpad, where old entries usually fade and new ones blend in. Agrawal set them so each write overwrites exactly one row and each lookup "can retrieve an exact value" [[21]](#source-21). "There's no training involved: a compiler sets every weight directly," he writes [[21]](#source-21).

| | Qwenputer | Stock Qwen3.5-4B | Python tool |
| --- | --- | --- | --- |
| Big-number multiplication, 40 problems | 97.5% [[21]](#source-21) | 55% [[21]](#source-21) | 100% [[21]](#source-21) |
| Speed | About 3,200 CPU tokens a second on an L4 GPU; big calculations take seconds [[21]](#source-21) | No CPU | Not reported |
| Size | 18.8 GB, roughly double base Qwen, mostly zero padding [[21]](#source-21) | About half that | Runs outside the model |
| How it runs | Needs a custom driver, RvChat; no plain generate() call yet [[21]](#source-21) | Standard | Separate program |

Agrawal says he replayed about 230,000 output positions against a reference machine and found zero mismatches [[21]](#source-21).

**The honest caveat.** Every number is self-reported. The arithmetic benchmarks use 40 problems per set [[23]](#source-23), and we found no outside replication as of Oct 31. This is one person's spare-time project. "I just do these during my free time," Agrawal wrote on Hacker News [[24]](#source-24), and his post calls it "very much an experiment" [[21]](#source-21).

Hacker News user gcr called the "not a plugin" claim "a little dishonest," since it needs "some pretty invasive changes to the inference driver" [[25]](#source-25). The top Lobsters comment noted that "you could get the same result by using a normal RISC-V emulator" [[26]](#source-26). The memory trick builds on older research, and Agrawal says the new part is making it "exact and addressable, inside a production model" [[21]](#source-21). Others are already borrowing it: nesformer reuses Qwenputer's compiler to run an NES processor in Qwen3.5 weights [[27]](#source-27).
