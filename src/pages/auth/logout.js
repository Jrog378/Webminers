import {useEffect} from 'react';
import {auth} from "@/config";
import Router from 'next/router'
import {Container} from "react-bootstrap";
import {signOut} from "firebase/auth";
import React from 'react';

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

    return(
        <>
            <Container>
                <h1 style={{color:'whitesmoke'}}>Logging You Out...</h1>
            </Container>
        </>
    )
}

export default Home;