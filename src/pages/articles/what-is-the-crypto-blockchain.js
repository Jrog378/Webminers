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
            text: 'The blockchain is a network full of nodes that has functions in finance, business, software, and any other area hoping to gain more security. The crypto blockchain is the decentralized finance, also known as the DeFi sector that comes with the general blockchain. When we look at decentralized finance, we can see that the main goal of the movement is to limit a central entity to take advantage of users and violate their privacy for their good. There are many aspects to cryptocurrency’s purpose that can be a very broad topic.\n' +
                '\n' +
                'Here are 3 categories we can use to narrow down what the crypto in Blockchain technology and the rise of DeFi is made up of:\n' +
                '\n' +
                '1. [Decentralized Asset](#Asset)\n' +
                '2. [Digital Currency](#Currency)\n' +
                '3. [NFTs](#NFTs)\n'
        },
        {
            img: CryptoBlock1,
            title: 'Decentralized Asset',
            id: 'Asset',
            description: 'The words profit, loss, and risk, spelled out on a crossword section of a newspaper ' +
                'using white dice with letters in black.',
            text: 'Decentralized assets are great options for investors to put their money in since they value the privacy and transparency of the holder. Since the blockchain has open transactions, there is an anonymous peer-to-peer security that takes place when you are involved in cryptocurrencies. [Investing in the crypto blockchain](start-investing) involves looking through data to find trends that you are then able to follow for a profit.\n' +
                '\n' +
                'This style of attempting to make money from the crypto blockchain has great diversity in investing styles to different forms of data, like economic data or [social media sentiment](https://www.fool.com/investing/how-to-invest/stocks/market-sentiment/). The only thing that matters in which data you choose is how well it works. When we are using our investing systems with decentralized assets, we want to make sure the ones we pick are the most efficient as possible. [Efficient assets are very important](/efficiency) in the crypto blockchain because they have a low amount of downside risk and a high amount of upside potential.\n' +
                '\n' +
                'Crypto trading mainly uses different types of data to make a profit. Trading takes place on [lower time frames](short-term-vs-long-term-crypto-investing) and the time that you are active in the market is much faster. While investors may hold a position for days and up to months, traders look to be in and out with the most amount of profit possible. Trading often comes with more variability in profit] since you are [making much more transactions](https://cointelegraph.com/learn/how-to-trade-cryptocurrencies-the-ultimate-beginners-guide) on the crypto blockchain than regular investing. This comes with the trade-off of only needing to be in the market for a few hours a day and being completely out of it the rest of the time.\n' +
                '\n' +
                'Crypto staking is our next form of making returns on the crypto blockchain. Crypto staking is a way for you to be able to invest your money in a secure location, like a bank if it were decentralized, and earn interest on that money by being the future of crypto lending and trading. This money, since stored in a node, will not be fully used by the organization you are lending it to, allowing for more security of your money than regular banks. Every staking company should not be trusted though since there are some bad apples. [With decentralization](decentralization-for-crypto), there are almost no regulations on who can ask for your money. It is important to research who you will be working with so that you know that they have a strong history and can be trusted with your money.\n'
        },
        {
            img: CryptoBlock2,
            title: 'Digital Currency',
            id: 'Currency',
            description: 'Dollar bills wrapped up into cone shapes pointed down and stuck into the a garden bed ' +
                'like plants with a mini black shovel.',
            text: 'Cryptocurrency is not just an asset that is meant to be bought and sold for profit. The other main purpose for its existence is to be used. Being a digital currency has its perks as you can transfer large amounts of money in a short time and the money is yours. Rather than sending money digitally through a bank or central entity, crypto remains in your wallet and can be sent whenever you would like since you control how much goes in and out whenever you want it to. As time goes on and [web3 becomes more popular](web3-crypto-growth), more businesses are starting to accept cryptocurrency as payment. This means that DeFi is going in the right direction.\n' +
                '\n' +
                '[Smart contracts](https://www.ibm.com/topics/smart-contracts) are growing in popularity as they can help remove the middleman from deals or trades in the business. Smart contracts use the crypto blockchain to set up a list of required steps that have to be completed before a trade can be finalized. Those who want double-sided protection when making business deals can use these types of agreements, as long as the other party agrees as well. The transfer of goods or services can be done by using the digital currency of crypto and once all parameters are met, [the two sides swap](blockchain-transaction), giving away the money and what the customer paid for.\n' +
                '\n' +
                'Something to be careful of is how new this technology is. There can be many flaws in deals leaving money vulnerable and having [millions of dollars at risk](https://arstechnica.com/information-technology/2021/12/hackers-drain-31-million-from-cryptocurrency-service-monox-finance/) if the proper precautions are not taken into account. Financial AI is starting to be able to detect and fix vulnerabilities in these contracts and can be used as a resource to ensure the safety of both parties. Smart contracts can also be used to maintain the privacy of both sides of a deal if someone were to want their identity private from the other party.\n' +
                '\n' +
                'As this[ technology begins to grow](https://www.forbes.com/sites/cognitiveworld/2019/03/10/rise-of-the-smart-contract/?sh=18dca25379f4), I am sure that those who are building the contracts will slowly gain a higher standard of work, allowing for the contracts to be more secure by nature. Smart contracts will only be getting smarter and used more frequently. Although these contracts are growing with the use of the crypto blockchain, there is still no telling if they will become the standard of contracts in the future or just a useful alternative.\n'
        },
        {
            img: CryptoBlock3,
            title: 'NFTs',
            id: 'NFTs',
            description: 'A glass cup that has multiple varying colors of paint on the outside of it with many ' +
                'differently colored paint brushes inside.',
            text: 'NFTs are the final category included in the crypto blockchain as this art is a [Non-Fungible Token](https://www.investopedia.com/non-fungible-tokens-nft-5115211). NFTs are a way for digital artists to gain recognition for their art by putting it for sale on the blockchain to be bought by investors or NFT collectors. These tokens are a great way to fund an artist\'s work because they get paid every single time anyone buys or sells their NFT. It is a source of consistent income as long as they can maintain their work.\n' +
                '\n' +
                'The community built by NFTs is a great way to bring together people with similar goals. In many cases, how well you build a community can determine how well your NFTs will sell. This community can be wherever you would like, the main part is the ease of access. Digital communities can be accessed from anywhere with WiFi at any time any of the members would like. This community is a powerful way to gain customers and retain them as long as you are interactive enough.\n' +
                '\n' +
                'NFTs can also be used in video games. [Crypto Gaming](video-games-with-the-blockchain) is a different part of the blockchain that can use NFTs as rewards to their players. These NFTs can be accessories or boosts to improve the appearance or performance of those playing the game. Using NFTs in gaming is a great way to support the decentralization movement while using a digital piece of art like NFTs. Adding NFTs to games can fund artists since there are unlimited possibilities for what you can add to a video game as cosmetics.\n' +
                '\n' +
                'The future of crypto and blockchain technology may use video games a lot. [VR is a growing field](https://medium.com/trivial-co/blockchain-and-ar-vr-a-match-made-in-virtual-heaven-26e54782be56) where we may have personal digital lives that are lived completely online. These digital lives can be used to make digital money that can be used in real life to pay rent or buy food. If you choose to use your digital money inside of the digital world, this can give you access to new NFTs that represent items you can put on your digital self to create a style. Bringing more people online with digital currencies shows how DeFi is changing the crypto landscape.\n'
        },
        {
            img: CryptoBlock4,
            title: 'Final Words',
            id: 'Final',
            description: 'A golden bitcoin crypto coin sitting up on top of multiple hundred dollar bills with ' +
                'two other coins nearby and a macbook.',
            text: '### What are the benefits of DeFi?\n' +
                'The benefits of DeFi are the extra protection that comes with having access to your own money. While banks use the money you give them, they might fail and your money will vanish completely. When you participate in DeFi, your money is safe in your crypto wallet and if you are worried about not making interest, you can put your money in stablecoins that provide interest, or stake your crypto.\n' +
                '\n' +
                '### How to get started with DeFi?\n' +
                'If you are looking to get started in DeFi, the best way to hop on board is to understand the movement. Once you understand the movement you may start to see ways that you could benefit from privacy in your own life, then seek out DeFi products that solve those problems. Investing in cryptocurrency is another great way to support crypto and put your money in assets that can make you a profit.\n' +
                '\n' +
                '### What are the adoption of DeFi and the future of finance going to look like\n' +
                'Cryptocurrency is not supposed to take over anything. The whole purpose of crypto is to offer a decentralized currency that provides security to those who desire it. The future of DeFi may look like cryptocurrency becoming a regular option to pay with at stores and something that comes up in regular conversation.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}