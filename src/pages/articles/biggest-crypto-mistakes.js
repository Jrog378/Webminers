import CryptoMistakesMain from '../../images/articleimages/CryptoMistakesMain.webp'
import CryptoMistakes1 from '../../images/articleimages/CryptoMistakes1.webp'
import CryptoMistakes2 from '../../images/articleimages/CryptoMistakes2.webp'
import CryptoMistakes3 from '../../images/articleimages/CryptoMistakes3.webp'
import CryptoMistakes4 from '../../images/articleimages/CryptoMistakes4.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function BiggestCryptoMistakes() {
    const Article = [
        {
            img: CryptoMistakesMain,
            title: '',
            id: 'Intro',
            description: 'Two stacks of coins next to each other with candle wicks on top that are lit up ' +
                'and have been slowly melting the coin stacks.',
            text: 'For those who are new to investing, crypto is a great option that is full of potential. It is backed by blockchain technology and has a very diverse field of innovation. If you want to be a part of the movement towards decentralization, also known as keeping central powers from taking away privacy, crypto is the asset you want to pick. Crypto is not an easy road to riches as some people may make it seem like. It takes time to learn the markets and understand how they act, just like any other asset. There are some big mistakes that many crypto investors make as they are starting even though they can be avoided easier than you may think.\n' +
                '\n' +
                'Here are 3 common crypto investing mistakes investors make that prevent them from making more profit:\n' +
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
            text: 'When beginners get into crypto, the first thing they want to do is make as much money as possible. Some new investors heard that crypto could make you rich quickly, thinking they know how to make money with crypto more than full-time investors and others are just hopping on the hype train. No matter how you come to the crypto markets, crypto investing without a [plan or system](start-investing) is one of the most common mistakes that new investors make. When investors will come in underestimating the markets, they will almost absolutely get completely whipped out. Getting wiped out is important because it shows you how easily the market can take your money.\n' +
                '\n' +
                'To learn from this mistake and avoid this issue in the future, it takes [finding efficient assets](next-big-crypto) to invest in with a real plan to get you started in crypto investing so that you do not end up making random investments hoping they will work out for you. These [efficient assets](/efficiency) can be calculated by hand or found using 3rd party services. No matter how you get your assets, the important part is what you do with them. The best way to learn how to avoid crypto investing mistakes is with your investing system that can set rules you can go back to every time you invest. This creates real evidence for your decisions. There are many different investing styles for you to pick from as well as different types of data for you to use to gain your advantage. The most important thing is that it works efficiently and suits you as an investor.\n' +
                '\n' +
                'When deciding how long you want to hold your trades you should [consider the different timeframes](https://www.kiplinger.com/retirement/estate-planning/604471/whats-your-investing-time-frame). When you do a larger time frame of making decisions based on daily data or even weekly data, it should be mentioned that you will be more accurate, but this also means that you may not be able to get as many investing opportunities. Shorter timeframes are less accurate, however, have more profit potential. It all depends on what you like most. Testing out [long-term vs short-term investing](short-term-vs-long-term-crypto-investing) and the data you use is all a part of making this system unique and your own as well as developing an understanding of the purpose each part has. It is also good to keep in mind that you should not be investing more than you can afford to lose.\n'
        },
        {
            img: CryptoMistakes2,
            title: 'Allowing Emotion to Take Control',
            id: 'EmotionalControl',
            description: 'Many different yellow balls with faces on them showing different emotions with the ' +
                'focus on the happy one all on a white table.',
            text: 'Even if you have an investing system, some investors still end up making investment decisions based on their emotions more than data. If you are going to determine how to make money with crypto, you have to be able to resist these emotions. [Emotions can be extremely powerful](avoid-emotional-investing) and give you the urge to invest irrationally or when your investing system is telling you otherwise. The first step to fixing this issue in investing is recognizing when and why it happens to teach yourself how to manage your crypto risk. Some people are more likely to experience emotion when they are losing money and others experience it when they are winning. Not controlling your emotions and understanding why they are happening leads to great losses.\n' +
                '\n' +
                'The easiest way to find out how to make smart crypto investments and avoid the mistake of allowing your emotions to control your investments is to add [discipline to your strategy](https://www.forbes.com/sites/rickferri/2015/10/06/six-rules-to-disciplined-investing/?sh=7c26dca6557b) and control the time when you are investing. Ways that you can control your emotions are to reduce the time that you are looking at the screen. The more you look at the markets, the more emotion you are going to feel when the charts are going up and down, rather than just sticking to what the data is telling you to do. This might be hard in the beginning because you will be worried, but you shouldn’t be. You should be listening to your system and only buying and selling when it tells you is the right time, that way you can [avoid these emotional decisions](https://investor.vanguard.com/investor-resources-education/article/the-science-behind-money-and-emotion).\n' +
                '\n' +
                'When we look at [crypto market psychology](crypto-market-psychology), we see three emotional investing topics that should be looked into. These are FOMO, FUD, and Bias. FOMO, also known as the fear of missing out, will make you want to buy when the market begins to go up. Those who suffer from FOMO end up buying based on this fear due to not having the patience to wait for their investing system to tell them to buy. FUD, also known as fear, uncertainty, and doubt, is a time in the market when people are running around scared, making decisions based on emotion. FOMO tends to push the price higher in hopes of not missing a movement, and FUD tends to crash the price lower in fear of losing money. [Hindsight Bias](https://corporatefinanceinstitute.com/resources/capital-markets/hindsight-bias/) will happen when you look back at times when you were thinking about breaking the rules and didn’t. Then afterward you tell yourself that you should have listened to yourself since it would have made you money. Hindsight bias is powerful because many times it will only take into account the outcomes that would have been positive and not the bad ones.\n'
        },
        {
            img: CryptoMistakes3,
            title: 'Decisions Without Volatility',
            id: 'VolatileDecisions',
            description: 'A leather wallet with cards and cash inside it being pinched together by a rustic ' +
                'green painted metal clamp on a white surface.',
            text: '[Market volatility is king](what-impacts-crypto-volatility) and without it, investing would not exist. The measure of volatility is based on how likely an asset’s price is going to change rapidly. Rapid price changes might sound bad, however, it can be amazing when you can capture the moves upwards and not lose money downwards. Crypto is considered a [very volatile market](https://www.makeuseof.com/what-makes-the-crypto-currency-market-volatile/) which can be good for investors who know how to use it and terrible for those who are starting and are not accustomed to it. When determining how to protect your crypto investments, volatility should be used to your advantage, and monitoring when volatility is at its most and least is essential for investing.\n' +
                '\n' +
                'Low volatility happens during bear markets and when the [stock market is closed](https://public.com/learn/stock-market-hours), like the weekends and holidays. Fewer investors mean it is more common for the markets to move around irrationally. Since we know the markets behave differently, we can also tell that the data associated with them will as well. If you still want to use your investing system in slow market times, you are going to have to adjust your investing system accordingly. Your data should be robust and historically still work during similar times. You should also add in extra security so that you are not jumping on every single signal that comes through and be more careful about when you put money in.\n' +
                '\n' +
                'When the markets have low volatility, large movements tend to have less resistance. [Market movers and whales](https://admiralmarkets.com/education/articles/fundamental-analysys/market-movers) who have a lot of money can manipulate the markets a lot easier as well. When you are investing during these times, you should be cautious of rapid movements in either direction. These market movers may be trying to crash the price down to buy again cheaper or shoot up the price to make a ton of profit. These movements can also be very similar to [pump-and-dump scams](https://www.investopedia.com/ask/answers/05/061205.asp). These scams happen when a new coin gets someone or a group of people with a lot of money to boost the price of their crypto and once the price starts to go up, outside investors see the change and decide to join in. As more people begin to join in, the main investors take out their money for hundreds of times the amount of what they invested in profit, leaving the price to crash and all of the other investors to lose their money. Understanding the possibilities can help you protect yourself and possibly profit from a movement like this.\n'
        },
        {
            img: CryptoMistakes4,
            title: 'Concluding Words',
            id: 'Conclusion',
            description: 'Five red blocks that are getting bigger as you go right each with a gray set of buildings ' +
                'in front of them getting bigger too.',
            text: '### What is the easiest way to avoid beginner mistakes in crypto?\n' +
                'The easiest way to avoid beginner mistakes is to build an investing system and stick to it no matter what.\n' +
                '\n' +
                '### How can emotions be bad for investing?\n' +
                'Emotions become a bad thing when you start putting your money where they tell you to rather than where your data says to. Those who invest with emotion will fuel the profit of those who don’t.\n' +
                '\n' +
                '### Is crypto volatility bad?\n' +
                'Crypto is a volatile asset and being able to take advantage of this can be done by catching the movements up and selling before the price begins to fall. Volatility goes both ways, making it great if you can control it.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}