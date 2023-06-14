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
            text: 'Cryptocurrency is considered a volatile asset. This volatility comes with the price itself, as well as other risks involved that you may not know about. Anyone involved in the crypto markets needs to understand that the blockchain is not perfectly secure and you do not have to worry at all. There are dangers to be aware of and ways to protect yourself.\n' +
                '\n' +
                'To safely invest in cryptocurrency, these are the 4 fields that must be taken into consideration first:\n' +
                '\n' +
                '1. [Unpredictable Markets](#Markets)\n' +
                '2. [Unsafe Cryptos](#UnsafeCryptos)\n' +
                '3. [Digital Insecurity](#DigitalInsecurity)\n' +
                '4. [Dark Side of Crypto](#DarkSide)\n'
        },
        {
            img: SafeCrypto1,
            title: 'Unpredictable Markets',
            id: 'Markets',
            description: 'A metal scale on a wooden stand with a white background that has a question mark ' +
                'on each of the dishes on the side of the scale.',
            text: 'When determining how to minimize risk when investing in cryptocurrency, a big part of limiting losses is having an investing system including the assets you are matching with this system. When looking for safe investing, the first step before you even start looking at building your strategy, is which asset you are going to buy. Picking [efficient assets](/efficiency) will set you up for success and will be much easier to find the returns you desire rather than fighting against your assets.\n' +
                '\n' +
                'Finding an efficient asset is easier than it may seem because you do not have to do all the calculations yourself. It can all be done by a third party. Once you identify your efficient assets, you can begin diversification of your portfolios and [start building your investing system](start-investing) to match your choices. To discover how to invest in cryptocurrency safely, you have to build an efficient investing system that keeps you and your finances safe with data. When following trends in your data, you will be able to find the most opportune moments to invest and take advantage of them before other investors do. Timing is everything and if your single is too slow, you might miss profit or put yourself in a bad position. Examples of good indicators you can use for your investing systems are [modified versions of moving averages](https://www.bankrate.com/investing/what-is-a-moving-average-technical-analysis-for-trading/), RSI, and MACD.\n' +
                '\n' +
                'Cryptocurrency investment strategies are important to use because when putting money in [volatile markets](what-impacts-crypto-volatility), you are not going to want to just toss it away. You need a structured plan if you are going to find out how to make money with cryptocurrency and a set of rules to keep yourself and your money safe from big losses. Efficient assets and efficient systems are best practices for investing in cryptocurrency and protecting yourself.\n'
        },
        {
            img: SafeCrypto2,
            title: 'Unsafe Cryptos',
            id: 'UnsafeCryptos',
            description: 'Shiny gold and silver coins of Bitcoin, Ethereum, and Ripple sitting on a black ' +
                'table with a black sd card sitting next to it.',
            text: 'Cryptocurrency is a [part of the blockchain](what-is-the-crypto-blockchain) since there are so many different applications for the blockchain, we get a lot of companies apart from the community. Those who are in the community with a business also enjoy setting up their cryptocurrency. There are tons of great cryptocurrencies to pick from, however, there are some bad apples too. [Cryptocurrency scams](https://time.com/personal-finance/article/popular-crypto-scams/) are something to look out for. These occur when a group or person with a lot of money invests in cheap crypto or one from these new companies to make a ton of money. This is possible through gaining attention on social media or offering free currency to others.\n' +
                '\n' +
                'This then boosts the crypto and this giant increase in price shows other people that your asset can make a ton of profit. More people invest in this crypto hoping to make money from it while the original investors make hundreds of times the amount they first put in. As the original investors take out their money with amazing profits, [the crypto begins to rapidly crash](what-is-a-crypto-bubble) and the people who invested just to hop on the bandwagon will most likely lose all that they put in. This scam is called the [pump and dump scam](https://blog.chainalysis.com/reports/2022-crypto-pump-and-dump-schemes/) and how to protect yourself from cryptocurrency scams comes from finding cryptos that are legit and that you have done your research for.\n' +
                '\n' +
                'Another reason to look into the cryptos you buy is that even [stablecoins have their issues](are-stablecoins-stable). The stablecoin USDC was backed by Silicon Valley Bank and due to this was under heavy regulations without any of the investors knowing about it. Since the coin was backed by an entity, when SVB failed, the price of USDC crashed and went away from being valued at one dollar. Stablecoins are supposed to stick to the value of 1.00 USD, also known as pegged, and this instance was a big shock to the decentralization community as these cryptos should not be influenced so heavily by a central source.\n'
        },
        {
            img: SafeCrypto3,
            title: 'Digital Insecurity',
            id: 'DigitalInsecurity',
            description: 'A hacker mask that is surrounded by a many different lines of white encrypted text and ' +
                'code with a black background behind it.',
            text: 'Basic internet safety is the easiest way to protect your cryptocurrency. If your computer is hacked, then it doesn\'t matter what you do because the hacker will have access to everything anyways. To avoid giving access to your cryptocurrency wallet to a hacker, you need to keep your computer safe so that you can keep your assets safe as well. It takes being safe on the web and digital security to find how to [store cryptocurrency safely](efficiently-store-and-invest-crypto). Hacking is a popular way for people to gain access to your money, whether through cryptocurrency or your regular bank.\n' +
                '\n' +
                'A [VPN can disguise who you are](https://www.forbes.com/advisor/business/software/why-use-a-vpn/) and where you are to make it more difficult to access control over your laptop since it does not have the IP address and it can be harder to locate since it does not have the exact location of your computer. There are still some things to look out for. Experienced hackers know how to get by with a cheap free VPN that you may be using, so buying a more secure VPN service should be your method of protection. VPNs are a very popular safety measure but are not enough to fully lock down your computer and should only be your first line of defense. Another application you can throw into the mix is [your web browser](https://www.safetydetectives.com/blog/which-is-the-most-secure-web-browser-to-use-in/). Having a good web browser can block code that is attempting to get into your computer from your internet browsing and can give you alerts when reaching an unsafe destination. If you are happy with the browser you are already using and are not looking for an upgrade, at least consider adding some security extensions.\n' +
                '\n' +
                'Continuing once you have proper applications and extensions, you then need to prevent invasions that cannot be blocked. Don’t click links in emails from people you do not know. Make sure that you only visit trusted websites that use https, [not http](https://www.cloudflare.com/learning/ssl/why-is-http-not-secure/), as the s at the end ensures that the website you are visiting is secured with an SSL certificate to avoid any risk. Finally, to maintain digital security, make sure that you use strong passwords that are different for each website you visit or account you create. These passwords should be kept in a safe place and not just written down somewhere on your computer, unless in an encrypted location.\n'
        },
        {
            img: SafeCrypto4,
            title: 'Dark Side of Crypto',
            id: 'DarkSide',
            description: 'A silver macbook laptop that is displaying the matrix code on its screen on a ' +
                'reflective table surrounded by a dark background.',
            text: 'Crypto is an amazing asset choice as it is full of technology, but it can still get a negative reputation. Crypto is a part of decentralized finance and even though there is more security for individuals, this also means criminals get the same perks. The less regulation the more stuff that can go unnoticed even if it is illegal. Illegal sales can also be performed with crypto since it is a very secure form of payment and governments are not yet able to detect these illegal acts, even though it is an online payment.\n' +
                '\n' +
                '[Black Swan events](https://www.investopedia.com/terms/b/blackswan.asp), also known as unique events that greatly influence the outcome of markets, can happen at a moment\'s notice. Extremely bad news can spread across the media, causing the markets to go down. Market sentiment, also known as how people feel about crypto or other markets, is very important to keep track of to know about instances when the market is not doing what one might expect it to due to how the public feels.\n' +
                '\n' +
                'There are a few things that could go wrong or are not very good about crypto, but this does not mean that you aren’t able to prevent them from impacting your safety. [Don’t do anything illegal](https://freemanlaw.com/legal-issues-surrounding-cryptocurrency/) with your crypto as everyone gets caught in the end and it just isn’t worth it to mess around with the law. Add extra robust features to your investing system that take into account black swan events or market sentiment so that large movements from how people feel or what is currently trending do not negatively impact your portfolio.\n'
        },
        {
            img: SafeCrypto5,
            title: 'Short Review',
            id: 'ShortReview',
            description: 'A metal caliper that is holding ten coins of different sizes next to a calculator ' +
                'on a piece of paper that has numbers on it.',
            text: '### How can you keep yourself safe while investing?\n' +
                'If you are in the act of investing the best thing to do is invest in efficient cryptos as well as keeping your investing system itself efficient and robust too.\n' +
                '\n' +
                '### How can you keep your crypto secure from being stolen?\n' +
                'Avoid visiting links or sites that you do not trust and make sure that your browser. Using a good VPN can also help prevent getting hacked.\n' +
                '\n' +
                '### Should I worry about what others do with crypto?\n' +
                'No matter what area you are in in the professional world, there will be some people who do not follow the rules. They will get caught eventually and it is best for you to not get involved with them and you should not have to worry.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}