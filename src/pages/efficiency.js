import {Button, Card, Col, Container, Nav, Row, Tab, Table} from "react-bootstrap";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "@/config";
import {doc, getDoc} from "firebase/firestore";
import styles from "@/styles/Home.module.css";
import React, {useEffect, useState} from "react";
import Head from "next/head";

export default function Efficiency() {
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

    const [timeUnit, setTimeUnit] = useState(0);
    const [totalProfit, setProfit] = useState(0)

    const times = ['Months', 'Years']

    function calculate() {
        const endingInvestment = document.getElementById("ending-investment").value;
        const time = document.getElementById("time").value;
        if (times[timeUnit] === 'Months') {
            setProfit(endingInvestment / time)
        } else {
            setProfit((endingInvestment / time) / 12)
        }
    }

    function changeTime() {
        setTimeUnit(Math.abs(timeUnit - 1))
    }

    return (
        <>
            <Head>
                <title>Webminers Investing - Asset Efficiency</title>
                <meta name={'og:title'} content={'Webminers Investing - Asset Efficiency'}/>
                <meta name="description"
                      content="Webminers Investing provides scientifically backed research and education to help you
                      make informed investing decisions with Insights, Balancing, and Efficiency."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property='og:image' content={'https://webminers.dev/webminers-logo.webp'}/>
            </Head>
            <div style={{backgroundColor: 'whitesmoke', borderRadius: '25px', width: '100%'}}>
                <Container>
                    <Row>
                        <Col xxl={10} lg={12}>
                            <h1 style={{textAlign: 'center', padding: '25px'}}>Basic Asset Research</h1>
                            <Container style={{padding: '25px 10%'}}>
                                <Container>
                                    <Tab.Container style={{padding: '25px 10%'}} id="left-tabs-example"
                                                   defaultActiveKey="Ethereum">
                                        <Row>
                                            <Col md={12} lg={4}>
                                                <Nav variant="pills" className="flex-column">
                                                    <Nav.Item>
                                                        <Nav.Link className={styles.navgreen}
                                                                  eventKey="Ethereum">Ethereum</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link className={styles.navgreen}
                                                                  eventKey="Bitcoin">Bitcoin</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link className={styles.navgreen}
                                                                  eventKey="Solana">Solana</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link className={styles.navgreen}
                                                                  eventKey="Litecoin">Litecoin</Nav.Link>
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
                                                                    <td>One Month Term</td>
                                                                    <td>0.48</td>
                                                                    <td>0.65</td>
                                                                    <td>2.15</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Four Month Term</td>
                                                                    <td>0.66</td>
                                                                    <td>0.34</td>
                                                                    <td>1.69</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>One Year Term</td>
                                                                    <td>0.15</td>
                                                                    <td>-0.01</td>
                                                                    <td>0.98</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Three Year Term</td>
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
                                                                    <td>One Month Term</td>
                                                                    <td>0.48</td>
                                                                    <td>0.66</td>
                                                                    <td>2.17</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Four Month Term</td>
                                                                    <td>0.68</td>
                                                                    <td>0.4</td>
                                                                    <td>1.85</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>One Year Term</td>
                                                                    <td>0.19</td>
                                                                    <td>-0.03</td>
                                                                    <td>0.93</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Three Year Term</td>
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
                                                                    <td>One Month Term</td>
                                                                    <td>0.35</td>
                                                                    <td>0.48</td>
                                                                    <td>1.84</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Four Month Term</td>
                                                                    <td>0.34</td>
                                                                    <td>0.28</td>
                                                                    <td>1.46</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>One Year Term</td>
                                                                    <td>0.04</td>
                                                                    <td>-0.03</td>
                                                                    <td>0.94</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Three Year Term</td>
                                                                    <td>0.93</td>
                                                                    <td>0.11</td>
                                                                    <td>1.21</td>
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
                                                                    <td>One Month Term</td>
                                                                    <td>0.39</td>
                                                                    <td>0.42</td>
                                                                    <td>2.02</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Four Month Term</td>
                                                                    <td>0.45</td>
                                                                    <td>0.21</td>
                                                                    <td>1.38</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>One Year Term</td>
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
                                                </Tab.Content>
                                            </Col>
                                        </Row>
                                    </Tab.Container>
                                </Container>
                            </Container>
                            <h1 style={{textAlign: 'center', padding: '25px'}}>Experimental Research</h1>
                            {loading
                                ?
                                <Container style={{padding: '25px 10%'}}>
                                    <h2>Loading...</h2>
                                </Container>
                                : plan === 'Strategist'
                                    ?
                                    <Container style={{padding: '25px 10%'}}>
                                        <Tab.Container style={{padding: '25px 10%'}} id="left-tabs-example"
                                                       defaultActiveKey="Matic">
                                            <Row>
                                                <Col md={12} lg={4}>
                                                    <Nav variant="pills" className="flex-column">
                                                        <Nav.Item>
                                                            <Nav.Link className={styles.navgreen}
                                                                      eventKey="Matic">Matic</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link className={styles.navgreen}
                                                                      eventKey="Vet">VeChain</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link className={styles.navgreen}
                                                                      eventKey="Cosmos">Atom(Cosmos)</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link className={styles.navgreen}
                                                                      eventKey="Doge">Doge</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link className={styles.navgreen}
                                                                      eventKey="Tron">Tron</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link className={styles.navgreen}
                                                                      eventKey="Eos">Eos</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link className={styles.navgreen}
                                                                      eventKey="Link">Link</Nav.Link>
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
                                                                        <td>One Month Term</td>
                                                                        <td>0.36</td>
                                                                        <td>0.08</td>
                                                                        <td>1.13</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Four Month Term</td>
                                                                        <td>0.38</td>
                                                                        <td>0.18</td>
                                                                        <td>1.3</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>One Year Term</td>
                                                                        <td>0.16</td>
                                                                        <td>0.04</td>
                                                                        <td>1.08</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Three Year Term</td>
                                                                        <td>8.05</td>
                                                                        <td>0.15</td>
                                                                        <td>1.3</td>
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
                                                                        <td>One Month Term</td>
                                                                        <td>0.35</td>
                                                                        <td>0.29</td>
                                                                        <td>1.54</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Four Month Term</td>
                                                                        <td>0.37</td>
                                                                        <td>0.18</td>
                                                                        <td>1.33</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>One Year Term</td>
                                                                        <td>0.14</td>
                                                                        <td>0.0</td>
                                                                        <td>1.0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Three Month Term</td>
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
                                                                        <td>One Month Term</td>
                                                                        <td>0.33</td>
                                                                        <td>0.0</td>
                                                                        <td>1.01</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Four Month Term</td>
                                                                        <td>0.4</td>
                                                                        <td>0.17</td>
                                                                        <td>1.3</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>One Year Term</td>
                                                                        <td>0.1</td>
                                                                        <td>0.0</td>
                                                                        <td>1.0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Three Year Term</td>
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
                                                                        <td>One Month Term</td>
                                                                        <td>0.24</td>
                                                                        <td>0.44</td>
                                                                        <td>1.62</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Four Month Term</td>
                                                                        <td>0.29</td>
                                                                        <td>0.08</td>
                                                                        <td>1.14</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>One Year Term</td>
                                                                        <td>0.12</td>
                                                                        <td>-0.01</td>
                                                                        <td>1.03</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Three Year Term</td>
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
                                                                        <td>One Month Term</td>
                                                                        <td>0.35</td>
                                                                        <td>0.04</td>
                                                                        <td>1.14</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Four Month Term</td>
                                                                        <td>0.44</td>
                                                                        <td>0.09</td>
                                                                        <td>1.25</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>One Year Term</td>
                                                                        <td>0.33</td>
                                                                        <td>0.04</td>
                                                                        <td>1.09</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Three Year Term</td>
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
                                                                        <td>One Month Term</td>
                                                                        <td>0.35</td>
                                                                        <td>0.22</td>
                                                                        <td>1.48</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Four Month Term</td>
                                                                        <td>0.41</td>
                                                                        <td>0.16</td>
                                                                        <td>1.29</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>One Year Term</td>
                                                                        <td>0.12</td>
                                                                        <td>-0.01</td>
                                                                        <td>0.98</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Three Year Term</td>
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
                                                                        <td>One Month Term</td>
                                                                        <td>0.36</td>
                                                                        <td>0.41</td>
                                                                        <td>1.69</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Four Month Term</td>
                                                                        <td>0.42</td>
                                                                        <td>0.17</td>
                                                                        <td>1.26</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>One Year Term</td>
                                                                        <td>0.12</td>
                                                                        <td>0.0</td>
                                                                        <td>0.99</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Three Year Term</td>
                                                                        <td>0.31</td>
                                                                        <td>0.06</td>
                                                                        <td>1.13</td>
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
                                    :
                                    <Container style={{padding: '25px 10%'}}>
                                        <Tab.Container style={{padding: '25px 10%'}} id="left-tabs-example"
                                                       defaultActiveKey="Matic">
                                            <Row>
                                                <Col md={12} lg={4}>
                                                    <Nav variant="pills" className="flex-column">
                                                        <Nav.Item>
                                                            <Nav.Link className={styles.navgreen}
                                                                      eventKey="Matic">Matic</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link className={styles.navgreen}
                                                                      eventKey="Vet">VeChain</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link className={styles.navgreen}
                                                                      eventKey="Cosmos">Atom(Cosmos)</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link className={styles.navgreen}
                                                                      eventKey="Doge">Doge</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link className={styles.navgreen}
                                                                      eventKey="Tron">Tron</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link className={styles.navgreen}
                                                                      eventKey="Eos">Eos</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link className={styles.navgreen}
                                                                      eventKey="Link">Link</Nav.Link>
                                                        </Nav.Item>
                                                    </Nav>
                                                </Col>
                                                <Col md={12} lg={8} style={{
                                                    border: '1px solid black',
                                                    padding: '10px',
                                                    borderRadius: '10px'
                                                }}>
                                                    <Tab.Content style={{height: '100%'}}>
                                                        <Tab.Pane eventKey="Matic">
                                                            {user
                                                                ? plan === ''
                                                                    ?
                                                                    <Card.Title
                                                                        style={{textAlign: 'center'}}>Loading...</Card.Title>
                                                                    :
                                                                    <h2 style={{textAlign: "center",}}>
                                                                        <Card.Link className={styles.weblink}
                                                                              href={'/pricing'}>Strategist
                                                                            Plan</Card.Link> Required
                                                                    </h2>
                                                                :
                                                                <h2 style={{textAlign: "center"}}>Please <Card.Link
                                                                    className={styles.weblink}
                                                                    href={'/auth/login'}>Login</Card.Link> to
                                                                    see content</h2>
                                                            }
                                                            <Table className={styles.tablecen}
                                                                   style={{padding: '25px'}} striped>
                                                                <thead>
                                                                <tr>
                                                                    <th>Timeframe</th>
                                                                    <th>?</th>
                                                                    <th>?</th>
                                                                    <th>?</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td>One Month Term</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Four Month Term</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>One Year Term</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Three Year Term</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                </tbody>
                                                            </Table>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Vet">
                                                            {user
                                                                ? plan === ''
                                                                    ?
                                                                    <Card.Title
                                                                        style={{textAlign: 'center'}}>Loading...</Card.Title>
                                                                    :
                                                                    <h2 style={{textAlign: "center",}}>
                                                                        <Card.Link className={styles.weblink}
                                                                              href={'/pricing'}>Strategist
                                                                            Plan</Card.Link> Required
                                                                    </h2>
                                                                :
                                                                <h2 style={{textAlign: "center"}}>Please <Card.Link
                                                                    className={styles.weblink}
                                                                    href={'/auth/login'}>Login</Card.Link> to
                                                                    see content</h2>
                                                            }
                                                            <Table className={styles.tablecen}
                                                                   style={{padding: '25px'}} striped>
                                                                <thead>
                                                                <tr>
                                                                    <th>Timeframe</th>
                                                                    <th>?</th>
                                                                    <th>?</th>
                                                                    <th>?</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td>One Month Term</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Four Month Term</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>One Year Term</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Three Year Term</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                </tbody>
                                                            </Table>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Cosmos">
                                                            {user
                                                                ? plan === ''
                                                                    ?
                                                                    <Card.Title
                                                                        style={{textAlign: 'center'}}>Loading...</Card.Title>
                                                                    :
                                                                    <h2 style={{textAlign: "center",}}>
                                                                        <Card.Link className={styles.weblink}
                                                                              href={'/pricing'}>Strategist
                                                                            Plan</Card.Link> Required
                                                                    </h2>
                                                                :
                                                                <h2 style={{textAlign: "center"}}>Please <Card.Link
                                                                    className={styles.weblink}
                                                                    href={'/auth/login'}>Login</Card.Link> to
                                                                    see content</h2>
                                                            }
                                                            <Table className={styles.tablecen}
                                                                   style={{padding: '25px'}} striped>
                                                                <thead>
                                                                <tr>
                                                                    <th>Timeframe</th>
                                                                    <th>?</th>
                                                                    <th>?</th>
                                                                    <th>?</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td>One Month Term</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Four Month Term</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>One Year Term</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Three Year Term</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                </tbody>
                                                            </Table>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Doge">
                                                            {user
                                                                ? plan === ''
                                                                    ?
                                                                    <Card.Title
                                                                        style={{textAlign: 'center'}}>Loading...</Card.Title>
                                                                    :
                                                                    <h2 style={{textAlign: "center",}}>
                                                                        <Card.Link className={styles.weblink}
                                                                              href={'/pricing'}>Strategist
                                                                            Plan</Card.Link> Required
                                                                    </h2>
                                                                :
                                                                <h2 style={{textAlign: "center"}}>Please <Card.Link
                                                                    className={styles.weblink}
                                                                    href={'/auth/login'}>Login</Card.Link> to
                                                                    see content</h2>
                                                            }
                                                            <Table className={styles.tablecen}
                                                                   style={{padding: '25px'}} striped>
                                                                <thead>
                                                                <tr>
                                                                    <th>Timeframe</th>
                                                                    <th>?</th>
                                                                    <th>?</th>
                                                                    <th>?</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td>One Month Term</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Four Month Term</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>One Year Term</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Three Year Term</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                </tbody>
                                                            </Table>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Tron">
                                                            {user
                                                                ? plan === ''
                                                                    ?
                                                                    <Card.Title
                                                                        style={{textAlign: 'center'}}>Loading...</Card.Title>
                                                                    :
                                                                    <h2 style={{textAlign: "center",}}>
                                                                        <Card.Link className={styles.weblink}
                                                                              href={'/pricing'}>Strategist
                                                                            Plan</Card.Link> Required
                                                                    </h2>
                                                                :
                                                                <h2 style={{textAlign: "center"}}>Please <Card.Link
                                                                    className={styles.weblink}
                                                                    href={'/auth/login'}>Login</Card.Link> to
                                                                    see content</h2>
                                                            }
                                                            <Table className={styles.tablecen}
                                                                   style={{padding: '25px'}} striped>
                                                                <thead>
                                                                <tr>
                                                                    <th>Timeframe</th>
                                                                    <th>?</th>
                                                                    <th>?</th>
                                                                    <th>?</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td>One Month Term</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Four Month Term</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>One Year Term</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Three Year Term</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                </tbody>
                                                            </Table>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Eos">
                                                            {user
                                                                ? plan === ''
                                                                    ?
                                                                    <Card.Title
                                                                        style={{textAlign: 'center'}}>Loading...</Card.Title>
                                                                    :
                                                                    <h2 style={{textAlign: "center",}}>
                                                                        <Card.Link className={styles.weblink}
                                                                              href={'/pricing'}>Strategist
                                                                            Plan</Card.Link> Required
                                                                    </h2>
                                                                :
                                                                <h2 style={{textAlign: "center"}}>Please <Card.Link
                                                                    className={styles.weblink}
                                                                    href={'/auth/login'}>Login</Card.Link> to
                                                                    see content</h2>
                                                            }
                                                            <Table className={styles.tablecen}
                                                                   style={{padding: '25px'}} striped>
                                                                <thead>
                                                                <tr>
                                                                    <th>Timeframe</th>
                                                                    <th>?</th>
                                                                    <th>?</th>
                                                                    <th>?</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td>One Month Term</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Four Month Term</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>One Year Term</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Three Year Term</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                </tbody>
                                                            </Table>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Link">
                                                            {user
                                                                ? plan === ''
                                                                    ?
                                                                    <Card.Title
                                                                        style={{textAlign: 'center'}}>Loading...</Card.Title>
                                                                    :
                                                                    <h2 style={{textAlign: "center",}}>
                                                                        <Card.Link className={styles.weblink}
                                                                              href={'/pricing'}>Strategist
                                                                            Plan</Card.Link> Required
                                                                    </h2>
                                                                :
                                                                <h2 style={{textAlign: "center"}}>Please <Card.Link
                                                                    className={styles.weblink}
                                                                    href={'/auth/login'}>Login</Card.Link> to
                                                                    see content</h2>
                                                            }
                                                            <Table className={styles.tablecen}
                                                                   style={{padding: '25px'}} striped>
                                                                <thead>
                                                                <tr>
                                                                    <th>Timeframe</th>
                                                                    <th>?</th>
                                                                    <th>?</th>
                                                                    <th>?</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td>One Month Term</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Four Month Term</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>One Year Term</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Three Year Term</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                </tbody>
                                                            </Table>
                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                </Col>
                                            </Row>
                                        </Tab.Container>
                                    </Container>
                            }
                        </Col>
                        <Col xxl={2} lg={12} style={{paddingTop: '15px'}}>
                            <div>
                                <h2 style={{textAlign: 'center'}}>Savings Calculator</h2>
                                <p>Find monthly savings to reach a total savings goal.</p>
                                <Col>
                                    <Row style={{margin: '15px'}}>
                                        <label style={{padding: 0}} htmlFor="ending-investment">Goal Amount</label>
                                        <input className={styles.inputs} type="number" id="ending-investment" min="0"
                                               required/>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <label style={{padding: 0}} htmlFor="time">{times[timeUnit]} till Goal</label>
                                        <input className={styles.inputs} type="number" id="time" min="0" required/>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <Button variant={'success'} onClick={changeTime}>Change to {times[Math.abs(timeUnit - 1)]}</Button>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <Button variant={'success'} type="button" onClick={calculate}>Calculate</Button>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <label style={{padding: 0}} htmlFor="result">Savings Per Month</label>
                                        <input className={styles.inputs} value={Math.round(totalProfit)}
                                               type="text"
                                               id="result" disabled/>
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