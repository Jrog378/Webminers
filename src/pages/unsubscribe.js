import React, {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {Button, Col, Container, Row} from "react-bootstrap";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

function Unsubscribe() {
    const [mail, setMail] = useState(null);
    const [loading, setLoading] = useState(false);
    const [disp, setDisp] = useState(1)

    let disp1 = ['none', 'initial']
    let disp2 = ['initial', 'none']

    const unsubscribe = () => {
        setLoading(true);
        axios.put("api/unmailingList", {mail,}).then((result) => {
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
                    "@id": "https://webminers.dev/unsubscribe/",
                    "url": "https://webminers.dev/unsubscribe/",
                    "image": "https://webminers.dev/webminers-logo.webp",
                    "name": "Unsubscribe From Webminers Investing Email List",
                    "datePublished": "May 19th, 2023",
                    "dateModified": "May 26th, 2023",
                    "description": "Unsubscribe from our email list with this page. We are sad to see you go but are happy that you stuck with us for this long. You are welcomed back anytime."
                }),
            }}
        />
    )

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Unsubscribe From Webminers Investing Email List</title>
                <meta property='og:title' content='Unsubscribe From Webminers Investing Email List'/>
                <meta property='og:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                <meta name='description'
                      content='Unsubscribe from our email list with this page. We are sad to see you go but are happy that you stuck with us for this long. You are welcomed back anytime.'/>
                <meta property='og:type' content='website'/>
                <meta property='og:description'
                      content='Unsubscribe from our email list with this page. We are sad to see you go but are happy that you stuck with us for this long. You are welcomed back anytime.'/>
                <meta property='og:sitename' content='Webminers'/>
                <meta name="twitter:card" content="summary"/>
                <meta name='twitter:title' content='Unsubscribe From Webminers Investing Email List'/>
                <meta name='twitter:description'
                      content='Unsubscribe from our email list with this page. We are sad to see you go but are happy that you stuck with us for this long. You are welcomed back anytime.'/>
                <meta name='twitter:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                <SchemaMarkup/>
            </Head>
            <Container style={{padding: '25px', height: '100%'}} className="login">
                <Container className={styles.inputcon}>
                    <h2 style={{padding: '5px', color: 'rgb(0,175,75)', textAlign: 'center', fontWeight: 'bold'}}>
                        Unsubscribe From Webminers Mailing List
                    </h2>
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
                                <Button variant="success" onClick={unsubscribe}
                                        className={`btn ml-3 ${loading ? "btn-disabled loading" : "btn-primary"}`}>
                                    Stop Sending Me Emails
                                </Button>
                            </Row>
                        </Col>
                    </Container>
                    <Container style={{display: disp2[disp]}}>
                        <h4 style={{padding: '5px', textAlign: 'center', color: 'whitesmoke'}}>Sorry to see you go, you
                            are welcome to come back anytime!</h4>
                    </Container>
                </Container>
            </Container>
        </>
    );
}

export default Unsubscribe