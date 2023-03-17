import {Button, Card, Col, Container, Nav, Row, Tab, Tabs} from "react-bootstrap";
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
            <div style={{width:'100%', backgroundColor:'whitesmoke', borderRadius:'25px'}}>
                <Container id={'top'} style={{padding: '0 25px 25px 25px'}}>
                    <Row>
                        <Col lg={6} md={12} sm={12} style={{padding: '10px'}}>
                            <Container style={{padding: '10px'}}>
                                <Card style={{backgroundColor: 'rgb(245,245,245)'}}>
                                    <Container>
                                        <Card.Body style={{margin: 'auto'}}>
                                            <Card.Title
                                                style={{fontSize: '30px', textAlign: 'center', paddingTop: '15px'}}>
                                                Cryptocurrency Balancing
                                            </Card.Title>
                                        </Card.Body>
                                        <Card.Body style={{margin: 'auto'}}>
                                            <Card.Text style={{fontSize: '20px'}}>
                                                Asset balancing diversifies your portfolio and reduces risk. In
                                                efficient investing, we <strong>need</strong> at least a little bit of
                                                diversification. Rather than chucking a few assets into a hat and
                                                picking from it, we have measured the efficiencies of many options
                                                and selected the assets that stood out the most to us. This efficiency
                                                data comes from <Link className={styles.weblink} href={'research'}>
                                                Webminers Research</Link> if you want to build your portfolio.
                                                There are three levels of Balancing, each with more assets for
                                                you to pick from.
                                                <br/>
                                                <br/>
                                                P.S. Now that we have answered &apos;What to invest in?&apos; visit
                                                <Link className={styles.weblink} href={'seasons'}> Webminers Seasons
                                                </Link> to answer &apos;When to invest?&apos;
                                            </Card.Text>
                                        </Card.Body>
                                    </Container>
                                </Card>
                            </Container>
                        </Col>
                        <Col lg={6} md={12} sm={12} style={{padding: '10px'}}>
                            <Container style={{padding: '10px'}}>
                                <Card style={{height: 'auto', width: 'auto', padding: '10px'}}>
                                    <Tab.Container id="left-tabs-example" defaultActiveKey="Basic">
                                        <Col>
                                            <Container style={{height: 'auto', width: 'auto', padding: '10px'}}>
                                                <Row lg={12} style={{paddingBottom: '5px'}}>
                                                    <Col md={12}>
                                                        <Nav variant="pills" className="flex-column">
                                                            <Nav.Item>
                                                                <Nav.Link className={'navgreen'} eventKey="Basic">Basic
                                                                    Balancing</Nav.Link>
                                                            </Nav.Item>
                                                        </Nav>
                                                    </Col>
                                                    <Col md={12}>
                                                        <Nav variant="pills" className="flex-column">
                                                            <Nav.Item>
                                                                <Nav.Link className={'navgreen'} eventKey="Alt">Alt
                                                                    Balancing</Nav.Link>
                                                            </Nav.Item>
                                                        </Nav>
                                                    </Col>
                                                    <Col md={12}>
                                                        <Nav variant="pills" className="flex-column">
                                                            <Nav.Item>
                                                                <Nav.Link className={'navgreen'}
                                                                          eventKey="Experimental">Experimental
                                                                    Balancing</Nav.Link>
                                                            </Nav.Item>
                                                        </Nav>
                                                    </Col>
                                                </Row>
                                            </Container>
                                            <Row lg={12}>
                                                <Tab.Content>
                                                    <Tab.Pane eventKey='Basic'>
                                                        <Card style={{height: 'auto', width: 'auto', padding: '10px'}}>
                                                            <Image src={'/plots/AssetBalancing.webp'}
                                                                   alt={'AssetBalancing'}/>
                                                        </Card>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey='Alt'>
                                                        <Card style={{height: 'auto', width: 'auto', padding: '10px'}}>
                                                            {loading
                                                                ? <Card.Title>Loading...</Card.Title>
                                                                : user
                                                                    ? plan === ''
                                                                        ? <Card.Title>Loading...</Card.Title>
                                                                        : plan !== 'none' && plan !== 'Seasonalist'
                                                                            ? <Image
                                                                                src={'/plots/MiniAssetBalancing.webp'}
                                                                                alt={'MiniAssetWeighting'}/>
                                                                            :
                                                                            <Container><h1
                                                                                style={{textAlign: "center"}}>Please
                                                                                visit <Link
                                                                                    className={styles.weblink}
                                                                                    href={'/auth/profile'}>Profile</Link> to
                                                                                Upgrade Plan
                                                                            </h1></Container>
                                                                    : <Container><h1
                                                                        style={{textAlign: "center"}}>Please <Link
                                                                        className={styles.weblink}
                                                                        href={'/auth/login'}>Login</Link> to
                                                                        see content</h1></Container>
                                                            }
                                                        </Card>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey='Experimental'>
                                                        <Card style={{height: 'auto', width: 'auto', padding: '10px'}}>
                                                            {loading
                                                                ?
                                                                <Card.Title>Loading...</Card.Title>
                                                                : user
                                                                    ? plan === ''
                                                                        ?
                                                                        <Card.Title>Loading...</Card.Title>
                                                                        : plan === 'Strategist'
                                                                            ?
                                                                            <Image
                                                                                src={'/plots/MiniAssetBalancingExp.webp'}
                                                                                alt={'MiniAssetWeighting'}/>
                                                                            :
                                                                            <Container style={{padding: '25px 10%'}}>
                                                                                <h2 style={{
                                                                                    textAlign: "center",
                                                                                }}>Please visit <Link
                                                                                    className={styles.weblink}
                                                                                    href={'/auth/profile'}>Profile</Link> to
                                                                                    upgrade to Strategist plan</h2>
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