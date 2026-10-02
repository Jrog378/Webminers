import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";
import {Space_Grotesk} from "@next/font/google";
import Details from "@/components/details";
import Email from "@/components/email";
import {getAllIssues} from "@/lib/digest";

const Display = Space_Grotesk({subsets: ['latin'], weight: ['500', '600', '700']})

const isAiArticle = (d) => d.url.includes('/ai-') || d.url.includes('-ai-') || d.url.endsWith('-ai')

const formatDate = (iso) => new Date(iso).toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: 'America/New_York',
})

function Arrow() {
    return <span aria-hidden="true" className="transition group-hover:translate-x-0.5">&rarr;</span>
}

function SectionHeader({title, href, linkText}) {
    return (
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
            <h2 className={`${Display.className} text-2xl font-semibold text-fg`}>{title}</h2>
            <Link href={href} className="group inline-flex items-center gap-1.5 font-semibold text-brand-light hover:text-brand">
                {linkText} <Arrow/>
            </Link>
        </div>
    )
}

function ArticleCard({article}) {
    return (
        <Link
            href={article.url}
            className="group flex flex-col overflow-hidden rounded-2xl border !border-border bg-raised transition hover:!border-brand"
        >
            <Image
                src={require(`@/images/articleimages/${article.img}`)}
                alt={article.alt}
                className="h-40 w-full object-cover"
                placeholder={'blur'}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <div className="flex flex-1 flex-col p-6">
                <p className="text-sm text-dim">{article.date}</p>
                <p className="mt-1 text-lg font-semibold text-fg group-hover:text-brand-light">{article.title}</p>
                <p className="mt-2 line-clamp-2 text-sm text-dim">{article.text}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-brand-light">
                    Read more <Arrow/>
                </span>
            </div>
        </Link>
    )
}

