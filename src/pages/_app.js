import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import {Figtree} from "@next/font/google";
import {SSRProvider} from "react-bootstrap";
import Navbar from '../components/navbar'
import Footer from "@/components/footer";
import { GoogleAnalytics } from "nextjs-google-analytics";
import {useEffect} from "react";
import Router from "next/router";
import {Analytics} from "@vercel/analytics/react";

const Font = Figtree({subsets: ['latin']})

export default function App({Component, pageProps}) {

    useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    const scrollToTop = () => {
      window.scrollTo({top: 0, left: 0, behavior: 'instant'});
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    Router.events.on('routeChangeStart', scrollToTop);
    return () => Router.events.off('routeChangeStart', scrollToTop);
  }, [])

    return (
        <SSRProvider>
            <Analytics/>
            <GoogleAnalytics gaMeasurementId={'G-38KM92RY3N'}/>
            <main className={Font.className}>
                <Navbar/>
                <Component {...pageProps} />
                <Footer/>
            </main>
        </SSRProvider>
    )
}