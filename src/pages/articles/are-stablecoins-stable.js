import StablecoinMain from '../../images/articleimages/StablecoinMain.webp'
import Stablecoin1 from '../../images/articleimages/Stablecoin1.webp'
import Stablecoin2 from '../../images/articleimages/Stablecoin2.webp'
import Stablecoin3 from '../../images/articleimages/Stablecoin3.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function BestEfficientCrypto() {
    const Article = [
        {
            img: StablecoinMain,
            title: '',
            id: 'Intro',
            description: 'A golden Bitcoin crypto coin in the sand by the beach with an hourglass sitting next to ' +
                'it along with some sticks and leaves.',
            text: 'Crypto can come off as sketchy to investors as it is a new technology with a lot of ' +
                'unpredictability. Crypto is also very volatile. With this aspect that should be holding all ' +
                'cryptos together are stablecoins. Stablecoins are coins that are supposed to represent the ' +
                'digital dollar. With the word stable in front you’d think that they would be able to maintain ' +
                'the value of a dollar efficiently, however that is not always the case.\n' +
                '\n' +
                'Here are some reasons that stablecoins can be not so stable in terms of representing the ' +
                'dollar:\n' +
                '\n' +
                '1. [Bank Backed](#Bank)\n' +
                '2. [Backed by Another Crypto](#AnotherCrypto)\n'
        },
        {
            img: Stablecoin1,
            title: 'Bank Backed',
            id: 'Bank',
            description: 'A golden Bitcoin crypto coin standing up on it’s side next to a shiny silver pen with a ' +
                'cap on it all on top of a piece of paper.',
            text: 'Dollar-backed stablecoins should seem to be an amazing option since it is backed by the ' +
                'dollar itself. Banks are the ones backing these stablecoins though making the stablecoin just ' +
                'as stable as the bank that is backing it. If a bank backing a stablecoin goes out of business ' +
                'or runs out of money then the actual money backing the stablecoin is no longer there, causing ' +
                'the commotion we know as stablecoin volatility where the value of the coin is not where it is ' +
                'supposed to be and not equal to one dollar. [Unsafe environments](/articles/is-cryptocurrency-' +
                'safe) like this can be very dangerous for investors.\n' +
                '\n' +
                'When Silicon Valley Bank [Failed in March of 2023](https://abcnews.go.com/Business/timeline-' +
                'silicon-valley-bank-collapse/story?id=97846565), it had a total of $210 billion to its name. ' +
                'Silicon Valley Banks was also a supporter of the USDC stablecoin. During the fall of the bank, ' +
                'the money that was once backing USDC was no longer backing it, causing the value of USDC to ' +
                'greatly drop in value. This stablecoin fell to just above 0.80 USD before slowing down. USDC ' +
                'wasn\'t the only stablecoin to be affected by the bank failure. The coin [DAI also took a toll]' +
                '(https://www.coindesk.com/business/2023/03/13/makerdao-weighs-using-emergency-switch-to-' +
                'prevent-future-dai-depegging/) from being partially backed by USDC itself.\n' +
                '\n' +
                'Crypto stablecoins are supposed to be decentralized and when they are backed by banks this ' +
                'gives the banks much more control than users may assume. Banks can also fail. Banks\' failure ' +
                'creates a centralized vulnerability that crypto itself is designed to avoid. To be backed by ' +
                'a bank\'s money makes stablecoins vulnerable and more centralized than a decentralized ' +
                'currency should be. Stablecoins that are backed by banks are even found to have [more ' +
                'regulations](https://www.forbes.com/sites/digital-assets/2023/03/13/svb-banking-crisis-shows-' +
                'usdc-stablecoin-is-still-wildly-unstable/?sh=405639577b77) upon them, sometimes without ' +
                'investors even knowing.\n'
        },
        {
            img: Stablecoin2,
            title: 'Backed by Another Crypto',
            id: 'AnotherCrypto',
            description: 'A white plastic piggy bank on its side with the hole on the bottom undone with a large ' +
                'pile of silver coins surrounding it.',
            text: 'Crypto stablecoins have other means of being backed other than just by banks. One of those ' +
                'methods is with another cryptocurrency. The way this works is that a company will buy other ' +
                'cryptocurrencies as collateral for their stablecoin and keep a consistent price from an [algorithm ' +
                'that automatically balances](https://www.coindesk.com/learn/algorithmic-stablecoins-what-they-are-' +
                'and-how-they-can-go-terribly-wrong/) to be valued as close as possible to one dollar. This ' +
                'algorithm is in charge of using the other crypto to keep the stablecoin stable and as close to ' +
                'one dollar as possible.\n' +
                '\n' +
                'An example of this is TerraUSD. Terra was a crypto stablecoin that was backed mainly by the ' +
                '[altcoin](/articles/what-is-an-altcoin) LUNA. Terra also had billions in Bitcoin and Avalanche, ' +
                'but this would not be enough to save the combo. $2 billion was taken out of the stablecoin ' +
                'TerraUSD causing liquidations and price drops. As the price came to 0.90 USD investors were ' +
                'able to trade 0.90 USD worth of Terra for 1.00 USD worth of LUNA. Due to the great panic and ' +
                'amount of transactions, major exchanges began to delist LUNA on their platforms. As LUNA became ' +
                'less and less available, it [became almost worthless](https://time.com/6177567/terra-ust-crash-' +
                'crypto/).\n' +
                '\n' +
                'What we can take from this is that Algorithmic Stablecoins can be influenced by those who own ' +
                'them much more than we would like to be possible. Having the ability to drop the price by 10 ' +
                'cents and stays there due to liquidations and panic is not a good thing for investors using ' +
                'the stablecoin. The LUNA crash enforces the necessity to research more before selecting any ' +
                'asset because you never know whether or not it will end up [going to 0](/articles/crypto-market-' +
                'crashes) or is a lot less stable than it may seem.\n'
        },
        {
            img: Stablecoin3,
            title: 'Conclusive Thoughts',
            id: 'Conclusion',
            description: 'Multiple stacks of one dollar bills wrapped in blue currency straps sitting in a pile ' +
                'on top of more one dollar bills face up.',
            text: 'Stablecoins are a great idea for a digital currency that stays level with the dollar. The only ' +
                'problem is keeping it consistent with it. Bank Backed crypto stablecoins come with reliability ' +
                'on the bank remaining open and still have the money to be able to pack the stablecoin. Bank ' +
                'Backed crypto stablecoins also come with extra regulation, whether known or hidden from the ' +
                'investors. On the other hand, we have crypto stablecoins that are dependent on actual ' +
                'cryptocurrencies. These types of stablecoins would also be a great solution as long as the ' +
                'cryptos that are being used to back the coin stay afloat and don’t crash.\n' +
                '\n' +
                'Consult a professional before investing.\n'
        },
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}