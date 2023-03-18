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
            <div style={{backgroundColor: 'whitesmoke', width: '100%', borderRadius:'25px'}}>
                <Container style={{padding: '0 25px 25px 25px'}}>
                    <Row>
                        <Col lg={6} md={12} sm={12} style={{padding: '10px'}}>
                            <Container>
                                <Card style={{backgroundColor: 'rgb(245,245,245)'}}>
                                    <Container>
                                        <Card.Body style={{margin: 'auto'}}>
                                            <Card.Title
                                                style={{fontSize: '30px', textAlign: 'center', paddingTop: '15px'}}>
                                                Market Seasons
                                            </Card.Title>
                                        </Card.Body>
                                        <Card.Body style={{margin: 'auto'}}>
                                            <Card.Text style={{fontSize: '20px'}}>
                                                Seasonality, also known as the ups and downs of the market, is
                                                inevitable. What we have to do with this knowledge is predict
                                                when the market will start going up or down. Webminers has produced
                                                its Research on Seasonality in two forms. The first is the Economy
                                                or Generalized Market, and the second is Asset Specific. Some may
                                                say that the markets are unpredictable. However, with well-suited
                                                data, Seasonality becomes crystal clear.
                                                <br/>
                                                <br/>
                                                P.S. Now that we have answered &apos;When to invest?&apos; visit
                                                <Link className={styles.weblink} href={'balancing'}> Webminers Balancing
                                                </Link> to answer &apos;What to invest in?&apos;
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
                                                                   alt={'Economic Seasons'}
                                                                   placeholder={'blur'}
                                                            />
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
                                                                            ?
                                                                            <Image src={'/plots/AssetSeasonsPlot.webp'}
                                                                                   alt={'Asset Seasons'}
                                                                                   placeholder={'blur'}
                                                                            />
                                                                            :
                                                                            <Container>
                                                                                <h1 style={{textAlign: "center"}}>Please
                                                                                    visit <Link
                                                                                        className={styles.weblink}
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
            </div>
        </>
    )
}