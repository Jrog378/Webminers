import {Button, Card, Col, Container, Row} from "react-bootstrap";
import React from "react";
import Image from "next/image";
import EfficiencyTable from '../images/plots/EfficiencyTable.webp'
import styles from "@/styles/Home.module.css";

export default function EfficientSales() {
    return (
        <Card.Link href={'/efficiency'} className={styles.weblink}>
            <Card style={{background:'whitesmoke'}}>
                <Image
                    src={EfficiencyTable}
                    className={styles.saleimg}
                    alt={'EfficiencyTable'}
                    placeholder={'blur'}
                />
                <Row>
                    <Card.Body>
                        <Card.Title style={{textAlign: "center"}}>
                            <h4>Looking for Efficient Profit?</h4>
                            <h4>Visit Our FREE Asset Research</h4>
                        </Card.Title>
                        <Card.Text style={{textAlign: "center"}} className={styles.pad}>
                            Find your efficient returns with the right data on the right assets
                        </Card.Text>
                    </Card.Body>
                </Row>
            </Card>
        </Card.Link>
    )
}