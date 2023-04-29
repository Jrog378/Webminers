import {Card, Container} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import GoodWriter1 from '../../images/articleimages/GoodWriter1.webp'
import GoodWriter3 from '../../images/articleimages/GoodWriter3.webp'
import GoodWriter4 from '../../images/articleimages/GoodWriter4.webp'
import GoodWriter5 from '../../images/articleimages/GoodWriter5.webp'
import GoodWriter6 from '../../images/articleimages/GoodWriter6.webp'
import GoodWriterMain from '../../images/articleimages/GoodWriterMain.webp'
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";
import Details from "@/components/details";
import Email from "@/components/email";
import {GoogleAdSense} from "nextjs-google-adsense";
import React from "react";

export default function GoodTechWriter() {
    const Article = [
        {
            title: '',
            id: '',
            img: GoodWriterMain,
            description: 'Older dip pen resting on a black tabletop and a black background along with a black shadow covering over them.',
            text: 'Technical Copywriting or Writing has so many opportunities for almost anyone who is willing to ' +
                'work for it. I have learned so much from this field, but nothing comes without working for it. ' +
                'Even though opportunities are plentiful, they can still be hard to find. There are specific ' +
                'techniques to master Technical Copywriting and will by no means be handed to you. Writing may ' +
                'come to people naturally but every type of writing(articles, emails, websites) is different and ' +
                'companies can want something entirely different than what you have done in the past.\n' +
                '\n' +
                'Here is my list of what makes a good Technical Writer for you to follow if you wish to start ' +
                'your journey to mastering the mystical art of Explanation and Persuasion.\n' +
                '\n' +
                '1. [Work on yourself and your trade](#DevelopSkills)\n' +
                '2. [Read your work out loud](#ReadWorkOutLoud)\n' +
                '3. [Provide free value](#FreeValue)\n' +
                '4. [Always learn and grow](#LearnAndGrow)'
        },
        {
            title: 'Work to Develop Your Skills',
            id: 'DevelopSkills',
            img: GoodWriter1,
            description: 'Pen and paper on a desk with a book next to it and a clock resting on top along with a bag and pencil case next to these.',
            text: 'Practice is one of the first things I did when I started learning how to copywrite and I ' +
                'don’t regret a single part of it. It showed me what I was getting into before really making any ' +
                'commitment. You might be shocked to hear this but I quit the first time tried copywriting.\n' +
                '\n' +
                'When I first started learning I was not sure who I wanted to even write for and felt completely ' +
                'lost. Which, believe it or not, was a good thing! It led me to my path now as I started to ' +
                'learn about other fields and my possibilities. I realized I loved learning about them all. ' +
                'I am a Tech guy and knew where I wanted to work, but not what yet. I am studying Data Science ' +
                'and know I can do much more. So after some exploration of other subfields I came back! I knew ' +
                'that writing for anyone in the tech industry would only bring me good experiences and teach me ' +
                'about products and companies I could have never imagined.\n' +
                '\n' +
                'Through practice and testing of copywriting, I found my focus on Data Science. You can start ' +
                'your practice anytime anywhere. Starting small is my best advice as many of the frameworks for ' +
                'your small work, like emails, can also be used for longer pieces, like sales pages. Starting small ' +
                'can also help you refine specific skills and get used to writing until adding length comes naturally ' +
                'to you. ' +
                'After becoming comfortable writing small pieces, two things happened. First, you have gotten your ' +
                'flow where you can write and it comes almost naturally to you. The second part is even more important, ' +
                'as you have set yourself up with a framework that can be expanded into larger pieces.'
        },
        {
            title: 'Read Back Your Work',
            id: 'ReadWorkOutLoud',
            img: GoodWriter3,
            description: 'Tablet with writing on a white screen on a dark brown wooden desk next to a large stack of books with a library in the background.',
            text: 'I am combining these next two because they are very similar. The mind is an extremely confusing ' +
                'thing as it may think one thing for absolutely no reason. ' +
                'As you are writing, the words you put on the page might seem amazing, as if they are flawless, but ' +
                'the moment you read over them you will most likely find tons of mistakes. ' +
                'This can be amplified when you read out loud. Even when reading in your head, you can find even ' +
                'more mistakes and hear hour it sounds to a reader. You can completely skim over a mistake when writing ' +
                'that your mind tells you is fine. Reading out loud is one the easiest tools you can use to improve ' +
                'your writing whether this is to a friend or yourself. \n' +
                '\n' +
                'I almost always make mistakes in my writing, but I read out loud to ensure that the final product is ' +
                'exactly how I want it. ' +
                'Studying other people’s work can help a ton as well whereas you think your writing is without mistakes ' +
                'and then you read someone else’s writing and notice what they are doing right and comparing it to ' +
                'your work brings out any mistakes that remain in your piece. ' +
                'Reading a book every day is highly recommended by many successful figures with good reason. There ' +
                'are so many benefits to reading books and other people’s work as you can learn more from the books ' +
                'as well as freshen up your mind with this author’s writing style.\n' +
                '\n' +
                'People like me, who don’t like reading that much, might struggle with reading every day to better ' +
                'their work. What I found to be super helpful however is reading right in the middle of work or ' +
                'instead of taking a break on social media, spending this time reading. ' +
                'This works so well because I can still feel relaxed and unstressed but I am technically still ' +
                'working. Easing your load with reading can be beneficial in itself for your workload too. My ' +
                'personal goal for reading is a book a week and [this challenge is highly recommended by others]' +
                '(https://medium.com/readers-digests/i-have-read-52-books-a-year-for-4-years-heres-how-my-life-' +
                'changed-ceadc40b76c1) as well'
        },
        {
            title: 'Free Value',
            id: 'FreeValue',
            img: GoodWriter4,
            description: 'Black cursive writing on an old white piece of paper that is zoomed in on and focused just in the middle.',
            text: 'Working for free is a confusing topic for many people and isn’t always the most popular opinion ' +
                'but let me explain why I believe in this technique. Imagine someone comes up to you with a super ' +
                'great idea and says watch me paint this sunset for you.\n' +
                '\n' +
                'Next, this person starts to paint this gorgeous sunset but just finishes the sun and says “if you ' +
                'want me to add to this painting, I will for $20”. You can tell that this artist is really good just ' +
                'by the sun and you know that if he adds to the painting, the whole thing will be worth your money. ' +
                'You agree and the artist paints his amazing painting and you pay them the $20. Both people go ' +
                'home happy. This can be translated into something like the first email of an email campaign that ' +
                'you hope to write for someone.\n' +
                '\n' +
                'You can offer the first email for free so they get a taste and know how good of a writer you ' +
                'are, but the campaign is an incomplete product. If they like it enough they would love to get ' +
                'the whole campaign for a price. ' +
                'As this article is not business advice, make sure you know your worth and don’t let people ' +
                'demand products for free to where you give them in hopes for a client. You could end up like Nigel ' +
                'Graber, who [made £3200 off of his free value](https://copywritercollective.com/offering-samples/' +
                '#Freeloaders).'
        },
        {
            title: 'Learn and Grow',
            id: 'LearnAndGrow',
            img: GoodWriter5,
            description: 'A black ballpoint pen writing the two words be creative with a lightbulb next to it on a white sheet of paper.',
            text: 'Practicing was already mentioned but this type of practice is different. As you are ' +
                'interacting with real people this time there is more to Technical Copywriting than just writing. ' +
                'You have to interact with people and get clients, which will also take practice. Keep your head ' +
                'high though as if you have made it this far then you are further ahead than way over half those ' +
                'who attempt this profession. \n' +
                '\n' +
                'Keep your head high and work on your people skills with this practice. You will still be working ' +
                'on your writing but you will come across many other things that you are not very good at. Don’t ' +
                'worry as everything takes time. ' +
                'To help gauge your progress, after developing your people skills, you can look into [getting a ' +
                'mentor](https://www.forbes.com/sites/ellevate/2021/05/20/how-do-i-find-a-mentor/?sh=4c9be21f55e0)' +
                ' as they can help guide you and will be 100 percent honest with you. They want you to ' +
                'grow and will keep you in check.'
        },
        {
            title: 'Conclusion',
            id: '',
            img: GoodWriter6,
            description: 'A pen and paper resting on a laptop on a brown wooden desk with a cup of brown coffee with a creamer design on it next to them.',
            text: 'Technical copywriting for me has been a life-changing journey and I am becoming a better and ' +
                'better writer every day as I am sure you will too. Feel free to follow [Webminers’ LinkedIn]' +
                '(https://www.linkedin.com/company/juswebminers) to ' +
                'follow along with the journey or reach out to us with business inquiries. ' +
                'Even if you do not plan to use Copywriting for clients, it is still an amazing skill to learn in ' +
                'everyday life and your own business where rather than hiring someone to write you can do it ' +
                'yourself with your newly acquired persuasion skills to help stand out.\n' +
                '\n' +
                'Technical Copywriting helps empower businesses to provide their beneficial services to more ' +
                'people. Not every business needs both a technical writer and a copywriter, which is where the ' +
                'technical copywriters come in.'
        }
    ]
    const Detail = Details.find((article) => article.url === '/articles/good-tech-writer');
    const Sections = () => {
        return (
            <>
                {Article.map(sections =>
                    <Card key={sections.id}
                          style={{borderStyle: 'none', background: 'none', padding: '1% 8%', width: '80%'}}>
                        <Image style={{margin: 'auto', width: '70%', height: 'auto', borderRadius: '15px'}}
                               alt={sections.description}
                               src={sections.img}
                               id={sections.id}
                               placeholder={'blur'}
                        />
                        <Card.Body style={{paddingBottom: 0}}>
                            <Card.Title style={{padding: '5px 0'}}><h2>{sections.title}</h2></Card.Title>
                            <Container className={styles.webmark} style={{padding: '0px'}}>
                                <ReactMarkdown>{sections.text}</ReactMarkdown>
                            </Container>
                        </Card.Body>
                    </Card>)}
            </>
        )
    }

    return (
        <>
            <GoogleAdSense publisherId="pub-7878345029704986" data-nscript={false}/>
            <Head>
                <title>{Detail.title}</title>
                <meta property='og:title' content='WhyTechWriter'/>
                <meta property='og:image' content={GoodWriterMain}/>
                <meta name='description'
                      content={Detail.description}/>
            </Head>
            <article style={{backgroundColor: '#212529'}}>
                <Container>
                    <header>
                        <Card style={{borderStyle: 'none', background: 'none'}}>
                            <Card.Title style={{
                                color: 'rgb(200,200,200)',
                                textAlign: 'center',
                                fontSize: 'xx-large',
                                padding: '20px 3% 0 3%'
                            }}>
                                {Detail.title}
                            </Card.Title>
                            <Card.Text style={{color: 'rgb(200,200,200)', padding: '3% 10%', fontStyle: 'italic'}}>
                                Published on: {Detail.date}
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
                    <Sections/>
                    <Email/>
                </Card>
            </article>
        </>
    )
}