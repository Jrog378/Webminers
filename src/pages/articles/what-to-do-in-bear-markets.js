import BearMarketMain from '../../images/articleimages/BearMarketMain.webp'
import BearMarket1 from '../../images/articleimages/BearMarket1.webp'
import BearMarket2 from '../../images/articleimages/BearMarket2.webp'
import BearMarket3 from '../../images/articleimages/BearMarket3.webp'
import BearMarket4 from '../../images/articleimages/BearMarket4.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function WhatToDoInBearMarkets() {
    const Article = [
        {
            img: BearMarketMain,
            title: '',
            id: 'Intro',
            description: 'Stacks of coins increasing as they go to the right with little plants on the top of ' +
                'them all next to a jar filled with coins.',
            text: 'Everyone loves bull markets. Prices are going up, things are going great and profits are coming. Once this changes and the market decides to flip. The bear market begins. Prices start to fall and we enter a downtrend. Bear Markets may seem like the enemy, however, they are not always a bad thing as long as you can find out how you are going to make the most of what’s going on rather than wasting your time sitting around waiting for the next bull market.\n' +
                '\n' +
                'Here are the 3 things you can do when the bull market leaves you and you are met with a bear market.\n' +
                '\n' +
                '1. [Continue Investing](#Investing)\n' +
                '2. [Spending Time on Businesses](#BusinessTime)\n' +
                '3. [Spend Your Money](#SpendMoney)\n'
        },
        {
            img: BearMarket1,
            title: 'Continue Investing',
            id: 'Investing',
            description: 'A Macbook laptop showing a cryptocurrency trading screen next time a pile of crypto coins ' +
                'and an iphone showing another screen.',
            text: 'Investing during a [bull market is great](crypto-bull-market). Money comes much easier and you do not have to look too much into your signals. However, during a crypto bear market, it is not as easy going. Markets do not move as much and there are not many opportunities to make big profits like before. You have to work harder for less and most investors would rather save their time and money until the next bull market. There are still opportunities to make money though.\n' +
                '\n' +
                'If you want to prevent yourself from losing all your money in a bear run, the first thing you should take a look at is where you are investing your assets. [Using efficient assets](/efficiency) will prevent you from getting wrapped up in altcoins that will just crash to the ground. When you look for how to build a [strong crypto portfolio](/balancing) and use efficient assets, the chances of them dropping to 0 are much less, which is something you need in a time like this. Efficient assets help you obtain efficient investing.\n' +
                '\n' +
                'Data does not act the same in bear markets. [Your investing system](start-investing) might not be as accurate and this is something that you need to remember when starting after a bull market ends. To “Bear Proof” your investing system we have to change things up to adapt to what is going on. You must make sure that the data you are using to test is from other bear markets. Once you have bear market data, you can then [incorporate trends you find](https://www.gsam.com/content/gsam/global/en/market-insights/gsam-insights/gsam-perspectives/2016/big-data/gsam-roundtable.html) into your strategy. It is important to take into account this bearish market data because it will not act the same way that normal market data does. With this, you should be able to create a robust system that can help guide you through bear markets with minimal losses.\n' +
                '\n' +
                'The psychology of investing in a bear market is different from that of a bull market. Understanding those who you are trying to gain money from in the markets can give you the edge in figuring out ways to make more profit. When you [study market psychology](crypto-market-psychology), the area of bull markets is the most common for mistakes as all of these negative emotions tend to bring investors down. [Less people will be involved with the markets](https://www.nerdwallet.com/article/investing/how-to-invest-during-a-bear-market) as well and because of this, you will be able to understand that it will be easier to move the markets from a small mishap. If something negative comes out in the news, you will know that it makes more of an impact than if it were a bull market.\n'
        },
        {
            img: BearMarket2,
            title: 'Spending Time on Businesses',
            id: 'BusinessTime',
            description: 'A cup of coffee with a small green plant next to black glasses and an open Apple ' +
                'Macbook laptop all on a dark wooden table.',
            text: 'Since the [market sentiment is low](https://www.investopedia.com/terms/m/marketsentiment.asp), to ensure you know how to protect your portfolio in a bear market, you may just want to avoid the markets almost completely. Running a business along with Investing is a great way for the two to intertwine and make a lot of money by finding [multiple ways to generate income](make-money-with-cryptocurrency). By investing you can fuel that for further growth within your business. On the flip side if investing is bringing you a lot of losses to stay in the game you can allow your business to make up for those losses. This way of balancing out the two is how you can avoid your income falling when the market cycle is not in your favor.\n' +
                '\n' +
                'Finding how to survive a crypto bear market can be keeping up with businesses, as it is a perfect resource to use during markets with [less volatility than usual](what-impacts-crypto-volatility) because it can be a better way to spend your time. A yearly schedule dividing where you put the majority of your focus could be investing when the markets are going up with business on the side. Then when the bear market hits, you can begin to shift and put more time into [your business](https://blog.hubspot.com/sales/small-business-ideas) and less time investing. By doing this, you can continue making money and reduce the risk involved with continuing investing.\n' +
                '\n' +
                'When the bear market hits, this is the perfect time to work on risk management in your business and investing system. You can start doing the behind-the-scenes work that you might have been pushing off. Spending this time updating your website and email templates, hiring new staff, looking into ways to make business processes more efficient, and even finding new ways to [provide value to customers](https://www.forbes.com/sites/theyec/2022/04/27/11-ways-to-ensure-youre-always-bringing-value-to-your-customers/) will help you make your customers happier and provide a more steady income. Free time is greatly filled with creative work because you are not in any rush for a final product. Taking care of these issues may be annoying when doing it, but will pay off in the long run.\n'
        },
        {
            img: BearMarket3,
            title: 'Spend Your Money',
            id: 'SpendMoney',
            description: 'A large green field of grass with a single tree on one of the hills with birds in ' +
                'the sky underneath lots of dark clouds.',
            text: 'If all you do is make money and never spend it then you are not putting it to good use. Money is meant to be used and not just piled up doing nothing, losing its value to inflation. One of the easiest ways to find out how to stay positive during a bear market is by having fun and not worrying about the markets. They can do what they want while you spend some of your hard-earned money you made from the bull run before. Having some fun and spending the money you’ve made is the best way to avoid [emotional investing](avoid-emotional-investing) as well. You can just not worry because you won’t be involved. The only issue you will have to solve is how to identify the start and end of a bear market.\n' +
                '\n' +
                'When outside of the markets, you may want to spend your money to improve your investing system for when the bull markets start back up and this is a perfect opportunity to try out some crypto investing services. When we look for how to manage risk in a bear market, it may take some time to find the perfect solution. What better time to do it than a bear market when you aren’t involved? Don’t be afraid to [spend a little money](https://www.bankrate.com/investing/best-investment-apps/#best-investment-apps) to get your investing system to the point where you want it to be. It will be with it in the end.\n' +
                '\n' +
                'Since you have the time and money to spend on enjoyment or hobbies, one thing you can do to fill it is put yourself in a different environment and [go somewhere new](https://www.nationalgeographic.com/travel/article/why-travel-should-be-considered-an-essential-human-activity). Traveling is a great way to gain new experiences and learn new things. Getting outdoors for new hobbies can be perfect for clearing your mind and healing your mental state from the stress caused by investing in crypto. The outdoors also offers many activities like rock climbing or biking that you can spend hours training for a day.\n' +
                '\n' +
                'The other way to [spend money](https://www.cnbc.com/2021/06/28/here-are-5-ways-to-spend-money-that-can-actually-make-you-happier.html) is in a way that is right at home. Enjoying a new car is an amazing opportunity to spend your time in bear markets. Going on long drives or repairing things that go wrong. Another way to spend your time and money is renovations. Installing new things to your house or living space and improving your living standard. Make sure that you are still finding ways to learn how to stay informed about the crypto market so that you know what is going on and once you come back it won’t be as if you missed a ton of events.\n'
        },
        {
            img: BearMarket4,
            title: 'Final Words',
            id: 'FinalWords',
            description: 'A large green field of grass with a single tree on one of the hills with birds in ' +
                'the sky underneath lots of dark clouds.',
            text: '### What is the difference between a bear market and a bull market?\n' +
                'A bull market is a period where things are going great and the market continues to be in an uptrend where profit can be made. There are a lot of people involved in bear markets.\n' +
                '\n' +
                '### What is the easiest way to protect your money during a bear market?\n' +
                'The best way to keep you and your money safe is to not invest at all. If you do not touch the markets, then there is no chance of you losing any money to it. There are many other ways to make money including working on a business.\n' +
                '\n' +
                '### What should you do if your investing system is not working as well?\n' +
                'Since bear markets act differently than bull markets, you have to understand that the data you are trying to use will act differently as well. Your options are to use different data that works better or adapt how you are using your current data if you are experiencing a loss of accuracy or efficiency.\n'
        },
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}