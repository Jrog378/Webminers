import StartInvestingMain from '../../images/articleimages/StartInvestingMain.webp'
import StartInvesting1 from '../../images/articleimages/StartInvesting1.webp'
import StartInvesting2 from '../../images/articleimages/StartInvesting2.webp'
import StartInvesting3 from '../../images/articleimages/StartInvesting3.webp'
import StartInvesting4 from '../../images/articleimages/StartInvesting4.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function StartInvesting() {
    const Article = [
        {
            img: StartInvestingMain,
            title: '',
            id: 'Intro',
            description: 'A golden coin with the bitcoin logo on the front sitting on a silver disk with metal ' +
                'bars below it and a silver city behind it.',
            text: 'Investing is essentially the willing exchange of goods for something you feel is more ' +
                'valuable. This can be time for money, money for possessions, and in our case, money for ' +
                'assets. Crypto investing is a great field full of technology, innovation, and profit. To ' +
                'be a part of this movement pays much more than money as well. Cryptocurrency is the start ' +
                'of something new. A new way of currency that is pushing for attention along with the ' +
                'movement of decentralization. The world of crypto might seem complex from the outside, ' +
                'however, it can be quite simple when you choose the right way to learn about it.\n' +
                '\n' +
                'This is my simple step-by-step guide to help you get on the right path to making profits ' +
                'with crypto investing:\n' +
                '\n' +
                '1. [Choosing a Cryptocurrency](#ChoosingCryptocurrency)\n' +
                '2. [Different Investing Styles](#InvestingStyles)\n' +
                '3. [Up Your Investing Game](#Improve)\n'
        },
        {
            img: StartInvesting1,
            title: 'Choosing a Cryptocurrency',
            id: 'ChoosingCryptocurrency',
            description: 'A bunch of coins sitting around a notes that says looking for freedom with the logos ' +
                'of cryptocurrencies on them like btc and eth.',
            text: 'Crypto is considered a digital asset. Unlike something like gold, you do not get to feel or touch what you buy. This might be sad for those who are sentimental, but keep in mind assets like gold don’t move around as much, meaning that you do not make as much profit. [Cryptocurrencies are also volatile assets](what-impacts-crypto-volatility) because of this. They move up and down in heavy movements providing great chances for profits and losses together. Our goal as crypto investors is to reduce those losses and take as many of those profits as possible.\n' +
                '\n' +
                'There are two ways to reduce this risk. The first, and the easiest method, is to pick the right assets. There are so many assets out there so how will you know which are best? The easiest way to do it is to [just pick popular crypto](popular-cryptocurrency) like Bitcoin or Ethereum as they have steady price history and a lot of investors. They are popular for a reason and are great options. Now if you want more than the basics then we must get into the numbers. To measure a cryptos efficiency we have to calculate it using the price history.\n' +
                '\n' +
                'We do this with financial ratios like the Sharpe, Sortino, and Omega Ratios. You don’t need to know how they are done for now, but what you need to know is [Omega is the most important](https://en.wikipedia.org/wiki/Omega_ratio). The higher the Omega Ratio the more efficient the asset will be. That means the better your profit potential is. When looking at asset tables you can compare and contrast which assets have the best numbers to build your optimal portfolio. [Webminers Asset Efficiency](/efficiency) is a great place to look for these exact numbers in different time frames.\n' +
                '\n' +
                'Once you pick your assets or even a single asset. It is time to start testing them. Even though you have assets that are very good with numbers does not mean that you will want to invest in them. You will have to start to build your investing strategy with data like the RSI, Moving Averages, or [other indicators to find trends](https://www.investopedia.com/top-7-technical-analysis-tools-4773275). Once you find a trend that you enjoy and repeat well over and over from your backtesting, you are ready to start buying cryptocurrency.\n'
        },
        {
            img: StartInvesting2,
            title: 'Different Investing Styles',
            id: 'InvestingStyles',
            description: 'Two golden coins that are stacked with the one on top on its edge showing a bitcoin ' +
                'logo next to a cryptocurrency market chart.',
            text: 'Successful investing comes in many forms that almost anyone can build out of thin air. There is no one single way to reach profit. Even though there are tons of different ways to invest, we still seem to see similarities between them. The two most notable categories that are noticed tend to use price data indicators or price movements.\n' +
                '\n' +
                'Using price movements is very similar to crypto trading in a long-term way. Investing with price movements [uses patterns from candle charts](https://www.thestreet.com/dictionary/c/candlestick-chart) that can be identified as possible profit trends. A common thing that happens in the crypto markets is head and shoulders. When this happens, the investors believe that the market will go in a certain direction, which allows them to invest their money and make a profit from it. Keep in mind that data can still be used in this form of investing but the main method of finding profitable movements is with the price charts.\n' +
                '\n' +
                'Data investing takes advantage of the fact that markets have points in time when they will change direction. Being able to identify these movements lets you hitch a ride for however long you believe the market will continue in that direction to make your profit. Being able to use data to your advantage removes a lot of the [emotion out of your investing](https://www.forbes.com/sites/forbesfinancecouncil/2022/11/02/emotional-investing-is-a-risky-strategy-but-leveraging-emotional-intelligence-can-transform-your-investment-choices/?sh=6f48423816e0) as well. You will not have to be so worried about your money as long as your data is accurate and you stick to what your system is telling you to do. While everyone else panics you will be happily waiting for your system to let you know what to do next.\n' +
                '\n' +
                'These two methods are only meant to be guidelines as there are a ton of ways to make money with cryptocurrency. Using [macroeconomic data can also help you](https://www.blackrock.com/us/individual/insights/macro-economic-insights) in both methods as this data largely represents how the public and large banks feel about money. When the economy is good, people want to spend money in all sorts of ways, including assets, which brings up their price and provides you with profit. However, when the economy is down, the public and banks are cutting spending, they want to preserve their money which causes fewer people to invest in markets. It is important to keep an eye on where the economy is going and what it is currently doing. If you are interested in checking out our research on the economy, [Webminers Market Insights](/insights) has multiple timeframes with our custom indicators to say where we believe we are right now.\n'
        },
        {
            img: StartInvesting3,
            title: 'Up Your Investing Game',
            id: 'Improve',
            description: 'A pair of black glasses on the pages of an open book with a black cover that are all on ' +
                'a wooden table that is a little blurry.',
            text: 'Once you build something amazing like your investing system, you must maintain it. This also means swapping out the bad parts that stop working and improving on them with new shiny ways to make a profit. If you notice that some of the data you use is not as accurate as you would like, stop using it and find something else. There is plenty of data out there and certain indicators and trends stop working for no reason at all. Continue to research [new ways to make money from crypto investing](https://worldcoin.org/articles/how-to-research-crypto) and you will never have to worry about your data getting old or outdated because you will always be finding new and better ways to upgrade your system.\n' +
                '\n' +
                'Improving your investing system also means improving yourself. Keep yourself in a good headspace and avoid emotional interactions that could carry into your investing. You should also be improving your general investing and crypto knowledge with [up-to-date articles and reports](/articles). Exercise and eating well can help you keep a clear mind and reduce stress. Taking care of yourself should be a top priority. Be careful with crypto scams and those trying to take your money. Storing your cryptocurrency in a safe wallet and putting those [keys somewhere you will remember](https://chainstack.com/how-to-store-private-keys-securely/) which isn’t on any of your devices is a must to keep your money secure. It is also good practice to keep your coins off of cryptocurrency exchanges.\n' +
                '\n' +
                'Avoid risks by knowing what the [news is capable of doing to the crypto markets](news-in-the-crypto-market). Crashes and black swan events are going to happen eventually, so it is your job to try and reduce that risk as much as you can. [Everyone loses money while investing](https://www.thebalancemoney.com/how-to-deal-with-losses-in-the-stock-market-3141314) and you should keep your head up even in loss so that you can take it as a lesson and learn from it, rather than feeling angry and losing even more money. Don’t be afraid to take breaks from investing after big losses or even after big wins. They can help you keep your cool rather than risk investing with biases that could negatively impact your decisions.\n' +
                '\n' +
                'When the market goes up, most people are going to want to just keep buying when it is the best time to sell. The same goes the other way around where when the markets are falling, people are most likely to sell even more when they should be buying. This is the [market psychology of crypto](crypto-market-psychology) and can be extremely useful if used properly to set yourself apart from the crowd and take advantage of their mistakes. These psychological traits can also be observed when looking at crypto bull markets and crypto bear markets. You might even be able to identify market tops and bottoms from these key points being made if the conditions are right.\n'
        },
        {
            img: StartInvesting4,
            title: 'Main Takeaways',
            id: 'Summary',
            description: 'A market chat that has been printed out onto a piece of paper with the line being in ' +
                'the color red with blue lines around it.',
            text: '#### How to start investing in crypto?\n' +
                'After finding efficient assets with low downside potential, you can begin to set up your investing system. This system will use data and indicators to help you bring home consistent profits.\n' +
                '\n' +
                '#### What are efficient assets?\n' +
                'Efficient assets are asset choices that have a high chance for profit and a low chance for loss. These can be calculated using financial ratios like the Omega Ratio.\n' +
                '\n' +
                '#### How to make money investing?\n' +
                'Most investors receive inconsistent gains in their portfolios. Reaching consistency and prestige takes time, focus, and effort. Those lazy investors are only good news for you because this creates opportunities.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}