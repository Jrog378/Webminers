import Head from "next/head";
import Link from "next/link";
import ModelsUsed, {ModelsByline} from "@/components/models-used";
import IssueUpdates from "@/components/issue-updates";
import HeroImage, {heroUrl, heroSchema, ImageSourceEntry} from "@/components/hero-image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const SITE = 'https://webminers.dev'

const FEATURE_TYPES = {
    'this-week': {label: 'This week', note: null},
    'month-review': {label: 'Month in review', note: 'A quieter week, so this feature looks back across the past month.'},
    'worth-revisiting': {label: 'Worth revisiting', note: 'This feature looks back at an earlier story we hadn’t covered yet.'},
}

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

const Markdown = ({children}) => (
    <div className="prose prose-lg mt-3 max-w-none text-dim dark:prose-invert">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>{children}</ReactMarkdown>
    </div>
)

function Section({section}) {
    if (section.kind === 'prayer') {
        return (
            <section id={section.id} className="rounded-2xl bg-surface p-6 text-center">
                <h2 className="text-sm font-bold uppercase tracking-widest text-brand">Prayer</h2>
                <div className="prose prose-lg mx-auto mt-2 max-w-none italic text-fg dark:prose-invert">
                    <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>{section.markdown}</ReactMarkdown>
                </div>
            </section>
        )
    }
    if (section.kind === 'closing') {
        return (
            <section id={section.id}>
                <h2 className="text-xl font-semibold text-fg">{section.title}</h2>
                <Markdown>{section.markdown}</Markdown>
            </section>
        )
    }
    return (
        <section id={section.id} className="scroll-mt-24">
            <div className="flex items-center justify-between gap-4 border-t-2 border-brand pt-3">
                <span className="text-sm font-bold uppercase tracking-widest text-brand">{section.label}</span>
                <span className="text-sm text-dim">{section.minutes} min read</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold text-fg sm:text-3xl">{section.title}</h2>
            <Markdown>{section.markdown}</Markdown>
        </section>
    )
}

