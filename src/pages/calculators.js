import Head from "next/head";
import logo from "@/images/WebminersLogo.webp";
import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import styles from '../styles/Home.module.css'

export default function Calculators() {
    function calculate() {
        const initialInvestment = document.getElementById("initial-investment").value;
        const monthlyReturn = document.getElementById("monthly-return").value;
        const months = document.getElementById("months").value;
        const totalProfit = initialInvestment * Math.pow(1 + monthlyReturn / 100, months) - initialInvestment;
        const result = document.getElementById("result");
        result.value = "$" + totalProfit.toFixed(2); // display result
    }

    return (
        <>
            <Head>
                <title>Webminers Seasons - Make Data-Driven Decisions With Investing Systems</title>
                <meta name="description"
                      content="Webminers Seasons are revolutionizing how we make financial decisions with new seasons and optimization"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property='og:image' content={logo}/>
            </Head>
            <div style={{backgroundColor: 'whitesmoke', width: '100%', borderRadius: '25px'}}>
                <Container style={{padding: '0 25px 25px 25px'}}>
                    <h1>Calculators</h1>
                    <Container>
                        <h2>Intrest Calculator</h2>
                        <Col>
                            <Row style={{margin: '15px'}}>
                                <label htmlFor="initial-investment">Initial investment:</label>
                                <input className={styles.inputss} type="number" id="initial-investment" min="0" required/>
                            </Row>
                            <Row style={{margin: '15px'}}>
                                <label htmlFor="monthly-return">Monthly return:</label>
                                <input className={styles.inputss} type="number" id="monthly-return" min="0" required/>
                            </Row>
                            <Row style={{margin: '15px'}}>
                                <label htmlFor="months">Number of months:</label>
                                <input className={styles.inputss} type="number" id="months" min="0" required/>
                            </Row>
                            <Row style={{margin: '15px'}}>
                                <Button variant={'success'} type="button" onClick={calculate}>Calculate</Button>
                            </Row>
                            <Row style={{margin: '15px'}}>
                                <label htmlFor="result">Total profit:</label>
                                <input className={styles.inputss} type="text" id="result" disabled/>
                            </Row>
                        </Col>
                    </Container>
                </Container>
            </div>
        </>
    )
}