import React, {useEffect, useState} from "react";
import Link from 'next/link'
import {useAuthState} from "react-firebase-hooks/auth";
import Router from 'next/router'
import {auth, logInWithEmailAndPassword, registerWithEmailAndPassword,} from "@/config";
import {Button, Col, Container, Row} from "react-bootstrap";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading] = useAuthState(auth);
    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password)
    };

    const handleKeypress = e => {
        if (e.keyCode === 13) {
            register();
        }
    };

    useEffect(() => {
        if (loading) return;
        if (user) Router.push("/");
    }, [user, loading]);
    return (
        <Container style={{padding: '25px', height: '100%'}} className="login">
            <Head>
                <title>Webminers Investing - Signup</title>
                <meta property='og:title' content='Webminers Investing - Signup'/>
                <meta property='og:image' content={'https://webminers.dev/webminers-logo.webp'}/>
            </Head>
            {!user && !loading
                ?
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
                                className="register__textBox"
                                value={name}
                                onKeyDown={handleKeypress}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Full Name"
                            />
                        </Row>
                        <Row style={{margin: '15px'}}>
                            <input
                                type="text"
                                className="register__textBox"
                                value={email}
                                onKeyDown={handleKeypress}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email Address"
                            />
                        </Row>
                        <Row style={{margin: '15px'}}>
                            <input
                                type="password"
                                className="register__textBox"
                                value={password}
                                onKeyDown={handleKeypress}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                        </Row>
                        <Row style={{color: 'whitesmoke', textAlign:'center'}}>
                            <p>By Registering you agree to our <Link className={styles.weblink} href={'/terms-of-service'}>Terms of Service</Link></p>
                        </Row>
                        <Row style={{margin: '15px'}}>
                            <Button variant={'success'} onClick={register}>
                                Register
                            </Button>
                        </Row>
                        <Row style={{color: 'whitesmoke', display: 'inline-block', width: '100%'}}>
                            <p style={{textAlign: 'center'}}>
                                Already have an account? <Link className={styles.weblink} style={{padding: '0'}}
                                                               href={"/auth/login"}>Login Now</Link>
                            </p>
                        </Row>
                    </Col>
                </Container>
                : <Container><h1>Loading...</h1></Container>
            }
        </Container>
    );
}

export default Register;