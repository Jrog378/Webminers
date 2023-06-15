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
            text: 'Since the beginning of the blockchain in 2008, there have been times in crypto\'s history when we have experienced extreme crashes in the market. Most crashes in any asset occur because of panic. When the price falls to a certain point, people lose hope and panic sell causing the price to drop in a downward spiral of emotion. When a crash does happen, there is always a winner and a loss where someone sells out of panic and someone else buys at a price they are happy at. The good news is every single crash in crypto’s history has fully recovered and continued to make an all-time high.\n' +
                '\n' +
                'Here are the topics we are going to be going over in our investigations of how to avoid losing money in a future crypto market crash:\n' +
                '\n' +
                '1. [What is Arbitrage?](#Arbitrage)\n' +
                '2. [Regulation Crashes](#Regulation)\n' +
                '3. [Black Swan Events](#OtherCrashes)\n'
        },
        {
            img: Arbitrage1,
            title: 'What is Arbitrage?',
            id: 'Arbitrage',
            description: 'A balance containing many shiny crypto coins with Ethereum, Litecoin, and Ripple on the ' +
                'left with Bitcoin by itself on the right.',
            text: 'Before we get into the crashes themselves, we have to look under the surface to find out what a crypto market crash is. Most people have no idea when a crash is going to happen and get caught by surprise when it does, even to [efficient cryptos](/efficiency). Even though most investors feel this way there are still some who specialize in making money off of times in the market when the least expected to happen. Events that occur to be the opposite of what is expected are called crypto arbitrage.\n' +
                '\n' +
                'Crypto arbitrage happens more often than you think and there is still money to be made. If you have ever been in a position in the market and [suddenly direction changes](https://corporatefinanceinstitute.com/resources/capital-markets/stock-market-crash/), causing you to lose money, that is crypto arbitrage. Someone also made money while you lost money. Being able to identify these rare cases of crypto arbitrage is riskier since you are hoping for the opposite of what is supposed to be happening to occur, but some investors can even solely rely on this type of investing for their profit.\n' +
                '\n' +
                'As Investors we look for trends in data, and Arbitrage Investors do the complete opposite. These investors wait until something begins to form that is opposite of what most people will think is going to happen based on the data. When this happens, the regular investors lose and the arbitrage investors win a ton. Arbitrage can happen in almost any asset, [even stablecoins](are-stablecoins-stable). When USDC depegged from the dollar and dropped in price, an arbitrage investor was ready to buy at the bottom and make tons of money because no one was expecting that event to happen. Arbitrage investors can take advantage of others\' fear and make money off of their mistakes.\n' +
                '\n' +
                'Even though market crashes seem to be impossible to predict, you should still study the [market psychology](crypto-market-psychology) of these events to protect yourself and take advantage of these arbitrage events for yourself. Being able to see the bottom of a crash while others are still panicking allows you to buy crypto at a discount because you know that it will go back up. You may also be able to determine when the price is increasing without reason. Rather than jumping in because of [FOMO](https://www.fool.com/investing/stock-market/market-sectors/financials/cryptocurrency-stocks/crypto-fomo/), you can stay patient and recognize the event as arbitrage and plan from there.\n'
        },
        {
            img: Arbitrage2,
            title: 'Regulation Crashes',
            id: 'Regulation',
            description: 'Twenty-five different shiny crypto coins that are both gold and silver on a table ' +
                'with a wooden gavel on the table with them.',
            text: 'Crypto is considered a decentralized financial asset backed by blockchain technology and because of this, this investment is very difficult to put regulations onto. Governments have been trying to crack down more on these cryptocurrencies to avoid illegal activities or large [changes in volatility](https://www.coinbase.com/learn/crypto-basics/what-is-volatility) to make the markets more secure. This type of regulation scares people because they are unsure of how it will affect the price. The fact that regulation can impact price reinforces the importance of doing your research before investing in crypto.\n' +
                '\n' +
                'Regulatory scares can happen in the form of chatter on social media or actual rules set in place. In both June and September of 2021, China placed [two separate bans](https://www.weforum.org/agenda/2022/01/what-s-behind-china-s-cryptocurrency-ban/) that dropped that market double-digit percent in the following 24 hours on both occasions. [Decentralization is a powerful movement](https://www.peoplehum.com/glossary/decentralisation) that strives to be protected. When entire governments ban their technology, there is a serious issue going on that can scare investors out of keeping their money in these assets.\n' +
                '\n' +
                'The bans from China show that information about cryptocurrency regulation shows what we can learn from past crypto market crashes, as anything about regulation should be taken seriously. Regulation Crashes show how quickly rules upon crypto can change the sentiment of the market. Sentiment calculators that measure the positivity of the markets should be incorporated in all [investing systems](start-investing) to make sure then we can look into bad sentiment to know if something like regulation is floating around so we can make sure we know how to invest in crypto safely in the current market conditions.\n'
        },
        {
            img: Arbitrage3,
            title: 'Black Swan Events',
            id: 'OtherCrashes',
            description: 'Fourteen different crypto shiny coins in the colors of gold, silver, and red next to ' +
                'an Apple iPhone that is showing the market.',
            text: 'Regulation crashes are part of a much bigger category by the name of Black Swan Events. These events are situations that are extremely unpredictable and cause catastrophic fear in the markets that can devastate crypto investors and traders. If there is an already existing [bubble in the market](what-is-a-crypto-bubble), even the smallest bit of a black swan event can cause that bubble to burst, shooting prices downwards. Markets falling rapidly without any short notice can happen so fast that if you don’t check in time, the damage could already be done by the time you are back. Determining what to do if you lose money in a crypto market crash can be a tough decision, especially if the market is still falling. The best thing for you to do is to determine for yourself how to stay calm during a crypto market crash and then reevaluate [without using your emotions](biggest-crypto-mistakes) what you do next.\n' +
                '\n' +
                'The [crypto Covid crash](https://www.weforum.org/agenda/2020/09/an-economist-explains-what-covid-19-has-done-to-the-global-economy/) began before the actual danger zone when word about covid was circling around and on February 13th of 2020, Btc reached 10500. This would be the last day of the candle during this upward trend that began to go south. People started to worry about covid and take their money out of the market. As the market slowly trickled down, the news got worse along with the panic. 29 days after the high of 10500, Bitcoin marked its fall of 71 percent.\n' +
                '\n' +
                'The FTX crash happened due to one of the largest and most well-trusted crypto exchanges going [bankrupt due to fraudulent activity](https://www.investopedia.com/what-went-wrong-with-ftx-6828447). This crash was hard to believe that a crypto exchange with that much good history could be propped up by so much bad activity. The worry began to set in harder than usual as markets were in a bear market and prices started to fall a little. After the slow decline, even bigger news about the incident came out and everyone panicked, selling into another crash. Those who sold, in the beginning, might not have lost much money, however, those who were not fortunate enough to sell would have lost 30 percent in 24 hours on Bitcoin and in Solana would have lost almost 70 percent.\n' +
                '\n' +
                'These crashes were very unfortunate and when we look back on them to try and learn something, you may notice that the bottom of the crashes were the [best times to buy for profit](https://due.com/why-you-should-buy-more-stock-when-the-economy-is-collapsing/). Determining where to buy crypto looking back is easy because you can just pinpoint the bottom on a chart. When you are in the actual crash itself, this bottom is much harder to identify as it feels like the price will only continue to go lower. Having an investing system can help you determine a bottom. This system can use data to help you find good times to buy and sell even during crypto crashes if it is robust enough. A lot of losses from crypto crashes are [amplified by emotional investing](avoid-emotional-investing) rather than investing with data. Some loss may not be able to be prevented but at least you may be able to limit that loss as much as possible.\n'
        },
        {
            img: Arbitrage4,
            title: 'Final Remarks',
            id: 'Final',
            description: 'A lot of Bitcoin shiny crypto coins that are gold with the Bitcoin symbol on them in ' +
                'the color black all on top of each other.',
            text: '### What to do if you lose money in a crypto market crash?\n' +
                'During a crypto market crash, it is important to stay focused and not let your emotions take over. Losses are bad, but you want to stay tuned in so that you do not make them worse. Trusting an investing system can help get you out of any sticky situations, the best it can during times of market crashes.\n' +
                '\n' +
                '### How hard is it to predict market crashes?\n' +
                'It is almost impossible to predict some market crashes as it could be an event that happens and then immediately goes into the news. This news can then cause a giant crash to happen without any explanation from data or insiders. Unless you witness an extreme event happen, there is little you can do to be ahead of the curve with market crashes.\n' +
                '\n' +
                '### What can you learn from previous market crashes?\n' +
                'You can learn the market psychology of how people handle these situations. Most investors will panic and let their emotions get the best of them. This is where you can come in and profit from their mistakes, making money from their losses.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}