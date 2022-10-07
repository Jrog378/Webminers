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
import ReactMarkdown from "react-markdown";
import Sat1 from './ArtImg/Sat1.jpg'
import Sat2 from './ArtImg/Sat2.jpg'
import Sat3 from './ArtImg/Sat3.jpg'
import Sat4 from './ArtImg/Sat4.jpg'
import SatMain from './ArtImg/SatMain.jpg'

const Artsections = [
    {
        img: '',
        text: 'Satellites have accomplished a large multitude of achievements from quality communication ' +
            'to NASA’s Manned Space Station, the [ISS(International Space Station)](https://www.nasa.gov/' +
            'missions/science/f-satellites.html).\n' +
            '\n' +
            'Most people, however, do not recognize the large impact that they have truly provided on technology.'
    },
    {
        img: Sat1,
        text: 'There are over [5500 operating Satellites](5500 operating Satellites) across the entire world. Some ' +
            'are so advanced that they ' +
            'have helped track down criminals fleeing the authorities. Compared to the first ever satellite, a ' +
            'large metal sphere launched into space, you can see how far we have come.\n' +
            '\n' +
            'The advancements to date have been amazing and we have even moved into video recording with these ' +
            'satellites. This has a lot of uses where monitoring a specific area would be very helpful.\n' +
            '\n' +
            'If you thought that recording with this space technology was progressive, then you’ll be happy to ' +
            'hear that satellites have been used by the military to create 3d images or figures of areas of land ' +
            'as well. \n' +
            '\n' +
            '\n' +
            'This means that rather than going in person or just using a single picture from the sky, we are now ' +
            'able to develop 3d figures to see the whole terrain and any obstacles that would otherwise go unnoticed.\n' +
            '\n' +
            '\n' +
            '\n' +
            'In Data Science, which is what [I’m studying along with my technical copywriting](/intro-tech-writing), ' +
            'spatial data is ' +
            'something that I foresee encountering during my education and definitely with real businesses. \n' +
            '\n' +
            'Spatial Data is data that belongs to a specific location or region. Satellites assist in both ' +
            'gathering this data and assigning it to specific places.\n' +
            '\n' +
            '\n' +
            '\n' +
            'If you have ever seen a map on the news with colors or numbers to explain a topic, that graphic has ' +
            'spatial data.\n' +
            '\n' +
            '\n' +
            '\n' +
            'In the medical field, knowing what areas or regions are at most risk or danger uses spatial data to assign numbers to a place.'
    },
    {
        img: Sat2,
        text: 'Spatial Data and satellite investigation advancements have also significantly contributed to ' +
            'counterintelligence in the US. For example, Osama Bin Laden had been found with the help of satellites.\n' +
            '\n' +
            '\n' +
            'There have been many instances where our country gathers important information, just like this, ' +
            'from other places across the world with Space Technology.\n' +
            '\n' +
            '\n' +
            'Alongside exploring other countries, Satellites have been used to explore Space itself. If you have ' +
            'heard a video of strange sounds in the ocean, [what satellites have found](https://www.nasa.gov/vision/' +
            'universe/features/halloween_sounds.html) will sound even crazier.\n' +
            '\n' +
            '\n' +
            'Satellites have heard the sounds of plasma and more creepily, unidentified noises. This is not the ' +
            'only space discovery as satellites also use advanced radar to help explore unknown areas of the galaxy. \n' +
            '\n' +
            '\n' +
            'The future of space exploration is not just a human in a spaceship going out and exploring but it ' +
            'is much more advanced. \n' +
            '\n' +
            '\n' +
            'Rather than traveling, the future of space travel may rely on space technology like satellites. ' +
            'As this technology advances, we will only be able to take it further and have more accuracy.\n' +
            '\n' +
            '\n' +
            'Whether looking for objects to rebound off of or even seeking out human life, there is so much ' +
            'to the future of space.\n' +
            '\n' +
            '\n' +
            '\n' +
            'Another addition that most people will not even realize is that 5 planets other than Earth also ' +
            'have satellites orbiting them. \n' +
            '\n' +
            '\n' +
            'Now all these advancements are great and all but what does having satellites looking at earth ' +
            'mean for the public that can be watched at any time?\n' +
            '\n' +
            '\n' +
            'There are certainly concerns that we are being constantly watched and photographed without even ' +
            'realizing it. \n' +
            '\n' +
            '\n' +
            'The assumed privacy when no one is around is fake when you think about the cameras of the sky ' +
            'looking down at your every move.\n' +
            '\n' +
            '\n' +
            'The most concerning part about everything is how easily these satellites can be hacked if the ' +
            'wrong person gets into contact with them.'
    },
    {
        img: Sat3,
        text: 'Hackers can spy on individuals and groups to gain information or steal older records. This is not ' +
            'just domestic hackers either. Other countries have Hackers just for satellite hacking and taking over ' +
            'satellites of any form for their gain.\n' +
            '\n' +
            '\n' +
            'Now at the moment, hackers are on the rise. It is even more dangerous how your location could be ' +
            'accessed and tracked by someone trying to kill you. I have even written about [the future of hackers]' +
            '(/ethical-hacking-is-needed) ' +
            'and I advise you to read over it to learn more.\n' +
            '\n' +
            '\n' +
            'To explain how serious this is, imagine a hitman who has access to these satellite images and videos ' +
            'that are covering the entire world. \n' +
            '\n' +
            '\n' +
            'There would be nowhere to hide other than underground tunnels.\n' +
            '\n' +
            '\n' +
            'Not only would this person know where anyone is but they can track police and military patterns. ' +
            'International hackers can find information to track down secret campaigns or locations. \n' +
            '\n' +
            '\n' +
            'There are so many possibilities for how others could use these advanced sky cameras for the wrong ' +
            'reasons.\n' +
            '\n' +
            '\n' +
            'Even though there is a lot of good that comes with this technology, there are always going to be bad ' +
            'people who want the opposite with it'
    },
    {
        img: Sat4,
        text: 'Precautions must be of high importance now that we know what is at stake. Security must be ' +
            'top-notch before the recording should even begin to happen so that only those who should see what ' +
            'Satellites find will have access. \n' +
            '\n' +
            '\n' +
            'After safety must come the security of the public. This means that people aren\'t being watched in ' +
            'their homes or other areas of private property where those property owners do not wish to be recorded. \n' +
            '\n' +
            '\n' +
            'Photos should not be taken unless needed and videos should not be taken at all unless there is an ' +
            'ongoing investigation that would require long amounts of time to be recorded of someone’s private ' +
            'and personal life.\n' +
            '\n' +
            '\n' +
            'Once the people are safe and left to their privacy then it is time for this space technology to do ' +
            'its job. \n' +
            '\n' +
            '\n' +
            'Recording everyone without caring about privacy is still supported by many organizations but ' +
            'with great Technological Advancements come no extra rights to sacrifice the privacy of the people ' +
            'for “the greater good”.\n' +
            '\n' +
            '\n' +
            'Without a doubt, satellites will only get stronger, clearer, and more plentiful and will be capable ' +
            'of even more than they are today. I cannot wait to see what these devices can do for our future.\n' +
            '\n' +
            '\n' +
            'Remember to smile because chances are you’re on camera!'
    },
]

