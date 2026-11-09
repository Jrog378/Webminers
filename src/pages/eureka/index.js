import Head from "next/head";
import Link from "next/link";

// Eureka Reports is paused (2026-11-09). The AI-written issues were an experiment and have
// been taken off the site; this page holds the /eureka URL until the section returns.
// The old hub and issue pages are in archive/eureka/.
export default function EurekaReports() {
    return (
        <>
            <Head>
                <title>Eureka Reports: Under Construction | Webminers</title>
                <meta name="description" content="Eureka Reports is being rebuilt. In the meantime, read the articles on Webminers."/>
                <meta name="robots" content="noindex, nofollow"/>
            </Head>

            <div className="bg-page">
                <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
                    <p className="text-sm font-bold uppercase tracking-widest text-accent">Under construction</p>
                    <h1 className="mt-3 text-4xl font-bold text-fg">Eureka Reports</h1>
                    <p className="mt-4 text-lg text-dim">
                        We&apos;re rebuilding this section. Check back soon.
                    </p>
                    <Link
                        href="/articles"
                        className="mt-8 inline-block rounded-full bg-brand px-8 py-3 font-semibold text-white transition hover:bg-brand-light"
                    >
                        Browse the Articles
                    </Link>
                </div>
            </div>
        </>
    )
}
