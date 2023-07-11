import {Button, Card, CardGroup, Col, Container, Row, Tab, Nav, Table, Badge} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import styles from '@/styles/Home.module.css'
import Head from "next/head";
import Router from "next/router";
import {doc, getDoc} from "firebase/firestore";
import {auth, db} from "@/config";
import {useAuthState} from "react-firebase-hooks/auth";


export default function Pricing() {
    let [url, setUrl] = useState('/auth/login')
    let [user, loading] = useAuthState(auth)
    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                const promise = await getDoc(doc(db, 'users', user.uid)).then(profile => profile.data())
                console.log(promise)
                if (promise['plan'] !== 'none') {
                    setUrl('https://checkout.webminers.dev/p/login/bIY5leaPGengaVG9AA')
                } else {
                    setUrl('auth-pricing')
                }
            }
            return ''
        }
        fetchData()
    }, [user, loading]);
    const SchemaMarkup = () => (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "@id": "https://webminers.dev/pricing/",
                    "url": "https://webminers.dev/pricing/",
                    "image": "https://webminers.dev/webminers-logo.webp",
                    "name": "Plan Pricing for Webminers Investing",
                    "datePublished": "February 24th, 2023",
                    "dateModified": "June 1st, 2023",
                    "description": "Plan pricing is where you will find all our plans and their benefits. We also have a free forever plan that you can sign up for no credit card required."
                }),
            }}
        />
    )

    return (
        <>
            <Head>
                <title>Plan Pricing for Webminers Investing</title>
                <meta name={'og:title'} content={'Plan Pricing for Webminers Investing'}/>
                <meta name="description"
                      content="Plan pricing is where you will find all our plans and their benefits. We also have a free forever plan that you can sign up for no credit card required."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property='og:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                <meta property='og:type' content='website'/>
                <meta property='og:description'
                      content='Plan pricing is where you will find all our plans and their benefits. We also have a free forever plan that you can sign up for no credit card required.'/>
                <meta property='og:sitename' content='Webminers'/>
                <meta name="twitter:card" content="summary"/>
                <meta name='twitter:title' content='Plan Pricing for Webminers Investing'/>
                <meta name='twitter:description'
                      content='Plan pricing is where you will find all our plans and their benefits. We also have a free forever plan that you can sign up for no credit card required.'/>
                <meta name='twitter:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                <SchemaMarkup/>
            </Head>
            <div style={{width: '100%', backgroundColor: 'whitesmoke', borderRadius: '25px'}}>
                <Container style={{padding: '25px'}}>
                    <h1 style={{textAlign: 'center', padding: '40px 40px 10px 40px'}}>
                        Setup the plan to fuel your knowledgeable investing
                    </h1>
                    <Container>
                        <Row style={{fontSize: 'larger'}}>
                            <Col md={12} lg={4}>
                                <Card className={styles.pricing}>
                                    <Card.Body>
                                        <Row>
                                            <Col sm={12} md={6} lg={12}>
                                                <p className={styles.plan}>
                                                    Free Plan
                                                </p>
                                                <h2 style={{margin: 0}}>
                                                    $0
                                                </h2>
                                                <p>
                                                    /month
                                                </p>
                                            </Col>
                                            <Col sm={12} md={6} lg={12} style={{textAlign: 'center'}}>
                                                <p>
                                                    Basic Asset Insights
                                                </p>
                                                <p>
                                                    Basic Portfolio Research
                                                </p>
                                                <p>
                                                    Basic Crypto Efficiency
                                                </p>
                                            </Col>
                                        </Row>
                                        <Button variant={'outline-success'} className={styles.btn}
                                                href='/auth/signup'>Start For Free</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={12} lg={4}>
                                <Card className={styles.pricing} style={{border: '2px solid rgb(0, 175, 75)'}}>
                                    <Card.Body>
                                        <Row>
                                            <Col sm={12} md={6} lg={12}>
                                                <p className={styles.plan}>
                                                    Balanced Plan <Badge style={{background: 'rgb(0,175,75) !important'}} bg="success">Best Deal</Badge>
                                                </p>
                                                <h2 style={{margin: 0}}>
                                                    $24.99
                                                </h2>
                                                <p>
                                                    /month
                                                </p>
                                            </Col>
                                            <Col sm={12} md={6} lg={12} style={{textAlign: 'center'}}>
                                                <p>
                                                    All from Essential Plan
                                                </p>
                                                <p>
                                                    Premium Portfolio Research
                                                </p>
                                                <p>
                                                    Premium Crypto Efficiency
                                                </p>
                                            </Col>
                                        </Row>
                                        <Button variant={'outline-success'} className={styles.btn}
                                                href='/auth-pricing'>Start For Free</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={12} lg={4}>
                                <Card className={styles.pricing}>
                                    <Card.Body>
                                        <Row>
                                            <Col sm={12} md={6} lg={12}>
                                                <p className={styles.plan}>
                                                    Strategist Plan
                                                </p>
                                                <h2 style={{margin: 0}}>
                                                    $49.99
                                                </h2>
                                                <p>
                                                    /month
                                                </p>
                                            </Col>
                                            <Col sm={12} md={6} lg={12} style={{textAlign: 'center'}}>
                                                <p>
                                                    All from Balanced Plan
                                                </p>
                                                <p>
                                                    High-Equity Portfolio Research
                                                </p>
                                            </Col>
                                        </Row>
                                        <Button variant={'outline-success'} className={styles.btn}
                                                href='/auth-pricing'>Start For Free</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <h2 style={{textAlign: 'center', padding: '25px', fontSize: '40px'}}>
                            What Others Think
                        </h2>
                        <CardGroup>
                            <Row>
                                <Col md={12} lg={4}>
                                    <Card className={styles.cardhover}>
                                        <Card.Body>
                                            <p style={{textAlign: 'center', padding: '5px'}}>
                                                I was a complete novice when it came to crypto, but
                                                everything was
                                                very easy to understand and read. I now feel confident making
                                                informed
                                                decisions about my money. I think the efficiency section is the
                                                best
                                                part where I can compare assets to pick and choose from for my
                                                own
                                                investments.
                                            </p>
                                            <p style={{margin: 0}}>
                                                - John S.
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={12} lg={4} style={{padding: '15px'}}>
                                    <Card className={styles.cardhover}>
                                        <Card.Body>
                                            <p style={{textAlign: 'center', padding: '5px'}}>
                                                I was skeptical about the whole Webminers Investing Education at
                                                first,
                                                but after going through everything I can truly state that it was
                                                far
                                                beyond my expectations. The Insights organized and simple to
                                                understand.
                                                Everything in my Subscription was easy to find and I have a much
                                                deeper
                                                understanding of my personal investing plans.
                                            </p>
                                            <p style={{margin: 0}}>
                                                - Sarah L.
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={12} lg={4}>
                                    <Card className={styles.cardhover}>
                                        <Card.Body>
                                            <p style={{textAlign: 'center', padding: '5px'}}>
                                                Whether you&apos;re a seasoned investor or a newcomer to the
                                                world of
                                                crypto, I highly recommend working with Webminers. Their A-Class
                                                research resources have helped me make informed decisions about
                                                my
                                                investments and guide me through my previous crypto
                                                difficulties.
                                                I couldn&apos;t recommend them enough!
                                            </p>
                                            <p style={{margin: 0}}>
                                                - Mark T.
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </CardGroup>
                    </Container>
                    <Container style={{padding: '15px'}}>
                        <Card className={styles.cardhover} style={{margin:'auto', maxWidth:'800px'}}>
                            <Card.Body>
                                <Card.Title style={{fontSize: 'xx-large', textAlign: 'center'}}>Not Ready For a
                                    Paid
                                    Plan?</Card.Title>
                                <Card.Text style={{fontSize: 'x-large', textAlign: 'center'}}>
                                    Start today
                                    completely <strong>free</strong> with our basic features and email updates
                                    - <Card.Link className={styles.weblink}
                                                 href={'/auth/signup'}>Signup Now</Card.Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Container>
                </Container>
            </div>
        </>
    )
}