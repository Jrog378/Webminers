import {useEffect, useState} from 'react';
import * as React from 'react';
import {auth, logInWithEmailAndPassword} from "@/config";
import {useAuthState} from "react-firebase-hooks/auth";
import Router from 'next/router'
import {Button, Col, Container, Row} from "react-bootstrap";
import Link from "next/link";
import styles from '../../styles/Home.module.css'
import Head from "next/head";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth)
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) Router.back();
    }, [user, loading]);
    return (
        <Container style={{padding: '25px', height: '100%'}} className="login">
            <Head>
                <title>Webminers Investing - Login</title>
                <meta property='og:title' content='Webminers Investing - Login'/>
                <meta property='og:image' content={'https://webminers.dev/webminers-logo.webp'}/>
            </Head>
            {!user && !loading
                ? <Container className={styles.inputcon}>
                    <Col>
                        <Row>
                            <h1 style={{color: 'rgb(0,175,75)', fontWeight: 'bold', textAlign: 'center'}}>
                                Webminers
                            </h1>
                        </Row>
                        <Row style={{margin: '15px'}}>
                            <input
                                type="text"
                                className="login__textBox"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email Address"
                            />
                        </Row>
                        <Row style={{margin: '15px'}}>
                            <input
                                type="password"
                                className="login__textBox"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                        </Row>
                        <Row style={{margin: '15px'}}>
                            <Button
                                variant={'success'}
                                onClick={() => logInWithEmailAndPassword(email, password)}>Login</Button>
                        </Row>
                        <Row style={{margin: '15px'}}>
                            <Button
                                variant={"outline-success"}
                                href={'/auth/reset'}>Forgot Password?</Button>
                        </Row>
                        <Row style={{color: 'whitesmoke', display: 'inline-block', width: '100%'}}>
                            <p style={{textAlign: 'center'}}>
                                Don&apos;t have an account? <Link className={styles.weblink} style={{padding: '0'}}
                                                                  href={"/auth/signup"}>Sign Up Now</Link>
                            </p>
                        </Row>
                    </Col>
                </Container>
                : <Container><h1>Loading...</h1></Container>
            }
        </Container>
    );
}

export default Login;
