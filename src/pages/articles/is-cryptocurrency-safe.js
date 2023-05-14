import SafeCryptoMain from '../../images/articleimages/SafeCryptoMain.webp'
import SafeCrypto1 from '../../images/articleimages/SafeCrypto1.webp'
import SafeCrypto2 from '../../images/articleimages/SafeCrypto2.webp'
import SafeCrypto3 from '../../images/articleimages/SafeCrypto3.webp'
import SafeCrypto4 from '../../images/articleimages/SafeCrypto4.webp'
import SafeCrypto5 from '../../images/articleimages/SafeCrypto5.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function IsCryptocurrencySafe() {
    const Article = [
        {
            img: SafeCryptoMain,
            title: '',
            id: 'Intro',
            description: 'Earth from space with the northern lights in the background and a bunch of connected ' +
                'shining white lines wrapped around earth.',
            text: 'Cryptocurrency can be seen as both an amazing asset and a complete joke depending ' +
                'on who you ask. Crypto came by storm in 2021 when people were making insane profits, ' +
                'completely blinded by the fact that what goes up must come down. As prices started to ' +
                'fall people began to lose their trust in crypto and to this date, many of those people ' +
                'still believe that crypto is a complete scam.\n' +
                '\n' +
                'To safely invest in crypto we must keep the following in mind:\n' +
                '\n' +
                '1. [Digital Security](#DigitalSecurity)\n' +
                '2. [Efficient Investing](#EfficientInvesting)\n' +
                '3. [Downsides of Crypto](#Downsides)\n' +
                '4. [Invest in Legit Cryptos](#LegitCryptos)\n'
        },
        {
            img: SafeCrypto1,
            title: 'Digital Security',
            id: 'DigitalSecurity',
            description: 'Shiny gold and silver coins of Bitcoin, Ethereum, and Ripple sitting on a black ' +
                'table with a black sd card sitting next to it.',
            text: 'The most common way that you will be compromised while investing in crypto, isn\'t ' +
                'actually from investing since the blockchain is a secure network of nodes that transfer ' +
                'encrypted data. It is on your end that you are not exactly safe on the web and lack digital ' +
                'security. Hacking is a popular way for people to gain access to your money, whether ' +
                'through cryptocurrency or your regular bank.\n' +
                '\n' +
                'VPNs are a very popular safety measure but are not enough to be fully secure. Having a ' +
                'safe browser and search engine is essential to preventing scams from even having the ' +
                'possibility of showing up on your computer. [DuckDuckGo](https://duckduckgo.com), as ' +
                'mentioned in my article [What is Decentralization](/articles/decentralization-for-crypto), ' +
                'is a company that provides a safe browser extension along with an application of their ' +
                'very own, that’s main focus is safe browsing.\n' +
                '\n' +
                'Continuing once you have proper applications and extensions, you then need to prevent ' +
                'invasions that cannot be blocked. Don’t click links in emails from people you do not know. ' +
                'Make sure that you only visit trusted websites that use https, not http. If you would like ' +
                'to know the importance of https, visit [HTTP vs. HTTPS: What\'s the Difference and Why ' +
                'Should You Care?](https://www.entrepreneur.com/leadership/http-vs-https-whats-the-' +
                'difference-and-why-should-you/281633). Finally, to maintain digital security, make sure ' +
                'that you use strong passwords that are kept in a safe place.\n'
        },
        {
            img: SafeCrypto2,
            title: 'Efficient Investing',
            id: 'EfficientInvesting',
            description: 'A metal scale on a wooden stand with a white background that has a question mark ' +
                'on each of the dishes on the side of the scale.',
            text: 'Once you have your digital security, We can begin our investing journey. When looking ' +
                'for safe investing, many times efficient investing is more important than the asset you ' +
                'invest in. This means, as long as you make decisions that do not hold a lot of risks, that ' +
                'is safe investing. Even though this is the case, finding efficient assets as well should ' +
                'be taken into account to truly set yourself up for success.\n' +
                '\n' +
                'To build an efficient investing system that keeps you and your finances safe, you have ' +
                'to use data. In my article [How to Start Investing in Crypto](/articles/start-investing), ' +
                'we go over the different styles that you can choose when investing. The most simple and ' +
                'secure style is trend following. When following trends, you will use data to find opportune ' +
                'moments to invest. Examples of this data are Moving Averages, RSI, and MACD. RSI is a very ' +
                'popular indicator that you can read up on with Investopedia’s article called [Relative ' +
                'Strength Index (RSI) Indicator Explained With Formula](https://www.investopedia.com/terms' +
                '/r/rsi.asp). \n' +
                '\n' +
                'After you know how to use data to your advantage you can go on to pick an efficient ' +
                'crypto to invest in. Finding good cryptos can be difficult, but we made it nice and ' +
                'simple in [Finding the Next Big Cryptocurrency](/articles/next-big-crypto). Efficient ' +
                'cryptos have the least risk and the most reward when compared to others. If you can have ' +
                'a good investing system with efficient crypto, then there should be no worry about staying ' +
                'safe with crypto investing.\n'
        },
        {
            img: SafeCrypto3,
            title: 'Downsides of Crypto',
            id: 'Downsides',
            description: 'A silver macbook laptop that is displaying the matrix code on its screen on a ' +
                'reflective table surrounded by a dark background.',
            text: 'Crypto is an amazing asset choice as it is full of technology, but it still gets a ' +
                'negative reputation. It is important to know that with the good there will be some bad as ' +
                'well. Crypto is Decentralized Finance, which means that there is little regulation and it ' +
                'is very hard for governments to get around this. The less regulation the more stuff that ' +
                'can go unnoticed even if it is illegal.\n' +
                '\n' +
                'Fobes wrote an article called [The Hidden Truth Behind Money Laundering, Banks And ' +
                'Cryptocurrency](https://www.forbes.com/sites/tatianakoffman/2020/09/27/the-hidden-' +
                'truth-behind-money-laundering-banks-and-cryptocurrency/?sh=2cb72b937b37) that talks ' +
                'about how even banks move trillions of dollars suspiciously, cryptocurrency also has ' +
                'a hand in money laundering. Illegal sales can also be performed with crypto since it ' +
                'is a very secure form of payment and governments are not yet able to detect these ' +
                'illegal acts, even though it is an online payment.\n' +
                '\n' +
                'Black Swan events, also known as unique events that greatly influence the outcome of ' +
                'markets, can happen at a moment\'s notice. When war breaks out or extremely bad news ' +
                'spreads across the media, markets go down. This is also known as market sentiment and ' +
                'it is very important to know about instances when the market is not doing what one might ' +
                'expect it to.\n'
        },
        {
            img: SafeCrypto4,
            title: 'Invest in Legit Cryptos',
            id: 'LegitCryptos',
            description: 'A hacker mask that is surrounded by a many different lines of white encrypted text and ' +
                'code with a black background behind it.',
            text: 'Cryptocurrency is full of technology with many different sectors. There are tons of ' +
                'great cryptocurrencies to pick from, however, there are some bad apples too. Crypto scams ' +
                'are something to look out for. These occur when a group or person with a lot of money ' +
                'invests in cheap crypto to make a ton of money. This is possible through gaining attention ' +
                'on social media or offering free currency to others. This then boosts the crypto and gets ' +
                'it listed as a top mover. \n' +
                '\n' +
                'More people invest hoping to make money from it while the original investors make hundreds ' +
                'of times the amount they first put in. As the original investors take out their profits, ' +
                'the crypto begins to rapidly crash and the people who invested just to hop on the bandwagon ' +
                'will most likely lose all that they put in.\n' +
                '\n' +
                'This scam is called the pump and dump and is something you can avoid by finding cryptos ' +
                'that are legit and that you have done your research for. If you are interested in taking ' +
                'a look at some hand-picked cryptos you can visit [Webminers Efficiency](/efficiency) ' +
                'where we have found reliable and efficient cryptos you can take a look at.\n'
        },
        {
            img: SafeCrypto5,
            title: 'Short Review',
            id: 'ShortReview',
            description: 'A metal caliper that is holding ten coins of different sizes next to a calculator ' +
                'on a piece of paper that has numbers on it.',
            text: 'Now that we have gone into the question ‘Is Cryptocurrency Safe?’ you can determine ' +
                'whether or not it is an asset for you. Whether you decide to invest in crypto or not, ' +
                'Digital Security is a must. Once you start investing, as long as you know the downsides, ' +
                'you need to make sure you are using an efficient system with real cryptocurrencies. ' +
                'Cryptocurrency being safe is a lot more than crypto itself. \n' +
                '\n' +
                'Consult with a hired professional and think about your online and investment decisions ' +
                'before making them.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}