function Artcontent() {
    const Sections = Artsections.map(sections =>
        <Card style={{borderStyle: 'none', background: 'none', padding: '0 8%'}}>
            <Card.Img className={'artimgs'} variant="top" src={sections.img}/>
            <Card.Body style={{paddingBottom: 0}}>
                <Card.Text style={{paddingTop: '0px'}}>
                    <ReactMarkdown>{sections.text}</ReactMarkdown>
                </Card.Text>
            </Card.Body>
        </Card>)
    return (
        <>
            <Card
                style={{alignItems: 'center', display: 'flex', borderRadius: '35px', background: 'rgb(213, 233, 223)'}}>
                <Card style={{borderStyle: 'none', background: 'none'}}>
                    <Card.Title style={{textAlign: 'center', fontSize: 'xx-large', padding: '20px 3% 0 3%'}}>
                        Satellites - The Space Spies That Watch Over The World
                    </Card.Title>
                    <Card.Text style={{padding: '5px 0 0 10%', fontStyle: 'italic'}}>
                        Published on: Sep 11 2022
                    </Card.Text>
                </Card>
                {Sections}
                <br/>
            </Card>
        </>
    );
}

function Reactor() {
    return (
        <div>
            <header>
                <img src={SatMain} style={{width: '98%', margin: '0 1%', borderRadius: '15px'}} alt="logo"/>
            </header>
        </div>
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

function Footer() {
    return (
        <footer style={{color: 'white', textAlign: 'center', padding: '10px'}}>
            <p>Copyright: <span>{new Date().getFullYear()}</span> © Webminers</p>
        </footer>
    );
}

function SatSpy() {
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

export default SatSpy;