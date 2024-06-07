import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Image from "next/image";
import logo from "@/images/WebLogo.webp";
import styles from '@/styles/Home.module.css'
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "@/config";

export default function Pagenav() {
    // const [user, loading] = useAuthState(auth)
    return (
        <Navbar className={styles.bignav} expand="lg" variant={"dark"}>
            <Container>
                <Navbar.Brand href='/' style={{color: 'rgb(0,175,75)', fontWeight: 'bold', fontSize: 'x-large'}}>
                    <Image width='34' height='34' className="d-inline-block align-top" src={logo} alt='Webminers Logo'/>Webminers
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='me-auto' style={{fontSize: 'large'}}>
                        {/*<Nav.Link className={styles.webnav} href="/strategy">Portfolio</Nav.Link>*/}
                        <Nav.Link className={styles.webnav} href="/efficiency">Crypto Research</Nav.Link>
                        <Nav.Link className={styles.webnav} href="/articles">Articles</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button href={'https://www.linkedin.com/in/jusrogers'} variant={'success'} target={'_blank'} style={{padding: '6px 25px'}}>LinkedIn</Button>
                        {/*<Nav.Link className={styles.webnav} href="/auth/profile">{user ? "Profile" : "Login"}</Nav.Link>*/}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}