import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {getDigestIssue, getDigestSlugs} from "@/lib/digest";

const SITE = 'https://webminers.dev'

const CLAIM_STEPS = [
    {key: 'claimed', label: 'Claimed'},
    {key: 'preprint', label: 'Preprint'},
    {key: 'peer-reviewed', label: 'Peer-reviewed'},
    {key: 'replicated', label: 'Replicated'},
]

const formatDate = (iso) => new Date(iso).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric', timeZone: 'America/New_York',
})

const markdownComponents = {
    a: ({node, href, ...props}) => {
        const isExternal = /^https?:\/\//.test(href) && !href.includes('webminers.dev')
        return isExternal
            ? <a {...props} href={href} target="_blank" rel="noopener noreferrer"/>
            : <a {...props} href={href}/>
    },
}

function ClaimStatus({status}) {
    const current = CLAIM_STEPS.findIndex((step) => step.key === status)
    return (
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-semibold uppercase tracking-wide text-dim">Claim status</span>
            {CLAIM_STEPS.map((step, i) => (
                <span
                    key={step.key}
                    className={i === current
                        ? 'rounded-full bg-accent/15 px-2.5 py-1 font-semibold text-accent'
                        : 'rounded-full border !border-border px-2.5 py-1 text-dim'}
                >
                    {step.label}
                </span>
            ))}
        </div>
    )
}

function Section({section}) {
    if (section.kind === 'closing') {
        return (
            <section id={section.id} className="rounded-2xl border !border-border bg-raised p-6">
                <h2 className="text-xl font-semibold text-fg">{section.title}</h2>
                <div className="prose prose-lg mt-2 max-w-none text-dim dark:prose-invert">
                    <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>{section.markdown}</ReactMarkdown>
                </div>
            </section>
        )
    }
    return (
        <section id={section.id} className="scroll-mt-24">
            <div className="flex items-center justify-between gap-4 border-t-2 border-accent pt-3">
                <span className="text-sm font-bold uppercase tracking-widest text-accent">{section.label}</span>
                <span className="text-sm text-dim">{section.minutes} min read</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold text-fg sm:text-3xl">{section.title}</h2>
            {section.claimStatus && <ClaimStatus status={section.claimStatus}/>}
            <div className="prose prose-lg mt-4 max-w-none text-dim dark:prose-invert">
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>{section.markdown}</ReactMarkdown>
            </div>
        </section>
    )
}

