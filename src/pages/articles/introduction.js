import {Card, Container} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Intro1 from '../../images/articleimages/Intro1.webp'
import Intro2 from '../../images/articleimages/Intro2.webp'
import Intro3 from '../../images/articleimages/Intro3.webp'
import IntroMain from '../../images/articleimages/IntroMain.webp'
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

export default function Introduction() {
    const Artsections = [
        {
            title: '',
            img: IntroMain,
            description: 'Man in a black suit suit and a light grey shirt that is reaching out his hand for a greeting handshake.',
            text: 'Welcome to part 1 of an ongoing series here at Webminers, where I share the journey of ' +
                'producing our crypto investing website, where we will be writing articles and offering services. Before ' +
                'we see how Webminers became what it is today, we will start with who I am. Not interested in my ' +
                'background? Fear not, as it is optional. You can continue to [Part 2](new-changes).\n' +
                '\n' +
                'Since a young age, I have always wanted to solve problems in the future. Whether this be through ' +
                'being an engineer or the person building things, I didn\'t care what the job was. I just knew I ' +
                'wanted to be hands-on and do something. I was the person around the house called to fix things.' +
                ' Eventually, this escalated to repairing vehicles and machines.\n' +
                '\n' +
                'I went to college unsure of what major I wanted to do and just picked one that made money from working ' +
                'with my hands,' +
                ' engineering. After looking into classes provided by the engineering department, I wasn\'t too ' +
                'sure it was what I wanted to spend four years learning. I began to look into my alternatives. ' +
                'Computer Science was on the table. I looked into Comp Sci to find myself in a similar situation.' +
                ' I wanted to program, not take five math classes and three sciences. I found Data Science and ' +
                'liked the classes much better and switched shortly after.'
        },
        {
            title: 'Filling Free Time',
            img: Intro1,
            description: 'Many graphs in a mac laptop including, bar chart, map, donut chart, and line graph with a blue theme.',
            text: 'In data science, I freed up my schedule more than before from having classes I took in high ' +
                'school transfer over as electives, another reason I loved this major. I decided to pursue ' +
                'something with my new free time. I wanted to start a business. I began coding in hopes of ' +
                'learning how to create websites enough and start selling my services. For months I worked ' +
                'and found that I didn\'t want to do this for anyone else. The website I was creating took a ' +
                'lot of effort and specialization, and I knew it was only authentic to me. I wanted to develop ' +
                'for myself.\n' +
                '\n' +
                'One problem caused the next, and I didn\'t know where to go. Now we must think about what to ' +
                'do. I have been doing in python for over half a decade. I knew that I could learn anything ' +
                'new I put my mind to, but what?\n' +
                '\n' +
                'I needed that unique idea to get me into the life I wanted to live by owning my business. It ' +
                'was summer. I spend time working on my car or doing projects around the house, working with my hands ' +
                'back to my engineer routes. I decided I would attempt a new type of service. I wanted to ' +
                'use my python knowledge and mix it with my major in data science. I started to research what ' +
                'I could do, finding little things like Data Visualization, Data Storytelling, Data Mining, ' +
                'or even Web Scraping, waiting for the opportunity good enough to start a business.\n' +
                '\n' +
                'I began learning to write professionally because I knew I would need those skills later. ' +
                'Writing is the benchmark to show potential customers who I am and what I can do. Whether ' +
                'it was marketing or understanding how to put attractive text onto websites, technical writing ' +
                'was a must for me to succeed.'
        },
        {
            title: 'What to Provide',
            img: Intro2,
            description: 'HTML code on a mac laptop that is in the process of being made into a website with different types of tags.',
            text: 'Once again, the programming side of things did not seem to stick with me. I loved programming' +
                ' and could do it all day as long as I had a purpose. I just had this feeling deep down that ' +
                'programming for others isn\'t my thing. I dropped the idea again. Thinking back, I am grateful ' +
                'for these trials because learning what works for me and what does not, even though it might have ' +
                'seemed like a waste of time.\n' +
                '\n' +
                'The more I looked, the more I felt lost. I bought a 3d Printer to try and create my product ' +
                'and found out quickly how much work would have to go into such a small product where my dollars' +
                ' per hour would be lower than minimum wage. Like everything else, I gathered what I learned and' +
                ' carried it with me.\n' +
                '\n' +
                'What to do crowded my mind. Summer was running out, and now was the best time to focus my mind' +
                ' on something and jump-start a business before school began again. I had been a small participator' +
                ' in the Crypto markets with [Coinbase](https://www.coinbase.com/) and their free coins for learning about the company.' +
                ' This time was different. I wanted to use my data science knowledge in the markets.\n'
        },
        {
            title: 'The Foundation',
            img: Intro3,
            description: 'Grey Mac Laptop with a black keyboard with a rainbow gradient light shining down on it from above.',
            text: 'I decided to create a system that could compete with the best in the market and bring me the ' +
                'self-made success I desired so much. I knew it would take a while. So I studied and tested with ' +
                'small amounts. I knew that if I could double my money with $100, I could double any amount.\n' +
                '\n' +
                'Learning from this short period of running in circles showed me trying new things and embracing ' +
                'failure. Speed up time-consuming tasks with automated systems or offloading work. Never acting ' +
                'on emotion is critical to intelligent and calculated conclusions. Be the person you want to be ' +
                'able to look back on and feel proud of who you were. Make future you proud of the achievements ' +
                'you are yet to achieve. Always appreciate those who deserve it because many people go unseen. ' +
                'You never know how little it would take to make someone\'s day.\n' +
                '\n' +
                'Welcome to the next chapter of my journey.'
        }
    ]

    const Sections = Artsections.map(sections =>
        <Card key={sections.id} style={{borderStyle: 'none', background: 'none', padding: '1% 8%', width: '80%'}}>
            <Image style={{margin: 'auto', width: '70%', height: 'auto', borderRadius: '15px'}}
                   alt={sections.description}
                   src={sections.img}
                   placeholder={'blur'}
            />
            <Card.Body style={{paddingBottom: 0}}>
                <Card.Title style={{padding: '5px 0'}}><h2>{sections.title}</h2></Card.Title>
                <Container className={styles.webmark} style={{padding: '0px'}}>
                    <ReactMarkdown>{sections.text}</ReactMarkdown>
                </Container>
            </Card.Body>
        </Card>
    )

    return (
        <>
            <Head>
                <title>How I Built a Crypto Website with Articles and an Investing System - Part 1</title>
                <meta property='og:title' content='IntroJus'/>
                <meta property='og:image' content={IntroMain}/>
                <meta name='description'
                      content='Starting from programming to engineering to programming. The full cycle of why Jus is where he is and why'/>

            </Head>
            <div style={{backgroundColor: '#212529'}}>
                <Container>
                    <header>
                        <Card style={{borderStyle: 'none', background: 'none'}}>
                            <Card.Title style={{
                                color: 'rgb(200,200,200)',
                                textAlign: 'center',
                                fontSize: 'xx-large',
                                padding: '20px 3% 0 3%'
                            }}>
                                How I Built a Crypto Website with Articles and an Investing System - Part 1
                            </Card.Title>
                            <Card.Text style={{color: 'rgb(200,200,200)', padding: '3% 10%', fontStyle: 'italic'}}>
                                Published on: Sep 4 2022
                            </Card.Text>
                        </Card>
                    </header>
                </Container>
                <Card
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        borderRadius: '35px',
                        background: 'whitesmoke'
                    }}>
                    {Sections}
                    <br/>
                </Card>
            </div>
        </>
    )
}