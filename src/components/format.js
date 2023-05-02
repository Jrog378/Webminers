import Image from "next/image";
import {Card, Col, Container, Row} from "react-bootstrap";
import styles from "@/styles/Home.module.css";
import ReactMarkdown from "react-markdown";
import React from "react";
import {GoogleAdSense} from "nextjs-google-adsense";
import Head from "next/head";
import DecenterMain from "@/images/articleimages/DecenterMain.webp";
import {adsense} from "@/components/article-ad";
import Email from "@/components/email";
import Suggest from "@/components/suggest";
import Details from "@/components/details";

const ArticleFormat = ({Article, url}) => {
    const Detail = Details.find((article) => article.url === url)
    return (
        <>
            <GoogleAdSense publisherId="pub-7878345029704986" data-nscript={false}/>
            <Head>
                <title>{Detail.title}</title>
                <meta property='og:title' content={Detail.title}/>
                <meta property='og:image' content={'webminers.dev/images/' + Detail.header}/>
                <meta name='description' content={Detail.text}/>
            </Head>
            <article style={{backgroundColor: '#212529'}}>
                <Container>
                    <header>
                        <Card style={{borderStyle: 'none', background: 'none'}}>
                            <Card.Title style={{
                                color: 'rgb(200,200,200)',
                                textAlign: 'center',
                                fontSize: 'xx-large',
                                padding: '20px 3% 0 3%'
                            }}>
                                {Detail.title}
                            </Card.Title>
                            <Card.Text style={{color: 'rgb(200,200,200)', padding: '3% 10%', fontStyle: 'italic'}}>
                                Published on: {Detail.date}
                            </Card.Text>
                        </Card>
                    </header>
                </Container>
                <Card
                    style={{
                        display: 'flex',
                        borderRadius: '35px',
                        background: 'whitesmoke'
                    }}>
                    <Row style={{padding: '0 25px 15px 25px'}}>
                        <Col lg={8} md={12} style={{padding: '10px'}}>
                            {Article.map(sections => (
                                    <Card key={sections.id}
                                          style={{borderStyle: 'none', background: 'none', padding: '1% 8%'}}>
                                        <Image style={{margin: 'auto', width: '70%', height: 'auto', borderRadius: '15px'}}
                                               alt={sections.description}
                                               src={sections.img}
                                               id={sections.id}
                                               placeholder={'blur'}
                                        />
                                        <Card.Body style={{paddingBottom: 0}}>
                                            <Card.Title style={{padding: '5px 0'}}><h2>{sections.title}</h2></Card.Title>
                                            <Container className={styles.webmark} style={{padding: '0px'}}>
                                                <ReactMarkdown>{sections.text}</ReactMarkdown>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                )
                            )
                            }
                        </Col>
                        <Col lg={4} md={12} style={{paddingTop: '15px'}}>
                            <div style={{padding: '10px'}}>
                                <Email/>
                            </div>
                            <div style={{padding: '10px'}}>
                                {adsense()}
                            </div>
                            <div style={{
                                position: 'sticky',
                                top: 10,
                                padding: '10px'
                            }}>
                                <Suggest Detail={Detail.id}/>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </article>
        </>
    )
}
export default ArticleFormat