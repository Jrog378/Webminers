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
import Visual1 from './ArtImg/Visual1.jpg'
import Visual2 from './ArtImg/Visual2.jpg'
import Visual3 from './ArtImg/Visual3.jpg'
import Visual4 from './ArtImg/Visual4.jpg'
import Visualmain from './ArtImg/VisualMain.jpg'

const Artsections = [
    {
        img: '',
        text: 'While I was teaching myself the different aspects of data mining, Data Visualization came up. ' +
            'I did not know this at the time but I would soon realize how Data Visualization can become its own ' +
            'profession outside of Data Science.\n' +
            '\n' +
            'Data Visualization can be defined as putting data into a visual that people can easily understand. ' +
            'For example, the stock market.'
    },
    {
        img: Visual1,
        text: 'Everyone has seen a stock market chart even if it is just a demo of the up and down lines. ' +
            'That chart is technically a visual of data.\n' +
            '\n' +
            'Instead of spitting out a bunch of numbers of people selling and buying that would take hours to ' +
            'read over, the market is visualized by those connecting rising and falling lines.\n' +
            '\n' +
            'Data has become more and more important in today’s society and with tools like [Tyler Technologies]' +
            '(https://www.tylertech.com/), [Tableau](https://www.tableau.com/), and [Power BI]' +
            '(https://powerbi.microsoft.com/) putting data into aesthetically pleasing visuals has never been easier.\n' +
            '\n' +
            'Data Visualization is becoming the new graphic design. So many businesses need data to be shown to ' +
            'their customers, and so many unique ways to do this.\n' +
            '\n' +
            'Programming languages like Python and R have great visualization tools so that programmers can ' +
            'fully customize how to display data. This is great because certain industries need different styles and ' +
            'themes.\n' +
            '\n' +
            'Experts have been creating their own styles and making their unique mark in the industry that companies ' +
            'seek out.\n' +
            '\n' +
            'Amazing Data Visualizers are all over and the market for cheap visuals is very competitive. If you ' +
            'are looking to join this job market, however, you won’t need to worry about that. \n' +
            '\n' +
            'Top performers have very little competition as there is very little needed to get started but being ' +
            'able to show good work and experience really sets you apart from the crowd.'
    },
    {
        img: Visual2,
        text: 'There are many aspects that need to be mastered in order to perfect your ability to visualize data.\n' +
            '\n' +
            'Firstly knowing what tools to use when is one of the most important. This skill helps you know what ' +
            'type of graph would best support the data or even what colors best represent certain trends.\n' +
            '\n' +
            'This skill may be the most valuable but is not even hard to develop. Experience will hand you the ' +
            'necessary knowledge to identify what is needed at what time.\n' +
            '\n' +
            'Another factor in learning how to get into Data Visualization is what tool you plan to use. Whether ' +
            'it is programming or a No-Code(no coding needed AT ALL)  you put time into learning how your tool works. \n' +
            '\n' +
            'Programming languages can have extra features to help you along your journey, which when learned, can ' +
            'save tons of time. On the other hand, No-Code options can have hidden features that advanced users ' +
            'can utilize to really increase the quality of your final product.\n' +
            '\n' +
            'Once you have your tool picked and your data visualized you need to make sure you have a method of ' +
            'presentation. Dynamic Visuals(visuals you can adjust or interact with) come in handy when you are ' +
            'presenting the visuals you have made yourself but sometimes just a Static Visual(still visuals like ' +
            'images) is best.\n' +
            '\n' +
            'The ability to take your visuals out of your visualization tool can be a lengthy process if you go ' +
            'into it without researching the best method beforehand. This can lead to a final product that you did ' +
            'not quite expect or want where you could have to start over.'
    },
    {
        img: Visual3,
        text: 'Presentation and communication skills are the final skill that you really need to drill home ' +
            'before you can become a Data Visualizer. These skills can be considered the backbone of any job.\n' +
            '\n' +
            'They are especially important with data. People just looking at a line that goes up and down don’t ' +
            'know what it means or how it is important to them.\n' +
            '\n' +
            'Your job is to let them know your work’s importance. Without labels and Descriptions, your work ' +
            'is incomplete and lacks the intention that it needs to have.\n' +
            '\n' +
            'Instead of this make your visuals decision influencers and give them importance. Data visuals ' +
            'with great descriptions and explanations can have a lot of impacts.\n' +
            '\n' +
            'This is your job. You are helping businesses make data-driven decisions and now is your time to ' +
            'shine to show off and explain your work. \n' +
            '\n' +
            'After you have polished your skills and become the definition of a Data Visualization Specialist, ' +
            'it is time to expand what you can do. This is where you can really get into what interests you if ' +
            'you desire more than just Data Visualization.\n' +
            '\n' +
            'The field of Data Science encapsulates a lot of different opportunities and Data Visualization ' +
            'overlaps with many.\n' +
            '\n' +
            'You can go into [Web Scraping as I did](/intro-tech-writing) and learn how to get your own data for the ' +
            'businesses, ' +
            'or you could go work with Machine Learning and Data Analysis to further help people analyze your ' +
            'graphics.\n' +
            '\n' +
            'There are so many different supporting skills that can be used in this field.\n' +
            '\n' +
            'On top of expanding what you can do, it is also important to expand what you use to get your results. ' +
            'Using different tools or programming languages can help you when taking on jobs with companies that ' +
            'are picky about that stuff. \n' +
            '\n' +
            'Some companies only work with certain tools and unless you have at least some experience, ' +
            'this could cause you to lose an opportunity.'
    },
    {
        img: Visual4,
        text: 'To get started if you haven’t already, I would recommend you explore kaggle.com for a dataset that ' +
            'you like. Next, use [Tableau Public](https://public.tableau.com/app/discover)(Free Version of Tableau) ' +
            'and mess around with some of your ' +
            'options. Microsoft Excel is one of the most beginner-friendly ways to get visuals up and running as ' +
            'well.\n' +
            '\n' +
            'After this experiment, there are many paid options you can go into without code or the completely ' +
            'free way of programming.\n' +
            '\n' +
            'At the end of the day, how you plan to learn is completely up to you and your interests. Technical ' +
            'skill level also greatly influences how well-suited a tool may be for you.\n' +
            '\n' +
            'It is always best to start small compared to starting big and possibly getting overwhelmed. If you ' +
            'get stuck, check on forums or online because chances are, someone like you has gone through the ' +
            'exact same thing.\n' +
            '\n' +
            'Good Luck!'
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
                        Data Visualization - The Profitable Data Science Subcategory
                    </Card.Title>
                    <Card.Text style={{padding: '5px 0 0 10%', fontStyle: 'italic'}}>
                        Published on: Sep 6 2022
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
                <img src={Visualmain} style={{width: '98%', margin: '0 1%', borderRadius: '15px'}} alt="logo"/>
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

function DataVisual() {
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

export default DataVisual;