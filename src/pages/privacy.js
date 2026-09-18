import Head from "next/head";

const sections = [
    {
        title: "What personal information do we collect?",
        body: "When you visit this site, we collect certain information about your device, including your IP address, browser type, and operating system, along with which pages you visit and the actions you take on the site. We collect this using cookies and similar tracking technologies (including Google Analytics and Vercel Analytics) - see the Cookies section below. If you subscribe to our email list, we also collect the email address you provide.",
    },
    {
        title: "How do we use your personal information?",
        body: "We use the information we collect to:",
        list: [
            "Personalize your experience on this site.",
            "Improve this site.",
            "Send you updates about new articles, if you've opted in.",
            "Respond to questions or issues you raise with us.",
            "Protect this site and its users.",
        ],
    },
    {
        title: "How do we share your personal information?",
        body: "We do not sell or rent your personal information to third parties. We may share it with trusted partners who help us run this site - for example, email delivery providers and analytics services - and only for the purposes we've asked them to provide. We may also disclose your information if required by law, or if we believe it's necessary to protect our rights, your safety or the safety of others, investigate fraud, or comply with a government request.",
    },
    {
        title: "How do we protect your personal information?",
        body: "We take reasonable steps to protect your personal information, including using secure server software and encryption where applicable.",
    },
    {
        title: "How long do we keep your personal information?",
        body: "We keep your personal information for as long as you have an active subscription or account with us, or as long as needed to comply with our legal obligations, resolve disputes, and enforce our agreements.",
    },
    {
        title: "Your rights",
        body: "You have the right to access, correct, or delete your personal information, and to object to its processing or request data portability. To exercise these rights, contact us using the email below - for example, you can unsubscribe from our mailing list at any time.",
    },
    {
        title: "Cookies",
        body: "We use cookies to understand how the site is used, which helps us improve it. You can disable cookies in your browser settings, though some site features may not work as well if you do.",
    },
    {
        title: "Changes to this Privacy Policy",
        body: "We may update this Privacy Policy from time to time. If we make significant changes, we'll note it here or notify subscribers by email.",
    },
    {
        title: "Contact us",
        body: "Questions about this policy? Reach us at webminers.dev@gmail.com.",
    },
]

export default function Privacy() {
    const SchemaMarkup = () => (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "@id": "https://webminers.dev/privacy/",
                    "url": "https://webminers.dev/privacy/",
                    "image": "https://webminers.dev/webminers-logo.webp",
                    "name": "Privacy Policy for Webminers AI",
                    "datePublished": "May 10th, 2023",
                    "dateModified": "September 17th, 2026",
                    "description": "Our privacy policy explains what data Webminers AI collects, why we use cookies, and how we protect your information."
                }),
            }}
        />
    )

    return (
        <>
            <Head>
                <title>Privacy Policy for Webminers AI</title>
                <meta name={'og:title'} content={'Privacy Policy for Webminers AI'}/>
                <meta name="description"
                      content="Our privacy policy explains what data Webminers AI collects, why we use cookies, and how we protect your information."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property='og:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                <meta property='og:type' content='website'/>
                <meta property='og:description'
                      content='Our privacy policy explains what data Webminers AI collects, why we use cookies, and how we protect your information.'/>
                <meta property='og:sitename' content='Webminers AI'/>
                <meta name="twitter:card" content="summary"/>
                <meta name='twitter:title' content='Privacy Policy for Webminers AI'/>
                <meta name='twitter:description'
                      content='Our privacy policy explains what data Webminers AI collects, why we use cookies, and how we protect your information.'/>
                <meta name='twitter:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                <SchemaMarkup/>
            </Head>
            <div className="bg-page">
                <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
                    <h1 className="text-3xl font-bold text-fg">Privacy Policy</h1>
                    <p className="mt-1 text-sm text-muted">Last updated September 17th, 2026</p>
                    <p className="mt-4 text-muted">
                        We&apos;re committed to protecting your privacy. This Privacy Policy explains how we collect,
                        use, and share your personal information when you visit Webminers AI.
                    </p>

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
