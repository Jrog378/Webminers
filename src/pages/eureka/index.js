import Head from "next/head";
import Link from "next/link";
import {getAllDigestIssues} from "@/lib/digest";

const DESCRIPTION = 'Eureka Reports from Webminers: one research deep dive, one news story and one cool invention every Wednesday and Saturday, with every claim sourced.'

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
                            <p className="text-sm font-bold uppercase tracking-widest text-accent">Every Wednesday and Saturday</p>
                            <h1 className="mt-2 text-4xl font-bold text-fg">Eureka Reports</h1>
                            <p className="mt-3 max-w-2xl text-dim">
                                One research deep dive, one news story and one cool invention, each explained in plain
                                language with every claim linked to its source. Researched by AI agents, reviewed by
                                Justin Rogers.
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
                            const stories = issue.sections.filter((section) => section.kind !== 'closing')
                            const pending = issue.demo || issue.reviewStatus !== 'approved'
                            return (
                                <Link
                                    key={issue.slug}
                                    href={`/eureka/${issue.slug}`}
                                    className="group flex flex-col overflow-hidden rounded-2xl border !border-border bg-raised transition hover:!border-accent"
                                >
                                    <div className="border-b-2 border-accent bg-brand-glow p-6">
                                        <div className="flex items-center justify-between gap-3 text-sm">
                                            <time dateTime={issue.datePublished} className="font-semibold text-accent">{formatDate(issue.datePublished)}</time>
                                            {pending && (
                                                <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold text-fg">
                                                    {issue.demo ? 'Demo' : 'Needs review'}
                                                </span>
                                            )}
                                        </div>
                                        <h2 className="mt-2 text-lg font-semibold text-fg group-hover:text-accent">{issue.headline}</h2>
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

export async function getStaticProps() {
    return {props: {issues: getAllDigestIssues()}}
}
