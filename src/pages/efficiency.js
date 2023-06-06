import {Button, Card, Col, Container, Nav, Row, Tab} from "react-bootstrap";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "@/config";
import {doc, getDoc} from "firebase/firestore";
import styles from "@/styles/Home.module.css";
import React, {useEffect, useState} from "react";
import Head from "next/head";
import Image from "next/image";
import {getStorage, ref, getDownloadURL} from "firebase/storage"
import EfficiencyImg from '@/images/plots/Efficiency.webp'

export default function Efficiency() {
    let [plan, setPlan] = useState('')
    const [user, loading] = useAuthState(auth)


    useEffect(() => {
        const fetchData = async () => {
            const storage = getStorage();

            getDownloadURL(ref(storage, 'EthEfficiency.webp'))
                .then((url) => {
                    const img = document.getElementById('EthImg');
                    img.setAttribute('src', url);
                })
                .catch((error) => {
                    console.log(error)
                });
            getDownloadURL(ref(storage, 'BtcEfficiency.webp'))
                .then((url) => {
                    const img = document.getElementById('BtcImg');
                    img.setAttribute('src', url);
                })
                .catch((error) => {
                    console.log(error)
                });
            getDownloadURL(ref(storage, 'SolEfficiency.webp'))
                .then((url) => {
                    const img = document.getElementById('SolImg');
                    img.setAttribute('src', url);
                })
                .catch((error) => {
                    console.log(error)
                });
            getDownloadURL(ref(storage, 'LtcEfficiency.webp'))
                .then((url) => {
                    const img = document.getElementById('LtcImg');
                    img.setAttribute('src', url);
                })
                .catch((error) => {
                    console.log(error)
                });

            if (user) {
                const promise = await getDoc(doc(db, 'users', user.uid)).then(profile => profile.data())
                console.log(promise)
                setPlan(promise['plan'])

                getDownloadURL(ref(storage, 'MaticEfficiency.webp'))
                    .then((url) => {
                        const img = document.getElementById('MaticImg');
                        img.setAttribute('src', url);
                    })
                    .catch((error) => {
                        console.log(error)
                    });
                getDownloadURL(ref(storage, 'VetEfficiency.webp'))
                    .then((url) => {
                        const img = document.getElementById('VetImg');
                        img.setAttribute('src', url);
                    })
                    .catch((error) => {
                        console.log(error)
                    });
                getDownloadURL(ref(storage, 'AtomEfficiency.webp'))
                    .then((url) => {
                        const img = document.getElementById('AtomImg');
                        img.setAttribute('src', url);
                    })
                    .catch((error) => {
                        console.log(error)
                    });
                getDownloadURL(ref(storage, 'DogeEfficiency.webp'))
                    .then((url) => {
                        const img = document.getElementById('DogeImg');
                        img.setAttribute('src', url);
                    })
                    .catch((error) => {
                        console.log(error)
                    });
                getDownloadURL(ref(storage, 'TrxEfficiency.webp'))
                    .then((url) => {
                        const img = document.getElementById('TrxImg');
                        img.setAttribute('src', url);
                    })
                    .catch((error) => {
                        console.log(error)
                    });
                getDownloadURL(ref(storage, 'LinkEfficiency.webp'))
                    .then((url) => {
                        const img = document.getElementById('LinkImg');
                        img.setAttribute('src', url);
                    })
                    .catch((error) => {
                        console.log(error)
                    });
            }

            return ''
        }
        fetchData().then(r => console.log(r))
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

    const SchemaMarkup = () => (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "@id": "https://webminers.dev/efficiency/",
                    "url": "https://webminers.dev/efficiency/",
                    "image": "https://webminers.dev/webminers-logo.webp",
                    "name": "Webminers Investing - Asset Efficiency",
                    "datePublished": "February 24th, 2023",
                    "dateModified": "June 1st, 2023",
                    "description": "Efficient investing is of great importance because you can buy at the perfect time and make almost nothing if you don’t have efficiency based asset selection."
                }),
            }}
        />
    )

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
                <meta property='og:description'
                      content='Efficient investing is of great importance because you can buy at the perfect time and make almost nothing if you don’t have efficiency based asset selection.'/>
                <meta property='og:sitename' content='Webminers'/>
                <meta name="twitter:card" content="summary"/>
                <meta name='twitter:title' content='Webminers Investing - Asset Efficiency'/>
                <meta name='twitter:description'
                      content='Efficient investing is of great importance because you can buy at the perfect time and make almost nothing if you don’t have efficiency based asset selection.'/>
                <meta name='twitter:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                <SchemaMarkup/>
            </Head>
            <div style={{backgroundColor: 'whitesmoke', borderRadius: '25px', width: '100%'}}>
                <Container>
                    <Row>
                        <Col xxl={4} lg={4} md={12} className={styles.pad}>
                            <Container className={styles.pad}>
                                <Card style={{backgroundColor: 'rgb(245,245,245)'}}>
                                    <Container>
                                        <Card.Body style={{margin: 'auto'}}>
                                            <Card.Title
                                                style={{fontSize: '30px', textAlign: 'center', paddingTop: '15px'}}>
                                                Asset Efficiency
                                            </Card.Title>
                                        </Card.Body>
                                        <Card.Body style={{margin: 'auto'}}>
                                            <Card.Text style={{fontSize: '20px'}}>
                                                <p>
                                                    Our asset efficiency gauges tell us each asset&apos;s risk-to-return
                                                    ratio from 1 to 100 in comparison to other cryptocurrencies. The
                                                    main timeframes are around 30 to 120 days, however data from up to 4
                                                    years is being used for historical accuracy.
                                                </p>
                                                <p>
                                                    Research purposes only. We are not responsible for the taxes of the
                                                    extra profit you may make from this efficiency data.
                                                </p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Container>
                                </Card>
                            </Container>
                        </Col>
                        <Col xxl={6} lg={8} md={12}>
                            <h3 style={{textAlign: 'center', padding: '25px'}}>Basic Research</h3>
                            <Container>
                                <Container>
                                    <Tab.Container id="left-tabs-example"
                                                   defaultActiveKey="Ethereum">
                                        <Row>
                                            <Col md={12} lg={4}>
                                                <Nav variant="pills" className="flex-column">
                                                    <Col>
                                                        <Row style={{padding: '3px'}}>
                                                            <Nav.Link className={styles.navgreen}
                                                                      eventKey="Ethereum">Ethereum</Nav.Link>
                                                        </Row>
                                                        <Row style={{padding: '3px'}}>
                                                            <Nav.Link className={styles.navgreen}
                                                                      eventKey="Bitcoin">Bitcoin</Nav.Link>
                                                        </Row>
                                                        <Row style={{padding: '3px'}}>
                                                            <Nav.Link className={styles.navgreen}
                                                                      eventKey="Solana">Solana</Nav.Link>
                                                        </Row>
                                                        <Row style={{padding: '3px'}}>
                                                            <Nav.Link className={styles.navgreen}
                                                                      eventKey="Litecoin">Litecoin</Nav.Link>
                                                        </Row>
                                                    </Col>
                                                </Nav>
                                            </Col>
                                            <Col md={12} lg={8} style={{
                                                border: '1px solid black',
                                                padding: '10px',
                                                borderRadius: '10px'
                                            }}>
                                                <Tab.Content>
                                                    <Tab.Pane eventKey="Ethereum">
                                                        <Image className={styles.effImg} id="EthImg"
                                                               alt={'Loading...'} src={''} unoptimized={true}/>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="Bitcoin">
                                                        <Image className={styles.effImg} id="BtcImg"
                                                               alt={'Loading...'} src={''} unoptimized={true}/>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="Solana">
                                                        <Image className={styles.effImg} id="SolImg"
                                                               alt={'Loading...'} src={''} unoptimized={true}/>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="Litecoin">
                                                        <Image className={styles.effImg} id="LtcImg"
                                                               alt={'Loading...'} src={''} unoptimized={true}/>
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Col>
                                        </Row>
                                    </Tab.Container>
                                </Container>
                            </Container>
                            <h3 style={{textAlign: 'center', padding: '25px'}}>Premium Research</h3>
                            {loading
                                ?
                                <Container style={{padding: '25px 10%'}}>
                                    <h2>Loading...</h2>
                                </Container>
                                : plan === 'Strategist' || plan === 'Balanced'
                                    ?
                                    <Container style={{paddingBottom: '25px'}}>
                                        <Tab.Container id="left-tabs-example"
                                                       defaultActiveKey="Matic">
                                            <Row>
                                                <Col md={12} lg={4}>
                                                    <Nav variant="pills" className="flex-column">
                                                        <Col>
                                                            <Row style={{padding: '3px'}}>
                                                                <Nav.Link className={styles.navgreen}
                                                                          eventKey="Matic">Matic</Nav.Link>
                                                            </Row>
                                                            <Row style={{padding: '3px'}}>
                                                                <Nav.Link className={styles.navgreen}
                                                                          eventKey="Vet">VeChain</Nav.Link>
                                                            </Row>
                                                            <Row style={{padding: '3px'}}>
                                                                <Nav.Link className={styles.navgreen}
                                                                          eventKey="Cosmos">Atom(Cosmos)</Nav.Link>
                                                            </Row>
                                                            <Row style={{padding: '3px'}}>
                                                                <Nav.Link className={styles.navgreen}
                                                                          eventKey="Doge">Doge</Nav.Link>
                                                            </Row>
                                                            <Row style={{padding: '3px'}}>
                                                                <Nav.Link className={styles.navgreen}
                                                                          eventKey="Tron">Tron</Nav.Link>
                                                            </Row>
                                                            <Row style={{padding: '3px'}}>
                                                                <Nav.Link className={styles.navgreen}
                                                                          eventKey="Link">Link</Nav.Link>
                                                            </Row>
                                                        </Col>
                                                    </Nav>
                                                </Col>
                                                <Col md={12} lg={8} style={{
                                                    border: '1px solid black',
                                                    padding: '10px',
                                                    borderRadius: '10px'
                                                }}>
                                                    <Tab.Content>
                                                        <Tab.Pane eventKey="Matic">
                                                            <Image className={styles.effImg} id="MaticImg"
                                                                   alt={'Loading...'} src={''} unoptimized={true}/>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Vet">
                                                            <Image className={styles.effImg} id="VetImg"
                                                                   alt={'Loading...'} src={''} unoptimized={true}/>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Cosmos">
                                                            <Image className={styles.effImg} id="AtomImg"
                                                                   alt={'Loading...'} src={''} unoptimized={true}/>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Doge">
                                                            <Image className={styles.effImg} id="DogeImg"
                                                                   alt={'Loading...'} src={''} unoptimized={true}/>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Tron">
                                                            <Image className={styles.effImg} id="TrxImg"
                                                                   alt={'Loading...'} src={''} unoptimized={true}/>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Link">
                                                            <Image className={styles.effImg} id="LinkImg"
                                                                   alt={'Loading...'} src={''} unoptimized={true}/>
                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                </Col>
                                            </Row>
                                        </Tab.Container>
                                    </Container>
                                    :
                                    <Container style={{paddingBottom: '25px'}}>
                                        <Tab.Container id="left-tabs-example"
                                                       defaultActiveKey="Matic">
                                            <Row>
                                                <Col md={12} lg={4}>
                                                    <Nav variant="pills">
                                                        <Col>
                                                            <Row style={{padding: '3px'}}>
                                                                <Nav.Link className={styles.navgreen}
                                                                          eventKey="Matic">Matic</Nav.Link>
                                                            </Row>
                                                            <Row style={{padding: '3px'}}>
                                                                <Nav.Link className={styles.navgreen}
                                                                          eventKey="Vet">VeChain</Nav.Link>
                                                            </Row>
                                                            <Row style={{padding: '3px'}}>
                                                                <Nav.Link className={styles.navgreen}
                                                                          eventKey="Cosmos">Atom(Cosmos)</Nav.Link>
                                                            </Row>
                                                            <Row style={{padding: '3px'}}>
                                                                <Nav.Link className={styles.navgreen}
                                                                          eventKey="Doge">Doge</Nav.Link>
                                                            </Row>
                                                            <Row style={{padding: '3px'}}>
                                                                <Nav.Link className={styles.navgreen}
                                                                          eventKey="Tron">Tron</Nav.Link>
                                                            </Row>
                                                            <Row style={{padding: '3px'}}>
                                                                <Nav.Link className={styles.navgreen}
                                                                          eventKey="Link">Link</Nav.Link>
                                                            </Row>
                                                        </Col>
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
                                                                    <h4 style={{textAlign: "center",}}>
                                                                        <Card.Link className={styles.weblink}
                                                                                   href={'/pricing'}>Balanced
                                                                            Plan</Card.Link> Required
                                                                    </h4>
                                                                :
                                                                <h4 style={{textAlign: "center"}}>Please <Card.Link
                                                                    className={styles.weblink}
                                                                    href={'/auth/login'}>Login</Card.Link> to
                                                                    see content</h4>
                                                            }
                                                            <Image className={styles.effImg}
                                                                   src={EfficiencyImg}
                                                                   alt={'Open Efficiency'}
                                                                   unoptimized={true}/>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Vet">
                                                            {user
                                                                ? plan === ''
                                                                    ?
                                                                    <Card.Title
                                                                        style={{textAlign: 'center'}}>Loading...</Card.Title>
                                                                    :
                                                                    <h4 style={{textAlign: "center",}}>
                                                                        <Card.Link className={styles.weblink}
                                                                                   href={'/pricing'}>Balanced
                                                                            Plan</Card.Link> Required
                                                                    </h4>
                                                                :
                                                                <h4 style={{textAlign: "center"}}>Please <Card.Link
                                                                    className={styles.weblink}
                                                                    href={'/auth/login'}>Login</Card.Link> to
                                                                    see content</h4>
                                                            }
                                                            <Image className={styles.effImg}
                                                                   src={EfficiencyImg}
                                                                   alt={'Open Efficiency'}
                                                                   unoptimized={true}/>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Cosmos">
                                                            {user
                                                                ? plan === ''
                                                                    ?
                                                                    <Card.Title
                                                                        style={{textAlign: 'center'}}>Loading...</Card.Title>
                                                                    :
                                                                    <h4 style={{textAlign: "center",}}>
                                                                        <Card.Link className={styles.weblink}
                                                                                   href={'/pricing'}>Balanced
                                                                            Plan</Card.Link> Required
                                                                    </h4>
                                                                :
                                                                <h4 style={{textAlign: "center"}}>Please <Card.Link
                                                                    className={styles.weblink}
                                                                    href={'/auth/login'}>Login</Card.Link> to
                                                                    see content</h4>
                                                            }
                                                            <Image className={styles.effImg}
                                                                   src={EfficiencyImg}
                                                                   alt={'Open Efficiency'}
                                                                   unoptimized={true}/>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Doge">
                                                            {user
                                                                ? plan === ''
                                                                    ?
                                                                    <Card.Title
                                                                        style={{textAlign: 'center'}}>Loading...</Card.Title>
                                                                    :
                                                                    <h4 style={{textAlign: "center",}}>
                                                                        <Card.Link className={styles.weblink}
                                                                                   href={'/pricing'}>Balanced
                                                                            Plan</Card.Link> Required
                                                                    </h4>
                                                                :
                                                                <h4 style={{textAlign: "center"}}>Please <Card.Link
                                                                    className={styles.weblink}
                                                                    href={'/auth/login'}>Login</Card.Link> to
                                                                    see content</h4>
                                                            }
                                                            <Image className={styles.effImg}
                                                                   src={EfficiencyImg}
                                                                   alt={'Open Efficiency'}
                                                                   unoptimized={true}/>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Tron">
                                                            {user
                                                                ? plan === ''
                                                                    ?
                                                                    <Card.Title
                                                                        style={{textAlign: 'center'}}>Loading...</Card.Title>
                                                                    :
                                                                    <h4 style={{textAlign: "center",}}>
                                                                        <Card.Link className={styles.weblink}
                                                                                   href={'/pricing'}>Balanced
                                                                            Plan</Card.Link> Required
                                                                    </h4>
                                                                :
                                                                <h4 style={{textAlign: "center"}}>Please <Card.Link
                                                                    className={styles.weblink}
                                                                    href={'/auth/login'}>Login</Card.Link> to
                                                                    see content</h4>
                                                            }
                                                            <Image className={styles.effImg}
                                                                   src={EfficiencyImg}
                                                                   alt={'Open Efficiency'}
                                                                   unoptimized={true}/>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="Link">
                                                            {user
                                                                ? plan === ''
                                                                    ?
                                                                    <Card.Title
                                                                        style={{textAlign: 'center'}}>Loading...</Card.Title>
                                                                    :
                                                                    <h4 style={{textAlign: "center",}}>
                                                                        <Card.Link className={styles.weblink}
                                                                                   href={'/pricing'}>Balanced
                                                                            Plan</Card.Link> Required
                                                                    </h4>
                                                                :
                                                                <h4 style={{textAlign: "center"}}>Please <Card.Link
                                                                    className={styles.weblink}
                                                                    href={'/auth/login'}>Login</Card.Link> to
                                                                    see content</h4>
                                                            }
                                                            <Image className={styles.effImg}
                                                                   src={EfficiencyImg}
                                                                   alt={'Open Efficiency'}
                                                                   unoptimized={true}/>
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