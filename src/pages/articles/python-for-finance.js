import {Card, Container} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import PythonFinMain from '../../images/articleimages/PythonFinMain.webp'
import PythonFin1 from '../../images/articleimages/PythonFin1.webp'
import PythonFin2 from '../../images/articleimages/PythonFin2.webp'
import PythonFin3 from '../../images/articleimages/PythonFin3.webp'
import PythonFin4 from '../../images/articleimages/PythonFin4.webp'
import PythonFin5 from '../../images/articleimages/PythonFin5.webp'
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Details from "@/components/details";
import Email from "@/components/email";
import {GoogleAdSense} from "nextjs-google-adsense";
import React from "react";

export default function PythonForFinance() {
    const Article = [
        {
            img: PythonFinMain,
            description: 'Robot hand reaching out with one finger to a geometrically shaped group of white lines ' +
                'with a black background lit up by light.',
            text: 'The field of finance is very diverse and full of opportunity. Well, what if you want an opportunity with programming? You’re in luck. Finance is a great field for programming and Financial Programmers and Developers will only be more needed as time goes on. Here are some ways that you can get involved with finance using programming knowledge in Python Online.\n' +
                '\n' +
                '1. [Artificial Intelligence with Python (Like ChatGPT)](#ArtificialIntelligence)\n' +
                '2. [Python Automation](#Automation)\n' +
                '3. [Quantitative Programming](#QuantitativeProgramming)\n' +
                '4. [Data Visualization](#DataVisualization)\n'
        },
        {
            img: PythonFin1,
            title: 'Artificial Intelligence',
            id: 'ArtificialIntelligence',
            description: 'A green histogram chart that is going up and down across an hourly period with shading ' +
                'on the bottom and a white background.',
            text: 'Artificial Intelligence, also known as AI, is both a gift and a curse. Important figures like ' +
                'Elon Musk have warned about the lack of control AI has, but who could slow down the progress of ' +
                'this amazing technology on purpose? [ChatGPT](https://openai.com/) is a great example of this ' +
                'where upon its release thousands of people swarmed the gates to try this revolutionary technology. ' +
                'Technology using AI is not just helpful to us in text form as well.\n' +
                '\n' +
                'AI has begun to make its impact on finance already as it has the rest of the world. There are uses ' +
                'for AI in investing, risk management, fraud, and more. Python is one of the easiest programming ' +
                'languages to pick up if you are new to coding. With this said, it is important to note that when ' +
                'pairing difficult problems with simple programming languages there tend to be issues that come ' +
                'up. Packages like [OpenCV](https://opencv.org/) and [PyTorch](https://pytorch.org/) allow us to ' +
                'blend AI with Python Programming.\n' +
                '\n' +
                'Being able to learn Python is becoming almost necessary in most coding fields due to the language ' +
                'becoming one of the most popular programming languages right now. This also makes it one of the ' +
                'best languages to use in finance itself. Popular languages allow for larger communities for ' +
                'problem-solving or program improvement. Python’s outlook on finance is quite the view as it has ' +
                'a ton of potential\n'
        },
        {
            img: PythonFin2,
            title: 'Automation',
            id: 'Automation',
            description: 'A bunch of gears positioned together and behind one another that are multiple different ' +
                'colors and of different sizes as well.',
            text: 'Automation is one of the more interesting types of programming jobs. You make scripts that can ' +
                'be used over and over again, on timers and by hand. Having an automated program takes more work ' +
                'upfront, in turn, this causes a larger ease of the load once your program is already made. With ' +
                'Automation, you can work much fewer hours than the regular programmer and make the same amount ' +
                'as long as you have already done the programming beforehand. \n' +
                '\n' +
                'Python is great for automation, especially with the package Selenium. You can automate the boring ' +
                'stuff with Python, or you can automate the tedious tasks that are better off left to the computers.' +
                ' When I was working with automation I went into web scraping as well with Python Programming. Read ' +
                'more about my experience in my article, ' +
                '[How I Built a Financial Website with Articles and an Investing System]' +
                '(introduction). Automating tasks in Python is the staple to time ' +
                'efficiency in a business. Being able to conduct a task in less time is a priceless skill, which ' +
                'is all the reason that automation is in so much demand.\n' +
                '\n' +
                'Being able to build quality automation will take time, but that is fine because everyone starts ' +
                'somewhere. Keeping a clear mind will help you along your journey, ' +
                '[The Best Ways to Improve your Mental State for Smarter Investing](mental-improve) will guide you ' +
                'in the right direction for this. ' +
                'Check out packages like Numpy, Pandas, BeautifulSoup, and Scrapy to fast-forward the process ' +
                'of learning Python Automation.\n'
        },
        {
            img: PythonFin3,
            title: 'Quantitative Programming',
            id: 'QuantitativeProgramming',
            description: 'A page from a mathematics textbook containing a derivative and covered with a small ' +
                'black magnifying glass zooming in on it.',
            text: 'Quantitative Programming, also known as the profession of mathematical programming in investing, ' +
                'is a timeless profession, hobby, and activity. Being able to create a program that can identify ' +
                'when to buy and sell in the financial markets can provide almost unlimited money. The reason ' +
                'that this type of programming can be so lucrative is because of how difficult it would be to ' +
                'create the most profitable program. No need to worry, there is plenty of money out there so ' +
                'not being the top programmer in Quantitative Programming should not matter to you when starting.\n' +
                '\n' +
                'Quantitative Programming in Python from the outside makes you want to just download a bunch of ' +
                'libraries to assist you in doing all the work but when it comes down to it, you are better off ' +
                'building from the ground up. To start you will need your data. An API like ' +
                '[CoinGecko](https://www.coingecko.com/) is ' +
                'a good place to start. Once you have your data, you can go crazy. Experiment with everything ' +
                'you can get your hands on, and develop your data based on the price and volume. Do anything ' +
                'you can to be creative so that you can come out on top with something unique to you.\n' +
                '\n' +
                'When I started in Quantitative Programming in crypto I tested out a lot of libraries but none of them ' +
                'for the actual finance part were good enough. Building your own comes with the customization ' +
                'you need to be successful. After that, you can get into becoming a lucrative Quantitative ' +
                'Programmer, being able to make financial decisions with the touch of a button.\n'
        },
        {
            img: PythonFin4,
            title: 'Data Visualization',
            id: 'DataVisualization',
            description: 'A white piece of paper containing two pie charts that have wedges that are colored ' +
                'many different shades of red on a desk.',
            text: 'Data Visualization is one of the most important parts of anything relating to data because it ' +
                'is the way that you can transform a bunch of numbers into a graphic that makes sense to more ' +
                'than just data scientists. Data Visualization can be in the form of Investing and Regular ' +
                'Finance, like a company\'s profit, or Mortgage Rates over the past 50 years.\n' +
                '\n' +
                'Data Visualization is used in articles, research papers, presentations, you name it. ' +
                'Visualizing our data is how we communicate with those who might not understand if we just ' +
                'spit out a pile of numbers. Having a visual allows them to see changes with their own eyes ' +
                'and leads to a deeper understanding of what you are trying to show. \n' +
                '\n' +
                'Webminers data visualization in two ways. First, we use Data Visualization in our ' +
                '[Investing Insights](/insights) where we plot on a graph where the market is statistically for ' +
                'different timeframes and assets. We also include visuals in our [Asset Balancing](/balancing) ' +
                'with pie charts to make our numbers stand out more and allow users to visually see how much ' +
                'each proportion is. Data Visualization is all around us.\n'
        },
        {
            img: PythonFin5,
            title: 'Final Thoughts',
            description: 'A bunch of dollar bills all stacked on top of each other with the face side up in a ' +
                'spiral pattern going counter clockwise.',
            text: 'Financial Programming in Python can be whatever you decide to make of it. Whether this be AI, ' +
                'Automation, Quantitative Programming, Data Visualization, or all of them combined, it is up to ' +
                'you how you want to shape your own programming experience. To learn investing along with ' +
                'Programming in Python for Finance, read our article, [How to Start Investing](start-investing). If you ' +
                'are interested in more financial programming, visit [Webminers Efficiency](/efficiency) to see ' +
                'another page of ours using Financial Programming in Python for computation.'
        }
    ]
    const Detail = Details.find((article) => article.url === '/articles/python-for-finance');
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
                <meta property='og:title' content='PythonFOrFinance'/>
                <meta property='og:image' content={PythonFinMain}/>
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