import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {getAllIssues} from "@/lib/digest";

const DESCRIPTION = 'Eureka Reports from Webminers: AI research, news and inventions every Wednesday and Saturday, plus Coding with Christ on faith and technology every Sunday. Every claim sourced.'

const FEATURE_LABELS = {'this-week': 'This week', 'month-review': 'Month in review', 'worth-revisiting': 'Worth revisiting'}

const formatDate = (iso) => new Date(iso).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric', timeZone: 'America/New_York',
})

export default function EurekaReports({issues}) {
    const onlyDrafts = issues.every((issue) => issue.demo || issue.reviewStatus !== 'approved')

    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": ["WebPage", "CollectionPage"],
        "@id": "https://webminers.dev/eureka",
        "url": "https://webminers.dev/eureka",
        "image": "https://webminers.dev/webminers-logo.webp",
        "name": "Eureka Reports",
        "description": DESCRIPTION,
        "isPartOf": {"@type": "WebSite", "name": "Webminers AI", "url": "https://webminers.dev"},
    }

    return (
        <>
            <Head>
                <title>Eureka Reports: AI News and Research, Explained Twice a Week | Webminers</title>
                <meta name="description" content={DESCRIPTION}/>
                <link rel="canonical" href="https://webminers.dev/eureka"/>
                {onlyDrafts && <meta name="robots" content="noindex, nofollow"/>}
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Eureka Reports"/>
                <meta property="og:description" content={DESCRIPTION}/>
                <meta property="og:site_name" content="Webminers AI"/>
                <meta property="og:image" content="https://webminers.dev/webminers-logo.webp"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:title" content="Eureka Reports"/>
                <meta name="twitter:description" content={DESCRIPTION}/>
                <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaMarkup)}}/>
            </Head>

            <div className="bg-page">
                <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
                    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-accent">Wednesdays, Saturdays and Sundays</p>
                            <h1 className="mt-2 text-4xl font-bold text-fg">Eureka Reports</h1>
                            <p className="mt-3 max-w-2xl text-dim">
                                Wednesdays and Saturdays, AI Overview: one AI research deep dive, one news story and one cool invention.
                                Sundays: Coding with Christ, a verse, a reflection and a sourced story on faith and technology.
                                Every claim linked to its source. Researched by AI agents, reviewed by Justin Rogers.
                            </p>
                        </div>
                        <p className="shrink-0 text-dim">
                            <Link href="/methodology" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">How these are made</Link>
                            {' · '}
                            <Link href="/articles" className="font-semibold text-brand-light hover:text-brand">Articles</Link>
                        </p>
                    </div>

                    {issues.length === 0 && (
                        <p className="rounded-2xl border !border-border bg-raised p-6 text-dim">The first report is on its way.</p>
                    )}

                    <div className="grid gap-6 sm:grid-cols-2">
                        {issues.map((issue) => {
                            if (issue.collection === 'faith') return <SundayCard key={issue.slug} issue={issue}/>
                            const stories = issue.sections.filter((section) => section.kind !== 'closing')
                            const pending = issue.demo || issue.reviewStatus !== 'approved'
                            return (
                                <Link
                                    key={issue.slug}
                                    href={`/eureka/${issue.slug}`}
                                    className="group flex flex-col overflow-hidden rounded-2xl border !border-border bg-raised transition hover:!border-accent"
                                >
                                    {issue.hero?.src && (
                                        <Image src={issue.hero.src} width={issue.hero.width} height={issue.hero.height} alt={issue.hero.alt}
                                               sizes="(min-width: 640px) 50vw, 100vw" className="h-44 w-full object-cover"/>
                                    )}
                                    <div className="border-b-2 border-accent bg-brand-glow p-6">
                                        <div className="flex items-center justify-between gap-3 text-sm">
                                            <time dateTime={issue.datePublished} className="font-semibold text-accent">
                                                {new Date(issue.datePublished).toLocaleDateString('en-US', {weekday: 'long', timeZone: 'America/New_York'})} · {formatDate(issue.datePublished)}
                                            </time>
                                            {pending && (
                                                <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold text-fg">
                                                    {issue.demo ? 'Demo' : 'Needs review'}
                                                </span>
                                            )}
                                        </div>
                                        <p className="mt-2 text-xs font-bold uppercase tracking-widest text-accent">AI Overview</p>
                                        <h2 className="mt-1 text-lg font-semibold text-fg group-hover:text-accent">{issue.headline}</h2>
                                    </div>
                                    <ul className="flex-1 space-y-2 p-6 text-sm">
                                        {stories.map((story) => (
                                            <li key={story.id} className="flex gap-2">
                                                <span className="w-24 shrink-0 font-bold uppercase tracking-wide text-accent">{story.label}</span>
                                                <span className="text-dim">{story.title}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

function SundayCard({issue}) {
    return (
        <Link
            href={`/eureka/${issue.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border !border-border bg-raised transition hover:!border-brand"
        >
            {issue.hero?.src && (
                <Image src={issue.hero.src} width={issue.hero.width} height={issue.hero.height} alt={issue.hero.alt}
                       sizes="(min-width: 640px) 50vw, 100vw" className="h-44 w-full object-cover"/>
            )}
            <div className="border-b-2 border-brand bg-brand-glow p-6">
                <div className="flex items-center justify-between gap-3 text-sm">
                    <time dateTime={issue.datePublished} className="font-semibold text-brand-light">
                        {new Date(issue.datePublished).toLocaleDateString('en-US', {weekday: 'long', timeZone: 'America/New_York'})} · {formatDate(issue.datePublished)}
                    </time>
                    <span className="flex gap-2">
                        <span className="rounded-full border !border-brand/40 px-2.5 py-0.5 text-xs font-semibold text-brand-light">
                            {FEATURE_LABELS[issue.featureType] || 'This week'}
                        </span>
                        {issue.reviewStatus !== 'approved' && (
                            <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold text-fg">Needs review</span>
                        )}
                    </span>
                </div>
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-brand">Coding with Christ</p>
                <h2 className="mt-1 text-lg font-semibold text-fg group-hover:text-brand-light">{issue.headline}</h2>
            </div>
            <div className="flex-1 p-6 text-sm">
                <p className="italic text-fg">&ldquo;{issue.verse.text}&rdquo;</p>
                <p className="mt-1 text-dim">{issue.verse.reference} ({issue.verse.translation})</p>
            </div>
        </Link>
    )
}

export async function getStaticProps() {
    const issues = [
        ...getAllIssues('digest').map((issue) => ({...issue, collection: 'digest'})),
        ...getAllIssues('faith').map((issue) => ({...issue, collection: 'faith'})),
    ].sort((a, b) => b.datePublished.localeCompare(a.datePublished))
    return {props: {issues}}
}
