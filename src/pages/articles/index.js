import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import {Button, Card, Col, Container, Navbar, NavDropdown, OffcanvasTitle, Row} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import React, {useState} from "react";
import Head from "next/head";
import Details from "@/components/details";

export default function Articles() {
    const quotes = [
        {
            author: 'Benjamin Graham',
            quote: 'You will be much more in control, if you realize how much you are not in control'
        }
    ]

    let number = Math.floor(Math.random() * quotes.length);

    const schemaMarkup = {
        "@context":
            "https://schema.org",
        "@type":
            ["WebPage", "CollectionPage"],
        "@id":
            "https://webminers.dev/articles/",
        "url":
            "https://webminers.dev/articles/",
        "image":
            "https://webminers.dev/webminers-logo.webp",
        "name":
            "Webminers Educational and Research-Based Crypto Articles",
        "datePublished":
            "August 7th, 2022",
        "dateModified":
            "June 2nd, 2023",
        "description":
            "Crypto investing, blockchain technology, and AI should be topics that are not difficult to get into or understand. Webminers articles strive to reach that goal."
    }

    return (
        <>
            <div style={{backgroundColor: 'whitesmoke', width: '100%', borderRadius: '25px'}}>
                <Head>
                    <title>Webminers Educational and Research-Based Crypto Articles</title>
                    <meta name={'og:title'}
                          content={'Webminers Educational and Research-Based Crypto Articles'}/>
                    <meta name="description"
                          content="Crypto investing, blockchain technology, and AI should be topics that are not difficult to get into or understand. Webminers articles strive to reach that goal."/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta property='og:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                    <meta property='og:type' content='website'/>
                    <meta property='og:description'
                          content='Crypto investing, blockchain technology, and AI should be topics that are not difficult to get into or understand. Webminers articles strive to reach that goal.'/>
                    <meta property='og:sitename' content='Webminers'/>
                    <meta name="twitter:card" content="summary"/>
                    <meta name='twitter:title' content='Webminers Educational and Research-Based Crypto Articles'/>
                    <meta name='twitter:description'
                          content='Crypto investing, blockchain technology, and AI should be topics that are not difficult to get into or understand. Webminers articles strive to reach that goal.'/>
                    <meta name='twitter:image' content={'https://webminers.dev/webminers-logo.webp'}/>
                    <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
                </Head>
                <Container style={{width: '100%'}}>
                    <Container className={styles.pad}>
                        <h1 style={{padding: '2.5%', fontWeight: '600'}}>
                            Those with a powerful mindset will always be successful, as little can stand in their way.
                        </h1>
                    </Container>
                    <Container style={{borderRadius: '15px', maxWidth: '1250px'}}>
                        <div className={styles.pad}>
                            <h3 style={{color: 'rgb(0,100, 50'}}>
                                <em>&quot;{quotes[number].quote}&quot;</em>
                            </h3>
                            <h3>
                                - {quotes[number].author}
                            </h3>
                        </div>
                        <Card.Title style={{textAlign: 'right'}}>
                            Follow us on <Card.Link className={styles.weblink} target={'_blank'}
                                                    href={'https://twitter.com/JusWebminers'}>Twitter</Card.Link>
                        </Card.Title>
                        <Row style={{paddingBottom: '10px'}}>
                            {Details.map(content =>
                                <Col xl={6} md={12} sm={12} key={content.id} style={{padding: '2%'}}>
                                    <Card.Link href={content.url} style={{textDecoration: 'none', color: 'black'}}>
                                        <Card className={styles.arthover} style={{maxWidth: '800px', margin: 'auto'}}>
                                            <Container>
                                                <Row>
                                                    <Col sm={6} xs={12} style={{padding:0}}>
                                                        <Card.Body className={styles.pad}>
                                                            <Image
                                                                src={require(`../../images/articleimages/${content.img}`)}
                                                                alt={content.alt}
                                                                className={styles.blogimgs}
                                                                placeholder={'blur'}
                                                            />
                                                        </Card.Body>
                                                    </Col>
                                                    <Col sm={6} xs={12} style={{padding:0}}>
                                                        <Card.Body>
                                                            <Card.Link href={content.url} className={styles.weblink}>
                                                                <h2 style={{
                                                                    fontSize: 'x-large',
                                                                    fontWeight: '600'
                                                                }}>{content.title}</h2>
                                                            </Card.Link>
                                                            <Card.Text
                                                                style={{
                                                                    fontStyle: 'italic',
                                                                    display: 'inline-block',
                                                                    width: '100%',
                                                                    textAlign: 'right'
                                                                }}>{content.date}</Card.Text>
                                                        </Card.Body>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card>
                                    </Card.Link>
                                </Col>
                            )}
                        </Row>
                    </Container>
                </Container>
            </div>
        </>
    )
        ;
}