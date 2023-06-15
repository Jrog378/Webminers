import CryptoBubbleMain from '../../images/articleimages/CryptoBubbleMain.webp'
import CryptoBubble1 from '../../images/articleimages/CryptoBubble1.webp'
import CryptoBubble2 from '../../images/articleimages/CryptoBubble2.webp'
import CryptoBubble3 from '../../images/articleimages/CryptoBubble3.webp'
import CryptoBubble4 from '../../images/articleimages/CryptoBubble4.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function WhatIsACryptoBubble() {
    const Article = [
        {
            img: CryptoBubbleMain,
            title: '',
            id: 'Intro',
            description: 'Stack of hundred dollar bills rolled up with a rubber band around them with a ' +
                'wooden hourglass in the background with white sand.',
            text: 'Crypto bubbles can happen for a lot of reasons and there is no one path to success in identifying them. Each one may be unique, making it extremely difficult to even know there is a bubble. When crypto bubbles crash, this can cause catastrophic drops in price. No one wants to be the victim of a crypto market crash and to better understand how to avoid this, we have to take a look at bubbles themselves. Since each bubble may be completely different, we are going to go over some general areas that have similarities. Factors that contribute to crypto bubbles might not be so difficult to identify once we look at the fundamentals that make up each bubble and how they fall.\n' +
                '\n' +
                'When finding out how to protect yourself from a crypto bubble, we are going to consider these three topics:\n' +
                '\n' +
                '1. [Crypto Market Psychology](#MarketPsychology)\n' +
                '2. [Crypto Market Volatility](#Volatility)\n' +
                '3. [Black Swan Events](#BlackSwan)\n'
        },
        {
            img: CryptoBubble1,
            title: 'Crypto Market Psychology',
            id: 'MarketPsychology',
            description: 'A stack of hundred dollar bills rolled up with a rubber band around them with a ' +
                'wooden hourglass behind it with white sand.',
            text: '[Crypto market psychology](crypto-market-psychology) is the thinking that the majority of people involved in the market go through. While there are still some exceptions, market psychology can still be used as general guidelines. This works out well for crypto bubbles because the best way to look at them is in a general way. The psychology of the markets shows us that people love to buy as markets are going up and panic and sell when markets go down. This is helpful to know because it shows how volatile prices are. When the price of crypto begins to fall, emotions will push it to fall faster, as well as when the price rises, emotions will push the price higher. This crypto market volatility is even higher when it takes place in an altcoin. To maintain safe and profitable investing, you can protect yourself by [investing in efficient cryptos](/efficiency).\n' +
                '\n' +
                'When the markets are going up, people get greedy. During crypto bubbles, many times [price is inflated with emotions](https://www.investopedia.com/articles/basics/10/how-to-avoid-emotional-investing.asp) to make the bubbles worse than they should be. Price begins to go up and emotional investing makes the bubble even bigger by continuing to push the price higher as people buy into the markets. If you see people in this greedy state in the markets and recognize that it is not a good time to buy, yet other investors are doing so anyway, don’t feel obligated to jump into the markets. Even though some of these investors may make money, it will purely be because everyone else does it and they go lucky. The only time you should buy in this situation is if you have [an investing system](start-investing) that tells you that it is a good time to buy, otherwise, you might just get completely wiped out the moment you put your money in.\n' +
                '\n' +
                'As people begin to get wiped out, everyone panics. Fear starts to rise and everyone is trying to salvage anything they can of their money, but it is too late. These price drops can be temporary, or the final straw that pops a crypto market bubble. Keeping yourself [calm and your mental state clear](crypto-mental-focus) will help you make good decisions, even if you have experienced some losses already.\n' +
                '\n' +
                'Why didn’t the investors see it coming? It can be difficult to know why crypto bubbles happen since greed takes over many investors\' rational thinking. This same feeling of greed is why [gambling is so addictive](investing-vs-gambling). The sight of winning makes you happy and can blind you from the dangers that the market can hold. Keeping yourself accountable and preventing your emotions from taking over is essential to keeping yourself out of risky situations. When emotion is at its peak, crypto markets are most likely to crash.\n'
        },
        {
            img: CryptoBubble2,
            title: 'Crypto Market Volatility',
            id: 'Volatility',
            description: 'A large cloud of dark gray smoke with streaks in it surrounded by clouds that ' +
                'is erupting from a large rocky and sandy mountain.',
            text: 'When [crypto market volatility](what-impacts-crypto-volatility) is high, investing becomes riskier than usual. This crypto risk is good if you can catch a ride on an uptrend, however, it can expose a crypto bubble if the price can drop low enough. When the crypto markets are ranging, also known as [going up and down repeatedly](https://cointelegraph.com/news/pro-traders-know-it-s-time-to-range-trade-when-this-classic-pattern-shows-up) and not really in one direction, you can see a general area of what the bottom of the range is. To protect yourself we have to look into the volatility factors that contribute to crypto bubbles.\n' +
                '\n' +
                'You know that people are happy to buy in that area because they do not think it will go any lower, trusting the market will continue to rise in price. When markets are extra volatile, this lower range can be completely broken through, causing panic and quick selling to the point where a bubble can be exposed. If this bubble pops, the price of crypto may continue to crash [until it finds support](https://learn.bybit.com/trading/what-is-support-and-resistance/), possibly entering a crypto bear market. Those who bought in the range are left with great losses unless they were able to sell in time.\n' +
                '\n' +
                'Another way that volatility can expose a crypto bubble is with a pump-and-dump scam. Crypto scams like this happen when an investor with a lot of money, purposely raises the [price of an altcoin](what-is-an-altcoin) by buying a ton of it. This increase in price gets the attention of other investors, causing them to buy some as well. Once enough people buy this crypto, the first investor starts to sell off his crypto. This rapid selling leaves the investor with hundreds of times the amount they put in allowing everyone else to suffer as the [price falls to near zero](https://phemex.com/academy/what-is-pump-and-dump), leaving many investors with almost nothing after the crypto falls. These crypto scams are purposefully made bubbles that are then popped once the main party has made tons.\n' +
                '\n' +
                'Proof is key and if you are just wanting to buy a crypto because everyone else is, then your best choice is to just not touch that market at all until you have a [reason backed with data](https://coresignal.com/blog/data-driven-investing/) on why you believe it is a good time to buy. To avoid crypto bubbles and crashes caused by volatility, make sure that you are taking the proper risk management precautions by investing in popular cryptos with a lot of investors using an investing system. More investors mean that there is less of a chance that a single entity will be able to manipulate the price. Investing using a system will ensure that you are not emotionally invested hoping for profit and rather are using a plan. An investing system can help you know how to avoid a crypto bubble without even knowing one is there, just by smart investing.\n'
        },
        {
            img: CryptoBubble3,
            title: 'Black Swan Events',
            id: 'BlackSwan',
            description: 'Five white dice sitting next to each other showing the numbers one, one, two, four, ' +
                'and six with black dots on a white table.',
            text: 'Among the risks involved in investing in cryptocurrencies, [black swan events are almost unpredictable](https://seekingalpha.com/article/4489012-black-swan-event) and have a large toll on crypto markets. Black Swan events are events like global news or extreme crises, like the housing market crash where people lost their homes due to being crushed by debt from their required payments going up in price. No matter what the event is or what caused it the main issues are that you are not able to tell when it is coming and when it comes, it takes a toll on crypto markets.\n' +
                '\n' +
                'It is important to study black swan crypto market crashes because they are a [case of crypto arbitrage](https://www.coindesk.com/learn/crypto-arbitrage-trading-how-to-make-low-risk-gains/) where the market does something opposite to what our data is telling us. When crypto arbitrage or a black swan event comes it can also expose a crypto bubble that the market may have. This happens by causing large drops in price along with the fear of investors not being able to make up for the losses.\n' +
                '\n' +
                'A crypto bubble can continue to pop and get worse if the news of our black swan event continues to get worse. Even though black swan events are almost unpredictable you should still study them and their corresponding crypto bubble that may have popped along with the outcome of the event. Don’t be afraid to look into [market bubbles in the stock market](https://www.thestreet.com/dictionary/b/bubble) as well as any market that will be able to provide you with a general idea of what a crypto bubble would be like.\n'
        },
        {
            img: CryptoBubble4,
            title: 'Conclusion',
            id: 'Conclusion',
            description: 'A golden Bitcoin crypto coin standing up in a pile of other coins with a dark ' +
                'colored background that says blockchain on it.',
            text: '### How to spot a crypto bubble?\n' +
                'It is extremely hard to predict and spot crypto bubbles. The best way to determine if you have a crypto bubble is to look at the general rules of the markets. We can take a look at the market psychology to understand how people think when the price is going in different directions as well as how volatile markets can make quick movements that expose crypto bubbles.\n' +
                '\n' +
                '### How to protect yourself from a crypto bubble?\n' +
                'The best way to protect yourself from a crypto bubble is to make sure that you are investing in popular and efficient assets that are difficult to manipulate by a single entity. Once you have your assets, you’ll want to make sure you have an investing system that can help guide you through the market so you do not make decisions based on emotion.\n' +
                '\n' +
                '### What should I worry about pump-and-dumps?\n' +
                'Pump-and-dump scams can be difficult to tell if they are realistic movements or not. Something you can do so that you do not have to worry is looking into the market capitalization and how many investors are participating in the current crypto you are looking at. If either is low and you see a giant move upwards, it may be best to ignore it and stick to more reliable cryptocurrencies.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}