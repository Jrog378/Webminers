import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, {useState} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../stylesheets/Side-half.css'
import '../stylesheets/Navbar.css'
import '../stylesheets/App.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import WhiteLogo from "../WebImg/WhiteLogo.png";
import Card from 'react-bootstrap/Card';

const Artsections = [
    {
        img: '',
        text: 'Testing content'
    },
    {
        img: WhiteLogo,
        text: 'Testing content'
    }
]

function Artcontent() {
    const Sections = Artsections.map(sections =>
        <Card style={{borderStyle: 'none', background: 'none'}}>
            <Card.Img variant="top" src={sections.img} style={{width: '600px'}}/>
            <Card.Body style={{display: ''}}>
                <Card.Text>
                    {sections.text}
                </Card.Text>
            </Card.Body>
        </Card>)
    return (
        <>
            <Card style={{alignItems: 'center', display: 'flex', borderRadius: '50px', background: 'rgb(213, 233, 223)'}}>
                <Card style={{borderStyle: 'none', background: 'none'}}>
                    <Card.Title style={{textAlign: 'center', fontSize: 'xx-large', paddingTop: '20px'}}>
                        Changes Coming to Webminers for an Improved Experience
                    </Card.Title>
                    <Card.Text style={{padding: '15px', fontStyle: 'italic'}}>
                        Published on: Jan 1 2022
                    </Card.Text>
                </Card>
                {Sections}
                <br/>
            </Card>
        </>
    );
}

function CollapsibleExample() {
    return (
        <Navbar sticky="top" id='smallnav' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <img
                        alt=""
                        src={WhiteLogo}
                        width="43"
                        height="43"
                        className="d-inline-block align-top"
                    />{' '}
                    <Link to='/'>Webminers</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Articles" id="nav-dropdown">
                            <NavDropdown.Item href="/blog">All Articles</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/blog">Data Science</NavDropdown.Item>
                            <NavDropdown.Item href="/blog">Technology</NavDropdown.Item>
                            <NavDropdown.Item href="/blog">Crypto</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="#donate">Donate</Nav.Link>
                        <Nav.Link><Button target='_blank' href='https://linkedin.com/company/juswebminers'
                                          variant="success"
                                          size='sm' active>LinkedIn</Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

const options = [
    {
        name: 'Enable body scrolling',
        scroll: true,
        backdrop: false,
    },
];

function OffCanvasExample({name, ...props}) {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(true);


    return (
        <>
            <Offcanvas id='offstyle' style={{width: '280px'}} show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header>
                    <Offcanvas.Title><Link to='/blog'>Articles</Link></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav activeKey="/">
                        <Container className='sidecon'>
                            <Col>
                                <Row>
                                    <Nav.Item>
                                        <Nav.Link href="/blog">Data Science</Nav.Link>
                                    </Nav.Item>
                                </Row>
                                <Row>
                                    <Nav.Item>
                                        <Nav.Link href="/blog">Technology</Nav.Link>
                                    </Nav.Item>
                                </Row>
                                <Row>
                                    <Nav.Item>
                                        <Nav.Link href="/blog">Crypto</Nav.Link>
                                    </Nav.Item>
                                </Row>
                            </Col>
                        </Container>
                    </Nav>
                    <div id='buttonside' className="d-grid gap-2">
                        <Button variant="success" size="sm">
                            Contact Us
                        </Button>
                        <Button variant="success" size="sm">
                            Donate to Webminers
                        </Button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

function Example() {
    return (
        <>

            {options.map((props, idx) => (
                <OffCanvasExample key={idx} {...props} />
            ))}
        </>
    );
}

function BrandExample() {
    return (
        <>
            <Navbar sticky="top" id='bignav' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <img
                            alt=""
                            src={WhiteLogo}
                            width="43"
                            height="43"
                            className="d-inline-block align-top"
                        />{' '}
                        <Link to='/'>Webminers</Link>
                    </Navbar.Brand>
                    <Navbar.Text>
                        <Button target='_blank' href='https://linkedin.com/company/juswebminers' variant="success"
                                active>LinkedIn</Button>
                    </Navbar.Text>
                </Container>
            </Navbar>
        </>
    );
}

function Reactor() {
    return (
        <div>
            <header>
                <img src={WhiteLogo} style={{width: '100%'}} alt="logo"/>
            </header>
        </div>
    );
}

function Footer() {
    return (
        <footer style={{color: 'white', textAlign: 'center', padding: '10px'}}>
            <p>Copyright: <span>{new Date().getFullYear()}</span> © Webminers</p>
        </footer>
    );
}

function Artpage() {
    return (
        <React.Fragment>
            <CollapsibleExample/>
            <Example/>
            <BrandExample/>
            <Reactor/>
            <Artcontent/>
            <Footer/>
        </React.Fragment>
    )
}

export default Artpage;