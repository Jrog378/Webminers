import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout';
import {Figtree} from "@next/font/google";
import {SSRProvider} from "react-bootstrap";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { initGA, logPageView } from '@/utils/gtag';

const Font = Figtree({subsets: ['latin']})

export default function App({Component, pageProps}) {
    const router = useRouter();

    useEffect(() => {
        if (!window.GA_INITIALIZED) {
            initGA('G-38KM92RY3N');
            window.GA_INITIALIZED = true;
        }
        logPageView();
    }, [router.asPath]);

    return (
        <SSRProvider>
            <main className={Font.className}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </main>
        </SSRProvider>
    )
}