function LatestReport({report}) {
    return (
        <article className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border !border-border bg-raised text-left shadow-xl shadow-brand/10 lg:max-w-none">
            {report.hero?.src && (
                <Link href={`/eureka/${report.slug}`} tabIndex={-1} aria-hidden="true">
                    <Image src={report.hero.src} width={report.hero.width} height={report.hero.height} alt=""
                           sizes="(min-width: 1024px) 40vw, 100vw" className="h-36 w-full object-cover" priority/>
                </Link>
            )}
            <div className="border-b-2 border-accent p-6">
                <div className="flex items-center justify-between gap-3 text-sm">
                    <p className="font-bold uppercase tracking-widest text-accent">Latest Eureka Report</p>
                    {report.pending && (
                        <span className="shrink-0 whitespace-nowrap rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold text-fg">Needs review</span>
                    )}
                </div>
                <time dateTime={report.datePublished} className="mt-1 block text-sm text-dim">
                    AI Overview · {formatDate(report.datePublished)}
                </time>
                <h2 className="mt-2 text-lg font-semibold leading-snug text-fg">
                    <Link href={`/eureka/${report.slug}`} className="hover:text-accent">{report.headline}</Link>
                </h2>
            </div>
            <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-dim">The 60-second version</p>
                <ul className="mt-3 space-y-3 text-sm text-fg">
                    {report.sixty.map((line) => (
                        <li key={line} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"/>
                            <span>{line}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t !border-border pt-4 text-sm">
                    <Link href={`/eureka/${report.slug}`} className="group inline-flex items-center gap-1.5 font-semibold text-accent hover:underline">
                        Read the full report <Arrow/>
                    </Link>
                    <Link href="/eureka" className="group inline-flex items-center gap-1.5 font-semibold text-dim hover:text-fg">
                        All Eureka Reports <Arrow/>
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default function Home({latestReport}) {
    const featured = Details.filter(isAiArticle).slice(0, 3)
    const latest = Details.slice(0, 3)

    const SchemaMarkup = () => (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "@id": "https://webminers.dev/",
                    "url": "https://webminers.dev/",
                    "image": "https://webminers.dev/webminers-logo.webp",
                    "name": "Webminers AI - Practical AI for Work Efficiency",
                    "datePublished": "August 7th, 2022",
                    "dateModified": "October 2nd, 2026",
                    "description": "Clear, practical write-ups on how to put AI to work across real tasks - from " +
                        "productivity and research to analysis and building things."
                }),
            }}
        />
    )

    return (
        <>
            <Head>
                <title>Webminers AI - Practical AI for Work Efficiency</title>
                <meta name={'og:title'} content={'Webminers AI - Practical AI for Work Efficiency'}/>
                <meta name="description"
                      content="Clear, practical write-ups on how to put AI to work across real tasks - from productivity and research to analysis and building things."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property='og:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                <meta property='og:type' content='website'/>
                <meta property='og:description'
                      content='Clear, practical write-ups on how to put AI to work across real tasks.'/>
                <meta property='og:sitename' content='Webminers AI'/>
                <meta name="twitter:card" content="summary"/>
                <meta name='twitter:title' content='Webminers AI - Practical AI for Work Efficiency'/>
                <meta name='twitter:description'
                      content='Clear, practical write-ups on how to put AI to work across real tasks.'/>
                <meta name='twitter:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                <SchemaMarkup/>
            </Head>

            <main className="bg-page">
                <section className="bg-brand-glow">
                    <div className={`mx-auto grid items-center gap-12 px-4 sm:px-6 ${latestReport
                        ? 'max-w-6xl py-16 lg:grid-cols-[1fr_1.1fr] lg:py-20'
                        : 'max-w-4xl py-24'}`}>
                        <div className={latestReport ? 'max-lg:text-center' : 'text-center'}>
                            <h1 className={`${Display.className} text-4xl font-bold text-fg sm:text-5xl`}>
                                Practical AI for Work Efficiency
                            </h1>
                            <p className={`mt-5 max-w-2xl text-lg text-dim ${latestReport ? 'max-lg:mx-auto' : 'mx-auto'}`}>
                                Clear, grounded write-ups on applying AI to real tasks - research, analysis,
                                productivity, and building things - without the hype.
                            </p>
                            <div className={`mt-8 flex flex-wrap gap-3 justify-center ${latestReport ? 'lg:justify-start' : ''}`}>
                                <Link
                                    href="/articles"
                                    className="inline-block rounded-full bg-brand px-8 py-3 font-semibold text-white transition hover:bg-brand-light"
                                >
                                    Browse the Articles
                                </Link>
                                <Link
                                    href="/eureka"
                                    className="inline-block rounded-full border-2 !border-accent px-8 py-3 font-semibold text-fg transition hover:bg-accent/10"
                                >
                                    Read Eureka Reports
                                </Link>
                            </div>
                            {latestReport && (
                                <p className="mt-6 max-w-xl text-sm text-dim max-lg:mx-auto">
                                    New Eureka Reports every Wednesday, Saturday and Sunday: AI research, news and
                                    inventions, researched by AI agents with every claim sourced.{' '}
                                    <Link href="/methodology" className="font-semibold text-accent hover:underline">How these are made</Link>
                                </p>
                            )}
                        </div>
                        {latestReport && <LatestReport report={latestReport}/>}
                    </div>
                </section>

                {featured.length > 0 && (
                    <section className="mx-auto max-w-6xl px-4 pb-20 pt-4 sm:px-6">
                        <SectionHeader title="Becoming Irreplaceable With AI" href="/articles" linkText="Read more articles"/>
                        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {featured.map((article) => (
                                <ArticleCard key={article.id} article={article}/>
                            ))}
                        </div>
                    </section>
                )}

                <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
                    <SectionHeader title="Recently published" href="/articles" linkText="See all articles"/>
                    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {latest.map((article) => (
                            <ArticleCard key={article.id} article={article}/>
                        ))}
                    </div>
                </section>

                <section className="mx-auto max-w-2xl px-4 pb-24 sm:px-6">
                    <Email/>
                </section>
            </main>
        </>
    )
}

export async function getStaticProps() {
    // Only the newest AI Overview is shown, and only the fields its card needs.
    const [report] = getAllIssues('digest')
    const latestReport = report ? {
        slug: report.slug,
        headline: report.headline,
        datePublished: report.datePublished,
        sixty: report.sixty || [],
        hero: report.hero?.src ? {src: report.hero.src, width: report.hero.width, height: report.hero.height} : null,
        pending: Boolean(report.demo || report.reviewStatus !== 'approved'),
    } : null
    return {props: {latestReport}}
}
