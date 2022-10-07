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
import Improve1 from './ArtImg/Improve1.jpg'
import Improve2 from './ArtImg/Improve2.jpg'
import Improve3 from './ArtImg/Improve3.jpg'
import Improve4 from './ArtImg/Improve4.jpg'
import ImproveMain from './ArtImg/ImproveMain.jpg'

const Artsections = [
    {
        img: '',
        text: 'Webminers is a small company that is working with little to no budget. All we have is a Domain on ' +
            'a yearly subscription and a dream, but we are stretching the abilities of what you can do for free.\n' +
            '\n' +
            'For starters, Webminers will not stay like this forever. We are planning many improvements that will ' +
            'not only ease the growth of our brand but the experience for readers as well.\n' +
            '\n' +
            '\n' +
            'The first improvement that we plan to implement is a new website that is more stylish, easier to ' +
            'upload to blogs, and where we are self-sufficient. To date, we have been relying on the base website ' +
            'of templates or other platforms like google that are slightly tweaked. This will not be forever ' +
            'though as we will be expanding more than you may expect.',
    },
    {
        img: Improve1,
        text: 'The first step of expansion is implementing our code on the website. We want to truly be the ' +
            'owners of everything we put out to the public and this includes our interface. Our website is ' +
            'currently from the [blogger platform](https://blogger.com/) with google where we chose a ' +
            'template from many.\n' +
            '\n' +
            '\n' +
            'We are moving away from this because there is very little originality to this template and we ' +
            'knew this from the start. As a writer I know for a fact my blogs will be unique and no one else ' +
            'is doing what I am doing in the entire world. \n' +
            '\n' +
            '\n' +
            'As a part of Webminers however, there can be websites like mine that are found across the web ' +
            'that look almost exactly like mine. To be our own company we must expand to a more original ' +
            'face of our brand.\n' +
            '\n' +
            '\n' +
            'The steps needed to get there include programming and making a website. This may be a given ' +
            'but the issue is how. As I am not a professional web developer and do not currently work with ' +
            'one, there is a gap in our ability to expand.\n' +
            '\n' +
            '\n' +
            'This is where our new writing series comes in. I will be learning the steps needed to do this ' +
            'ourselves. This will not be a professionally made website but a hobbyist making a blog for Webminers.'
    },
    {
        img: Improve2,
        text: 'Learning how to make a website is not foreign to me, yet this will still be a challenge. [I have ' +
            'experience with the basics](/intro-tech-writing) like HTML and CSS. I even webscraped websites and ' +
            'learned even more about ' +
            'how they work. I also have projects in my belt with [Ruby on Rails 7]' +
            '(https://rubyonrails.org/). \n' +
            '\n' +
            '\n' +
            'This time is different though. I hope to make an AJAX(Asynchronous Javascript And XML) website that ' +
            'is with the times and able to be upgraded. This is a big feat for me as I have previously avoided ' +
            'Javascript because I knew it was a time-consuming language to get a hold of learning.\n' +
            '\n' +
            '\n' +
            'I will be sharing my steps on this blog now and then for anything from embarrassing mistakes to ' +
            'amazing accomplishments. Javascript is not only good for Web Development as well. Javascript has ' +
            'been seen in multiple [paths](https://roadmap.sh/roadmaps) and [technical careers](/jobs-for-the-' +
            'technical-future). For example, Blockchain Developers, Data Science, and much more as it is a ' +
            'very versatile language. \n' +
            '\n' +
            '\n' +
            'After learning [Javascript](https://roadmap.sh/javascript), I will then get into learning the full ' +
            'stack tools that I need to furnish ' +
            'the webminers website. Stay tuned because this is going to be a hard and time-consuming journey but ' +
            'will be worth it.\n' +
            '\n' +
            '\n' +
            'Webminers has much to come.'
    },
    {
        img: Improve3,
        text: 'Once we have the Website up and running next comes the UX, also known as [User Experience]' +
            '(https://binarapps.com/why-is-user-experience-important-the-starting-point-for-beginners/). ' +
            'This will include making the website as user-friendly as it can be.\n' +
            '\n' +
            '\n' +
            'This includes a good-looking interface that is appealing to viewers and an easily navigable set ' +
            'of pages. Many things need to be done to make sure that there are no issues that readers run into.\n' +
            '\n' +
            '\n' +
            'After this step of fully updating the website and making sure that everything is acceptable, we ' +
            'will add more functionalities. This means viewer profiles and a chance for people to write on our ' +
            'website with their customizable subdomain. \n' +
            '\n' +
            '\n' +
            'This does not mean that they will have their blog, but a sub-blog of webminers at the time ' +
            'of release. There will be a much more detailed update when it gets to that point in the checklist ' +
            'of tasks to do.\n' +
            '\n' +
            '\n' +
            'There are many more upgrades that are even more exciting that are planned but at the moment are not ' +
            'able to be released to viewers. If you want these sorts of updates, make sure you sign up for the ' +
            'Webminers’ Newsletter to get notified directly to your email about plans and experiences before ' +
            'anyone else.\n' +
            '\n' +
            '\n' +
            'As a Technical Writer, I take it as my duty to challenge myself. This blog is not just about cool ' +
            'topics but also about the journey of webminers. We strive to always be improving and adding more ' +
            'features to readers to continue to bring value.\n' +
            '\n' +
            '\n' +
            'Webminers is a passionate brand and even though growth requires learning whole other topics like a ' +
            'programming language, we enjoy improving and learning more every day. If you have any preferences ' +
            'about whether or not we should include actual code embedded in future blogs make sure to let us ' +
            'know in the comments below.'
    },
    {
        img: Improve4,
        text: 'As I learn more and more about the language Javascript, I will continue to apply it in multiple ' +
            'different ways for this blog. Whether it is Data Engineering, or just making a basic calculator. ' +
            'I hope to inspire many of you to learn more about this language and go outside of your comfort zone.\n' +
            '\n' +
            '\n' +
            '\n' +
            'Technical Writing has helped test me in this way. As learning something new is never truly foreign ' +
            'to me. The more you test yourself to learn something new, the easier it is to take on new topics. ' +
            'Challenging yourself is the only way to become a better version of yourself.\n' +
            '\n' +
            '\n' +
            'Otherwise, you won’t get to experience the variety of opportunities and assortment of benefits that ' +
            'the world has to offer. You’d be shocked by the amount of knowledge that is just floating out ' +
            'there waiting to be discovered.\n' +
            '\n' +
            '\n' +
            'Take that step forward and never stop learning!'
    }
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
                        Changes Coming to Webminers for an Improved Experience
                    </Card.Title>
                    <Card.Text style={{padding: '5px 0 0 10%', fontStyle: 'italic'}}>
                        Published on: Sep 28 2022
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
                <img src={ImproveMain} style={{width: '98%', margin: '0 1%', borderRadius: '15px'}} alt="logo"/>
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

function WebChange() {
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

export default WebChange;