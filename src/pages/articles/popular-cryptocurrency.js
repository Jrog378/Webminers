import PopularCryptoMain from '../../images/articleimages/PopularCryptoMain.webp'
import PopularCrypto1 from '../../images/articleimages/PopularCrypto1.webp'
import PopularCrypto2 from '../../images/articleimages/PopularCrypto2.webp'
import PopularCrypto3 from '../../images/articleimages/PopularCrypto3.webp'
import PopularCrypto4 from '../../images/articleimages/PopularCrypto4.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function PopularCryptocurrency() {
    const Article = [
        {
            img: PopularCryptoMain,
            title: '',
            id: 'Intro',
            description: 'A golden bitcoin crypto coin sitting on top of a silver ethereum crypto coin and three ' +
                'other coins with a black background.',
            text: 'Cryptocurrencies come in all shapes and sizes. Some are naturally giants like Bitcoin and ' +
                'Ethereum, while others are not so much. Cryptocurrencies are always at battle with each other ' +
                'trying to get the most investors on their trading grounds to boost their price higher than ' +
                'before. The more the merrier follows with these ideas of wanting more investors themselves. ' +
                'There are many reasons cryptocurrencies want more investors and thankfully most of the time ' +
                'it helps out those putting their money in as well.\n' +
                '\n' +
                'Here are some of the great things that come with having a Popular Cryptocurrency:\n' +
                '\n' +
                '1. [More Profit](#Profit)\n' +
                '2. [Almost Never Hit 0](#Never0)\n' +
                '2. [Long Price History](#PriceHistory)\n'
        },
        {
            img: PopularCrypto1,
            title: 'More Profit',
            id: 'Profit',
            description: 'Multiple stacks of one hundred dollar bills placed on top of each other in six ' +
                'different stacks surrounded by more hundreds.',
            text: 'Once you start a cryptocurrency before the price can move or do anything, someone has the buy ' +
                'and someone else has to sell. This is your first price. You can set the price by offering to ' +
                'sell crypto at a certain price, but at the end of the day, the buyer is the one who has to ' +
                'accept it. The fewer people who are investing in your cryptocurrencies means the fewer offers. ' +
                'We all know that in supply and demand when supply is high and demand is low, prices will fall. ' +
                'This is why many cryptos start as fractions of cents, no one is willing to buy them for more. ' +
                'People are afraid to [make a mistake](/articles/biggest-crypto-mistakes) when investing their ' +
                'hard-earned money, and until crypto is proven to be a reasonable asset, they will remain out of ' +
                'that market.\n' +
                '\n' +
                'Bitcoin even started like this. The initial price was only fractions of a cent. As time went on ' +
                'it drew more and more demand, causing prices to rise. When looking at its [price history]' +
                '(https://buybitcoinworldwide.com/price/) you can see consistent times when the price went way ' +
                'up in value, and then fell. The important part is that it continued to give opportunities for ' +
                'investors to make a profit. Other cryptos are just now starting at fractions of a penny, however, ' +
                'they won’t find high prices the good old-fashioned way, as Bitcoin did. They are going to have ' +
                'to find new ways to gain investors because Bitcoin already has the top rank.\n' +
                '\n' +
                'Big coins only attract more investors, they grab more attention and outshine the [smaller cryptos]' +
                '(/articles/what-is-an-altcoin). More attention means more demand and more demand means more' +
                ' profit. Due to having more investors, larger cryptos also have more people in the markets ' +
                'both making and losing money. If a whale or someone with a lot of money were to come around, ' +
                'regular investors can still make money and are not fully manipulated by the biggest bidder. ' +
                'With smaller coins, they have no chance.\n'
        },
        {
            img: PopularCrypto2,
            title: 'Almost Never Hit 0',
            id: 'Never0',
            description: 'Two bitcoin falling from above that are slowly deteriorating, leaving behind a ' +
                'white smoke in front of a black background.',
            text: 'Due to their being more investors, we see less downside potential. This means that if everyone ' +
                'panics in a crash, there will eventually be a bottom that is recoverable. Small coins often fall ' +
                'to zero. When looking at potential downside, we can factor this into the efficiency calculators ' +
                'that show us just how much downside risk can impact the rating of crypto, and in the event of a ' +
                '[crypto market crash](/articles/crypto-market-crashes) we are going to want the most efficient ' +
                'option possible. Whether you are a [short-term investor or a long-term investor](/articles/' +
                'short-term-vs-long-term-crypto-investing), both styles still require you to factor in how ' +
                'risky your asset choice is.\n' +
                '\n' +
                'The asset with less downside potential also means that people have trust in the crypto. They ' +
                'have trust that at a certain point, it will go back up. They have a point where they are ' +
                'willing to risk their money in the chance that they make it back. This point is the bottom of ' +
                'a crash. It happens when the number of investors that believe the price will go back up ' +
                'overpowers the number of investors that believe the price will [continue to fall](/articles/' +
                'what-to-do-in-bear-markets).\n' +
                '\n' +
                'A popular cryptocurrency will have this point at far less of a loss than the less popular one ' +
                'since there are more investors and more of them that believe in their coin. The most efficient ' +
                'asset is not always the most popular as well. When looking at popular cryptocurrency, you must ' +
                'investigate other areas of the coin for efficiencies like [Market Cap](https://www.investopedia.' +
                'com/terms/m/marketcapitalization.asp), Volume, and Predictability.\n'
        },
        {
            img: PopularCrypto3,
            title: 'Long Price History',
            id: 'PriceHistory',
            description: 'A notebook with a pen on top of it next to and open leather bag, a macbook laptop, ' +
                'and a red coffee cup and matching plate.',
            text: 'The history of a cryptocurrency can help show investors that the crypto that they are looking ' +
                'into can be trusted and also shows how loyal investors have been over the years. A Crypto with a ' +
                'lot of long-term investors will have people who depend on the asset and a good history helps newer ' +
                'investors measure and compare it as a [better choice](https://www.forbes.com/sites/rosely' +
                'newanjiru/2022/11/30/how-to-identify-a-good-cryptocurrency-project-to-hold-for-the-long-term/' +
                '?sh=7d2e3613231b) than the alternatives.\n' +
                '\n' +
                'If crypto has been a reliable choice that continually [brings investors profit](https://www.' +
                'nerdwallet.com/article/investing/earn-crypto), then why would anyone leave? The group of ' +
                'investors would only grow more and more until it is considered a popular cryptocurrency just ' +
                'from the steady reliability. Loyalty is built through treating the investors well many times over ' +
                'again. When you have a large history of loyal customers they are willing to put up with a few ' +
                'hiccups along the road to stick with the crypto they love.\n' +
                '\n' +
                'When you have this for many months and sometimes many years, it will catch the attention of ' +
                'outside investors wanting a piece of the consistent profit. When new investors come in, this ' +
                'makes the profits even better, the crypto [more reliable](https://investorplace.com/2023/04/' +
                'the-3-most-reliable-cryptos-to-invest-in-for-long-term-gains/), and the asset as a whole more ' +
                'popular. It is similar to a cycle where investors who have been with crypto for a while are ' +
                'part of the history that draws in new investors who then make history again by combining the ' +
                'old and the new.\n'
        },
        {
            img: PopularCrypto4,
            title: 'Final Words',
            id: 'FinalWords',
            description: 'Eight shiny gold colored Bitcoin crypto coins all next to each other on a lightly ' +
                'colored table with the logo showing upwards.',
            text: 'Cryptocurrencies are a great asset choice as long as you do your research and you can ' +
                'rarely go wrong with a popular cryptocurrency. Many times they have more profit, less downside ' +
                'potential, and a much better price history than other cryptos. Hype should never be the only ' +
                'thing you consider. Make sure you look into many cryptos to pick from before deciding which one ' +
                'you would like to invest in. Good data is key to good profits.\n' +
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