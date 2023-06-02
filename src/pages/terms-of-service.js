import Head from "next/head";
import React from "react";
import {Card, Container} from "react-bootstrap";
import styles from "@/styles/Home.module.css";


export default function TermsOfService() {

    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://webminers.dev/terms-of-service/",
        "url": "https://webminers.dev/terms-of-service/",
        "image": "https://webminers.dev/webminers-logo.webp",
        "name": "Terms of Service for Webminers Investing",
        "datePublished": "May 11th, 2023",
        "dateModified": "May 23rd, 2023",
        "description": "Here are the terms of service that provide protection of both our business and you as a customer to ensure that both sides have agreed upon security."
    }

    return (
        <>
            <Head>
                <title>Terms of Service for Webminers Investing</title>
                <meta name={'og:title'} content={'Terms of Service for Webminers Investing'}/>
                <meta name="description"
                      content="Here are the terms of service that provide protection of both our business and you as a customer to ensure that both sides have agreed upon security."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property='og:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                <meta property='og:type' content='website'/>
                <meta property='og:description' content='Here are the terms of service that provide protection of both our business and you as a customer to ensure that both sides have agreed upon security.'/>
                <meta property='og:sitename' content='Webminers'/>
                <meta name="twitter:card" content="summary"/>
                <meta name='twitter:title' content='Terms of Service for Webminers Investing'/>
                <meta name='twitter:description' content='Here are the terms of service that provide protection of both our business and you as a customer to ensure that both sides have agreed upon security.'/>
                <meta name='twitter:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
            </Head>
            <div style={{width: '100%', backgroundColor: 'whitesmoke', borderRadius: '25px'}}>
                <Container style={{padding: '25px'}}>
                    <Card className={styles.cardhover} style={{margin: '10px 0'}}>
                        <Card.Body>
                            <Card.Title style={{fontSize: 'xx-large'}}>Terms of Service</Card.Title>
                            <Card.Text>
                                By signing up for our service, you agree to the following terms and conditions:
                                <ul>
                                    <li>You must be at least 18 years of age to sign up.</li>
                                    <li>You must provide accurate and truthful information when signing up.</li>
                                    <li>You are responsible for all activity that occurs under your account.</li>
                                    <li>You may not use our service for any illegal or unauthorized purpose.</li>
                                    <li>You may not violate the rights of others, including their intellectual property
                                        rights.
                                    </li>
                                    <li>You may not use our service to send spam or unsolicited messages.</li>
                                    <li>We reserve the right to terminate your account at any time for any reason.</li>

                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Not Financial Advice</Card.Title>
                            <Card.Text>
                                The information and content provided on our service is for educational and entertainment
                                purposes only. It is not intended to be financial advice. You should always consult with
                                a qualified financial advisor before making any investment decisions.
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
                            <Card.Title>Changes to Terms of Service</Card.Title>
                            <Card.Text>
                                We may update these Terms of Service from time to time. If we make any significant
                                changes, we will notify you by email or through a prominent notice on our website.
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