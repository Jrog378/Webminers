import {Card} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Intro1 from '../../images/articleimages/Intro1.webp'
import Intro2 from '../../images/articleimages/Intro2.webp'
import Intro3 from '../../images/articleimages/Intro3.webp'
import IntroMain from '../../images/articleimages/IntroMain.webp'
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Intro() {
    const Artsections = [
    {
        img: IntroMain,
        description: 'Man in a black suit suit and a light grey shirt that is reaching out his hand for a greeting handshake.',
        text: 'My name is Jus, as some of you may know. While writing this, I am currently building my education upon ' +
            'the future of data and my love for finding the truth from data. This is not how it always was, however. ' +
            'I had to go through many stages of career ideas, passions, and interests before landing where I am now. ' +
            'I believe that every step of the way was necessary and made me who I am today. That is a dedicated, ' +
            'passionate learner who believes the truth matters more than anything else, which makes it worth pursuing.' +
            '\n\nThe point of these articles is to benefit both readers and me as a writer. I have ideas and information' +
            ' that I would like to share and to do so I have to be able to display them to you. I am not the best ' +
            'writer with goals to be better. The other hand of things is the reader. Being able to learn from what ' +
            'I write or enjoy reading the material I produce is something I hope for anyone reading my articles.'
    },
    {
        img: Intro1,
        description: 'Many graphs in a mac laptop including, bar chart, map, donut chart, and line graph with a blue theme.',
        text: 'Before everything with writing and business, it all started with python. I took a summer class on ' +
            'python where I would go in and code for an hour or so but the time isn\'t what mattered, what I was ' +
            'doing did. I loved to go above and beyond what we were taught to do. We were given fun projects to ' +
            'do and this was the beginning for me. After this class, I looked into more programming languages and ' +
            'this is where I came across web development. I built a tiny basic website which I thought was super ' +
            'cool but realized it cost money to put websites on the web broke, this completely pushed me away and ' +
            'I stopped working on the site entirely.\n\n' +
            'The tables had turned for me. I began being hands-on more and doing things like working on my car ' +
            'or projects around the house. I may focus switched. I thought I wanted to become an engineer. Later ' +
            'on, I would realize this idea was heavily pushed on me by those around me. That is not the point, ' +
            'however. What is important is that it was short-lived as I was reintroduced to programming. This ' +
            'was able to relight the flame that was left dormant inside me. I loved to code and always have. ' +
            'Coming back to coding as a more mature person exploded into hyper research into what I could do ' +
            'with programming.\n\n' +
            'Enter Data Science. The largest step of my life without even knowing it. I always wanted to run a ' +
            'business since I was a kid but this researching mindset sparked me to start one. I began to research ' +
            'things that interested me and pursue what I believed would make me happy. Businesses failed and ' +
            'failed again. I knew this would happen, yet it was still demotivating me. While demotivating, it ' +
            'did something else as well. I took it as a challenge. Making me work harder than ever before. ' +
            'Even if it took me a thousand years of hard work, I would still find something that would succeed.'
    },
    {
        img: Intro2,
        description: 'HTML code on a mac laptop that is in the process of being made into a website with different types of tags.',
        text: 'Data science has many sub fields and I probably attempted to make money with each one of them. ' +
            'Each time failing worse than before. I had to take a step back and think. I feelt like I was just ' +
            'going in too top heavy and the slightest thing would topple me over. I decided to start small and ' +
            'write some articles on Data Science while developing what business I want to start. I looked into ' +
            'what data science actually was and why people need it along with why should someone trust me.\n\n' +
            'The truth is a lot of people definitely shouldn\'t have trusted me because I didn\'t really have ' +
            'anything to bring to the table along the lines of the titles I was trying to call myself. With ' +
            'little experience I knew I had to just put my head down and develop what I want to provide. And ' +
            'so I did. I went into Data Mining, Web Scraping, and Web Development to find the truth of what I ' +
            'was best at and what I would be able to use to provide the most value.\n\n' +
            'Finance stuck my mind. I took a deep dive into Crypto and the data behind it. I was sold. There were ' +
            'so many opportunities in the world of finance just waiting there for the taking. I knew that this ' +
            'field was the one. I worked hard and studied hard in this field found any sources of knowledge I ' +
            'could. Went for multiple different perspectives and opinions to form my own system which is the one y' +
            'ou see on my website. This site is the compounding efforts of my careeer so far.'
    },
    {
        img: Intro3,
        description: 'Grey Mac Laptop with a black keyboard with a rainbow gradient light shining down on it from above.',
        text: 'There is much more for me to learn and empliment in the Webminers Seasons that you will see. It is ' +
            'a evergrowing project. There are more projects coming soon as well. Stay tuned for the evolution of ' +
            'webminers.  I cannot wait to see how this journey will unfold. If I were to tell the audience one ' +
            'thing, it would be not to force things. If you work hard and long enough at something eventually it ' +
            'will go to planning.\n\n' +
            'Success comes to those who work. Imagine the feeling you will get when you can finally say things ' +
            'paid off. Speed up time consuming tasks with automation or off loading. Create systems so you stick ' +
            'to the plan. Never act on emotion and having a clear mind is the key to peace. Too many people are ' +
            'slave to their emotions. Be the person you wanna be able to look back on and say \'wow look at me\' ' +
            'not \'I wish I was better\'. Make future you proud of the achievements you are yet to achieve. ' +
            'Always appeciate those those deserve it because many people go unseen. You never know how little ' +
            'it would take to make someones day.\n\n' +
            'Welcome to the next chapter of my journey...'
    }
]

    const Sections = Artsections.map(sections =>
        <Card key={sections.id} style={{borderStyle: 'none', background: 'none', padding: '1% 8%', width:'80%'}}>
            <Image style={{margin: 'auto', width: '70%', height: 'auto', borderRadius:'15px'}} alt={sections.description}
                   src={sections.img}/>
            <Card.Body style={{paddingBottom: 0}}>
                <Card.Text style={{paddingTop: '0px'}}>
                    <ReactMarkdown className={styles.webp}>{sections.text}</ReactMarkdown>
                </Card.Text>
            </Card.Body>
        </Card>
    )

    return (
        <>
            <main style={{backgroundColor: '#212529'}}>
                <div>
                    <header>
                        <Card style={{borderStyle: 'none', background: 'none'}}>
                            <Card.Title style={{
                                color: 'rgb(200,200,200)',
                                textAlign: 'center',
                                fontSize: 'xx-large',
                                padding: '20px 3% 0 3%'
                            }}>
                                Ethical Hackers Are Needed More Than Ever In Our Future
                            </Card.Title>
                            <Card.Text style={{color: 'rgb(200,200,200)', padding: '3% 10%', fontStyle: 'italic'}}>
                                Published on: Sep 4 2022
                            </Card.Text>
                        </Card>
                    </header>
                </div>
                <Card
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        borderRadius: '35px',
                        background: 'rgb(213, 233, 223)'
                    }}>
                    <p/>
                    {Sections}
                    <br/>
                </Card>
            </main>
        </>
    )
}