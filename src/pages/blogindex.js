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
import ImproveMain from '../articles/ArtImg/ImproveMain.jpg'
import GoodWriterMain from '../articles/ArtImg/GoodWriterMain.jpg'
import IntroMain from '../articles/ArtImg/IntroMain.jpg'
import PythonDataMain from '../articles/ArtImg/PythonDataMain.jpg'
import SatMain from '../articles/ArtImg/SatMain.jpg'
import TechieMain from '../articles/ArtImg/TechieMain.jpg'
import VisualMain from '../articles/ArtImg/VisualMain.jpg'

const blogposts = [
    {
        id: 8,
        title: 'Changes Coming to Webminers for an Improved Experience',
        date: 'Sep 28 2022',
        text: 'Improvements to Webminers are necessary and this is a brief overview of some of the things we have planned to come for readers.',
        url: '/changes-coming-to-webminers',
        img: ImproveMain
    },
    {
        id: 7,
        title: 'What Truly Makes a Good Technical Copywriter Stand Out',
        date: 'Sep 19 2022',
        text: 'How to become a better technical copywriter and develop your in-demand skills to provide these services to businesses.',
        url: '/what-makes-a-good-technical-copywriter',
        img: GoodWriterMain
    },
    {
        id: 6,
        title: '6 Growing Jobs To Take Advantage of Our Technical Future',
        date: 'Sep 14 2022',
        text: 'Jobs that will not get wiped out by the technical wave of advancements. These jobs will only become more in need as time goes on.',
        url: '/jobs-for-the-technical-future',
        img: TechieMain
    },
    {
        id: 5,
        title: 'Satellites - The Space Spies That Watch Over The World',
        date: 'Sep 11 2022',
        text: 'Explaining the good and bad of satellites with where we draw the line between spying on people and privacy.',
        url: '/satellite-space-spies',
        img: SatMain
    },
    {
        id: 4,
        title: 'Python Has Been Taking Over The Data Science World',
        date: 'Sep 7 2022',
        text: 'Python has been hitting the world by storm, becoming the most popular programming language, especially in Data Science, but for good reason',
        url: '/python-taking-over-data-science',
        img: PythonDataMain
    },
    {
        id: 3,
        title: 'Data Visualization - A Profitable Data Science Subcategory',
        date: 'Sep 6 2022',
        text: 'Data Visualization is in Data Science but not many know it can be it\'s own profitable profession.',
        url: '/profitable-data-vis',
        img: VisualMain
    },
    {
        id: 2,
        title: 'Ethical Hackers Are Needed More Than Ever In Our Future',
        date: 'Sep 5 2022',
        text: 'Hackers of all types are very active in this age of technology. We go into how this will affect us and what to watch out for.',
        url: '/ethical-hacking-is-needed',
        img: lock
    },
    {
        id: 1,
        title: 'Introduction To Justin Becoming A Technical Copywriter',
        date: 'Sep 4 2022',
        text: 'This is how our writer Justin became a Technical Copywriter from starting out by studying Data Science',
        url: '/intro-tech-writing',
        img: IntroMain
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
                        <Card.Img variant="top" src={content.img} className={'blog-img'} style={{margin: 'auto'}}/>
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