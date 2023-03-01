import {Col, Container, Nav, Card, Row, Tab, Table} from "react-bootstrap";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "@/config";
import Router from "next/router";
import {doc, getDoc} from "firebase/firestore";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import React, {useEffect, useState} from "react";
import logo from "@/images/WebminersLogo.webp";
import Head from "next/head";


export default function Research() {
    let [plan, setPlan] = useState('')
    const [user, loading] = useAuthState(auth)
    useEffect(() => {
        const fetchData = async () => {
            if (!user) Router.push('/auth/login');
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
                <title>Webminers Research - Make Data-Driven Decisions With Investment Research</title>
                <meta name="description"
                      content="Webminers Research are revolutionizing how we make financial decisions with new seasons and optimization"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property='og:image' content={logo}/>
            </Head>
            <Container style={{backgroundColor: 'whitesmoke', borderRadius: '25px'}}>
                <h1 style={{textAlign: 'center', padding: '25px'}}>Basic Research</h1>
                <Container style={{padding: '25px 10%'}}>
                    {loading
                        ? <Container><h1>Loading...</h1></Container>
                        : user
                            ? plan === ''
                                ? <Container><h1>Loading...</h1></Container>
                                : plan === 'Investor' || plan === 'Strategist'
                                    ?
                                    <Container>
                                        <Tab.Container style={{padding: '25px 10%'}} id="left-tabs-example"
                                                       defaultActiveKey="Ethereum">
                                            <Row>
                                                <Col md={12} lg={4}>
                                                    <Nav variant="pills" className="flex-column">
                                                        <Nav.Item>
                                                            <Nav.Link className={'navgreen'}
                                                                      eventKey="Ethereum">Ethereum</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link className={'navgreen'}
                                                                      eventKey="Bitcoin">Bitcoin</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link className={'navgreen'}
                                                                      eventKey="Solana">Solana</Nav.Link>
                                                        </Nav.Item>
                                                    </Nav>
                                                </Col>
                                                <Col md={12} lg={8} style={{
                                                    border: '1px solid black',
                                                    padding: '10px',
                                                    borderRadius: '10px'
                                                }}>
                                                    <Tab.Content>
                                                        <Tab.Pane eventKey="Ethereum">
                                                            <Container>
                                                                <Card.Title style={{textAlign: 'center'}}>
                                                                    Ethereum Research
                                                                </Card.Title>
                                                                <Table className={styles.tablecen}
                                                                       style={{padding: '25px'}} striped>
                                                                    <thead>
                                                                    <tr>
                                                                        <th>Timeframe</th>
                                                                        <th>Sharpe</th>
                                                                        <th>Sortino</th>
                                                                        <th>Omega</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>Mini Term (30 Days)</td>
                                                                        <td>0.37</td>
                                                                        <td>0.15</td>
                                                                        <td>1.25</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Short Term (4 Months)</td>
                                                                        <td>0.28</td>
                                                                        <td>0.04</td>
                                                                        <td>1.1</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Mid Term (1 Year)</td>
                                                                        <td>0.15</td>
                                                                        <td>-0.01</td>
                                                                        <td>0.98</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Long Term (3 Years)</td>
                                                                        <td>1.22</td>
                                                                        <td>0.08</td>
                                                                        <td>1.18</td>
                                                                    </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </Container>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Bitcoin">
                                                            <Container>
                                                                <Card.Title style={{textAlign: 'center'}}>
                                                                    Bitcoin Research
                                                                </Card.Title>
                                                                <Table className={styles.tablecen}
                                                                       style={{padding: '25px'}} striped>
                                                                    <thead>
                                                                    <tr>
                                                                        <th>Timeframe</th>
                                                                        <th>Sharpe</th>
                                                                        <th>Sortino</th>
                                                                        <th>Omega</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>Mini Term (30 Days)</td>
                                                                        <td>0.4</td>
                                                                        <td>0.17</td>
                                                                        <td>1.27</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Short Term (4 Months)</td>
                                                                        <td>0.4</td>
                                                                        <td>0.07</td>
                                                                        <td>1.2</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Mid Term (1 Year)</td>
                                                                        <td>0.19</td>
                                                                        <td>-0.03</td>
                                                                        <td>0.93</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Long Term (3 Years)</td>
                                                                        <td>0.64</td>
                                                                        <td>0.05</td>
                                                                        <td>1.13</td>
                                                                    </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </Container>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Solana">
                                                            <Container>
                                                                <Card.Title style={{textAlign: 'center'}}>
                                                                    Solana Research
                                                                </Card.Title>
                                                                <Table className={styles.tablecen}
                                                                       style={{padding: '25px'}} striped>
                                                                    <thead>
                                                                    <tr>
                                                                        <th>Timeframe</th>
                                                                        <th>Sharpe</th>
                                                                        <th>Sortino</th>
                                                                        <th>Omega</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>Mini Term (30 Days)</td>
                                                                        <td>0.21</td>
                                                                        <td>0.1</td>
                                                                        <td>1.15</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Short Term (4 Months)</td>
                                                                        <td>0.1</td>
                                                                        <td>0.02</td>
                                                                        <td>1.02</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Mid Term (1 Year)</td>
                                                                        <td>0.04</td>
                                                                        <td>-0.03</td>
                                                                        <td>0.94</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Long Term (3 Years)</td>
                                                                        <td>0.93</td>
                                                                        <td>0.11</td>
                                                                        <td>1.21</td>
                                                                    </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </Container>
                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                </Col>
                                            </Row>
                                        </Tab.Container>
                                    </Container>
                                    : <Container><h1 style={{textAlign: "center"}}>Please visit <Link
                                        className={styles.weblink} href={'/auth/profile'}>Profile</Link> to Upgrade Plan
                                    </h1></Container>
                            : <Container><h1 style={{textAlign: "center"}}>Please <Link
                                className={styles.weblink} href={'/auth/login'}>Login</Link> to
                                see content</h1></Container>
                    }
                </Container>
                <Container style={{padding: '25px 10%'}}>
                    {loading
                        ? <Container><h1 style={{textAlign: 'center', padding: '25px'}}>Experimental Webminers
                            Research</h1><h1>Loading...</h1></Container>
                        : user
                            ? plan === ''
                                ? <Container><h1 style={{textAlign: 'center', padding: '25px'}}>Experimental Webminers
                                    Research</h1><h1>Loading...</h1></Container>
                                : plan === 'Strategist'
                                    ?
                                    <Container>
                                        <h1 style={{textAlign: 'center', padding: '25px'}}>Experimental Research</h1>
                                        <Tab.Container style={{padding: '25px 10%'}} id="left-tabs-example"
                                                       defaultActiveKey="Matic">
                                            <Row>
                                                <Col md={12} lg={4}>
                                                    <Nav variant="pills" className="flex-column">
                                                        <Nav.Item>
                                                            <Nav.Link className={'navgreen'}
                                                                      eventKey="Matic">Matic</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link className={'navgreen'}
                                                                      eventKey="Litecoin">Litecoin</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link className={'navgreen'}
                                                                      eventKey="Vet">VeChain</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link className={'navgreen'}
                                                                      eventKey="Cosmos">Atom(Cosmos)</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link className={'navgreen'}
                                                                      eventKey="Doge">Doge</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link className={'navgreen'}
                                                                      eventKey="Tron">Tron</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link className={'navgreen'}
                                                                      eventKey="Eos">Eos</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link className={'navgreen'}
                                                                      eventKey="Link">Link</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link className={'navgreen'}
                                                                      eventKey="Avax">Avalanche</Nav.Link>
                                                        </Nav.Item>
                                                    </Nav>
                                                </Col>
                                                <Col md={12} lg={8} style={{
                                                    border: '1px solid black',
                                                    padding: '10px',
                                                    borderRadius: '10px'
                                                }}>
                                                    <Tab.Content>
                                                        <Tab.Pane eventKey="Matic">
                                                            <Container>
                                                                <Card.Title style={{textAlign: 'center'}}>
                                                                    Matic Research
                                                                </Card.Title>
                                                                <Table className={styles.tablecen}
                                                                       style={{padding: '25px'}} striped>
                                                                    <thead>
                                                                    <tr>
                                                                        <th>Timeframe</th>
                                                                        <th>Sharpe</th>
                                                                        <th>Sortino</th>
                                                                        <th>Omega</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>Mini Term (30 Days)</td>
                                                                        <td>0.29</td>
                                                                        <td>0.55</td>
                                                                        <td>2</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Short Term (4 Months)</td>
                                                                        <td>0.23</td>
                                                                        <td>0.13</td>
                                                                        <td>1.3</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Mid Term (1 Year)</td>
                                                                        <td>0.16</td>
                                                                        <td>0.04</td>
                                                                        <td>1.08</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Long Term (3 Years)</td>
                                                                        <td>8.05</td>
                                                                        <td>0.15</td>
                                                                        <td>1.3</td>
                                                                    </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </Container>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Litecoin">
                                                            <Container>
                                                                <Card.Title style={{textAlign: 'center'}}>
                                                                    Litecoin Research
                                                                </Card.Title>
                                                                <Table className={styles.tablecen}
                                                                       style={{padding: '25px'}} striped>
                                                                    <thead>
                                                                    <tr>
                                                                        <th>Timeframe</th>
                                                                        <th>Sharpe</th>
                                                                        <th>Sortino</th>
                                                                        <th>Omega</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>Mini Term (30 Days)</td>
                                                                        <td>0.33</td>
                                                                        <td>0.2</td>
                                                                        <td>1.28</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Short Term (4 Months)</td>
                                                                        <td>0.39</td>
                                                                        <td>0.3</td>
                                                                        <td>1.43</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Mid Term (1 Year)</td>
                                                                        <td>0.21</td>
                                                                        <td>0.02</td>
                                                                        <td>1.05</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Long Term (3 Years)</td>
                                                                        <td>0.23</td>
                                                                        <td>0.04</td>
                                                                        <td>1.09</td>
                                                                    </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </Container>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Vet">
                                                            <Container>
                                                                <Card.Title style={{textAlign: 'center'}}>
                                                                    VeChain Research
                                                                </Card.Title>
                                                                <Table className={styles.tablecen}
                                                                       style={{padding: '25px'}} striped>
                                                                    <thead>
                                                                    <tr>
                                                                        <th>Timeframe</th>
                                                                        <th>Sharpe</th>
                                                                        <th>Sortino</th>
                                                                        <th>Omega</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>Mini Term (30 Days)</td>
                                                                        <td>0.26</td>
                                                                        <td>0.47</td>
                                                                        <td>1.79</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Short Term (4 Months)</td>
                                                                        <td>0.29</td>
                                                                        <td>0.1</td>
                                                                        <td>1.22</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Mid Term (1 Year)</td>
                                                                        <td>0.14</td>
                                                                        <td>0.0</td>
                                                                        <td>1.0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Long Term (3 Years)</td>
                                                                        <td>0.66</td>
                                                                        <td>0.08</td>
                                                                        <td>1.17</td>
                                                                    </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </Container>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Cosmos">
                                                            <Container>
                                                                <Card.Title style={{textAlign: 'center'}}>
                                                                    Cosmos Research
                                                                </Card.Title>
                                                                <Table className={styles.tablecen}
                                                                       style={{padding: '25px'}} striped>
                                                                    <thead>
                                                                    <tr>
                                                                        <th>Timeframe</th>
                                                                        <th>Sharpe</th>
                                                                        <th>Sortino</th>
                                                                        <th>Omega</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>Mini Term (30 Days)</td>
                                                                        <td>0.24</td>
                                                                        <td>0.18</td>
                                                                        <td>1.27</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Short Term (4 Months)</td>
                                                                        <td>0.23</td>
                                                                        <td>0.06</td>
                                                                        <td>1.14</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Mid Term (1 Year)</td>
                                                                        <td>0.1</td>
                                                                        <td>0.0</td>
                                                                        <td>1.0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Long Term (3 Years)</td>
                                                                        <td>0.45</td>
                                                                        <td>0.08</td>
                                                                        <td>1.15</td>
                                                                    </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </Container>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Doge">
                                                            <Container>
                                                                <Card.Title style={{textAlign: 'center'}}>
                                                                    Dogecoin Research
                                                                </Card.Title>
                                                                <Table className={styles.tablecen}
                                                                       style={{padding: '25px'}} striped>
                                                                    <thead>
                                                                    <tr>
                                                                        <th>Timeframe</th>
                                                                        <th>Sharpe</th>
                                                                        <th>Sortino</th>
                                                                        <th>Omega</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>Mini Term (30 Days)</td>
                                                                        <td>0.29</td>
                                                                        <td>0.03</td>
                                                                        <td>1.06</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Short Term (4 Months)</td>
                                                                        <td>0.18</td>
                                                                        <td>0.09</td>
                                                                        <td>1.18</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Mid Term (1 Year)</td>
                                                                        <td>0.12</td>
                                                                        <td>-0.01</td>
                                                                        <td>1.03</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Long Term (3 Years)</td>
                                                                        <td>2.28</td>
                                                                        <td>0.18</td>
                                                                        <td>1.42</td>
                                                                    </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </Container>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Tron">
                                                            <Container>
                                                                <Card.Title style={{textAlign: 'center'}}>
                                                                    Tron Research
                                                                </Card.Title>
                                                                <Table className={styles.tablecen}
                                                                       style={{padding: '25px'}} striped>
                                                                    <thead>
                                                                    <tr>
                                                                        <th>Timeframe</th>
                                                                        <th>Sharpe</th>
                                                                        <th>Sortino</th>
                                                                        <th>Omega</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>Mini Term (30 Days)</td>
                                                                        <td>0.44</td>
                                                                        <td>0.24</td>
                                                                        <td>1.73</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Short Term (4 Months)</td>
                                                                        <td>0.43</td>
                                                                        <td>0.05</td>
                                                                        <td>1.13</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Mid Term (1 Year)</td>
                                                                        <td>0.33</td>
                                                                        <td>0.04</td>
                                                                        <td>1.09</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Long Term (3 Years)</td>
                                                                        <td>0.66</td>
                                                                        <td>0.06</td>
                                                                        <td>1.16</td>
                                                                    </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </Container>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Eos">
                                                            <Container>
                                                                <Card.Title style={{textAlign: 'center'}}>
                                                                    Eos Research
                                                                </Card.Title>
                                                                <Table className={styles.tablecen}
                                                                       style={{padding: '25px'}} striped>
                                                                    <thead>
                                                                    <tr>
                                                                        <th>Timeframe</th>
                                                                        <th>Sharpe</th>
                                                                        <th>Sortino</th>
                                                                        <th>Omega</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>Mini Term (30 Days)</td>
                                                                        <td>0.3</td>
                                                                        <td>0.31</td>
                                                                        <td>1.44</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Short Term (4 Months)</td>
                                                                        <td>0.28</td>
                                                                        <td>0.04</td>
                                                                        <td>1.09</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Mid Term (1 Year)</td>
                                                                        <td>0.12</td>
                                                                        <td>-0.01</td>
                                                                        <td>0.98</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Long Term (3 Years)</td>
                                                                        <td>0.05</td>
                                                                        <td>0.02</td>
                                                                        <td>1.04</td>
                                                                    </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </Container>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Link">
                                                            <Container>
                                                                <Card.Title style={{textAlign: 'center'}}>
                                                                    Link Research
                                                                </Card.Title>
                                                                <Table className={styles.tablecen}
                                                                       style={{padding: '25px'}} striped>
                                                                    <thead>
                                                                    <tr>
                                                                        <th>Timeframe</th>
                                                                        <th>Sharpe</th>
                                                                        <th>Sortino</th>
                                                                        <th>Omega</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>Mini Term (30 Days)</td>
                                                                        <td>0.34</td>
                                                                        <td>0.43</td>
                                                                        <td>1.57</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Short Term (4 Months)</td>
                                                                        <td>0.24</td>
                                                                        <td>0.06</td>
                                                                        <td>1.12</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Mid Term (1 Year)</td>
                                                                        <td>0.12</td>
                                                                        <td>0.0</td>
                                                                        <td>0.99</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Long Term (3 Years)</td>
                                                                        <td>0.31</td>
                                                                        <td>0.06</td>
                                                                        <td>1.13</td>
                                                                    </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </Container>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Avax">
                                                            <Container>
                                                                <Card.Title style={{textAlign: 'center'}}>
                                                                    Avalanche Research
                                                                </Card.Title>
                                                                <Table className={styles.tablecen}
                                                                       style={{padding: '25px'}} striped>
                                                                    <thead>
                                                                    <tr>
                                                                        <th>Timeframe</th>
                                                                        <th>Sharpe</th>
                                                                        <th>Sortino</th>
                                                                        <th>Omega</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>Mini Term (30 Days)</td>
                                                                        <td>0.22</td>
                                                                        <td>0.23</td>
                                                                        <td>1.39</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Short Term (4 Months)</td>
                                                                        <td>0.22</td>
                                                                        <td>0.08</td>
                                                                        <td>1.16</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Mid Term (1 Year)</td>
                                                                        <td>0.05</td>
                                                                        <td>-0.05</td>
                                                                        <td>0.9</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Long Term (3 Years)</td>
                                                                        <td>NA</td>
                                                                        <td>NA</td>
                                                                        <td>NA</td>
                                                                    </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </Container>
                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                </Col>
                                            </Row>
                                        </Tab.Container>
                                    </Container>
                                    : plan === 'none'
                                        ? <Container style={{display: 'none'}}></Container>
                                        : <Container style={{padding: '25px 10%'}}>
                                            <h1 style={{textAlign: 'center', padding: '25px'}}>Experimental Webminers
                                                Research</h1>
                                            <h2 style={{textAlign: "center"}}>Please visit <Link
                                                className={styles.weblink}
                                                href={'/auth/profile'}>Profile</Link> to
                                                Upgrade Plan to Strategist for Experimental Research</h2>
                                        </Container>
                            : <Container><h1 style={{textAlign: 'center', padding: '25px'}}>Experimental Webminers
                                Research</h1><Container><h1 style={{textAlign: "center"}}>Please <Link
                                className={styles.weblink} href={'/auth/login'}>Login</Link> to
                                see content</h1></Container></Container>
                    }
                </Container>
            </Container>
        </>
    )
}