import ShortLongMain from '../../images/articleimages/ShortLongMain.webp'
import ShortLong1 from '../../images/articleimages/ShortLong1.webp'
import ShortLong2 from '../../images/articleimages/ShortLong2.webp'
import ShortLong3 from '../../images/articleimages/ShortLong3.webp'
import ShortLong4 from '../../images/articleimages/ShortLong4.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function ShortTermVsLongTermCryptoInvesting() {
    const Article = [
        {
            img: ShortLongMain,
            title: '',
            id: 'Intro',
            description: 'A shiny ethereum crypto gold coin sitting up on its edge with other coins laying ' +
                'beneath it with the market chart in behind them.',
            text: 'Crypto investors come in all shapes and sizes. Some interact with the market making many trades an hour and others might only touch it monthly. Your investing style will determine what type of crypto investor you will be. Crypto markets are full of unpredictability and volatility, we investors have to find a way to tame the beast.\n' +
                '\n' +
                'Here are the 3 topics for you to determine how to choose a crypto investing style:\n' +
                '\n' +
                '1. [Basic Crypto Investing](#BasicInvesting)\n' +
                '2. [Long-Term Crypto Investing](#LongTerm)\n' +
                '3. [Short-Term Crypto Investing](#ShortTerm)\n'
        },
        {
            img: ShortLong1,
            title: 'Basic Investing',
            id: 'BasicInvesting',
            description: 'A handheld tablet screen that is displaying a multi colored data dashboard with a ' +
                'line graph and a pie chart on a wooden table.',
            text: 'When developing a crypto investing strategy we have to think about the entire cryptocurrency market as a whole. We need to think about the money coming in and out, as well as who makes money and who loses money. When we study the details of the market we notice that those who are putting money in without a plan are the ones losing all their money and fueling the profit of those with a plan. Those without a plan are investing based on how they feel and letting their emotions decide what happens to their money. When the cryptocurrency market goes up they don’t want to miss out and end up buying at the top. When the market goes down they don\'t want to lose more money and sell at the bottom. This concept of cryptocurrency market psychology is important to set as your foundation for investing so that you can avoid the [mistakes so many others make](biggest-crypto-mistakes).\n' +
                '\n' +
                'Now that you know the basics mistakes that you aren’t going to make you can start building your investing strategy. The first thing you are going to need to find out is what assets you are going to buy. Determining how to choose the right cryptocurrencies to invest in is as simple as aiming for low downside risk and high upside potential. This makes the asset you are looking for efficient. [Efficient assets](/efficiency) are not hard to come by, however, it may be difficult to find out if you are calculating on your own.\n' +
                '\n' +
                'Once you have your efficient assets, you need to start structuring your [investing system](start-investing). Data is the foundation that investment decisions should be made. Without data, we are only guessing. Trends in Data are events that we can identify as the root of a reaction in the cryptocurrency market. Whether this is up or down, both types of trends are important to us. We have to identify trends for when to buy and down trends for when to sell. Finding these trends with data has infinite ways of being discovered, all of which have to be found using backtesting, also known as the use of past data for testing.\n' +
                '\n' +
                'To accurately find trends the data that we can use comes in many forms. This data can be indicators like [Relative Strength Index](https://www.fidelity.com/learning-center/trading-investing/technical-analysis/technical-indicator-guide/RSI), MACD, and Moving Averages or as simple as economic data. All of them can work if you are willing to look for trends. Once you find a trend that you feel is stable and profitable then it’s time to put this trend into our system and start using it to make profits. There is one last thing though. To stay safe from getting your crypto stolen from someone else, you must know how to [store cryptocurrency while investing](efficiently-store-and-invest-crypto).\n' +
                '\n' +
                'Once you buy your crypto, you should transfer it to a cryptocurrency wallet that is not [connected to any exchanges](https://www.sofi.com/learn/content/how-crypto-exchanges-work/). These cryptocurrency exchanges are businesses and have data leaks or even bankruptcies that you do not want to be involved in if your crypto is still connected to them. It may cost you a little more to transfer in and out of your money, but in the long run, it will be worth it when you can reduce the risks and opportunities of investing in cryptocurrency.\n'
        },
        {
            img: ShortLong2,
            title: 'Long-Term Crypto Investing',
            id: 'LongTerm',
            description: 'A single stack of silver coins that is sitting on top of more unorganized ' +
                'coins that are on a table with a clock behind them.',
            text: 'Long-Term crypto investing is [all about patience](https://www.thestreet.com/thestreet-fisher-investments-investor-opportunity/patience-the-most-underused-investing-skill). You will see people panicking and worrying about what the charts are doing on a daily but to maintain your profits, you must stay focused on your end goal in the long run. You can learn how to manage risk when investing in cryptocurrency by sticking to your [data and not your emotions](avoid-emotional-investing).\n' +
                '\n' +
                'Long-term crypto investments can take days, months, and even years depending on how well your signal is going. The best part about long-term crypto investing is that you do not have to worry like everyone else who is investing short-term because your trade uses much more time to develop. The [cryptocurrency volatility](what-impacts-crypto-volatility) for you will be far less as any drop in price will likely recover since the market is all over the place even while going up.\n' +
                '\n' +
                'Long-term crypto investing strategies depend on the data far more than short-term crypto investing does. In long-term crypto investing you need to be extremely sure that the market is going up when you decide because if you are wrong, the long timeframe will prevent you from being able to catch this fall and sell before already taking some losses. Data for this [contains large averages](https://www.investopedia.com/terms/m/movingaverage.asp) or slow-moving data that are not affected by day-to-day investing and are more so affected by long-term market trends.\n' +
                '\n' +
                'The popularity of long-term crypto investing comes from the fact that you do not have to touch your money for possibly months. This can be a great way to save up for your future or retirement and earn much more than you would if you were to keep your money in a savings account. This style is also popular with the low stress it causes since you do not need to be constantly maintaining your portfolio. The dream of passive crypto income can be reached to some extent with this type of [long-term investing](https://seekingalpha.com/article/4519253-long-term-investment-definition-types-and-strategies).\n'
        },
        {
            img: ShortLong3,
            title: 'Short-Term Crypto Investing',
            id: 'ShortTerm',
            description: 'A black calculator with red buttons that is resting on top of a lined notebook that has a ' +
                'pen on top and a chart behind them.',
            text: 'Short-term crypto investing takes place much more frequently. In short-term crypto investing, your positions normally do not last more than a month and should be monitored daily for changes in the market. The cryptocurrency risk of this style of investing is far higher than long-term crypto investing, however, this comes with more profit as well. Since short-term crypto investing strategies [hold more risk](https://www.sec.gov/about/reports-publications/investor-publications/day-trading-your-dollars-at-risk) it may take some time to become efficient. You might not even be profitable at first. Consistency is key and eventually, you will learn how to manage risk when investing in cryptocurrency with short-term investing.\n' +
                '\n' +
                'Short-term crypto investing can use the same data as long-term crypto investing but with shortened lengths for more depth to what we are looking at. Depending on how short of a timeframe you are looking for, your data might even be updated with a [new point every single minute](https://www.daytradetheworld.com/trading-blog/1-minute-scalping-simple-smart-profit-driven-strategies/). Accurate trends if your data are harder to find in short-term crypto investing, forcing you to dig deeper, and find more unique trends. This uniqueness is perfect for short-term crypto investing because they are more accurate than usual and can help make up for the extra risk you will be taking on.\n' +
                '\n' +
                'The most important part of short-term crypto investing is the ability to catch extremely solid market moves. [The daily timeframe](https://www.tradingwithrayner.com/trading-daily-timeframe/) is an extremely popular timeframe for short-term crypto investors as well, giving you a perfect opportunity to ride along trends that other investors see at the same time as you. As the masses begin to buy into the trend, your cryptos will continue to gain profit.\n' +
                '\n' +
                'Short-term investing holds more risk as we know, and an issue that comes with this is the added emotion that comes with it. When we are in higher-risk situations, we tend to stress more and this can affect our mental health. Taking proper precautions is important to [reduce the strain on your body](crypto-mental-focus) caused by investing. Avoiding emotional investing can help but you may still need to do extra to maintain a healthy lifestyle. You should never value money over your health, if you take care of your body it will take care of you. Time is the ultimate currency and you do not want to be cutting your time any shorter.\n'
        },
        {
            img: ShortLong4,
            title: 'Ending Thoughts',
            id: 'Thoughts',
            description: 'Golden Bitcoin, Ethereum, and Ripple golden crypto coins that are resting on top of ' +
                'each other all on top of a paper bill.',
            text: '### Which is better long-term or short-term investing for crypto?\n' +
                'Both long-term crypto investing and short-term crypto investing are great options to increase the amount of money you make. Ultimately it is up to you and which suits you best. Short-term is riskiest, yet holds more profit. Long-term is more data-oriented and holds less risk.\n' +
                '\n' +
                '### How short is short-term crypto investing?\n' +
                'Short-term crypto investing can be as short as you want it. The lowest I would recommend is the 5-minute timeframe to make decisions, however, some people prefer down to 1-minute timeframes and below. It is a personal preference and up to which you like best.\n' +
                '\n' +
                '### What is the biggest concern with either form of investing?\n' +
                'The biggest concern is how you deal with your emotions when investing. A lot is going on and you have money on the line. Even with this, you cannot let your emotions take over. Stick to your plan, and understand that you are going to lose money sometimes and make money for others.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}