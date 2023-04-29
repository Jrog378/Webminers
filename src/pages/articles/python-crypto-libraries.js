import {Card, Container} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import CryptoCoding1 from "../../images/articleimages/CryptoCoding1.webp";
import CryptoCoding2 from "../../images/articleimages/CryptoCoding2.webp";
import CryptoCoding3 from "../../images/articleimages/CryptoCoding3.webp";
import CryptoCoding4 from "../../images/articleimages/CryptoCoding4.webp";
import CryptoCoding5 from "../../images/articleimages/CryptoCoding5.webp";
import CryptoCodingMain from "../../images/articleimages/CryptoCodingMain.webp";
import Details from "@/components/details";
import Email from "@/components/email";
import {GoogleAdSense} from "nextjs-google-adsense";
import React from "react";

export default function PythonCryptoLibraries() {
    const Article = [
        {
            img: CryptoCodingMain,
            title: '',
            id: '',
            description: 'Mac laptop with multiple lines of code shown on its screen next to a black mouse as ' +
                'well as a black iPhone and Apple watch.',
            text: 'Knowing how to program in Python can be an amazing tool, especially in the world of ' +
                'finance and cryptocurrency. Just knowing how to program in Python might not be enough, ' +
                'however. There is so much more to explore within the language and to fully unlock its ' +
                'potential, libraries are heavily suggested.\n' +
                '\n' +
                'There are many libraries out there for Python when attempting to use the language with ' +
                'crypto investing, and luckily I have already tried all the bad ones. Here are the best ' +
                'libraries I have found when coding for crypto.\n' +
                '\n' +
                '1. [Pytorch / Sklearn](#PytorchSklearn)\n' +
                '2. [CoinGecko](#Coingecko)\n' +
                '3. [Scrapy](#Scrapy)\n' +
                '4. [APIs and Personal Code](#APIs)\n'
        },
        {
            img: CryptoCoding1,
            title: 'PyTorch / Sklearn',
            id: 'PytorchSklearn',
            description: 'A white typewriter with white keys and a white piece of paper in it with the words ' +
                'machine learning typed out in bold letters.',
            text: 'Pytorch and Sklearn may sound similar, that is because they are machine-learning ' +
                'libraries. Machine Learning and AI have been booming recently, and you can hop on the ' +
                'bandwagon with these libraries. From personal experience, I do not recommend you use these ' +
                'libraries to analyze price data. For now, there just is not enough data to be able to make accurate predictions. Instead, use AI to be more of support rather than the core of your investing system.\n' +
                '\n' +
                'Risk management and portfolio optimization are key factors to an efficient portfolio. AI can ' +
                'help with that. Using AI can give cryptocurrencies a score that is more accurate of how efficient ' +
                'they are when compared to calculating by hand. AI can sift through the outliers that may be ' +
                'messing up your data or other issues that we humans just cannot detect. To see what efficiency ' +
                'data looks like, visit [Webminers Efficiency](/efficiency).\n' +
                '\n' +
                'Economic analysis. Rather than attempting to find out exactly how today will go for the stock ' +
                'market, AI can be used to make more general predictions. These can be things like unemployment, ' +
                'social media sentiment, and attempting to detect whether or not a significant event in the ' +
                'news will turn into a [Black Swan Event](https://www.investopedia.com/terms/b/blackswan.asp)\n'
        },
        {
            img: CryptoCoding2,
            title: 'CoinGecko',
            id: 'Coingecko',
            description: 'Fifty-four golden, bronze, and silver cryptocurrency coins all sitting out on a dark grey ' +
                'surface evenly separated and flat.',
            text: '[CoinGecko](https://www.coingecko.com/) is a great resource for cryptocurrency research and gives ' +
                'you a lot of data about tons of cryptocurrencies, some you might not have even heard of, but are glad ' +
                'you looked into. CoinGecko also has an API. This API is then put into a library that you can use ' +
                'in Python. Using the library in Python is super easy with detailed directions on their ' +
                '[API Guide](https://apiguide.coingecko.com/getting-started/introduction).\n' +
                '\n' +
                'With your newly acquired data, you can start looking into the efficiency of coins and analysis ' +
                'of whether or not they match the standards of your investing system. Looking into coins with ' +
                'their market data can bring insights into the past without even having to have been investing ' +
                'during the time you are looking at. Overall this is a great use of historical data.\n' +
                '\n' +
                'Using this data is not just for looking into assets by hand. This historical data can be used ' +
                'in more hands-on investing as well. Creating indicators to tell you when a good or bad time ' +
                'to buy can open many doors using this data. You can also use this data to power a machine ' +
                'learning model with the previous packages, PyTorch and Sklearn.\n'
        },
        {
            img: CryptoCoding3,
            title: 'Scrapy',
            id: 'Scrapy',
            description: 'A person holding an iPhone with a stocks balance screen showing on it with a mac ' +
                'laptop in the background showing the market.\n',
            text: 'Scrapy is a library that is extremely overlooked when it comes to finance. With Scrapy, you ' +
                'can web scrape live data from sites that are showing crypto prices, create automated scripts to ' +
                'alert you when a certain event happens, and find potential cryptocurrencies that are about to ' +
                'skyrocket.\n' +
                '\n' +
                'Using Scrapy might be a little difficult to get into at first, but once you do, it’ll be well ' +
                'worth it. Being able to have any data from across the entire web at the touch of a button ' +
                'feels like infinite power. This data can even be from social media where you can make a ' +
                'sentiment indicator based on whether people are talking positively or negatively about crypto.\n' +
                '\n' +
                'Scraping financial data is made easy as well. If you make a [Yahoo Finance]' +
                '(https://finance.yahoo.com/) scraper, you can have any amount of data you want relating to ' +
                'finance and all markets. They are so much data on Yahoo Finance, your only issue will be where ' +
                'to store all the datasets.\n'
        },
        {
            img: CryptoCoding4,
            title: 'APIs and Personal Code',
            id: 'APIs',
            description: 'A giant downward swirl of lines that look like a tornado containing different ' +
                'cryptocurrency coins floating around inside it.\n',
            text: 'Personal APIs and Code are a great way to create automated scripts that can do the brunt ' +
                'work that you need to repeat over and over. Sometimes there just isn\'t a library for the things ' +
                'you want to do. So what is your option? Build it yourself.\n' +
                '\n' +
                'Building scripts to help with your financial issues allows for more specialized solutions ' +
                'that are fully tailored to you. These solutions can also be modified and added to as your ' +
                'needs grow. With my code, I am constantly trying to improve it with more automation and less ' +
                'work on my end between running it. Check out [Webminers Insights](/insights) to see the graphics my ' +
                'automation has created for me.\n' +
                '\n' +
                'Other than automated scripts you can also create automated API calls. Some financial APIs do ' +
                'not have Python libraries for you to use, in that case, you have to make your script all on ' +
                'your own. Being able to integrate APIs from outside sources is a great skill to have and ' +
                'allows you to be much more versatile with the data and resources that you end up using.\n'
        },
        {
            img: CryptoCoding5,
            title: 'Final Comments',
            id: '',
            description: 'A dark room with a desk that has a plant, laptop, lamp, and a lit-up computer screen ' +
                'on top of it next to a leather chair.',
            text: 'Machine Learning, Finance APIs, web Scraping, and personal automation can help you create ' +
                'the ultimate toolkit for incorporating programming into your Crypto Investing. All of this is ' +
                'no good until you master the basics of Python. Some of these libraries are complex and might ' +
                'not make sense to someone who has just started in Python. Check out ' +
                '[Python Has Been Taking Over The Data Science World](python-data-science) ' +
                'if you are interested in a brief introduction to Python for Data Science learning Python.\n' +
                '\n' +
                'Once you know enough Python consider reading [Python for Crypto and Finance](python-for-finance) for direct uses ' +
                'for these Python libraries in Crypto and Finance.\n' +
                '\n' +
                'Interested in more information like this? Join the [Webminers Email List](/email-list) ' +
                'for updates on articles and general information\n'
        }
    ]
    const Detail = Details.find((article) => article.url === '/articles/python-crypto-libraries');
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
                <meta property='og:title' content='PythonCryptoLibraries'/>
                <meta property='og:image' content={CryptoCodingMain}/>
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