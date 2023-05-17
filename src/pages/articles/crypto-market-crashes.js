import ArbitrageMain from '../../images/articleimages/ArbitrageMain.webp'
import Arbitrage1 from '../../images/articleimages/Arbitrage1.webp'
import Arbitrage2 from '../../images/articleimages/Arbitrage2.webp'
import Arbitrage3 from '../../images/articleimages/Arbitrage3.webp'
import Arbitrage4 from '../../images/articleimages/Arbitrage4.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function CryptoMarketCrashes() {
    const Article = [
        {
            img: ArbitrageMain,
            title: '',
            id: 'Intro',
            description: 'A shiny metal Ethereum crypto coin with a leather wallet next to it containing a ' +
                'credit card all on to pof a stack of dollars.',
            text: 'Cryptocurrencies have had their ups and downs, some a little more than others as you know, ' +
                'but have consistently proved to be a viable asset for investors and those interested in ' +
                'technology. Most crashes in any asset occur because of panic. When a crash does happen, ' +
                'there is always a winner and a loss where someone sells out of panic and someone else buys ' +
                'at a price they are happy at. Sometimes the market continues down and others who buy end ' +
                'up on top. Every single crash in history has fully recovered and continued to make an ' +
                'all-time high.\n' +
                '\n' +
                'Here are the crypto crashes that made a giant dent in the market, yet few still ended up on top:\n' +
                '\n' +
                '1. [What is Arbitrage?](#Arbitrage)\n' +
                '2. [Regulation Crashes](#Regulation)\n' +
                '3. [FTX and Covid Crashes](#OtherCrashes)\n'
        },
        {
            img: Arbitrage1,
            title: 'What is Arbitrage?',
            id: 'Arbitrage',
            description: 'A balance containing many shiny crypto coins with Ethereum, Litecoin, and Ripple on the ' +
                'left with Bitcoin by itself on the right.',
            text: 'After a large fall, you will see many investors say that they had no idea what was coming, ' +
                'however other investors who specialize in arbitrage were waiting for a moment like this. How ' +
                'is it possible to identify such an event? Those who sold in the beginning before the big drop ' +
                'was right to sell, however, they sold out of fear not out of data. Crypto Arbitrage is also ' +
                'known as when the market moves in a way that the data is not able to explain.\n' +
                '\n' +
                'As Investors we look for trends in data, and Arbitrage Investors do the complete opposite. ' +
                'These investors wait until something begins to form that is opposite of what most people will ' +
                'think is going to happen based on the data. When this happens, the regular investors lose and ' +
                'the arbitrage investors win a ton.\n' +
                '\n' +
                'Arbitrage can happen in almost any asset. Many rich people helped the government buy up cheap ' +
                'houses after the housing market crashed. These houses were insanely cheap and would soon go ' +
                'way up in value. Stablecoins in cryptocurrency can also become not so stable, causing more ' +
                'arbitrage.\n'
        },
        {
            img: Arbitrage2,
            title: 'Regulation Crashes',
            id: 'Regulation',
            description: 'Twenty-five different shiny crypto coins that are both gold and silver on a table ' +
                'with a wooden gavel on the table with them.',
            text: 'Crypto is considered a decentralized financial asset and because of this, regulations are very ' +
                'difficult to put onto the asset. If you are interested in learning more about [What is ' +
                'Decentralization](/articles/decentralization-for-crypto), check out my article. Governments ' +
                'have been trying to crack down more on these cryptocurrencies to avoid illegal activities or ' +
                'large changes in volatility to make the markets more secure. This type of regulation scares ' +
                'people because they are unsure of how it will affect the price.\n' +
                '\n' +
                'Regulatory scares can happen in the form of chatter on social media or actual rules set in ' +
                'place. China has been one of the major players in the most recent times with actually placing ' +
                'bans though. In both June and September of 2021, China placed two separate bans that dropped ' +
                'that market double-digit percent in the following 24 hours on both occasions. These situations ' +
                'are extreme but similar cases happen all the time where there are scares in the public from ' +
                'this decentralized currency becoming controlled by the government. If you are interested in ' +
                'the China crypto ban, the World Economic Forum writes about it in their article [What\'s ' +
                'behind China’s cryptocurrency ban?](https://www.weforum.org/agenda/2022/01/what-s-behind-' +
                'china-s-cryptocurrency-ban/)\n' +
                '\n' +
                'These events from China show that information about cryptocurrency regulation should be ' +
                'taken with fear as if another country would follow in their footsteps we should be able to ' +
                'expect similar if not more falls. Regulation Crashes are something we can learn from because ' +
                'this shows that sentiment matters. Sentiment calculators that measure the positivity of the ' +
                'markets should be incorporated in all investing systems to make sure then we can look into ' +
                'bad sentiment to know if something like regulation is floating around. If you want to learn ' +
                'more about AI with Sentiment, read my article on [Financial AI](/articles/financial-ai-and-' +
                'data-science)\n'
        },
        {
            img: Arbitrage3,
            title: 'FTX and Covid Crashes',
            id: 'OtherCrashes',
            description: 'Fourteen different crypto shiny coins in the colors of gold, silver, and red next to ' +
                'an Apple iPhone that is showing the market.',
            text: 'Regulation crashes can be brutal but are almost nothing compared to Black Swan events. ' +
                'Investopedia wrote an article called [Black Swan in the Stock Market: What Is It, With Examples ' +
                'and History](https://www.investopedia.com/terms/b/blackswan.asp) if you are interested in ' +
                'reading more about them. Regulations happen more often, however, events that are impossible ' +
                'to predict and cause catastrophic fear in the markets can devastate investing systems and ' +
                'traders that are following their rules. If you want to know what I mean by an investing system, ' +
                'make sure you read my article called [How to Start Investing in Crypto](/articles/start-' +
                'investing) The markets will fall rapidly without any short notice and if you don’t check-in ' +
                'time, the crash could already be done by the time you are back.\n' +
                '\n' +
                'The Crypto Covid Crash began before the actual danger zone when word about covid was ' +
                'circling around and on February 13th of 2020, Btc reached 10500. This would be the last ' +
                'day of the candle during this upward trend that began to go south. People started to worry ' +
                'about covid and take their money out of the market. As the market slowly trickled down, the ' +
                'news got worse along with the panic. 29 days after the high of 10500, bitcoin marked its ' +
                'fall of 71 percent. To read more about the effect of covid on the market, check out an ' +
                'article on Plos about [The impact of COVID-19 on cryptocurrency markets: A network analysis ' +
                'based on mutual information](https://journals.plos.org/plosone/article?id=10.1371/journal.' +
                'pone.0259869)\n' +
                '\n' +
                'The FTX Crashed due to one of the largest and most well-trusted crypto exchanges going ' +
                'bankrupt due to fraudulent activity. This crash was hard to believe that a crypto exchange ' +
                'with that much good history could be propped up by so much bad activity. The worry began to ' +
                'set in and markets started to fall a little. After the slow decline, even bigger news about ' +
                'the incident came out and everyone panicked, beginning to sell into another crash. Those who ' +
                'sold, in the beginning, might not have lost much money. Those who were not fortunate enough ' +
                'to sell would have lost 30 percent in 24 hours on Bitcoin and in Solana would have lost almost ' +
                '70 percent.\n'
        },
        {
            img: Arbitrage4,
            title: 'Final Remarks',
            id: 'Final',
            description: 'A lot of Bitcoin shiny crypto coins that are gold with the Bitcoin symbol on them in ' +
                'the color black all on top of each other.',
            text: 'Market crashes are very important to study in crypto because we did not have a crash in 2008. ' +
                'Crypto of today has not been popular enough until recent years to be able to fully understand ' +
                'how it will act from sentiment and Black Swan events. Even though we are limited in what we can ' +
                'use when looking back on useful market history, it does not mean we have nothing. Through ' +
                'Regulatory Crashes and Black Swan Events like the Covid Crash and FTX crash, we can study ' +
                'the proper materials to better understand how the market acts under this type of pressure ' +
                'to be able to learn from it and adapt our systems to avoid more losses than we would otherwise ' +
                'still be accepting. If you are interested in using AI to help you backtest, my article on ' +
                '[AI Quants](/articles/ai-quant-investing) goes over how to introduce AI to your investing ' +
                'system.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}