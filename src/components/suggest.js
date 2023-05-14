import Details from "@/components/details";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import React, {useState} from "react";


const Suggest = ({Detail}) => {
    const [num, setNum] = useState(0)
    if (Detail === Details[num].id) {
        setNum(1)
    }
    return (
        <Card className={styles.arthover}>
            <Container>
                <Row>
                    <Card.Body>
                        <Card.Link href={Details[num].url}>
                            <Image
                                src={require(`@/images/articleimages/${Details[num].img}`)}
                                alt={Details[num].alt}
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
                                          href={Details[num].url}>{Details[num].title}</Link></Card.Title>
                    </Card.Body>
                </Row>
                <Row>
                    <Card.Body style={{paddingTop: '8px'}}>
                        <Row>
                            <ReactMarkdown>{Details[num].text}</ReactMarkdown>
                        </Row>
                        <Row>
                            <Col>
                                <Card.Text
                                    style={{
                                        fontStyle: 'italic',
                                        display: 'inline-block'
                                    }}>{Details[num].date}</Card.Text>
                            </Col>
                            <Col>
                                <Button href={Details[num].url}
                                        className={styles.buttons}
                                        variant="outline-success"
                                        size='md'>Read More...</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Row>
            </Container>
        </Card>
    )
}
export default Suggest