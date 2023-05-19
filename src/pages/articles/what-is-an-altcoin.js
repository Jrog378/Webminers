import AltcoinMain from '../../images/articleimages/AltcoinMain.webp'
import Altcoin1 from '../../images/articleimages/Altcoin1.webp'
import Altcoin2 from '../../images/articleimages/Altcoin2.webp'
import Altcoin3 from '../../images/articleimages/Altcoin3.webp'
import Altcoin4 from '../../images/articleimages/Altcoin4.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function WhatIsAnAltcoin() {
    const Article = [
        {
            img: AltcoinMain,
            title: '',
            id: 'Intro',
            description: 'A single golden Bitcoin crypto coin with its logo on the face of the coin fading away ' +
                'into dust surrounded by other coins.',
            text: 'Whenever someone mentions crypto or cryptocurrency, most people immediately think of the ' +
                'big players in the game, Bitcoin and Ethereum. Just sticking to just two assets can get boring ' +
                'after some time and restricts you to just two options. In stocks, you have tons of great ' +
                'companies to pick from, but in crypto, it doesn’t always feel this way. Is it true that we ' +
                'only really have two good assets in crypto?\n' +
                '\n' +
                'Let’s go over the following topics to see how we can explore areas outside of our main cryptos:\n' +
                '\n' +
                '1. [What is an Altcoin](#Altcoins)\n' +
                '2. [How to pick an Altcoin](#PickingAltcoins)\n' +
                '3. [How to Invest in Altcoins](#Investing)\n'
        },
        {
            img: Altcoin1,
            title: 'What is an Altcoin',
            id: 'Altcoins',
            description: 'A bunch of darkly colored question marks resting on top of a darkly colored table with ' +
                '3 of the question marks orange colored.',
            text: 'An altcoin is a crypto that is not Bitcoin or Ethereum. This could be anyone\'s cryptocurrency ' +
                'and does not have limits on what counts as an altcoin and what doesn’t. Altcoins get their name ' +
                'from the term alternative coin, meaning they are an alternative to the main ones. Altcoins differ ' +
                'in purpose as well. There are many categories that these altcoins can be a part of including AI ' +
                'and general finance.\n' +
                '\n' +
                'Altcoins are great for times when Bitcoin or Ethereum begins to slow down after a large move. ' +
                'A large number of people who sell off their Bitcoin and Ethereum for profit, [move this money ' +
                'into altcoins](https://cryptocurrency.org/news/article/what-is-alt-season). This gives the ' +
                'altcoins the upper hand towards the end of a large movement for our main coins. This also ' +
                'counts for the flip side where towards the top of the cycle of our main coins, once they start ' +
                'falling, altcoin will crash much more rapidly than Bitcoin and Ethereum. They also have the ' +
                'most downside potential where altcoins in the past [have gone to 0](https://blogs.airdropalert.' +
                'com/the-once-popular-cryptos-that-are-now-dead-altcoins/) yet our main coins have consistently ' +
                'not fallen anywhere close to 100 percent\n' +
                '\n' +
                'Altcoins are notoriously riskier as well. Since they are many times newer than our main coins ' +
                'they do not have as many investors to balance out the price. If someone with a lot of money ' +
                'feels it’s a good investment, they can shift the price a lot more than you may expect.\n'
        },
        {
            img: Altcoin2,
            title: 'How to pick an Altcoin',
            id: 'PickingAltcoins',
            description: 'A road that comes up on a split and a road sign that has the two options of this way ' +
                'and that way all surrounded by forest.',
            text: 'When picking altcoins, there are many things that you can take a look into to figure out what ' +
                'best suits your investing style. Since altcoins do not have as many investors involved it is ' +
                'also important that you take a look at their [market cap](https://coinmarketcap.com/). Market ' +
                'cap is the total amount of money that can be put into crypto and can show you how big a ' +
                'cryptocurrency is and is capable of being.\n' +
                '\n' +
                'Once you find the altcoin that you are willing to invest in, it is time to check how efficient ' +
                'it is. [Finding efficient cryptos](/articles/next-big-crypto) can be a bit tricky and might be ' +
                'something you decide to skip over. If you are ready for the challenge you will have to get the ' +
                'price data of your crypto and begin calculating financial efficiency ratios. The Main ones are ' +
                'Sharpe, Sortino, and Omega ratios and can give you insights into how well an altcoin performs ' +
                'when compared to [other cryptos](/articles/best-efficient-crypto). Webminers has you covered if ' +
                'this comes out to be too tedious. Our [Asset Efficiency](/efficiency) has a great selection of ' +
                'both main and alternative cryptos to take a look at in terms of efficiency.\n' +
                '\n' +
                'Lastly, you need to [find a place](https://www.coingecko.com/en/exchanges) you can invest in ' +
                'your crypto. If you looked long enough to find the perfect altcoin, it may not even be offered ' +
                'on your [crypto exchange](https://mint.intuit.com/blog/investments/what-is-a-cryptocurrency-' +
                'exchange/). You will have to go through its list of possible exchanges and pick one of them to ' +
                'work with and use to begin investing in your altcoin.\n'
        },
        {
            img: Altcoin3,
            title: 'How to Invest in Altcoins',
            id: 'Investing',
            description: 'Two pieces of paper with multicolored graphs on them on top of a wooden table next ' +
                'to a cup of coffee and a Macbook Laptop.',
            text: 'Once you are in the exchange and have the altcoin at your fingertips, it is time to plan ' +
                'your strategy of investing. You are going to want to build an [investing system](/articles/' +
                'start-investing) for this crypto to ensure that you are using real data and evidence to make ' +
                'investing decisions. Since there will not be much price history for you to take a look at, to ' +
                'find valid trends there must be enough evidence for you to be able to tell for sure what you ' +
                'believe is going to happen.\n' +
                '\n' +
                'After finding a trend that you can trust, add it to your investing system. You are going to ' +
                'want to find other indicators as well that way it is not just a single one, feel free to add ' +
                'in some general market parameters. There are still some things to look out for even when you ' +
                'have a very good investing system for your altcoin. Market manipulation is much easier on ' +
                'altcoins when compared to Bitcoin and Ethereum.\n' +
                '\n' +
                'The market manipulation I am talking about is [pump and dump](/https://webminers.dev/articles/' +
                'what-is-a-crypto-bubble). Pump and dumps are when an altcoin or crypto does not have a lot of ' +
                'investors and someone with a lot of money purposely raises the price by buying coins until ' +
                'people catch on and want to be part of the movement, once at the top the large investor sell ' +
                'their coins for a lot of money and then all of the little guys panic as the crypto soars right ' +
                'back down to sometimes near 0. This is something you have to look out for when investing in ' +
                'altcoins. Always make sure that your decisions are backed with evidence.\n'
        },
        {
            img: Altcoin4,
            title: 'Ending Words',
            id: 'Ending',
            description: 'Eight one hundred dollar bills all stacked on top of each other with the face ' +
                'side showing all resting on top of a wooden table.',
            text: 'Altcoins are a great alternative coin to Bitcoin and Ethereum, but there are many things ' +
                'to consider. To invest in an altcoin you should know why it is an altcoin and not as big as ' +
                'our main ones. You should also be on the lookout for which coins work best for you while ' +
                'checking out their efficiency and price history. Finally, to invest in an altcoin there are ' +
                'some more considerations and cautions you need to evaluate because you cannot treat them as you ' +
                'would a bigger coin. Pump and dumps can be dangerous if you get hooked on one and happen to ' +
                'lose all your money.\n' +
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