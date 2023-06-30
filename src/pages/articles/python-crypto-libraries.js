import CryptoCoding1 from "../../images/articleimages/CryptoCoding1.webp";
import CryptoCoding2 from "../../images/articleimages/CryptoCoding2.webp";
import CryptoCoding3 from "../../images/articleimages/CryptoCoding3.webp";
import CryptoCoding4 from "../../images/articleimages/CryptoCoding4.webp";
import CryptoCoding5 from "../../images/articleimages/CryptoCoding5.webp";
import CryptoCodingMain from "../../images/articleimages/CryptoCodingMain.webp";
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function PythonCryptoLibraries() {
    const Article = [
        {
            img: CryptoCodingMain,
            title: '',
            id: 'Intro',
            description: 'Mac laptop with multiple lines of code shown on its screen next to a black mouse as ' +
                'well as a black iPhone and Apple watch.',
            text: 'Crypto and Programming are amazing fields to be getting into right now. Cryptocurrency and the blockchain are new fields that get the seasonal attention it needs to start being adopted more in the business world and Python has become the most popular programming language in the world. The best way to stand out from the crowd is to take two skills that are not usually seen together and combine them into something great. Python crypto libraries do just that.\n' +
                '\n' +
                'Here are the 4 categories of Python crypto libraries that can help you get ahead of the game:\n' +
                '\n' +
                '1. [Artificial Intelligence](#AI)\n' +
                '2. [Crypto Investing](#Investing)\n' +
                '3. [Self-Built](#SelfBuilt)\n' +
                '4. [Web Scraping](#WebScraping)\n'
        },
        {
            img: CryptoCoding1,
            title: 'Artificial Intelligence',
            id: 'AI',
            description: 'A white typewriter with white keys and a white piece of paper in it with the words ' +
                'machine learning typed out in bold letters.',
            text: 'Artificial intelligence is a booming field right now that has made a great impact on today\'s business just from the extreme attention it got from [ChatGPT](https://www.techradar.com/news/chatgpt-explained). Everyone wants a piece of AI and this has made it a fundamental building block for the coding future. AI has been around for some time but never has it had the ability that it does today. As cryptocurrency investors we want a piece of this technology to ease our work as well as improve accuracy.\n' +
                '\n' +
                'To reach this point of improvement in Artificial Intelligence, the doors open for programming this AI with our Python crypto libraries. The top libraries for this technology are [Pytorch and Sklearn](https://www.netguru.com/blog/top-machine-learning-frameworks-compared). Machine Learning and AI have many abilities and with these libraries, you will be able to start to attempt these advanced feats by making the tasks themselves not so difficult. A library\'s whole job is to make life easier.\n' +
                '\n' +
                'Pytorch is a very strong library for Deep Learning, which is a subcategory of AI, and processing data over time. Using Pytorch we can take price data and their corresponding dates and put them into our AI model to begin analyzing and looking for trends, also known as time series analysis. This type of AI model defines the future of finance, due to the amount of applications it can be used for and the potential profit that is possible from a successful model. Sklearn is our second library that is best suited for regular data points that can be analyzed with a time series. This could be [efficiency data](/efficiency), or portfolio balancing and is a great way to reduce the risk of your investment by making predictions or producing findings.\n'
        },
        {
            img: CryptoCoding2,
            title: 'Crypto Investing',
            id: 'Investing',
            description: 'Fifty-four golden, bronze, and silver cryptocurrency coins all sitting out on a dark grey ' +
                'surface evenly separated and flat.',
            text: 'Even though AI can help us with blockchain investments, other things need to be done with programming. Our Python crypto libraries can also help us with the investing itself. [Creating a crypto investing system](start-investing) will process data and be able to identify trends that we can profit from. To see this data we need to process it and visualize it. [Crypto data visualization](data-vis) is made easy with Python from libraries like Plotly and processing this data to find our trends can be done with Numpy or Pandas, which are the [best python crypto libraries for beginners](https://learnpython.com/blog/python-libraries-for-beginners/).\n' +
                '\n' +
                'To build a well-rounded investing system, we should be able to see the data and how it flows rather than just looking at a bunch of numbers. Risk management and portfolio optimization are key factors to this efficient investing system as well and those can be done with our data processing. This investing system has the potential to use economic data about inflation or GDP to make our findings more accurate by using libraries like Numpy or Pandas. This [macroeconomic data](https://www.investopedia.com/terms/m/macroeconomics.asp) can be used to identify bull and bear markets as well as overall market stability that cannot be found just by looking at the price.\n' +
                '\n' +
                'The use of APIs can also help tie our whole investing system together. To get our data, it has to come from somewhere and APIs are an easy source that can provide real-time data anytime you want. This data could be price data or in some cases even precalculated indicators like the [relative strength index](https://www.fidelity.com/learning-center/trading-investing/technical-analysis/technical-indicator-guide/rsi) for the day or the 24-hour volume. After you process this data with our libraries mentioned above, we can then use our APIs to place trades with exchanges. These exchanges will take your request and buy real cryptocurrencies from the money in your account, putting the crypto into your account after. This is how you can do the actual buying and selling, all from your code. Using these APIs and the Artificial Intelligence from above gets you one step closer to [becoming an AI Quant](ai-quant-investing) if this type of work interests you.\n'
        },
        {
            img: CryptoCoding3,
            title: 'Self-Built',
            id: 'SelfBuilt',
            description: 'A person holding an iPhone with a stocks balance screen showing on it with a mac ' +
                'laptop in the background showing the market.\n',
            text: 'Not everything is in the form of a library where you just have to write a few lines of code and your investment will be perfect. This means that you have to do some work of your own and creatively solve problems. With this creative work, you will also be solving problems that others have not before, giving you a leg up and allowing you to make a profit by [separating from the crowd](crypto-crowd-is-wrong). When mixing Python and Crypto you are going to run into some issues that have not been reached before, however, by overcoming them you will reach goals that have not been reached before.\n' +
                '\n' +
                'Python crypto libraries for [Web3 solutions like crypto or decentralized applications](web3-crypto-growth) are a great avenue for innovation. Creating your libraries or systems that you can run to save time should be considered since they will be great time savers and allow you to efficiently work by using your solutions tailored to you. Since we are on the topic of Python crypto libraries for decentralized applications, it should be noted that Python is a great programming language for development in decentralized finance, also known as DeFi. DeFi is all about solutions to complicated problems that you might have found and depending on the solution you create, can be quite virtuous.\n' +
                '\n' +
                'The most advanced Python crypto libraries for developers were once made by a programmer, and that programmer can be you with your library. This can open you up to educational paths as well where you end up being the one who is helping other investors create their efficient investing systems with your work. Python crypto libraries for DeFi are scarce because it is a new field where even if the libraries we have to pick from are not that good, investors will still push to use them since it is their only option. You can make that change with your library by producing a great product for anyone to use.\n'
        },
        {
            img: CryptoCoding4,
            title: 'Web Scraping',
            id: 'WebScraping',
            description: 'A giant downward swirl of lines that look like a tornado containing different ' +
                'cryptocurrency coins floating around inside it.\n',
            text: 'When you do not have APIs to get data and use for your applications, you might feel like you are completely stuck. Maybe your API does not provide enough historical data or has limited assets. This can be very frustrating because you might have to change plans and figure out another way to get your data. When APIs are limited, your best option is to get the data yourself. You can do so by grabbing the data from a [website like Yahoo Finance](https://www.scrapingdog.com/blog/scrape-yahoo-finance/) and then using this data for your decentralized application or crypto investing system.\n' +
                '\n' +
                'Web scraping, the process of obtaining data from websites, can be done in Python. The top two Python libraries for [web scraping are Beautiful Soup and Scrapy](https://towardsdatascience.com/choose-the-best-python-web-scraping-library-for-your-application-91a68bc81c4f). Beautiful Soup is easy to use and learn, so it is best for small projects or times when you do not need to get data from a complicated site. Scrapy is an entire web scraping framework that can be used with full-scale projects and applications. The future of computing relies on people being able to get their data that is not already provided by an API and web scraping is the way to reach that.\n' +
                '\n' +
                'Web scraping for blockchain technology with Beautiful Soup or Scrapy allows us to have data that is not readily available and can make us more efficient in development and investing. Decentralization as a whole can always benefit from more data since users are anonymous, making it harder when compared to regular applications. [Data collection must become more creative](https://emeritus.org/blog/data-analytics-what-data-collection/) and programmers have to create unique solutions that fit themselves best. When we push for more innovation, this leads to a sturdier environment that even offers more hospitality if done well.\n'
        },
        {
            img: CryptoCoding5,
            title: 'Final Comments',
            id: 'FinalComments',
            description: 'A dark room with a desk that has a plant, laptop, lamp, and a lit-up computer screen ' +
                'on top of it next to a leather chair.',
            text: '### What libraries are best for beginners to Python?\n' +
                'Numpy and Pandas are the best options for those who are new to Python and still want to get involved with programming and the blockchain.\n' +
                '\n' +
                '### How can you use Python to your advantage with decentralization\n' +
                'Python is great for creating applications and investing systems since it is the most popular programming language in the world. This gives it a ton of support and libraries to work with to reach your programming goals\n' +
                '\n' +
                '### What should I do when there are no libraries or APIs for what I want to do?\n' +
                'If there are no libraries or APIs for what you want to do then your best option is to build yourself a program that can do everything for you. Using libraries for web scraping can help you replace APIs and most libraries that you wish were there can still be created by yourself.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}