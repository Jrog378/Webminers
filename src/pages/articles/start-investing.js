import {Card, Container} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import StartInvestingMain from '../../images/articleimages/StartInvestingMain.webp'
import StartInvesting1 from '../../images/articleimages/StartInvesting1.webp'
import StartInvesting2 from '../../images/articleimages/StartInvesting2.webp'
import StartInvesting3 from '../../images/articleimages/StartInvesting3.webp'
import StartInvesting4 from '../../images/articleimages/StartInvesting4.webp'
import StartInvesting5 from '../../images/articleimages/StartInvesting5.webp'
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

export default function StartInvesting() {
    const Artsections = [
        {
            img: StartInvestingMain,
            title: '',
            id: '',
            description: 'Black iPhone screen displaying the stocks app with 6 different companies resting on a sheet' +
                ' of paper with a blue chart on it.',
            text: 'Investing is such a broad topic that when looking into it before starting in this field, ' +
                'it can be very overwhelming. Don’t worry because it doesn\'t have to be this way. ' +
                'Investing is strategically giving something away to get something more valuable. Investing ' +
                'can be the trade of money for assets, time for money, or even money for time. Interested in' +
                ' learning more about what you can invest in? I wrote about that in ' +
                '[What Makes Investing a Timeless Money Maker](timeless-investing).\n' +
                '\n' +
                'We will go into how I got into investing first. After that, we will ease into examples of' +
                ' valuable investments and the different investing styles. Finally, we will cover how to ' +
                'keep improving your investing game.\n' +
                '\n' +
                '1. [My Investing Background](#InvestingBackground)\n' +
                '2. [Best Investments You Can Make](#BestInvestments)\n' +
                '3. [Different Investing Styles](#InvestingStyles)\n' +
                '4. [How To Keep Improving](#KeepImproving)\n'
        },
        {
            img: StartInvesting1,
            title: 'My Investing Background',
            id: 'InvestingBackground',
            description: 'A piece of paper with multiple stats both in number and graphical form on top of another ' +
                'piece of paper displaying a map.',
            text: 'My background didn’t start in the investing world. I began with programming and later on ' +
                'joined the data science field, where I would then learn about finding information from data ' +
                'and being able to use these findings. I had been using [Coinbase](https://www.coinbase.com/) ' +
                'around these times with the free coins they would give, but none of my money.\n' +
                '\n' +
                'After being exposed to Data Science, I knew the possibilities and how this can apply to finance. ' +
                'I began to research. I looked into programming algorithms and data found on the web. I also ' +
                'looked into Economic data. I got to pick and choose what things I liked and didn’t like until' +
                ' I was satisfied with the results.\n' +
                '\n' +
                'After finding what best suited my investing style, I refined everything and put it all together ' +
                'to work with my other resources to give me a final answer of what the market is like each day. ' +
                'My investing system has a little bit of everything, each having its purpose and coming together ' +
                'nicely.\n'
        },
        {
            img: StartInvesting2,
            title: 'What Are Your Investing Options?',
            id: 'BestInvestments',
            description: 'Five large bars of gold next to eight tiny bars of gold all containing engravings ' +
                'of the weight as well as a company.',
            text: 'The best investments you can make go into two categories, assets, and non-assets. ' +
                'Most assets must have a set strategy and rules you must follow because if you are going away ' +
                'from them, this is an emotional decision. Emotional decisions are also decisions without data' +
                ' to support them, leading to us avoiding these as much as possible to prevent losses. You can' +
                ' read more about it in my article ' +
                '[What it Takes to Become a Smart Emotionless Investor](top-investor). ' +
                'Non-assets are more item specific that do not require this type of strategy.\n' +
                '\n' +
                'All assets hold risk. Some are slightly risky, like bonds. Others are more risky, like ' +
                'cryptocurrencies and shares of a company. Physical Assets can be Businesses, Stocks, ' +
                'Cryptocurrencies, or collector’s items like cars or watches. The price of these assets ' +
                'will go up and down as time progresses. It is up to you to determine when the price is ' +
                'less costly than usual and when it is more. It is important that anytime you buy an asset, ' +
                'you are hoping it will eventually be more valuable than when you bought it.\n' +
                '\n' +
                'In many cases, non-assets require something other than money to acquire. Knowledge, happiness, ' +
                'and personal health are all great examples of this. Working out and studying both take time. ' +
                'Non-assets can be valuable or worthless, depending on which you get. The important part is ' +
                'finding out which they are is more simplistic than buying a stock or crypto. Non-assets are ' +
                'just as needed because your well-being is closely linked. Never put a price on your health ' +
                'and happiness.\n'
        },
        {
            img: StartInvesting3,
            title: 'Finding Your Investing Style',
            id: 'InvestingStyles',
            description: 'Gold Coins Bitcoin and Litecoin sitting on top of a two-toned background with the colors ' +
                'light blue and light orange.',
            text: 'Successful investing comes in many forms. With this amount of different types of ' +
                'investing comes similarities. The categories that collect these similarities are Market Structure ' +
                'Investing and Reflexive Investing. I’m sure you will find more out there, and these categories ' +
                'are just guidelines for your to build your investing system on top of. Both of these work on ' +
                'every timeframe as well.\n' +
                '\n' +
                'Market Structure Investing uses patterns and possible directions based on ' +
                '[Candle Charts](https://www.wikihow.com/Read-a-Candlestick-Chart). ' +
                'These candle charts will give you insights into the price, including different areas of ' +
                'resistance and support based on previous candles. Candles will show you the open, close, ' +
                'high, and low for that given period. Finding patterns in the data and candles is crucial ' +
                'for a successful Market Structure Investing strategy. Indicators like RSI or Moving Averages a' +
                're necessary for this type of investing to ensure accuracy.\n' +
                '\n' +
                'Reflexive Investing takes advantage of the fact that markets have turning points where they ' +
                'will change direction. These changes in momentum are the buying and selling points of your ' +
                'strategy. Reflexive Investing is mainly data-driven from indicators from before or your ' +
                'custom-made indicators. Here at Webminers, we use both. The Webminers investing system has ' +
                'lots of different data. Our data can then come together to create one solid signal with few ' +
                'weaknesses since our target is on just one type of movement. Check it out at ' +
                '[Webminers Market Insights](/insights)\n'
        },
        {
            img: StartInvesting4,
            title: 'Continuously Getting Better',
            id: 'KeepImproving',
            description: 'Blank crabble letter blocks in a pile with the letters l e a r n on top in black text to ' +
                'spell out the word learn.',
            text: 'Building an Investing System is the first step. Next, you must maintain it. Maintaining an ' +
                'investing system takes time and research. You should test your investing system often, ensuring ' +
                'you can trust it. Make sure to start small and see how it performs. This way, if you lose money, ' +
                'it will only be a tiny amount.\n' +
                '\n' +
                'Being able to lose money with a calm mind is very important in investing because you will ' +
                'encounter losses eventually. Managing those losses and not letting your emotions take control ' +
                'will prevent even further loss. Teach yourself new topics, learn about the philosophies of ' +
                'the market, and develop yourself into a successful investor. \n' +
                '\n' +
                'Money doesn\'t grow on trees. Once you start to get returns with your investing system, don’t ' +
                'stop working hard on it. Keep learning and keep developing. Keeping your mind set on the next ' +
                'goal will keep you going. Make sure to invest in yourself when you can.\n'
        },
        {
            img: StartInvesting5,
            title: 'Summary',
            id: '',
            description: 'Success go get it with arrows on either side of the text is written on a black board in ' +
                'chalk with success in a bolder font.',
            text: 'Most investors receive inconsistent gains in their portfolios. Reaching consistency ' +
                'and prestige takes time, focus, and effort. Those lazy investors are only good news for ' +
                'you because this creates opportunities. After finding the type of investing style that ' +
                'suits you, it is time to develop your system. Finally, bring home the profit and keep ' +
                'growing.\n' +
                '\n' +
                'Enjoyed this blog? Consider joining our [Email List](/email-list)'
        }
    ]

    const Sections = Artsections.map(sections =>
        <Card key={sections.id} style={{borderStyle: 'none', background: 'none', padding: '1% 8%', width: '80%'}}>
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
        </Card>
    )

    return (
        <>
            <Head>
                <title>How to Start Investing - What I Did to Create my Investing System</title>
                <meta property='og:title' content='StartInvesting'/>
                <meta property='og:image' content={StartInvestingMain}/>
                <meta name='description'
                      content='Finding valuable investments and creating your own investing system can seem complex,
                       but things can be much easier than they seem with the right guidance.'/>

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
                                How to Start Investing - What I Did to Create my Investing System
                            </Card.Title>
                            <Card.Text style={{color: 'rgb(200,200,200)', padding: '3% 10%', fontStyle: 'italic'}}>
                                Published on: Mar 28 2023
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