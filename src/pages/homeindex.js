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
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import WhiteLogo from '../WebImg/WhiteLogo.png'
import Braveimg from '../articles/ArtImg/Braveimg.jpg'
import Signalimg from '../articles/ArtImg/Signalimg.png'
import Protonimg from '../articles/ArtImg/ProtonVPN.jpg'
import Duckimg from '../articles/ArtImg/DuckGoimg.jpg'
import ReactMarkdown from "react-markdown";

const TechContent = [
    {
        title: 'Brave Browser',
        text: 'Brave Browser is probably one of the most recognizable decentralized browsers and this can be ' +
            'credited due to having a very fast interface with a built in ad and cookie blocker. There is extra ' +
            'protection in detecting when websites are trying to steal your information and lets you avoid those links. ' +
            'Brave also shows you how much time and bandwidth you have saved on the browsers homepage ' +
            'and provides you with earnings for their cryptocurrency based on your usage with their application.',
        url: 'https://brave.com/',
        img: Braveimg
    },
    {
        title: 'Signal Messaging App',
        text: 'The biggest pivital moment for me was when I started getting ads for items that i have never searched ' +
            'for yet texted about and next time im browsing, I\'m getting ads based on my conversation. After a long' +
            ' search for messaging apps made for security of data and messages, I came across multiple options. None' +
            ' of these stood out to me though. When I found signal it was completely different, as it is fast ' +
            'secure, reliable, and very easy to sign up for and use.',
        url: 'https://www.signal.org/',
        img: Signalimg
    },
    {
        title: 'Proton VPN',
        text: 'Proton VPN has been my go to VPN for as long as I can remember. I am still using the free version but' +
            ' will be upgrading to the paid version very shortly as the extra capability would be very well used ' +
            'Proton is super easy to connect to with the click of a button and is very fast a reliable, unlike other' +
            ' free VPNs. Proton also has [other products](https://proton.me/) as well that I will be looking into ' +
            'using very soon as well',
        url: 'https://protonvpn.com/',
        img: Protonimg
    },
    {
        title: 'DuckDuckGo IOS Browser',
        text: 'DuckDuckGo is my choice of mobile browser for many reasons, however the reason I started using it is' +
            'not quite because of the features, more of other browsers featuring it through integration. From testing' +
            'out mobile apps I came cross the name and recognized it. After that I discovered it would be my favorite. ' +
            'With Automatic history wiping along with ad and cookie blockers, it is the easiest to use even comparing' +
            'to Brave\'s application. They are in production of a computer browser and I cannot wait to get a hold of it' +
            'as soon as it is released',
        url: 'https://duckduckgo.com/spread',
        img: Duckimg
    },
]

function CollapsibleExample() {
    return (
        <Navbar sticky='top' id='smallnav' collapseOnSelect expand="lg" bg="dark" variant="dark">
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
    )
        ;
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
            <Navbar sticky='top' id='bignav' bg="dark" variant="dark">
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
                <p>New Dynamic Homepage is in the makes, for now we just have this spinny thing and <a style={{fontSize: 'x-large'}} href='/blog'>blogs</a> :)</p>
            </header>
        </div>
    );
}

function Techgrid() {
    const TContent = TechContent.map(content =>
        <Col style={{marginTop: '20px'}}>
            <Card>
                <Row className={'tech-row'}>
                    <Col>
                        <Card.Body>
                            <Card.Title>{content.title}</Card.Title>
                            <Card.Text>
                                <ReactMarkdown>{content.text}</ReactMarkdown>
                            </Card.Text>
                            <Button href={content.url} style={{float: 'right', marginBottom: '10px'}} variant="outline-success" size='sm'>View Product...</Button>{' '}
                        </Card.Body>
                    </Col>
                    <Col>
                        <Card.Img variant="top" src={content.img} className={'tech-img'}/>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
    return (
        <CardGroup style={{margin: '15px'}}>
            <Row xs={1} className="g-4" style={{borderRadius: '15px'}}>
                {TContent}
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

function Homepage() {
    return (
        <React.Fragment>
            <CollapsibleExample/>
            <Example/>
            <BrandExample/>
            <Reactor/>
            <Techgrid/>
            <Footer/>
        </React.Fragment>
    )
}

export default Homepage;