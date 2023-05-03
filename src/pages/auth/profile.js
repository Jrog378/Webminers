import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
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
                if (promise['plan'] === 'none') {
                    setPlan(promise['plan'])
                }
                else {
                    setPlan(promise['plan'] + ' Investing Plan')
                }
                setName(promise['name'])
                setEmail(promise['email'])
            }
            return ''
        }
        fetchData()
    }, [user, loading]);
    return (
        <>
            <div style={{backgroundColor: 'whitesmoke', borderRadius: '25px', width: '100%'}}>
                <Head>
                    <title>Webminers Investing - Profile</title>
                    <meta property='og:title' content='Webminers Investing - Profile'/>
                    <meta property='og:image' content={'webminers.dev/webminerslogo.webp'}/>
                </Head>
                <Container style={{wordWrap: 'break-word', padding: '30px'}}>
                    {user && !loading
                        ?
                        <>
                            <h1>Hello {name}!</h1>
                            <Container style={{padding: '20px'}}>
                                <h2 style={{textAlign: 'center', fontWeight: 'bolder'}}>
                                    Profile Details
                                </h2>
                                <Container style={{padding: '15px'}}>
                                    <h4>Email: {email}</h4>
                                    <h4>Account Plan: {plan}</h4>
                                </Container>
                            </Container>
                            <Container>
                                <Row>
                                    <Col md={12} lg={6} style={{padding: '10px'}}>
                                        <Card className={styles.cardhover} style={{padding: '10px'}}>
                                            <h3 style={{textAlign: 'center'}}>Wondering What Webminers Has to
                                                Offer?</h3>
                                            <p style={{fontSize: 'larger'}}>Checkout our other plans for Investing
                                                Seasons,
                                                Balancing, and Analysis.</p>
                                            <Button variant={'success'} style={{width: '80%', margin: '0 auto'}}
                                                    href={'/pricing'}>Visit Pricing</Button>
                                        </Card>
                                    </Col>
                                    <Col md={12} lg={6} style={{padding: '10px'}}>
                                        <Card className={styles.cardhover} style={{padding: '10px'}}>
                                            <h3 style={{textAlign: 'center'}}>Ready For An Upgrade?</h3>
                                            <p style={{fontSize: 'larger'}}>Purchase one of our plans or modify and
                                                existing plan below.</p>
                                            {plan === 'Loading...'
                                                ?
                                                <Button style={{width: '80%', margin: '0 auto'}} variant={'success'}
                                                        href={''}>Loading...</Button>
                                                : plan === 'none'
                                                    ?
                                                    <Button style={{width: '80%', margin: '0 auto'}} variant={'success'}
                                                            href={'/auth-pricing'}>Get a Plan</Button>
                                                    :
                                                    <Button style={{width: '80%', margin: '0 auto'}} variant={'success'}
                                                            href={'https://checkout.webminers.dev/p/login/bIY5leaPGengaVG9AA'}>
                                                        Subscription Management</Button>
                                            }
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </>
                        :
                        <>
                            <h1>Loading...</h1>
                        </>
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
            </div>
        </>
    );
}