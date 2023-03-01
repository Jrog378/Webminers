import {Button, Card, CardGroup, Col, Container, Row, Tab, Nav, Table} from "react-bootstrap";
import React from "react";
import Link from "next/link";
import styles from '@/styles/Home.module.css'
import logo from "@/images/WebminersLogo.webp";
import Head from "next/head";


export default function Pricing() {

    return (
        <>
            <Head>
                <title>Webminers - Make Data-Driven Decisions With Investment Research</title>
                <meta name="description"
                      content="Webminers is revolutionizing how we make financial decisions with new seasons and optimization"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property='og:image' content={logo}/>
            </Head>
            <Container style={{backgroundColor: 'whitesmoke', borderRadius: '25px', padding: '25px'}}>
                <h1 style={{textAlign: 'center', padding: '50px'}}>
                    Setup the plan to fuel your data-driven investing
                </h1>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col md={12} lg={4}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link className={'navgreen'} eventKey="first">Free Plan ($0)</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={'navgreen'} eventKey="second">Seasonalist Plan
                                        ($30)</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={'navgreen'} eventKey="third">Investor Plan ($50)</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={'navgreen'} eventKey="fourth">Strategist Plan
                                        ($100)</Nav.Link>
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
                                            <th className={styles.tablecen}>Free Plan</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Basic Seasons</td>
                                            <td className={styles.tablecen}>{'\u2713'}</td>
                                        </tr>
                                        <tr>
                                            <td>Basic Balancing</td>
                                            <td className={styles.tablecen}>{'\u2713'}</td>
                                        </tr>
                                        <tr>
                                            <td>Premium Market Seasons</td>
                                            <td className={styles.tablecen}>{'\u00d7'}</td>
                                        </tr>
                                        <tr>
                                            <td>Premium Asset Seasons</td>
                                            <td className={styles.tablecen}>{'\u00d7'}</td>
                                        </tr>
                                        <tr>
                                            <td>Premium Asset Balancing</td>
                                            <td className={styles.tablecen}>{'\u00d7'}</td>
                                        </tr>
                                        <tr>
                                            <td>Asset Research</td>
                                            <td className={styles.tablecen}>{'\u00d7'}</td>
                                        </tr>
                                        <tr>
                                            <td>Experimental Asset Seasons</td>
                                            <td className={styles.tablecen}>{'\u00d7'}</td>
                                        </tr>
                                        <tr>
                                            <td>Experimental Asset Balancing</td>
                                            <td className={styles.tablecen}>{'\u00d7'}</td>
                                        </tr>
                                        <tr>
                                            <td>Experimental Research</td>
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
                                            <th className={styles.tablecen}>Seasonalist Plan</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Basic Seasons</td>
                                            <td className={styles.tablecen}>{'\u2713'}</td>
                                        </tr>
                                        <tr>
                                            <td>Basic Balancing</td>
                                            <td className={styles.tablecen}>{'\u2713'}</td>
                                        </tr>
                                        <tr>
                                            <td>Premium Market Seasons</td>
                                            <td className={styles.tablecen}>{'\u2713'}</td>
                                        </tr>
                                        <tr>
                                            <td>Premium Asset Seasons</td>
                                            <td className={styles.tablecen}>{'\u2713'}</td>
                                        </tr>
                                        <tr>
                                            <td>Premium Asset Balancing</td>
                                            <td className={styles.tablecen}>{'\u00d7'}</td>
                                        </tr>
                                        <tr>
                                            <td>Asset Research</td>
                                            <td className={styles.tablecen}>{'\u00d7'}</td>
                                        </tr>
                                        <tr>
                                            <td>Experimental Asset Seasons</td>
                                            <td className={styles.tablecen}>{'\u00d7'}</td>
                                        </tr>
                                        <tr>
                                            <td>Experimental Asset Balancing</td>
                                            <td className={styles.tablecen}>{'\u00d7'}</td>
                                        </tr>
                                        <tr>
                                            <td>Experimental Research</td>
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
                                            <th className={styles.tablecen}>Investor Plan</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Basic Seasons</td>
                                            <td className={styles.tablecen}>{'\u2713'}</td>
                                        </tr>
                                        <tr>
                                            <td>Basic Balancing</td>
                                            <td className={styles.tablecen}>{'\u2713'}</td>
                                        </tr>
                                        <tr>
                                            <td>Premium Market Seasons</td>
                                            <td className={styles.tablecen}>{'\u2713'}</td>
                                        </tr>
                                        <tr>
                                            <td>Premium Asset Seasons</td>
                                            <td className={styles.tablecen}>{'\u2713'}</td>
                                        </tr>
                                        <tr>
                                            <td>Premium Asset Balancing</td>
                                            <td className={styles.tablecen}>{'\u2713'}</td>
                                        </tr>
                                        <tr>
                                            <td>Asset Research</td>
                                            <td className={styles.tablecen}>{'\u2713'}</td>
                                        </tr>
                                        <tr>
                                            <td>Experimental Asset Seasons</td>
                                            <td className={styles.tablecen}>{'\u00d7'}</td>
                                        </tr>
                                        <tr>
                                            <td>Experimental Asset Balancing</td>
                                            <td className={styles.tablecen}>{'\u00d7'}</td>
                                        </tr>
                                        <tr>
                                            <td>Experimental Research</td>
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
                                            <th className={styles.tablecen}>Strategist Plan</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Basic Seasons</td>
                                            <td className={styles.tablecen}>{'\u2713'}</td>
                                        </tr>
                                        <tr>
                                            <td>Basic Balancing</td>
                                            <td className={styles.tablecen}>{'\u2713'}</td>
                                        </tr>
                                        <tr>
                                            <td>Premium Market Seasons</td>
                                            <td className={styles.tablecen}>{'\u2713'}</td>
                                        </tr>
                                        <tr>
                                            <td>Premium Asset Seasons</td>
                                            <td className={styles.tablecen}>{'\u2713'}</td>
                                        </tr>
                                        <tr>
                                            <td>Premium Asset Balancing</td>
                                            <td className={styles.tablecen}>{'\u2713'}</td>
                                        </tr>
                                        <tr>
                                            <td>Asset Research</td>
                                            <td className={styles.tablecen}>{'\u2713'}</td>
                                        </tr>
                                        <tr>
                                            <td>Experimental Asset Seasons</td>
                                            <td className={styles.tablecen}>{'\u2713'}</td>
                                        </tr>
                                        <tr>
                                            <td>Experimental Asset Balancing</td>
                                            <td className={styles.tablecen}>{'\u2713'}</td>
                                        </tr>
                                        <tr>
                                            <td>Experimental Research</td>
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
                <Container style={{padding: '25px'}}>
                    <h1 style={{textAlign: 'center'}}><Link className={styles.weblink} href={'/auth-pricing'}>Get
                        one of our plans with a 7 day trial now</Link></h1>
                </Container>
                <Container>
                    <h1 style={{textAlign: 'center', padding: '25px'}}>
                        Testimonials
                    </h1>
                    <CardGroup>
                        <Row>
                            <Col md={12} lg={4}>
                                <Card>
                                    <Card.Body>
                                        <Card.Header>
                                            Data-Driven
                                        </Card.Header>
                                        <Card.Text style={{textAlign: 'center', padding: '5px'}}>
                                            Everything is very easy to understand and read. I love how the findings are
                                            backed by data and science! I think the research section is the best part
                                            where
                                            I can compare assets to pick and choose from for my own investments.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={12} lg={4} style={{padding: '15px'}}>
                                <Card>
                                    <Card.Body>
                                        <Card.Header>
                                            Great Seasons!
                                        </Card.Header>
                                        <Card.Text style={{textAlign: 'center', padding: '5px'}}>
                                            Market and Asset Seasons are a great help in understanding where the market
                                            is
                                            and for what. I love that inflation is taken into account so I know how well
                                            the
                                            economy is and where it&apos;s headed
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={12} lg={4}>
                                <Card>
                                    <Card.Body>
                                        <Card.Header>
                                            Accurate Seasons and Balancing
                                        </Card.Header>
                                        <Card.Text style={{textAlign: 'center', padding: '5px'}}>
                                            Super Accurate Seasons and Balancing. I check the daily updates before
                                            doing
                                            anything in the markets to make sure what I&apos;m doing is a smart
                                            decision.
                                            Reliable and consistently updated (a lot!).
                                        </Card.Text>
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