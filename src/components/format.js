import Image from "next/image";
import {Card, Col, Container, Row} from "react-bootstrap";
import styles from "@/styles/Home.module.css";
import ReactMarkdown from "react-markdown";
import React from "react";
import {GoogleAdSense} from "nextjs-google-adsense";
import Head from "next/head";
import {adsense} from "@/components/article-ad";
import Email from "@/components/email";
import Suggest from "@/components/suggest";
import Details from "@/components/details";
import Link from "next/link";

const ArticleFormat = ({Article, url}) => {
    const Detail = Details.find((article) => article.url === url)
    const num = Math.floor(Math.random() * 3);
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
                        <Col lg={8} md={12} className={styles.pad}>
                            {Article.map(sections => (
                                    <Card key={sections.id}
                                          style={{borderStyle: 'none', background: 'none', padding: '0 8%'}}>
                                        <Image style={{margin: 'auto', width: '70%', height: 'auto', borderRadius: '15px'}}
                                               alt={sections.description}
                                               src={sections.img}
                                               id={sections.id}
                                               placeholder={'blur'}
                                               lazy
                                        />
                                        <Card.Body style={{paddingBottom: 0}}>
                                            <Card.Title className={styles.pad}><h2>{sections.title}</h2></Card.Title>
                                            <Container className={styles.webmark} style={{padding: '0px'}}>
                                                <ReactMarkdown>{sections.text}</ReactMarkdown>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                )
                            )
                            }
                        </Col>
                        <Col lg={4} md={12} className={styles.pad}>
                            <Row>
                                <Col sm={12} md={6} lg={12}>
                                    <Row>
                                        <div className={styles.pad}>
                                            <Email/>
                                        </div>
                                    </Row>
                                    {/*<Row>*/}
                                    {/*    <div className={styles.pad}>*/}
                                    {/*        {adsense()}*/}
                                    {/*    </div>*/}
                                    {/*</Row>*/}
                                </Col>
                                <Col sm={12} md={6} lg={12}>
                                    <div className={styles.pad}>
                                        {num === 0
                                            ?
                                            <Card style={{
                                                borderRadius: '25px',
                                                background: 'none',
                                                padding: '1% 8%',
                                                marginBottom: '2%'
                                            }}>
                                                <Container>
                                                    <Row>
                                                        <Card.Body>
                                                            <Image
                                                                src={require('../images/plots/BalancingPlot.webp')}
                                                                alt={'Balancing Plot'}
                                                                className={styles.blogimgs}
                                                                placeholder={'blur'}
                                                            />
                                                        </Card.Body>
                                                    </Row>
                                                    <Row>
                                                        <Card.Body style={{paddingTop: 0, paddingBottom: 0}}>
                                                            <Card.Title style={{fontSize: 'x-large'}}>Want Efficient
                                                                Cryptos?</Card.Title>
                                                        </Card.Body>
                                                    </Row>
                                                    <Row>
                                                        <Card.Body style={{paddingTop: '8px'}}>
                                                            <Card.Text style={{fontSize: 'larger'}}>
                                                                Take a look at our <Link className={styles.weblink}
                                                                                         href={'/balancing'}>
                                                                Asset Balancing</Link> for up to date portfolio
                                                                balancing research.
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Row>
                                                </Container>
                                            </Card>
                                            : num === 1
                                                ?
                                                <Card style={{
                                                    borderRadius: '25px',
                                                    background: 'none',
                                                    padding: '1% 8%',
                                                    marginBottom: '2%'
                                                }}>
                                                    <Container>
                                                        <Row>
                                                            <Card.Body>
                                                                <Image
                                                                    src={require('../images/plots/InsightPlot.webp')}
                                                                    alt={'Insight Plot'}
                                                                    className={styles.blogimgs}
                                                                    placeholder={'blur'}
                                                                />
                                                            </Card.Body>
                                                        </Row>
                                                        <Row>
                                                            <Card.Body style={{paddingTop: 0, paddingBottom: 0}}>
                                                                <Card.Title style={{fontSize: 'x-large'}}>Don&apos;t
                                                                    Miss Another Signal</Card.Title>
                                                            </Card.Body>
                                                        </Row>
                                                        <Row>
                                                            <Card.Body style={{paddingTop: '8px'}}>
                                                                <Card.Text style={{fontSize: 'larger'}}>
                                                                    Our <Link
                                                                    className={styles.weblink}
                                                                    href={'/insights'}>
                                                                    Market Insights</Link> provide you with the simple
                                                                    information you need to stay up to data with our
                                                                    research.
                                                                </Card.Text>
                                                            </Card.Body>
                                                        </Row>
                                                    </Container>
                                                </Card>
                                                :
                                                <Card style={{
                                                    borderRadius: '25px',
                                                    background: 'none',
                                                    padding: '1% 8%',
                                                    marginBottom: '2%'
                                                }}>
                                                    <Container>
                                                        <Row>
                                                            <Card.Body>
                                                                <Image
                                                                    src={require('../images/plots/EfficiencyImage.webp')}
                                                                    alt={'Efficiency Image'}
                                                                    className={styles.blogimgs}
                                                                    placeholder={'blur'}
                                                                />
                                                            </Card.Body>
                                                        </Row>
                                                        <Row>
                                                            <Card.Body style={{paddingTop: 0, paddingBottom: 0}}>
                                                                <Card.Title style={{fontSize: 'x-large'}}>Need More
                                                                    Data?</Card.Title>
                                                            </Card.Body>
                                                        </Row>
                                                        <Row>
                                                            <Card.Body style={{paddingTop: '8px'}}>
                                                                <Card.Text style={{fontSize: 'larger'}}>
                                                                    Get the data you need from
                                                                    our <Link className={styles.weblink}
                                                                              href={'/balancing'}>
                                                                    Asset Efficiency</Link> for better efficient crypto
                                                                    investing.
                                                                </Card.Text>
                                                            </Card.Body>
                                                        </Row>
                                                    </Container>
                                                </Card>
                                        }
                                    </div>
                                    <div className={styles.pad}>
                                        {adsense()}
                                    </div>
                                </Col>
                            </Row>
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