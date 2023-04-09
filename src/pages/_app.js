import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout';
import {Figtree} from "@next/font/google";
import {SSRProvider} from "react-bootstrap";
import Head from "next/head";
import Script from "next/script";

const Font = Figtree({subsets: ['latin']})

export default function App({Component, pageProps}) {
    return (
        <SSRProvider>
            <Head>
                {/* Global site tag (gtag.js) - Google Analytics */}
                <script async src={`https://www.googletagmanager.com/gtag/js?id=G-38KM92RY3N`}/>
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
                    }}
                />
            </Head>
            <main className={Font.className}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </main>
        </SSRProvider>
    )
}