import CryptoMoneyMain from '../../images/articleimages/CryptoMoneyMain.webp'
import CryptoMoney1 from '../../images/articleimages/CryptoMoney1.webp'
import CryptoMoney2 from '../../images/articleimages/CryptoMoney2.webp'
import CryptoMoney3 from '../../images/articleimages/CryptoMoney3.webp'
import CryptoMoney4 from '../../images/articleimages/CryptoMoney4.webp'
import CryptoMoney5 from '../../images/articleimages/CryptoMoney5.webp'
import CryptoMoney6 from '../../images/articleimages/CryptoMoney6.webp'
import CryptoMoney7 from '../../images/articleimages/CryptoMoney7.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function MakeMoneyWithCryptocurrency() {
    const Article = [
        {
            img: CryptoMoneyMain,
            title: '',
            id: 'Intro',
            description: 'A stack of one hundred dollar bills rolled up with a rubber band around it and the ' +
                'crypto market on a computer screen behind it.',
            text: 'Crypto has been known to create massive returns that seem super easy, yet if you have ever ' +
                'attempted to make these great returns you know it is much harder than it sounds. Making money ' +
                'with cryptocurrency does not have to be that hard, however. There are tons of different ways ' +
                'to make money in crypto and not a single one is technically wrong, unless unethical. Though ' +
                'there are almost unlimited ways to make money with crypto, we can shorten the list.\n' +
                '\n' +
                'Here are 6 ways to make money with cryptocurrency that are not based on luck and can be achieved:\n' +
                '\n' +
                '1. [Investing in Popular Cryptos](#PopularCryptos)\n' +
                '2. [Investing in Altcoins](#Altcoins)\n' +
                '3. [Crypto Trading or Crypto Scalping](#TradingOrScalping)\n' +
                '4. [Crypto Arbitrage](#Arbitrage)\n' +
                '5. [Crypto Narratives](#Narratives)\n' +
                '6. [Unethical Ways (Not Recommended!)](#Unethical)\n'
        },
        {
            img: CryptoMoney1,
            title: 'Investing in Popular Cryptos',
            id: 'PopularCryptos',
            description: 'Three coins with of them being golden with the Bitcoin and Ethereum logos on them and ' +
                'a silver coin with the Litecoin logo.',
            text: 'Investing in popular cryptos sounds like [you are just following the crowd](crypto-crowd-is-wrong) but it’s not. While everyone else is going to be losing money, you will be making money as long as you take the right steps needed to save investing in crypto\'s risky and volatile climate. The easiest way to identify popular crypto is just by going through what you know and have heard about the most.\n' +
                '\n' +
                'Bitcoin and Ethereum have been chucked around by far the most out of any crypto, and it shows by providing the most market cap. [Market capitalization is a way to identify how many investors are interacting in a cryptocurrency](https://www.investopedia.com/terms/m/marketcapitalization.asp) and can be helped to identify safe yet volatile markets. The market cap should be looked at before investing in a cryptocurrency so that you know what type of coin you are looking at. Once you have identified some popular cryptos that spark your attention, you can go about sorting out the bad.\n' +
                '\n' +
                'When you invest in cryptocurrency you want the most profit with the least amount of losses or risk. We can think about this as instead of picking the coin where we made $1000, but lost $500, we go for the crypto where we made $750 and lost $250. Both of these options have the same amount of profit, however, the one with a better profit-to-loss ratio is the crypto we want to pick. This is called efficient investing and there are [ratios to be able to identify which assets are the most efficient](/efficiency) without even putting any of your money in, just by using their price history.\n' +
                '\n' +
                'Once you have the [efficient cryptos that you want to use](best-efficient-crypto), it is time to build your investing system. This system uses data and indicators to help you find good times to buy and sell. These indicators [can be the Relative Strength Index](https://www.fidelity.com/learning-center/trading-investing/technical-analysis/technical-indicator-guide/rsi), Moving Averages, Custom Indicators, or More. It all depends on your investing system and goals. With these indicators, you will find trends that happen over and over showing you good times to buy and sell. After developing your indicators and finding trends you are ready to start investing and making money from crypto investing with popular cryptos. Take a look at Webminers Market Insights if you are interested in a custom indicator.\n'
        },
        {
            img: CryptoMoney2,
            title: 'Investing in Altcoins',
            id: 'Altcoins',
            description: 'An Apple Macbook laptop showing the crypto market on it with a candle chart going up ' +
                'and down with green and red on a table.',
            text: '[Altcoins, also known as alternative coins](what-is-an-altcoin), are the complete opposite of the coins you will be looking at for popular cryptos. These coins are known as coins other than Bitcoin or Ethereum and have fewer investors than those two popular cryptos. Fewer investors do mean less volatility from time to time, but that does not mean that they are not able to make you money. Being able to make money in Altcoins can be more rewarding than popular cryptos, even if you will be making fewer actual investments.\n' +
                '\n' +
                'When investing in altcoins it is important to know what coin you are dealing with. [Checking market cap](https://coinmarketcap.com/) will help make sure that you are not just picking some random crypto with 5 investors pushing prices up and down, but a real cryptocurrency with profit potential. These cryptos still have a lot of investors, just not as many as our main coins.\n' +
                '\n' +
                'Finding our altcoins should be in a similar fashion where we check them for accuracy while comparing multiple coins together, picking based on efficiency first and market cap second. We want altcoins with good profit-to-loss ratios, while still having enough investors to make a profit. After choosing our coins [we will build investing systems](start-investing) just like before and make sure to use solid indicators and backtest for trends.\n' +
                '\n' +
                'The difference with altcoins comes with how we invest in them. Since they are not our main coins they will not always be as active. We will have times when [nothing is happening at all or times without volatility](what-impacts-crypto-volatility). You must understand that altcoins are not supposed to always bring you money. The money is made when this altcoin finally decides it is time to move. When this happens, it will far outperform our main coins like Bitcoin and Ethereum. This time is also known as the alt season. The moment you have been waiting for finally comes and you can take your profits from these giant movements that are happening with your alts.\n'
        },
        {
            img: CryptoMoney3,
            title: 'Crypto Trading or Crypto Scalping',
            id: 'TradingOrScalping',
            description: 'A black tablet with the crypto market on it next to a black phone and a black pen ' +
                'on a white piece of paper all on a table.',
            text: 'Crypto trading and crypto scalping are very broad terms for a more specific form of crypto day trading. [Crypto scalping is a form of day trading](https://cointelegraph.com/news/what-is-scalping-in-crypto-and-how-does-scalp-trading-work) where one tries to scrape the market of the most amount of profit in the least amount of time. The best way to do this is by using smaller timeframes and finding trades that may only take a few minutes but end up returning a profit over and over until you are satisfied.\n' +
                '\n' +
                'Scalping is a very stressful form of trading as you are making split-second decisions. A way you can [reduce this stress](https://bitvo.com/articles/how-to-manage-your-crypto-trading-stress/) is by adding data to your scalping. Scalpers use indicators like the RSI or certain types of averages to get the edge on the market. If you can win more of your trades, you will not have to stress as much about them.\n' +
                '\n' +
                'Regular crypto trading does not have to be as intense as scalping. Crypto trading uses small timeframes, similar to scalping, but is not always focused on the most amount of profit in the least amount of time. Regular crypto traders are not always trying to get in and out so they can turn off their computers, rather they are looking for good opportunities on short timeframes. These could be just [a matter of minutes and in other cases may span multiple days](https://www.thestreet.com/investing/short-term-investing-vs-long-term-investing). Data is also used in regular crypto trading and each crypto trader has their preferences in indicators and trade durations. It is important to form your style.\n' +
                '\n' +
                'When crypto trading or crypto scalping it is important to not get ahead of yourself. [Controlling your emotions](top-investor) is key to continue making profits and not losing everything you have. Studying the psychology of the market can help you better understand how others are thinking and ways to take advantage of that. You should also place importance on tracking your trades so that you can better understand your weaknesses and strengths.\n'
        },
        {
            img: CryptoMoney4,
            title: 'Crypto Arbitrage',
            id: 'Arbitrage',
            description: 'A newspaper on a white table next to a cup of coffee and a white lined paper notebook ' +
                'with rulers and pens resting on top of it.',
            text: 'Crypto arbitrage is a form of event that is [opposite of what you would expect to happen](https://www.coindesk.com/learn/crypto-arbitrage-trading-how-to-make-low-risk-gains/). This would be when the data is telling you one thing yet the market will do the opposite. This may be because of outside circumstances influencing the market or just because prices don\'t want to follow the trend it usually does. Either way, those who use crypto arbitrage to their advantage can profit from this type of movement.\n' +
                '\n' +
                'One of the most common situations that happens is someone with amazing connections hears about the news before everyone else and is prepared for what is about to happen. Influential events occur and insiders get to know before the public. These insiders may know that what is going to happen will affect the markets allowing themselves or someone they know to set themselves up before everyone else. [Once the news hits the markets panic](news-in-the-crypto-market) or depending on the event go up, but the ones who trade crypto arbitrage events are masters at this type of trade.\n' +
                '\n' +
                'The other form of arbitrage is just purely from the data. Something happens that is not easily predicted by the majority of people in the markets and everyone ends up losing money. Other than those who know what is going on. When the arbitrage investor realizes that something is about to happen like a crash or giant spike in price, they can tell from their data what people in the market can’t. Events like [giant market crashes](crypto-market-crashes) and stablecoins [losing their value from the dollar](are-stablecoins-stable) cause people to panic making the event even worse, and the ones who saw it happening even richer.\n' +
                '\n' +
                'Crypto arbitrage is something that every investor and trader should look into because it is important to know when the market might not do what you are expecting so that you can keep yourself and your money safe from these types of unpredictable events. Even if you do not plan on making money from unique events that are the opposite of what is expected does not mean that you can’t reduce your losses from them.\n'
        },
        {
            img: CryptoMoney5,
            title: 'Crypto Narratives',
            id: 'Narratives',
            description: 'A pocket watch sitting on a wooden table with the gears exposed in the middle and a ' +
                'white background to the black hour numbers.',
            text: 'A crypto narrative is the background, technology, or community that surrounds a cryptocurrency and can determine just how well it does in the markets. When looking at narrative there are a few things you can look at that are important to each stage of a cryptocurrency. When cryptos are just being released, there may be a giant jump in price that you can be a part of. During a cryptocurrencies life, you may notice a change in narrative that is more attractive to investors which will then raise the price of the crypto, giving you the chance to be early on this movement. There is a lot of wiggle room for profit when using crypto narratives to make money with cryptocurrency.\n' +
                '\n' +
                'If you are in a [certain field of specialty](https://crypto.com/price/categories), look into cryptos that are in that field. You have the upper hand over someone who has no idea what the technology is. People who are into video games will have more experience with gaming cryptos and people in the software business will have more experience with decentralized applications than others. Being able to use your prior knowledge in your investment gives you a leg up on your opponents and can help you find profit in areas that normal people would never be able to find.\n' +
                '\n' +
                'Another area of the crypto narrative is looking into a coin\'s community and history. Finding out who crypto represents can impact how that crypto will eventually perform. Having a good community before releasing the crypto to the public means that there are a lot of people waiting to invest in this crypto. Once it is released, the price is going to go up a lot because it is such a small cryptocurrency. An older cryptocurrency that has already been released still has hope for profit as well. [Studying their background](https://corporatefinanceinstitute.com/resources/capital-markets/historical-returns/) can show you major drawbacks and where they are improving. The better they become, the more popular they will get among investors and you can take advantage of that because you have already been studying this crypto. Gaining experience is crucial in this area so that you can identify what parts of their history matter to future prices.\n' +
                '\n' +
                'No matter how you study a crypto’s narrative, you may find yourself getting attached to them and joining the community yourself. This is a great way to find like-minded people and be a part of a movement you support in the crypto world.\n'
        },
        {
            img: CryptoMoney6,
            title: 'Unethical Ways (Not Recommended!)',
            id: 'Unethical',
            description: 'A one hundred dollar bill with the face side pointing forward on fire and almost ' +
                'halfway burnt up in front of a light surface.',
            text: 'Unethical ways of making money with cryptocurrency are not recommended in any way, but should still be studied and recognized to avoid falling prey to them yourself and losing money. Unethical methods of profiting in crypto include deception, lying, and even stealing. Ethical practices bring you good results and unethical practices will eventually catch up to those performing them.\n' +
                '\n' +
                'An unethical way of making money in crypto is a pump-and-dump scam. These are important scams to watch out for that happen when a group of people or an individual with a lot of money [manipulates the price of a smaller cryptocurrency](https://u.today/guides/crypto-trading/what-is-crypto-pump-and-dump-simply-explained-for-beginners) to seem like it is skyrocketing in price providing a ton of profit. The price continues to rise and catch other investors in the trap hoping to get some of this profit.\n' +
                '\n' +
                'The original support begins to remove their money from the crypto when they have had enough or realize it is time to sell and once they are fully out of the market, the price begins to crash to the ground. The support is lost and investors lose a ton of money, sometimes left with nothing. This type of scam needs to be looked out for and can be avoided by inspecting the price history of crypto before investing and making sure that you know why the price is moving the way it is.\n' +
                '\n' +
                'Finally straight up stealing. People hack into investors\' wallets and take millions of dollars in crypto. There are fake websites that can get your authorization into your wallets to completely drain them. Leaving your wallet\'s secret phrases on a device puts it in a vulnerable place where a hacker who came into your device would then have access to your account. Keep yourself safe by watching out for scams and putting phases in a location that is not accessible from the digital world by anyone including yourself.\n'
        },
        {
            img: CryptoMoney7,
            title: 'Final Thoughts',
            id: 'Final',
            description: 'A pile of paper clips on a table with a bunch of papers covering it next to pens a ' +
                'cup of coffee, a calculator, and a mouse.',
            text: 'These are some of the ways to make money with cryptocurrency but not all of them. Crypto is a broad field with lots of opportunities. Focusing on one of the methods above can help you develop proficiency in that area, but all of the above should be reviewed so that you can understand how others make money and learn from it. Mixing mastery of one type of money maker and knowledge from another will help you expand your crypto profits even more. Make sure to be ethical and avoid unethical practices when dealing with the markets and other people in the crypto field. Good things come around and likewise with the bad.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}