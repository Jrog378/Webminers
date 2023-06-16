import StablecoinMain from '../../images/articleimages/StablecoinMain.webp'
import Stablecoin1 from '../../images/articleimages/Stablecoin1.webp'
import Stablecoin2 from '../../images/articleimages/Stablecoin2.webp'
import Stablecoin3 from '../../images/articleimages/Stablecoin3.webp'
import Stablecoin4 from '../../images/articleimages/Stablecoin4.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function AreStablecoinsStable() {
    const Article = [
        {
            img: StablecoinMain,
            title: '',
            id: 'Intro',
            description: 'A golden Bitcoin crypto coin in the sand by the beach with an hourglass sitting next to ' +
                'it along with some sticks and leaves.',
            text: 'Stablecoins are cryptocurrencies that are supposed to be pegged to 1.00 USD. Being pegged also means just being stuck to that value. Cryptocurrencies, in many cases, have to just be traded with another cryptocurrency. This becomes an issue when all cryptos are going down and you want to salvage your profit. The stablecoin came in to do just that. When the cryptocurrency market is falling or you just cash out your profits, rather than putting your crypto back into USD, you can just sell off your cryptocurrency into a stablecoin. Stablecoins are coins that are supposed to represent the digital dollar.\n' +
                '\n' +
                'When we look into how stable are stablecoins, we have to consider the different types of stablecoins, which are the following:\n' +
                '\n' +
                '1. [Algorithmic Stablecoins](#Algorithmic)\n' +
                '2. [Centralized Stablecoins](#Centralized)\n' +
                '3. [Decentralized Stablecoins](#Decentralized)\n'
        },
        {
            img: Stablecoin1,
            title: 'Algorithmic Stablecoins',
            id: 'Algorithmic',
            description: 'A golden Bitcoin crypto coin standing up on it’s side next to a shiny silver pen with a ' +
                'cap on it all on top of a piece of paper.',
            text: 'Algorithmic stablecoins are the riskiest of all stablecoins, which is why we are going over it first. When you see or hear about an algorithmic stablecoin, you can think of a complicated system that is supposed to calculate how to balance a cryptocurrency value to 1.00 USD. This sounds very complicated because it is a little too much for its good. The algorithmic stablecoin’s purpose is to be able to only need to worry about two cryptocurrencies. Itself and the cryptocurrency that is being used to back it. Unfortunately, to do this under [diversification](/balancing), the stablecoin market integrity is very low. In the stablecoin future, this might not always be the case and hopefully, these stablecoin algorithms may surpass the vulnerabilities and risks they hold today.\n' +
                '\n' +
                'For now, the balancing of algorithmic stablecoin collateralization is done by using [supply and demand](https://phemex.com/academy/what-are-crypto-supply-and-demand-zones). When demand is high the algorithm will balance our stablecoins collateral to prevent the price from going too high by inflating the price of the stablecoin, lowering the value. When demand is low the algorithm will balance our stablecoins collateral to prevent the price from going to low by deflating the price of the stablecoin, increasing the value. When trying to find [how stable are algorithmic stablecoins](https://www.coindesk.com/learn/algorithmic-stablecoins-what-they-are-and-how-they-can-go-terribly-wrong/), the algorithm\'s performance is almost as important as the stability of the crypto that is being used to back our coin.\n' +
                '\n' +
                'TerraUSD, also known as UST, is the prime example to look into when investigating stablecoin stability. Terra was a crypto stablecoin that had billions in Bitcoin and Avalanche but ultimately had its algorithm focused on its native coin LUNA, [an altcoin](what-is-an-altcoin). When $2 billion worth of UST was sold, this caused instability and stablecoin volatility within the network causing liquidations and price drops. The algorithm attempted to catch up with depegging as the price came to 0.90 USD and investors were able to trade 0.90 UST for 1.00 USD worth of LUNA. This was not enough initiative to deflate the price of UST as everyone panicked and wanted their money out of that stablecoin. Due to the number of transactions, the algorithm was unable to keep up and the price fell to as low as 35 cents and major exchanges began to [delist LUNA on their platforms](https://www.business2community.com/crypto-news/will-terra-luna-go-up-crypto-exchanges-delist-02493438). As LUNA became less available, UST became almost worthless.\n' +
                '\n' +
                'For [decentralized finance to be secure](what-is-the-crypto-blockchain), it also has to be reliable. While algorithmic programs are great for the stablecoin future, this technology is still something to look out for when picking which stablecoin you would like to use. There are many to pick from and not choosing the riskiest one is not a very large drawback, unless you would like to support a certain cryptocurrency by using their stablecoin.\n'
        },
        {
            img: Stablecoin2,
            title: 'Centralized Stablecoins',
            id: 'Centralized',
            description: 'A white plastic piggy bank on its side with the hole on the bottom undone with a large ' +
                'pile of silver coins surrounding it.',
            text: 'The [dollar-backed stablecoins](https://101blockchains.com/fiat-backed-stablecoin/) should seem to be an amazing option since it is backed by the dollar itself. To maintain this backing by paper money, you will need someone or something with access to enough paper money to be able to back that stablecoin. Banks end up being the ones who are backing these centralized stablecoins. Just like our algorithmic stablecoin, when too much reliance is placed on one thing this causes an imbalance. If a bank backing a stablecoin goes out of business or runs out of money then the actual money backing the stablecoin is no longer there, causing the stablecoin volatility and depegging that can panic investors. When asking what is the potential impact of stablecoins on the cryptocurrency market, we have to understand that fear in one category of the market translates to the entire cryptocurrency atmosphere. Unsafe environments like this can be very dangerous.\n' +
                '\n' +
                'When [Silicon Valley Bank Failed](https://cointelegraph.com/news/silicon-valley-bank-s-downfall-has-many-causes-but-crypto-isn-t-one) in March of 2023, it had a total of $210 billion to its name. Silicon Valley Banks was also a supporter of the USDC stablecoin. During the fall of the bank, the money that was once backing USDC was no longer backing it, causing the value of [USDC to greatly drop in value](crypto-market-crashes). This stablecoin fell to just above 0.80 USD before slowing down.\n' +
                '\n' +
                'Crypto stablecoins are [supposed to be decentralized](decentralization-for-crypto) and when they are backed by banks this gives the banks much more control than users may assume. Banks can also fail. Banks\' failure creates a centralized vulnerability that crypto itself is designed to avoid. To be backed by a bank\'s money makes stablecoins vulnerable and more centralized than a decentralized currency should be. Stablecoins that are backed by banks are even found to have more regulations upon them, sometimes without investors even knowing. Doing your research before using a stablecoin is important for these reasons so that you won\'t have to ask yourself How do I know [if a stablecoin is regulated](https://www.cnbc.com/2023/04/24/house-stablecoin-regulation-draft-focuses-on-state-regulators-issuers.html)?\n' +
                '\n' +
                'USDC wasn\'t the only stablecoin to be affected by the bank failure. Even affiliated coins like DAI also took a toll from being partially backed by USDC itself. When asking ourselves what is the potential impact of stablecoins on the cryptocurrency market, we can determine how the instability of a single stablecoin can affect both other stablecoins backed by it, and confidence in the crypto markets as a whole, which may cause people [emotionally fully sell everything](avoid-emotional-investing) into cash due to their emotions. This drawback of unstable stablecoins can cause people to not want to get involved in the blockchain and should be a serious topic of concern for the future of crypto.\n'
        },
        {
            img: Stablecoin3,
            title: 'Decentralized Stablecoins',
            id: 'Decentralized',
            description: 'Three gold coins with the Bitcoin, Etheruem, and Litecoin logos on them with green wire ' +
                'and around them on computer parts.',
            text: 'There are a lot of reliable stablecoins still out there, and one of the most [decentralized stablecoins is DAI](https://www.sofi.com/learn/content/decentralized-stablecoin/). DAI is fully backed by other cryptocurrencies being run by an organization that is not about profit, and not about control. The DAI stablecoin has had its rough patch, but just like cryptocurrency as a whole, they are striving to become more developed and stable. At the time of USDC depegging from the dollar, DAI was backed by many different cryptocurrencies, half of which being USDC itself. The act of USDC losing value had a side effect on DAI, lowering the price to 88 cents. This shock could have been a lot worse and due to this scare, things are changing for DAI to become better at preventing this from happening again.\n' +
                '\n' +
                'On the other side of things, DAI has been an attractive coin to be used for [yield farming in cryptocurrency](https://www.thebalancemoney.com/what-is-yield-farming-in-cryptocurrency-5272063). As this movement expanded and gained attention, this pushed the price of DAI the other way, up to a value of 1.10 USD. Even though this is a good thing for a cryptocurrency to be valued more, in terms of stablecoin risks, it shows signs of the inability to stick to 1.00 USD. While trying to find solutions to fix this DAI instability, everything only seems to turn to using USDC for backing DAI whether this be through deflating or inflating the price of DAI in comparison, or continually backing DAI with a large amount of USDC.\n' +
                '\n' +
                'Either way, solving the problem of being fully decentralized and backed only by cryptocurrencies is a tricky situation. The future of stablecoins may rely on the backs of centralization or stablecoins backed by it. Asking yourself what are [the risks of stablecoins](https://academy.swissborg.com/en/learn/stablecoins-and-their-risks) and how can I ensure that my stablecoins are safe are good ways to pick the stablecoin that is best for you, even if that coin relies on centralized finance to keep it stable. To ask yourself what is volatility to you, you can determine which values you favor most, including that of preserving decentralization in favor of the possibility of loss in a crypto-backed stablecoin.\n'
        },
        {
            img: Stablecoin4,
            title: 'Conclusive Thoughts',
            id: 'Conclusion',
            description: 'Multiple stacks of one dollar bills wrapped in blue currency straps sitting in a pile ' +
                'on top of more one dollar bills face up.',
            text: '### Do stablecoins have a blockchain?\n' +
                'As of right now, there is no stablecoin blockchain. Stablecoins are transferred and stored using supported blockchains from other cryptocurrencies.\n' +
                '\n' +
                '### How stable are stablecoins?\n' +
                'Stablecoins are only as stable as what is being used to back them. If an organization like a bank is being used, if that bank runs out of money, the reserves used to back your stablecoin will lose that money as well. Cryptocurrencies that back your stablecoin can lose their value which may cause your stablecoin to lose value as well.\n' +
                '\n' +
                '### What are the different types of stablecoins?\n' +
                'The different types of stablecoins are algorithmic stablecoins, centralized stablecoins, and decentralized stablecoins. Each has its risks and benefits to be considered before committing to one of these categories.\n'
        },
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}