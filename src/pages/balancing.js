import {Button, Card, Col, Container, Nav, Row, Tab} from "react-bootstrap";
import styles from "@/styles/Home.module.css";
import React, {useEffect, useState} from "react";
import {doc, getDoc} from "firebase/firestore";
import {auth, db} from "@/config";
import {useAuthState} from "react-firebase-hooks/auth";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/WebminersLogo.webp";
import Head from "next/head";

export default function Balancing() {
    let [plan, setPlan] = useState('')
    const [user, loading] = useAuthState(auth)

    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                const promise = await getDoc(doc(db, 'users', user.uid)).then(profile => profile.data())
                console.log(promise)
                setPlan(promise['plan'])
            }
            return ''
        }
        fetchData()
    }, [user, loading]);


    return (
        <>
            <Head>
                <title>Webminers Balancing - Make Data-Driven Decisions With Investment Research</title>
                <meta name="description"
                      content="Webminers Balancing are revolutionizing how we make financial decisions with new balances and optimization"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property='og:image' content={logo}/>
            </Head>
            <Container id={'top'} style={{padding: '0 25px 25px 25px'}}>
                <Row>
                    <Col lg={6} md={12} sm={12} style={{padding: '10px'}}>
                        <Container style={{padding: '10px'}}>
                            <Card style={{backgroundColor: 'rgb(225,225,225)'}}>
                                <Container>
                                    <Card.Body style={{margin: 'auto'}}>
                                        <Card.Title style={{fontSize: '30px', textAlign: 'center', paddingTop: '15px'}}>
                                            Cryptocurrency Balancing
                                        </Card.Title>
                                    </Card.Body>
                                    <Card.Body style={{margin: 'auto'}}>
                                        <Card.Text style={{fontSize: '20px'}}>
                                            These balances are based on when you have the most potential for
                                            rewards with both Alt Coins and Ethereum. These balances do not mean
                                            buy or sell, rather if you were to buy that these percentages are what
                                            the data is saying to do (visit our Economic Seasons page for this)
                                        </Card.Text>
                                        <br/>
                                        <Button href='#alt' style={{float: 'right', marginBottom: '10px'}}
                                                variant="success"
                                                size='md'>Alt Balancing</Button>
                                    </Card.Body>
                                </Container>
                            </Card>
                        </Container>
                    </Col>
                    <Col lg={6} md={12} sm={12} style={{padding: '10px'}}>
                        <Container style={{padding: '10px'}}>
                            <Card style={{height: 'auto', width: 'auto', padding: '10px'}}>
                                <Image src={'/plots/AssetBalancing.webp'} alt={'AssetBalancing'}/>
                            </Card>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Container style={{padding: '0 25px 25px 25px'}}>
                <Row id={'alt'}>
                    <Col lg={6} md={12} sm={12} style={{padding: '10px'}}>
                        <Container style={{padding: '10px'}}>
                            <Card style={{height: 'auto', width: 'auto', padding: '10px'}}>
                                {loading
                                    ? <Card.Title>Loading...</Card.Title>
                                    : user
                                        ? plan === ''
                                            ? <Card.Title>Loading...</Card.Title>
                                            : plan !== 'none' && plan !== 'Seasonalist'
                                                ? <Image src={'/plots/MiniAssetBalancing.webp'}
                                                         alt={'MiniAssetWeighting'}/>
                                                : <Container><h1 style={{textAlign: "center"}}>Please visit <Link
                                                    className={styles.weblink} href={'/auth/profile'}>Profile</Link> to
                                                    Upgrade Plan
                                                </h1></Container>
                                        : <Container><h1 style={{textAlign: "center"}}>Please <Link
                                            className={styles.weblink} href={'/auth/login'}>Login</Link> to
                                            see content</h1></Container>
                                }
                            </Card>
                        </Container>
                    </Col>
                    <Col lg={6} md={12} sm={12} style={{padding: '10px'}}>
                        <Container style={{padding: '10px'}}>
                            <Card style={{backgroundColor: 'rgb(225,225,225)'}}>
                                <Container>
                                    <Card.Body style={{margin: 'auto'}}>
                                        <Card.Title style={{fontSize: '30px', textAlign: 'center', paddingTop: '15px'}}>
                                            Alt Balancing
                                        </Card.Title>
                                    </Card.Body>
                                    <Card.Body style={{margin: 'auto'}}>
                                        <Card.Text style={{fontSize: '20px'}}>
                                            Here is where we have the balances of our selected currencies. These
                                            coins are picked for their ability to be predicted and possible outcome.
                                            This graph is only available through &apos;The Investors Plan&apos;, which
                                            you
                                            can get if you haven&apos;t already below.
                                        </Card.Text>
                                        <br/>
                                        {loading
                                            ? <Card.Title>Loading...</Card.Title>
                                            : user
                                                ? plan === ''
                                                    ? <Card.Title>Loading...</Card.Title>
                                                    : plan !== 'none' && plan !== 'Seasonalist'
                                                        ? plan === 'Strategist'
                                                            ? <Button href='#exp'
                                                                      style={{float: 'right', marginBottom: '10px'}}
                                                                      variant="success"
                                                                      size='md'>Experimental Weightings</Button>
                                                            : <Button href='/pricing'
                                                                      style={{float: 'right', marginBottom: '10px'}}
                                                                      variant="success"
                                                                      size='md'>Experimental Seasons</Button>
                                                        : <Card.Title>Please Upgrade Plan</Card.Title>
                                                : <Container><h1 style={{textAlign: "center"}}>Please <Link
                                                    className={styles.weblink} href={'/auth/login'}>Login</Link> to
                                                    see content</h1></Container>
                                        }
                                    </Card.Body>
                                </Container>
                            </Card>
                        </Container>
                    </Col>
                </Row>
                {loading
                    ? <Container><h1 style={{color: 'whitesmoke'}}>Loading...</h1></Container>
                    : user
                        ? plan === ''
                            ? <Container><h1 style={{color: 'whitesmoke'}}>Loading...</h1></Container>
                            : plan === 'Strategist'
                                ?
                                <Row>
                                    <Col lg={6} md={12} sm={12} style={{padding: '10px'}}>
                                        <Container>
                                            <Card style={{backgroundColor: 'rgb(225,225,225)'}}>
                                                <Container>
                                                    <Card.Body style={{margin: 'auto'}}>
                                                        <Card.Title id={'exp'}
                                                                    style={{
                                                                        fontSize: '30px',
                                                                        textAlign: 'center',
                                                                        paddingTop: '15px'
                                                                    }}>
                                                            Experimental Balancing
                                                        </Card.Title>
                                                    </Card.Body>
                                                    <Card.Body style={{margin: 'auto'}}>
                                                        <Card.Text style={{fontSize: '20px'}}>
                                                            Experimental Balancing are an accumulation of balances
                                                            that include assets having a set strategy and those that are
                                                            more relaxed in the way that we gauge when to buy and when
                                                            to sell. These are the balances that have resulted from the
                                                            <Link className={styles.weblink}
                                                                  href={'/research'}> Experienced Research </Link> tab
                                                            that you can look into and modify
                                                            to your specific investing style since these assets are
                                                            chosen only based on risk vs reward.
                                                        </Card.Text>
                                                        <br/>
                                                        <Button href='#top'
                                                                style={{float: 'right', marginBottom: '10px'}}
                                                                variant="success"
                                                                size='md'>Back to Top</Button>

                                                    </Card.Body>
                                                </Container>
                                            </Card>
                                        </Container>
                                    </Col>
                                    <Col lg={6} md={12} sm={12} style={{padding: '10px'}}>
                                        <Container>
                                            <Card style={{height: 'auto', width: 'auto', padding: '10px'}}>
                                                <Image src={'/plots/MiniAssetBalancingExp.webp'}
                                                       alt={'MiniAssetWeighting'}/>
                                            </Card>
                                        </Container>
                                    </Col>
                                </Row>
                                : plan === 'none'
                                    ? <Container style={{display: 'none'}}></Container>
                                    : <Container style={{padding: '25px 10%'}}>
                                        <h2 style={{textAlign: "center", color: 'whitesmoke'}}>Please visit <Link
                                            className={styles.weblink}
                                            href={'/auth/profile'}>Profile</Link> to
                                            upgrade plan to Strategist for access to Experimental Balancing</h2>
                                    </Container>
                        : <Container style={{display: 'none'}}></Container>
                }
            </Container>
        </>
    )
}