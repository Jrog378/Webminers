import CryptoBlockMain from '../../images/articleimages/CryptoBlockMain.webp'
import CryptoBlock1 from '../../images/articleimages/CryptoBlock1.webp'
import CryptoBlock2 from '../../images/articleimages/CryptoBlock2.webp'
import CryptoBlock3 from '../../images/articleimages/CryptoBlock3.webp'
import CryptoBlock4 from '../../images/articleimages/CryptoBlock4.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function WhatIsTheCryptoBlockchain() {
    const Article = [
        {
            img: CryptoBlockMain,
            title: '',
            id: 'Intro',
            description: 'A golden Bitcoin crypto coin sitting on top of the face of a one hundred dollar bill with two ' +
            'other one hundred dollar bills.',
            text: 'The blockchain is simply a database that is made up of secure nodes. This database is ' +
                'decentralized, meaning not under a government or central power’s control. The blockchain ' +
                'has many uses, but the most commonly known one is with crypto. The crypto blockchain ' +
                'defines everything there is to do with cryptocurrencies, but what does this mean exactly?\n' +
                '\n' +
                'The parts of the crypto blockchain are as follows:\n' +
                '\n' +
                '1. [Buying and Selling Crypto](#BuySellCrypto)\n' +
                '2. [Crypto Staking](#Staking)\n' +
                '3. [Smart Contracts](#SmartContracts)\n'
        },
        {
            img: CryptoBlock1,
            title: 'Buying and Selling Crypto',
            id: 'BuySellCrypto',
            description: 'The words profit, loss, and risk, spelled out on a crossword section of a newspaper ' +
                'using white dice with letters in black.',
            text: 'The buying and selling of crypto is without a doubt the most fundamental method of interacting ' +
                'with the crypto blockchain. Crypto investing and crypto trading are commonly referred to as the ' +
                'two methods of buying and selling crypto. There are many cryptocurrencies to choose from, the ' +
                'main ones for you to remember being Ethereum, Bitcoin, and Solana.\n' +
                '\n' +
                'Investing in the crypto blockchain involves looking through data to [find trends](/articles/' +
                'start-investing) that you are then able to follow for a profit. This style of attempting to ' +
                'make money from the crypto blockchain has great diversity in [investing styles](/articles/short-' +
                'term-vs-long-term-crypto-investing) to different forms of data, like the economy or social ' +
                'media sentiment. All data is welcome for the test. The only thing that matters is if you can ' +
                'actually use it and how well it works. Efficiency is very important when investing in the ' +
                'crypto blockchain. Efficiency should be valued much more than dollars made because risky ' +
                'profits do not last forever. Investing in the crypto blockchain can often involve transactions ' +
                'that last days, weeks, and even months before finally selling for profit.\n' +
                '\n' +
                'Crypto trading is more of a short-term version of investing. Since it is harder to get a full ' +
                'on automation setup on such low timeframes, much of the work is [done by hand](https://finbold.' +
                'com/guide/cryptocurrency-trading/). This means that when you are involved in the market, the ' +
                'majority of the time you will be looking at your screen to see what happens. A rule of thumb ' +
                'is that if you are unable to close a trade in time before having to leave your computer, end ' +
                'the trade there since there is a large potential for downside, especially if you are unable to ' +
                'stop it. Trading often comes with more variability in profit since you are making much more ' +
                'transactions on the crypto blockchain than regular investing. This comes with the trade-off of ' +
                'only needing to be in the market for a few hours a day and being completely out of it the rest ' +
                'of the time.\n'
        },
        {
            img: CryptoBlock2,
            title: 'Crypto Staking',
            id: 'Staking',
            description: 'Dollar bills wrapped up into cone shapes pointed down and stuck into the a garden bed ' +
                'like plants with a mini black shovel.',
            text: 'Crypto staking is our next form of making returns on the crypto blockchain. Crypto staking ' +
                'is a way for you to be able to invest your money in a secure location, like a bank if it were ' +
                '[decentralized](/articles/decentralization-for-crypto), and earn interest on that money. This ' +
                'money, since stored in a node, will not be fully used by the organization you are lending it to, ' +
                'allowing for more security of your money than regular banks.\n' +
                '\n' +
                'Crypto staking is a way for an organization to [gain support](https://www.coindesk.com/learn/' +
                'crypto-staking-101-what-is-staking/) for their cryptocurrency if that is the one you have to ' +
                'buy to stake your money. The organization can use the popularity and money for the better of ' +
                'their community and mission, with the return of giving you a percent interest on the money you ' +
                'have given them. Staking should not be trusted by every company though. Since this is ' +
                'decentralized, there are almost no regulations on who can ask for your money. It is important ' +
                'to research who you will be working with so that you know that they have a strong history and ' +
                'can be trusted with your money.\n' +
                '\n' +
                'While you are checking their history it would be a good idea to make sure that you are not ' +
                'getting scammed as well. [Cryptocurrency scams](https://consumer.ftc.gov/articles/what-know-' +
                'about-cryptocurrency-and-scams) are a popular way for scammers to get your money as there are ' +
                'few ways to test their legitimacy or find who stole your money if you do get scammed. Do not ' +
                'trust any random links that are sent to you asking for your money, especially if they are from ' +
                'a contact you have never seen before. [Keeping yourself safe](/articles/is-cryptocurrency-safe) ' +
                'with the crypto blockchain is very important and should always be your first step before ' +
                'committing your money anywhere.\n'
        },
        {
            img: CryptoBlock3,
            title: 'Smart Contracts',
            id: 'SmartContracts',
            description: 'A light brown wooden ballpoint pen with a polished chrome point on it is resting on a ' +
                'piece of paper with a checkbox on it.',
            text: 'Smart contracts are growing in popularity as they can help remove the middleman from deals or ' +
                'trades in the business. [Smart contracts use the crypto blockchain](https://ethereum.org/en/' +
                'developers/docs/smart-contracts/) to set up a list of required steps that have to be completed ' +
                'before a trade can be finalized. Those who do not trust one another to fully pay for a service ' +
                'or just want to protect their own company can use these types of agreements, as long as the ' +
                'other party agrees as well. The transfer of goods or services can be done with cryptocurrency ' +
                'and once all parameters are met, the two sides swap, giving away the money and what the customer ' +
                'paid for.\n' +
                '\n' +
                'Something to be careful of is how new this technology is. There can be many flaws in deals ' +
                'leaving money vulnerable and having [millions of dollars at risk](https://arstechnica.com/' +
                'information-technology/2021/12/hackers-drain-31-million-from-cryptocurrency-service-monox-' +
                'finance/) if the proper precautions are not taken into account. [Financial AI](/articles/' +
                'financial-ai-and-data-science) can be used to both detect and fix vulnerabilities in these ' +
                'contracts and can be used as a resource to ensure the safety of both parties. Smart contracts ' +
                'can also be used to maintain the privacy of both sides of a deal if someone were to want their ' +
                'identity private from the other party.\n' +
                '\n' +
                'As this technology begins to grow, I am sure that those who are building the contracts will ' +
                'slowly gain a higher standard of work, allowing for the contracts to be more secure by nature. ' +
                'Smart contracts will only be getting smarter and used more frequently. Although these contracts ' +
                'are growing with the use of the crypto blockchain, there is still no telling if they will ' +
                'become the standard of contracts in the future or just a useful alternative.\n'
        },
        {
            img: CryptoBlock4,
            title: 'Final Words',
            id: 'Final',
            description: 'A golden bitcoin crypto coin sitting up on top of multiple hundred dollar bills with ' +
                'two other coins nearby and a macbook.',
            text: 'The crypto blockchain is a powerful moving force that is to be respected by anyone who wishes ' +
                'to keep up with the times and newest innovations. Cryptocurrency trading and investing are great ' +
                'ways to get your foot in the door of some profit with your money. Crypto staking is a secure way ' +
                'to store your money while still gaining interest in it. Smart contracts have the potential to ' +
                'make business deals more safe for both parties involved. Even though crypto and finance are not ' +
                'the only use for the blockchain, it is a great movement to hop on board with.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}