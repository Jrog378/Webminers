import {useEffect} from 'react';
import {auth} from "@/config";
import Router from 'next/router'
import {Container} from "react-bootstrap";
import {signOut} from "firebase/auth";
import React from 'react';
import logo from "@/images/WebminersLogo.webp";
import Head from "next/head";

const Home = () => {
    useEffect(() => {
        signOut(auth).then(() => {
            // Sign-out successful.
            Router.push("/")
            console.log("Signed out successfully")
        }).catch((error) => {
            console.log(error)
        });
    })

    return (
        <>
            <Container>
                <Head>
                    <title>Webminers Investing - Logout</title>
                    <meta property='og:title' content='Webminers Investing - Logout'/>
                    <meta property='og:image' content={'webminers.dev/webminerslogo.webp'}/>
                </Head>
                <h1 style={{color: 'whitesmoke'}}>Logging You Out...</h1>
            </Container>
        </>
    )
}

export default Home;