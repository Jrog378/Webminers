import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Figtree} from "@next/font/google";
import {SSRProvider} from "react-bootstrap";
import Head from "next/head";
import Script from "next/script";
import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {parseCookies, setCookie} from 'nookies';
import Navbar from '../components/navbar'
import Footer from "@/components/footer";

const Font = Figtree({subsets: ['latin']})

export default function App({Component, pageProps}) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            const cookies = parseCookies();
            const token = cookies['auth-token'];

            if (token) {
                setCookie(null, 'auth-token', token, {
                    maxAge: 60 * 60 * 24 * 7, // 1 week
                    path: '/',
                    sameSite: 'None; Secure',
                });
            }
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <SSRProvider>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=G-38KM92RY3N`}
                    strategy={'lazyOnload'}/>
            <Head>
                {/* Global site tag (gtag.js) - Google Analytics */}
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
                <Navbar/>
                <Component {...pageProps} />
                <Footer/>
            </main>
        </SSRProvider>
    )
}