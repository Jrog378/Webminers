import {Button, Card, Col, Container, Row} from "react-bootstrap";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "@/config";
import {doc, getDoc} from "firebase/firestore";
import dynamic from "next/dynamic";
import Image from "next/image";
import logo from "@/images/WebminersLogo.webp";
import Head from "next/head";


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

    let Assets = ['EthereumSeason', 'MaticSeason', 'LitecoinSeason']
    let [asset, setAsset] = useState(0)

    function UpAsset() {
        if (asset < 2) {
            setAsset(asset + 1)
        }
    }

    function DownAsset() {
        if (asset > 0) {
            setAsset(asset - 1)
        }
    }

    let seasons = ['LongTermSeason', 'MidTermSeason', 'ShortTermSeason', 'MiniTermSeason']
    let [season, setSeason] = useState(0)

    function UpSeason() {
        if (season < 3) {
            setSeason(season + 1)
        }
    }

    function DownSeason() {
        if (season > 0) {
            setSeason(season - 1)
        }
    }

    let Exp = [
        'VeChainSeason', 'CosmosSeason',
         'DogecoinSeason', 'TronSeason'
    ]
    let [exp, setExp] = useState(0)

    function UpExp() {
        if (exp < 3) {
            setExp(exp + 1)
        }
    }

    function DownExp() {
        if (exp > 0) {
            setExp(exp - 1)
        }
    }

    return (
        <>
            <Head>
                <title>Webminers Seasons - Make Data-Driven Decisions With Investment Research</title>
                <meta name="description"
                      content="Webminers Seasons are revolutionizing how we make financial decisions with new seasons and optimization"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property='og:image' content={logo}/>
            </Head>
            <Container style={{padding: '0 25px 25px 25px'}}>
                <Row>
                    <Col lg={6} md={12} sm={12} style={{padding: '10px'}}>
                        <Container>
                            <Card style={{backgroundColor: 'rgb(225,225,225)'}}>
                                <Container>
                                    <Card.Body style={{margin: 'auto'}}>
                                        <Card.Title style={{fontSize: '30px', textAlign: 'center', paddingTop: '15px'}}>
                                            Market Seasons
                                        </Card.Title>
                                    </Card.Body>
                                    <Card.Body style={{margin: 'auto'}}>
                                        <Card.Text style={{fontSize: '20px'}}>
                                            Seasons are what make up the markets. Reflexivity is what makes the ups and
                                            downs possible. Since we know that every movement will eventually go the
                                            other way, we can predict when that will happen. Webminers have seasons Long
                                            Term (50-100 Years), Mid Term (4-8 Years), Short Term (4-6 Months), and Mini
                                            Term (2-8 Weeks). Since market seasons are general, check out <Link
                                            className={styles.weblink} href={'/balancing'}> Asset Weightings </Link> to
                                            find out what we have found to be the best assets to invest in.
                                        </Card.Text>
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <Button style={{float: 'right', margin: '5px'}}
                                                            variant="success" onClick={DownSeason}
                                                            size='md'>Larger Season</Button>
                                                </Col>
                                                <Col>
                                                    <Button style={{float: 'left', margin: '5px'}}
                                                            variant="success" onClick={UpSeason}
                                                            size='md'>Smaller Season</Button>
                                                </Col>
                                            </Row>
                                        </Container>

                                    </Card.Body>
                                </Container>
                            </Card>
                        </Container>
                    </Col>
                    <Col lg={6} md={12} sm={12} style={{padding: '10px'}}>
                        <Container>
                            <Card style={{height: 'auto', width: 'auto', padding: '10px'}}>
                                <Image src={'/plots/' + seasons[season] + '.webp'} alt={seasons[season]}/>
                            </Card>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Container style={{padding: '0 25px 25px 25px'}}>
                <Row>
                    <Col lg={6} md={12} sm={12} style={{padding: '10px'}}>
                        <Container style={{padding: '10px'}}>
                            <Card style={{height: 'auto', width: 'auto', padding: '10px'}}>
                                {loading
                                    ? <Card.Title>Loading...</Card.Title>
                                    : user
                                        ? plan === ''
                                            ? <Card.Title>Loading...</Card.Title>
                                            : plan !== 'none'
                                                ? <Image src={'/plots/' + Assets[asset] + '.webp'} alt={Assets[asset]}/>
                                                : <Container><h1 style={{textAlign: "center"}}>Please visit <Link
                                                    className={styles.weblink} href={'/auth/profile'}>Profile</Link> to
                                                    Upgrade Plan
                                                </h1></Container>
                                        : <Container><h1 style={{textAlign: "center"}}>Please <Link
                                                    className={styles.weblink} href={'/auth/login'}>Login</Link> to
                                                    see content</h1></Container>
                                }

                            </Card>
                        </Container>
                    </Col>
                    <Col lg={6} md={12} sm={12} style={{padding: '10px'}}>
                        <Container style={{padding: '10px'}}>
                            <Card style={{backgroundColor: 'rgb(225,225,225)'}}>
                                <Container>
                                    <Card.Body style={{margin: 'auto'}}>
                                        <Card.Title style={{fontSize: '30px', textAlign: 'center', paddingTop: '15px'}}>
                                            Asset Seasons
                                        </Card.Title>
                                    </Card.Body>
                                    <Card.Body style={{margin: 'auto'}}>
                                        <Card.Text style={{fontSize: '20px'}}>
                                            These asset seasons can be an extension of the Mini Term Market Season as
                                            they span 2-8 weeks. The importance of having individual asset seasons is to
                                            catch a movement happening in an unexpectedly outstanding asset before it
                                            happens for the rest of the market. You can do two things when this type of
                                            event comes into play. You can sell and move to a new asset on the rise or
                                            wait for it to see how high it can go. Both options are great but still rely
                                            on the ability to catch an opportunity like this
                                        </Card.Text>
                                        <Container>
                                            {loading
                                                ? <Card.Title>Loading...</Card.Title>
                                                : user
                                                    ? plan === ''
                                                        ? <Card.Title>Loading...</Card.Title>
                                                        : plan !== 'none'
                                                            ? <Row>
                                                                <Col>
                                                                    <Button style={{float: 'right', margin: '5px'}}
                                                                            variant="success" onClick={DownAsset}
                                                                            size='md'>Previous Season</Button>
                                                                </Col>
                                                                <Col>
                                                                    <Button style={{float: 'left', margin: '5px'}}
                                                                            variant="success" onClick={UpAsset}
                                                                            size='md'>Next Season</Button>
                                                                </Col>
                                                            </Row>
                                                            : <Button href='/pricing'
                                                                      style={{float: 'right', marginBottom: '10px'}}
                                                                      variant="success"
                                                                      size='md'>Our Plans</Button>
                                                    : <Container><h1 style={{textAlign: "center"}}>Please <Link
                                                    className={styles.weblink} href={'/auth/login'}>Login</Link> to
                                                    see content</h1></Container>
                                            }
                                        </Container>
                                    </Card.Body>
                                </Container>
                            </Card>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Container style={{padding: '0 25px 25px 25px'}}>
                {loading
                    ? <Container><h1 style={{color: 'whitesmoke'}}>Loading...</h1></Container>
                    : user
                        ? plan === ''
                            ? <Container><h1 style={{color: 'whitesmoke'}}>Loading...</h1></Container>
                            : plan === 'Strategist'
                                ?
                                <Row>
                                    <Col lg={6} md={12} sm={12} style={{padding: '10px'}}>
                                        <Container>
                                            <Card style={{backgroundColor: 'rgb(225,225,225)'}}>
                                                <Container>
                                                    <Card.Body style={{margin: 'auto'}}>
                                                        <Card.Title
                                                            style={{
                                                                fontSize: '30px',
                                                                textAlign: 'center',
                                                                paddingTop: '15px'
                                                            }}>
                                                            Experimental Seasons
                                                        </Card.Title>
                                                    </Card.Body>
                                                    <Card.Body style={{margin: 'auto'}}>
                                                        <Card.Text style={{fontSize: '20px'}}>
                                                            Assets may come and go, but the process of investing will
                                                            never leave. There is always somewhere that you can make
                                                            money. Experimental Seasons will have new coins or assets
                                                            that are up to par with our investing plan but may be hidden
                                                            gems or coins that would be too good to release to a larger
                                                            audience. Either way, these assets are an intriguing
                                                            extension of our previous seasons
                                                        </Card.Text>
                                                        <Container>
                                                            <Row>
                                                                <Col>
                                                                    <Button style={{float: 'right', margin: '5px'}}
                                                                            variant="success" onClick={DownExp}
                                                                            size='md'>Previous Season</Button>
                                                                </Col>
                                                                <Col>
                                                                    <Button style={{float: 'left', margin: '5px'}}
                                                                            variant="success" onClick={UpExp}
                                                                            size='md'>Next Season</Button>
                                                                </Col>
                                                            </Row>
                                                        </Container>

                                                    </Card.Body>
                                                </Container>
                                            </Card>
                                        </Container>
                                    </Col>
                                    <Col lg={6} md={12} sm={12} style={{padding: '10px'}}>
                                        <Container>
                                            <Card style={{height: 'auto', width: 'auto', padding: '10px'}}>
                                                <Image src={'/plots/' + Exp[exp] + '.webp'} alt={Exp[exp]}/>
                                            </Card>
                                        </Container>
                                    </Col>
                                </Row>
                                : plan === 'none'
                                    ? <Container style={{display: 'none'}}></Container>
                                    : <Container style={{padding: '25px 10%'}}>
                                        <h2 style={{textAlign: "center", color: 'whitesmoke'}}>Please visit <Link
                                            className={styles.weblink}
                                            href={'/auth/profile'}>Profile</Link> to
                                            upgrade plan to Strategist for access to Experimental Seasons</h2>
                                    </Container>
                        : <Container style={{display: 'none'}}></Container>
                }
            </Container>
        </>
    )
}