import styles from "@/styles/Home.module.css";
import {Card, Col, Row} from "react-bootstrap";
import Link from "next/link";
import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    RedditIcon,
    RedditShareButton, TwitterIcon, TwitterShareButton
} from "next-share";
import React from "react";

const Outline = ({article, url}) => {
    return (
        <>
            <Card className={styles.arthover}>
                <Card.Body>
                    <Card.Title style={{fontSize: 'xx-large', textAlign: "center"}}>
                        Article Outline
                    </Card.Title>
                    {article.map(content => (
                        <>
                            <Card.Text style={{textAlign: "center"}} key={content.id}><Card.Link
                                style={{fontSize: 'larger'}} className={styles.weblink} href={`#${content.id}`}>
                                - {content.title !== '' ? content.title : 'Introduction'}
                            </Card.Link></Card.Text>
                        </>
                    ))}
                    <Row style={{padding: '3px 5%'}}>
                        <Col xs={3}>
                            <TwitterShareButton
                                style={{margin: '0 auto', display: 'table', padding: '3px 0'}}
                                url={'https://webminers.dev' + url}
                                blankTarget={true}>
                                <TwitterIcon size={32}/>
                            </TwitterShareButton>
                        </Col>
                        <Col xs={3}>
                            <FacebookShareButton
                                style={{margin: '0 auto', display: 'table', padding: '3px 0'}}
                                url={'https://webminers.dev' + url}
                                blankTarget={true}>
                                <FacebookIcon size={32}/>
                            </FacebookShareButton>
                        </Col>
                        <Col xs={3}>
                            <RedditShareButton
                                style={{margin: '0 auto', display: 'table', padding: '3px 0'}}
                                url={'https://webminers.dev' + url}
                                blankTarget={true}>
                                <RedditIcon size={32}/>
                            </RedditShareButton>
                        </Col>
                        <Col xs={3} >
                            <LinkedinShareButton
                                style={{margin: '0 auto', display: 'table', padding: '3px 0'}}
                                url={'https://webminers.dev' + url}
                                blankTarget={true}>
                                <LinkedinIcon size={32}/>
                            </LinkedinShareButton>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default Outline