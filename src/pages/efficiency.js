import {Button, Card, Col, Container, Nav, Row, Tab, Table} from "react-bootstrap";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "@/config";
import {doc, getDoc} from "firebase/firestore";
import styles from "@/styles/Home.module.css";
import React, {useEffect, useState} from "react";
import Head from "next/head";

export default function Efficiency() {
    let [plan, setPlan] = useState('')
    let [Eth30, setEth30] = useState(null)
    let [Eth120, setEth120] = useState(null)
    let [Eth365, setEth365] = useState(null)
    let [Eth1460, setEth1460] = useState(null)
    let [Btc30, setBtc30] = useState(null)
    let [Btc120, setBtc120] = useState(null)
    let [Btc365, setBtc365] = useState(null)
    let [Btc1460, setBtc1460] = useState(null)
    let [Sol30, setSol30] = useState(null)
    let [Sol120, setSol120] = useState(null)
    let [Sol365, setSol365] = useState(null)
    let [Sol1460, setSol1460] = useState(null)
    let [Ltc30, setLtc30] = useState(null)
    let [Ltc120, setLtc120] = useState(null)
    let [Ltc365, setLtc365] = useState(null)
    let [Ltc1460, setLtc1460] = useState(null)

    let [Matic30, setMatic30] = useState(null)
    let [Matic120, setMatic120] = useState(null)
    let [Matic365, setMatic365] = useState(null)
    let [Matic1460, setMatic1460] = useState(null)
    let [Vet30, setVet30] = useState(null)
    let [Vet120, setVet120] = useState(null)
    let [Vet365, setVet365] = useState(null)
    let [Vet1460, setVet1460] = useState(null)
    let [Atom30, setAtom30] = useState(null)
    let [Atom120, setAtom120] = useState(null)
    let [Atom365, setAtom365] = useState(null)
    let [Atom1460, setAtom1460] = useState(null)
    let [Doge30, setDoge30] = useState(null)
    let [Doge120, setDoge120] = useState(null)
    let [Doge365, setDoge365] = useState(null)
    let [Doge1460, setDoge1460] = useState(null)
    let [Trx30, setTrx30] = useState(null)
    let [Trx120, setTrx120] = useState(null)
    let [Trx365, setTrx365] = useState(null)
    let [Trx1460, setTrx1460] = useState(null)
    let [Eos30, setEos30] = useState(null)
    let [Eos120, setEos120] = useState(null)
    let [Eos365, setEos365] = useState(null)
    let [Eos1460, setEos1460] = useState(null)
    let [Link30, setLink30] = useState(null)
    let [Link120, setLink120] = useState(null)
    let [Link365, setLink365] = useState(null)
    let [Link1460, setLink1460] = useState(null)


    const [user, loading] = useAuthState(auth)
    useEffect(() => {
        const fetchData = async () => {
            const Eth1 = await getDoc(doc(db, 'open-ratios', 'Eth30')).then(ratio => ratio.data())
            console.log(Eth1)
            setEth30(Eth1)
            const Eth2 = await getDoc(doc(db, 'open-ratios', 'Eth120')).then(ratio => ratio.data())
            console.log(Eth2)
            setEth120(Eth2)
            const Eth3 = await getDoc(doc(db, 'open-ratios', 'Eth365')).then(ratio => ratio.data())
            console.log(Eth3)
            setEth365(Eth3)
            const Eth4 = await getDoc(doc(db, 'open-ratios', 'Eth1460')).then(ratio => ratio.data())
            console.log(Eth4)
            setEth1460(Eth4)
            const Btc1 = await getDoc(doc(db, 'open-ratios', 'Btc30')).then(ratio => ratio.data())
            console.log(Btc1)
            setBtc30(Btc1)
            const Btc2 = await getDoc(doc(db, 'open-ratios', 'Btc120')).then(ratio => ratio.data())
            console.log(Btc2)
            setBtc120(Btc2)
            const Btc3 = await getDoc(doc(db, 'open-ratios', 'Btc365')).then(ratio => ratio.data())
            console.log(Btc3)
            setBtc365(Btc3)
            const Btc4 = await getDoc(doc(db, 'open-ratios', 'Btc1460')).then(ratio => ratio.data())
            console.log(Btc4)
            setBtc1460(Btc4)
            const Sol1 = await getDoc(doc(db, 'open-ratios', 'Sol30')).then(ratio => ratio.data())
            console.log(Sol1)
            setSol30(Sol1)
            const Sol2 = await getDoc(doc(db, 'open-ratios', 'Sol120')).then(ratio => ratio.data())
            console.log(Sol2)
            setSol120(Sol2)
            const Sol3 = await getDoc(doc(db, 'open-ratios', 'Sol365')).then(ratio => ratio.data())
            console.log(Sol3)
            setSol365(Sol3)
            const Sol4 = await getDoc(doc(db, 'open-ratios', 'Sol1460')).then(ratio => ratio.data())
            console.log(Sol4)
            setSol1460(Sol4)
            const Ltc1 = await getDoc(doc(db, 'open-ratios', 'Ltc30')).then(ratio => ratio.data())
            console.log(Ltc1)
            setLtc30(Ltc1)
            const Ltc2 = await getDoc(doc(db, 'open-ratios', 'Ltc120')).then(ratio => ratio.data())
            console.log(Ltc2)
            setLtc120(Ltc2)
            const Ltc3 = await getDoc(doc(db, 'open-ratios', 'Ltc365')).then(ratio => ratio.data())
            console.log(Ltc3)
            setLtc365(Ltc3)
            const Ltc4 = await getDoc(doc(db, 'open-ratios', 'Ltc1460')).then(ratio => ratio.data())
            console.log(Ltc4)
            setLtc1460(Ltc4)

            if (user) {
                const promise = await getDoc(doc(db, 'users', user.uid)).then(profile => profile.data())
                console.log(promise)
                setPlan(promise['plan'])

                const Matic1 = await getDoc(doc(db, 'closed-ratios', 'Matic30')).then(ratio => ratio.data())
                console.log(Matic1)
                setMatic30(Matic1)
                const Matic2 = await getDoc(doc(db, 'closed-ratios', 'Matic120')).then(ratio => ratio.data())
                console.log(Matic2)
                setMatic120(Matic2)
                const Matic3 = await getDoc(doc(db, 'closed-ratios', 'Matic365')).then(ratio => ratio.data())
                console.log(Matic3)
                setMatic365(Matic3)
                const Matic4 = await getDoc(doc(db, 'closed-ratios', 'Matic1460')).then(ratio => ratio.data())
                console.log(Matic4)
                setMatic1460(Matic4)
                const Vet1 = await getDoc(doc(db, 'closed-ratios', 'Vet30')).then(ratio => ratio.data())
                console.log(Vet1)
                setVet30(Vet1)
                const Vet2 = await getDoc(doc(db, 'closed-ratios', 'Vet120')).then(ratio => ratio.data())
                console.log(Vet2)
                setVet120(Vet2)
                const Vet3 = await getDoc(doc(db, 'closed-ratios', 'Vet365')).then(ratio => ratio.data())
                console.log(Vet3)
                setVet365(Vet3)
                const Vet4 = await getDoc(doc(db, 'closed-ratios', 'Vet1460')).then(ratio => ratio.data())
                console.log(Vet4)
                setVet1460(Vet4)
                const Atom1 = await getDoc(doc(db, 'closed-ratios', 'Atom30')).then(ratio => ratio.data())
                console.log(Atom1)
                setAtom30(Atom1)
                const Atom2 = await getDoc(doc(db, 'closed-ratios', 'Atom120')).then(ratio => ratio.data())
                console.log(Atom2)
                setAtom120(Atom2)
                const Atom3 = await getDoc(doc(db, 'closed-ratios', 'Atom365')).then(ratio => ratio.data())
                console.log(Atom3)
                setAtom365(Atom3)
                const Atom4 = await getDoc(doc(db, 'closed-ratios', 'Atom1460')).then(ratio => ratio.data())
                console.log(Atom4)
                setAtom1460(Atom4)
                const Doge1 = await getDoc(doc(db, 'closed-ratios', 'Doge30')).then(ratio => ratio.data())
                console.log(Doge1)
                setDoge30(Doge1)
                const Doge2 = await getDoc(doc(db, 'closed-ratios', 'Doge120')).then(ratio => ratio.data())
                console.log(Doge2)
                setDoge120(Doge2)
                const Doge3 = await getDoc(doc(db, 'closed-ratios', 'Doge365')).then(ratio => ratio.data())
                console.log(Doge3)
                setDoge365(Doge3)
                const Doge4 = await getDoc(doc(db, 'closed-ratios', 'Doge1460')).then(ratio => ratio.data())
                console.log(Doge4)
                setDoge1460(Doge4)
                const Trx1 = await getDoc(doc(db, 'closed-ratios', 'Trx30')).then(ratio => ratio.data())
                console.log(Trx1)
                setTrx30(Trx1)
                const Trx2 = await getDoc(doc(db, 'closed-ratios', 'Trx120')).then(ratio => ratio.data())
                console.log(Trx2)
                setTrx120(Trx2)
                const Trx3 = await getDoc(doc(db, 'closed-ratios', 'Trx365')).then(ratio => ratio.data())
                console.log(Trx3)
                setTrx365(Trx3)
                const Trx4 = await getDoc(doc(db, 'closed-ratios', 'Trx1460')).then(ratio => ratio.data())
                console.log(Trx4)
                setTrx1460(Trx4)
                const Eos1 = await getDoc(doc(db, 'closed-ratios', 'Eos30')).then(ratio => ratio.data())
                console.log(Eos1)
                setEos30(Eos1)
                const Eos2 = await getDoc(doc(db, 'closed-ratios', 'Eos120')).then(ratio => ratio.data())
                console.log(Eos2)
                setEos120(Eos2)
                const Eos3 = await getDoc(doc(db, 'closed-ratios', 'Eos365')).then(ratio => ratio.data())
                console.log(Eos3)
                setEos365(Eos3)
                const Eos4 = await getDoc(doc(db, 'closed-ratios', 'Eos1460')).then(ratio => ratio.data())
                console.log(Eos4)
                setEos1460(Eos4)
                const Link1 = await getDoc(doc(db, 'closed-ratios', 'Link30')).then(ratio => ratio.data())
                console.log(Link1)
                setLink30(Link1)
                const Link2 = await getDoc(doc(db, 'closed-ratios', 'Link120')).then(ratio => ratio.data())
                console.log(Link2)
                setLink120(Link2)
                const Link3 = await getDoc(doc(db, 'closed-ratios', 'Link365')).then(ratio => ratio.data())
                console.log(Link3)
                setLink365(Link3)
                const Link4 = await getDoc(doc(db, 'closed-ratios', 'Link1460')).then(ratio => ratio.data())
                console.log(Link4)
                setLink1460(Link4)
            }

            return ''
        }
        fetchData().then(r => console.log(r))
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

    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://webminers.dev/efficiency/",
        "url": "https://webminers.dev/efficiency/",
        "image": "https://webminers.dev/webminers-logo.webp",
        "name": "Webminers Investing - Asset Efficiency",
        "datePublished": "February 24th, 2023",
        "dateModified": "June 1st, 2023",
        "description": "Efficient investing is of great importance because you can buy at the perfect time and make almost nothing if you don’t have efficiency based asset selection."
    }

    return (
        <>
            <Head>
                <title>Webminers Investing - Asset Efficiency</title>
                <meta name={'og:title'} content={'Webminers Investing - Asset Efficiency'}/>
                <meta name="description"
                      content="Efficient investing is of great importance because you can buy at the perfect time and make almost nothing if you don’t have efficiency based asset selection."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property='og:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                <meta property='og:type' content='website'/>
                <meta property='og:description' content='Efficient investing is of great importance because you can buy at the perfect time and make almost nothing if you don’t have efficiency based asset selection.'/>
                <meta property='og:sitename' content='Webminers'/>
                <meta name="twitter:card" content="summary"/>
                <meta name='twitter:title' content='Webminers Investing - Asset Efficiency'/>
                <meta name='twitter:description' content='Efficient investing is of great importance because you can buy at the perfect time and make almost nothing if you don’t have efficiency based asset selection.'/>
                <meta name='twitter:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
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
                                                                    <td>
                                                                        {Eth30
                                                                            ? Eth30['Sharpe']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Eth30
                                                                            ? Eth30['Sortino']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Eth30
                                                                            ? Eth30['Omega']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Four Month Term</td>
                                                                    <td>
                                                                        {Eth120
                                                                            ? Eth120['Sharpe']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Eth120
                                                                            ? Eth120['Sortino']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Eth120
                                                                            ? Eth120['Omega']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>One Year Term</td>
                                                                    <td>
                                                                        {Eth365
                                                                            ? Eth365['Sharpe']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Eth365
                                                                            ? Eth365['Sortino']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Eth365
                                                                            ? Eth365['Omega']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Four Year Term</td>
                                                                    <td>
                                                                        {Eth1460
                                                                            ? Eth1460['Sharpe']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Eth1460
                                                                            ? Eth1460['Sortino']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Eth1460
                                                                            ? Eth1460['Omega']
                                                                            : ''
                                                                        }
                                                                    </td>
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
                                                                    <td>
                                                                        {Btc30
                                                                            ? Btc30['Sharpe']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Btc30
                                                                            ? Btc30['Sortino']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Btc30
                                                                            ? Btc30['Omega']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Four Month Term</td>
                                                                    <td>
                                                                        {Btc120
                                                                            ? Btc120['Sharpe']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Btc120
                                                                            ? Btc120['Sortino']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Btc120
                                                                            ? Btc120['Omega']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>One Year Term</td>
                                                                    <td>
                                                                        {Btc365
                                                                            ? Btc365['Sharpe']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Btc365
                                                                            ? Btc365['Sortino']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Btc365
                                                                            ? Btc365['Omega']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Four Year Term</td>
                                                                    <td>
                                                                        {Btc1460
                                                                            ? Btc1460['Sharpe']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Btc1460
                                                                            ? Btc1460['Sortino']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Btc1460
                                                                            ? Btc1460['Omega']
                                                                            : ''
                                                                        }
                                                                    </td>
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
                                                                    <td>
                                                                        {Sol30
                                                                            ? Sol30['Sharpe']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Sol30
                                                                            ? Sol30['Sharpe']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Sol30
                                                                            ? Sol30['Sharpe']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Four Month Term</td>
                                                                    <td>
                                                                        {Sol120
                                                                            ? Sol120['Sharpe']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Sol120
                                                                            ? Sol120['Sortino']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Sol120
                                                                            ? Sol120['Omega']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>One Year Term</td>
                                                                    <td>
                                                                        {Sol365
                                                                            ? Sol365['Sharpe']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Sol365
                                                                            ? Sol365['Sharpe']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Sol365
                                                                            ? Sol365['Sharpe']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Four Year Term</td>
                                                                    <td>
                                                                        {Sol1460
                                                                            ? Sol1460['Sharpe']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Sol1460
                                                                            ? Sol1460['Sortino']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Sol1460
                                                                            ? Sol1460['Omega']
                                                                            : ''
                                                                        }
                                                                    </td>
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
                                                                    <td>
                                                                        {Ltc30
                                                                            ? Ltc30['Sharpe']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Ltc30
                                                                            ? Ltc30['Sortino']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Ltc30
                                                                            ? Ltc30['Omega']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Four Month Term</td>
                                                                    <td>
                                                                        {Ltc120
                                                                            ? Ltc120['Sharpe']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Ltc120
                                                                            ? Ltc120['Sortino']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Ltc120
                                                                            ? Ltc120['Omega']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>One Year Term</td>
                                                                    <td>
                                                                        {Ltc365
                                                                            ? Ltc365['Sharpe']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Ltc365
                                                                            ? Ltc365['Sortino']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Ltc365
                                                                            ? Ltc365['Omega']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Four Year Term</td>
                                                                    <td>
                                                                        {Ltc1460
                                                                            ? Ltc1460['Sharpe']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Ltc1460
                                                                            ? Ltc1460['Sortino']
                                                                            : ''
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {Ltc1460
                                                                            ? Ltc1460['Omega']
                                                                            : ''
                                                                        }
                                                                    </td>
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
                            <h2 style={{textAlign: 'center', padding: '25px', fontSize: '40px'}}>Premium
                                Research</h2>
                            {loading
                                ?
                                <Container style={{padding: '25px 10%'}}>
                                    <h2>Loading...</h2>
                                </Container>
                                : plan === 'Strategist' || 'Balanced'
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
                                                                        <td>
                                                                            {Matic30
                                                                                ? Matic30['Sharpe']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Matic30
                                                                                ? Matic30['Sortino']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Matic30
                                                                                ? Matic30['Omega']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Four Month Term</td>
                                                                        <td>
                                                                            {Matic120
                                                                                ? Matic120['Sharpe']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Matic120
                                                                                ? Matic120['Sortino']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Matic120
                                                                                ? Matic120['Omega']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>One Year Term</td>
                                                                        <td>
                                                                            {Matic365
                                                                                ? Matic365['Sharpe']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Matic365
                                                                                ? Matic365['Sortino']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Matic365
                                                                                ? Matic365['Omega']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Four Year Term</td>
                                                                        <td>
                                                                            {Matic1460
                                                                                ? Matic1460['Sharpe']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Matic1460
                                                                                ? Matic1460['Sortino']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Matic1460
                                                                                ? Matic1460['Omega']
                                                                                : ''
                                                                            }
                                                                        </td>
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
                                                                        <td>
                                                                            {Vet30
                                                                                ? Vet30['Sharpe']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Vet30
                                                                                ? Vet30['Sortino']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Vet30
                                                                                ? Vet30['Omega']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Four Month Term</td>
                                                                        <td>
                                                                            {Vet120
                                                                                ? Vet120['Sharpe']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Vet120
                                                                                ? Vet120['Sortino']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Vet120
                                                                                ? Vet120['Omega']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>One Year Term</td>
                                                                        <td>
                                                                            {Vet365
                                                                                ? Vet365['Sharpe']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Vet365
                                                                                ? Vet365['Sortino']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Vet365
                                                                                ? Vet365['Omega']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Four Year Term</td>
                                                                        <td>
                                                                            {Vet1460
                                                                                ? Vet1460['Sharpe']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Vet1460
                                                                                ? Vet1460['Sortino']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Vet1460
                                                                                ? Vet1460['Omega']
                                                                                : ''
                                                                            }
                                                                        </td>
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
                                                                        <td>
                                                                            {Atom30
                                                                                ? Atom30['Sharpe']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Atom30
                                                                                ? Atom30['Sortino']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Atom30
                                                                                ? Atom30['Omega']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Four Month Term</td>
                                                                        <td>
                                                                            {Atom120
                                                                                ? Atom120['Sharpe']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Atom120
                                                                                ? Atom120['Sortino']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Atom120
                                                                                ? Atom120['Omega']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>One Year Term</td>
                                                                        <td>
                                                                            {Atom365
                                                                                ? Atom365['Sharpe']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Atom365
                                                                                ? Atom365['Sortino']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Atom365
                                                                                ? Atom365['Omega']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Four Year Term</td>
                                                                        <td>
                                                                            {Atom1460
                                                                                ? Atom1460['Sharpe']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Atom1460
                                                                                ? Atom1460['Sortino']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Atom1460
                                                                                ? Atom1460['Omega']
                                                                                : ''
                                                                            }
                                                                        </td>
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
                                                                        <td>
                                                                            {Doge30
                                                                                ? Doge30['Sharpe']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Doge30
                                                                                ? Doge30['Sortino']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Doge30
                                                                                ? Doge30['Omega']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Four Month Term</td>
                                                                        <td>
                                                                            {Doge120
                                                                                ? Doge120['Sharpe']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Doge120
                                                                                ? Doge120['Sortino']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Doge120
                                                                                ? Doge120['Omega']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>One Year Term</td>
                                                                        <td>
                                                                            {Doge365
                                                                                ? Doge365['Sharpe']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Doge365
                                                                                ? Doge365['Sortino']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Doge365
                                                                                ? Doge365['Omega']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Four Year Term</td>
                                                                        <td>
                                                                            {Doge1460
                                                                                ? Doge1460['Sharpe']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Doge1460
                                                                                ? Doge1460['Sortino']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Doge1460
                                                                                ? Doge1460['Omega']
                                                                                : ''
                                                                            }
                                                                        </td>
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
                                                                        <td>
                                                                            {Trx30
                                                                                ? Trx30['Sharpe']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Trx30
                                                                                ? Trx30['Sortino']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Trx30
                                                                                ? Trx30['Omega']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Four Month Term</td>
                                                                        <td>
                                                                            {Trx120
                                                                                ? Trx120['Sharpe']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Trx120
                                                                                ? Trx120['Sortino']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Trx120
                                                                                ? Trx120['Omega']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>One Year Term</td>
                                                                        <td>
                                                                            {Trx365
                                                                                ? Trx365['Sharpe']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Trx365
                                                                                ? Trx365['Sortino']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Trx365
                                                                                ? Trx365['Omega']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Four Year Term</td>
                                                                        <td>
                                                                            {Trx1460
                                                                                ? Trx1460['Sharpe']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Trx1460
                                                                                ? Trx1460['Sortino']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Trx1460
                                                                                ? Trx1460['Omega']
                                                                                : ''
                                                                            }
                                                                        </td>
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
                                                                        <td>
                                                                            {Eos30
                                                                                ? Eos30['Sharpe']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Eos30
                                                                                ? Eos30['Sortino']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Eos30
                                                                                ? Eos30['Omega']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Four Month Term</td>
                                                                        <td>
                                                                            {Eos120
                                                                                ? Eos120['Sharpe']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Eos120
                                                                                ? Eos120['Sortino']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Eos120
                                                                                ? Eos120['Omega']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>One Year Term</td>
                                                                        <td>
                                                                            {Eos365
                                                                                ? Eos365['Sharpe']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Eos365
                                                                                ? Eos365['Sortino']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Eos365
                                                                                ? Eos365['Omega']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Four Year Term</td>
                                                                        <td>
                                                                            {Eos1460
                                                                                ? Eos1460['Sharpe']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Eos1460
                                                                                ? Eos1460['Sortino']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Eos1460
                                                                                ? Eos1460['Omega']
                                                                                : ''
                                                                            }
                                                                        </td>
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
                                                                        <td>
                                                                            {Link30
                                                                                ? Link30['Sharpe']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Link30
                                                                                ? Link30['Sortino']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Link30
                                                                                ? Link30['Omega']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Four Month Term</td>
                                                                        <td>
                                                                            {Link120
                                                                                ? Link120['Sharpe']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Link120
                                                                                ? Link120['Sortino']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Link120
                                                                                ? Link120['Omega']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>One Year Term</td>
                                                                        <td>
                                                                            {Link365
                                                                                ? Link365['Sharpe']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Link365
                                                                                ? Link365['Sortino']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Link365
                                                                                ? Link365['Omega']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Four Year Term</td>
                                                                        <td>
                                                                            {Link1460
                                                                                ? Link1460['Sharpe']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Link1460
                                                                                ? Link1460['Sortino']
                                                                                : ''
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {Link1460
                                                                                ? Link1460['Omega']
                                                                                : ''
                                                                            }
                                                                        </td>
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
                                                                                   href={'/pricing'}>Balanced
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
                                                                                   href={'/pricing'}>Balanced
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
                                                                                   href={'/pricing'}>Balanced
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
                                                                                   href={'/pricing'}>Balanced
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
                                                                                   href={'/pricing'}>Balanced
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
                                                                                   href={'/pricing'}>Balanced
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
                                                                                   href={'/pricing'}>Balanced
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
                                        <Button variant={'success'} onClick={changeTime}>Change
                                            to {times[Math.abs(timeUnit - 1)]}</Button>
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