import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Head from "next/head";
import Email from "@/components/email";
import Suggest from "@/components/suggest";
import Details from "@/components/details";
import Outline from "@/components/outline";
import {
    TwitterShareButton,
    TwitterIcon,
    FacebookShareButton,
    FacebookIcon,
    RedditShareButton,
    RedditIcon, LinkedinShareButton, LinkedinIcon,
} from 'next-share'

const ArticleFormat = ({Article, url}) => {
    const Detail = Details.find((article) => article.url === url)

    const SchemaMarkup = () => (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": Detail.title,
                    "name": Detail.title,
                    "author":
                        {
                            "@type": "Person",
                            "name": "Justin Rogers"
                        },
                    "datePublished": Detail.pub,
                    "dateModified": Detail.date,
                    "description": Detail.text,
                    "image": "https://webminers.dev/images/" + Detail.header,
                    "url": "https://webminers.dev" + Detail.url
                }),
            }}
        />
    )
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>{Detail.title}</title>
                <meta property='og:type' content='article'/>
                <meta property='og:title' content={Detail.title}/>
                <meta property='og:image' content={'https://webminers.dev/images/' + Detail.header}/>
                <meta property='og:description' content={Detail.text}/>
                <meta property='og:sitename' content='Webminers AI'/>
                <meta name='description' content={Detail.text}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name='twitter:title' content={Detail.title}/>
                <meta name='twitter:image' content={'https://webminers.dev/images/' + Detail.header}/>
                <meta name='twitter:description' content={Detail.text}/>
                <SchemaMarkup/>
            </Head>
            <article className="bg-page">
                <div className="mx-auto max-w-4xl px-4 pt-10 text-center sm:px-6">
                    <h1 className="text-3xl font-bold text-fg sm:text-4xl">{Detail.title}</h1>
                    <div className="mt-4 flex justify-between text-sm italic text-dim">
                        <span>Last modified: {Detail.date}</span>
                        <span>By Justin Rogers</span>
                    </div>
                </div>

                <div className="mx-auto mt-8 max-w-6xl rounded-3xl bg-surface px-4 pb-16 pt-8 sm:px-6">
                    <div className="grid gap-10 lg:grid-cols-3">
                        <div className="space-y-10 lg:col-span-2">
                            {Article.map(sections => (
                                <div key={sections.id} className="space-y-4">
                                    <Image
                                        className="mx-auto w-3/4 rounded-2xl"
                                        alt={sections.description}
                                        src={sections.img}
                                        id={sections.id}
                                        placeholder={'blur'}
                                    />
                                    <h2 className="text-xl font-semibold text-fg">{sections.title}</h2>
                                    <div className="prose prose-lg prose-invert max-w-none text-dim">
                                        <ReactMarkdown
                                            components={{
                                                a: ({node, href, ...props}) => {
                                                    const isExternal = /^https?:\/\//.test(href) && !href.includes('webminers.dev')
                                                    return isExternal
                                                        ? <a {...props} href={href} target="_blank" rel="noopener noreferrer"/>
                                                        : <a {...props} href={href}/>
                                                },
                                            }}
                                        >{sections.text}</ReactMarkdown>
                                    </div>
                                </div>
                            ))}

                            <div className="flex items-center gap-2">
                                <h3 className="text-sm font-semibold text-fg">Share:</h3>
                                <TwitterShareButton url={'https://webminers.dev' + Detail.url} blankTarget={true}>
                                    <TwitterIcon size={32} round/>
                                </TwitterShareButton>
                                <FacebookShareButton url={'https://webminers.dev' + Detail.url} blankTarget={true}>
                                    <FacebookIcon size={32} round/>
                                </FacebookShareButton>
                                <RedditShareButton url={'https://webminers.dev' + Detail.url} blankTarget={true}>
                                    <RedditIcon size={32} round/>
                                </RedditShareButton>
                                <LinkedinShareButton url={'https://webminers.dev' + Detail.url} blankTarget={true}>
                                    <LinkedinIcon size={32} round/>
                                </LinkedinShareButton>
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="rounded-2xl border border-border bg-raised p-5">
                                    <p className="font-semibold text-fg">Disclaimer</p>
                                    <p className="mt-2 text-sm text-dim">
                                        This article is provided for informational purposes only and does not
                                        constitute financial, investment, or professional advice. Do your own
                                        research before acting on anything you read here.
                                    </p>
                                </div>
                                <Email/>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <Email/>
                            <Suggest Detail={Detail.id}/>
                            <div className="sticky top-20">
                                <Outline article={Article} url={url}/>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
export default ArticleFormat
