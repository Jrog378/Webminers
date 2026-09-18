import Head from "next/head";

const sections = [
    {
        title: "Agreement to Terms",
        body: "By using this website or signing up for an account, you agree to the following terms and conditions:",
        list: [
            "You must be at least 18 years of age to create an account.",
            "You must provide accurate and truthful information when signing up.",
            "You are responsible for all activity that occurs under your account.",
            "You may not use this site for any illegal or unauthorized purpose.",
            "You may not violate the rights of others, including their intellectual property rights.",
            "You may not use this site to send spam or unsolicited messages.",
            "We reserve the right to terminate your account at any time for any reason.",
        ],
    },
    {
        title: "Not Professional Advice",
        body: "Webminers AI publishes articles about applying AI to real tasks, along with earlier articles on cryptocurrency and investing that remain published for reference. All content on this site is for informational and educational purposes only and is not a substitute for professional advice - financial, legal, technical, or otherwise. The site's authors and contributors are not licensed professionals and do not offer professional advice. Content reflects the authors' own experience and research. Readers should consult a qualified professional before making decisions based on anything read here. The site owner and contributors assume no liability for losses or damages resulting from use of this site's content.",
    },
    {
        title: "How we use your information",
        body: "If you provide personal information (for example, by subscribing to our email list), we use it to:",
        list: [
            "Personalize your experience on this site.",
            "Improve this site.",
            "Send you updates about new articles, if you've opted in.",
            "Respond to questions or issues you raise with us.",
            "Protect this site and its users.",
        ],
    },
    {
        title: "Changes to these Terms",
        body: "We may update these Terms of Service from time to time. If we make significant changes, we'll note it here or notify subscribers by email.",
    },
    {
        title: "Contact us",
        body: "Questions about these terms? Reach us at webminers.dev@gmail.com.",
    },
]

export default function TermsOfService() {
    const SchemaMarkup = () => (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "@id": "https://webminers.dev/terms-of-service/",
                    "url": "https://webminers.dev/terms-of-service/",
                    "image": "https://webminers.dev/webminers-logo.webp",
                    "name": "Terms of Service for Webminers AI",
                    "datePublished": "May 11th, 2023",
                    "dateModified": "September 17th, 2026",
                    "description": "Terms of service for Webminers AI, covering site use, content disclaimers, and how we handle your information."
                }),
            }}
        />
    )

    return (
        <>
            <Head>
                <title>Terms of Service for Webminers AI</title>
                <meta name={'og:title'} content={'Terms of Service for Webminers AI'}/>
                <meta name="description"
                      content="Terms of service for Webminers AI, covering site use, content disclaimers, and how we handle your information."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property='og:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                <meta property='og:type' content='website'/>
                <meta property='og:description'
                      content='Terms of service for Webminers AI, covering site use, content disclaimers, and how we handle your information.'/>
                <meta property='og:sitename' content='Webminers AI'/>
                <meta name="twitter:card" content="summary"/>
                <meta name='twitter:title' content='Terms of Service for Webminers AI'/>
                <meta name='twitter:description'
                      content='Terms of service for Webminers AI, covering site use, content disclaimers, and how we handle your information.'/>
                <meta name='twitter:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                <SchemaMarkup/>
            </Head>
            <div className="bg-page">
                <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
                    <h1 className="text-3xl font-bold text-fg">Terms of Service</h1>
                    <p className="mt-1 text-sm text-muted">Last updated September 17th, 2026</p>

                    <div className="mt-8 space-y-8">
                        {sections.map((section) => (
                            <div key={section.title}>
                                <h2 className="text-xl font-semibold text-fg">{section.title}</h2>
                                <p className="mt-2 text-muted">{section.body}</p>
                                {section.list && (
                                    <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
                                        {section.list.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
