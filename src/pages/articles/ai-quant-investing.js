import AIQuantMain from '../../images/articleimages/AIQuantMain.webp'
import AIQuant1 from '../../images/articleimages/AIQuant1.webp'
import AIQuant2 from '../../images/articleimages/AIQuant2.webp'
import AIQuant3 from '../../images/articleimages/AIQuant3.webp'
import AIQuant4 from '../../images/articleimages/AIQuant4.webp'
import AIQuant5 from '../../images/articleimages/AIQuant5.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function AiQuantInvesting() {
    const Article = [
        {
            img: AIQuantMain,
            title: '',
            id: '',
            description: 'Apple iPad with an investing app open that is showing the value of Bitcoin with a red ' +
                'line chart sitting on a wooden table.',
            text: 'AI is a powerful thinking machine that is getting closer to being able to make ' +
                'human-like decisions. This is important for investors because to stay ahead of the game we ' +
                'have to keep updated with the newest technology. Those who write mathematical or complex ' +
                'program algorithms in the Financial world are called Quantitatives or Quants. These Quants ' +
                'use set rules that happen multiple times to initiate buying and selling in Financial ' +
                'Markets. AI Quants will be on a whole new level.\n' +
                'Here are the steps it takes to become an Experience AI Quant:\n' +
                '\n' +
                '1. [Learning The Basics of Coding, Data, and Markets](#LearningBasics)\n' +
                '2. [Build an Investing System](#InvestingSystem)\n' +
                '3. [Introduce your AI](#IntroAI)\n' +
                '4. [Perfect Your System and Craft](#Perfection)\n'
        },
        {
            img: AIQuant1,
            title: 'Basics of Coding, Data, and Markets',
            id: 'LearningBasics',
            description: 'A smartphone that says Eat, Sleep, Code, Repeat, on it with a rainbow colored font ' +
                'in someone\'s hand surrounded by darkness.',
            text: 'If you have no experience in the realm of Quants you cannot expect to crush competition ' +
                'without learning the basics first. You will need to understand how to program well and be ' +
                'able to write automated programs that can run without you physically inputting data. I have ' +
                'experience with Automated Web Scraping and this allowed me to easily slide into being able ' +
                'to write Programs with [Python Libraries for Crypto Investing](/articles/python-crypto-' +
                'libraries). \n' +
                '\n' +
                'After Learning to Code you need to start using it in real-life situations with data. Data ' +
                'Science is a general field that includes AI so it would be helpful to do some projects. ' +
                'There are tons of APIs and free data out there for you to use and all you have to do is put ' +
                'in the work it takes to get them. Once you have your data, try out the different libraries ' +
                'that you could see yourself using in the future. This is your time to test as much as possible ' +
                'and find the libraries that work best with your coding style. Many programmers stick to the ' +
                'same libraries for a very long time. You may decide to find your library for life and a few ' +
                'that are constantly being shifted around.\n' +
                '\n' +
                'Data Science will be the hardest part of the basics because it is a broad field that has a ' +
                'lot to explore, and the markets are more precise. When studying the markets, most of your ' +
                'observations will be universal so don’t be afraid to just look at one or two assets. Binance ' +
                'has a nice article called [A Complete Guide to Cryptocurrency Trading For Beginners]' +
                '(https://academy.binance.com/en/articles/a-complete-guide-to-cryptocurrency-trading-for-beginners)' +
                ', which can get you started into the field. Once you have studied Finance and Economics, you ' +
                'will have the foundation you need to start the fun stuff.\n'
        },
        {
            img: AIQuant2,
            title: 'Build an Investing System',
            id: 'InvestingSystem',
            description: 'A smartphone in someone’s hand with a black screen that has an investing portfolio ' +
                'balance of $38,000 and a green line chart.',
            text: 'Building your investing system will come in many phases and it is important to start ' +
                'small. It will never be perfect and never be absolute. Certain parts will stop working ' +
                'and others will shine more than you have originally expected. Being able to adapt to your ' +
                'system is crucial. There are many styles of investing. In my article [How to Start ' +
                'Investing in Crypto](/articles/start-investing), I went over many of them, and AI ' +
                'applies to almost every one of them. For AI Quants, following data trends is the most ' +
                'straightforward and will most likely work best with our AI model.\n' +
                '\n' +
                'To build our AI model built to follow trends, we will acquire data from the markets ' +
                'in the form of Indicators like RSI, MACD, and Moving Averages, as well as price data. ' +
                'If you are interested in finding more indicators to use, read Investopedia’s article ' +
                'on their [7 Technical Indicators](https://www.investopedia.com/top-7-technical-analysis-' +
                'tools-4773275). Data Mining, also known as the extraction of useful data, can be used ' +
                'here to produce a more unique model that is not like competitors who may be using the ' +
                'same methods. Once we have our mined data from the markets we can begin to build our ' +
                'investing system to find out what works before for us and what does not.\n' +
                '\n' +
                'Backtesting, the use of historical data to test an investing system, will help you ' +
                'determine what indicators you like and what values you would like to keep constant with ' +
                'your indicators. Keeping constant values is important to ensure that you will get the ' +
                'same results every time you use the specific indicator and will come in handy when we ' +
                'move on to using AI.\n'
        },
        {
            img: AIQuant3,
            title: 'Introduce your AI',
            id: 'IntroAI',
            description: 'A see-through human shaped piece of plastic that is underneath a light shining down ' +
                'on it inside of a dimly lit blue room.',
            text: 'The AI we will be introducing to our new investing system is very similar to the AI talked ' +
                'about in my article about [Financial AI](/articles/financial-ai-and-data-science). This AI will ' +
                'help us determine the best possible outcome of each investment decision in our Quantitative ' +
                'Program. As we slowly begin to bring everything together with AI, you will notice that each ' +
                'of the components of our foundation is just as important as each other. AI is a developing ' +
                'technology and needs all the aid it can get to produce important results so there are no ' +
                'skipping corners around here.\n' +
                '\n' +
                'To incorporate AI you will not be able to just chuck all the data into a function and expect ' +
                'a good output. There will be trial and error just like our original investing system and you ' +
                'have to try different data with different algorithms. It might be best to start small and use ' +
                'AI for finding efficient assets you would like to invest in. We can also use it for balancing ' +
                'assets that we have already chosen. To do either, data mining would need to be in order. Your ' +
                'new data can even come from the methods I talked about in [Finding the Next Big Cryptocurrency]' +
                '(/articles/next-big-crypto) as well.\n' +
                '\n' +
                'Now that you have basic AI included in your investing system you can start to mix the ' +
                'programs. Making the Efficiency AI work with the Asset Balancing AI and combining programs ' +
                'to come to a more unified thinking and process of coming to a final result. This will ' +
                'increase accuracy because it limits human error and can be as precise as it needs to be to ' +
                'find the solution that the AI is happy with.\n'
        },
        {
            img: AIQuant4,
            title: 'Perfect Your System and Craft',
            id: 'Perfection',
            description: 'Dark wooden scrabble letters with black writing that write out practice makes ' +
                'perfect all connected together on a white surface.',
            text: 'AI is powerful and no matter how much AI you are putting into your investing system you have ' +
                'to be constantly monitoring it. Just like your original investing system, things can stop working ' +
                'and aspects may need to be replaced with all new code or modified. Perfecting your investing ' +
                'system will take work but the results will be very profitable if you can create a successful ' +
                'AI-powered Quantitative Program.\n' +
                '\n' +
                'Ways that you can maintain your investing system could be going back to your fundamentals and ' +
                'picking up some new skills in statistics. Bootstrapping, creating many sample datasets from a ' +
                'single dataset, can increase accuracy and hone down on results that may need a little extra ' +
                'data. Mathematical programming has a lot to offer to your AI model and can help ease certain ' +
                'hiccups that your AI is struggling to get past. Data Science has a ton of libraries that can ' +
                'be used to help you and you may find a hidden gem somewhere if you look hard enough for it.\n' +
                '\n' +
                'There are unlimited ways that you can improve your AI model, here is an article stating [7 ' +
                'Techniques](https://research.aimultiple.com/ai-improvement/). Remember that AI is still a ' +
                'developing technology that can make mistakes. No system should be fully trusted with your ' +
                'life savings without knowing the risk that your program holds. Sufficient backtesting should ' +
                'be used, as well as giving your system time and testing with real-time investment decisions ' +
                'using a low amount of money to ensure that your model is working properly.\n'
        },
        {
            img: AIQuant5,
            title: 'Final Comments',
            id: '',
            description: 'A white and black robot holding two money bags at the bottom of a bar graph with a ' +
                'line going across the tops going upward.',
            text: 'AI-Powered Investing can hold amazing riches and incredible risk. When making your AI ' +
                'investing system make sure that you are getting the basics right with Coding Practices, ' +
                'Accurate Data, and Studying the Markets before diving in. With a proper foundation, take ' +
                'your time to build a proper investing system that works well. When you are introducing ' +
                'your AI to that system it is important to start small and avoid jumping right into using ' +
                'AI for everything. \n' +
                '\n' +
                'Your system will need maintenance, take care of it and it will take care of you. Remember ' +
                'to be ethical and consider the risk in any investment decision you make.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}