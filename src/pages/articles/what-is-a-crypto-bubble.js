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
            text: 'A crypto bubble is the inflation of price to the point where it is unstable and can easily ' +
                'pop or crash. A crypto bubble can come in many forms, whether this be a type of coin, like ' +
                'AI cryptos, the crypto market as a whole, or even just a single asset. A crypto bubble is difficult ' +
                'to notice because you have to be able to tell whether or not the movement has support backing ' +
                'it.\n' +
                '\n' +
                'To protect yourself from a crypto bubble, these topics should be considered:\n' +
                '\n' +
                '1. [Crypto Market Psychology](#MarketPsychology)\n' +
                '2. [Pump and Dump](#PumpDump)\n' +
                '3. [Black Swan Events](#BlackSwan)\n'
        },
        {
            img: CryptoBubble1,
            title: 'Crypto Market Psychology',
            id: 'MarketPsychology',
            description: 'A stack of hundred dollar bills rolled up with a rubber band around them with a ' +
                'wooden hourglass behind it with white sand.',
            text: 'Crypto market psychology tells investors how others in the market think. Those with money feel ' +
                'great when the market goes up and those that didn’t buy tend to panic. Learning how others think ' +
                'is very important to understand why people are investing and if something is actually backed and ' +
                'supported enough to not crash on top of you. A crypto bubble works similarly. A crypto bubble will ' +
                'start great and people will be buying more crypto hoping to make more money until pops. It then all ' +
                'comes [crashing down](https://www.livewiremarkets.com/wires/the-3-stages-of-a-market-crash-and-' +
                'ways-to-navigate-them).\n' +
                '\n' +
                'Why didn’t the investors see it coming? Greed gets the best of many people, which is why [gambling ' +
                'is so addictive](https://www.healthline.com/health/addiction/gambling). Winning makes you happy and ' +
                'can blind you from the dangers that the market can hold. Keeping yourself accountable and ' +
                '[preventing your emotions from taking over](avoid-emotional-investing) is essential to keeping ' +
                'yourself out of risky situations. When emotion is at its peak, crypto markets are most likely ' +
                'to crash.\n' +
                '\n' +
                'Data-backed decisions with a real [investing system](/articles/start-investing) help investors ' +
                'avoid making emotional decisions and losing their hard-earned money. Using data, you can ' +
                'identify when markets are just going up because people want to buy more compared to an actual ' +
                'movement that is backed with evidence. Investing systems are put in place to ensure that you ' +
                'are investing with the most efficiency and best ratio of risk and reward.\n'
        },
        {
            img: CryptoBubble2,
            title: 'Pump and Dump',
            id: 'PumpDump',
            description: 'A large cloud of dark gray smoke with streaks in it surrounded by clouds that ' +
                'is erupting from a large rocky and sandy mountain.',
            text: 'Pump and dump is a term referred to when large investors take part in raising the price ' +
                'of crypto to gain attention from other investors so that when people begin to buy, the large ' +
                'investors begin to sell their share of crypto back to those who are hopping on the hype ' +
                'train. Little do the investors buying at this moment, they are coming up on the crash. ' +
                'After the large investors sell all their crypto, they have made a ton of money and the ' +
                'crypto begins to lose support. This causes a violent crash leaving many investors with ' +
                'almost nothing after the crypto falls.\n' +
                '\n' +
                'Pump and dumps are just a crypto bubble created with newer cryptos that do not have a lot of ' +
                'investors involved. This makes for conditions that do not have volatility and can easily ' +
                'be [manipulated](https://corporatefinanceinstitute.com/resources/capital-markets/' +
                'market-manipulation/) in favor of the highest bidder. Being able to recognize why crypto ' +
                'is beginning to gain traction in price can help you identify whether or not this is an ' +
                'opportunity where you can make money.\n' +
                '\n' +
                'Proof is key and if you are just wanting to buy a crypto because everyone else is, then ' +
                'your best choice is to just not touch that market at all until you can present proof of ' +
                'why you believe it is a good time to buy. Since pump and dumps normally happen on altcoins, ' +
                'also known as coins other than Bitcoin or Ethereum, as long as you stick with cryptos with ' +
                'consistent [volatility and a high market cap](/articles/best-efficient-crypto), then you ' +
                'should be safe from this type of crypto bubble. Make sure you also look into the history ' +
                'of the coin to make sure that there have been steady areas of profit and that what is most ' +
                'recent has not been created out of thin air.\n'
        },
        {
            img: CryptoBubble3,
            title: 'Black Swan Events',
            id: 'BlackSwan',
            description: 'Five white dice sitting next to each other showing the numbers one, one, two, four, ' +
                'and six with black dots on a white table.',
            text: 'Black Swan events are events that are almost unpredictable and have a large toll on crypto ' +
                'markets. Black swan events are events like global news or extreme crises, like the [housing ' +
                'market crash](https://www.investopedia.com/articles/economics/09/subprime-market-2008.asp) ' +
                'where people lost their homes due to being crushed by debt from their required payments ' +
                'going up in price. No matter what the event is or what caused it the main issues are that ' +
                'you are not able to tell when it is coming and when it comes, it takes a toll on crypto ' +
                'markets.\n' +
                '\n' +
                'It is important to study black swan [crypto market crashes](/articles/crypto-market-crashes) ' +
                'because they are a case of crypto arbitrage where the market does something opposite of ' +
                'what our data is telling us. When crypto arbitrage or a black swan event comes it can also ' +
                'expose a crypto bubble that the market may have. This happens by causing large drops in ' +
                'price along with the fear of investors not being able to make up for the losses.\n' +
                '\n' +
                'A crypto bubble can continue to pop and get worse if the news of our black swan event ' +
                'continues to get worse. Even though black swan events are almost unpredictable you should ' +
                'still study them and their corresponding crypto bubble that may have popped along with the ' +
                'outcome of the event. Don’t be afraid to look into market bubbles in the stock market as ' +
                'well as any market that will be able to provide you with a general idea of what a crypto ' +
                'bubble would be like.\n'
        },
        {
            img: CryptoBubble4,
            title: 'Conclusion',
            id: 'Conclusion',
            description: 'A golden Bitcoin crypto coin standing up in a pile of other coins with a dark ' +
                'colored background that says blockchain on it.',
            text: 'A crypto bubble can be dangerous if not taken seriously or ignored completely. Many of the ' +
                '[largest market crashes in history](https://time.com/personal-finance/article/us-stock-' +
                'market-crashes/) was caused by a bubble of some sort, which shows the severity of knowing ' +
                'more about them. Ensure that you are not investing with the crowd or into crypto without a ' +
                'lot of history or volatility. Prevent yourself from investing in emotions and being afraid ' +
                'of missing out on a movement. Study the possibilities of black swan events in the market ' +
                'because the payoff of knowing how to treat one or lower the number of losses will pay off ' +
                'in the end. Avoid making [beginner mistakes](/articles/biggest-crypto-mistakes) and remember ' +
                'that the scariest part of a crypto bubble is that we don’t even know it’s there. Invest ' +
                'safely and consult a financial professional before putting money at risk.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}