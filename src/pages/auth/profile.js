import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {auth, db} from "@/config";
import Router from "next/router";
import {useAuthState} from "react-firebase-hooks/auth";
import {doc, getDoc} from "firebase/firestore";
import Link from "next/link";
import styles from '@/styles/Home.module.css'
import logo from "@/images/WebminersLogo.webp";
import Head from "next/head";

export default function Profile() {
    const [user, loading] = useAuthState(auth)
    let [plan, setPlan] = useState('Loading...')
    let [name, setName] = useState('Loading...')
    let [email, setEmail] = useState('Loading...')
    useEffect(() => {
        const fetchData = async () => {
            if (!user && !loading) await Router.push("/auth/login");
            if (user) {
                const promise = await getDoc(doc(db, 'users', user.uid)).then(profile => profile.data())
                console.log(promise)
                setPlan(promise['plan'])
                setName(promise['name'])
                setEmail(promise['email'])
            }
            return ''
        }
        fetchData()
    }, [user, loading]);
    return (
        <>
            <main>
                <Head>
                    <title>Webminers - Profile</title>
                    <meta property='og:title' content='Profile'/>
                    <meta property='og:image' content={logo}/>
                </Head>
                <Container style={{backgroundColor: 'whitesmoke', borderRadius: '25px', wordWrap: 'break-word'}}>
                    {user && !loading
                        ? <Container style={{padding: '5% 15%'}}>
                            <h1>Hello {name}</h1>
                            <h3>Email: {email}</h3>

                            <Container style={{paddingTop: '10%'}}>
                                <Col>
                                    <Row>
                                        <h2 style={{textAlign: 'center', fontWeight: 'bolder'}}>
                                            Plan Details
                                        </h2>
                                    </Row>
                                    <Row style={{padding: '15px 0'}}>
                                        <h3>Account Plan: {plan}</h3>
                                    </Row>
                                    <Row>
                                        {plan === 'none'
                                            ? <Button style={{width: '80%', margin: 'auto'}} variant={'success'}
                                                      href={'/pricing'}>Get a Plan</Button>
                                            : plan === ''
                                                ? <Button style={{width: '80%', margin: 'auto'}} variant={'success'}
                                                          href={''}>Loading</Button>
                                                : <Button style={{width: '80%', margin: 'auto'}} variant={'success'}
                                                          href={'https://checkout.webminers.dev/p/login/bIY5leaPGengaVG9AA'}>Subscription
                                                    Management</Button>
                                        }
                                    </Row>
                                </Col>
                            </Container>
                        </Container>
                        : <Container><h1>Loading...</h1></Container>
                    }
                    <Container>
                        <h2 style={{textAlign: 'center', padding: '0 10%'}}>
                            Need Help?
                        </h2>
                        <h3 style={{textAlign: 'center', padding: '0 10% 15px'}}>
                            <Link className={styles.weblink} href={'mailto:webminers.dev@gmail.com'}>Contact Us</Link>
                        </h3>
                    </Container>
                </Container>
            </main>
        </>
    );
}