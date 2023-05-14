import BestCryptoMain from '../../images/articleimages/BestCryptoMain.webp'
import BestCrypto1 from '../../images/articleimages/BestCrypto1.webp'
import BestCrypto2 from '../../images/articleimages/BestCrypto2.webp'
import BestCrypto3 from '../../images/articleimages/BestCrypto3.webp'
import BestCrypto4 from '../../images/articleimages/BestCrypto4.webp'
import BestCrypto5 from '../../images/articleimages/BestCrypto5.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function BestEfficientCrypto() {
    const Article = [
        {
            img: BestCryptoMain,
            title: '',
            id: 'Intro',
            description: 'Three cryptocurrency coins resting on top of a one hundred dollar bill with a piece ' +
                'of paper on top and a gold watch next to it.',
            text: 'In a world of crypto where efficiency is critical, we must consider the periods of our ' +
                'assets. Some cryptos are more efficient short term and others take a bit longer to ' +
                'develop a nice average efficiency. No matter the coin, we must consider many timeframes ' +
                'before passing judgment. This is a new series where we will be going into depth about ' +
                'assets and their efficiencies.\n' +
                '\n' +
                'Today we will be going over some reliable and popular coins:\n' +
                '\n' +
                '1. [Ethereum](#Ethereum)\n' +
                '2. [Bitcoin](#Bitcoin)\n' +
                '3. [Solana](#Solana)\n' +
                '4. [Litecoin](#Litecoin)\n'
        },
        {
            img: BestCrypto1,
            title: 'Ethereum - Eth',
            id: 'Ethereum',
            description: 'A golden Ethereum coin with fine sketches and etchings that is resting on top of a very ' +
                'lightly colored table or surface.',
            text: '[Ethereum](https://ethereum.org/en/) has been around since 2013. A solid 10 years of history ' +
                'backing it. Ethereum has a powerful position in the world of ' +
                '[Decentralization](https://aws.amazon.com/blockchain/decentralization-in-blockchain/)' +
                ' as well. Those who ' +
                'need to create decentralized apps have many places to store their data and make ' +
                'transactions, however, Ethereum is one of the biggest platforms for this type of ' +
                'technology. Being a large player allows Eth to be backed by its technology. Being ' +
                'the face of the decentralization movement gives more attention to the actual currency ' +
                'trading scene which is good news for investors. \n' +
                '\n' +
                'Ethereum, due to its large volume and demand, has become more stable than other ' +
                'alternative coins. More stability leads to less risk. Since risk is inverse to ' +
                'efficiency, we have more efficiency with Eth when compared to other coins. With an ' +
                'omega of 2.15 in the past 30 days, we can see just how this can come into effect.\n' +
                '\n' +
                'Being second on the list for market cap comes with the promising ability to have a ' +
                'ton of investors that are all shooting their shot at making some money. The Eth ' +
                'market cap will only go up due to being at a low in the market. Due to Eth being a ' +
                'personal favorite, you will see it with the most percentage in Webminers Balancing, ' +
                'with the basic portfolio of just Eth and Alts.\n'
        },
        {
            img: BestCrypto2,
            title: 'Bitcoin - Btc',
            id: 'Bitcoin',
            description: 'A Bitcoin sitting on top of a wooden chess table with the white pieces all lined up in ' +
                'the background in an outdoor setting.',
            text: 'Bitcoin has been considered the top dog of crypto for some time now. Largest market ' +
                'cap, second largest 24h volume behind Tether, and being the face of cryptocurrency in ' +
                'the news. Having been in action since 2009, Bitcoin has probably been in everyone\'s ' +
                'wallet at some point in time, but what does this mean for price?\n' +
                '\n' +
                'Bitcoin has better short-term efficiency with an omega of 2.17 when compared to ' +
                'Ethereum, however, the last bull run reflects in its three-year Omega of 1.13, ' +
                'which is less than Eth 1.18 Omega. This means that Eth is historically better ' +
                'when all coins are going up, however, once the bull run calms, Btc is more ' +
                'efficient.\n' +
                '\n' +
                'Bitcoin is not going away anytime soon. Even though Btc is not backed by much ' +
                'blockchain technology, it is a long-term provider for those trying to store ' +
                'and transfer money without a bank. Btc is even starting to be accepted at ' +
                'stores, including over 250 online stores provided in an article called, ' +
                '[Who Accepts Crypto?](https://usethebitcoin.com/list-of-online-stores-accepting-bitcoin/)\n'
        },
        {
            img: BestCrypto3,
            title: 'Solana - Sol',
            id: 'Solana',
            description: 'A Rainbow-colored Solana logo front and center with a black background and many other ' +
                'Solana logos floating all around each other.',
            text: 'Solana has had a rough patch with the giant fall of 66%, completely ruining its ' +
                'history of efficiency. Before the incident, I enjoyed investing in Solana. It had good ' +
                'volatility and I was able to predict the price to some extent. Fortunately, I did not ' +
                'have anything in Solana when the crash happened.\n' +
                '\n' +
                'What does this mean for the data? Well, the past 3 months of Solana have produced an ' +
                'omega ratio of only 1.83, which is terrible compared to other assets. The large fall ' +
                'has impacted other timeframes as well. Until Sol can somehow revive itself, I will ' +
                'not be going anywhere near it.\n' +
                '\n' +
                'This is unfortunate as well. Sol was promising over the NFT scene and has good ' +
                'decentralization and blockchain technology with it. I believe it had the potential ' +
                'to be a large contender with Eth, and very well still could be. Due to its ' +
                'promising past, Sol has room for improvement, and of all the coins, probably ' +
                'the most likely to make a comeback.\n'
        },
        {
            img: BestCrypto4,
            title: 'Litecoin - Ltc',
            id: 'Litecoin',
            description: 'A silver Litecoin with a white USB male end resting on top of the coin showing the USB ' +
                'symbol all sitting on a black surface.',
            text: 'Last but not least we have Litecoin. I love Litecoin. It is my go-to Alt Coin when ' +
                'Eth or Btc are not performing well. I have strategies and indicators specifically ' +
                'designed for this coin and believe it is a great match for anyone trying to spice ' +
                'up their portfolio. Litecoin is also considered the Second Oldest Cryptocurrency ' +
                'by Forbes in their article ' +
                '[What is Litecoin?](https://www.forbes.com/advisor/investing/cryptocurrency/litecoin/)\n' +
                '\n' +
                'In terms of efficiency, we have a very nice Omega of 2.02, which compared to other ' +
                'Alt Coins in [Webminers Asset Efficiency](/efficiency), is currently doing much better than ' +
                'most. Litecoin tends to be a more reliable coin than a profitable coin. History ' +
                'tells us that Ltc enjoys going up enough to make money when other coins go up, and ' +
                'barely goes down when other coins are going down. This increases its risk to reward.\n' +
                '\n' +
                'The whole goal of Litecoin is to be the better Bitcoin. This is great news because ' +
                'investing in Litecoin as an alternative coin allows us to get the best of both ' +
                'worlds, part of our money goes up and makes a risky profit with Bitcoin and the ' +
                'other part will consistently make us money at lower risk with Litecoin. Ltc belongs ' +
                'in any portfolio that needs to reduce a little risk without sacrificing a ton of ' +
                'profit, at least until the Efficiency tells us otherwise.\n'
        },
        {
            img: BestCrypto5,
            title: 'Closing',
            id: 'Closing',
            description: 'Litecoin, Ethereum, and Bitcoin are all sitting inside a brown and rusty vice grip that ' +
                'is in front of a black background.',
            text: 'Keeping up with efficiency is almost as important as knowing how efficient ' +
                'an asset is. Old data is bad data and if you are not sure if this data is still ' +
                'accurate, make sure to visit [Webminers Efficiency](/efficiency) for the current numbers. ' +
                'After knowing what assets you think are best to invest in make sure you balance ' +
                'your portfolio right. Visit [Webminers Balancing](/balancing) to see my balances based ' +
                'on this data. Finally when to put money in and out. If you are concerned about ' +
                'the weekly status of the crypto market then it will probably be best if you ' +
                'check out [Webminers Insights](/insights) and see just where each asset is in a short ' +
                'timeframe. \n' +
                '\n' +
                'Use your data effectively by taking a closer look at the assets you are ' +
                'interested in. Join the [Webminers Emailing List](/email-list) for updates to new ' +
                'cryptos that are up and coming in efficiency. Do your research and consult ' +
                'a professional before investing.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}