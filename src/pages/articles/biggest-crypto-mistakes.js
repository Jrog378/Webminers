import CryptoMistakesMain from '../../images/articleimages/CryptoMistakesMain.webp'
import CryptoMistakes1 from '../../images/articleimages/CryptoMistakes1.webp'
import CryptoMistakes2 from '../../images/articleimages/CryptoMistakes2.webp'
import CryptoMistakes3 from '../../images/articleimages/CryptoMistakes3.webp'
import CryptoMistakes4 from '../../images/articleimages/CryptoMistakes4.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function BestEfficientCrypto() {
    const Article = [
        {
            img: CryptoMistakesMain,
            title: '',
            id: 'Intro',
            description: 'The cryptocurrency market in all red going up and down along a candle with lines going ' +
                'around it and arrows pointing downwards.',
            text: 'Investing in Crypto is an amazing way to use your money to purchase assets that can go ' +
                'up in value. Crypto is not an easy road to riches as some people may make it seem like. It ' +
                'takes time to learn the markets and understand how they act. There are some big mistakes ' +
                'that many crypto investors make as they are starting even though they are able to be avoided ' +
                'easier than you may think.\n' +
                '\n' +
                'Here are the 3 biggest mistakes crypto investors make that prevent them from making more ' +
                'profit:\n' +
                '\n' +
                '1. [Not Using a Plan](#InvestingPlan)\n' +
                '2. [Allowing Emotion to Take Control](#EmotionalControl)\n' +
                '3. [Decisions Without Volatility](#VolatileDecisions)\n'
        },
        {
            img: CryptoMistakes1,
            title: 'Not Using a Plan',
            id: 'InvestingPlan',
            description: 'An Apple Macbook Laptop next to a notebook with a pen on it next to a cup of coffee ' +
                'on a wooden table all in black and white.',
            text: 'Crypto investing without a plan is one of the most common mistakes that new investors make. ' +
                'When investors will come into the markets thinking that they can outsmart whales and ' +
                'experienced investors they will almost absolutely get completely whipped out. However, ' +
                'getting wiped out is important because it shows you how easily the market can take your ' +
                'money. What you decide to do with this knowledge will determine if you will make it to the ' +
                'next step of investing or not.\n' +
                '\n' +
                'To avoid this issue, start planning out investing and think about the decisions you are ' +
                'about to make. Create a plan with set rules that you can go back to every time you make an ' +
                'investing decision so that you can have real evidence of the way you are betting the market ' +
                'will go. This plan can use all sorts of different types of data. The most important thing ' +
                'is that it works efficiently and suits your investing style. If you are interested in creating ' +
                'a system, read my article called [How to Start Investing in Crypto](/articles/start-i' +
                'nvesting).\n' +
                '\n' +
                'Investing does not have to be in one timeframe as well. Your system can be on the ' +
                '60-minute chart, the daily chart, or even the weekly chart. It all depends on what you ' +
                'like most. Testing out different investing styles and data is all a part of making this ' +
                'system your own and understanding the purpose of each part. You should also be incorporating ' +
                'efficient assets into your investing system for the best outcomes. Read up on my article ' +
                'called [Finding the Next Big Cryptocurrency](/articles/next-big-crypto) if you are interested ' +
                'in how to find efficient cryptos.\n'
        },
        {
            img: CryptoMistakes2,
            title: 'Allowing Emotion to Take Control',
            id: 'EmotionalControl',
            description: 'Many different yellow balls with faces on them showing different emotions with the ' +
                'focus on the happy one all on a white table.',
            text: 'Keeping your emotions in check is very important to accurate investing. Emotions can be ' +
                'extremely powerful and give you the urge to invest irrationally or when your investing system ' +
                'is telling you otherwise. Emotions are not a bad thing to have, it is just important to ' +
                'understand when they are taking control and not making investment decisions because of ' +
                'them.\n' +
                '\n' +
                'Ways that you can control your emotions are to reduce the time that you are looking at the ' +
                'screen. If you only plan to invest every morning, then only check every morning. This might ' +
                'be hard in the beginning because you will be worried, but you shouldn’t be. You should be ' +
                'listening to your system and only buying and selling when it tells you is the right time, ' +
                'that way you can avoid these emotional decisions. Investopedia has a great article on [How ' +
                'to Avoid Emotional Investing](https://www.investopedia.com/articles/basics/10/how-to-avoid-' +
                'emotional-investing.asp).\n' +
                '\n' +
                'Not controlling your emotions and understanding why they are happening lead to great losses. ' +
                'FOMO, also known as the fear of missing out, will make you want to buy when the market begins ' +
                'to go up. Hindsight Bias will happen when you look back at times when you were thinking about ' +
                'breaking the rules and didn’t. Then afterwards you tell yourself that you should have listened ' +
                'to yourself since it would have made you money. Hindsight bias is powerful because many times ' +
                'it will only take into account the outcomes that would have been positive and not the bad ones. ' +
                'If you are interested in finding out more about your crypto investing emotions read my article ' +
                'called [What it Takes to Become a Smart Emotionless Crypto Investor](/articles/top-investor)\n'
        },
        {
            img: CryptoMistakes3,
            title: 'Decisions Without Volatility',
            id: 'VolatileDecisions',
            description: 'A leather wallet with cards and cash inside it being pinched together by a rustic ' +
                'green painted metal clamp on a white surface.',
            text: 'Volatility is king and without it, investing would not exist. Volatility is the trait of ' +
                'being able to change. This means there can be very extreme movements, both up and down. ' +
                'Crypto is considered a very volatile market which is both good and bad, it all depends on ' +
                'if you know how to use it. An easy way that you can check volatility is with the 24-hour ' +
                'volume provided by [CoinGecko](https://www.coingecko.com/) for whichever cryptocurrency you ' +
                'decide to look into.\n' +
                '\n' +
                'An example of Investing without volatility would be investing on the weekends. The stock ' +
                'market is closed and not many people want to spend their weekends working so there are fewer ' +
                'people in the market. This means low volatility. Low volatility means that if you do decide ' +
                'to put money in, the market will not move much and there is low opportunity for profit. This ' +
                'also means that a whale or market mover with a lot of money comes along, and they can heavily ' +
                'influence the outcome of the market. Other times when volatility is hard to come by are bear ' +
                'markets and times outside of the [regular trading sessions](https://www.investopedia.com/terms' +
                '/t/tradingsession.asp) or hours.\n' +
                '\n' +
                'Investing that lacks volatility does not follow the regular rules of investing. Signals are ' +
                'less accurate and there are more unpredictable movements that happen. It is important to ' +
                'note if you do decide to invest during times without volatility, you should adjust your ' +
                'investing style accordingly. If you are interested in learning more about what you can do ' +
                'in times without volatility like a bear market, read my article [What to do in a Bear ' +
                'Market](/articles/what-to-do-in-bear-markets).\n'
        },
        {
            img: CryptoMistakes4,
            title: 'Concluding Words',
            id: 'Conclusion',
            description: 'Two stacks of coins next to each other with candle wicks on top that are lit up ' +
                'and have been slowly melting the coin stacks.',
            text: 'There are many mistakes that you are going to make along the way of becoming a more ' +
                'experienced investor and it is important to continue learning because you will never be ' +
                'able to know everything. Improvement is always possible. Use your resources and write ' +
                'down mistakes that you want to overcome even if they are similar but not exact to not ' +
                'using a plan, allowing emotion to take control, and decisions without volatility. Mistakes ' +
                'are how we grow. Keep your head up.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}