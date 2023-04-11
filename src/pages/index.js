import Head from 'next/head'
import React, {useState} from "react";
import styles from '@/styles/Home.module.css'
import {Button, Card, CardGroup, Col, Container, Row, Toast} from "react-bootstrap";
import Link from "next/link";
import logo from "@/images/WebminersLogo.webp";
import axios from "axios";
import {toast} from "react-toastify";
import CloseButton from 'react-bootstrap/CloseButton';


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
                                    and
                                    More!
                                </Card.Text>
                                <Container>
                                    <Row style={{padding: '5px'}}>
                                        <input
                                            onChange={(e) => {
                                                setMail(e.target.value);
                                            }}
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
                            </Container>
                        </Container>
                    </Container>
                </Toast>
                <Toast style={{
                    position: 'absolute',
                    zIndex: '99',
                    width: '100%',
                    top: '0',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.5)'
                }}
                       show={open} onClose={closeModal}>
                </Toast>
            </>
        );
    }
}

export default function Home() {
    return (
        <>
            <Head>
                <title>Webminers Investing - Invest Smarter with Scientifically-Backed Research and Education</title>
                <meta name="description"
                      content="Webminers Investing provides scientifically backed research and education to help you
                      make informed investing decisions with Insights, Balancing, and Efficiency."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property='og:image' content={logo}/>
            </Head>
            <div style={{margin: '0', width: '100%'}}>
                <div className={styles.sales}>
                    <Card className={styles.cardhover} style={{
                        width: '100%',
                        padding: '50px',
                        borderRadius: '20px',
                    }}>
                        <Row>
                            <Col md={8}>
                                <h1 style={{fontSize: '50px'}}>
                                    Bringing Real Insights to Your Investing Journey
                                </h1>
                                <br/>
                                <br/>
                                <Button variant="success" href='/pricing'>Get a hold of your successful investing
                                    decisions
                                    →</Button>
                            </Col>
                        </Row>
                    </Card>
                    <Container>
                        <Container style={{padding: '15px'}}>
                            <Card.Title id={'why'} style={{paddingBottom: '15px', fontSize: 'x-large'}}>
                                Missing out on opportunities to grow your wealth because
                                of the right tools or knowledge?
                            </Card.Title>
                            <p style={{fontSize: 'larger'}}>
                                If you want efficient profits and to beat the market, Webminers is where to be.
                                We
                                specialize in identifying the ups and downs of the market and identifying how
                                much
                                of what asset is best for efficiency, all backed by data.
                            </p>
                            <Card className={styles.cardhover}>
                                <Card.Body>
                                    <Card.Title style={{width: '90%', textAlign: 'center'}}>
                                        Let Webminers help out by giving you all the research and education you need
                                        to be successful in the markets
                                    </Card.Title>
                                    <ul>
                                        <li>
                                            Consistent returns from a system that takes the clear and concise for
                                            how to
                                            invest,
                                            providing you the straight path to growing your wealth.
                                        </li>
                                        <li>
                                            Beat the market by outperforming top assets like BTC and the S&P 500
                                            with
                                            efficient
                                            investing from an investing system.
                                        </li>
                                        <li>
                                            Reduce risk by investing in the right assets based on scientific
                                            findings
                                            with
                                            maintaining and rebalancing your portfolio accordingly.
                                        </li>
                                        <li>
                                            Follow along with easy-to-understand research and findings that are
                                            simple
                                            to use
                                            to your advantage
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Container>
                        <Container>
                            <Container style={{padding: '15px'}}>
                                <Row>
                                    <Col lg={6} md={12} sm={12} style={{padding: '10px'}}>
                                        <Card className={styles.cardhover}>
                                            <Card.Body>
                                                <Card.Title>
                                                    Maximize Returns with Scientific Findings
                                                </Card.Title>
                                                <Card.Text>
                                                    Webminers Investing provides scientifically backed research and
                                                    education to help you make informed investing decisions with
                                                    <Link className={styles.weblink} href={'/insights'}> Market
                                                        Insights</Link>,
                                                    <Link className={styles.weblink}
                                                          href={'/balancing'}> Asset Balancing</Link>, and
                                                    <Link className={styles.weblink} href={'/research'}> Asset
                                                        Efficiency</Link>. These factors can help build a well rounded
                                                    investing system with Risk Management, Asset Allocation, and Asset
                                                    Selection.
                                                </Card.Text>
                                                <Button variant="success" href='/pricing'>Webminers
                                                    Pricing</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={6} md={12} sm={12} style={{padding: '10px'}}>
                                        <Card className={styles.cardhover}>
                                            <Card.Body>
                                                <Card.Title>
                                                    Learn to Unlock Your Investing Potential
                                                </Card.Title>
                                                <Card.Text>
                                                    There are infinite ways to invest, and finding your investing
                                                    system can be tricky. We are here to help. Whether you are just
                                                    starting or have been investing for years, we have educational
                                                    content for you. We want to help anyone become more informed
                                                    investors with confidence in their systems to achieve their
                                                    financial goals.
                                                </Card.Text>
                                                <Button variant="success" href='/articles'>Educational Content</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>

                            <Container>
                                <h1 style={{textAlign: 'center', padding: '25px'}}>
                                    What Others Think
                                </h1>
                                <CardGroup>
                                    <Row>
                                        <Col md={12} lg={4}>
                                            <Card className={styles.cardhover}>
                                                <Card.Body>
                                                    <p style={{textAlign: 'center', padding: '5px'}}>
                                                        I was a complete novice when it came to investing, but
                                                        everything was
                                                        very easy to understand and read. I now feel confident making
                                                        informed
                                                        decisions about my money. I think the analysis section is the
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
                                                        I was skeptical about the whole Webminers Investing System at
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
                                <Card className={styles.cardhover}>
                                    <Card.Body>
                                        <Card.Title style={{fontSize: '30px'}}>
                                            Interested in More Webminers Content?
                                        </Card.Title>
                                    </Card.Body>
                                    <Container style={{padding: '15px'}}>
                                        <Row>
                                            <Col lg={6} md={6} sm={12} style={{padding: '10px'}}>
                                                <Card style={{backgroundColor: 'rgba(0,0,0,0)'}}>
                                                    <Card.Body>
                                                        <Card.Text>
                                                            Take a look at our articles you will find
                                                            interesting
                                                            topics,
                                                            updates, and even just content about webminers like
                                                            our
                                                            history
                                                            and plans for the future.
                                                        </Card.Text>
                                                        <Button href='/articles'
                                                                style={{float: 'left', margin: '5px'}}
                                                                variant="outline-dark"
                                                                size='md'>Articles</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={6} md={6} sm={12} style={{padding: '10px'}}>
                                                <Card style={{backgroundColor: 'rgba(0,0,0,0)'}}>
                                                    <Card.Body>
                                                        <Card.Text>
                                                            Visit our twitter page where we strive to tweet
                                                            quality financial information and findings daily
                                                        </Card.Text>
                                                        <Button href='https://twitter.com/JusWebminers'
                                                                target={'_blank'}
                                                                style={{float: 'left', margin: '5px'}}
                                                                variant="outline-dark"
                                                                size='md'>Twitter</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card>
                            </Container>
                        </Container>
                    </Container>
                </div>
                <EmailALert/>
            </div>
        </>
    )
}
