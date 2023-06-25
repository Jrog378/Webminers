import Head from 'next/head'
import React, {useState} from "react";
import styles from '@/styles/Home.module.css'
import {Button, Card, CardGroup, Col, Container, Nav, Row, Tab, Toast} from "react-bootstrap";
import axios from "axios";
import {toast} from "react-toastify";
import CloseButton from 'react-bootstrap/CloseButton';
import Suggest from "@/components/suggest";
import Image from "next/image";
import EfficiencyPlot from "@/images/plots/EfficiencyChart.webp"
import BalancingPlot from "@/images/plots/BalancingPlot.webp"
import InsightsPlot from "@/images/plots/InsightPlot.webp"
import Find from "@/components/find-article";


function EmailALert() {
    const [open, setOpen] = React.useState(false);
    const [timer, setTimer] = React.useState(0)
    const closeModal = () => {
        setOpen(false)
        setTimer(timer + 1)
    }

    const closeList = () => {
        setOpen(false)
    }

    React.useEffect(() => {
        setTimeout(() => {
            setOpen(true)
        }, 5000)
    }, [setOpen])

    const [mail, setMail] = useState(null);
    const [loading, setLoading] = useState(false);
    const [disp, setDisp] = useState(1)

    let disp1 = ['none', 'initial']
    let disp2 = ['initial', 'none']

    const handleKeypress = e => {
        if (e.keyCode === 13) {
            subscribe();
        }
    };

    const subscribe = () => {
        setLoading(true);
        axios.put("api/mailingList", {mail,}).then((result) => {
            if (result.status === 200) {
                toast.success(result.data.message);
                setLoading(false);
                setDisp(0)
            }
        })
            .catch((err) => {
                console.log(err);
                setLoading(false);
                setDisp(0)
            });
    };

    if (timer <= 0) {
        return (
            <>
                <Toast className={styles.AlertSizer}
                       style={{
                           position: 'absolute',
                           zIndex: '100',
                           top: '20%',
                           margin: '0',
                           backgroundColor: 'rgba(245,255,245,1)'
                       }}
                       show={open} onClose={closeModal}>
                    <Container>
                        <CloseButton style={{padding: '20px', position: 'absolute', right: '10px', top: '5px'}}
                                     onClick={closeList}/>
                        <Container style={{padding: '30px'}}>
                            <Container style={{display: disp1[disp]}}>
                                <h3 style={{padding: '5px'}}>
                                    Want Better Investing Information & Research?
                                </h3>
                                <Card.Text style={{fontSize: 'larger'}}>
                                    Join our Emailing List today and get updates on Webminers Insights, New Features,
                                    and More!
                                </Card.Text>
                                <Container>
                                    <Row style={{padding: '5px'}}>
                                        <input
                                            onChange={(e) => {
                                                setMail(e.target.value);
                                            }}
                                            onKeyDown={handleKeypress}
                                            type='email'
                                            placeholder='Email Address'
                                            className={styles.inputs}></input>
                                    </Row>
                                    <Row style={{padding: '5px'}}>
                                        <Button variant="success" onClick={subscribe}
                                                className={`btn ml-3 ${loading ? "btn-disabled loading" : "btn-primary"}`}>
                                            Join Now!
                                        </Button>
                                    </Row>
                                </Container>
                            </Container>
                            <Container style={{display: disp2[disp]}}>
                                <h4 style={{padding: '5px', textAlign: 'center'}}>Thank you for subscribing!</h4>
                                <h4 style={{padding: '5px', textAlign: 'center'}}>We&apos;ll be in touch soon.</h4>
                            </Container>
                        </Container>
                    </Container>
                </Toast>
            </>
        );
    }
}

