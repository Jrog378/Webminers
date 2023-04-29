import {Card, Container} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Ethical1 from '../../images/articleimages/Ethical1.webp'
import Ethical2 from '../../images/articleimages/Ethical2.webp'
import Ethical3 from '../../images/articleimages/Ethical3.webp'
import Ethical4 from '../../images/articleimages/Ethical4.webp'
import EthicalMain from '../../images/articleimages/computer-security-lock-and-payment.webp'
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Details from "@/components/details";
import Email from "@/components/email";
import {GoogleAdSense} from "nextjs-google-adsense";
import React from "react";

export default function EthicalHacking() {
    const Article = [
        {
            title: '',
            img: EthicalMain,
            description: 'MacBook Pro Laptop with two credit cards resting on the keyboard with a padlock on top of those.',
            text: 'The terms Cryptocurrency and Web3 have been tossed around lately and with good reason. They are ' +
                'revolutionary and have a lot of purposes, because of this they are getting a lot of attention from ' +
                'investors and the public. ' +
                'This innovation is amazing and will make history, but not a lot of people know the specifics of the ' +
                'downsides and just how exposed we really are.'
        },
        {
            title: 'Background for Safety',
            img: Ethical1,
            description: 'A small section of a Mac Laptop with a rainbow gradient light from red to blue and a black keyboard.',
            text: 'Web3 is also known as the movement towards a more decentralized web. ' +
                'Having a Decentralized web would mean that there would be no central service that stores information ' +
                'or data and would be more of person-to-person interaction. ' +
                'This allows for complete privacy. \n' +
                '\n' +
                'Today\'s internet has search engines like Google, Yahoo, Firefox, or Microsoft Edge that collect ' +
                'cookies and your Internet Protocol address(IP address) or device identification number and location ' +
                'every time you visit a website. ' +
                'Check out the website [whatismyipaddress.com](https://whatismyipaddress.com/) if you don’t believe me. ' +
                'Web3 strives for privacy among all users where no search engine gets your information. ' +
                'This is great for the everyday user with no Ill intent but when it comes to those wishing to break ' +
                'the law, it can lead to even more crime. \n' +
                '\n' +
                'Illegal acts on the internet will be easier than ever to get away with when web3 comes around, ' +
                'this is extremely alarming especially with online currencies becoming popular.' +
                'One instance of this is since 2019 over [$4 Billion has been stolen](https://www.forbes.com/sites/' +
                'jeanbaptiste/2019/08/15/hackers-stole-over-4-billion-from-crypto-crimes-in-2019-so-far-up-from-1-7-' +
                'billion-in-all-of-2018/?sh=39e8b25955f5) from people on the internet ' +
                'and criminals won’t just make a one-time appearance. ' +
                'Once someone is successful at stealing large sums of money on the internet, will most likely steal again.\n'
        },
        {
            title: 'Digital Dangers',
            img: Ethical2,
            description: 'Bitcoin sitting in front of a computer screen that has the crypto market graph that is in the color blue.',
            text: 'Crypto owners aren\'t the only ones at threat as well. Smart contracts on the blockchain(a network ' +
                'of data and pathways) are rising in popularity from their ability to completely remove a middleman ' +
                'in deals. ' +
                'This allows for much more trust between companies and is a great addition to business. \n' +
                '\n' +
                'As you could imagine, since this is relatively new, many contracts have flaws that can be exploited ' +
                'if the right hacker gets his hands on them, especially this time when [$31 Million](https://www.fast' +
                'company.com/40587391/now-hackers-have-stolen-another-31-million-in-cryptocurrencies) was stolen. ' +
                'Smart contracts are only going to get more popular even with the possibility of getting hacked. ' +
                'Most of the public does not quite notice the dangers of the internet fully and how easily it is to ' +
                'get hacked or negatively impacted by someone else, especially with these last two examples increasing ' +
                'in popularity. \n' +
                '\n' +
                'The internet will only get more and more popular no matter how dangerous it can be. People love the ' +
                'internet and what it has to offer. ' +
                'Jobs are becoming fully remote, fully online Entrepreneurs are on the rise, Startups don’t even need ' +
                'offices anymore, and people are liking it. ' +
                'A majority of workers prefer remote work and motives include being with their families more or being ' +
                'more productive. With the increase in people online comes the increase of opportunities for people ' +
                'seeking harm.\n' +
                '\n' +
                'There are so many different ways for these criminals to negatively impact your entire life as well. ' +
                'For example, imagine you are a remote worker working from home, and one day you decide to get a coffee ' +
                'from the coffee shop nearby. ' +
                'If you connect to that public network, your information and device are fully at the risk of being ' +
                'compromised and hacked into without really any protection.'
        },
        {
            title: 'How to Keep Yourself Safe',
            img: Ethical3,
            description: 'Computer screen with a mouse hovering over a button that is labeled with the word security in the color blue.',
            text: 'This all may sound very concerning and you may wonder what should you do and how can you stop ' +
                'yourself. ' +
                'Many countermeasures are becoming a lot more popular and these are very important if you want to be ' +
                'safe on the web ' +
                'One of them is a Virtual Protective Network(VPN). VPNs put a mask over your IP address with a new ' +
                'one and shield your location.\n' +
                '\n' +
                'Some websites don’t like VPNs however because they like to know this info about you so make sure ' +
                'you get a good one that can be hard to detect. ' +
                'I use [Proton VPN](https://protonvpn.com/) personally. ' +
                'Another great thing that is coming into play is that white hat hackers are being respected more ' +
                'and becoming more valuable. \n' +
                '\n' +
                'Now if you don\'t know what the different types of hackers are, [Geeksforgeeks wrote a great article]' +
                '(https://www.geeksforgeeks.org/types-of-hackers/) I recommend you read.' +
                'To summarize, black hat hackers are the hackers that are there with ill intent. These are the ones ' +
                'that will steal money and information. Some even just ruin things for enjoyment. ' +
                'Grey hat hackers can be easily explained in the "grey" area of the two of them. This is because ' +
                'they are not legally authorized hackers but do not always act to hurt others. ' +
                'Finally, white hat hackers, also known as ethical hackers, are hired by companies to try and hack ' +
                'into their websites or database to find vulnerabilities. These hackers will test security features ' +
                'like the firewall or how easy it would be to steal data.'
        },
        {
            title: 'Summary',
            img: Ethical4,
            description: 'Random characters flowing over the screen from top to bottom in the color green with a black background, the matrix.',
            text: 'In today\'s age of the internet, some white hat hackers were not respected that well by companies, ' +
                'and some were neglected to the point where companies don’t think they need them. ' +
                'As the future of the web comes along it will be increasingly important for these white hat hackers to ' +
                'be a part of online companies and increase safety for their users.\n' +
                '\n' +
                'Not only will white hat hackers help keep companies and their data safe, but they will also help ' +
                'with these upcoming smart contracts as well as blockchain security to stop people from taking advantage ' +
                'of unprotected companies or individuals. ' +
                'Innovation on the internet is not exactly good or bad, in my opinion, it can be seen as a middle ' +
                'ground. Where there is light there will always be shadow.' +
                'As black hat hackers rise to the occasion so will white hat hackers. I would not say there is anything ' +
                'to worry about though. Individuals need to keep themselves and their information safe.\n' +
                '\n' +
                'If this post does well I will be releasing a new article about being safe on the internet and new ways ' +
                'to protect yourself and your information with the evolving web. ' +
                'Comment below as well if you have any topics you would like me to write about.\n' +
                '\n' +
                'Be safe!'
        }
    ]
    const Detail = Details.find((article) => article.url === '/articles/ethical-hacking');
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
            <GoogleAdSense publisherId="pub-7878345029704986" />
            <Head>
                <title>{Detail.title}</title>
                <meta property='og:title' content='EthicalHackers'/>
                <meta property='og:image' content={EthicalMain}/>
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