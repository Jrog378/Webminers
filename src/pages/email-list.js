import React, {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {Button, Col, Container, Row} from "react-bootstrap";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

function EmailList() {
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

    const SchemaMarkup = () => (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "@id": "https://webminers.dev/email-list/",
                    "url": "https://webminers.dev/email-list/",
                    "image": "https://webminers.dev/webminers-logo.webp",
                    "name": "Email List for Webminers Investing",
                    "datePublished": "March 17th, 2023",
                    "dateModified": "May 26th, 2023",
                    "description": "Join our email list where you will receive weekly emails about important updates with our research or highlight articles and extra crypto investing content."
                }),
            }}
        />
    )

    return (
        <>
            <Head>
                <title>Email List for Webminers Investing</title>
                <meta property='og:title' content='Email List for Webminers Investing'/>
                <meta property='og:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                <meta name='description'
                      content='Join our email list where you will receive weekly emails about important updates with our research or highlight articles and extra crypto investing content.'/>
                <meta property='og:type' content='website'/>
                <meta property='og:description'
                      content='Join our email list where you will receive weekly emails about important updates with our research or highlight articles and extra crypto investing content.'/>
                <meta property='og:sitename' content='Webminers'/>
                <meta name="twitter:card" content="summary"/>
                <meta name='twitter:title' content='Email List for Webminers Investing'/>
                <meta name='twitter:description'
                      content='Join our email list where you will receive weekly emails about important updates with our research or highlight articles and extra crypto investing content.'/>
                <meta name='twitter:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                <SchemaMarkup/>
            </Head>
            <Container style={{padding: '25px', height: '100%'}} className="login">
                <Container className={styles.inputcon}>
                    <h1 style={{
                        padding: '5px',
                        color: 'rgb(0,175,75)',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: '30px'
                    }}>
                        Webminers Mailing List
                    </h1>
                    <Container style={{display: disp1[disp]}}>
                        <Col>
                            <Row style={{padding: '10px'}}>
                                <input
                                    onChange={(e) => {
                                        setMail(e.target.value);
                                    }}
                                    type='email'
                                    placeholder='E-mail Address'
                                    className={styles.inputss}></input>
                            </Row>
                            <Row style={{padding: '10px'}}>
                                <Button variant="success" onClick={subscribe}
                                        className={`btn ml-3 ${loading ? "btn-disabled loading" : "btn-primary"}`}>
                                    Join Now!
                                </Button>
                            </Row>
                        </Col>
                    </Container>
                    <Container style={{display: disp2[disp]}}>
                        <h4 style={{padding: '5px', textAlign: 'center', color: 'whitesmoke'}}>Thank you for
                            subscribing!</h4>
                        <h4 style={{padding: '5px', textAlign: 'center', color: 'whitesmoke'}}>Check your inbox Tuesday
                            for you introduction email.</h4>
                    </Container>
                </Container>
            </Container>
        </>
    );
}

export default EmailList