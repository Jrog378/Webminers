import React, {useEffect, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, sendPasswordReset} from "@/config";
import Router from 'next/router'
import Link from "next/link";
import {Button, Col, Container, Row} from "react-bootstrap";
import styles from "@/styles/Home.module.css";
import logo from "@/images/WebminersLogo.webp";
import Head from "next/head";


function Reset() {
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        if (loading) return;
        if (user) Router.push("/");
    }, [user, loading]);
    return (
        <Container style={{padding: '25px'}} className="login">
            <Head>
                <title>Webminers Investing - Reset Password</title>
                <meta property='og:title' content='Webminers Investing - Reset Password'/>
                <meta property='og:image' content={'webminers.dev/webminerslogo.webp'}/>
            </Head>
            <Container className={styles.inputcon}>
                <Col>
                    <Row>
                        <h1 style={{color: 'rgb(0,175,75)', fontWeight: 'bold', textAlign: 'center'}}>
                            Webminers
                        </h1>
                    </Row>
                    <Row style={{margin: '15px'}}>
                        <input
                            type="text"
                            className="reset__textBox"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email Address"
                        />
                    </Row>
                    <Row style={{margin: '15px'}}>
                        <Button
                            variant={'success'}
                            onClick={() => sendPasswordReset(email)}>Send Password Reset Email</Button>
                    </Row>
                    <Row style={{color: 'whitesmoke', display: 'inline-block', width: '100%'}}>
                        <p style={{textAlign: 'center'}}>
                            Don&apos;t have an account? <Link className={styles.weblink} style={{padding: '0'}}
                                                              href={"/auth/signup"}>Register Now</Link>
                        </p>
                    </Row>
                </Col>
            </Container>
        </Container>


    );
}

export default Reset;