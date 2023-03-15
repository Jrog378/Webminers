import {Button, Card, Col, Container, Nav, Row, Tab} from "react-bootstrap";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "@/config";
import {doc, getDoc} from "firebase/firestore";
import Image from "next/image";
import logo from "@/images/WebminersLogo.webp";
import Head from "next/head";


export default function AuthSeasons(props) {
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
                <title>Webminers Seasons - Make Data-Driven Decisions With Investment Research</title>
                <meta name="description"
                      content="Webminers Seasons are revolutionizing how we make financial decisions with new seasons and optimization"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property='og:image' content={logo}/>
            </Head>
            <Container style={{padding: '0 25px 25px 25px'}}>
                <Row>
                    <Col lg={6} md={12} sm={12} style={{padding: '10px'}}>
                        <Container>
                            <Card style={{backgroundColor: 'rgb(225,225,225)'}}>
                                <Container>
                                    <Card.Body style={{margin: 'auto'}}>
                                        <Card.Title style={{fontSize: '30px', textAlign: 'center', paddingTop: '15px'}}>
                                            Market Seasons
                                        </Card.Title>
                                    </Card.Body>
                                    <Card.Body style={{margin: 'auto'}}>
                                        <Card.Text style={{fontSize: '20px'}}>
                                            Seasons are what make up the markets. Reflexivity is what makes the ups and
                                            downs possible. Since we know that every movement will eventually go the
                                            other way, we can predict when that will happen. Webminers have seasons Long
                                            Term (50-100 Years), Mid Term (4-8 Years), Short Term (4-6 Months), and Mini
                                            Term (2-8 Weeks). Since market seasons are general, check out <Link
                                            className={styles.weblink} href={'/balancing'}> Asset Weightings </Link> to
                                            find out what we have found to be the best assets to invest in. These
                                            asset seasons can be an extension of the Mini Term Market Season as
                                            they span 2-8 weeks. The importance of having individual asset seasons is to
                                            catch a movement happening in an unexpectedly outstanding asset before it
                                            happens for the rest of the market. You can do two things when this type of
                                            event comes into play. You can sell and move to a new asset on the rise or
                                            wait for it to see how high it can go. Both options are great but still rely
                                            on the ability to catch an opportunity like this
                                        </Card.Text>
                                    </Card.Body>
                                </Container>
                            </Card>
                        </Container>
                    </Col>
                    <Col lg={6} md={12} sm={12} style={{padding: '10px'}}>
                        <Container>
                            <Card style={{height: 'auto', width: 'auto', padding: '10px'}}>
                                <Tab.Container id="left-tabs-example" defaultActiveKey="Basic">
                                    <Col>
                                        <Container style={{height: 'auto', width: 'auto', padding: '10px'}}>
                                            <Row lg={12} style={{paddingBottom: '5px'}}>
                                                <Col md={12}>
                                                    <Nav variant="pills" className="flex-column">
                                                        <Nav.Item>
                                                            <Nav.Link className={'navgreen'} eventKey="Basic">Economic
                                                                Seasons</Nav.Link>
                                                        </Nav.Item>
                                                    </Nav>
                                                </Col>
                                                <Col md={12}>
                                                    <Nav variant="pills" className="flex-column">
                                                        <Nav.Item>
                                                            <Nav.Link className={'navgreen'} eventKey="Alt">Asset
                                                                Seasons</Nav.Link>
                                                        </Nav.Item>
                                                    </Nav>
                                                </Col>
                                            </Row>
                                        </Container>
                                        <Row lg={12}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey='Basic'>
                                                    <Card style={{height: 'auto', width: 'auto', padding: '10px'}}>
                                                        <Image src={'/plots/EconomicSeasonsPlot.webp'}
                                                               alt={'Economic Seasons'}/>
                                                    </Card>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey='Alt'>
                                                    <Card style={{height: 'auto', width: 'auto', padding: '10px'}}>
                                                        {loading
                                                            ? <Card.Title>Loading...</Card.Title>
                                                            : user
                                                                ? plan === ''
                                                                    ? <Card.Title>Loading...</Card.Title>
                                                                    : plan !== 'none'
                                                                        ? <Image src={'/plots/AssetSeasonsPlot.webp'}
                                                                                 alt={'Asset Seasons'}/>
                                                                        :
                                                                        <Container>
                                                                            <h1 style={{textAlign: "center"}}>Please
                                                                                visit <Link className={styles.weblink}
                                                                                            href={'/auth/profile'}>Profile</Link>to
                                                                                Upgrade Plan
                                                                            </h1>
                                                                        </Container>
                                                                : <Container><h1
                                                                    style={{textAlign: "center"}}>Please <Link
                                                                    className={styles.weblink}
                                                                    href={'/auth/login'}>Login</Link> to
                                                                    see content</h1></Container>
                                                        }

                                                    </Card>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Row>
                                    </Col>
                                </Tab.Container>

                            </Card>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}