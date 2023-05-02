import React, {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {Button, Card, Container, Row, Toast} from "react-bootstrap";
import styles from "@/styles/Home.module.css";
import CloseButton from "react-bootstrap/CloseButton";

export default function Email() {
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
        <Card style={{borderRadius: '25px', background: 'none', padding: '1% 8%', marginBottom: '2%'}}>
            <Container style={{display: disp1[disp]}}>
                <h3 style={{padding: '5px', textAlign: 'center'}}>
                    Desire to be a better Investor?
                </h3>
                <Card.Text style={{fontSize: 'larger'}}>
                    Are you ready to start implementing scientifically proven methods into your crypto investing?
                </Card.Text>
                <Container>
                    <Row style={{padding: '5px'}}>
                        <input
                            onChange={(e) => {
                                setMail(e.target.value);
                            }}
                            type='email'
                            placeholder='Email Address'
                            className={styles.inputs}></input>
                    </Row>
                    <Row style={{padding: '5px'}}>
                        <Button variant="success" onClick={subscribe}
                                className={`btn ml-3 ${loading ? "btn-disabled loading" : "btn-primary"}`}>
                            Join Email List!
                        </Button>
                    </Row>
                </Container>
            </Container>
            <Container style={{display: disp2[disp]}}>
                <h4 style={{padding: '5px', textAlign: 'center'}}>Thank you for subscribing!</h4>
            </Container>
        </Card>
    );
}