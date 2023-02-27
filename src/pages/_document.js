import {Html, Head, Main, NextScript} from 'next/document'
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-38KM92RY3N"/>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-38KM92RY3N', {
              page_path: window.location.pathname,
            });
          `,
                    }}/>

            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
{/*<Script>*/
}
{/*    window.dataLayer = window.dataLayer || [];*/
}
{/*    function gtag(){dataLayer.push(arguments);}*/
}
{/*    gtag("js", new Date());*/
}
{/*    gtag("config", "G-38KM92RY3N");*/
}
{/*</Script>*/
}