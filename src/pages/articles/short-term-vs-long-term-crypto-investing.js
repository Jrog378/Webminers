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
            text: 'Investors come in all shapes and sizes to the point where you will have some who touch ' +
                'the market hourly and others who rarely touch it monthly. Your investing style will determine ' +
                'what type of crypto investor you will be. In a market of unpredictability and volatility, we ' +
                'investors have to find a way to tame the beast. Good data and investing systems can help guide ' +
                'you no matter what you pick, but it is important to know your style to truly excel in crypto ' +
                'investing.\n' +
                '\n' +
                'We will be going over these important topics:\n' +
                '\n' +
                '1. [Using Data to Invest](#DataInvesting)\n' +
                '2. [Long-Term Investing](#LongTerm)\n' +
                '3. [Short-Term Investing](#ShortTerm)\n'
        },
        {
            img: ShortLong1,
            title: 'Using Data to Invest',
            id: 'DataInvesting',
            description: 'A handheld tablet screen that is displaying a multi colored data dashboard with a ' +
                'line graph and a pie chart on a wooden table.',
            text: 'Data is the foundation that investment decisions should be made. Without data, we are only ' +
                'guessing. [Trends in Data](https://www.investopedia.com/terms/t/trendtrading.asp) are events ' +
                'that we can identify as the root of a reaction in the market. Whether this is up or down, ' +
                'both types of trends are important to us. We have to identify trends for when to buy and ' +
                'down trends for when to sell. Finding these trends with data has infinite ways of being ' +
                'discovered, all of which have to be found using backtesting, also known as the use of past ' +
                'data for testing.\n' +
                '\n' +
                'To accurately find trends the data that we can use comes in many forms. This data can be ' +
                'indicators like RSI, MACD, and Moving Averages or as simple as economic data. All of them ' +
                'can work if you are willing to look for trends. Once you find a trend that you feel is stable ' +
                'and profitable then it’s time to [Build an Investing System](/articles/start-investing) ' +
                'using this trend and finally get into the action.\n' +
                '\n' +
                'If this sounds far too good to be true then you are slightly right because you can’t just ' +
                'dive into the markets just like that with some trend you found not knowing about the markets ' +
                'themselves. Before you hop into the markets you should do a little studying on [Market ' +
                'Psychology](https://financialhorse.com/psychology-of-a-market-cycle-where-are-we-in-the-' +
                'cycle/), [Black Swan Events](https://www.forbes.com/sites/billybambrough/2022/08/28/crypto-' +
                'braced-for-a-27-billion-september-black-swan-after-1-trillion-bitcoin-ethereum-bnb-xrp-' +
                'solana-cardano-and-dogecoin-price-crash/?sh=5ac2f84c51bf), and other similar topics that ' +
                'can help prepare you for irregular circumstances that may cause beginner investors to ' +
                '[Make Mistakes](/articles/biggest-crypto-mistakes). Once you have your overview of the ' +
                'market you can now safely dive into investing. This is where you will pick which style ' +
                'of crypto investing works best for you, Short-Term or Long-Term.\n'
        },
        {
            img: ShortLong2,
            title: 'Long-Term Investing',
            id: 'LongTerm',
            description: 'A single stack of silver coins that is sitting on top of more unorganized ' +
                'coins that are on a table with a clock behind them.',
            text: 'Long-Term crypto investing is all about patience. You will see people panicking and worrying ' +
                'about what the charts are doing on a daily but to maintain your profits, you must stay focused ' +
                'on your end goal in the long run. Long-term crypto [investments](https://www.nerdwallet.com/' +
                'article/investing/what-are-long-term-investments) can take days, months, and even years depending ' +
                'on how well your signal is going. The best part about Long-Term crypto investing is that you do ' +
                'not have to worry like everyone else who is investing short-term because since your trade ' +
                'requires so much time to develop, any fall will likely recover and then some by the time you ' +
                'are ready to sell.\n' +
                '\n' +
                'Long-Term crypto investing depends on the data far more than short-term crypto investing does. ' +
                'In long-term crypto investing you need to be extremely sure that the market is going up when ' +
                'you decide because if you are wrong, the long timeframe will prevent you from being able to ' +
                'catch this fall and sell before already taking some losses. Data for this contains large ' +
                'averages or slow-moving data that are not affected by day-to-day investing and are more so ' +
                'affected by long-term market trends.\n' +
                '\n' +
                'The popularity of long-term crypto investing comes from the fact that you do not have to ' +
                'touch your money for possibly months. This can be a great way to save up for your future or ' +
                'retirement and earn much more than you would if you were to keep your money in a savings ' +
                'account, making it a [Timeless Money Maker](/articles/timeless-investing). This style is also ' +
                'popular with the low stress it causes since you do not need to be constantly maintaining your ' +
                'portfolio. The dream of passive crypto income can be reached to some extent with this type of ' +
                'long-term investing.\n'
        },
        {
            img: ShortLong3,
            title: 'Short-Term Investing',
            id: 'ShortTerm',
            description: 'A black calculator with red buttons that is resting on top of a lined notebook that has a ' +
                'pen on top and a chart behind them.',
            text: 'Short-term crypto investing takes place much more frequently. In short-term crypto investing, ' +
                'your positions normally do not last more than a month and should be monitored daily for changes ' +
                'in the market. This style of crypto investing is far more profitable than long-term crypto ' +
                'investing, however, this comes with higher risk as well. Short-term crypto investing is great ' +
                'for those who can spend up to one hour a day working on their investments since a good system ' +
                'should not need any more than that once it is built.\n' +
                '\n' +
                'Short-term crypto investing can use the exact [same data](https://www.flowbank.com/en/research/' +
                '3-best-technical-indicators-for-a-short-term-trading-strategy) as long-term crypto investing ' +
                'but with shortened averages. This data can come in forms as short as 1-hour increments, ' +
                'depending on how short of a timeframe you are looking for. The data in short-term crypto ' +
                'investing is harder to find trends in as well so it will take more digging, this means that ' +
                'when you find a trend in data that it will be much more unique to you when compared to an ' +
                'easily found trend. Unique trends are perfect for short-term crypto investing because they ' +
                'do not suffer from the sabotage that may come from someone using an extremely popular trend ' +
                'that many other crypto investors use as well.\n' +
                '\n' +
                'The most important part of short-term crypto investing is the ability to catch extremely solid ' +
                'market moves. The daily timeframe is an extremely popular timeframe for short-term crypto ' +
                'investors as well, giving you a perfect opportunity to ride along trends that other investors ' +
                'see at the same time as you. As the masses begin to buy into the trend, your cryptos will ' +
                'continue to gain profit. Short-term crypto investing will trigger your emotions much more ' +
                'than long-term crypto investing so you must take care of your [Mental Health](crypto-mental-focus) ' +
                'and learn how to [Avoid Emotional Investing](avoid-emotional-investing).\n'
        },
        {
            img: ShortLong4,
            title: 'Ending Thoughts',
            id: 'Thoughts',
            description: 'Golden Bitcoin, Ethereum, and Ripple golden crypto coins that are resting on top of ' +
                'each other all on top of a paper bill.',
            text: 'Investing is a great way to make a profit from money rather than just letting it sit in a ' +
                'bank and lose value from interest. With many different types of investing styles, you can ' +
                'choose what best suits your preferences and lifestyle. No matter which you pick it is ' +
                'important to remember the risk that investing money into anything holds and that you are not ' +
                'guaranteed profit, it must be earned. Short-term and Long-term crypto investing both require ' +
                'good data and investing systems to help guide you through your signals. Most importantly, ' +
                'have fun when investing in crypto.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}