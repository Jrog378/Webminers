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
                        <strong className={'me-auto'}>Webminers Mailing List</strong>
                    </Toast.Header>
                    <Toast.Body>
                        <Container style={{display: disp1[disp]}}>
                            <h4 style={{padding: '5px'}}>
                                Want in important updates on Webminers Seasons and Investing System?
                                <br/>
                                <br/>
                                Join our mailing list today!
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
                                    Bringing real data to your investing like never before
                                </h1>
                                <br/>
                                <br/>
                                <Button variant="success" href='#why'>Get a hold of your data-driven research
                                    →</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={styles.sales}>
                    <Container>
                        <Container style={{textAlign: 'center'}}>
                            <h1 id={'why'}>
                                The Two Biggest Questions in Investing
                            </h1>
                            <h3>
                                &apos;When to invest?&apos; and &apos;Where to invest?&apos;
                            </h3>
                        </Container>
                        <Container>
                            <Container style={{padding: '25px'}}>
                                <Row>
                                    <Col lg={6} md={12} sm={12} style={{padding: '10px'}}>
                                        <Card className={styles.cardhover}>
                                            <Card.Body>
                                                <Card.Title>
                                                    When to invest?
                                                </Card.Title>
                                                <Card.Text>
                                                    &apos;No one knows if the market will go up down left
                                                    right&apos; is
                                                    a
                                                    complete lie.
                                                    People make money in the market all the time. Data defines
                                                    the most
                                                    likely
                                                    outcome of the markets and here at Webminers, we can give
                                                    you our
                                                    data-driven
                                                    graphics so that you can make the investing decisions you
                                                    have
                                                    always
                                                    dreamed
                                                    of.
                                                </Card.Text>
                                                <Button variant="success" href='/seasons'>Webminers
                                                    Seasons</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={6} md={12} sm={12} style={{padding: '10px'}}>
                                        <Card className={styles.cardhover}>
                                            <Card.Body>
                                                <Card.Title>
                                                    Where to invest?
                                                </Card.Title>
                                                <Card.Text>
                                                    Markets move together most of the time, but being able to
                                                    identify
                                                    when
                                                    they
                                                    don&apos;t allows investors to take advantage of
                                                    opportunities they
                                                    would have
                                                    never
                                                    would have been able to before hand, leaving them to think
                                                    they were
                                                    just
                                                    unlucky. The second step of the Webminers system is
                                                    balancing your
                                                    assets in
                                                    a reasonable way that will make you more money than someone
                                                    who just
                                                    sticks
                                                    to
                                                    one asset.
                                                </Card.Text>
                                                <Button variant="success" href='/balancing'>Webminers Crypto
                                                    Balancing</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row style={{padding: '10px 0'}}>
                                    <Col lg={6} md={12} sm={12} style={{padding: '10px'}}>
                                        <Card className={styles.cardhover}>
                                            <Card.Body>
                                                <Card.Title>
                                                    Webminers Pricing
                                                </Card.Title>
                                                <Card.Text>
                                                    Here at Webminers we offer three plans to fit your specific
                                                    needs.
                                                    Whether
                                                    you just want the seasons, need to balance our your
                                                    portfolio with
                                                    more
                                                    assets, or plan on testing for optimization, we have a plan
                                                    for you
                                                    below. For the optimal investor our best offer includes
                                                    optimization
                                                    tools, seasons, and asset balancing, which makes it our
                                                    recommended
                                                    plan.
                                                </Card.Text>
                                                <Button variant="success" href='/pricing'>Pricing</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={6} md={12} sm={12} style={{padding: '10px', fontSize: 'larger'}}>
                                        <Card className={styles.cardhover}>
                                            <Card.Body>
                                                <Card.Title>
                                                    Need Help Deciding?
                                                </Card.Title>
                                                <Card.Text>
                                                    Don&apos;t worry about it. We are here to help you if you
                                                    still need
                                                    help deciding what you need in your investing toolset. <Link
                                                    className={styles.weblink}
                                                    href={'mailto:webminers.dev@gmail.com'}>Contact
                                                    Us</Link> with any
                                                    questions you may have about your free trial or our features
                                                </Card.Text>
                                                <Button variant="success" href='mailto:webminers.dev@gmail.com'>Email
                                                    Us</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>

                            <Container>
                                <h1 style={{textAlign: 'center', padding: '25px'}}>
                                    Testimonials
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
                                                        how the
                                                        findings
                                                        are
                                                        backed by data and science! I think the research section
                                                        is the
                                                        best
                                                        part
                                                        where
                                                        I can compare assets to pick and choose from for my own
                                                        investments.
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

                            <Container>
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
                                                            quality
                                                            financial information and research daily
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
