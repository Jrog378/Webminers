import Head from "next/head";
import Link from "next/link";

const PIPELINE = [
    {step: 'Scout', text: 'Agents scan open sources for the coverage window: arXiv and Hugging Face for research, company announcements and news outlets for news, GitHub and Hacker News for new tools. Community reaction comes from Hacker News and similar public forums.'},
    {step: 'Select', text: 'One topic is chosen per section, weighted toward significance for a general reader and toward stories with a readable primary source. Topics covered in the last eight weeks are skipped unless something material changed.'},
    {step: 'Research', text: 'A research agent reads the primary source in full, follows its references, finds expert and community reaction and looks for the strongest counterpoint. Every claim it gathers is logged with the page it came from and a supporting quote.'},
    {step: 'Draft', text: 'A writing agent drafts the issue only from that research log, in a plain-language reporting style, with a numbered citation on every factual claim.'},
    {step: 'Fact-check', text: 'A separate agent that never saw the writer’s reasoning opens every cited link and confirms the claim, number or quote. Anything it can’t confirm is corrected or cut, never softened and kept.'},
    {step: 'Publish, then human review', text: 'Issues that pass fact-checking go live automatically, marked “Needs review”. Justin Rogers then reviews each one, adds an Editor’s note, and the marker comes off. Until then, search engines are told not to index the issue. If a section can’t be verified it is cut, and if too little survives, nothing is published that day.'},
]

export default function Methodology() {
    return (
        <>
            <Head>
                <title>Methodology: How Webminers Articles and Eureka Reports Are Made</title>
                <meta name="description" content="Webminers has two sections: articles Justin Rogers writes himself, and Eureka Reports, researched by AI agents and reviewed by him. Here is how each is made."/>
                <link rel="canonical" href="https://webminers.dev/methodology"/>
            </Head>

            <div className="bg-page pb-16">
                <header className="bg-brand-glow">
                    <div className="mx-auto max-w-3xl px-4 pb-8 pt-12 sm:px-6">
                        <p className="text-sm font-bold uppercase tracking-widest text-accent">Methodology</p>
                        <h1 className="mt-3 text-4xl font-bold text-fg sm:text-5xl">How Webminers is made</h1>
                        <p className="mt-4 text-lg text-dim">
                            Technology moves faster than a small site can cover by hand. New models, papers and tools
                            ship every week, and one person can&apos;t read them all and still write carefully about the
                            things that matter most. So Webminers has two sections, and we tell you plainly which is which.
                        </p>
                    </div>
                </header>

                <div className="mx-auto max-w-3xl space-y-12 px-4 sm:px-6">
                    <section className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border !border-border bg-raised p-6">
                            <p className="text-sm font-bold uppercase tracking-widest text-brand">Articles</p>
                            <h2 className="mt-2 text-xl font-semibold text-fg">Written by Justin Rogers</h2>
                            <p className="mt-2 text-dim">
                                Long-form pieces I research and write myself: analysis, opinion and explainers on AI,
                                technology and investing. Bylined to me, in my own words.
                            </p>
                            <Link href="/articles" className="mt-4 inline-block font-semibold text-brand hover:underline">Read the articles</Link>
                        </div>
                        <div className="rounded-2xl border !border-accent/40 bg-accent/5 p-6">
                            <p className="text-sm font-bold uppercase tracking-widest text-accent">Eureka Reports</p>
                            <h2 className="mt-2 text-xl font-semibold text-fg">Researched by AI, reviewed by a person</h2>
                            <p className="mt-2 text-dim">
                                Twice-weekly AI overviews, every Wednesday and Saturday, built by a team of AI agents to keep
                                you current. Bylined to the Webminers AI Desk, with every claim linked to its source.
                            </p>
                            <Link href="/eureka" className="mt-4 inline-block font-semibold text-accent hover:underline">Read Eureka Reports</Link>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-fg">How a Eureka Report is made</h2>
                        <ol className="mt-6 space-y-5">
                            {PIPELINE.map((item, i) => (
                                <li key={item.step} className="flex gap-4">
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent">{i + 1}</span>
                                    <div>
                                        <p className="font-semibold text-fg">{item.step}</p>
                                        <p className="mt-1 text-dim">{item.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <section className="space-y-4 text-dim">
                        <h2 className="text-2xl font-bold text-fg">Our standards</h2>
                        <p><span className="font-semibold text-fg">Primary sources.</span> We cite the paper, the company&apos;s own announcement or the original reporting, not aggregators. Research that hasn&apos;t been peer-reviewed is labeled as a preprint, and company claims are attributed to the company.</p>
                        <p><span className="font-semibold text-fg">Open sources only.</span> The agents use public websites, feeds and APIs. They don&apos;t use paywalled material or personal accounts.</p>
                        <p><span className="font-semibold text-fg">No paid placement.</span> Nothing in Eureka Reports is sponsored. If that ever changes, sponsored items will be clearly labeled.</p>
                        <p><span className="font-semibold text-fg">Honest bylines.</span> Eureka Reports are credited to the Webminers AI Desk, never to an invented person. The Editor&apos;s note in each issue is the only part written by Justin.</p>
                        <p><span className="font-semibold text-fg">Corrections.</span> If we get something wrong, we fix it and note the correction and its date at the end of the issue. Spot an error? Tell us on <a href="https://www.linkedin.com/in/jusrogers" target="_blank" rel="noreferrer" className="font-semibold text-accent hover:underline">LinkedIn</a>.</p>
                    </section>
                </div>
            </div>
        </>
    )
}
