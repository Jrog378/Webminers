import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout';
import {Figtree} from "@next/font/google";
import {SSRProvider} from "react-bootstrap";
import Script from "next/script";

const Font = Figtree({subsets: ['latin']})

export default function App({Component, pageProps}) {
    return (
        <SSRProvider>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-38KM92RY3N"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', 'G-38KM92RY3N');
            `}
            </Script>
            <main className={Font.className}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </main>
        </SSRProvider>
    )
}