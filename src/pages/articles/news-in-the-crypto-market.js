import CryptoNewsMain from '../../images/articleimages/CryptoNewsMain.webp'
import CryptoNews1 from '../../images/articleimages/CryptoNews1.webp'
import CryptoNews2 from '../../images/articleimages/CryptoNews2.webp'
import CryptoNews3 from '../../images/articleimages/CryptoNews3.webp'
import CryptoNews4 from '../../images/articleimages/CryptoNews4.webp'
import React from "react";
import ArticleFormat from "@/components/format";
import {useRouter} from "next/router";

export default function NewsInTheCryptoMarket() {
    const Article = [
        {
            img: CryptoNewsMain,
            title: '',
            id: 'Intro',
            description: 'A coffee in a white mug and a croissant on a plate resting on a wooden diner table that ' +
                'has a rolled up newspaper on top of it.',
            text: 'The news is a great source of information as it connects the world with important events that are happening all over. The news can inform the public of topics ranging from whatever the publisher wants to many different purposes. News can be a form of entertainment and education, especially when it comes to articles relating to crypto markets. This type of cryptocurrency news should be kept on close watch because it can cause large movements and profit or loss potential.\n' +
                '\n' +
                'To better understand the impact of cryptocurrency news, we must look into these topics:\n' +
                '\n' +
                '1. [Crypto Regulation](#CryptoRegulation)\n' +
                '2. [Market Psychology](#MarketPsychology)\n' +
                '3. [Market Sentiment](#MarketSentiment)\n'

        },
        {
            img: CryptoNews1,
            title: 'Crypto Regulation',
            id: 'CryptoRegulation',
            description: 'A gold and bronze colored key opened lock surrounded by blue shapes appearing like ' +
                'a technical feature with a black background.',
            text: 'Cryptocurrencies are a new and growing technology that is a part of the blockchain. Since the blockchain is constantly getting attention from its developing innovation, as a side effect crypto does as well. Whether it be choosing the [best efficient cryptos](/efficiency) to pick from or negative press, cryptocurrency news remains a hot topic. Due to this attention, there comes the consequence of getting noticed by governments who would like to regulate and control the world of decentralization to impose their version of safety. In the community of crypto investors, this is not very popular because regulation by the government means less risk to them, this regulation also means that privacy would be controlled by a central entity, which is exactly what the [blockchain strived to prevent](what-is-the-crypto-blockchain).\n' +
                '\n' +
                'Even though regulation is something that could help prevent large dips or [falls in the markets](what-is-a-crypto-bubble), investors have to ask themselves if it is worth it if they have to give up their privacy. Crypto is transparent yet private, being a peer-to-peer transaction-based system, there are a lot of questions about what regulation will do to it. When it comes to regulation, we know from experience how negative this could result.\n' +
                '\n' +
                'In the case of USDC, a stablecoin backed by the dollar, there was a [large plummet](crypto-market-crashes) away from the value of the dollar. Stablecoins are supposed to be stable at one dollar yet USDC fell to almost 0.35 USD. This crypto had some of its reserve, provided by Silicon Valley Bank, [which after its failure](https://www.theguardian.com/business/2023/mar/17/why-silicon-valley-bank-collapsed-svb-fail), revealed some dark secrets about paper currency-backed stablecoins. USDC was highly regulated by SVB and when this bank crashed, it affected the entire cryptocurrency market. The idea of regulation scared investors, especially when they did not even know that something like that was happening to them.\n' +
                '\n' +
                'The other form of regulation is not just on stablecoins but the fact that [cryptocurrency provides privacy](https://crypto.com/university/privacy-cryptocurrencies). The government also wants to crack down on fraudulent activity like hacking, money laundering, and tax evasion. Regulation will sacrifice the privacy of crypto investors to get those things. The clashing of decentralized privacy and government control can be a treat for the media as it is a topic that many people are interested in. This news will then circulate back into the markets and affect how investors act. Bad news will decrease the number of buyers and good news will increase this number.\n'
        },
        {
            img: CryptoNews3,
            title: 'Market Psychology',
            id: 'MarketPsychology',
            description: 'Five red see through dice with white dots resting on top of three playing cards next ' +
                'to a pile of multi colored poker chips.',
            text: '[Market psychology](crypto-market-psychology) is the exact reason that cryptocurrencies gain news-driven cryptocurrency market volatility from the emotions of investors after cryptocurrency news comes out. The psychology of crypto investing in the market is a great thing to study because it will show us how people react to certain stimuli. If something impactful comes out in the news people start to use their emotions to determine what they do with their money. Emotional mistakes of others can become profitable moves for you if you know how to take advantage of these movements. The key for you is to master staying calm be continue being a successful investor with your investing system to help guide you through tough times\n' +
                '\n' +
                '[Emotional Investing is a dangerous thing](avoid-emotional-investing) that you must avoid because those who are quick to their emotions are also easily manipulated into making a financial decision based on a persuasive article. The news is designed to catch your attention and keep it and to determine how to manage your emotions when investing in crypto, you must understand what triggers them.  Knowing how to stay calm in the face of market volatility is a skill of a high-level investor. The best part about this skill is that it’s extremely simple to do, but most investors are hooked to their emotions and are unable to.\n' +
                '\n' +
                'Articles can be very persuasive with data and charts, telling you that the market is going to crash to zero. Even though many other articles are positive, if you [let your FUD take over](https://www.coindesk.com/learn/from-btd-to-fud-to-wagmi-understanding-crypto-acronyms/) you may still end up selling your crypto at a terrible spot. The flipside is true as well where if the market is bad and you are desperate for a trade, the news can publish a piece on why that time is an amazing time to buy. If you listen to your greedy emotions and do not have an evidence-based signal from an investing plan, you will keep losing money from these [FOMO decisions](https://psychcentral.com/health/what-is-fomo-the-fear-of-missing-out).\n' +
                '\n' +
                'Another part of market psychology influenced by the news is a term called confirmation bias. [Confirmation bias occurs](https://blog.crobox.com/article/6-cryptocurrency-cognitive-biases) when you have an idea and only look at arguments that support your idea. This gives you the feeling that you are right and can bias your thinking without considering potential flaws. When the market is going up and you see good articles come out, even if you are getting a sell signal, emotionally you are going to want to stay in the market for more profit.\n'
        },
        {
            img: CryptoNews2,
            title: 'Market Sentiment',
            id: 'MarketSentiment',
            description: 'An Apple Macbook Laptop on a light wooden table next to a white coffee cup and a ' +
                'notebook with an Apple iPhone on top of it.',
            text: 'The term that is used to describe how the majority of people in the markets are feeling about crypto is called market sentiment. The crypto news impact on market sentiment is probably a lot more than you would think, mostly because of social media. [Financial artificial intelligence](financial-ai-and-data-science) is picking up on sentiment analysis and paving its way through this field for you to take a look at if you are interested in adding some AI tools to your investing system. These tools analyze speech using Natural Language Processing to produce a value on the market sentiment index, letting us know how people are feeling and talking about the market.\n' +
                '\n' +
                'Since social media is an avenue for displaying how someone feels, it is the perfect place to [analyze market sentiment](https://www.makeuseof.com/what-is-crypto-market-sentiment-how-does-it-work/). The emotional impact of crypto news can amplify how investors feel, leading to them talking about their losses or if they are losing hope for profit while sentiment is ranked low. When social media users are talking about their wins and all excited to invest in cryptocurrency, we know the market sentiment will be high. It is extremely hard to determine how to identify news that is likely to impact the crypto market, however, one method you can use is checking the sentiment of social media after possibly impactful articles come out.\n' +
                '\n' +
                'Even more so than knowing what the sentiment currently is, crypto investors need to understand what makes sentiment change and how this affects the markets. If there is a great piece of news that comes out like how cryptocurrency is [helping businesses keep themselves secure](https://www.ibm.com/topics/blockchain-security), then sentiment will have a good rating. People will begin talking about how crypto is helping out businesses and it is a great thing to have in stores or restaurants. When people are excited to talk about crypto and sentiment is high, the price of crypto will go up from more people wanting to buy it.\n' +
                '\n' +
                'When a piece about how bad crypto is and how some people think it is a scam, especially after this most recent bear run, those who listen will reflect poorly on the markets. Any bad news will cause the same effect. Since it is a volatile market, crypto is more vulnerable to bad press and people will easily stop investing when they hear something bad about crypto. Low sentiment from the bad press can be even worse when already in times of a [bear market or low volatility](https://www.investopedia.com/terms/b/bearmarket.asp). These times have been seen to experience complete stand stills in the market when investors are unsure of market conditions.\n'
        },
        {
            img: CryptoNews4,
            title: 'Final Thoughts',
            id: 'FinalThoughts',
            description: 'A Bitcoin crypto coin resting on its side next to a few other coins and in front of a ' +
                'large green computer chip with components.',
            text: '### How to protect yourself from the negative impact of news?\n' +
                'The best way to protect yourself from the negative impact of the news is by building yourself an investing system. By having this system you can use data, including market sentiment, to make investing decisions rather than going with how you feel because of an article you read online.\n' +
                '\n' +
                '### Why learn crypto market psychology?\n' +
                'Crypto market psychology can help expose some of the mistakes that other investors are making in the markets as well as your own that may happen from cryptocurrency news releases. By recognizing these issues, you will be able to improve your investing strategy as well as take advantage of others’ mistakes.\n' +
                '\n' +
                '### How can I avoid emotional investing?\n' +
                'The first step to avoiding emotional investing is recognizing which emotions are being triggered. When you recognize these emotions in the future, remember your investing plan and follow your system, as it was designed to help you through times like this.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}