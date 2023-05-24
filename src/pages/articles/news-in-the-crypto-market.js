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
            text: 'The news is a great source of information as it connects the world with important events ' +
                'that are happening all over. The news can inform the public of topics ranging from whatever ' +
                'the publisher wants to many different purposes. News can be a form of entertainment and ' +
                'education, especially when it comes to articles relating to crypto markets. This type of news ' +
                'should be kept on close watch because it can cause large movements and profit or loss ' +
                'potential.\n' +
                '\n' +
                'These are the ways that this can happen:\n' +
                '\n' +
                '1. [Crypto Regulation](#CryptoRegulation)\n' +
                '2. [Market Sentiment](#MarketSentiment)\n' +
                '3. [Market Psychology](#MarketPsychology)\n'
        },
        {
            img: CryptoNews1,
            title: 'Crypto Regulation',
            id: 'CryptoRegulation',
            description: 'A gold and bronze colored key opened lock surrounded by blue shapes appearing like ' +
                'a technical feature with a black background.',
            text: 'Crypto is a hot topic among governments trying to regulate and control the world of ' +
                '[decentralization](decentralization-for-crypto). This is not very popular with investors. Even ' +
                'though regulation is something that could help prevent large dips or falls in the markets, ' +
                'investors have to ask themselves if it is worth it if they have to give up their privacy. Crypto ' +
                'is transparent yet private, being a peer-to-peer transaction-based system, there are a lot of ' +
                'questions about what regulation will do to it.\n' +
                '\n' +
                'When it comes to regulation, we know from experience how negative this could result. In the case ' +
                'of USDC, a [stablecoin backed by banks](are-stablecoins-stable), there was a large plummet away ' +
                'from the value of the dollar. Stablecoins are supposed to be stable at one dollar yet USDC fell ' +
                'to almost 0.80 USD. This coin was highly regulated and due to the heavy control, once the bank ' +
                'that backed it failed, the crypto suffered as well. This is not what we need where centralized ' +
                'businesses can influence the markets of decentralized assets.\n' +
                '\n' +
                'The [other form of regulation](https://www.thestreet.com/cryptocurrency/news/sec-commissioner-' +
                'hester-m-peirce-on-balanced-crypto-regulation) is invading people\'s privacy. Taxes are very ' +
                'important to governments and unidentified asset investing scares governments. The government ' +
                'also wants to crack down on fraudulent activity of hackers stealing millions of dollars worth ' +
                'of cryptocurrency from anywhere they can get their hands on. Investors would love to know who ' +
                'just stole their life savings, however, regulations can cause fewer people to get involved with ' +
                'crypto if they do not feel as safe as they used to.\n'
        },
        {
            img: CryptoNews2,
            title: 'Market Sentiment',
            id: 'MarketSentiment',
            description: 'An Apple Macbook Laptop on a light wooden table next to a white coffee cup and a ' +
                'notebook with an Apple iPhone on top of it.',
            text: 'The news is notorious for exaggerations and making claims with not a lot of evidence. This can ' +
                'set off the [market sentiment](https://finance.yahoo.com/news/fed-tracks-market-sentiment-index-' +
                '213054488.html) all over. Crypto market sentiment is a term used to describe how people feel ' +
                'about the markets and can be measured in many different ways by using what the public says or ' +
                'does on social media and other platforms on the web. [Financial AI](financial-ai-and-data-' +
                'science) is picking up on sentiment analysis and paving its way through this field for you to ' +
                'take a look at if you are interested in adding some AI tools to your investing system. Even more ' +
                'than knowing what the sentiment currently is, crypto investors need to understand what makes ' +
                'sentiment change and how this affects the markets.\n' +
                '\n' +
                'If there is a great piece of news that comes out like how cryptocurrency is helping [businesses ' +
                'keep themselves secure](https://www.forbes.com/sites/forbespr/2021/02/02/forbes-releases-3rd-' +
                'annual-blockchain-50-list-of-companies-paving-the-way-using-blockchain-technology/?sh=' +
                '1c0a88232e63), then sentiment will have a good rating. People will begin talking about how ' +
                'crypto is helping out businesses and it is a great thing to have in stores or restaurants. ' +
                'When people are excited to talk about crypto and sentiment is high, the price of crypto will ' +
                'go up from more people wanting to buy it.\n' +
                '\n' +
                'When a piece about how bad crypto is and how some people think it is a scam, especially after ' +
                'this most recent bear run, those who listen will reflect poorly on the markets. Any bad news ' +
                'will cause the same effect. Since it is a volatile market, crypto is more vulnerable to bad ' +
                'press. Due to this, people will easily stop investing when they hear something bad about crypto ' +
                'and sentiment is low.\n'
        },
        {
            img: CryptoNews3,
            title: 'Market Psychology',
            id: 'MarketPsychology',
            description: 'Five red see through dice with white dots resting on top of three playing cards next ' +
                'to a pile of multi colored poker chips.',
            text: 'The [psychology of the market](crypto-market-psychology) is a great thing to study because it ' +
                'will show us how people react to certain stimuli. If something severe comes out in the news ' +
                'people will panic and sell instantly out of emotion. Emotional Investing is a dangerous thing to ' +
                'play with because if you are easily swayed by emotions a single article could determine whether ' +
                'you buy or sell after reading it along with how much [FOMO](https://en.wikipedia.org/wiki/Fear_' +
                'of_missing_out) is caused.\n' +
                '\n' +
                'Articles can be very persuasive with data and charts, telling you that the market is going to ' +
                '[crash to zero](crypto-market-crashes). Even though many other articles are positive, if you let ' +
                'your fear take over you may still end up selling your crypto at a terrible spot. The flipside is ' +
                'true as well where if the market is bad and you are desperate for a trade, the news can publish ' +
                'a piece on why that time is an amazing time to buy. If you listen to your greedy emotions and do ' +
                'not have an evidence-based signal from an investing plan, you will keep losing money.\n' +
                '\n' +
                'Another part of market psychology influenced by the news is a term called [confirmation bias]' +
                '(https://www.britannica.com/science/confirmation-bias). Confirmation bias occurs when you have ' +
                'an idea and only look at arguments that support your idea. This gives you the feeling that you ' +
                'are right and can bias your thinking without considering potential flaws. When the market is ' +
                'going up and you see good articles come out, even if you are getting a sell signal, emotionally ' +
                'you are going to want to stay in the market for more profit.\n'
        },
        {
            img: CryptoNews4,
            title: 'Final Thoughts',
            id: 'FinalThoughts',
            description: 'A Bitcoin crypto coin resting on its side next to a few other coins and in front of a ' +
                'large green computer chip with components.',
            text: 'The news can both help and hurt you and to ensure that it will only bring you profit there are ' +
                'some things you should keep in mind. Being on the lookout for crypto regulation can give you ' +
                'the heads-up before people get nervous about the entire market or just a single asset. The ' +
                'news can completely change how people think as well, market sentiment can help guide you ' +
                'through what other investors are feeling. Market psychology helps you see what others are ' +
                'thinking and feeling. You will also be able to tell when statistically it is a good time to ' +
                'sell but emotionally investors are hoping for that last bit of profit.\n' +
                '\n' +
                'Consult a professional before investing.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}