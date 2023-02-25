import {Card} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Techie1 from '../../images/articleimages/Techie1.webp'
import Techie2 from '../../images/articleimages/Techie2.webp'
import Techie3 from '../../images/articleimages/Techie3.webp'
import Techie4 from '../../images/articleimages/Techie4.webp'
import Techie5 from '../../images/articleimages/Techie5.webp'
import Techie6 from '../../images/articleimages/Techie6.webp'
import TechieMain from '../../images/articleimages/TechieMain.webp'
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function TechFuture() {
    const Artsections = [
    {
        img: TechieMain,
        description: 'Black glasses sitting in front of 4 computer screens where only through the glasses the image is clear.',
        text: 'Advancements in technology are changing the world, but you can be prepared for these changes and protect yourself with industry fields that will only increase in demand.\n' +
            '\n' +
            'Many jobs that were once very respected and well paid will be entirely left behind. The truth is as time goes on we find easier ways to do hard tasks, this includes jobs and entire professions.\n' +
            '\n' +
            '\n' +
            'This article is not business advice but is a list of jobs that will not only stay strong and become even more necessary as time goes on. The occupations that will only benefit from future advancements are as follows:\n' +
            '\n' +
            '\n' +
            '1. Data Scientist/Machine Learning Expert\n' +
            '\n' +
            '1. Software Developer\n' +
            '\n' +
            '1. Ethical Hacker/Computer Forensics Specialist\n' +
            '\n' +
            '1. Blockchain Developer\n' +
            '\n' +
            '1. Social Media Marketer\n' +
            '\n' +
            '1. Storyline Writer'
    },
    {
        img: Techie1,
        description: 'Mac Laptop on a computer stand on a crammed desk with an extra keyboard to type on and a wired phone on the left side.',
        text: 'Maybe I am a little biased, but at the top of my list lies Data Scientists and Machine Learning ' +
            'Experts.\n' +
            '\n' +
            '\n' +
            'To some Machine Learning means robots, but let me explain the more realistic side of this profession.' +
            ' \n' +
            '\n' +
            '\n' +
            'Robots using AI and Machine Learning to make human-like machines may be in our future, but at the moment ' +
            'robots are not the main focus of Machine Learning as there are many more uses for it.\n' +
            '\n' +
            '\n' +
            'The real reason I think that machine learning is important is because of how many different industries ' +
            'it can fit into. Machine Learning can be explained by just repeating information until the computer ' +
            'recognizes patterns. After this, they can then use these patterns to analyze information like traffic ' +
            'patterns for Google Maps\' estimated arrival times.\n' +
            '\n' +
            '\n' +
            'Systems like Quantum Computers, computers that use complex algorithms to solve problems faster than any ' +
            'modern computer can, can be used alongside machine learning to do crazy things like google attempting to ' +
            '[develop self-driving cars](https://finance.yahoo.com/news/google-vw-quantum-computers-develop-battery-' +
            'self-driving-180000782.html) with these combined technologies.\n' +
            '\n' +
            '\n' +
            'If you would like to learn more about what goes into Quantum Computing, I highly recommend reading the ' +
            'beginner\'s book ‘[Essential Mathematics for Quantum Computing’ by Leonard Woody.](https://amzn.to/3Sc1ENq)'
    },
    {
        img: Techie2,
        description: 'A screen with a lot of code that is displayed on a computer screen separated in a 4x4 section in a dark room.',
        text: 'The second Job on the list is a Software Developer. If you check [Glassdoor](https://www.glassdoor.' +
            'com/Career/software-developer-career_KO0,18.htm), the average Software ' +
            'Developer makes a little under $113k a year. When looking at this number compared to the other jobs, it ' +
            'might seem low but with a cap of over $325k a year, you can see how much flexibility your salary would be. \n' +
            '\n' +
            '\n' +
            'The need for Developers will only grow as well. We will always be online in the future and no one can ' +
            'replace the minds and people behind the scenes who make the programs that give us these amazing technologies. \n' +
            '\n' +
            '\n' +
            'Software developers come in all shapes and sizes, as there is so much to learn and such a demand for ' +
            'Software Developers as it is a very general job. It can overlap with Machine Learning Experts, ' +
            'blockchain developers, and more.\n' +
            '\n' +
            '\n' +
            'To learn about more possibilities, I use this [Roadmaps](https://roadmap.sh/roadmaps) website for inspiration'
    },
    {
        img: Techie3,
        description: 'A guy in a black hoodie typing on a computer that says my crime is of curiosity in a dark room with a light-up keyboard.',
        text: 'I have written about the need for [Ethical Hackers](/ethical-hacking-is-needed) before but this ' +
            'instance is a bit different, ' +
            'as in the professional world there is another branch of ethical hacking known as Computer Forensics, ' +
            'also known as investigating the pathways paved by criminals.\n' +
            '\n' +
            '\n' +
            'Crime will never go away no matter how much we shift away from the physical world into digital. ' +
            'Banks will go online, people will take walks through VR, and money will become virtual, but there ' +
            'will always be criminals there. \n' +
            '\n' +
            '\n' +
            'We can never fully get rid of Hackers and Online Criminals, we can only attempt to limit their ' +
            'ability to take advantage.'
    },
    {
        img: Techie4,
        description: 'The word blockchain is on a black desk next to a pen, iPhone, calendar, glasses, and laptop tidily put next to each other.',
        text: 'The blockchain is a network that allows people to connect directly to another person without a ' +
            'middleman and Blockchain Developers can help take advantage of this.\n' +
            '\n' +
            '\n' +
            'With new decentralized methods of interaction becoming more popular, Blockchain Developers ' +
            'become more and more essential. \n' +
            '\n' +
            '\n' +
            'Smart Contracts, which are agreement contracts on the Blockchain, and Cryptocurrencies are some ' +
            'of the most notable current Blockchain technologies. \n' +
            '\n' +
            '\n' +
            'Emailing and texting on the blockchain will be next up to be popularized and Developers are needed ' +
            'to help this process take place. As the blockchain is unlike other technologies, the programming ' +
            'language Solidity has been used as the most popular choice for working on improving decentralization. \n' +
            '\n' +
            '\n' +
            '\n' +
            'If you want to learn more check out this [Step-By-Step Roadmap](https://roadmap.sh/blockchain) where you ' +
            'can learn more about the ' +
            'endless possibilities available to those in this field.'
    },
    {
        img: Techie5,
        description: 'A red sign that has a heart or social media like symbol with a 0 next to it that\'s outside and in the dark.',
        text: 'Social Media has never been more attractive and prevalent in today\'s society. Millions of hours ' +
            'are spent every day on social media across the world. This means that it is the perfect place for ' +
            'advertisements and finding your target market.\n' +
            '\n' +
            '\n' +
            'Both developing a popular profile to promote products and running paid ads have been seen to have ' +
            'amazing returns. The truth is social media is a money bank asking you to show them what you have to ' +
            'offer. \n' +
            '\n' +
            '\n' +
            'Thousands of people’s feeds are filled with over [70k posts](https://www.zettasphere.com/mind-' +
            'boggling-stats-for-1-second-of-internet-activity/) sent out every single second. Good ' +
            'marketing is easier than ever to get into the view of audiences all over the work to catch their ' +
            'attention. After doing so it can become an easy sale for you.\n' +
            '\n' +
            '\n' +
            'The skill of successful interruption is an art form. As a Technical Copywriter, I get to experience ' +
            'this firsthand as I learn more and experience more in this profession. \n' +
            '\n' +
            '\n' +
            'There is so much to write about with Marketing and if enough comments below are interested I will ' +
            'make another post to talk about this and even provide some free resources.'
    },
    {
        img: Techie6,
        description: 'Journal is opened up with blank pages on both sides and has a blue pen in the middle that is on a wooden desk.',
        text: 'Coming from a job that’s goal is to catch your attention, this next occupation specializes in ' +
            'keeping your attention. Storyline Writing might not be the most attractive title but it is a general ' +
            'term that you can use to find a more specific title that suits you best.\n' +
            '\n' +
            '\n' +
            'Video game Storywriters, Youtube Scriptwriters, E-book Writers, and Educational Script Writers all ' +
            'have something in common. This is that they have to gain and maintain your attention. \n' +
            '\n' +
            '\n' +
            'Every single one has an end goal to keep you interested. The best part about this profession is ' +
            'having the versatility to work for both yourself and an established company.\n' +
            '\n' +
            '\n' +
            'You could make the next biggest video game that draws people in and keeps them playing, or you ' +
            'could make an E-course or Youtube Video that keeps people watching all the way through and enjoying ' +
            'it so much that they come back for more.\n' +
            '\n' +
            '\n' +
            'It may be at the bottom of my list, but it is by no means the least important. With a low level ' +
            'of entry, it allows you to start from nothing immediately and get better as you do more and more work. \n' +
            '\n' +
            '\n' +
            'You truly can make millions from this profession as your creativity is priceless.\n' +
            '\n' +
            '\n' +
            'To end this article I want to let you know that some people may tell you to follow your dreams, but ' +
            'I think otherwise. You should explore what you could see yourself doing and enjoying then let ' +
            'this lead you to achieve your dreams.\n' +
            '\n' +
            '\n' +
            'For me, I could never guess the path to reach my dreams when people said to follow them and I ' +
            'missed the most important part of it all that is there are many paths to your dream and it’s ' +
            'never too late to change paths because there is no such thing as a wrong one.\n' +
            '\n' +
            '\n' +
            'Enjoy the journey and your dreams will come to you because you never know what will happen until it does.'
    },
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
                                6 Growing Jobs To Take Advantage of Our Technical Future
                            </Card.Title>
                            <Card.Text style={{color: 'rgb(200,200,200)', padding: '3% 10%', fontStyle: 'italic'}}>
                                Published on: Sep 14 2022
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