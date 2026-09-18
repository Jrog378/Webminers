import Image from 'next/image'
import Link from "next/link";
import Head from "next/head";
import Details from "@/components/details";

export default function Articles() {
    const quotes = [
        {
            author: 'Benjamin Graham',
            quote: 'You will be much more in control, if you realize how much you are not in control'
        },
        {
            author: 'Aristotle',
            quote: 'The energy of the mind is the essence of life'
        }
    ]

    let number = Math.floor(Math.random() * quotes.length);

    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": ["WebPage", "CollectionPage"],
        "@id": "https://webminers.dev/articles/",
        "url": "https://webminers.dev/articles/",
        "image": "https://webminers.dev/webminers-logo.webp",
        "name": "Webminers AI Articles",
        "datePublished": "August 7th, 2022",
        "dateModified": "September 17th, 2026",
        "description": "Practical write-ups on putting AI to work, plus our earlier research on crypto and investing."
    }

    return (
        <>
            <Head>
                <title>Webminers AI Articles</title>
                <meta name={'og:title'} content={'Webminers AI Articles'}/>
                <meta name="description"
                      content="Practical write-ups on putting AI to work, plus our earlier research on crypto and investing."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property='og:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                <meta property='og:type' content='website'/>
                <meta property='og:description'
                      content='Practical write-ups on putting AI to work, plus our earlier research on crypto and investing.'/>
                <meta property='og:sitename' content='Webminers AI'/>
                <meta name="twitter:card" content="summary"/>
                <meta name='twitter:title' content='Webminers AI Articles'/>
                <meta name='twitter:description'
                      content='Practical write-ups on putting AI to work, plus our earlier research on crypto and investing.'/>
                <meta name='twitter:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
            </Head>

            <div className="bg-page">
                <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
                    <div className="mb-6">
                        <h1 className="text-2xl italic text-fg">&quot;{quotes[number].quote}&quot;</h1>
                        <p className="mt-1 text-dim">- {quotes[number].author}</p>
                    </div>
                    <p className="mb-8 text-right text-dim">
                        Follow me on{' '}
                        <a
                            className="font-semibold text-brand-light hover:text-brand"
                            target={'_blank'}
                            rel="noreferrer"
                            href={'https://www.linkedin.com/in/jusrogers'}
                        >
                            LinkedIn
                        </a>
                    </p>

                    <div className="grid gap-6 sm:grid-cols-2">
                        {Details.map(content => (
                            <Link
                                key={content.id}
                                href={content.url}
                                className="group flex overflow-hidden rounded-2xl border border-border bg-raised transition hover:border-brand"
                            >
                                <Image
                                    src={require(`../../images/articleimages/${content.img}`)}
                                    alt={content.alt}
                                    className="h-auto w-1/2 object-cover"
                                    placeholder={'blur'}
                                />
                                <div className="flex w-1/2 flex-col justify-between p-4">
                                    <h2 className="text-lg font-semibold text-fg group-hover:text-brand-light">
                                        {content.title}
                                    </h2>
                                    <p className="mt-2 text-right text-sm italic text-dim">{content.date}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
