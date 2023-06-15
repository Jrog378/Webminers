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
            text: 'The most popular assets normally come to your mind the moment someone mentions cryptocurrencies. Even though we have the most recognizable or trusted assets on top, does not mean that alternative cryptos are completely out of the question. Altcoins have their time and place, but for those who are just getting started we need to do some research into them and how to invest with altcoins before tossing your money at them.\n' +
                '\n' +
                'Let’s go over the following topics to see what we can explore outside of our main cryptos:\n' +
                '\n' +
                '1. [What Are Altcoins](#Altcoins)\n' +
                '2. [Investing With Altcoins](#Investing)\n' +
                '3. [Portfolio Balancing](#Portfolio)\n'
        },
        {
            img: Altcoin1,
            title: 'What are Altcoins',
            id: 'Altcoins',
            description: 'A bunch of darkly colored question marks resting on top of a darkly colored table with ' +
                '3 of the question marks orange colored.',
            text: 'An altcoin, also known as an alternative coin, is a crypto that is not a main coin like Bitcoin or Ethereum. Since [crypto is decentralized](decentralization-for-crypto), anyone is eligible to start a cryptocurrency and there are no limits on what you can make this coin for. Many altcoins are associated with a company as a way of promoting their decentralization and support for the future of blockchain technology and the cryptocurrency movement. While being a part of the blockchain is great, having too many altcoins to pick from can be problematic for newcomers, starting in crypto and are not looking for [efficient assets](/efficiency).\n' +
                '\n' +
                'Altcoins do not act like main coins as they are [even more volatile](what-impacts-crypto-volatility). Since fewer investors are being active with these coins, large amounts of money coming in and out of their market will influence price much more than if that same amount were to go in and out of popular crypto. A good time to invest in altcoins is when Bitcoin or Ethereum begins to slow down after a large move.\n' +
                '\n' +
                'A large number of people who sell off their Bitcoin and Ethereum for profit, [move this money into altcoins](https://www.binance.com/en/blog/fiat/altcoin-season-what-when-and-why-421499824684903712). This gives the altcoins the upper hand towards the end of a large movement for our main coins. This also counts for the flip side where towards the top of the cycle of our main coins, once they start falling, altcoin will crash much more rapidly than Bitcoin and Ethereum. They also have the most downside potential where altcoins in the past have gone to zero yet our main coins have consistently not fallen anywhere close to that.\n' +
                '\n' +
                'With all this downside potential, Altcoins are notoriously riskier as well. Since they are many times newer than our main coins they do not have as many investors to balance out the price. If someone with a lot of money feels it’s a good investment, they can shift the price a lot more than you may expect. This shifting can make Altcoins prone to [pump-and-dump scams](https://www.fool.com/investing/stock-market/market-sectors/financials/cryptocurrency-stocks/how-to-spot-crypto-scam/).\n' +
                '\n' +
                'A pump-and-dump scam happens when an entity with a lot of money purposefully raises the price of an altcoin by putting a lot of money into it. When other investors see the giant price increase, they begin to buy that cryptocurrency as well, hoping to get some profit from the price rise. When the original entity is satisfied with how high the price has gotten, it will rapidly sell all its crypto before other investors have a chance to realize what is going on. The price of the altcoin [begins to crash](what-is-a-crypto-bubble) as people panic to try and salvage their money. Eventually, the price hits close to zero, leaving many with nothing.\n'
        },
        {
            img: Altcoin2,
            title: 'Investing With Altcoins',
            id: 'Investing',
            description: 'A road that comes up on a split and a road sign that has the two options of this way ' +
                'and that way all surrounded by forest.',
            text: 'If you are going to be investing in altcoins, the first thing you want to do is identify which altcoin you want to invest in. When picking altcoins, there are many things that you can take a look into to figure out what best suits [your investing style](short-term-vs-long-term-crypto-investing). Since altcoins do not have as many investors involved it is also important that you take a look at their market cap. [Market cap](https://coinmarketcap.com/alexandria/article/what-is-crypto-market-cap) is the total amount of money that can be put into crypto and can show you how big a cryptocurrency is and is capable of being. Cryptos with the most market cap are also seen as the most reliable as they have a lot of investors who are active in the markets.\n' +
                '\n' +
                'Once you find the altcoin that is reliable enough from the outside you are going to want to take a look on the inside. Using data to determine how good a cryptocurrency is for you is how you find the most profitable altcoins to invest in. The way you will be deciding how to choose the right altcoins to invest in should be with efficiency. Efficient assets will give you the best results when you put them to the test with investing systems. [Finding the next big crypto](next-big-crypto) is going to be a difficult task, but not impossible if you do it correctly.\n' +
                '\n' +
                'Once you find out which efficient crypto you want to invest in, it is time to plan [your strategy of investing](start-investing). You are going to want to build an investing system for this altcoin, since just like any other crypto, you do not want to go in thinking you can just make a ton of money buying low and selling high. There is a lot more to it and the risk from altcoin market trends is much higher than investing in regular cryptocurrencies.\n' +
                '\n' +
                'Ensuring that you are using real data and evidence to make investment decisions is the best way for you to be able to [reduce that risk](https://www.coindesk.com/learn/how-to-manage-risk-when-trading-cryptocurrency/). Since not every altcoin is going to have a ton of price history if they are new, you are going to want to consider that when trying to find valid trends. The more confirmations the better.\n' +
                '\n' +
                'After finding a trend that you can trust, add it to your investing system. You are going to want to [find other indicators](https://learn.bybit.com/indicators/best-technical-indicators/) as well that way it is not just a single one, feel free to add in some general market parameters. There are still some things to look out for even when you have a very good investing system for your altcoin.\n'
        },
        {
            img: Altcoin3,
            title: 'Portfolio Balancing',
            id: 'Portfolio',
            description: 'Two pieces of paper with multicolored graphs on them on top of a wooden table next ' +
                'to a cup of coffee and a Macbook Laptop.',
            text: 'Once you have the assets you want to buy and a system that tells you when to buy then, you are going to need to know how much of each asset you are going to buy. You only have a limited amount of money to spend on the markets and it should not all be in one cryptocurrency. A conservative strategy would be to pick a cryptocurrency like Bitcoin or Ethereum and [just HODL](https://www.forbes.com/advisor/investing/cryptocurrency/what-does-hodl-mean/), also known as hold on for dear life, until you are ready to sell. While this can still provide you with profit, altcoins can provide extra returns if handled correctly. How you balance your risk will be determined by how you [balance your portfolio](/balancing). Portfolios can also be mixed with options other than crypto, even though we will only be covering those assets.\n' +
                '\n' +
                'Since altcoins and volatility are almost always paired together, an altcoin should rarely be the only thing you have money in. With the possibility of dropping to zero, [investors must be cautious](https://www.nerdwallet.com/article/investing/crypto-crash) of these investments wiping out entire portfolios. We are going to balance our assets ranging from most efficient to least. While balancing another thing you may want to factor in is how reliable your crypto is. When we have an efficient main coin, even though short term, it may be less efficient, it has a lot of investors and is well trusted so we can balance these cryptos with a little more weight to them.\n' +
                '\n' +
                'Once you are [happy with your portfolio](https://academy.shrimpy.io/post/how-to-build-a-crypto-portfolio-on-your-own), you can start investing that amount in each. Once invested, you can either rebalance during investing where you sell off one cryptocurrency into another, or just leave the money in cash. Both are valid options and have their perks to it. Rebalancing your portfolio may take extra work and could lead to extra losses if you are not careful. Diversification should be maintained and researching these coins can help you choose the best options for your investing style\n'
        },
        {
            img: Altcoin4,
            title: 'Ending Words',
            id: 'Ending',
            description: 'Eight one hundred dollar bills all stacked on top of each other with the face ' +
                'side showing all resting on top of a wooden table.',
            text: '### What are altcoins and how do they work?\n' +
                'Altcoins are alternative cryptocurrencies that are different from popular options. These coins have their pros and cons and are considered riskier. When investing in altcoins it is important to make sure the crypto of your choice is efficient and has a good price history. Without those, you may be falling into a pump-and-dump scam.\n' +
                '\n' +
                '### What are the most profitable altcoins to invest in?\n' +
                'The most profitable altcoins are not a set few. The most profitable altcoins are always changing around and should be looked at constantly to make sure you are investing in the best option for you.\n' +
                '\n' +
                '### How should you invest in altcoins?\n' +
                'The most important part of investing in altcoins should be how reliable the trends you find are. Developing a system for altcoins might be more difficult than regular cryptocurrencies if they do not have as much price history and less history means less reliable findings. Once you find a reliable trend you will be able to use for profit you can build your investing system. This system should be robust since the asset you are using is riskier than usual.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}