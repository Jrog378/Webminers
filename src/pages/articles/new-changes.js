import {Card} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Improve1 from '../../images/articleimages/Improve1.webp'
import Improve2 from '../../images/articleimages/Improve2.webp'
import Improve3 from '../../images/articleimages/Improve3.webp'
import Improve4 from '../../images/articleimages/Improve4.webp'
import ImproveMain from '../../images/articleimages/ImproveMain.webp'
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

export default function NewChanges() {
    const Artsections = [
        {
            title:'',
            img: ImproveMain,
            description: 'A black calculator, paperclip, and a pen on a piece of paper with a bar graph that has many thin black bars.',
            text: 'Webminers is a small company that is working with little to no budget. All we have is a Domain on ' +
                'a yearly subscription and a dream, but we are stretching the abilities of what you can do for free. ' +
                'For starters, Webminers will not stay like this forever. We are planning many improvements that will ' +
                'not only ease the growth of our brand but the experience for readers as well.\n' +
                '\n' +
                'The first improvement that we plan to implement is a new website that is more stylish, easier to ' +
                'upload to articles, and where we are self-sufficient. To date, we have been relying on the base website ' +
                'of templates or other platforms like google that are slightly tweaked. This will not be forever ' +
                'though as we will be expanding more than you may expect.',
        },
        {
            title:'Finding a Hosting Service',
            img: Improve1,
            description: 'Scrabble pieces with the letters w, e, and b, to spell out the word web with a grey background and a black vignette.',
            text: 'The first step of expansion is implementing our code on the website. We want to truly be the ' +
                'owners of everything we put out to the public and this includes our interface. Our website is ' +
                'currently from the [blogger platform](https://blogger.com/) with google where we chose a ' +
                'template from many.\n' +
                '\n' +
                'We are moving away from this because there is very little originality to this template and we ' +
                'knew this from the start. As a writer I know for a fact my articles will be unique and no one else ' +
                'is doing what I am doing in the entire world. ' +
                'As a part of Webminers however, there can be websites like mine that are found across the web ' +
                'that look almost exactly like mine. To be our own company we must expand to a more original ' +
                'face of our brand.\n' +
                '\n' +
                'The steps needed to get there include programming and making a website. This may be a given ' +
                'but the issue is how. As I am not a professional web developer and do not currently work with ' +
                'one, there is a gap in our ability to expand. ' +
                'This is where our new writing series comes in. I will be learning the steps needed to do this ' +
                'ourselves. This will not be a professionally made website but a hobbyist making a article for Webminers.'
        },
        {
            title:'Learning Code for the Website',
            img: Improve2,
            description: 'iMac on a tiny white desk with a matching apple keyboard and mouse with an image of a staircase leading into moving ocean waves.',
            text: 'Learning how to make a website is not foreign to me, yet this will still be a challenge. I have ' +
                '[experience](introduction) with the basics like HTML and CSS. I even webscraped websites and ' +
                'learned even more about how they work. I also have projects in my belt with [Ruby on Rails 7]' +
                '(https://rubyonrails.org/). ' +
                'This time is different though. I hope to make an AJAX(Asynchronous Javascript And XML) website that ' +
                'is with the times and able to be upgraded. This is a big feat for me as I have previously avoided ' +
                'Javascript because I knew it was a time-consuming language to get a hold of learning.\n' +
                '\n' +
                'I will be sharing my steps on this site now and then for anything from embarrassing mistakes to ' +
                'amazing accomplishments. Javascript is not only good for Web Development as well. Javascript has ' +
                'been seen in multiple [paths](https://roadmap.sh/roadmaps) and [technical careers](tech-future). ' +
                'For example, Blockchain Developers, Data Science, and much more as it is a very versatile language. ' +
                'After learning [Javascript](https://roadmap.sh/javascript), I will then get into learning the full ' +
                'stack tools that I need to furnish ' +
                'the webminers website. Stay tuned because this is going to be a hard and time-consuming journey but ' +
                'will be worth it.\n' +
                '\n' +
                'Webminers has much to come.'
        },
        {
            title:'Making Things Look Nice',
            img: Improve3,
            description: 'A white piece of paper with a drawn-out model of a website in black pen with multiple squares and writing in a grid format.',
            text: 'Once we have the Website up and running next comes the UX, also known as [User Experience]' +
                '(https://binarapps.com/why-is-user-experience-important-the-starting-point-for-beginners/). ' +
                'This will include making the website as user-friendly as it can be. ' +
                'This includes a good-looking interface that is appealing to viewers and an easily navigable set ' +
                'of pages. Many things need to be done to make sure that there are no issues that readers run into.\n' +
                '\n' +
                'After this step of fully updating the website and making sure that everything is acceptable, we ' +
                'will add more functionalities. This means viewer profiles and a chance for people to write on our ' +
                'website with their customizable subdomain. ' +
                'This does not mean that they will have their site, but a sub-site of webminers at the time ' +
                'of release. There will be a much more detailed update when it gets to that point in the checklist ' +
                'of tasks to do. ' +
                'There are many more upgrades that are even more exciting that are planned but at the moment are not ' +
                'able to be released to viewers. If you want these sorts of updates, make sure you sign up for the ' +
                'Webminers’ Newsletter to get notified directly to your email about plans and experiences before ' +
                'anyone else.\n' +
                '\n' +
                'As a Technical Writer, I take it as my duty to challenge myself. This site is not just about cool ' +
                'topics but also about the journey of webminers. We strive to always be improving and adding more ' +
                'features to readers to continue to bring value. ' +
                'Webminers is a passionate brand and even though growth requires learning whole other topics like a ' +
                'programming language, we enjoy improving and learning more every day. If you have any preferences ' +
                'about whether or not we should include actual code embedded in future articles  make sure to let us ' +
                'know in the comments below.'
        },
        {
            title:'More to Come',
            img: Improve4,
            description: 'Scrabble pieces of b, l, o, g, to spell out blog with numbers on each resting on a middle-colored wooden desk.',
            text: 'As I learn more and more about the language Javascript, I will continue to apply it in multiple ' +
                'different ways for this site. Whether it is Data Engineering, or just making a basic calculator. ' +
                'I hope to inspire many of you to learn more about this language and go outside of your comfort zone. ' +
                'Technical Writing has helped test me in this way. As learning something new is never truly foreign ' +
                'to me. The more you test yourself to learn something new, the easier it is to take on new topics. ' +
                'Challenging yourself is the only way to become a better version of yourself.\n' +
                '\n' +
                'Otherwise, you won’t get to experience the variety of opportunities and assortment of benefits that ' +
                'the world has to offer. You’d be shocked by the amount of knowledge that is just floating out ' +
                'there waiting to be discovered.\n' +
                '\n' +
                'Take that step forward and never stop learning!'
        }
    ]

    const Sections = Artsections.map(sections =>
        <Card key={sections.id} style={{borderStyle: 'none', background: 'none', padding: '1% 8%', width: '80%'}}>
            <Image style={{margin: 'auto', width: '70%', height: 'auto', borderRadius: '15px'}}
                   alt={sections.description}
                   src={sections.img}/>
            <Card.Body style={{paddingBottom: 0}}>
                <Card.Title style={{padding: '5px 0'}}><h2>{sections.title}</h2></Card.Title>
                <Card.Text className={styles.webmark} style={{paddingTop: '0px'}}>
                    <ReactMarkdown>{sections.text}</ReactMarkdown>
                </Card.Text>
            </Card.Body>
        </Card>
    )

    return (
        <>
            <main style={{backgroundColor: '#212529'}}>
                <Head>
                    <script async
                            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7878345029704986"
                            crossOrigin="anonymous"></script>
                    <title>How I Built a Financial Website with Articles and an Investing System - Part 2</title>
                    <meta property='og:title' content='NewChanges'/>
                    <meta property='og:image' content={ImproveMain}/>
                    <meta name='description'
                          content='Improvements to Webminers are necessary and this is a brief overview of some of the things we have planned to come for readers.'/>

                </Head>
                <div>
                    <header>
                        <Card style={{borderStyle: 'none', background: 'none'}}>
                            <Card.Title style={{
                                color: 'rgb(200,200,200)',
                                textAlign: 'center',
                                fontSize: 'xx-large',
                                padding: '20px 3% 0 3%'
                            }}>
                                How I Built a Financial Website with Articles and an Investing System - Part 2
                            </Card.Title>
                            <Card.Text style={{color: 'rgb(200,200,200)', padding: '3% 10%', fontStyle: 'italic'}}>
                                Published on: Sep 28 2022
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
                    {Sections}
                    <br/>
                </Card>
            </main>
        </>
    )
}