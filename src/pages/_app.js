import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Figtree} from "@next/font/google";
import {SSRProvider} from "react-bootstrap";
import Navbar from '../components/navbar'
import Footer from "@/components/footer";

const Font = Figtree({subsets: ['latin']})

export default function App({Component, pageProps}) {
    return (
        <SSRProvider>
            <main className={Font.className}>
                <Navbar/>
                <Component {...pageProps} />
                <Footer/>
            </main>
        </SSRProvider>
    )
}