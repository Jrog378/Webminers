import {Button, Card, CardGroup, Col, Container, Row, Tab, Nav, Table, Badge} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import styles from '@/styles/Home.module.css'
import Head from "next/head";
import Image from "next/image";
import LineChart from '@/images/plots/EfficiencyLineChart.webp'
import EfficiencyChart from '@/images/plots/EfficiencyChart.webp'
import Link from "next/link";


export default function Pricing() {
    const SchemaMarkup = () => (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "@id": "https://webminers.dev/strategy/",
                    "url": "https://webminers.dev/strategy/",
                    "image": "https://webminers.dev/webminers-logo.webp",
                    "name": "Investment Strategy - Futuristic Knowledge, Educated Success",
                    "datePublished": "July 12th, 2023",
                    "dateModified": "July 12th, 2023",
                    "description": "Investing can be hard when first getting started. The most important part is creating a robust and efficient foundation. Successful Investing takes consistency."
                }),
            }}
        />
    )

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [disp, setDisp] = useState(1)

    let disp1 = ['none', 'initial']
    let disp2 = ['initial', 'none']

    const sendMail = () => {
        if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
        ) {
            alert('Invalid Email')
        } else if (name === '') {
            alert('Please Enter Name')
        } else if (subject === '') {
            alert('Please Enter Subject')
        } else if (content === '') {
            alert('Please Enter Message')
        } else {
            setDisp(0)
            axios.put("/api/contactForm", {email, name, subject, content,}).then((result) => {

                if (result.status === 200) {
                    toast.success(result.data.message);
                }
            })
                .catch((err) => {
                    console.log(err);
                });
        }
        console.log(email, name, subject, content);
    };

    return (
        <>
            <Head>
                <title>Investment Strategy - Futuristic Knowledge, Educated Success</title>
                <meta name={'og:title'} content={'Investment Strategy - Futuristic Knowledge, Educated Success'}/>
                <meta name="description"
                      content="Investing can be hard when first getting started. The most important part is creating a robust and efficient foundation. Successful Investing takes consistency."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property='og:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                <meta property='og:type' content='website'/>
                <meta property='og:description'
                      content='Investing can be hard when first getting started. The most important part is creating a robust and efficient foundation. Successful Investing takes consistency.'/>
                <meta property='og:sitename' content='Webminers'/>
                <meta name="twitter:card" content="summary"/>
                <meta name='twitter:title' content='Investment Strategy - Futuristic Knowledge, Educated Success'/>
                <meta name='twitter:description'
                      content='Investing can be hard when first getting started. The most important part is creating a robust and efficient foundation. Successful Investing takes consistency.'/>
                <meta name='twitter:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                <SchemaMarkup/>
            </Head>
            <div style={{margin: '0', width: '100%'}} className={styles.sales}>

                <Container>
                    <h1 style={{textAlign: 'center', paddingBottom: '25px'}}>
                        What&apos;s in it for you?
                    </h1>
                    <Row>
                        <Col style={{padding: '2.5%'}} lg={4} md={6}>
                            <Image className={styles.blogimgs} src={EfficiencyChart} alt={'Efficiency Chart'}/>
                        </Col>
                        <Col lg={8} md={6}>
                            <Container>
                                <h3>
                                    Who do we want to help?
                                </h3>
                                <Card.Body>
                                    <p>
                                        We want to help new investors who strive to do any of the following
                                    </p>
                                    <ol>
                                        <li>
                                            Grow Wealth
                                        </li>
                                        <li>
                                            Preserve Wealth
                                        </li>
                                        <li>
                                            Beat Inflation
                                        </li>
                                    </ol>
                                    <p>
                                        We believe that proper research is the key to consistent profits and strive to
                                        guide
                                        those who seek improvement the right building blocks to reach their goals.
                                    </p>
                                </Card.Body>
                            </Container>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{padding: '2.5%'}} lg={4} md={6}>
                            <Image className={styles.blogimgs} src={LineChart} alt={'Efficiency Chart'}/>
                        </Col>
                        <Col lg={8} md={6}>
                            <Container>
                                <h3>
                                    How will we reach your goals?
                                </h3>
                                <Card.Body>
                                    <p>
                                        We believe there are 4 main keys to success
                                    </p>
                                    <ol>
                                        <li>
                                            Personal Understanding
                                        </li>
                                        <li>
                                            Market Understanding
                                        </li>
                                        <li>
                                            Asset Efficiency
                                        </li>
                                        <li>
                                            Portfolio Balancing
                                        </li>
                                    </ol>
                                    <p>
                                        With these 4 main focused, a lot can be done with your investing growth.
                                        Starting your investing strategy should be the easiest part of your journey so
                                        that you can focus on letting your creativity shine with your unique investing
                                        style.
                                    </p>
                                </Card.Body>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <div style={{maxWidth:'750px', margin: "auto"}}>
                    <Container style={{display: disp1[disp]}}>
                        <h3 style={{padding: '5px', textAlign: 'center'}}>
                            Have any questions or comments?
                        </h3>
                        <Card.Text style={{fontSize: 'larger'}}>
                            Feel free to contact us and we will get back to you as soon as possible.
                        </Card.Text>
                        <Row style={{padding: '5px'}}>
                            <label>Email Address</label>
                            <textarea
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                rows='1'
                                placeholder='Email Address'
                                className={styles.textarea}></textarea>
                        </Row>
                        <Row style={{padding: '5px'}}>
                            <label>Name</label>
                            <textarea
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                rows='1'
                                placeholder='Name'
                                className={styles.textarea}></textarea>
                        </Row>
                        <Row style={{padding: '5px'}}>
                            <label>Subject</label>
                            <textarea
                                onChange={(e) => {
                                    setSubject(e.target.value);
                                }}
                                rows='1'
                                placeholder='Subject'
                                className={styles.textarea}></textarea>
                        </Row>
                        <Row style={{padding: '5px'}}>
                            <label>Content</label>
                            <textarea
                                onChange={(e) => {
                                    setContent(e.target.value);
                                }}
                                placeholder='Content'
                                className={styles.textarea}></textarea>
                        </Row>
                        <Row style={{padding: '5px'}}>
                            <Button variant="success" onClick={sendMail} style={{background: 'rgba(0, 175, 75, 1)'}}
                                    className={'btn ml-3 "btn-primary"}'}>
                                Send Message
                            </Button>
                        </Row>
                    </Container>
                    <Container style={{display: disp2[disp]}}>
                        <h4 style={{padding: '5px', textAlign: 'center'}}>Thank you for contacting us!</h4>
                        <h4 style={{padding: '5px', textAlign: 'center'}}>We&apos;ll be in touch soon.</h4>
                        <h4 style={{padding: '5px', textAlign: 'center'}}><Link href={'/'} className={styles.weblink}>Back
                            to
                            home</Link></h4>
                    </Container>
                    <Container>
                        <h4 style={{textAlign: 'center'}}>P.S. You can also reach us on <Link
                            href={'https://twitter.com/JusWebminers'} target={'_blank'}
                            className={styles.weblink}>Twitter</Link></h4>
                    </Container>
                </div>
            </div>
        </>
    )
}