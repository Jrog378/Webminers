import Image from "next/image";
import {Card, Container} from "react-bootstrap";
import styles from "@/styles/Home.module.css";
import ReactMarkdown from "react-markdown";
import React from "react";

const ArticleFormat = ({sections}) => {
    return (
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
}
export default ArticleFormat