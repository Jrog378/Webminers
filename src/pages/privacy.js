import Head from "next/head";
import React from "react";
import {Card, Container} from "react-bootstrap";
import styles from "@/styles/Home.module.css";


export default function Privacy() {
    return (
        <>
            <Head>
                <title>Webminers Investing - Privacy</title>
                <meta name="description"
                      content="Webminers Investing provides scientifically backed research and education to help you
                      make informed investing decisions with Insights, Balancing, and Efficiency."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property='og:image' content={'webminers.dev/webminers-logo.webp'}/>
            </Head>
            <div style={{width: '100%', backgroundColor: 'whitesmoke', borderRadius: '25px'}}>
                <Container style={{padding: '25px'}}>
                    <Card className={styles.cardhover} style={{margin: '10px 0'}}>
                        <Card.Body>
                            <Card.Title style={{fontSize: 'xx-large'}}>Privacy Policy</Card.Title>
                            <Card.Text>
                                We are committed to protecting your privacy. This Privacy Policy explains how we
                                collect, use, and share your personal information when you visit or make a purchase from
                                our website.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>What personal information do we collect?</Card.Title>
                            <Card.Text>
                                When you visit our website, we collect certain information about your device, including
                                your IP address, browser type, and operating system. We also collect information about
                                the pages you visit on our website, the links you click, and the actions you take on our
                                website.
                                We collect this information using cookies and other tracking technologies. For more
                                information about cookies, please see the &apos;Cookies&apos; section below.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>How do we use your personal information?</Card.Title>
                            <Card.Text>
                                We use the information we collect about you to:
                                <ul>
                                    <li>Personalize your experience on our website.</li>
                                    <li>Improve our website.</li>
                                    <li>Send you marketing communications, if you have opted in to receive them.</li>
                                    <li>Contact you if you have questions or problems.</li>
                                    <li>Protect our website and our users.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>How do we share your personal information?</Card.Title>
                            <Card.Text>
                                We do not sell or rent your personal information to third parties.
                                We may share your personal information with our trusted partners who help us with our
                                business, such as email marketing providers, payment processors, and shipping companies.
                                These companies are only allowed to use your personal information to provide the
                                services we have asked them to provide.
                                We may also disclose your personal information if we are required to do so by law or if
                                we believe that disclosure is necessary to protect our rights, protect your safety or
                                the safety of others, investigate fraud, or comply with a government request.

                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>How do we protect your personal information?</Card.Title>
                            <Card.Text>
                                We take steps to protect your personal information, including using secure server
                                software and encryption.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>How long do we keep your personal information?</Card.Title>
                            <Card.Text>
                                We keep your personal information for as long as you have an account with us or as long
                                as we need to keep your information to comply with our legal obligations, resolve
                                disputes, and enforce our agreements.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Your rights</Card.Title>
                            <Card.Text>
                                You have the right to access, correct, or delete your personal information. You also
                                have the right to object to the processing of your personal information and to the right
                                to data portability.
                                To exercise these rights, please contact us at [email protected]
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Cookies</Card.Title>
                            <Card.Text>
                                We use cookies to collect information about your use of our website. This information
                                helps us to improve our website and to provide you with a better experience.
                                You can choose to disable cookies in your browser settings. However, if you do this, you
                                may not be able to use all of the features of our website.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Changes to this Privacy Policy</Card.Title>
                            <Card.Text>
                                We may update this Privacy Policy from time to time. If we make any significant changes,
                                we will notify you by email or through a prominent notice on our website.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Contact us</Card.Title>
                            <Card.Text>
                                If you have any questions about this Privacy Policy, please contact us at
                                webminers.dev@gmail.com
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </>
    )
}