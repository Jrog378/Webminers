import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout';
import {Figtree} from "@next/font/google";
import {SSRProvider} from "react-bootstrap";
import Script from "next/script";
import Head from "next/head";

const Font = Figtree({subsets: ['latin']})

export default function App({Component, pageProps}) {
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