export default function FaithIssue({issue}) {
    const pending = issue.reviewStatus !== 'approved'
    const url = `${SITE}/eureka/${issue.slug}`
    const featureType = FEATURE_TYPES[issue.featureType] || FEATURE_TYPES['this-week']
    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": issue.headline,
        "description": issue.description,
        "datePublished": issue.datePublished,
        "dateModified": issue.dateModified,
        "url": url,
        "isAccessibleForFree": true,
        ...(issue.hero?.src ? {"image": heroSchema(issue.hero)} : {}),
        "isPartOf": {"@type": "CreativeWorkSeries", "name": "Eureka Reports: Coding with Christ", "url": `${SITE}/eureka`},
        "author": {"@type": "Organization", "name": "Webminers AI Desk", "url": `${SITE}/methodology`},
        ...(pending ? {} : {"editor": {"@type": "Person", "name": issue.reviewedBy}}),
        "publisher": {"@type": "Organization", "name": "Webminers AI", "url": SITE},
        "citation": issue.sources.map((source) => ({"@type": "CreativeWork", "name": source.title, "url": source.url})),
    }

    return (
        <>
            <Head>
                <title>{issue.title}</title>
                <meta name="description" content={issue.description}/>
                <link rel="canonical" href={url}/>
                <meta name="robots" content={pending ? "noindex, nofollow" : "index, follow, max-image-preview:large"}/>
                <meta property="og:type" content="article"/>
                <meta property="og:site_name" content="Webminers AI"/>
                <meta property="og:title" content={issue.headline}/>
                <meta property="og:description" content={issue.description}/>
                <meta property="og:url" content={url}/>
                <meta property="article:published_time" content={issue.datePublished}/>
                <meta property="article:modified_time" content={issue.dateModified}/>
                <meta property="article:section" content="Eureka Reports"/>
                {issue.hero?.src && <meta property="og:image" content={heroUrl(issue.hero)}/>}
                {issue.hero?.src && <meta property="og:image:alt" content={issue.hero.alt}/>}
                {issue.hero?.src && <meta property="og:image:width" content={String(issue.hero.width)}/>}
                {issue.hero?.src && <meta property="og:image:height" content={String(issue.hero.height)}/>}
                {issue.hero?.src && <meta name="twitter:image:alt" content={issue.hero.alt}/>}
                {issue.hero?.src && <meta name="twitter:image" content={heroUrl(issue.hero)}/>}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content={issue.headline}/>
                <meta name="twitter:description" content={issue.description}/>
                <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>
            </Head>

            <article className="bg-page pb-16">
                {pending && (
                    <div className="border-b border-amber-500/40 bg-amber-500/10 px-4 py-2 text-center text-sm font-medium text-fg">
                        Needs review: {issue.reviewedBy} hasn&apos;t reviewed this article yet. Claims are fact-checked by an AI agent, not yet by a person.
                    </div>
                )}

                <header className="bg-brand-glow">
                    <div className="mx-auto max-w-3xl px-4 pb-8 pt-10 sm:px-6">
                        <div className="flex flex-wrap items-center gap-3">
                            <Link href="/eureka" className="text-sm font-bold uppercase tracking-widest text-brand hover:text-fg">
                                Eureka Reports · {new Date(issue.datePublished).toLocaleDateString('en-US', {weekday: 'long', timeZone: 'America/New_York'})}
                            </Link>
                            <span className="text-sm font-bold uppercase tracking-widest text-fg">Coding with Christ</span>
                            <span className="rounded-full border !border-brand/40 px-2.5 py-0.5 text-xs font-semibold text-brand">{featureType.label}</span>
                        </div>
                        <h1 className="mt-3 text-3xl font-bold leading-tight text-fg sm:text-5xl">{issue.headline}</h1>
                        <p className="mt-4 text-lg text-dim sm:text-xl">{issue.dek}</p>
                        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm text-dim">
                            <span>
                                By <span className="font-semibold text-fg">Webminers AI Desk</span>,
                                {pending ? ' awaiting review by ' : ' reviewed by '}
                                <span className="font-semibold text-fg">{issue.reviewedBy}</span>
                            </span>
                            <time dateTime={issue.datePublished}>{formatDate(issue.datePublished)}</time>
                            {issue.coverage && <span>Covers {issue.coverage}</span>}
                            <ModelsByline models={issue.models}/>
                        </div>
                        {featureType.note && <p className="mt-3 text-sm italic text-dim">{featureType.note}</p>}
                    </div>
                </header>

                <div className="mx-auto max-w-3xl space-y-12 px-4 sm:px-6">
                    <HeroImage hero={issue.hero}/>

                    <figure className="rounded-2xl border !border-brand/40 bg-brand/5 p-6 sm:p-8">
                        <p className="text-sm font-bold uppercase tracking-widest text-brand">Verse of the day</p>
                        <blockquote className="mt-3 text-xl leading-relaxed text-fg sm:text-2xl">&ldquo;{issue.verse.text}&rdquo;</blockquote>
                        <figcaption className="mt-3 text-sm text-dim">
                            <a href={issue.verse.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand hover:underline">{issue.verse.reference}</a>
                            {' '}({issue.verse.translation})
                        </figcaption>
                    </figure>

                    <aside className="rounded-2xl border !border-accent/40 bg-accent/5 p-6 text-sm text-dim">
                        <p className="font-semibold text-fg">How this was made</p>
                        <p className="mt-1">
                            This article was researched and drafted by AI agents, and every claim was checked against its
                            source by a separate fact-checking agent. Scripture is quoted exactly from the {issue.verse.translation}.{' '}
                            {pending
                                ? `${issue.reviewedBy} reviews each article after it goes live and adds an Editor’s note.`
                                : `${issue.reviewedBy} reviewed this article.`}{' '}
                            <Link href="/methodology" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">Our methodology</Link>
                        </p>
                        <ModelsUsed models={issue.models}/>
                    </aside>

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
                                Placeholder: {issue.reviewedBy} adds a short note here after reviewing this article.
                            </p>
                        </section>
                    )}

                    <IssueUpdates updates={issue.updates}/>

                    <section>
                        <h2 className="text-xl font-semibold text-fg">Sources</h2>
                        <ol className="mt-4 space-y-3 text-sm">
                            {issue.sources.map((source, i) => (
                                <li key={i} id={`source-${i + 1}`} className="flex gap-3 scroll-mt-24">
                                    <span className="w-6 shrink-0 font-semibold text-dim">{i + 1}.</span>
                                    <span className="text-dim">
                                        <span className="mr-2 rounded bg-surface px-1.5 py-0.5 text-xs font-semibold uppercase text-fg">{source.type}</span>
                                        {source.outlet}, <a href={source.url} className="font-semibold text-accent hover:underline">{source.title}</a>{source.date ? `, ${source.date}` : ''}
                                    </span>
                                </li>
                            ))}
                            <ImageSourceEntry hero={issue.hero}/>
                        </ol>
                    </section>
                </div>
            </article>
        </>
    )
}
