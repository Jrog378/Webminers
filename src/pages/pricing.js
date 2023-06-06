import {Button, Card, CardGroup, Col, Container, Row, Tab, Nav, Table} from "react-bootstrap";
import React from "react";
import styles from '@/styles/Home.module.css'
import Head from "next/head";


export default function Pricing() {

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
                <meta property='og:description' content='Plan pricing is where you will find all our plans and their benefits. We also have a free forever plan that you can sign up for no credit card required.'/>
                <meta property='og:sitename' content='Webminers'/>
                <meta name="twitter:card" content="summary"/>
                <meta name='twitter:title' content='Plan Pricing for Webminers Investing'/>
                <meta name='twitter:description' content='Plan pricing is where you will find all our plans and their benefits. We also have a free forever plan that you can sign up for no credit card required.'/>
                <meta name='twitter:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                <SchemaMarkup/>
            </Head>
            <div className={styles.full}>
                <Container style={{padding: '25px'}}>
                    <h1 style={{textAlign: 'center', padding: '50px'}}>
                        Setup the plan to fuel your data-driven investing
                    </h1>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col md={12} lg={4}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link className={styles.navgreen} eventKey="first">Free Plan</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className={styles.navgreen} eventKey="second">Essential Investing Plan
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className={styles.navgreen} eventKey="third">Balanced Investing Plan
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className={styles.navgreen} eventKey="fourth">Strategist Investing
                                            Plan
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className={styles.navgreen} href={'/auth-pricing'}>
                                            Get one of our plans with a 7 day trial now
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col md={12} lg={8}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Table style={{padding: '25px'}} striped>
                                            <thead>
                                            <tr>
                                                <th>Feature</th>
                                                <th className={styles.tablecen}>Free Plan $0 / month</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Basic Market Insights</td>
                                                <td className={styles.tablecen}>{'\u2713'}</td>
                                            </tr>
                                            <tr>
                                                <td>Basic Asset Balancing</td>
                                                <td className={styles.tablecen}>{'\u2713'}</td>
                                            </tr>
                                            <tr>
                                                <td>Basic Asset Efficiency</td>
                                                <td className={styles.tablecen}>{'\u2713'}</td>
                                            </tr>
                                            <tr>
                                                <td>Premium Market Insights</td>
                                                <td className={styles.tablecen}>{'\u00d7'}</td>
                                            </tr>
                                            <tr>
                                                <td>Premium Asset Balancing</td>
                                                <td className={styles.tablecen}>{'\u00d7'}</td>
                                            </tr>
                                            <tr>
                                                <td>Premium Asset Efficiency</td>
                                                <td className={styles.tablecen}>{'\u00d7'}</td>
                                            </tr>
                                            <tr>
                                                <td>Experimental Asset Balancing</td>
                                                <td className={styles.tablecen}>{'\u00d7'}</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Table style={{padding: '25px'}} striped>
                                            <thead>
                                            <tr>
                                                <th>Feature</th>
                                                <th className={styles.tablecen}>Essential Investing Plan $13 / month
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Basic Market Insights</td>
                                                <td className={styles.tablecen}>{'\u2713'}</td>
                                            </tr>
                                            <tr>
                                                <td>Basic Asset Balancing</td>
                                                <td className={styles.tablecen}>{'\u2713'}</td>
                                            </tr>
                                            <tr>
                                                <td>Basic Asset Efficiency</td>
                                                <td className={styles.tablecen}>{'\u2713'}</td>
                                            </tr>
                                            <tr>
                                                <td>Premium Market Insights</td>
                                                <td className={styles.tablecen}>{'\u2713'}</td>
                                            </tr>
                                            <tr>
                                                <td>Premium Asset Balancing</td>
                                                <td className={styles.tablecen}>{'\u00d7'}</td>
                                            </tr>
                                            <tr>
                                                <td>Premium Asset Efficiency</td>
                                                <td className={styles.tablecen}>{'\u00d7'}</td>
                                            </tr>
                                            <tr>
                                                <td>Experimental Asset Balancing</td>
                                                <td className={styles.tablecen}>{'\u00d7'}</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Table style={{padding: '25px'}} striped>
                                            <thead>
                                            <tr>
                                                <th>Feature</th>
                                                <th className={styles.tablecen}>Balanced Investing Plan $25 / month</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Basic Market Insights</td>
                                                <td className={styles.tablecen}>{'\u2713'}</td>
                                            </tr>
                                            <tr>
                                                <td>Basic Asset Balancing</td>
                                                <td className={styles.tablecen}>{'\u2713'}</td>
                                            </tr>
                                            <tr>
                                                <td>Basic Asset Efficiency</td>
                                                <td className={styles.tablecen}>{'\u2713'}</td>
                                            </tr>
                                            <tr>
                                                <td>Premium Market Insights</td>
                                                <td className={styles.tablecen}>{'\u2713'}</td>
                                            </tr>
                                            <tr>
                                                <td>Premium Asset Balancing</td>
                                                <td className={styles.tablecen}>{'\u2713'}</td>
                                            </tr>
                                            <tr>
                                                <td>Premium Asset Efficiency</td>
                                                <td className={styles.tablecen}>{'\u2713'}</td>
                                            </tr>
                                            <tr>
                                                <td>Experimental Asset Balancing</td>
                                                <td className={styles.tablecen}>{'\u00d7'}</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <Table style={{padding: '25px'}} striped>
                                            <thead>
                                            <tr>
                                                <th>Feature</th>
                                                <th className={styles.tablecen}>Strategist Investing Plan $50 / month
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Basic Market Insights</td>
                                                <td className={styles.tablecen}>{'\u2713'}</td>
                                            </tr>
                                            <tr>
                                                <td>Basic Asset Balancing</td>
                                                <td className={styles.tablecen}>{'\u2713'}</td>
                                            </tr>
                                            <tr>
                                                <td>Basic Asset Efficiency</td>
                                                <td className={styles.tablecen}>{'\u2713'}</td>
                                            </tr>
                                            <tr>
                                                <td>Premium Market Insights</td>
                                                <td className={styles.tablecen}>{'\u2713'}</td>
                                            </tr>
                                            <tr>
                                                <td>Premium Asset Balancing</td>
                                                <td className={styles.tablecen}>{'\u2713'}</td>
                                            </tr>
                                            <tr>
                                                <td>Premium Asset Efficiency</td>
                                                <td className={styles.tablecen}>{'\u2713'}</td>
                                            </tr>
                                            <tr>
                                                <td>Experimental Asset Balancing</td>
                                                <td className={styles.tablecen}>{'\u2713'}</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
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
                        <Container style={{padding: '15px'}}>
                            <h2 style={{textAlign: 'center', fontSize: '40px'}}><Card.Link className={styles.weblink}
                                                                                           href={'/auth-pricing'}>Get
                                one of our plans with a 7 day trial now</Card.Link></h2>
                        </Container>
                        <Container style={{padding: '15px'}}>
                            <Card className={styles.cardhover}>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 'xxx-large', textAlign: 'center'}}>Not Ready For a
                                        Paid
                                        Plan?</Card.Title>
                                    <Card.Text style={{fontSize: 'xx-large', textAlign: 'center'}}>
                                        Start today
                                        completely <strong>free</strong> with our basic features and email updates
                                        - <Card.Link className={styles.weblink}
                                                     href={'/auth/signup'}>Signup Now</Card.Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Container>
                </Container>
            </div>
        </>
    )
}