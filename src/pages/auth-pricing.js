import {Button, Card, CardGroup, Col, Container, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import Script from "next/script";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "@/config";
import Router from "next/router";
import {doc, getDoc} from "firebase/firestore";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import logo from "@/images/WebminersLogo.webp";
import Head from "next/head";

export default function AuthPricing() {
    let [plan, setPlan] = useState('')
    let [email, setEmail] = useState('')
    const [user, loading] = useAuthState(auth)
    useEffect(() => {
        const fetchData = async () => {
            if (!user) Router.push('/auth/login');
            if (user) {
                const promise = await getDoc(doc(db, 'users', user.uid)).then(profile => profile.data())
                console.log(promise)
                setPlan(promise['plan'])
                setEmail(promise['email'])
            }
            return ''
        }
        fetchData()
    }, [user, loading]);
    return (
        <>
            <Script async src="https://js.stripe.com/v3/pricing-table.js"/>
            <Head>
                <title>Webminers Investing - Authorized Pricing</title>
                <meta name="description"
                      content="Webminers Investing provides scientifically backed research and education to help you
                      make informed investing decisions with Insights, Balancing, and Efficiency."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property='og:image' content={'webminers.dev/webminerslogo.webp'}/>
            </Head>
            <Container className={styles.full}>
                <Container>
                    <h1 style={{textAlign: 'center', padding: '50px'}}>
                        Setup the plan to fuel your data-driven investing
                    </h1>
                </Container>
                {loading
                    ? <Container><h1>Loading...</h1></Container>
                    : user
                        ? plan === ''
                            ? <Container><h1>Loading...</h1></Container>
                            : plan === 'none'
                                ?
                                <Container>
                                    <stripe-pricing-table pricing-table-id="prctbl_1MfD3eI0ncnoSqWdl7SiDpSk"
                                                          publishable-key="pk_live_51LHAg0I0ncnoSqWdLblcuXyoeNHBnIKU3TKri7mWQ1y836osfObN5oC7MRkJKPZ4En5PD8dGxWBZQwOJekBIB1m4002sL3bTrK"
                                                          customer-email={email}>
                                    </stripe-pricing-table>
                                    {/*<stripe-pricing-table pricing-table-id="prctbl_1MaQyOI0ncnoSqWdKqzqZ9k7"*/}
                                    {/*                      publishable-key="pk_test_51LHAg0I0ncnoSqWddZdSvphuvJUeCuQUNAysqSa74B02zg8ZGTrXl4Z3kgmJkgIOHNRX1V5590qZf9CZBgdIAFQd00WjC4iVmd"*/}
                                    {/*                      customer-email={email}>*/}
                                </Container>
                                : <Container><h1 style={{textAlign: "center"}}>Please Visit <Link
                                    className={styles.weblink}
                                    href={'/auth/profile'}>Profile</Link> to
                                    Upgrade Plan</h1></Container>
                        : <Container><h1>Login</h1></Container>
                }
                <Container style={{padding: '25px'}}>
                    <h1 style={{textAlign: 'center', padding: '25px'}}>
                        What Others Think
                    </h1>
                    <CardGroup>
                            <Row>
                                <Col md={12} lg={4}>
                                    <Card className={styles.cardhover}>
                                        <Card.Body>
                                            <p style={{textAlign: 'center', padding: '5px'}}>
                                                I was a complete novice when it came to investing, but everything was
                                                very easy to understand and read. I now feel confident making informed
                                                decisions about my money. I think the analysis section is the best
                                                part where I can compare assets to pick and choose from for my own
                                                investments.
                                            </p>
                                            <p style={{margin:0}}>
                                                - John S.
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={12} lg={4} style={{padding: '15px'}}>
                                    <Card className={styles.cardhover}>
                                        <Card.Body>
                                            <p style={{textAlign: 'center', padding: '5px'}}>
                                                I was skeptical about the whole Webminers Investing System at first,
                                                but after going through everything I can truly state that it was far
                                                beyond my expectations. The Seasons organized and simple to understand.
                                                Everything in my Subscription was easy to find and I have a much deeper
                                                understanding of my personal investing plans.
                                            </p>
                                            <p style={{margin:0}}>
                                                - Sarah L.
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={12} lg={4}>
                                    <Card className={styles.cardhover}>
                                        <Card.Body>
                                            <p style={{textAlign: 'center', padding: '5px'}}>
                                                Whether you&apos;re a seasoned investor or a newcomer to the world of
                                                crypto, I highly recommend working with Webminers. Their A-Class
                                                research resources have helped me make informed decisions about my
                                                investments and guide me through my previous crypto difficulties.
                                                I couldn&apos;t recommend them enough!
                                            </p>
                                            <p style={{margin:0}}>
                                                - Mark T.
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </CardGroup>
                </Container>
            </Container>
        </>
    )
}