import CryptoOpportunitiesMain from '../../images/articleimages/CryptoOpportunitiesMain.webp'
import CryptoOpportunities1 from '../../images/articleimages/CryptoOpportunities1.webp'
import CryptoOpportunities2 from '../../images/articleimages/CryptoOpportunities2.webp'
import CryptoOpportunities3 from '../../images/articleimages/CryptoOpportunities3.webp'
import CryptoOpportunities4 from '../../images/articleimages/CryptoOpportunities4.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function CryptoOpportunities() {
    const Article = [
        {
            img: CryptoOpportunitiesMain,
            title: '',
            id: 'Intro',
            description: 'A golden coin on a stack of multiple other regular currency coins that has a bitcoin ' +
                'logo imprinted into it on a grayish table.',
            text: 'Cryptocurrency is a new type of asset with high volatility and high opportunity. The only ' +
                'issue is finding out how to harness these rather than lose all your money to them. Crypto can ' +
                'be a universal tool to success if you know how to use it. There are many different categories ' +
                'and aspects to be explored for your benefit.\n' +
                '\n' +
                'We will be covering 3 ways that crypto opportunities can better your future:\n' +
                '\n' +
                '1. [Wealth](#Wealth)\n' +
                '2. [Networking](#Networking)\n' +
                '3. [Business](#Business)\n'
        },
        {
            img: CryptoOpportunities1,
            title: 'Wealth',
            id: 'Wealth',
            description: 'A stack of ten dollar bills on their sides with it spaced out just enough to see the ' +
                'ten all on top of a pile of more bills.',
            text: 'The wealthiest people in the world have their money in assets, not cash. Cash loses its value and is vulnerable to inflation. Because of this threat, those with a lot of money have no other choice but to put their money into [assets or objects](https://finance.yahoo.com/news/where-millionaires-keep-money-201959651.html) that will go up in value. Real estate, businesses, stocks, or crypto, all of these are great options for people with a lot of money.\n' +
                '\n' +
                'While those rich people enjoy reaping the benefits of these assets, what can someone who is not rich do with this knowledge? Crypto investing allows you to not just do what rich people are doing by saving your money from inflation but you can even make money from these rich people. Buying crypto low and then selling it at a higher price after multiple days or even months to rich people will make you money and help you use [high volatility](what-impacts-crypto-volatility) to your advantage. [Investing systems](start-investing) help you hitch rides as the price goes up and get out of the market before the price falls again. Understanding when these rich people plan to put their money in is very important as it can impact the market a lot and allow you to collect some of their money for yourself.\n' +
                '\n' +
                'The more intense version of this is crypto trading. Every day millions of dollars go in and out of the crypto market and as a crypto trader, it is your job to capitalize on this. Using patterns and [market psychology](crypto-market-psychology) traders can execute quick trades that make a lot of money by taking on more risk than investors do. As they take on more risk, it is harder to keep their [emotions in check](avoid-emotional-investing), which is why crypto trading is not for everyone.\n'
        },
        {
            img: CryptoOpportunities2,
            title: 'Networking',
            id: 'Networking',
            description: 'A sphere of blue lines and dots triangle connected to each other in front of a wall ' +
                'of even more blue connected lines and dots.',
            text: 'Being able to grow your network is a great way to [level up almost anything](https://hbr.org/2016/05/learn-to-love-networking) you want. Being with fitter people will encourage you to go to the gym, and being with hard workers will push you to work harder yourself. There are some great benefits to networking on self-improvement. That is not all though, networking can also set you up for success by putting you in the right place at the right time.\n' +
                '\n' +
                'When you invest in crypto, you are working in a field that anyone can join. Whether it be with one dollar or one billion dollars, anyone can invest in crypto. There are quite a [few millionaire investors](https://www.forbes.com/sites/johnhyatt/2022/04/05/the-richest-crypto-and-blockchain-billionaires-in-the-world-2022/?sh=352b4371580d) who not only invest but have their businesses as well. Going to events with those who invest large sums in crypto can introduce you to these people in business. Learning from them can jumpstart your own business and getting connected with them can bring you opportunities from them.\n' +
                '\n' +
                'Online forums are a great place to find people in crypto, like the [cryptocurrency Reddit page](https://www.reddit.com/r/CryptoCurrency/). These online meeting places of like-minded investors can bring you to thousands of people in an instant from all across the world. Online communities are built to bring people together and help everyone improve. These places would be great for asking questions, keeping yourself updated with the news, and meeting investor connections.\n'
        },
        {
            img: CryptoOpportunities3,
            title: 'Business',
            id: 'Business',
            description: 'A piece of white paper that has bar charts on top that are multicolored and a red and ' +
                'purple stacked line chart below them.',
            text: 'Almost every business is different. Each trying to find their way to reach success through innovation. Fortunately, we are on the brink of the decentralization movement where technologies are striving for more privacy. Blockchain technology with cryptocurrencies can help provide this privacy through their different [types of transactions](blockchain-transaction) and possibilities with smart contracts or storing data. Being the first to create something is much easier than being the best at an older product. This shows the importance of creating new technology like the blockchain. Crypto companies have something new and catchy to customers, and as trust is being built in the industry, now is the best time to hop on board.\n' +
                '\n' +
                'Businesses using the blockchain unlock a whole new level of security. Data security, agreement security, and money security. All of which are very [innovative and futuristic](https://www.ibm.com/topics/benefits-of-blockchain). Those who want to do work that is ahead of their time cannot ignore the power of the blockchain. As the blockchain speeds up and becomes more trusted, businesses will begin to adapt it to their existing projects. Those with the longest history of providing good blockchain services will be whom these big companies look to. They need help because you would have been the industry experts, not them.\n' +
                '\n' +
                'Another way to capitalize on crypto for business is building your business around helping those who want to get into using this technology. Someone who wants to create a database app and does not have much knowledge of the blockchain can reach out to you, if you help them they could give you recognition. When this database app is then used by a larger business, you were a part of that process. You helped build the foundation that was required to complete the steps needed in the last paragraph. This comes in the form of contractor work, blockchain agencies, and helping ensure that how a company is using the blockchain is safe. There are many levels for you to be able to make money from and being a part of them will not be something you regret.\n'
        },
        {
            img: CryptoOpportunities4,
            title: 'Final Words',
            id: 'Final',
            description: 'A golden coin with the Bitcoin logo on it in black next to the word Bitcoin all in ' +
                'front of a shadowy dark gray background.',
            text: 'Crypto technology has a lot to offer. It is an asset that rich people enjoy investing in. It offers opportunities to either make money from those rich people or even meet them yourself. You can also be a part of the business side of this technology and take advantage of how new it is by being the first to create a good application or the first to have the knowledge needed to help someone else with their solution. All of these methods can provide great returns for your money and time. When pursuing this field keep in mind there are no shortcuts. You will have to work for your goals, but the final result will be worth it so keep at it.\n' +
                '\n' +
                'Consult with a professional. Educational purposes only, not financial or business advice\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}