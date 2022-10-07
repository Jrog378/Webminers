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
import GoodWriter1 from './ArtImg/GoodWriter1.jpg'
import GoodWriter3 from './ArtImg/GoodWriter3.jpg'
import GoodWriter4 from './ArtImg/GoodWriter4.jpg'
import GoodWriter5 from './ArtImg/GoodWriter5.jpg'
import GoodWriter6 from './ArtImg/GoodWriter6.jpg'
import GoodWriterMain from './ArtImg/GoodWriterMain.jpg'

const Artsections = [
    {
        img: '',
        text: 'Technical Copywriting or Writing has so many opportunities for almost anyone who is willing to ' +
            'work for it. I have learned so much from this field, but nothing comes without working for it.\n' +
            '\n' +
            '\n' +
            'Even though opportunities are plentiful, they can still be hard to find. There are specific ' +
            'techniques to master Technical Copywriting and will by no means be handed to you. Writing may ' +
            'come to people naturally but every type of writing(blogs, emails, websites) is different and ' +
            'companies can want something entirely different than what you have done in the past.\n' +
            '\n' +
            '\n' +
            'Here is my list of what makes a good Technical Writer for you to follow if you wish to start ' +
            'your journey to mastering the mystical art of Explanation and Persuasion.\n' +
            '\n' +
            '\n' +
            '1. Work on  yourself and your trade\n' +
            '\n' +
            '2. Read your work out loud\n' +
            '\n' +
            '3. Study the trade with good resources\n' +
            '\n' +
            '4. Provide free value\n' +
            '\n' +
            '5. Always learn and grow'
    },
    {
        img: GoodWriter1,
        text: 'Practice is one of the first things I did when I started learning how to Copywrite and I ' +
            'don’t regret a single part of it. It showed me what I was getting into before really making any ' +
            'commitment. You might be shocked to hear this but I quit the first time tried copywriting.\n' +
            '\n' +
            '\n' +
            'When I first started learning I was not sure who I wanted to even write for and felt completely ' +
            'lost. Which, believe it or not, was a good thing! It led me to my path now as I started to ' +
            'learn about other fields and my possibilities. I realized I loved learning about them all.\n' +
            '\n' +
            '\n' +
            'I am a Tech guy and knew where I wanted to work, but not what yet. I am studying Data Science ' +
            'and know I can do much more. So after some exploration of other subfields I came back! I knew ' +
            'that writing for anyone in the tech industry would only bring me good experiences and teach me ' +
            'about products and companies I could have never imagined.\n' +
            '\n' +
            '\n' +
            'Through practice and testing of copywriting, I found my focus on Data Science. You can start ' +
            'your practice anytime anywhere. Starting small is my best advice as many of the frameworks for ' +
            'your small work, like emails, can also be used for longer pieces, like sales pages. Starting small ' +
            'can also help you refine specific skills and get used to writing until adding length comes naturally ' +
            'to you.\n' +
            '\n' +
            '\n' +
            'After becoming comfortable writing small pieces, two things happened. First, you have gotten your ' +
            'flow where you can write and it comes almost naturally to you. The second part is even more important, ' +
            'as you have set yourself up with a framework that can be expanded into larger pieces.'
    },
    {
        img: GoodWriter3,
        text: 'I am combining these next two because they are very similar. The mind is an extremely confusing ' +
            'thing as it may think one thing for absolutely no reason. \n' +
            '\n' +
            '\n' +
            'As you are writing, the words you put on the page might seem amazing, as if they are flawless, but ' +
            'the moment you read over them you will most likely find tons of mistakes. \n' +
            '\n' +
            '\n' +
            'This can be amplified when you read out loud. Even when reading in your head, you can find even ' +
            'more mistakes and hear hour it sounds to a reader. You can completely skim over a mistake when writing ' +
            'that your mind tells you is fine. Reading out loud is one the easiest tools you can use to improve ' +
            'your writing whether this is to a friend or yourself. \n' +
            '\n' +
            '\n' +
            'I almost always make mistakes in my writing, but I read out loud to ensure that the final product is ' +
            'exactly how I want it. \n' +
            '\n' +
            '\n' +
            'Studying other people’s work can help a ton as well whereas you think your writing is mistakeless ' +
            'and then you read someone else’s writing and notice what they are doing right and comparing it to ' +
            'your work brings out any mistakes that remain in your piece.\n' +
            '\n' +
            '\n' +
            'Reading a book every day is highly recommended by many successful figures with good reason. There ' +
            'are so many benefits to reading books and other people’s work as you can learn more from the books ' +
            'as well as freshen up your mind with this author’s writing style.\n' +
            '\n' +
            '\n' +
            'People like me, who don’t like reading that much, might struggle with reading every day to better ' +
            'their work. What I found to be super helpful however is reading right in the middle of work or ' +
            'instead of taking a break on social media, spending this time reading. \n' +
            '\n' +
            '\n' +
            'This works so well because I can still feel relaxed and destressed but I am technically still ' +
            'working. Easing your load with reading can be beneficial in itself for your workload too. My ' +
            'personal goal for reading is a book a week and [this challenge is highly recommended by others]' +
            '(https://medium.com/readers-digests/i-have-read-52-books-a-year-for-4-years-heres-how-my-life-' +
            'changed-ceadc40b76c1) as well'
    },
    {
        img: GoodWriter4,
        text: 'Working for free is a confusing topic for many people and isn’t always the most popular opinion ' +
            'but let me explain why I believe in this technique. Imagine someone comes up to you with a super ' +
            'great idea and says watch me paint this sunset for you.\n' +
            '\n' +
            '\n' +
            '\n' +
            'Next, this person starts to paint this gorgeous sunset but just finishes the sun and says “if you ' +
            'want me to add to this painting, I will for $20”. You can tell that this artist is really good just ' +
            'by the sun and you know that if he adds to the painting, the whole thing will be worth your money.\n' +
            '\n' +
            '\n' +
            'You agree and the artist paints his amazing painting and you pay them the $20. Both people go ' +
            'home happy. This can be translated into something like the first email of an email campaign that ' +
            'you hope to write for someone.\n' +
            '\n' +
            '\n' +
            'You can offer the first email for free so they get a taste and know how good of a writer you ' +
            'are, but the campaign is an incomplete product. If they like it enough they would love to get ' +
            'the whole campaign for a price.\n' +
            '\n' +
            '\n' +
            'As this article is not business advice, make sure you know your worth and don’t let people ' +
            'demand products for free to where you give them in hopes for a client. You could end up like Nigel ' +
            'Graber, who [made £3200 off of his free value](https://copywritercollective.com/offering-samples/' +
            '#Freeloaders).'
    },
    {
        img: GoodWriter5,
        text: 'Practicing was already mentioned but this type of practice is different. As you are ' +
            'interacting with real people this time there is more to Technical Copywriting than just writing. \n' +
            '\n' +
            '\n' +
            'You have to interact with people and get clients, which will also take practice. Keep your head ' +
            'high though as if you have made it this far then you are further ahead than way over half those ' +
            'who attempt this profession. \n' +
            '\n' +
            '\n' +
            'Keep your head high and work on your people skills with this practice. You will still be working ' +
            'on your writing but you will come across many other things that you are not very good at. Don’t ' +
            'worry as everything takes time.\n' +
            '\n' +
            '\n' +
            'To help gauge your progress, after developing your people skills, you can look into [getting a ' +
            'mentor](https://www.forbes.com/sites/ellevate/2021/05/20/how-do-i-find-a-mentor/?sh=4c9be21f55e0)' +
            ' as they can help guide you and will be 100 percent honest with you. They want you to ' +
            'grow and will keep you in check.'
    },
    {
        img: GoodWriter6,
        text: 'Technical copywriting for me has been a life-changing journey and I am becoming a better and ' +
            'better writer every day as I am sure you will too. Feel free to follow [Webminers’ LinkedIn]' +
            '(https://www.linkedin.com/company/juswebminers) to ' +
            'follow along with the journey or reach out to us with business inquiries.\n' +
            '\n' +
            '\n' +
            'Even if you do not plan to use Copywriting for clients, it is still an amazing skill to learn in ' +
            'everyday life and your own business where rather than hiring someone to write you can do it ' +
            'yourself with your newly acquired persuasion skills to help stand out.\n' +
            '\n' +
            '\n' +
            'Technical Copywriting helps empower businesses to provide their beneficial services to more ' +
            'people. Not every business needs both a technical writer and a copywriter, which is where the ' +
            'technical copywriters come in.'
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
                        What Truly Makes a Good Technical Copywriter Stand Out
                    </Card.Title>
                    <Card.Text style={{padding: '5px 0 0 10%', fontStyle: 'italic'}}>
                        Published on: Sep 19 2022
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
                <img src={GoodWriterMain} style={{width: '98%', margin: '0 1%', borderRadius: '15px'}} alt="logo"/>
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

function TechWriter() {
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

export default TechWriter;