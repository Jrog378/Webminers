import Head from 'next/head'
import React, {useState} from "react";
import styles from '@/styles/Home.module.css'
import {Button, Card, CardGroup, Col, Container, Row, Toast} from "react-bootstrap";
import Link from "next/link";
import logo from "@/images/WebminersLogo.webp";
import axios from "axios";
import {toast} from "react-toastify";


function EmailALert() {
    const [open, setOpen] = React.useState(false);
    const [timer, setTimer] = React.useState(0)
    const closeModal = () => {
        setOpen(false)
        setTimer(timer + 1)
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
                           position: 'fixed',
                           bottom: '0',
                           margin: '0.5%',
                           backgroundColor: 'rgba(245,245,245,1)'
                       }}
                       show={open} onClose={closeModal}>
                    <Toast.Header>
                        <strong className={'me-auto'}>Webminers Emailing List</strong>
                    </Toast.Header>
                    <Toast.Body>
                        <Container style={{display: disp1[disp]}}>
                            <h4 style={{padding: '5px'}}>
                                Want in important updates on Webminers Seasons and Investing System?
                                <br/>
                                <br/>
                                Join our Emailing List today!
                            </h4>
                            <Container>
                                <Row>
                                    <Col md={8} style={{paddingTop: '5px'}}>
                                        <input
                                            onChange={(e) => {
                                                setMail(e.target.value);
                                            }}
                                            type='email'
                                            placeholder='Email Address'
                                            className={styles.inputs}></input>
                                    </Col>
                                    <Col style={{paddingTop: '5px'}}>
                                        <Button variant="success" onClick={subscribe}
                                                className={`btn ml-3 ${loading ? "btn-disabled loading" : "btn-primary"}`}>
                                            Join Now!
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Container>
                        <Container style={{display: disp2[disp]}}>
                            <h4 style={{padding: '5px', textAlign: 'center'}}>Thank you for subscribing!</h4>
                        </Container>
                    </Toast.Body>
                </Toast>
            </>
        );
    }
}

export default function Home() {
    return (
        <>
            <Head>
                <title>Webminers - Make Data-Driven Decisions With Investment Research</title>
                <meta name="description"
                      content="Webminers is revolutionizing how we make financial decisions with new seasons and optimization"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property='og:image' content={logo}/>
            </Head>
            <div style={{margin: '0', width: '100%'}}>
                <div style={{
                    width: '100%',
                    padding: '50px',
                    borderRadius: '20px',
                    background: 'linear-gradient(0deg, rgba(33,37,41,1) 25%, rgba(20,75,0,1) 100%'
                }}>
                    <Container>
                        <Row>
                            <Col md={8}>
                                <h1 style={{color: 'whitesmoke', fontSize: '50px'}}>
                                    Bringing Real Data-Driven Insights to Your Investing Journey
                                </h1>
                                <br/>
                                <br/>
                                <Button variant="success" href='#why'>Get a hold of your successful investing decisions
                                    →</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={styles.sales}>
                    <Container>
                        <Container style={{padding: '15px'}}>
                            <h3 id={'why'} style={{paddingBottom: '15px'}}>
                                Missing out on opportunities to grow your wealth because
                                of the right tools or knowledge?
                            </h3>
                            <p style={{fontSize: 'larger'}}>
                                If you want efficient profits and to beat the market, Webminers is where to be.
                                We
                                specialize in identifying the ups and downs of the market and identifying how
                                much
                                of what asset is best for efficiency, all backed by data.
                            </p>
                            <Card className={styles.cardhover}>
                                <Card.Body>
                                    <Card.Title style={{width:'90%', textAlign:'center'}}>
                                        Let Webminers help out by giving you all the research and education you need
                                        to be successful in the markets
                                    </Card.Title>
                                    <Card.Text>
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
                                                Reduce risk by investing in the right assets based on data-driven
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
                                    </Card.Text>
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
                                                    Maximize Returns with Data-Driven Findings
                                                </Card.Title>
                                                <Card.Text>
                                                    Finding insights is easier than it may seem if you know where to
                                                    look. Our discoveries provide important topics:
                                                    <Link className={styles.weblink} href={'/seasons'}> Seasons </Link>,
                                                    locating where we are in the market,
                                                    <Link className={styles.weblink}
                                                          href={'/balancing'}> Balancing </Link>,
                                                    setting up portfolios, and
                                                    <Link className={styles.weblink} href={'/research'}> Research</Link>,
                                                    where we look into how efficient assets are.
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
                                                    <Card.Header>
                                                        Data-Driven
                                                    </Card.Header>
                                                    <Card.Text style={{textAlign: 'center', padding: '5px'}}>
                                                        Everything is very easy to understand and read. I love
                                                        how the findings are backed by data and science! I
                                                        think the analysis section is the best part where
                                                        I can compare assets to pick and choose from for
                                                        my own investments.
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={12} lg={4} style={{padding: '15px'}}>
                                            <Card className={styles.cardhover}>
                                                <Card.Body>
                                                    <Card.Header>
                                                        Great Seasons!
                                                    </Card.Header>
                                                    <Card.Text style={{textAlign: 'center', padding: '5px'}}>
                                                        Market and Asset Seasons are a great help in
                                                        understanding where
                                                        the
                                                        market
                                                        is
                                                        and for what. I love that inflation is taken into
                                                        account so I
                                                        know
                                                        how
                                                        well
                                                        the
                                                        economy is and where it&apos;s headed
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={12} lg={4}>
                                            <Card className={styles.cardhover}>
                                                <Card.Body>
                                                    <Card.Header>
                                                        Accurate Seasons and Balancing
                                                    </Card.Header>
                                                    <Card.Text style={{textAlign: 'center', padding: '5px'}}>
                                                        Super Accurate Seasons and Balancing. I check the daily
                                                        updates
                                                        before
                                                        doing
                                                        anything in the markets to make sure what I&apos;m doing
                                                        is a
                                                        smart
                                                        decision.
                                                        Reliable and consistently updated (a lot!).
                                                    </Card.Text>
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
