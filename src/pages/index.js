import Head from 'next/head'
import React from "react";
import styles from '@/styles/Home.module.css'
import {Alert, Button, Card, CardGroup, Col, Container, Row} from "react-bootstrap";
import Link from "next/link";
import logo from "@/images/WebminersLogo.webp";


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

    if (timer <= 0) {
        return (
            <>
                <Alert className={styles.AlertSizer}
                       style={{position: 'fixed', bottom: '0', margin: '0.5%', borderRadius: '15px'}} variant="success"
                       show={open} onClose={closeModal} dismissible>
                    <Container>
                        <Alert.Heading>Join Our Free Email List!</Alert.Heading>
                        <p>
                            If you want the edge with instant updates with seasons, improvements, new
                            features available to you, and more subscribe to our mail list below.
                        </p>
                        <Button target='_blank' href='https://mailchi.mp/cf115cf3871d/webminers-page'
                                variant="success">
                            Join Now!
                        </Button>
                    </Container>
                </Alert>
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
            <Container style={{
                padding: '50px',
                borderRadius: '20px',
                background: 'linear-gradient(0deg, rgba(33,37,41,1) 25%, rgba(20,75,0,1) 100%'
            }}>
                <Row>
                    <Col>
                        <p style={{color: 'Lightgrey', fontSize: '35px'}}>
                            Finding Bull and Bear markets based on data while balancing your portfolio
                        </p>
                        <br/>
                        <br/>
                        <Button variant="success" href='#why'>Make your Data-Driven decisions →</Button>
                    </Col>
                    <Col className={styles.disappear}>
                        <Container>

                        </Container>
                    </Col>
                </Row>
            </Container>

            <Container style={{backgroundColor: 'whitesmoke', borderRadius: '25px', padding: '25px'}}>
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
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            When to invest?
                                        </Card.Title>
                                        <Card.Text>
                                            &apos;No one knows if the market will go up down left right&apos; is a
                                            complete lie.
                                            People make money in the market all the time. Data defines the most
                                            likely
                                            outcome of the markets and here at Webminers, we can give you our
                                            data-driven
                                            graphics so that you can make the investing decisions you have always
                                            dreamed
                                            of.
                                        </Card.Text>
                                        <Button variant="success" href='/seasons'>Webminers Seasons</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={6} md={12} sm={12} style={{padding: '10px'}}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            Where to invest?
                                        </Card.Title>
                                        <Card.Text>
                                            Markets move together most of the time, but being able to identify when
                                            they
                                            don&apos;t allows investors to take advantage of opportunities they
                                            would have
                                            never
                                            would have been able to before hand, leaving them to think they were
                                            just
                                            unlucky. The second step of the Webminers system is weighting your
                                            assets in
                                            a reasonable way that will make you more money than someone who just
                                            sticks
                                            to
                                            one asset.
                                        </Card.Text>
                                        <Button variant="success" href='/weightings'>Webminers Crypto
                                            Weightings</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{padding: '10px 0'}}>
                            <Col lg={6} md={12} sm={12} style={{padding: '10px'}}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            Webminers Pricing
                                        </Card.Title>
                                        <Card.Text>
                                            Here at Webminers we offer 4 plans to fit your specific needs. Whether
                                            you just want the seasons, need to balance our your portfolio with more
                                            assets, or plan on testing for optimization, we have a plan for you
                                            below. For the optimal investor our best offer includes optimization
                                            tools, seasons, and asset weightings, which makes it our recommended
                                            plan.
                                        </Card.Text>
                                        <Button variant="success" href='/pricing'>Pricing</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={6} md={12} sm={12} style={{padding: '10px', fontSize: 'larger'}}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            Need Help Deciding?
                                        </Card.Title>
                                        <Card.Text>
                                            Don&apos;t worry about it. We are here to help you if you still need
                                            help deciding what you need in your investing toolset. <Link
                                            className={styles.weblink}
                                            href={'mailto:webminers.dev@gmail.com'}>Contact Us</Link> with any
                                            questions you may have about your free trial or our features
                                        </Card.Text>
                                        <Button variant="success" href='mailto:webminers.dev@gmail.com'>Email
                                            Us</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>

                    <Container
                        style={{backgroundColor: 'whitesmoke', borderRadius: '0 0 25px 25px', padding: '25px'}}>
                        <Card>
                            <h1 style={{textAlign: 'center', padding: '50px'}}>
                                Testimonials
                            </h1>
                            <CardGroup style={{margin: '15px'}}>
                                <Row>
                                    <Col xs={12} md={6} lg={3}>
                                        <Card>
                                            <Card.Body>
                                                <Card.Header>
                                                    Email us to put your review here!
                                                </Card.Header>
                                                <Card.Text style={{textAlign: 'center', padding: '5px'}}>
                                                    *** Your Review! ***
                                                </Card.Text>
                                            </Card.Body>
                                            <Container
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    marginBottom: '16px'
                                                }}>
                                                <Button style={{width: '80%'}}
                                                        href={'mailto:jusrogersdata@gmail.com'}
                                                        variant={'outline-dark'}>Email
                                                    Us</Button>
                                            </Container>
                                        </Card>
                                    </Col>
                                    <Col xs={12} md={6} lg={3}>
                                        <Card>
                                            <Card.Body>
                                                <Card.Header>
                                                    Email us to put your review here!
                                                </Card.Header>
                                                <Card.Text style={{textAlign: 'center', padding: '5px'}}>
                                                    *** Your Review! ***
                                                </Card.Text>
                                            </Card.Body>
                                            <Container
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    marginBottom: '16px'
                                                }}>
                                                <Button style={{width: '80%'}}
                                                        href={'mailto:jusrogersdata@gmail.com'}
                                                        variant={'outline-dark'}>Email
                                                    Us</Button>
                                            </Container>
                                        </Card>
                                    </Col>
                                    <Col xs={12} md={6} lg={3}>
                                        <Card>
                                            <Card.Body>
                                                <Card.Header>
                                                    Email us to put your review here!
                                                </Card.Header>
                                                <Card.Text style={{textAlign: 'center', padding: '5px'}}>
                                                    *** Your Review! ***
                                                </Card.Text>
                                            </Card.Body>
                                            <Container
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    marginBottom: '16px'
                                                }}>
                                                <Button style={{width: '80%'}}
                                                        href={'mailto:jusrogersdata@gmail.com'}
                                                        variant={'outline-dark'}>Email
                                                    Us</Button>
                                            </Container>
                                        </Card>
                                    </Col>
                                    <Col xs={12} md={6} lg={3}>
                                        <Card>
                                            <Card.Body>
                                                <Card.Header>
                                                    Email us to put your review here!
                                                </Card.Header>
                                                <Card.Text style={{textAlign: 'center', padding: '5px'}}>
                                                    *** Your Review! ***
                                                </Card.Text>
                                            </Card.Body>
                                            <Container
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    marginBottom: '16px'
                                                }}>
                                                <Button style={{width: '80%'}}
                                                        href={'mailto:jusrogersdata@gmail.com'}
                                                        variant={'outline-dark'}>Email
                                                    Us</Button>
                                            </Container>
                                        </Card>
                                    </Col>
                                </Row>
                            </CardGroup>
                        </Card>
                    </Container>

                    <Container>
                        <Card>
                            <Card.Body>
                                <Card.Title style={{fontSize: '30px'}}>
                                    Interested in More Webminers Content?
                                </Card.Title>
                            </Card.Body>
                            <Container style={{padding: '15px'}}>
                                <Row>
                                    <Col lg={6} md={6} sm={12} style={{padding: '10px'}}>
                                        <Card style={{backgroundColor: 'whitesmoke'}}>
                                            <Card.Body>
                                                <Card.Text>
                                                    Take a look at our articles you will find interesting topics,
                                                    updates, and even just content about webminers like our history
                                                    and plans for the future.
                                                </Card.Text>
                                                <Button href='/articles' style={{float: 'left', margin: '5px'}}
                                                        variant="outline-dark"
                                                        size='md'>Articles</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} style={{padding: '10px'}}>
                                        <Card style={{backgroundColor: 'whitesmoke'}}>
                                            <Card.Body>
                                                <Card.Text>
                                                    Visit our twitter page where we strive to tweet quality
                                                    financial information and research daily
                                                </Card.Text>
                                                <Button href='https://twitter.com/JusWebminers' target={'_blank'}
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
            <EmailALert/>
        </>
    )
}
