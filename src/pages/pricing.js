import {Button, Card, CardGroup, Col, Container, Row, Tab, Nav, Table} from "react-bootstrap";
import React from "react";
import Link from "next/link";
import styles from '@/styles/Home.module.css'


export default function Pricing() {

    return (
        <>
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
                                        ($40)</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={'navgreen'} eventKey="third">Investor Plan ($75)</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={'navgreen'} eventKey="fourth">Strategist Plan
                                        ($150)</Nav.Link>
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
                                            <td>Experimental Asset Weightings</td>
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
                                            <td>Experimental Asset Weightings</td>
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
                                            <td>Experimental Asset Weightings</td>
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
                                            <td>Experimental Asset Weightings</td>
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
                        one of our plans with a 3 day trial now</Link></h1>
                </Container>
                <h1 style={{textAlign: 'center', padding: '50px'}}>
                    Testimonials
                </h1>
                <CardGroup>
                    <Row>
                        <Col xs={12} md={6} lg={3}>
                            <Card>
                                <Card.Body>
                                    <Card.Header>
                                        Email us to put your review here!
                                    </Card.Header>
                                    <Card.Text style={{textAlign: 'center', padding: '5px'}}>
                                        *** Your Review! ***
                                    </Card.Text>
                                </Card.Body>
                                <Container
                                    style={{display: 'flex', justifyContent: 'center', marginBottom: '16px'}}>
                                    <Button style={{width: '80%'}} href={'mailto:jusrogersdata@gmail.com'}
                                            variant={'outline-dark'}>Email
                                        Us</Button>
                                </Container>
                            </Card>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <Card>
                                <Card.Body>
                                    <Card.Header>
                                        Email us to put your review here!
                                    </Card.Header>
                                    <Card.Text style={{textAlign: 'center', padding: '5px'}}>
                                        *** Your Review! ***
                                    </Card.Text>
                                </Card.Body>
                                <Container
                                    style={{display: 'flex', justifyContent: 'center', marginBottom: '16px'}}>
                                    <Button style={{width: '80%'}} href={'mailto:jusrogersdata@gmail.com'}
                                            variant={'outline-dark'}>Email
                                        Us</Button>
                                </Container>
                            </Card>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <Card>
                                <Card.Body>
                                    <Card.Header>
                                        Email us to put your review here!
                                    </Card.Header>
                                    <Card.Text style={{textAlign: 'center', padding: '5px'}}>
                                        *** Your Review! ***
                                    </Card.Text>
                                </Card.Body>
                                <Container
                                    style={{display: 'flex', justifyContent: 'center', marginBottom: '16px'}}>
                                    <Button style={{width: '80%'}} href={'mailto:jusrogersdata@gmail.com'}
                                            variant={'outline-dark'}>Email
                                        Us</Button>
                                </Container>
                            </Card>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <Card>
                                <Card.Body>
                                    <Card.Header>
                                        Email us to put your review here!
                                    </Card.Header>
                                    <Card.Text style={{textAlign: 'center', padding: '5px'}}>
                                        *** Your Review! ***
                                    </Card.Text>
                                </Card.Body>
                                <Container
                                    style={{display: 'flex', justifyContent: 'center', marginBottom: '16px'}}>
                                    <Button style={{width: '80%'}} href={'mailto:jusrogersdata@gmail.com'}
                                            variant={'outline-dark'}>Email
                                        Us</Button>
                                </Container>
                            </Card>
                        </Col>
                    </Row>
                </CardGroup>
            </Container>
        </>
    )
}