export default function DigestIssue({issue}) {
    const pending = issue.reviewStatus !== 'approved'
    const url = `${SITE}/eureka/${issue.slug}`
    const schema = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": issue.headline,
        "description": issue.description,
        "datePublished": issue.datePublished,
        "dateModified": issue.dateModified,
        "url": url,
        "isAccessibleForFree": true,
        "isPartOf": {"@type": "CreativeWorkSeries", "name": "Eureka Reports", "url": `${SITE}/eureka`},
        "author": {"@type": "Organization", "name": "Webminers AI Desk", "url": `${SITE}/about/ai-desk`},
        ...(pending ? {} : {"editor": {"@type": "Person", "name": issue.reviewedBy}}),
        "publisher": {"@type": "Organization", "name": "Webminers AI", "url": SITE},
        "citation": issue.sources.map((source) => ({
            "@type": "CreativeWork", "name": source.title, "url": source.url,
        })),
    }

    return (
        <>
            <Head>
                <title>{issue.title}</title>
                <meta name="description" content={issue.description}/>
                <link rel="canonical" href={url}/>
                {(issue.demo || pending) && <meta name="robots" content="noindex, nofollow"/>}
                <meta property="og:type" content="article"/>
                <meta property="og:site_name" content="Webminers AI"/>
                <meta property="og:title" content={issue.headline}/>
                <meta property="og:description" content={issue.description}/>
                <meta property="og:url" content={url}/>
                <meta property="article:published_time" content={issue.datePublished}/>
                <meta property="article:modified_time" content={issue.dateModified}/>
                <meta property="article:section" content="Eureka Reports"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content={issue.headline}/>
                <meta name="twitter:description" content={issue.description}/>
                <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>
            </Head>

            <article className="bg-page pb-16">
                {(issue.demo || pending) && (
                    <div className="border-b border-amber-500/40 bg-amber-500/10 px-4 py-2 text-center text-sm font-medium text-fg">
                        {issue.demo
                            ? 'Demo issue: the copy below is sample text showing the format, not real reporting.'
                            : `Needs review: ${issue.reviewedBy} hasn't reviewed this issue yet. Claims are fact-checked by an AI agent, not yet by a person.`}
                    </div>
                )}

                <header className="bg-brand-glow">
                    <div className="mx-auto max-w-3xl px-4 pb-8 pt-10 sm:px-6">
                        <Link href="/eureka" className="text-sm font-bold uppercase tracking-widest text-accent hover:text-fg">
                            Eureka Reports
                        </Link>
                        <h1 className="mt-3 text-3xl font-bold leading-tight text-fg sm:text-5xl">{issue.headline}</h1>
                        <p className="mt-4 text-lg text-dim sm:text-xl">{issue.dek}</p>
                        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm text-dim">
                            <span>
                                By <span className="font-semibold text-fg">Webminers AI Desk</span>,
                                {pending ? ' awaiting review by ' : ' reviewed by '}
                                <span className="font-semibold text-fg">{issue.reviewedBy}</span>
                            </span>
                            <time dateTime={issue.datePublished}>{formatDate(issue.datePublished)}</time>
                            <span>Covers {issue.coverage}</span>
                        </div>
                    </div>
                </header>

                <div className="mx-auto max-w-3xl space-y-12 px-4 sm:px-6">
                    <aside className="rounded-2xl border !border-accent/40 bg-accent/5 p-6 text-sm text-dim">
                        <p className="font-semibold text-fg">How this was made</p>
                        <p className="mt-1">
                            This report was researched and drafted by AI agents, and every claim was checked against its
                            source by a separate fact-checking agent.{' '}
                            {pending
                                ? `${issue.reviewedBy} reviews each issue after it goes live and adds an Editor\u2019s note.`
                                : `${issue.reviewedBy} reviewed this issue.`}{' '}
                            Every claim links to its source. Read the originals and draw your own conclusions.{' '}
                            <Link href="/methodology" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">Our methodology</Link>
                        </p>
                    </aside>

                    <section className="rounded-2xl bg-surface p-6">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-dim">The 60-second version</h2>
                        <ul className="mt-3 space-y-3 text-fg">
                            {issue.sixty.map((line) => (
                                <li key={line} className="flex gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"/>
                                    <span>{line}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {issue.sections.map((section) => <Section key={section.id} section={section}/>)}

                    {issue.editorsNote ? (
                        <section className="border-l-4 border-brand pl-5">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-brand">Editor&apos;s note</h2>
                            <p className="mt-2 text-lg italic text-fg">{issue.editorsNote}</p>
                            <p className="mt-2 text-sm text-dim">{issue.reviewedBy}</p>
                        </section>
                    ) : (
                        <section className="rounded-2xl border-2 border-dashed !border-brand/50 p-6">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-brand">Editor&apos;s note</h2>
                            <p className="mt-2 text-dim">
                                Placeholder: {issue.reviewedBy} adds a short note here after reviewing this issue.
                            </p>
                        </section>
                    )}

                    <section>
                        <h2 className="text-xl font-semibold text-fg">Sources</h2>
                        <ol className="mt-4 space-y-3 text-sm">
                            {issue.sources.map((source, i) => (
                                <li key={i} id={`source-${i + 1}`} className="flex gap-3 scroll-mt-24">
                                    <span className="w-6 shrink-0 font-semibold text-dim">{i + 1}.</span>
                                    <span className="text-dim">
                                        <span className="mr-2 rounded bg-surface px-1.5 py-0.5 text-xs font-semibold uppercase text-fg">{source.type}</span>
                                        {source.outlet}, <a href={source.url} className="font-semibold text-accent hover:underline">{source.title}</a>, {source.date}
                                    </span>
                                </li>
                            ))}
                        </ol>
                    </section>
                </div>
            </article>
        </>
    )
}

export async function getStaticPaths() {
    return {
        paths: getDigestSlugs().map((slug) => ({params: {slug}})),
        fallback: false,
    }
}

export async function getStaticProps({params}) {
    return {props: {issue: getDigestIssue(params.slug)}}
}
