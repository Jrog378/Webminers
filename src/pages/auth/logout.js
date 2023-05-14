import {useEffect} from 'react';
import {logout} from "@/config";
import {Container} from "react-bootstrap";
import React from 'react';
import Head from "next/head";

const Home = () => {
    useEffect(() => {
        logout()
        console.log("Signed out successfully")
    })

    return (
        <>
            <Container>
                <Head>
                    <title>Webminers Investing - Logout</title>
                    <meta property='og:title' content='Webminers Investing - Logout'/>
                    <meta property='og:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                </Head>
                <h1 style={{color: 'whitesmoke'}}>Logging You Out...</h1>
            </Container>
        </>
    )
}

export default Home;