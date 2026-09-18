import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";
import {Space_Grotesk} from "@next/font/google";
import Details from "@/components/details";
import Email from "@/components/email";

const Display = Space_Grotesk({subsets: ['latin'], weight: ['500', '600', '700']})

const isAiArticle = (d) => d.url.includes('/ai-') || d.url.includes('-ai-') || d.url.endsWith('-ai')

function ArticleCard({article, priority = false}) {
    return (
        <Link
            href={article.url}
            className="group block overflow-hidden rounded-2xl border border-border bg-raised transition hover:border-brand"
        >
            <Image
                src={require(`@/images/articleimages/${article.img}`)}
                alt={article.alt}
                className="h-40 w-full object-cover"
                placeholder={'blur'}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                priority={priority}
            />
            <div className="p-4">
                <p className="text-lg font-semibold text-fg group-hover:text-brand-light">{article.title}</p>
                <p className="mt-1 text-right text-sm italic text-dim">{article.date}</p>
            </div>
        </Link>
    )
}

export default function Home() {
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
                    "dateModified": "September 17th, 2026",
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
                    <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
                        <h1 className={`${Display.className} text-4xl font-bold text-fg sm:text-5xl`}>
                            Practical AI for Work Efficiency
                        </h1>
                        <p className="mx-auto mt-5 max-w-2xl text-lg text-dim">
                            Clear, grounded write-ups on applying AI to real tasks - research, analysis,
                            productivity, and building things - without the hype.
                        </p>
                        <div className="mt-8">
                            <Link
                                href="/articles"
                                className="inline-block rounded-full bg-brand px-8 py-3 font-semibold text-white transition hover:bg-brand-light"
                            >
                                Browse the Articles
                            </Link>
                        </div>
                    </div>
                </section>

                {featured.length > 0 && (
                    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
                        <h2 className={`${Display.className} text-2xl font-semibold text-fg`}>Becoming Irreplaceable With AI</h2>
                        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {featured.map((article, i) => (
                                <ArticleCard key={article.id} article={article} priority={i === 0}/>
                            ))}
                        </div>
                    </section>
                )}

                <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
                    <h2 className={`${Display.className} text-2xl font-semibold text-fg`}>Recently published</h2>
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