export default function Home() {

    const SchemaMarkup = () => (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "@id": "https://webminers.dev/",
                    "url": "https://webminers.dev/",
                    "image": "https://webminers.dev/webminers-logo.webp",
                    "name": "Webminers Crypto Research - Smarter Investing, More Profit",
                    "datePublished": "August 7th, 2022",
                    "dateModified": "June 1st, 2023",
                    "description": "Providing better knowledge and research for your crypto investing decisions with market " +
                        "insights, asset balancing, and asset efficiency all historically tested."
                }),
            }}
        />
    )

    return (
        <>
            <Head>
                <title>Webminers Crypto Research - Smarter Investing, More Profit</title>
                <meta name={'og:title'}
                      content={'Webminers Crypto Research - Smarter Investing, More Profit'}/>
                <meta name="description"
                      content="Providing better knowledge and research for your crypto investing decisions with market insights, asset balancing, and asset efficiency all historically tested."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property='og:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                <meta property='og:type' content='website'/>
                <meta property='og:description'
                      content='Providing better knowledge and research for your crypto investing decisions with market insights, asset balancing, and asset efficiency all historically tested.'/>
                <meta property='og:sitename' content='Webminers'/>
                <meta name="twitter:card" content="summary"/>
                <meta name='twitter:title' content='Webminers Crypto Research - Smarter Investing, More Profit'/>
                <meta name='twitter:description'
                      content='Providing better knowledge and research for your crypto investing decisions with market insights, asset balancing, and asset efficiency all historically tested.'/>
                <meta name='twitter:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                <SchemaMarkup/>
            </Head>
            <div style={{margin: '0', width: '100%'}}>
                <div className={styles.sales}>
                    <Container style={{padding: 0}}>
                        <Row>
                            <Col md={12} lg={4} className={styles.title}>
                                <Row className={styles.pad}>
                                    <h1 style={{paddingBottom: '15px'}}>
                                        Knowledge generates profit
                                    </h1>
                                    <Col xs={6} lg={12}>
                                        <h4 className={styles.pad}>
                                            Want some?
                                        </h4>
                                    </Col>
                                    <Col xs={6} lg={12}>
                                        <Button variant={'outline-success'} className={styles.btn}
                                                href='/auth/signup'>Start For Free</Button>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={12} lg={8}>
                                <Container>
                                    <Tab.Container id="left-tabs-example"
                                                   defaultActiveKey="Crypto">
                                        <Col>
                                            <Row>
                                                <Nav variant="pills" className="flex-column">
                                                    <Row>
                                                        <Col className={styles.pad}>
                                                            <Nav.Link className={styles.navgreen}
                                                                      eventKey="Crypto">Crypto</Nav.Link>
                                                        </Col>
                                                        <Col className={styles.pad}>
                                                            <Nav.Link className={styles.navgreen}
                                                                      eventKey="Library">Library</Nav.Link>
                                                        </Col>
                                                        <Col className={styles.pad}>
                                                            <Nav.Link className={styles.navgreen}
                                                                      eventKey="Articles">Articles</Nav.Link>
                                                        </Col>
                                                    </Row>
                                                </Nav>
                                            </Row>
                                            <Row style={{
                                                border: '0.5px solid gray',
                                                padding: '10px',
                                                borderRadius: '10px'
                                            }}>
                                                <Tab.Content>
                                                    <Tab.Pane eventKey="Crypto">
                                                        <Container>
                                                            <Card.Title id={'why'} style={{
                                                                paddingBottom: '15px',
                                                                textAlign: 'center',
                                                                fontSize: 'x-large'
                                                            }}>
                                                                Missing out on opportunities to grow your wealth from
                                                                not
                                                                having
                                                                the right tools or knowledge?
                                                            </Card.Title>
                                                            <p style={{fontSize: 'large'}}>
                                                                If you want efficient profits and to beat the market,
                                                                Webminers is where to be.
                                                                We
                                                                specialize in identifying the ups and downs of the
                                                                crypto
                                                                market and identifying
                                                                how
                                                                much
                                                                of what asset is best for and efficient portfolio, all
                                                                fully
                                                                tested with past
                                                                and current data.
                                                            </p>
                                                        </Container>
                                                        <Row>
                                                            <Col sm={12} md={6} className={styles.pad}>
                                                                <Card className={styles.cardhover}>
                                                                    <Card.Body>
                                                                        <Card.Link href={'/efficiency'}>
                                                                            <Image
                                                                                src={EfficiencyPlot}
                                                                                alt={'Efficiency Plot'}
                                                                                className={styles.blogimgs}
                                                                                placeholder={'blur'}
                                                                            />
                                                                        </Card.Link>
                                                                    </Card.Body>

                                                                    <Card.Body>
                                                                        <Card.Title style={{fontSize: 'x-large'}}>
                                                                            Asset Efficiency
                                                                        </Card.Title>
                                                                        <Card.Text style={{fontSize: 'larger'}}>
                                                                            Our asset efficiency rates a set of assets
                                                                            from 1-100 based on downside risk and upside
                                                                            potential.
                                                                        </Card.Text>
                                                                        <Button variant="outline-success" className={styles.btn}
                                                                                href='/efficiency'>Asset
                                                                            Efficiency</Button>
                                                                    </Card.Body>
                                                                </Card>
                                                            </Col>
                                                            <Col sm={12} md={6} className={styles.pad}>
                                                                <Card className={styles.cardhover}>
                                                                    <Card.Body>
                                                                        <Card.Link href={'/balancing'}>
                                                                            <Image
                                                                                src={BalancingPlot}
                                                                                alt={'Balancing Plot'}
                                                                                className={styles.blogimgs}
                                                                                placeholder={'blur'}
                                                                            />
                                                                        </Card.Link>
                                                                    </Card.Body>
                                                                    <Card.Body>
                                                                        <Card.Title style={{fontSize: 'x-large'}}>
                                                                            Asset Balancing
                                                                        </Card.Title>
                                                                        <Card.Text style={{fontSize: 'larger'}}>
                                                                            Our set of balanced portfolios that are best
                                                                            suited for different levels of investing and
                                                                            equity amounts.
                                                                        </Card.Text>
                                                                        <Button variant="outline-success" className={styles.btn}
                                                                                href='/balnancing'>Asset
                                                                            Balancing</Button>
                                                                    </Card.Body>
                                                                </Card>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col xs={12} md={6} className={styles.pad}>
                                                                <Card className={styles.cardhover}>
                                                                    <Card.Body>
                                                                        <Card.Link href={'/insights'}>
                                                                            <Image
                                                                                src={InsightsPlot}
                                                                                alt={'Insights Plot'}
                                                                                className={styles.blogimgs}
                                                                                placeholder={'blur'}
                                                                            />
                                                                        </Card.Link>
                                                                    </Card.Body>
                                                                    <Card.Body>
                                                                        <Card.Title style={{fontSize: 'x-large'}}>
                                                                            Market Insights
                                                                        </Card.Title>
                                                                        <Card.Text style={{fontSize: 'larger'}}>
                                                                            Our custom-calculated indicators determine
                                                                            where we are in the market using
                                                                            macroeconomic and microeconomic data to
                                                                            determine where the market is likely to go
                                                                            next.
                                                                        </Card.Text>
                                                                        <Button variant="outline-success" className={styles.btn}
                                                                                href='/insights'>Market
                                                                            Insights</Button>
                                                                    </Card.Body>
                                                                </Card>
                                                            </Col>
                                                            <Col xs={12} md={6} className={styles.pad}>
                                                                <Card className={styles.cardhover}>
                                                                    <Card.Body>
                                                                        <Card.Title style={{fontSize: 'x-large'}}>
                                                                            Maximize returns with historically tested
                                                                            findings
                                                                        </Card.Title>
                                                                        <Card.Text style={{fontSize: 'larger'}}>
                                                                            Webminers Investing provides historically
                                                                            and
                                                                            research backed
                                                                            education to help you make informed crypto
                                                                            investing decisions.
                                                                            Our mission is to help anyone from those who
                                                                            are
                                                                            just starting out
                                                                            with crypto to veteran investors.
                                                                        </Card.Text>
                                                                        <Button variant="outline-success" className={styles.btn}
                                                                                href='/pricing'>Webminers
                                                                            Pricing</Button>
                                                                    </Card.Body>
                                                                </Card>
                                                            </Col>
                                                        </Row>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="Library">
                                                        <Container>
                                                            <Card.Title id={'why'} style={{
                                                                paddingBottom: '15px',
                                                                textAlign: 'center',
                                                                fontSize: 'x-large'
                                                            }}>
                                                                Looking for a way to increase your knowledge and value?
                                                            </Card.Title>
                                                            <p style={{fontSize: 'large'}}>
                                                                Without knowledge, there is very little you can
                                                                accomplish.
                                                                The only issue, there is so much out there to learn. It
                                                                can
                                                                be overwhelming. Resources to grow your knowledge about
                                                                investing, finance, and business is what we all need.
                                                                Here
                                                                is a small collection of resources to get you started.
                                                            </p>
                                                            <Card.Title id={'why'} style={{
                                                                paddingBottom: '15px',
                                                                textAlign: 'center',
                                                                fontSize: 'x-large'
                                                            }}>
                                                                Coming Soon...
                                                            </Card.Title>
                                                        </Container>
                                                        <Row>
                                                            <Col>

                                                            </Col>
                                                            <Col>

                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>

                                                            </Col>
                                                            <Col>

                                                            </Col>
                                                        </Row>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="Articles">
                                                        <Row>
                                                            <Col xs={12} md={6}>
                                                                <h2 style={{textAlign: 'center'}}>
                                                                    Most Recent
                                                                </h2>
                                                                <Suggest Detail={'/'}/>
                                                            </Col>
                                                            <Col xs={12} md={6}>
                                                                <h2 style={{textAlign: 'center'}}>
                                                                    Webminers Pick
                                                                </h2>
                                                                <Find number={38}/>
                                                            </Col>
                                                        </Row>

                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Row>
                                        </Col>
                                    </Tab.Container>
                                </Container>
                            </Col>
                        </Row>
                        <Container>
                            <Card.Title>
                                <h2 style={{textAlign: 'center', padding: '25px', fontSize: '40px'}}>
                                    What Others Think
                                </h2>
                            </Card.Title>
                            <CardGroup>
                                <Row>
                                    <Col md={12} lg={4} className={styles.pad}>
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
                                    <Col md={12} lg={4} className={styles.pad}>
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
                                    <Col md={12} lg={4} className={styles.pad}>
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
                    </Container>
                </div>
                <EmailALert/>
            </div>
        </>
    )
}
