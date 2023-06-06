import AIFinanceMain from '../../images/articleimages/AIFinanceMain.webp'
import AIFinance1 from '../../images/articleimages/AIFinance1.webp'
import AIFinance2 from '../../images/articleimages/AIFinance2.webp'
import AIFinance3 from '../../images/articleimages/AIFinance3.webp'
import AIFinance4 from '../../images/articleimages/AIFinance4.webp'
import AIFinance5 from '../../images/articleimages/AIFinance5.webp'
import React from "react";
import ArticleFormat from "@/components/format";
import {useRouter} from "next/router";

export default function FinancialAiAndDataScience() {
    const Article = [
        {
            img: AIFinanceMain,
            title: '',
            id: 'Intro',
            description: 'A black head cutout with eighteen googly eyes fully covering it with the letters A I resting ' +
            'over top all on a white surface.',
            text: 'AI is a powerful data machine marching through almost everything recently with ChatGPT, ' +
                'the AI text processor that has been revolutionarily improving how we think of text. AI could ' +
                'be better. At the same time, it is far from being done improving. When AI hits Finance in a way ' +
                'that works, The world will shift.\n' +
                '\n' +
                'Here are the reasons why:\n' +
                '\n' +
                '1. [Automation](#Automation)\n' +
                '2. [Sentiment](#Sentiment)\n' +
                '3. [Market Correlation](#MarketCorrelation)\n' +
                '4. [Robo Advising](#RoboAdvising)\n'
        },
        {
            img: AIFinance1,
            title: 'Automation',
            id: 'Automation',
            description: 'A screen with 8 different line graphs that are different colors showing numbers ' +
                'and percentages as part of an automation test.',
            text: 'Everyone wants to save time. After all, time is money. What better way than financial ' +
                'automation using AI? AI-powered financial automation is the act of creating something ' +
                'to automatically do a task or action for you and you can read about it more in my article ' +
                '[Python for Crypto](/articles/python-for-finance). This is a great way to limit the amount ' +
                'of annoying repetitive work. AI has been able to intelligently improve the act of Automation.\n' +
                '\n' +
                'When AI gets smart enough that will start to bleed into Finance as well. We will see more ' +
                'automated decisions made by AI. Risk Management is one of the biggest categories. Rather than ' +
                'just looking at an asset through a few statistics, AI will be able to determine if an asset ' +
                'is risky or not in a much shorter amount of time. These risk analysis methods, which I ' +
                'mentioned in my article [Finding the Next Big Cryptocurrency](/articles/next-big-crypto), ' +
                'would be done almost instantly. We will be able to sift out the bad data and only use the ' +
                'data that means something. The future of AI in finance will only lead to more accurate ' +
                'information on the topic.\n' +
                '\n' +
                'AI-powered financial automation has even more benefits with regular tasks, which means simple ' +
                'statements or even repetitive tax forms that are done with set rules. Automating these tasks ' +
                'allows financial institutions and workers to focus more on important tasks at hand and more ' +
                'creative work or work that cannot be done by a machine. Maintaining these tasks increases ' +
                'employee productivity. The unfortunate side of this is the potential that people will lose ' +
                'their jobs due to this technology, forcing employees who are doing work replaced by AI to ' +
                'go to a job completely different. Worker productivity is essential to economic growth, however, ' +
                'employment rates are also taken into consideration. It will be very interesting to see if ' +
                'one will overpower the other.\n'
        },
        {
            img: AIFinance2,
            title: 'Sentiment',
            id: 'Sentiment',
            description: 'Phone screen showing the social media apps LinkedIn, Snapchat, Pinterest, ' +
                'Twitter, Telegram, Facebook, Instagram, and more.',
            text: 'What people think about the markets will largely impact which way people are believing ' +
                'the market will go. If large companies and hedge funds are unsure of what is going on in ' +
                'the markets, they will not be putting their money anywhere near them. This is important for ' +
                'investors to keep note of as the sentiment of the Market Movers is very influential and can ' +
                'help you make better investing decisions.\n' +
                '\n' +
                'Financial sentiment analysis using AI makes this process easier for individuals. Data Science ' +
                'and AI in Finance help those looking to get the edge on the market understand sentiment with ' +
                'Natural Language Processing, also known as NLP. NLP is used in AI like ChatGPT and is how ' +
                'robots and AI can read and process text to make decisions. Since this is a developing field ' +
                'it is important to note the false information that can come from these AI programs at this ' +
                'time.\n' +
                '\n' +
                'Another way that AI is changing the way we analyze market sentiment is with text ' +
                'classification. Once we have the text from the web, next we need to understand if it is good ' +
                'or bad. Language is very complicated and sarcasm, jokes, or exaggerations have to be taken ' +
                'into account to be able to classify text from real people. AI has to be able to understand ' +
                'what others say as a human would to be as accurate as possible which is a very tricky task. ' +
                'Due to this resources like The [Bitcoin Sentiment Index]' +
                '(https://www.crypto-sentiment.com/bitcoin-sentiment) a good resource but not something to use ' +
                'as absolute.\n'
        },
        {
            img: AIFinance3,
            title: 'Market Correlation',
            id: 'MarketCorrelation',
            description: 'A sheet of white paper with a candle chart of a stock that is going up and down ' +
                'with moving averages and volume lines on it.',
            text: 'Market Correlation has pros and cons to traditional trading markets. First, we have to ' +
                'understand what AI and market correlation means. Market Correlation is the impact that one ' +
                'asset has on the other. Investopedia wrote a good article on [Why Market Correlation Matters]' +
                '(https://www.investopedia.com/articles/financial-advisors/022516/4-reasons-why-market-' +
                'correlation-matters.asp). Bitcoin and Ethereum have a high correlation that can be seen ' +
                'where if one coin goes up, the other will follow. This is shown across the board between ' +
                'different assets and is insightful to study for profitable investments. If you are interested ' +
                'in looking more into some crypto assets, check out [Webminers Efficiency](/efficiency) for ' +
                'more.\n' +
                '\n' +
                'This phenomenon will be amplified with AI. If you have experience with different AI platforms, ' +
                'many of their answers are very similar. This causes worry as in trading it is important for ' +
                'there to be some people who think the market will go up and others who think it will go down. ' +
                'This allows for fair trade to occur.\n' +
                '\n' +
                'If AI were to be correlated, many programs would be saying the same thing causing large biases ' +
                'to one asset or even large crashes and spikes in price. This would not be stable long term and ' +
                'can also lead to manipulation where there are Market Movers who move the market to hit these ' +
                'conditions set by AI Algorithms to buy at a better price. \n'
        },
        {
            img: AIFinance4,
            title: 'Robo Advising',
            id: 'RoboAdvising',
            description: 'A metal robot with one giant eye standing in front of a giant screen that is ' +
                'showing a picture of a glowing moon on top of it.',
            text: 'Robo Advising has already begun its road with AI in today\'s world of finance. With the use of ' +
                'AI-powered robo advising, insights from a computer have become more specialized than ever. We ' +
                'are in a time where Robo Advising is changing the financial industry and has only one way to go, ' +
                'and that’s up. There are so many aspects of robo advising from Wealth Management to Tax Advice.\n' +
                '\n' +
                'One of the top areas that investors should know about is Automated Investing. Robo Advisors have ' +
                'begun to give general investing advice that is the same for regular individuals. This means that ' +
                'multiple different parties of multiple amounts of money will be buying and selling at the same ' +
                'time. It is important to do your research, however when a large group of individuals, this ' +
                'creates opportunity. \n' +
                '\n' +
                'Having a large group of people all making a decision based on a robot without actually knowing ' +
                'why they are buying or selling can be problematic for them. Bad advice can be very common from ' +
                'an AI-based Robo Advisor since the technology is still developing. Outlier data can cause bad ' +
                'investments especially if they do not know much about investing. As investors, it is important ' +
                'to know where the majority of people think the market is going because more times than not, the ' +
                'market will go the opposite way.\n'
        },
        {
            img: AIFinance5,
            title: 'Final Thoughts',
            id: 'FinalThoughts',
            description: 'An AI robot arm that is playing chess on a wooden chess board on the brown side ' +
                'inside a dark room all on a white tabletop.',
            text: 'AI-powered financial services are great and its development so far has been nothing shy of ' +
                'impressive. Some flaws and problems come with it that the regular investor must know about. Being ' +
                'prepared for when these issues become more large-scale can help you avoid great losses or even ' +
                'cause great profits. AI is a great tool when you know how to use it well, doing your research on ' +
                'the markets and AI associated with it is the key to being able to make money from these situations. ' +
                '\n' +
                '\n' +
                'We went over Automation, Sentiment, Market Correlation, and Robo Advising from Financial AI so that ' +
                'you can be prepared for the future and protect your wallets from the possible dangers and ' +
                'opportunities that come with this technology.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}