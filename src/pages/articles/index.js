import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import React from "react";
import Head from "next/head";
import logo from "@/images/WebminersLogo.webp";
import Link from "next/link";
import Details from "@/components/details";

export default function Articles() {
    const Cards = () => {
        return (
            <Container style={{width: '100%'}}>
                <Container style={{borderRadius: '15px'}}>
                    <Row style={{paddingBottom: '10px'}}>
                        {Details.map(content =>
                            <Col xl={4} md={6} sm={12} key={content.id} style={{padding: '10px'}}>
                                <Card className={styles.arthover}>
                                    <Container>
                                        <Row>
                                            <Card.Body>
                                                <Card.Link href={content.url}>
                                                    <Image
                                                        src={require(`../../images/articleimages/${content.img}`)}
                                                        alt={content.alt}
                                                        className={styles.blogimgs}
                                                        placeholder={'blur'}
                                                    />
                                                </Card.Link>
                                            </Card.Body>
                                        </Row>
                                        <Row>
                                            <Card.Body style={{paddingTop: 0, paddingBottom: 0}}>
                                                <Card.Title><Link style={{fontSize: 'larger'}}
                                                                  className={styles.weblink}
                                                                  href={content.url}>{content.title}</Link></Card.Title>
                                            </Card.Body>
                                        </Row>
                                        <Row>
                                            <Card.Body style={{paddingTop: '8px'}}>
                                                <Row>
                                                    <ReactMarkdown>{content.text}</ReactMarkdown>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Card.Text
                                                            style={{
                                                                fontStyle: 'italic',
                                                                display: 'inline-block'
                                                            }}>{content.date}</Card.Text>
                                                    </Col>
                                                    <Col>
                                                        <Button href={content.url}
                                                                style={{float: 'right', marginBottom: '10px'}}
                                                                variant="outline-success"
                                                                size='sm'>Read More...</Button>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Row>
                                    </Container>
                                </Card>
                            </Col>
                        )}
                    </Row>
                </Container>
            </Container>
        )
    }

    return (
        <>
            <div style={{backgroundColor: 'whitesmoke', width: '100%', borderRadius: '25px'}}>
                <Head>
                    <title>Webminers Articles - Make Data-Driven Decisions With Investing Systems</title>
                    <meta name="description"
                          content="Webminers Articles are revolutionizing how we make financial decisions with new balances and optimization"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta property='og:image' content={logo}/>
                </Head>
                <Cards/>

            </div>
        </>
    );
}