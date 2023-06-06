import EmotionInvestingMain from '../../images/articleimages/EmotionInvestingMain.webp'
import EmotionInvesting1 from '../../images/articleimages/EmotionInvesting1.webp'
import EmotionInvesting2 from '../../images/articleimages/EmotionInvesting2.webp'
import EmotionInvesting3 from '../../images/articleimages/EmotionInvesting3.webp'
import EmotionInvesting4 from '../../images/articleimages/EmotionInvesting4.webp'
import EmotionInvesting5 from '../../images/articleimages/EmotionInvesting5.webp'
import EmotionInvesting6 from '../../images/articleimages/EmotionInvesting6.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function AvoidEmotionalInvesting() {
    const Article = [
        {
            img: EmotionInvestingMain,
            title: '',
            id: 'Intro',
            description: 'A foggy forest with a single tree up front that has no leaves and very tall that you ' +
                'can barely see with other trees behind it.',
            text: 'Emotion is the biggest issue that is taking over investors and making them carelessly ' +
                'lose money, especially in bear markets. To be the best you can be for yourself and your ' +
                'profits, there are things you must do to avoid making these emotional decisions. Emotion ' +
                'comes naturally to humans. Fundamentally the act of competition is a very emotion-inducing ' +
                'activity. Even though investing is prone to emotion, with some practice, avoiding this can ' +
                'become second nature.\n' +
                '\n' +
                'Here are the 5 tips on how to avoid emotional investing in crypto:\n' +
                '\n' +
                '1. [Study Your Emotional Decisions](#StudyDecisions)\n' +
                '2. [Create an Investing System](#InvestingSystem)\n' +
                '3. [Stop Forcing Profit](#StopForcing)\n' +
                '4. [Study Market Psychology](#MarketPsychology)\n' +
                '5. [Create a Less Stressful Environment](#LessStress)\n'
        },
        {
            img: EmotionInvesting1,
            title: 'Study Your Emotional Decisions',
            id: 'StudyDecisions',
            description: 'A white paper notebook with a black spiral holding it together on top on a lightly ' +
                'colored surface next to three pencils.',
            text: 'When talking about emotions and investing, the two emotions that come [into play the most are fear and greed](https://www.forbes.com/sites/investor-hub/article/what-is-the-fear-and-greed-index-and-how-to-use-it/?sh=1aca37852ec8). When crypto investors have money on the line, they are fearful of losing it all and are greedy for more profit naturally. This fear comes when the market starts to fall and crypto investors are afraid that the market is going to continue to crash, so they sell everything. Greed happens on the other side of the market. When crypto investors are on a really good profit run that feels like it is never going to run out, they are more likely to ignore the places they are supposed to sell in hopes that they will make more money. These emotional crypto investors are taken over by their fear and greed, making them take more losses which then makes their investments riskier and less efficient.\n' +
                '\n' +
                'The way that crypto investors can stop this is by studying their own emotional decisions. To stop crypto emotions, the first step is recognition of them. Being able to identify and realize that you invest in emotions will help you work your way into understanding them. Writing down the reasoning behind every single investment you make, [also known as a trade or investment journal](https://www.nasdaq.com/articles/five-things-keep-your-personal-investment-journal-2014-03-24), allows you to reflect on yourself and see the decisions you made and how they ended up. When you keep track of how you think, you will begin to notice flaws in your thinking on even investing systems. If you identify trends that end up negatively you can make sure to avoid them from happening in the future.\n' +
                '\n' +
                'You will be your own biggest opponent when investing and should understand how much it matters to know why mistakes are made with your money on the line. When you are in a high-stress situation that is all about the money you put in, if you are unable to overcome the emotional attachments that come with it, then you are just gambling your money away. [Gambling and investing have many similarities](investing-vs-gambling) as they tie emotions and money together. Make sure that you are not a gambler in the markets, but instead an investor.\n'
        },
        {
            img: EmotionInvesting2,
            title: 'Create an Investing System',
            id: 'InvestingSystem',
            description: 'A dark brown wallet with nothing in it resting on it’s edge while slightly open on ' +
                'top of a lightly colored wooden table.',
            text: 'To avoid this emotional investing and remain a crypto investor, not a gambler, is to [create an investing system](start-investing) that fully removes any chance for emotion, showing you how to make smart crypto investments. Investing systems are how you automate your investments so that data or rules make decisions instead of you having to yourself with how you feel to unlock how to be a more efficient crypto investor. This data may be collected daily, weekly, or even monthly, depending on what type of investor you plan to be. It doesn\'t matter how often you gather your data, but what does matter is how accurate the data you collect is.\n' +
                '\n' +
                'Data for an investing system comes from many sources. Data can be found directly from markets in rules, price levels, or volume levels. Indicators like Volume Distribution, Relative Strength Index, and [Moving Average Convergence Divergence are widely used in Investing Systems](https://www.investopedia.com/terms/m/macd.asp). Macroeconomic and Microeconomic Indicators are generally easier to follow as they take a slower amount of time to follow. These economic indicators are also the choice of many large investment firms with a lot of money. It is up to the investor to build their system to suit the investing style that compliments them.\n' +
                '\n' +
                '[Market Insights from many angles](/insights) should be used to create your robust crypto investment strategy and are important to be. Using many different types of data might be more difficult than doing everything the same, but it comes with its payoff. The more different the data that you get to work with each other, the more holes that they can cover up in your crypto investing.\n'
        },
        {
            img: EmotionInvesting3,
            title: 'Stop Forcing Profit',
            id: 'StopForcing',
            description: 'A silver hammer floating right above a bolt inside a piece of wood ready to smack it ' +
                'next to a nail with an adjustable wrench.',
            text: 'Being able to catch every move successfully will never happen. [The markets are unpredictable](https://hbr.org/2002/03/predicting-the-unpredictable), and attempting to get every move will only ruin your accuracy. These market moves happen for different reasons and the only way to make money every time the market moves would be to broaden your data to account for all these reasons. When you try to spread yourself across too many different assets to catch all of their movements, most times you will just end up over-diversifying. You will only make a fraction of the profit if one of your assets decides to outperform when you should have much more of your money [in a smaller set of specific assets](/balancing).\n' +
                '\n' +
                'Crypto portfolio diversification does not have to be as hard as it may seem. Once you [find the efficient assets that you enjoy](/efficiency), decide how many you should invest in. Unless you have a large equity account there is no reason that you should be investing in as many assets as you can find. Take things slow and specialize in the assets you know best.\n'
        },
        {
            img: EmotionInvesting4,
            title: 'Study Market Psychology',
            id: 'MarketPsychology',
            description: 'A book with a dark brown cover that is folded open with a pair of open glasses sitting ' +
                'on top resting on a dark wooden table.',
            text: 'Trying too hard is a [big issue in market psychology](crypto-market-psychology) as well. You end up making bad decisions that cost you more than just staying out of the market. You are better off spending your money for fun than forcing money out of the market. There are many different ways to make money from the markets so there is no reason to push just one of them to its limits. It will not only increase your emotions but be work that you end up doing that is [a waste of your time](https://www.thebalancemoney.com/what-is-overtrading-5202056) for the most part.\n' +
                '\n' +
                'One of the biggest opportunities in investing and trading psychology is caused by [the Fear of missing out, known as FOMO](https://www.ledger.com/academy/glossary/what-is-fomo-in-crypto). FOMO will make you want to buy too early out of fear of missing a giant movement or profit. This fear controls them and influences their decisions as well as what happens to their money. Other cryptos want to make the most money possible and attempt to squeeze it out of the market when all that’s doing is squeezing your wallets.\n'
        },
        {
            img: EmotionInvesting5,
            title: 'Create a Less Stressful Environment',
            id: 'LessStress',
            description: 'A laptop with a bunch of stickers on it of different colors lined up with three ' +
                'notebooks, multiple pens, and other items.',
            text: 'The ins and outs of how to improve your crypto investment strategy and how to maximize your profits when investing in crypto come from the backbone of yourself. How do you plan to create a system that is emotionless if your life outside of investing is full of stress and emotion? To truly become efficient in investing, your life must [become less stressful](https://www.psychologytoday.com/us/blog/i-hear-you/201901/6-ways-real-investors-cope-serious-financial-anxiety). The occupation of investing will test your limits on how much you can reduce your emotion, but the best way to do this isn’t with your strategy itself.\n' +
                '\n' +
                'Creating a less stressful and emotional environment for yourself is very subjective since you may have a part of your life that is adding the most to your overall stress. Generally, there are [a few things that you can do to reduce this overall stress](crypto-mental-focus). Getting into a good routine that you stick to can tune your body into a system of its own. You won’t have to think about it as your routine will just come to you. Waking up at the same time every morning is important to this even if it is not an early time. Having water and food to fuel your body will also help.\n' +
                '\n' +
                'The biggest improvement that I believe can be made is being active. This does not have to be a chore either. [Getting active should be enjoyable for you](https://www.tonyrobbins.com/achieve-lasting-weight-loss/how-to-enjoy-working-out/) and something you look forward to. Lifting weights should be enjoyable as you hit new personal records or goals. There are methods you can put in place so that these tasks do not take a lot of effort from you and just become second nature and enjoyable experiences. Working out can reduce stress and get your blood flowing so that your entire body can function more efficiently. Taking care of yourself is the ultimate crypto risk management system.\n'
        },
        {
            img: EmotionInvesting6,
            title: 'Main Points',
            id: 'Main',
            description: 'A darkly colored leather wallet with credit cards inside on its side resting on a white ' +
                'surface with a white tape measure.',
            text: '#### How to avoid making emotional decisions when investing in crypto?\n' +
                'Recognize the issue. Knowing what is going on can help you see it in real-time or when you look back at your investing journal to see previous market decisions. After this put systems in place to avoid emotion and improve your efficiency and accuracy when investing in crypto.\n' +
                '\n' +
                '#### What is the most important thing to improve to avoid emotional investing?\n' +
                'The most important thing to improve is yourself. Improving your lifestyle can set you up for success in the market. After you improve yourself, you will be less prone to emotional mistakes even if you already have an investing system.\n' +
                '\n' +
                '#### Why should I study Market Psychology?\n' +
                'Market psychology helps you see the mistakes that other investors make. Doing this will help you avoid them yourself as well as take advantage and helpfully profit from these opportunities.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}