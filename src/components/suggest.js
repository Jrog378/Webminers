import Details from "@/components/details";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import React, {useState} from "react";


const Suggest = ({Detail}) => {
    const [num, setNum] = useState(0)
    if (Detail === Details[num].id) {
        setNum(1)
    }

    return (
        <Card.Link href={Details[num].url} style={{textDecoration: 'none', color: 'black'}}>
            <Card className={styles.arthover}>
                <Container>
                    <Row>
                        <Card.Body className={styles.pad}>
                            <Image
                                src={require(`@/images/articleimages/${Details[num].img}`)}
                                alt={Details[num].alt}
                                className={styles.blogimgs}
                                placeholder={'blur'}
                            />
                        </Card.Body>
                    </Row>
                    <Row>
                        <Card.Body style={{paddingTop: 0}}>
                            <Card.Link
                                style={{fontSize: 'x-large'}}
                                className={styles.weblink}
                                href={Details[num].url}>{Details[num].title}</Card.Link>
                            <Card.Text
                                style={{
                                    fontStyle: 'italic',
                                    display: 'inline-block',
                                    width: '100%',
                                    textAlign: 'right'
                                }}>{Details[num].date}</Card.Text>
                        </Card.Body>
                    </Row>
                </Container>
            </Card>
        </Card.Link>
    )
}
export default Suggest