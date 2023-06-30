import {Button, Card, Col, Container, Nav, Row, Tab} from "react-bootstrap";
import styles from "@/styles/Home.module.css";
import React, {useEffect, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "@/config";
import {doc, getDoc} from "firebase/firestore";
import Image from "next/image";
import Head from "next/head";
import InsightsPlot from '@/images/plots/InsightsPlot.webp'
import MacroPlot from '@/images/plots/MacroInsightsPlot.webp'
import MicroPlot from '@/images/plots/MicroInsightsPlot.webp'


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

    const handleKeypress1 = e => {
        if (e.keyCode === 13) {
            calculate1();
        }
    };
    const handleKeypress2 = e => {
        if (e.keyCode === 13) {
            calculate2();
        }
    };
    const handleKeypress3 = e => {
        if (e.keyCode === 13) {
            calculate3();
        }
    };

    function calculate1() {
        const initialInvestment = document.getElementById("initial-investment").value;
        const monthlyReturn = document.getElementById("monthly-return").value;
        const months = document.getElementById("months").value;
        const totalProfit = initialInvestment * Math.pow(1 + monthlyReturn / 100, months) - initialInvestment;
        const result = document.getElementById("result");
        result.value = "$" + totalProfit.toFixed(2); // display result
    }

    function calculate2() {
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

    const [timeUnit, setTimeUnit] = useState(0);
    const [totalProfit, setProfit] = useState(0)

    const times = ['Months', 'Years']

    function calculate3() {
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
                        <Col lg={8} md={12} className={styles.pad}>
                            <h3 style={{textAlign: 'center', padding: '25px'}}>Macroeconomic and Microeconomic
                                Insights</h3>
                            <Container>
                                <Card className={styles.card1}>
                                    <Tab.Container id="left-tabs-example" defaultActiveKey="Macro">
                                        <Col>
                                            <Container className={styles.card1}>
                                                <Row lg={12} style={{paddingBottom: '5px'}}>
                                                    <Col md={12}>
                                                        <Nav variant="pills" className="flex-column">
                                                            <Nav.Item>
                                                                <Nav.Link className={styles.navgreen} eventKey="Macro">
                                                                    Macroeconomic Insights</Nav.Link>
                                                            </Nav.Item>
                                                        </Nav>
                                                    </Col>
                                                    <Col md={12}>
                                                        <Nav variant="pills" className="flex-column">
                                                            <Nav.Item>
                                                                <Nav.Link className={styles.navgreen} eventKey="Micro">
                                                                    Microeconomic Insights</Nav.Link>
                                                            </Nav.Item>
                                                        </Nav>
                                                    </Col>
                                                </Row>
                                            </Container>
                                            <Row lg={12}>
                                                <Tab.Content>
                                                    <Tab.Pane eventKey='Macro'>
                                                        <Card className={styles.card1}>
                                                            <Image style={{height: '100%', width: '100%'}}
                                                                   src={MacroPlot}
                                                                   alt={'Economic Seasons'}
                                                                   placeholder={'blur'}
                                                            />
                                                        </Card>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey='Micro'>
                                                        <Card className={styles.card1}>
                                                            {loading
                                                                ? <Card.Title>Loading...</Card.Title>
                                                                : user
                                                                    ? plan !== 'none' || plan === ''
                                                                        ?
                                                                        <Image
                                                                            style={{height: '100%', width: '100%'}}
                                                                            src={MicroPlot}
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
                        <Col lg={4} md={4} sm={12} className={styles.pad}>
                            <div style={{maxWidth: '300px', margin: 'auto'}}>
                                <h4 style={{textAlign: 'center'}}>Investing Returns</h4>
                                <p>Profit based on monthly return.</p>
                                <Col>
                                    <Row style={{margin: '15px'}}>
                                        <label style={{padding: 0}} htmlFor="initial-investment">Starting Amount</label>
                                        <input className={styles.inputs} onKeyDown={handleKeypress1} type="number"
                                               id="initial-investment" min="0"
                                               required/>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <label style={{padding: 0}} htmlFor="monthly-return">Monthly Profit %</label>
                                        <input className={styles.inputs} onKeyDown={handleKeypress1} type="number"
                                               id="monthly-return" min="0"
                                               required/>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <label style={{padding: 0}} htmlFor="months">Month Count</label>
                                        <input className={styles.inputs} onKeyDown={handleKeypress1} type="number"
                                               id="months" min="0" required/>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <Button variant={'success'} type="button"
                                                onClick={calculate1}>Calculate</Button>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <label style={{padding: 0}} htmlFor="result">Total Profit</label>
                                        <input className={styles.inputs} type="text" id="result" disabled/>
                                    </Row>
                                </Col>
                            </div>
                        </Col>
                        <Col lg={6} md={4} sm={12} className={styles.pad}>
                            <div style={{maxWidth: '300px', margin: 'auto'}}>
                                <h4 style={{textAlign: 'center'}}>Capital Gains Tax</h4>
                                <p><strong>Not Tax Advice. </strong>Predicted tax using 15%.</p>
                                <Col>
                                    <Row style={{margin: '15px'}}>
                                        <label htmlFor="starting-amount">Starting Amount</label>
                                        <input className={styles.inputs} onKeyDown={handleKeypress2} type="number"
                                               id="starting-amount" min="0"
                                               required/>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <label htmlFor="ending-amount">Ending Amount</label>
                                        <input className={styles.inputs} onKeyDown={handleKeypress2} type="number"
                                               id="ending-amount" min="0"
                                               required/>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <Button variant={'success'} type="button"
                                                onClick={calculate2}>Calculate</Button>
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
                        <Col lg={6} md={4} sm={12} className={styles.pad}>
                            <div style={{maxWidth: '300px', margin: 'auto'}}>
                                <h4 style={{textAlign: 'center'}}>Savings Goal</h4>
                                <p>Monthly savings until goal.</p>
                                <Col>
                                    <Row style={{margin: '15px'}}>
                                        <label style={{padding: 0}} htmlFor="ending-investment">Goal Amount</label>
                                        <input className={styles.inputs} onKeyDown={handleKeypress3} type="number"
                                               id="ending-investment" min="0"
                                               required/>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <label style={{padding: 0}} htmlFor="time">{times[timeUnit]} till Goal</label>
                                        <input className={styles.inputs} onKeyDown={handleKeypress3} type="number"
                                               id="time" min="0" required/>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <Button variant={'success'} onClick={changeTime}>Change
                                            to {times[Math.abs(timeUnit - 1)]}</Button>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <Button variant={'success'} type="button"
                                                onClick={calculate3}>Calculate</Button>
                                    </Row>
                                    <Row style={{margin: '15px'}}>
                                        <label style={{padding: 0}} htmlFor="result">$ Savings Per Month</label>
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


// <Col xxl={5} lg={6} md={12} className={styles.pad}>
//     <Container>
//         <Card style={{backgroundColor: 'rgb(245,245,245)'}}>
//             <Container>
//                 <Card.Title
//                     style={{fontSize: '30px', textAlign: 'center', paddingTop: '25px'}}>
//                     Market Insights
//                 </Card.Title>
//                 <Card.Body style={{margin: 'auto'}}>
//                     <Card.Text style={{fontSize: '20px'}}>
//                         All investing markets have backing from the economy. When the economy is
//                         good, people are willing to spend more because they have more. When the
//                         economy is doing poorly, they will spend less because they have less.
//                         <br/>
//                         <br/>
//                         To be successful in investing, we can determine where the economy is
//                         with macroeconomic and microeconomic data. Our data shows us long-term
//                         trends which can predict where we are going next, helping us buy at a
//                         discount or understand when the market is overpriced.
//                         <br/>
//                         <br/>
//                         P.S. Now that we have answered &apos;When to invest?&apos; visit
//                         <Card.Link className={styles.weblink} href={'balancing'}> Asset
//                             Balancing
//                         </Card.Link> to answer &apos;What to invest in?&apos;
//                     </Card.Text>
//                 </Card.Body>
//             </Container>
//         </Card>
{/*    </Container>*/
}
{/*</Col>*/
}