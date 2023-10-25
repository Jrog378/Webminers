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
                    "name": "Webminers Research - Smarter Digital Investing, More Profit",
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
                                    <Col xs={12} sm={8} lg={12}>
                                        <h1 style={{paddingBottom: '15px'}}>
                                            Want knowledge that generates profit?
                                        </h1>
                                    </Col>
                                    <Col xs={12} sm={4} lg={12}>
                                        <Button variant={'outline-success'} className={styles.btn}
                                                href='/strategy'>Start For Free</Button>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={12} lg={8}>
                                <Container>
                                    <Tab.Container id="left-tabs-example"
                                                   defaultActiveKey="Efficiency">
                                        <Col>
                                            <Row>
                                                <Nav variant="pills" className="flex-column">
                                                    <Row>
                                                        <Col className={styles.pad}>
                                                            <Nav.Link className={styles.navgreen}
                                                                      eventKey="Efficiency">Crypto Efficiency</Nav.Link>
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
                                                    <Tab.Pane eventKey="Efficiency">
                                                            <Row>
                                                                <Col sm={12} md={7} className={styles.pad}>
                                                                    <Card.Body>
                                                                        <Card.Title
                                                                            style={{fontSize: 'x-large', padding:'0 10px 10px'}}>
                                                                            Crypto Efficiency
                                                                        </Card.Title>
                                                                        <Card.Text
                                                                            style={{fontSize: 'larger'}}>
                                                                            Low downside risk and high-profit potential
                                                                            create an efficient asset. This can be
                                                                            measured with a custom risk-to-reward ratio.
                                                                            Once you find your efficient investments,
                                                                            you can build your optimal portfolio using
                                                                            them. Without spreading yourself too thin,
                                                                            you have the potential to make a portfolio
                                                                            that makes your life easy and finding profit
                                                                            even easier.
                                                                        </Card.Text>
                                                                        <Button variant="outline-success"
                                                                                className={styles.btn}
                                                                                href='/efficiency'>Crypto
                                                                            Efficiency</Button>
                                                                    </Card.Body>
                                                                </Col>
                                                                <Col sm={12} md={5} className={styles.pad}>
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
                                                                    Editor&apos;s Pick
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
                        <Container>
                            <Card.Title>
                                <h2 style={{textAlign: 'center', padding: '25px', fontSize: '40px'}}>
                                    Begin The Next Steps in Your Investing Journey Today
                                </h2>
                            </Card.Title>
                            <Container style={{maxWidth:'250px'}}>
                                <Button href={'/strategy'} variant={'outline-success'} className={styles.btn} style={{width: "100%"}}>
                                    Start Now!
                                </Button>
                            </Container>
                        </Container>
                    </Container>
                </div>
                <EmailALert/>
            </div>
        </>
    )
}
