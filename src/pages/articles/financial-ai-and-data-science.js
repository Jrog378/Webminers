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
            text: 'Finance is one of the most profitable fields you can go into. You work with money and find ways to make more of it. Artificial Intelligence is an area of data science that is a powerful tool that can be used in almost any field imaginable, including finance. When we mix AI and finance, we can increase the productivity of work being done, as well as accuracy. This provides more money faster and who wouldn\'t want that? Since AI is still developing, it isn’t perfect and is better at some things when compared to others. Crypto provides great opportunities for AI as they are both rapidly growing fields.\n' +
                '\n' +
                'Here are the 4 areas of crypto and finance that can be optimized with artificial intelligence:\n' +
                '\n' +
                '1. [Market Analysis](#MarketAnalysis)\n' +
                '2. [Sentiment](#Sentiment)\n' +
                '3. [Automation](#Automation)\n' +
                '4. [Robo Advising](#RoboAdvising)\n'
        },
        {
            img: AIFinance1,
            title: 'Market Analysis',
            id: 'MarketAnalysis',
            description: 'A sheet of white paper with a candle chart of a stock that is going up and down ' +
                'with moving averages and volume lines on it.',
            text: 'When taking a look at any financial market, especially crypto, many of the lines just look like random ups and downs to us. While humans attempt to find trends, there is only so much that we can do in a limited amount of time. We can only read a certain amount of data and spend a certain amount of time looking at the markets. When we look into how to use AI for trading and investing, it becomes apparent how many ways we need to identify trends, which can be outsourced to AI to help us. The easiest way to use AI to our advantage would be in finding [efficient assets](/efficiency). These assets, in crypto, would be those with the least amount of risk while providing the most amount of returns. These assets can give us extra profit while other options are underperforming.\n' +
                '\n' +
                'Another way to use Artificial Intelligence for financial markets is the analysis of trends. This can happen in two ways. Firstly would be finding trends in the market that opens up opportunities to buy and sell for a profit. The form of AI that would work best for this type of analysis would be Machine learning. Machine learning for investing and trading can be used to sort through data much faster than humans can, while still being able to find more possible trends than the regular investor would be able to. This technology can find trends between two different assets as well, [finding market correlations](https://www.investopedia.com/articles/financial-advisors/022516/4-reasons-why-market-correlation-matters.asp).\n' +
                '\n' +
                'With the development of these trends from our financial artificial intelligence, we are now able to use them to create extremely [accurate investing systems](start-investing). These systems can be built for investing where the actions and actual buying and selling are over long periods, or they can be more short-term, where your system can be built into an algorithmic trading system. When you build your system it is completely up to you and your investing style for the structure. Investing is a great way to take advantage of multiple-day trends, while trading is more fast-paced and you may find yourself [becoming an AI Quant](ai-quant-investing) for yourself.\n'
        },
        {
            img: AIFinance2,
            title: 'Sentiment',
            id: 'Sentiment',
            description: 'Phone screen showing the social media apps LinkedIn, Snapchat, Pinterest, ' +
                'Twitter, Telegram, Facebook, Instagram, and more.',
            text: 'What people think about the crypto markets will largely impact which way people are believing the market will go. If large companies and hedge funds are unsure of what is going on in the markets, they will not be putting their money anywhere near them. This is the [market psychology of crypto](crypto-market-psychology) and it can be extremely difficult to understand for regular investors. Using software to do this calculation for you is the way to beat this challenge. Market Psychology is important for investors to keep note of as the sentiment of the Market Movers is very influential and can help you make better investing decisions.\n' +
                '\n' +
                'Financial sentiment analysis using AI makes this process easier for individuals. Data Science and AI in Finance help those looking to get the edge on the market understand sentiment with [Natural Language Processing](https://www.ibm.com/topics/natural-language-processing), also known as NLP. NLP has the power to process large amounts of text from the news or social media, since we know the news and media can affect cryptocurrencies, to determine a score of how the general crypto environment feels about current market conditions. When the rating is low, we should see the price fall. When the rating is high, we should see the price drop.\n' +
                '\n' +
                'Another way that AI and machine learning is changing the way we [analyze market sentiment is with text classification](https://www.thestreet.com/dictionary/m/market-sentiment). Once we have the text from the web, next we need to understand if it is good or bad. Language is very complicated and sarcasm, jokes, or exaggerations have to be taken into account to be able to classify text from real people. AI has to be able to understand what others say as a human would to be as accurate as possible which is a very tricky task. This AI and machine learning for investing can be a great tool to have in your back pocket.\n'
        },
        {
            img: AIFinance3,
            title: 'Automation',
            id: 'Automation',
            description: 'A screen with 8 different line graphs that are different colors showing numbers ' +
                'and percentages as part of an automation test.',
            text: 'Time is the ultimate currency. When you save time from doing tedious tasks, you can refocus on other tasks that will [make you even more money](make-money-with-cryptocurrency). AI-powered financial automation is not always about doing things that you can’t do without it. In this case, our automation is doing things that we would rather have something else do to free up our schedule more. By doing this you can allow repetition problems to solve themselves and things like risk management to be done at the push of a button rather than calculating away by hand. Using AI for [financial portfolio management](/balancing) in crypto is something that can be done without AI, but it would be much easier for you to just let a program do the heavy lifting.\n' +
                '\n' +
                '[Risk management](https://corporatefinanceinstitute.com/resources/risk-management/risk-management/) is one of the biggest categories in crypto and should be taken very seriously. Rather than just looking at an asset through a few statistics, AI will be able to determine if an asset is risky or not in a much shorter amount of time than you would have been able to. We will be able to sift out the bad data and only use the data that means something. AI for investing will only improve as time goes on, making it easier than ever for you to [find the next big crypto](next-big-crypto) with technology.\n' +
                '\n' +
                '[Automating tasks](https://tipalti.com/finance-automation-guide/) allows financial institutions and workers to focus more on important tasks at hand and more creative work or work that cannot be done by a machine. Maintaining these tasks increases employee productivity. The unfortunate side of this is the potential that people will lose their jobs due to this technology, forcing employees who are only doing repetitive work, may be replaced by an application that can provide more value than they can.\n'
        },
        {
            img: AIFinance4,
            title: 'Robo Advising',
            id: 'RoboAdvising',
            description: 'A metal robot with one giant eye standing in front of a giant screen that is ' +
                'showing a picture of a glowing moon on top of it.',
            text: 'Robo Advising has already begun its road with AI in today\'s world of finance. With the use of AI-powered robo-advising, insights from a computer have become more specialized than ever. We are in a time where [Robo Advising is changing the financial industry](https://www.nerdwallet.com/article/investing/what-is-a-robo-advisor) and has only one way to go, and that’s up.\n' +
                '\n' +
                'Robo Advisors up until the time of Artificial intelligence, have just been giving rule-based advice where the results are not specialized and many people receive the same help. This is not a good thing because it lacks the personalization that comes from having a real person being your financial advisor. When we have [AI added to robo advising](https://www.eescorporation.com/do-robo-advisors-use-artificial-intelligence/) things can change. Rather than just regular copied and pasted advice, AI can develop personalized answers and possibilities for crypto investors to take advantage of. This included customized wealth preservation, growth, and taxation.\n' +
                '\n' +
                'Having a large group of people all making a decision based on a robot without actually knowing why they are buying or selling can be problematic for them. Even though AI has had its success in the past, this does not mean it is perfect or [even a better choice than a regular financial advisor](https://www.experian.com/blogs/ask-experian/should-you-consult-ai-for-investment-advice/) at this time. It has been seen that bad advice is very common from an AI-based robo advisor since the technology is still developing. AI robo-advising has an extremely great future ahead, especially with cryptocurrency, however, it is just not there yet when making actual investing decisions. AI advice is most accurate when given in the form of broad yet specialized answers that are data-backed solutions, hand-picked by AI, rather than the AI developing the solutions.\n'
        },
        {
            img: AIFinance5,
            title: 'Final Thoughts',
            id: 'FinalThoughts',
            description: 'An AI robot arm that is playing chess on a wooden chess board on the brown side ' +
                'inside a dark room all on a white tabletop.',
            text: '### How can AI improve my crypto investing?\n' +
                'AI can help with analyzing the markets to find trends for you to take advantage of, calculating the sentiment of the market to find out how people are feeling, and automating time-consuming tasks so you can work are more important things.\n' +
                '\n' +
                '### Can I trust AI robo advisors?\n' +
                'AI Robo advisors are a good source of information as long as the solutions and help are backed by data. Keep in mind that this technology can make mistakes and you should do your research.\n' +
                '\n' +
                '### When will AI improve?\n' +
                'AI is improving every day. There are thousands of teams developing blockchain technology that involves AI to provide the solutions you want and need for your journey in finance.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}