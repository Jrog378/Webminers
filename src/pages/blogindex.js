import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, {useState} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../stylesheets/Side-half.css'
import '../stylesheets/Navbar.css'
import '../stylesheets/App.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {CardGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import WhiteLogo from "../WebImg/WhiteLogo.png";
import lock from "../WebImg/computer-security-lock-and-payment.jpg";
import ReactMarkdown from "react-markdown";

const blogposts = [
    {
        id: 1,
        title: 'Changes Coming to Webminers for an Improved Experience',
        date: 'Jan 1 2022',
        text: '.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for',
        url: '/article'
    },
    {
        id: 2,
        title: 'What Makes a Good Technical Copywriter And Why You Need One',
        date: 'Jan 2 2022',
        text: '.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for',
        url: '/blog'
    }]

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
        <div className="App">
            <header className="App-header">
                <img src={WhiteLogo} className="App-logo" alt="logo"/>
                <h1>
                    Welcome to the <code>webmienrs/website.js</code> project
                </h1>
                <br/>
                <p>New Dynamic Homepage is in the makes, for now we just have this spinny thing and <a
                    style={{fontSize: 'x-large'}} href='/blog'>blogs</a> :)</p>
            </header>
        </div>
    );
}

function Bloggrid() {
    const Bloggers = blogposts.map(content =>
        <Col style={{marginTop: '20px'}}>
            <Card style={{height: '100%'}}>
                <Row className={'blog-row'}>
                    <Row>
                        <Col>
                            <Card.Body style={{paddingBottom: 0}}>
                                <Card.Title key={content.id}>{content.title}</Card.Title>
                            </Card.Body>
                        </Col>
                    </Row>
                    <Col>
                        <Card.Body style={{paddingTop: '8px'}}>
                            <Card.Text>
                                <ReactMarkdown>{content.text}</ReactMarkdown>
                            </Card.Text>
                            <Card.Text style={{fontStyle: 'italic', display: 'inline-block'}} >{content.date}</Card.Text>
                            <Button href={content.url} style={{float: 'right', marginBottom: '10px'}} variant="outline-success"
                                    size='sm'>Read More...</Button>
                        </Card.Body>
                    </Col>
                    <Col style={{margin: 'auto'}}>
                        <Card.Img variant="top" src={lock} className={'blog-img'} style={{margin: 'auto'}}/>
                    </Col>
                </Row>
            </Card>
        </Col>)
    return (
        <CardGroup style={{margin: '15px'}}>
            <Row xs={1} md={2} className="g-4" style={{borderRadius: '15px'}}>
                {Bloggers}
            </Row>
        </CardGroup>
    );
}

function Footer() {
    return (
        <footer style={{color: 'white', textAlign: 'center'}}>
            <p>Copyright: <span>{new Date().getFullYear()}</span> © Webminers</p>
        </footer>
    );
}

function Blogpage() {
    return (
        <React.Fragment>
            <CollapsibleExample/>
            <Example/>
            <BrandExample/>
            <Reactor/>
            <Bloggrid/>
            <Footer/>
        </React.Fragment>
    )
}

export default Blogpage;