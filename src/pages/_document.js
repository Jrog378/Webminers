import {Html, Head, Main, NextScript} from 'next/document'
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <script
                    data-ad-client="7878345029704986"
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                ></script>
            </Head>
            <body>
            <Script
                id="google-auto-ads"
                dangerouslySetInnerHTML={{
                    __html: `
            (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "7878345029704986",
              enable_page_level_ads: true
            });
          `,
                }}
            />
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}