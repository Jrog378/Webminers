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
import Ethical1 from './ArtImg/Ethical1.jpg'
import Ethical2 from './ArtImg/Ethical2.jpg'
import Ethical3 from './ArtImg/Ethical3.jpg'
import Ethical4 from './ArtImg/Ethical4.jpg'
import lock from '../WebImg/computer-security-lock-and-payment.jpg'

const Artsections = [
    {
        img: '',
        text: 'The terms Cryptocurrency and Web3 have been tossed around lately and with good reason. They are ' +
            'revolutionary and have a lot of purposes, because of this they are getting a lot of attention from ' +
            'investors and the public. \n' +
            '\n' +
            'This innovation is amazing and will make history, but not a lot of people know the specifics of the ' +
            'downsides and just how exposed we really are.'
    },
    {
        img: Ethical1,
        text: 'Web3 is also known as the movement towards a more decentralized web. \n' +
            '\n' +
            'Having a Decentralized web would mean that there would be no central service that stores information ' +
            'or data and would be more of person-to-person interaction.\n' +
            '\n' +
            'This allows for complete privacy. \n' +
            '\n' +
            'Today\'s internet has search engines like Google, Yahoo, Firefox, or Microsoft Edge that collect ' +
            'cookies and your Internet Protocol address(IP address) or device identification number and location ' +
            'every time you visit a website. \n' +
            '\n' +
            'Check out the website [whatismyipaddress.com](https://whatismyipaddress.com/) if you don’t believe me. \n' +
            '\n' +
            'Web3 strives for privacy among all users where no search engine gets your information. \n' +
            '\n' +
            'This is great for the everyday user with no Ill intent but when it comes to those wishing to break ' +
            'the law, it can lead to even more crime. \n' +
            '\n' +
            'Illegal acts on the internet will be easier than ever to get away with when web3 comes around, ' +
            'this is extremely alarming especially with online currencies becoming popular.\n' +
            '\n' +
            'One instance of this is since 2019 over [$4 Billion has been stolen](https://www.forbes.com/sites/' +
            'jeanbaptiste/2019/08/15/hackers-stole-over-4-billion-from-crypto-crimes-in-2019-so-far-up-from-1-7-' +
            'billion-in-all-of-2018/?sh=39e8b25955f5) from people on the internet ' +
            'and criminals won’t just make a one-time appearance.\n' +
            '\n' +
            'Once someone is successful at stealing large sums of money on the internet, will most likely steal again.\n'
    },
    {
        img: Ethical2,
        text: 'Crypto owners aren\'t the only ones at threat as well. Smart contracts on the blockchain(a network ' +
            'of data and pathways) are rising in popularity from their ability to completely remove a middleman ' +
            'in deals. \n' +
            '\n' +
            'This allows for much more trust between companies and is a great addition to business. \n' +
            '\n' +
            'As you could imagine, since this is relatively new, many contracts have flaws that can be exploited ' +
            'if the right hacker gets his hands on them, especially this time when [$31 Million](https://www.fast' +
            'company.com/40587391/now-hackers-have-stolen-another-31-million-in-cryptocurrencies) was stolen.\n' +
            '\n' +
            'Smart contracts are only going to get more popular even with the possibility of getting hacked. \n' +
            '\n' +
            'Most of the public does not quite notice the dangers of the internet fully and how easily it is to ' +
            'get hacked or negatively impacted by someone else, especially with these last two examples increasing ' +
            'in popularity. \n' +
            '\n' +
            'The internet will only get more and more popular no matter how dangerous it can be. People love the ' +
            'internet and what it has to offer\n' +
            '\n' +
            'Jobs are becoming fully remote, fully online Entrepreneurs are on the rise, Startups don’t even need ' +
            'offices anymore, and people are liking it. \n' +
            '\n' +
            'A majority of workers prefer remote work and motives include being with their families more or being ' +
            'more productive. With the increase in people online comes the increase of opportunities for people ' +
            'seeking harm.\n' +
            '\n' +
            'There are so many different ways for these criminals to negatively impact your entire life as well. ' +
            'For example, imagine you are a remote worker working from home, and one day you decide to get a coffee ' +
            'from the coffee shop nearby. \n' +
            '\n' +
            'If you connect to that public network, your information and device are fully at the risk of being ' +
            'compromised and hacked into without really any protection.'
    },
    {
        img: Ethical3,
        text: 'This all may sound very concerning and you may wonder what should you do and how can you stop ' +
            'yourself.\n' +
            '\n' +
            'Many countermeasures are becoming a lot more popular and these are very important if you want to be ' +
            'safe on the web\n' +
            '\n' +
            'One of them is a Virtual Protective Network(VPN). VPNs put a mask over your IP address with a new ' +
            'one and shield your location.\n' +
            '\n' +
            'Some websites don’t like VPNs however because they like to know this info about you so make sure ' +
            'you get a good one that can be hard to detect. \n' +
            '\n' +
            'I use [Proton VPN](https://protonvpn.com/) personally.\n' +
            '\n' +
            'Another great thing that is coming into play is that white hat hackers are being respected more ' +
            'and becoming more valuable. \n' +
            '\n' +
            'Now if you don\'t know what the different types of hackers are, [Geeksforgeeks wrote a great article]' +
            '(https://www.geeksforgeeks.org/types-of-hackers/) ' +
            'I recommend you read. \n' +
            '\n' +
            'To summarize, black hat hackers are the hackers that are there with ill intent. These are the ones ' +
            'that will steal money and information. Some even just ruin things for enjoyment.\n' +
            '\n' +
            'grey hat hackers can be easily explained in the "grey" area of the two of them. This is because ' +
            'they are not legally authorized hackers but do not always act to hurt others.\n' +
            '\n' +
            'Finally, white hat hackers, also known as ethical hackers, are hired by companies to try and hack ' +
            'into their websites or database to find vulnerabilities. These hackers will test security features ' +
            'like the firewall or how easy it would be to steal data.'
    },
    {
        img: Ethical4,
        text: 'In today\'s age of the internet, some white hat hackers were not respected that well by companies, ' +
            'and some were neglected to the point where companies don’t think they need them. \n' +
            '\n' +
            'As the future of the web comes along it will be increasingly important for these white hat hackers to ' +
            'be a part of online companies and increase safety for their users.\n' +
            '\n' +
            'Not only will white hat hackers help keep companies and their data safe, but they will also help ' +
            'with these upcoming smart contracts as well as blockchain security to stop people from taking advantage ' +
            'of unprotected companies or individuals\n' +
            '\n' +
            'Innovation on the internet is not exactly good or bad, in my opinion, it can be seen as a middle ' +
            'ground. Where there is light there will always be shadow.\n' +
            '\n' +
            'As black hat hackers rise to the occasion so will white hat hackers. I wouldn’t say there is anything ' +
            'to worry about though. Individuals need to keep themselves and their information safe.\n' +
            '\n' +
            'If this post does well I will be releasing a new blog about being safe on the internet and new ways ' +
            'to protect yourself and your information with the evolving web.\n' +
            '\n' +
            'Comment below as well if you have any topics you would like me to write about.\n' +
            '\n' +
            'Be safe!'
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
                        Ethical Hackers Are Needed More Than Ever In Our Future
                    </Card.Title>
                    <Card.Text style={{padding: '5px 0 0 10%', fontStyle: 'italic'}}>
                        Published on: Sep 4 2022
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
                <img src={lock} style={{width: '98%', margin: '0 1%', borderRadius: '15px'}} alt="logo"/>
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

function EthicalHack() {
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

export default EthicalHack;