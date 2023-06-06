import {Button, Card, Col, Container, Nav, Row, Tab} from "react-bootstrap";
import styles from "@/styles/Home.module.css";
import React, {useEffect, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "@/config";
import {doc, getDoc} from "firebase/firestore";
import Image from "next/image";
import Head from "next/head";
import EconomicInsightsPlot from '@/images/plots/EconomicInsightsPlot.webp'
import AssetInsightsPlot from '@/images/plots/AssetInsightsPlot.webp'
import InsightsPlot from '@/images/plots/InsightsPlot.webp'


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

    function calculate() {
        const initialInvestment = document.getElementById("initial-investment").value;
        const monthlyReturn = document.getElementById("monthly-return").value;
        const months = document.getElementById("months").value;
        const totalProfit = initialInvestment * Math.pow(1 + monthlyReturn / 100, months) - initialInvestment;
        const result = document.getElementById("result");
        result.value = "$" + totalProfit.toFixed(2); // display result
    }

    const SchemaMarkup = () => (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "@id": "https://webminers.dev/insights/",
                    "url": "https://webminers.dev/insights/",
                    "image": "https://webminers.dev/webminers-logo.webp",
                    "name": "Market Insights - Historically-Backed Crypto Indicator",
                    "datePublished": "February 24th, 2023",
                    "dateModified": "May 26th, 2023",
                    "description": "Finding out what the market is doing right now can be difficult. We provide you with an easy to follow indicator of where we believe the market is accurately."
                }),
            }}
        />
    )

    return (
        <>
            <Head>
                <title>Market Insights - Historically-Backed Crypto Indicator</title>
                <meta name={'og:title'} content={'Market Insights - Historically-Backed Crypto Indicator'}/>
                <meta name="description"
                      content="Finding out what the market is doing right now can be difficult. We provide you with an easy to follow indicator of where we believe the market is accurately."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property='og:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                <meta property='og:type' content='website'/>
                <meta property='og:description'
                      content='Finding out what the market is doing right now can be difficult. We provide you with an easy to follow indicator of where we believe the market is accurately.'/>
                <meta property='og:sitename' content='Webminers'/>
                <meta name="twitter:card" content="summary"/>
                <meta name='twitter:title' content='Market Insights - Historically-Backed Crypto Indicator'/>
                <meta name='twitter:description'
                      content='Finding out what the market is doing right now can be difficult. We provide you with an easy to follow indicator of where we believe the market is accurately.'/>
                <meta name='twitter:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                <SchemaMarkup/>
            </Head>
            <div style={{backgroundColor: 'whitesmoke', width: '100%', borderRadius: '25px'}}>
                <Container style={{padding: '0 25px 25px 25px'}}>
                    <Row>
                        <Col xxl={5} lg={6} md={12} className={styles.pad}>
                            <Container>
                                <Card style={{backgroundColor: 'rgb(245,245,245)'}}>
                                    <Container>
                                        <Card.Body style={{margin: 'auto'}}>
                                            <Card.Title
                                                style={{fontSize: '30px', textAlign: 'center', paddingTop: '15px'}}>
                                                Market Insights
                                            </Card.Title>
                                        </Card.Body>
                                        <Card.Body style={{margin: 'auto'}}>
                                            <Card.Text style={{fontSize: '20px'}}>
                                                Reflexivity, also known as the ups and downs of the market, is
                                                inevitable. What we have to do with this knowledge is predict
                                                when the market will start going up or down. Webminers has produced
                                                its findings on reflexivity in two forms. The first is the Generalized
                                                Market Insights, and the second is Asset Specific. Some may
                                                say that the markets are unpredictable. However, with well-suited
                                                data, reflexivity becomes crystal clear.
                                                <br/>
                                                <br/>
                                                P.S. Now that we have answered &apos;When to invest?&apos; visit
                                                <Card.Link className={styles.weblink} href={'balancing'}> Asset
                                                    Balancing
                                                </Card.Link> to answer &apos;What to invest in?&apos;
                                            </Card.Text>
                                        </Card.Body>
                                    </Container>
                                </Card>
                            </Container>
                        </Col>
                        <Col xxl={5} lg={6} md={12} className={styles.pad}>
                            <Container>
                                <Card className={styles.card1}>
                                    <Tab.Container id="left-tabs-example" defaultActiveKey="Basic">
                                        <Col>
                                            <Container className={styles.card1}>
                                                <Row lg={12} style={{paddingBottom: '5px'}}>
                                                    <Col md={12}>
                                                        <Nav variant="pills" className="flex-column">
                                                            <Nav.Item>
                                                                <Nav.Link className={styles.navgreen} eventKey="Basic">
                                                                    Overall Economic Insights</Nav.Link>
                                                            </Nav.Item>
                                                        </Nav>
                                                    </Col>
                                                    <Col md={12}>
                                                        <Nav variant="pills" className="flex-column">
                                                            <Nav.Item>
                                                                <Nav.Link className={styles.navgreen} eventKey="Alt">
                                                                    Crypto Insights</Nav.Link>
                                                            </Nav.Item>
                                                        </Nav>
                                                    </Col>
                                                </Row>
                                            </Container>
                                            <Row lg={12}>
                                                <Tab.Content>
                                                    <Tab.Pane eventKey='Basic'>
                                                        <Card className={styles.card1}>
                                                            <Image style={{height: '100%', width: '100%'}}
                                                                   src={EconomicInsightsPlot}
                                                                   alt={'Economic Seasons'}
                                                                   placeholder={'blur'}
                                                            />
                                                        </Card>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey='Alt'>
                                                        <Card className={styles.card1}>
                                                            {loading
                                                                ? <Card.Title>Loading...</Card.Title>
                                                                : user
                                                                    ? plan === ''
                                                                        ? <Card.Title>Loading...</Card.Title>
                                                                        : plan !== 'none'
                                                                            ?
                                                                            <Image
                                                                                style={{height: '100%', width: '100%'}}
                                                                                src={AssetInsightsPlot}
                                                                                alt={'Asset Seasons'}
                                                                                placeholder={'blur'}
                                                                            />
                                                                            :
                                                                            <>
                                                                                <h4 style={{textAlign: "center"}}>
                                                                                    <Card.Link
                                                                                        className={styles.weblink}
                                                                                        href={'/pricing'}>Essential
                                                                                        Investing
                                                                                        Plan</Card.Link> Required
                                                                                </h4>
                                                                                <Image style={{
                                                                                    height: '100%',
                                                                                    width: '100%'
                                                                                }}
                                                                                       src={InsightsPlot}
                                                                                       alt={'Seasons Plot'}
                                                                                       placeholder={'blur'}
                                                                                />
                                                                            </>
                                                                    :
                                                                    <>
                                                                        <h4
                                                                            style={{textAlign: "center"}}>Please <Card.Link
                                                                            className={styles.weblink}
                                                                            href={'/auth/login'}>Login</Card.Link> to
                                                                            see content</h4>
                                                                        <Image style={{height: '100%', width: '100%'}}
                                                                               src={InsightsPlot}
                                                                               alt={'Seasons Plot'}
                                                                               placeholder={'blur'}
                                                                        />
                                                                    </>
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
                        <Col xxl={2} lg={12} className={styles.pad}>
                            <div>
                                <h2 style={{textAlign: 'center'}}>Investing Calculator</h2>
                                <p>Predicted profit based on average monthly return.</p>
                                <Col>
                                    <Row style={{margin: '15px'}}>
                                        <label style={{padding: 0}} htmlFor="initial-investment">Starting Amount</label>
                                        <input className={styles.inputs} type="number" id="initial-investment" min="0"
                                               required/>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <label style={{padding: 0}} htmlFor="monthly-return">Monthly Profit %</label>
                                        <input className={styles.inputs} type="number" id="monthly-return" min="0"
                                               required/>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <label style={{padding: 0}} htmlFor="months">Month Count</label>
                                        <input className={styles.inputs} type="number" id="months" min="0" required/>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <Button variant={'success'} type="button" onClick={calculate}>Calculate</Button>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <label style={{padding: 0}} htmlFor="result">Total Profit</label>
                                        <input className={styles.inputs} type="text" id="result" disabled/>
                                    </Row>
                                </Col>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}