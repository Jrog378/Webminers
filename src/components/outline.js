import styles from "@/styles/Home.module.css";
import {Card} from "react-bootstrap";
import Link from "next/link";

const Outline = ({article}) => {
    return (
        <>
            <Card className={styles.arthover}>
                <Card.Body>
                    <Card.Title style={{fontSize: 'xx-large', textAlign:"center"}}>
                        Article Outline
                    </Card.Title>
                    {article.map(content => (
                        <Card.Text style={{textAlign:"center"}} key={content.id}><Card.Link style={{fontSize:'larger'}} className={styles.weblink} href={`#${content.id}`}>
                            - {content.title !== '' ? content.title : 'Introduction'}
                        </Card.Link></Card.Text>
                    ))}
                </Card.Body>
            </Card>
        </>
    )
}

export default Outline