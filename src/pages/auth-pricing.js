import {Button, Card, CardGroup, Col, Container, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import Script from "next/script";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "@/config";
import Router from "next/router";
import {doc, getDoc} from "firebase/firestore";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function AuthPricing() {
    let [plan, setPlan] = useState('')
    let [email, setEmail] = useState('')
    const [user, loading] = useAuthState(auth)
    useEffect(() => {
        const fetchData = async () => {
            if (!user) Router.push('/auth/login');
            if (user) {
                const promise = await getDoc(doc(db, 'users', user.uid)).then(profile => profile.data())
                console.log(promise)
                setPlan(promise['plan'])
                setEmail(promise['email'])
            }
            return ''
        }
        fetchData()
    }, [user, loading]);
    return (
        <>
            <Script async src="https://js.stripe.com/v3/pricing-table.js"/>
            <Container className={styles.full}
                       style={{padding: '25px', backgroundColor: 'whitesmoke', borderRadius: '25px'}}>
                <Container>
                    <h1 style={{textAlign: 'center', padding: '50px'}}>
                        Setup the plan to fuel your data-driven investing
                    </h1>
                </Container>
                {loading
                    ? <Container><h1>Loading...</h1></Container>
                    : user
                        ? plan === ''
                            ? <Container><h1>Loading...</h1></Container>
                            : plan === 'none'
                                ?
                                <Container>
                                    <stripe-pricing-table pricing-table-id="prctbl_1MfD3eI0ncnoSqWdl7SiDpSk"
                                                          publishable-key="pk_live_51LHAg0I0ncnoSqWdLblcuXyoeNHBnIKU3TKri7mWQ1y836osfObN5oC7MRkJKPZ4En5PD8dGxWBZQwOJekBIB1m4002sL3bTrK"
                                                          customer-email={email}>
                                    </stripe-pricing-table>
                                    {/*<stripe-pricing-table pricing-table-id="prctbl_1MaQyOI0ncnoSqWdKqzqZ9k7"*/}
                                    {/*                      publishable-key="pk_test_51LHAg0I0ncnoSqWddZdSvphuvJUeCuQUNAysqSa74B02zg8ZGTrXl4Z3kgmJkgIOHNRX1V5590qZf9CZBgdIAFQd00WjC4iVmd"*/}
                                    {/*                      customer-email={email}>*/}
                                </Container>
                                : <Container><h1 style={{textAlign: "center"}}>Please Visit <Link
                                    className={styles.weblink}
                                    href={'/auth/profile'}>Profile</Link> to
                                    Upgrade Plan</h1></Container>
                        : <Container><h1>Login</h1></Container>
                }
                <Container style={{padding: '25px'}}>
                    <h1 style={{textAlign: 'center', padding: '50px'}}>
                        Testimonials
                    </h1>
                    <CardGroup>
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
                                        style={{display: 'flex', justifyContent: 'center', marginBottom: '16px'}}>
                                        <Button style={{width: '80%'}} href={'mailto:jusrogersdata@gmail.com'}
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
                                        style={{display: 'flex', justifyContent: 'center', marginBottom: '16px'}}>
                                        <Button style={{width: '80%'}} href={'mailto:jusrogersdata@gmail.com'}
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
                                        style={{display: 'flex', justifyContent: 'center', marginBottom: '16px'}}>
                                        <Button style={{width: '80%'}} href={'mailto:jusrogersdata@gmail.com'}
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
                                        style={{display: 'flex', justifyContent: 'center', marginBottom: '16px'}}>
                                        <Button style={{width: '80%'}} href={'mailto:jusrogersdata@gmail.com'}
                                                variant={'outline-dark'}>Email
                                            Us</Button>
                                    </Container>
                                </Card>
                            </Col>
                        </Row>
                    </CardGroup>
                </Container>
            </Container>
        </>
    )
}