import BullMarketMain from '../../images/articleimages/BullMarketMain.webp'
import BullMarket1 from '../../images/articleimages/BullMarket1.webp'
import BullMarket2 from '../../images/articleimages/BullMarket2.webp'
import BullMarket3 from '../../images/articleimages/BullMarket3.webp'
import BullMarket4 from '../../images/articleimages/BullMarket4.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function CryptoMarketPsychology() {
    const Article = [
        {
            img: BullMarketMain,
            title: '',
            id: 'Intro',
            description: 'The large metal bull statue that sits in wall street in New York while it is snowing outside and the pathway has snow on it.',
            text: 'Crypto bull markets are notorious for excitement and enthusiasm among investors, yet some still manage to mess up their profits. While a bull run is seen as a crazy stretch of just upwards market movement, there is much more to it. During this large movement, many smaller movements take place. Many investors and traders lose money in the smaller picture to the point where they would have been better off buying and holding the whole way up.\n' +
                '\n' +
                'Here are some of the reasons investors and traders lose money in crypto bull runs:\n' +
                '\n' +
                '1. [Emotional Roller Coasters](#Emotion)\n' +
                '2. [Wandering Around Lost](#Lost)\n' +
                '3. [Worrying About When it Starts](#TheStart)\n'
        },
        {
            img: BullMarket1,
            title: 'Emotional Roller Coasters',
            id: 'Emotion',
            description: 'Four different stacks of coins with each one a different one of nickels, pennies, dimes, and quarters in front of more coins.',
            text: 'When the markets are going up, everyone is in peak emotion. They are so happy they are making money and never want it to stop. In the back of their mind, they know that [crypto is volatile](what-impacts-crypto-volatility) and the market could stop going up. This emotion sticks with them and influences them when they buy and sell. People are afraid the profits will run out. They are afraid that once the markets fall it will be too late for them.\n' +
                '\n' +
                'When markets are going up and people are afraid of them falling, we have severe hitches in the market. These hitches are from people thinking the market is going to fall again. There is no other reason to sell other than believing the market has topped off. When this small dip happens, more people will believe that it is going to fall just based on this dip and sell their coins. This will continue to happen until enough investors buy more cryptos at this bargain price and the market continues to go up. The mistake made is investors thinking the bull market is over without evidence before it is. This [emotional investing](top-investor) causes amazing deals for those who can capitalize on their losses.\n' +
                '\n' +
                'Being too late to sell is the alternative for many investors as they are so worked up in their excitement, they forget that the market has to eventually stop going up. When this time comes, many investors even deny it at first, believing that the market will return to soaring profits. They are soon awoken by large losses. At this point, everyone panics and our once fun and happy bull run turns south for the [crypto bear market](what-to-do-in-bear-markets).\n'
        },
        {
            img: BullMarket2,
            title: 'Wandering Around Lost',
            id: 'Lost',
            description: 'A stack of one hundred dollar bills rolled up in a ball with a rubber band around them in front of a screen showing crypto.',
            text: 'During a crypto bull market from a far, it will look like it was mainly going upwards, but when you look at smaller time frames you can see that there are a [lot of ups and downs](https://www.forbes.com/sites/impactpartners/2019/01/23/how-to-be-a-smarter-investor-through-the-ups-and-downs-of-the-market/?sh=32cb65e83d5a) that took place to form that. These ups and downs are caused by multiple different investors debating on the price, some believe they can get a better price and sell, others believe the price will only rise and buy. These transactions move the market up and down until one side wins and pushes the market in that direction.\n' +
                '\n' +
                'Since it is a bull market, the chances are the market will go up by the end of the day. Even with this known, investors still battle the charts multiple times a day hoping to squeeze out any profit they can get. This comes in the [form of scalping](https://cointelegraph.com/news/what-is-scalping-in-crypto-and-how-does-scalp-trading-work) or wandering through the markets hoping for the best. Newer investors make many mistakes and one of them is believing they are smarter than the market. These new investors go in thinking that they can pull off smart trades without actually knowing what they are doing and get wiped out. These investors or traders are joining in the masses with [herd mentality](https://markets.businessinsider.com/currencies/news/binance-ceo-founder-bitcoin-crypto-herd-mentality-price-volatility-microstrategy-2021-5-1030380269?op=1) causing the ups and downs on short time frames by wandering around putting in money where they think is best without actually having evidence for the decision.\n' +
                '\n' +
                'Sometimes bull runs will have small pauses where they are [sideways for a little or not moving much](https://academy.binance.com/en/articles/what-is-range-bound-trading-types-of-range-bound-strategies-for-a-sideways-market). During these times even more people are trying to force trades to work out for them or just doing what they feel is right. This type of thinking fuels the pockets of investors and trades who use data or evidence for their decisions.\n'
        },
        {
            img: BullMarket3,
            title: 'Worrying About When it Starts',
            id: 'TheStart',
            description: 'A golden coin on top of two other coins with the Bitcoin logo on the front of it in front of a wooden hourglass and other coins.',
            text: 'Before the bull market even begins there is the mental war of finding out when the bull run will take off. Everyone is waiting for it to happen but no one knows for sure when things will start to boom. [Market psychology](crypto-market-psychology) kicks in and you can tell when people are not treating the market as they should. Buying too soon thinking that the bull market is here or selling at the bottom when they regret buying and are hoping it doesn\'t go any lower.\n' +
                '\n' +
                'Those with [investing systems](start-investing) don’t have to worry about when the crypto bull market starts or ends because the system tells them everything they need to know. Whether they are in slow markets or fast markets the system should be able to guide them with their decisions, preventing them from letting their emotions waste their money. Some systems are better suited for different market environments so you must pay attention to what works best for your system and investing style.\n' +
                '\n' +
                '[Whales and market movers](https://www.investopedia.com/terms/b/bitcoin-whale.asp) will be able to mess around with the market right before the bull market begins because everyone is on the edge of their seats waiting for the profit to come. Market movers can sell large amounts of crypto to cut off weak movements just to buy back their crypto lower. These market movers can take advantage of investors and traders who would do anything to buy right at the start, letting them buy and dropping the price to take their crypto for cheap when they sell. To avoid this make sure you keep your eyes on the price and stick to your signals.\n'
        },
        {
            img: BullMarket4,
            title: 'Final Thoughts',
            id: 'Final',
            description: 'An Apple iPad with a multicolored chart on it on top of a wooden table next to a calculator, pen, and a piece of white paper.',
            text: 'When it comes to crypto bull markets, there is a lot to know before you start crypto investing thinking you are going to make easy money. Avoiding emotional rollercoasters can help you reduce stress and save profits. Wandering around trying to squeeze the most out of the market is not the best way to keep your investing efficient as some movements might not be easily predicted. Being able to stay cool before the bull run has started helps you preserve your money and not lose your much-needed capital to any stupid investments before it is time to use it for profit. Understanding the market might seem like a tedious task but can help save you from a lot of pain and loss while investing.\n' +
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