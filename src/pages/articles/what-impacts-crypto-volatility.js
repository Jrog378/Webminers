import VolatileCryptoMain from '../../images/articleimages/VolatileCryptoMain.webp'
import VolatileCrypto1 from '../../images/articleimages/VolatileCrypto1.webp'
import VolatileCrypto2 from '../../images/articleimages/VolatileCrypto2.webp'
import VolatileCrypto3 from '../../images/articleimages/VolatileCrypto3.webp'
import VolatileCrypto4 from '../../images/articleimages/VolatileCrypto4.webp'
import React from "react";
import ArticleFormat from "@/components/format";
import {useRouter} from "next/router";

export default function NewsInTheCryptoMarket() {
    const Article = [
        {
            img: VolatileCryptoMain,
            title: '',
            id: 'Intro',
            description: 'A golden Ethereum crypto coin sitting on its side on top of a stack of other golden ' +
                'coins in front of a gauge pointing green.',
            text: 'Everyone wants profitable investing, yet not everyone can have it. Crypto markets are very volatile and being able to control them can bring in lots of profit. Volatility is a great way to move the market. It means that there is a large amount of people who think the price should be higher or lower causing it to rapidly move. High volatility that causes extreme movements in the crypto market allows investors to have the opportunity to make a lot of money. Before you can make money from volatility you have to understand where it is coming from.\n' +
                '\n' +
                'Here are the 3 secrets to market volatility for crypto investors to profit from:\n' +
                '\n' +
                '1. [Short-term vs Long-term Volatility](#Volatility)\n' +
                '2. [Emotional Investing](#EmotionalInvesting)\n' +
                '3. [Sentiment](#Sentiment)\n'
        },
        {
            img: VolatileCrypto1,
            title: 'Short-term vs Long-term Volatility',
            id: 'Volatility',
            description: 'A high detail drawing in black, white and a little bit of brown of an angry raging ' +
                'bull running down a brick road with shadows.',
            text: 'Short-term and long-term volatility are two completely different things that should be approached very differently. Short-term volatility is caused by small outbursts in the market in any direction. Long-term volatility is simply just how the market flows within its current cycle. As there is much more to both of these, if you want to be able to profit in crypto markets you have to know how you can make money from how the market moves and how to [find the efficient assets](/efficiency) to take advantage of it.\n' +
                '\n' +
                'When we think of long-term volatility, this is most commonly referred to as a bull market. [Bull markets are great times](crypto-bull-market) to make money as the market is going up. While bear markets still hold profit, they are mostly matched with low volatility, making them less of a concern for our extremely profitable crypto investing. The market will go up and down over time. [While investing in bull runs](https://cointelegraph.com/learn/bull-vs-bear-crypto-market-what-is-the-difference-and-how-to-handle-both), you may think you just buy low and sell high and you would be right but it is not that easy.\n' +
                '\n' +
                'Bull markets gain a lot of attention because someone who looks at a chart going straight up and not slowing down is going to want some of that action. The fact that bull market profits only lead to more bull market profits is completely true based on the chain reaction effect it has. Bull markets don’t just cause heavy profits, the unprofitable days can be dangerously negative. [Volatility goes both ways](https://www.forbes.com/advisor/investing/bear-market-vs-bull-market/) and since a lot of people are involved in the market the price will act that way.\n' +
                '\n' +
                'The [short-term volatility of a bull market](short-term-vs-long-term-crypto-investing) can be single-day drops or multiple days just to recover. In both cases, it is important to understand that not every bull market will just be straight up and profit for everyone. Some days will be amazing and others might be terrible. If you have a good investing system you will be able to fight through the losses and come out with a lot of profit. Once the bull market ends there are some things to look out for. A [crypto bubble could be about to pop](what-is-a-crypto-bubble), sending the market down violently into a bear market, where the once great profitable volatility turns into [rapid volatile crashes. Knowing when to sell at the top of a bull market is essential for developing your strategy of how to invest in crypto while avoiding being the victim of downward volatility.\n'
        },
        {
            img: VolatileCrypto2,
            title: 'Emotional Investing',
            id: 'EmotionalInvesting',
            description: 'Three cards being a king, queen, and ace next to multicolored poker chips in a pile ' +
                'on top of a darkly colored wooden table.',
            text: 'Whenever money is involved, investors\' emotions go crazy. This [leads to emotional investing](avoid-emotional-investing) from being greedy for more profit and fearful of loss. Emotional Investing can even increase the volatility of crypto markets because as the market crashes, everyone wants to sell to avoid their losses. When the market goes up everyone wants a piece of the profit. These investors are just tossing away their money to the markets because they do not have a plan or an investing system.\n' +
                '\n' +
                'Volatile markets should be a [smart investor\'s best friend](https://farmtogether.com/learn/blog/why-volatility-can-be-bad-for-long-term-returns) because this means there is a lot of profit potential to be made and people are just tossing their money to you from being wrapped up in their mind games. If you are going to learn how to become a successful cryptocurrency investor, then it all starts with [an investing system](start-investing). Building your investing system takes you looking around doing your [cryptocurrency research](next-big-crypto), and finding trends that happen multiple times, allowing you to profit from them. Once you have your trends, you can then put them into your system by structuring the rules for the most accuracy.\n' +
                '\n' +
                'To increase your profit even more, you are going to want to try and find assets that have a high potential for profit and a low potential for loss. These are called [efficient assets](best-efficient-crypto) and go perfectly with cryptocurrency risk management strategies. The easiest way to figure out how to reduce risk in crypto investing is to start with the right assets. If you start strong then there should be nothing in your way from making a profit. If you want to skip this step and just learn how to make money in crypto investing, then you will have gaps in your skillset. It is worth it to study assets and investing, not just one or the other.\n' +
                '\n' +
                '[Altcoins can be more volatile](https://www.investopedia.com/terms/a/altcoin.asp) than main coins, but you might not want this type of volatility. Altcoins can produce hundreds of percent in profit, at the same time, they can completely fail, falling to zero. Since altcoins have this high volatility, cryptocurrency scams like [pump-and-dumps](https://www.fool.com/investing/stock-market/market-sectors/financials/cryptocurrency-stocks/how-to-spot-crypto-scam/) are more common. Large investors will purposefully increase the value of an altcoin to gain the attention of other investors just to sell everything for insane profit, dropping the price to near zero for everyone else to suffer. Those who gave the investor that much profit are the emotional investors. Those investors saw the price was going up and got excited and greedy, deciding to put their own money in and continue to raise the price, until it was time for the large investor to sell.\n'
        },
        {
            img: VolatileCrypto3,
            title: 'Sentiment',
            id: 'Sentiment',
            description: 'Three stacks of folded newspapers stacked on top of each other next to a coffee cup ' +
                'on top of a lightly colored wooden table.',
            text: '[Cryptocurrency news](https://bitcoinmagazine.com/markets/how-is-bitcoins-price-affected-by-news) is a strong force for knowledge and updates for investors. This is how investors and those involved with cryptocurrency stay informed. The whole purpose of the news is to catch your attention, and in doing so, if the issue is bad enough, this will panic readers. When large problems are resolved trust is rebuilt quickly and people begin to invest again. Professional writers try their best to come up with catchy headlines and interesting stories that compete against hundreds and thousands of other articles that are about the same thing. It’s their job to trigger your emotions.\n' +
                '\n' +
                'As investors, it’s our job not to let them influence our investing decisions. When new tech is released, and getting attention in the news, crypto will get volatile as people are happy with innovation. When an article comes out about the downsides of AI and gets a ton of attention, investors will be more cautious. The overall sentiment of the market can be greatly influenced by news happening outside of cryptocurrency. Using cryptocurrency news to understand what creates volatile movements in the market is very important to be able to profit and not lose money from crypto sentiment changes.\n' +
                '\n' +
                'Sentiment indexes should be checked out now and then to determine how the general market is feeling. Because many sentiment calculators are done with artificial intelligence using [natural language processing](https://www.ibm.com/topics/natural-language-processing), also known as NLP, or coded rules, there might not always be perfect accuracy. A sentiment index should not be a decision-maker in your investing system, but rather just there for support. You should always have other barriers in place to help protect yourself from large changes in sentiment.\n' +
                '\n' +
                'The reason for this is because of black swan events. [Black Swan events](https://seekingalpha.com/article/4489012-black-swan-event) are unique and impactful moments that can affect countries and even the world. Examples could be war, attacks, disease outbreaks, and much more. The whole point of a black swan is that you cannot identify it until the event has already passed. When one of these events occurs, the markets shake, possibly plummeting large percentages in a short amount of time. To prevent yourself from experiencing great loss from these events, maintain how often you check the news. If your investing system is robust enough, you may be able to get out of the markets before your portfolio takes too much damage.\n'
        },
        {
            img: VolatileCrypto4,
            title: 'Ending Words',
            id: 'EndingWords',
            description: 'A golden Bitcoin crypto coin sitting on its side surrounded by four other coins on a ' +
                'black table with ones and zeros behind it.',
            text: '### How to make money in volatile cryptocurrencies?\n' +
                'The first step to making money in volatile cryptocurrencies is identifying the right choices. By picking efficient cryptos you can set yourself up for success. Once you have your efficient cryptos, you can start building an investing system that finds profitable trends with those cryptos.\n' +
                '\n' +
                '### Is volatility dangerous?\n' +
                'Volatile assets are more dangerous than non-volatile assets. This has pros and cons as your profit potential is higher, along with your potential for loss. Investors love cryptocurrency volatility and if you wish to make the most of volatility, you are going to need to find ways to be in the market when there are profitable movements.\n' +
                '\n' +
                '### Why build an investing system for volatile crypto?\n' +
                'Investing systems help limit your risk even though you are investing in a volatile asset. This is done by preventing yourself from emotional investing and putting safeguards up for times of increased volatility, like a black swan event or large changes in crypto market sentiment.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}