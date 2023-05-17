import {Button, Card, Col, Container, Nav, Row, Tab, Tabs} from "react-bootstrap";
import styles from "@/styles/Home.module.css";
import React, {useEffect, useState} from "react";
import {doc, getDoc} from "firebase/firestore";
import {auth, db} from "@/config";
import {useAuthState} from "react-firebase-hooks/auth";
import Image from "next/image";
import Head from "next/head";
import BalancingPlot from '@/images/plots/BalancingPlot.webp'
import AssetBalancing from '@/images/plots/AssetBalancing.webp'
import AssetBalancingPlot from '@/images/plots/AssetBalancingPlot.webp'
import AssetBalancingExp from '@/images/plots/AssetBalancingExp.webp'

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

    function calculate() {
        const startingAmount = document.getElementById("starting-amount").value;
        const endingAmount = document.getElementById("ending-amount").value;
        const diff = endingAmount - startingAmount
        const taxResult = document.getElementById("tax-result");
        const profitResult = document.getElementById("profit-result");
        if (diff < 0) {
            taxResult.value = 0
            profitResult.value = diff
        } else {
            taxResult.value = diff * 0.15
            profitResult.value = diff * 0.85
        }
    }

    return (
        <>
            <Head>
                <title>Webminers Investing - Asset Balancing</title>
                <meta name="description"
                      content="Webminers Investing provides scientifically backed research and education to help you
                      make informed investing decisions with Insights, Balancing, and Efficiency."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property='og:image' content={'https://webminers.dev/webminers-logo.webp'}/>
            </Head>
            <div style={{width: '100%', backgroundColor: 'whitesmoke', borderRadius: '25px'}}>
                <Container id={'top'} style={{padding: '0 25px 25px 25px'}}>
                    <Row>
                        <Col xxl={5} lg={6} md={12} className={styles.pad}>
                            <Container className={styles.pad}>
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
                                                data comes from <Card.Link className={styles.weblink} href={'research'}>
                                                Webminers Research</Card.Link> if you want to build your portfolio.
                                                There are three levels of Balancing, each with more assets for
                                                you to pick from.
                                                <br/>
                                                <br/>
                                                P.S. Now that we have answered &apos;What to invest in?&apos; visit
                                                <Card.Link className={styles.weblink} href={'insights'}> Webminers Market
                                                    Insights
                                                </Card.Link> to answer &apos;When to invest?&apos;
                                            </Card.Text>
                                        </Card.Body>
                                    </Container>
                                </Card>
                            </Container>
                        </Col>
                        <Col xxl={5} lg={6} md={12} className={styles.pad}>
                            <Container className={styles.pad}>
                                <Card >
                                    <Tab.Container id="left-tabs-example" defaultActiveKey="Basic">
                                        <Col>
                                            <Container className={styles.card1}>
                                                <Row lg={12} style={{paddingBottom: '5px'}}>
                                                    <Col md={12}>
                                                        <Nav variant="pills" className="flex-column">
                                                            <Nav.Item>
                                                                <Nav.Link className={styles.navgreen} eventKey="Basic">
                                                                    Basic Asset Balancing</Nav.Link>
                                                            </Nav.Item>
                                                        </Nav>
                                                    </Col>
                                                    <Col md={12}>
                                                        <Nav variant="pills" className="flex-column">
                                                            <Nav.Item>
                                                                <Nav.Link className={styles.navgreen} eventKey="Alt">
                                                                    Premium Asset Balancing</Nav.Link>
                                                            </Nav.Item>
                                                        </Nav>
                                                    </Col>
                                                    <Col md={12}>
                                                        <Nav variant="pills" className="flex-column">
                                                            <Nav.Item>
                                                                <Nav.Link className={styles.navgreen}
                                                                          eventKey="Experimental">
                                                                    Experimental Asset Balancing</Nav.Link>
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
                                                                   src={AssetBalancing}
                                                                   alt={'AssetBalancing'}
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
                                                                        : plan !== 'none' && plan !== 'Balanced'
                                                                            ?
                                                                            <Image
                                                                                style={{height: '100%', width: '100%'}}
                                                                                src={AssetBalancingPlot}
                                                                                alt={'Asset Balancing Plot'}
                                                                                placeholder={'blur'}
                                                                            />
                                                                            :
                                                                            <>
                                                                                <h2
                                                                                    style={{textAlign: "center"}}><Card.Link
                                                                                    className={styles.weblink}
                                                                                    href={'/pricing'}>
                                                                                    Balanced Investing Plan </Card.Link>
                                                                                    Required
                                                                                </h2>
                                                                                <Image style={{
                                                                                    height: '100%',
                                                                                    width: '100%'
                                                                                }}
                                                                                       src={BalancingPlot}
                                                                                       alt={'Balancing Plot'}
                                                                                       placeholder={'blur'}
                                                                                />
                                                                            </>
                                                                    :
                                                                    <>
                                                                        <h2
                                                                            style={{textAlign: "center"}}>Please <Card.Link
                                                                            className={styles.weblink}
                                                                            href={'/auth/login'}>Login</Card.Link> to
                                                                            see content</h2>
                                                                        <Image style={{height: '100%', width: '100%'}}
                                                                               src={BalancingPlot}
                                                                               alt={'Balancing Plot'}
                                                                               placeholder={'blur'}
                                                                        />
                                                                    </>
                                                            }
                                                        </Card>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey='Experimental'>
                                                        <Card className={styles.card1}>
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
                                                                                style={{height: '100%', width: '100%'}}
                                                                                src={AssetBalancingExp}
                                                                                alt={'Mini Asset Weighting Experienced'}
                                                                                placeholder={'blur'}
                                                                            />
                                                                            :
                                                                            <>
                                                                                <h2 style={{
                                                                                    textAlign: "center",
                                                                                }}><Card.Link
                                                                                    className={styles.weblink}
                                                                                    href={'/pricing'}>
                                                                                    Strategist Investing Plan </Card.Link>
                                                                                    Required</h2>
                                                                                <Image style={{
                                                                                    height: '100%',
                                                                                    width: '100%'
                                                                                }}
                                                                                       src={BalancingPlot}
                                                                                       alt={'Balancing Plot'}
                                                                                       placeholder={'blur'}
                                                                                />
                                                                            </>
                                                                    : <>
                                                                        <h2
                                                                            style={{textAlign: "center"}}>Please <Card.Link
                                                                            className={styles.weblink}
                                                                            href={'/auth/login'}>Login</Card.Link> to
                                                                            see content</h2>
                                                                        <Image style={{height: '100%', width: '100%'}}
                                                                               src={BalancingPlot}
                                                                               alt={'Balancing Plot'}
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
                                <h3 style={{textAlign: 'center'}}>Short-Term Capital Gains Tax Calculator</h3>
                                <p><strong>Not Tax Advice.</strong> Finding predicted tax based on 15% tax rate.</p>
                                <Col>
                                    <Row style={{margin: '15px'}}>
                                        <label htmlFor="starting-amount">Starting Amount</label>
                                        <input className={styles.inputs} type="number" id="starting-amount" min="0"
                                               required/>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <label htmlFor="ending-amount">Ending Amount</label>
                                        <input className={styles.inputs} type="number" id="ending-amount" min="0"
                                               required/>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <Button variant={'success'} type="button" onClick={calculate}>Calculate</Button>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <label htmlFor="tax-result">Predicted Tax</label>
                                        <input className={styles.inputs} type="text" id="tax-result" disabled/>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <label htmlFor="profit-result">Predicted Profit</label>
                                        <input className={styles.inputs} type="text" id="profit-result" disabled/>
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