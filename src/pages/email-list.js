import React, {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {Button, Col, Container, Row, Toast} from "react-bootstrap";
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

    return (
        <>
            <Head>
                <title>Webminers Investing - Email List</title>
                <meta property='og:title' content='Webminers Investing - Email List'/>
                <meta property='og:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                <meta name='description'
                      content='Webminers Investing provides scientifically backed research and education to help you
                      make informed investing decisions with Insights, Balancing, and Efficiency.'
                />
            </Head>
            <Container style={{padding: '25px', height: '100%'}} className="login">
                <Container className={styles.inputcon}>
                    <h2 style={{padding: '5px', color:'rgb(0,175,75)', textAlign:'center', fontWeight:'bold', }}>
                        Webminers Mailing List
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
                                <Button variant="success" onClick={subscribe}
                                        className={`btn ml-3 ${loading ? "btn-disabled loading" : "btn-primary"}`}>
                                    Join Now!
                                </Button>
                            </Row>
                        </Col>
                    </Container>
                    <Container style={{display: disp2[disp]}}>
                        <h4 style={{padding: '5px', textAlign: 'center', color:'whitesmoke'}}>Thank you for subscribing!</h4>
                    </Container>
                </Container>
            </Container>
        </>
    );
}

export default EmailList