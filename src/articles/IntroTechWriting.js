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
import Intro1 from './ArtImg/Intro1.jpg'
import Intro2 from './ArtImg/Intro2.jpg'
import Intro3 from './ArtImg/Intro3.jpg'
import IntroMain from './ArtImg/IntroMain.jpg'

const Artsections = [
    {
        img: '',
        text: 'My name is Justin as some of you may know. At the time of writing this, I am a college student at ' +
            'George Mason University. I come from a family that believes that college is the way to go and even though ' +
            'I am in college I can say without a doubt that my degree will have very little effect on the success of my ' +
            'future. I am studying in the field of Data Science and this is one of the reasons I am starting this ' +
            'technical blog.\n' +
            '\n' +
            'Here are a few things about me:' +
            '\n' +
            '- I am a quick learner' +
            '\n' +
            '- I am just at the beginning of my Technical Copyriting career' +
            '\n' +
            '- I hope to bring value to my viewers from a field I\'m passionate about'
    },
    {
        img: Intro1,
        text: 'I hope to bring information out that is enjoyable and easy to understand no matter what the topic is. ' +
            'This whole blogging thing is very daunting at first but the only way to learn is to just do it and here I am.\n' +
            '\n' +
            'Writing hasn\'t always been on my agenda for my future, however. In high school, I did not like writing or ' +
            'reading that much and I feel it was because rather than just not liking the two, my actual grievances ' +
            'remained with the topics that I was reading and writing about.\n' +
            '\n' +
            'As I began college there was so much about majors and minors and classes that I did not quite know and was ' +
            'told that I would find out along the way.\n' +
            '\n' +
            'I knew I couldn\'t live like this and started to research. I looked into my major and all supporting majors ' +
            'or anything relating to tech. I was taking a class in Python, which I went through enjoying and hoping to find ' +
            'something similar. I knew of the Computer Science major but had this feeling it wouldn\'t really fit me.\n' +
            '\n' +
            'So I stayed in the Engineering major I picked which was what my family encouraged me to go into because ' +
            'I liked to solve problems but I kept the thought of switching in the back of my mind.\n' +
            '\n' +
            'Next semester comes along and I find a data mining class is a mid-upper level programming class with no ' +
            'prerequisites so I take it. This class took me to a whole new level of interest in programming.\n' +
            '\n' +
            'I began researching the field and major to realize deep down this is the type of classes I would actually ' +
            'enjoy.\n' +
            '\n' +
            'Now, this all might sound very strange how invested I was when I just said earlier in my blog that my ' +
            'degree won\'t be my major cause of success but bear with me because that is still coming.\n' +
            '\n' +
            'After swapping majors I told my mom and she was a little concerned but I knew that this field had the ' +
            'opportunities that I needed and I was happy with my decision. I had researched a ton before swapping to' +
            ' make sure for sure I was ready for this and I knew for a fact I was.\n' +
            '\n' +
            'After this began the biggest step of my life'
    },
    {
        img: Intro2,
        text: 'I started planning out all the classes that interested me in the major, with a spreadsheet and everything. I was super interested in this new field I had come across.\n' +
            '\n' +
            'I took online classes and learned supporting skills like web development.\n' +
            '\n' +
            'I began studying web development to be able to use this skill for my own website as either a portfolio ' +
            'or a business site.\n' +
            '\n' +
            'This became a very time-consuming task to learn but I have coding experience so I should have it down ' +
            'in a month. I was completely wrong.\n' +
            '\n' +
            'There is so much to learn and I respect current web developers a lot from this experience. I am still ' +
            'fine-tuning my skills but for now, I do not see myself making websites professionally in the future.\n' +
            '\n' +
            'While learning Web Development I wanted to also become a better Data Scientist so that when the time ' +
            'came I would be good enough to make a profession out of it. I learned about Data Visualization and ' +
            'Data Mining.\n' +
            '\n' +
            'As I looked into both fields I came across a very interesting class and in the end, it introduced me ' +
            'to Data Science freelancing.\n' +
            '\n' +
            'I was hooked. I had always been interested in being an entrepreneur and I saw this as my way to finally ' +
            'reaching my dream. So I researched and researched some more.\n' +
            '\n' +
            'I realized that I would have to leave behind web development, for now, to continue pursuing freelance ' +
            'Data Science.\n' +
            '\n' +
            'I enjoyed what I did and this motivated me to do more. I experimented with web scraping and continued ' +
            'to learn more and more in this field to expand my capabilities.\n' +
            '\n' +
            'After weeks and weeks of working towards my goal of freelancing, I found out the hard way how difficult ' +
            'getting your first paid gig could be.'
    },
    {
        img: Intro3,
        text: 'I saw myself moving very slowly and rethought what I was providing. I do have not a lot of credibility ' +
            'and am just starting out.' +
            '\n' +
            'How would I make money?\n' +
            '\n' +
            'I started looking into partnering skills and came across how useful writing is. I checked out technical ' +
            'copywriting and realized how well this fit me.\n' +
            '\n' +
            'I loved to learn about all sorts of technical fields, I am studying Data Science, and I enjoy explaining ' +
            'things to those who might not quite be able to find out the answer just by googling it.\n' +
            '\n' +
            'I saw how important it was for companies to describe their products in a way that anyone could understand ' +
            'and increase customer engagement.\n' +
            '\n' +
            'When someone knows all the ins and outs and is passionate about their product they can struggle to find ' +
            'the words that others will understand. \n' +
            '\n' +
            'I have personal experience with this from my own path through the Technology field. So I knew what I ' +
            'wanted to do and the next step is how to do it. I looked into the skills and actions of a technical ' +
            'writer and worked into what I am today. \n' +
            '\n' +
            'I am by no means a 100% expert but I will get there eventually.\n' +
            '\n' +
            'I never thought I would be writing like this, but I was led to it by my interests, and wanting to learn ' +
            'about so many different things in the technology field drew me in.\n' +
            '\n' +
            'The only way to go from here is up and I appreciate anyone who has made it this far. This is not the ' +
            'usual format for future blogs so if this was not the best suiting article for you check out my other ' +
            'ones.\n' +
            '\n' +
            'I also have my business email linked on my homepage and look forward to hearing from anyone.\n' +
            '\n' +
            'Welcome to the next chapter of my journey...'
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
                        Introduction To Justin Becoming A Technical Copywriter
                    </Card.Title>
                    <Card.Text style={{padding: '5px 0 0 10%', fontStyle: 'italic'}}>
                        Published on: Sep 1 2022
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
                <img src={IntroMain} style={{width: '98%', margin: '0 1%', borderRadius: '15px'}} alt="logo"/>
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

function IntroWriting() {
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

export default IntroWriting;