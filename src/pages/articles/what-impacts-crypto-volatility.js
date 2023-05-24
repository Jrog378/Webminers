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
            text: 'Volatility is a great way to move the market. It means that there is a large amount of ' +
                'people who think the price should be higher or lower causing it to rapidly move. High ' +
                'volatility that causes extreme movements in the market allows investors to have the ' +
                'opportunity to make a lot of money. Before you can make money from volatility you have to ' +
                'understand where it is coming from.\n' +
                '\n' +
                'Here are some instances that cause volatility:\n' +
                '\n' +
                '1. [Crypto News](#CryptoNews)\n' +
                '2. [Emotional Investing](#EmotionalInvesting)\n' +
                '3. [Bull Markets](#BullMarkets)\n'
        },
        {
            img: VolatileCrypto1,
            title: 'Crypto News',
            id: 'CryptoNews',
            description: 'Three stacks of folded newspapers stacked on top of each other next to a coffee cup ' +
                'on top of a lightly colored wooden table.',
            text: '[Crypto news](news-in-the-crypto-market) is how investors and those involved with ' +
                'cryptocurrency stay informed. Using the news to understand what creates volatile movements in ' +
                'the market is very important. When new tech is released, and getting attention in the news, ' +
                'crypto will get volatile. There are also important figures who can generate attention toward ' +
                'crypto. If someone in [AI positively makes the news](https://www.msn.com/en-us/money/other/' +
                'chatgpt-was-a-black-swan-event/ar-AA1bBYgW), cryptos that relate to AI will have an increased ' +
                'amount of people in those markets creating volatility.\n' +
                '\n' +
                'The news creates an emotional environment that tends to panic readers, that is how they catch ' +
                'attention. Professional writers try their best to come up with catchy headlines and interesting ' +
                'stories that compete against hundreds and thousands of other articles that are about the same ' +
                'thing. It’s their job to trigger your emotions. As investors, it’s our job not to let them ' +
                'influence our investing decisions. Creating an [investing system](start-investing) can help ' +
                'reduce this emotional impact that comes from the news.\n' +
                '\n' +
                'The news helps keep us informed about global situations and issues. When large problems are ' +
                'resolved trust is rebuilt quickly and people begin to invest again. Understanding that solutions ' +
                'to major problems in the news, even though they are news about a negative topic, can still ' +
                'result in positive volatility. When a cryptocurrency begins to gain a lot of traction and ' +
                'increases in price, this will also cause a lot of news attention. Positive events are even more ' +
                'impactful in times of despair. When people are at their lowest including economic ability, a ' +
                '[little bit of good news](https://www.cnn.com/2023/05/14/business/fed-rate-cut-markets/index.' +
                'html) feels like a shockwave both for the individual and the markets.\n'
        },
        {
            img: VolatileCrypto2,
            title: 'Emotional Investing',
            id: 'EmotionalInvesting',
            description: 'Three cards being a king, queen, and ace next to multicolored poker chips in a pile ' +
                'on top of a darkly colored wooden table.',
            text: '[Emotional Investing causes the most extreme volatility](top-investor) because of how angry ' +
                'some people can get. The market can go down and investors think that they should have sold and ' +
                'then sell at the bottom. The market goes back up and they say that they missed a buying ' +
                'opportunity and they have to buy now for any profit, just to be crushed as the market falls ' +
                'again. The market is supposed to go the opposite direction that most people are emotionally ' +
                'motivated into thinking it will go. This happens because smart investors with investing systems ' +
                'and evidence for decisions will take the money from those who just invest based on their ' +
                'emotions.\n' +
                '\n' +
                'Volatile markets are a smart [investor\'s best friend](https://www.investopedia.com/articles/' +
                'financial-theory/08/volatility.asp) because so many people are wrapped up in their mind games. ' +
                'They see others making money and want some of the profit, jumping in any time they get an ' +
                'emotional trigger that it’s a good time. This is amplified even more when they win some trades. ' +
                'When they are losing more than they are winning but still winning, emotions are even more ' +
                'powerful because they have hope that they will get their breakthrough. Unfortunately for them, ' +
                'their balances are more likely to go to 0 investing like that than reach the jackpot. Working ' +
                'with volatile markets should be an investment, not a gamble.\n' +
                '\n' +
                '[Altcoins can be more volatile](what-is-an-altcoin) than main coins. Altcoins can produce ' +
                'thousands of percent in returns and make people into millionaires from just a few thousand ' +
                'dollars to start from. Since investors know this, they are emotionally attractive. With this ' +
                'attraction come [pump and dump scams](https://en.wikipedia.org/wiki/Pump_and_dump). Large ' +
                'investors will purposefully increase the value of an altcoin to gain the attention of other ' +
                'investors just to sell everything for insane profit, dropping the price to near zero for ' +
                'everyone else to suffer. Those who gave the investor that much profit are the emotional ' +
                'investors. Those investors saw the price was going up and got excited and greedy, deciding to ' +
                'put their own money in and continue to raise the price, until it was time for the large investor ' +
                'to sell.\n'
        },
        {
            img: VolatileCrypto3,
            title: 'Bull Markets',
            id: 'BullMarkets',
            description: 'A high detail drawing in black, white and a little bit of brown of an angry raging ' +
                'bull running down a brick road with shadows.',
            text: 'Bull markets are a completely natural way to [cause long-term volatility](https://www.forbes.' +
                'com/advisor/investing/bull-market/). They are pure and can last for months. When the markets ' +
                'are going well more people want a part of that action, people are going to lose and win but ' +
                'still keep investing because there is such a high-profit potential from the newcomers putting ' +
                'their money into the market as well. Crypto gains more attention and more people buying, ' +
                'selling, and making transactions in crypto.\n' +
                '\n' +
                'Bull markets gain a lot of attention because someone who looks at a chart going straight up ' +
                'and not slowing down is going to want some of that action. The fact that bull market profits ' +
                'only lead to more bull market profits is completely true based on the chain reaction effect it ' +
                'has. Bull markets don’t just cause heavy profits, the unprofitable days can be dangerously ' +
                'negative. Volatility goes both ways and since a lot of people are involved in the market the ' +
                'price will act that way.\n' +
                '\n' +
                'Negative results of a bull market can be single-day drops or multiple days just to recover. ' +
                'In both cases, it is important to understand that not every bull market will just be straight ' +
                'up and profit for everyone. Some days will be amazing and others might be terrible. If you have ' +
                'a good investing system you will be able to fight through the losses and come out with a lot ' +
                'of profit. Once the bull market ends there are some things to look out for. A [crypto bubble]' +
                '(what-is-a-crypto-bubble) could be about to pop, sending the market down violently into a bear ' +
                'market, where the once great profitable volatility turns into [rapid volatile crashes. Knowing ' +
                'when to sell at the top of a bull market is essential to avoid being the victim of a fall like ' +
                'this.\n'
        },
        {
            img: VolatileCrypto4,
            title: 'Ending Words',
            id: 'EndingWords',
            description: 'A golden Bitcoin crypto coin sitting on its side surrounded by four other coins on a ' +
                'black table with ones and zeros behind it.',
            text: 'Volatility can be an amazing tool, once you learn to harness it. You must understand that ' +
                'the news and sentiment of the public have great influence over violent movements that are not ' +
                'very easily predicted with data. Emotional investing can provide you with profit from people ' +
                'who are fine with gambling their money away into the markets from emotion. Bull markets are ' +
                'your friend and it is important to know that there will be bumps along the road to overcome. ' +
                'Being able to master these topics will give you the preparation to use volatility to your ' +
                'benefit rather than suffer the losses caused by it.\n' +
                '\n' +
                'Consult a professional before investing\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}