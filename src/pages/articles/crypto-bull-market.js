import BullMarketMain from '../../images/articleimages/BullMarketMain.webp'
import BullMarket1 from '../../images/articleimages/BullMarket1.webp'
import BullMarket2 from '../../images/articleimages/BullMarket2.webp'
import BullMarket3 from '../../images/articleimages/BullMarket3.webp'
import BullMarket4 from '../../images/articleimages/BullMarket4.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function CryptoMarketPsychology() {
    const Article = [
        {
            img: BullMarketMain,
            title: '',
            id: 'Intro',
            description: 'The large metal bull statue that sits in wall street in New York while it is snowing outside and the pathway has snow on it.',
            text: 'Crypto bull markets are notorious for excitement and enthusiasm among investors, yet some still manage to mess up their profits. While a bull run is seen as a crazy stretch of just upwards market movement, there is much more to it. During this large movement, many smaller movements take place. Some investors and traders lose money in the smaller picture to the point where they would have been better off buying and holding the whole way up.\n' +
                '\n' +
                'Here are some of the reasons investors and traders lose money in crypto bull runs:\n' +
                '\n' +
                '1. [Emotional Roller Coasters](#Emotion)\n' +
                '2. [Wandering Around Lost](#Lost)\n' +
                '3. [Crypto Profit Edge](#Edge)\n'
        },
        {
            img: BullMarket1,
            title: 'Emotional Roller Coasters',
            id: 'Emotion',
            description: 'Four different stacks of coins with each one a different one of nickels, pennies, dimes, and quarters in front of more coins.',
            text: 'When the markets are going up, everyone is in peak emotion. They are so happy it is the best time to invest in crypto and never want the money to stop. If you ask yourself why is [crypto so volatile](what-impacts-crypto-volatility), you will find that due to the swarm of investors coming into the markets, cryptocurrencies can feel like they will never stop going up. This emotion sticks around and influences how investors buy and sell. Investors get greedy as they want more profit, forgetting about the risks involved in putting your money into crypto markets at this time. The fear of missing out, also known as [FOMO fuels their buying sprees](https://www.ledger.com/academy/glossary/what-is-fomo-in-crypto).\n' +
                '\n' +
                'Due to this high emotion, things can flip around very easily. The slightest bit of [doubt in the market](https://inc42.com/resources/decoding-fud-and-its-impact-on-crypto-users/) will cause panic and it might feel like everything is going to crash to the ground until people can calm themselves and start buying again. The market mentality shows us everyone wants to buy, even at the top of a run. At least until things go south when everyone wants to sell until the bottom. This means [due to emotions](avoid-emotional-investing), investors are buying at the top and selling at the bottom, when it should be the complete opposite. This causes hitches or legs in the market where it feels like a set of stairs on the way up as investors continue to buy and sell.\n' +
                '\n' +
                'The most dangerous part of bull runs is not even during the bull run itself. They are right before and right after. Right before a bull run, investors are used to the low profit that [comes from a bear run](what-to-do-in-bear-markets). They aren’t thinking much of big signs that the bull run is coming. When it’s finally here, a lot of people miss the first movement entirely because they don’t believe it.\n' +
                '\n' +
                'During the bull run, Investors are so wrapped up in the upward movements that they don’t believe they will ever end. When profits come to a stop leading to a crash, some investors still believe that they are going to be making a profit, completely forgetting how to protect your crypto investments during a bull market. Eventually, they realize profits are over and panic sell into the bear run, making the crash even worse. As the bear market begins, investors begin accepting their loss and continuing, whether by investing more or leaving the markets entirely.\n'
        },
        {
            img: BullMarket2,
            title: 'Wandering Around Lost',
            id: 'Lost',
            description: 'A stack of one hundred dollar bills rolled up in a ball with a rubber band around them in front of a screen showing crypto.',
            text: 'If you are not trying to get yourself [caught in the risky emotional battle](https://www.investopedia.com/articles/basics/10/how-to-avoid-emotional-investing.asp) that goes on during a bull market then you have to structure your investment strategy. This includes how you will invest and what assets you decide to use. A crypto bull market from afar will look like it was mainly going upwards, but when you look at smaller time frames you can see that there are a lot of ups and downs that took place to form that. These ups and downs are caused by multiple different investors debating on the price, some believe they can get a better price and sell, others believe the price will only rise and buy. These legs of up and down provide more profit to be made and as investors, it is your job to take advantage of that.\n' +
                '\n' +
                'While others are emotionally investing, you will be controlling your emotions and [using an investing system](start-investing). This system is a way for you to use data and trends to find opportunities in the crypto market for profit. To start you are going to want to look back at different indicators including the relative strength index, moving averages, and MACD. There are many more out there to pick from, the most successful indicators being ones that you create yourself. Once you find a trend that is reliably giving you insights into a market move, you can start to build your system. Creating a robust system with multiple trends working together is how to manage risk when investing in crypto for the best profits.\n' +
                '\n' +
                'Figuring out how to choose the right cryptocurrency to invest in can be as easy as picking a [popular cryptocurrency with minimal risk](popular-cryptocurrency), however, if you want to maximize your earnings, you can take a look into the efficiency of cryptocurrencies that you would like to choose from. To measure efficiency, you are going to look for low amounts of downside risk and high amounts of potential profit. [Efficient cryptos](/efficiency) have the potential to take off, resulting in a lot of money.\n' +
                '\n' +
                'Putting everything together will give you your crypto investing strategy that can guide you through times of risk and volatility so you can come out on top with a profit. Even though you have an investing system, you should still be on the lookout for [black swan events](https://learn.bybit.com/crypto/what-is-black-swan-event/) that may cause the market to react differently than you expect. Robust systems can partially help prevent this, however, eventually, you will lose profit. What matters is not if you lose money, but how you handle it.\n'
        },
        {
            img: BullMarket3,
            title: 'Crypto Profit Edge',
            id: 'Edge',
            description: 'A golden coin on top of two other coins with the Bitcoin logo on the front of it in front of a wooden hourglass and other coins.',
            text: 'If you ask yourself how to make money with the crypto bull market, the answer is not only an investing system. There are [multiple ways to profit from crypto](make-money-with-cryptocurrency) that assist the money coming in from your investing system. Understanding blockchain and web3 technology can give you a foundation for profit. Making money in crypto for the long term should be more than just through the markets.\n' +
                '\n' +
                'If you decide you want to specialize just in the markets and [nothing else in web3](https://hbr.org/2022/05/what-is-web3), then you are going to need a wider understanding of what makes them tick. The mindset of investors and market psychology greatly impact how bull runs act. Understanding the mentality behind movements allows you to predict where the market may be heading next, far more accurately than the investor who doesn’t study this. [Market sentiment is a very strong tool](https://www.cryptohopper.com/blog/what-is-crypto-market-sentiment-and-why-does-it-matter-4198) that most free products are not that accurate at measuring. Creating an indicator of your own could be a great advantage to have in your investing system to assist in gaining insight into how people are talking about the markets.\n' +
                '\n' +
                '[Whales and market movers](https://www.coindesk.com/learn/what-are-crypto-whales-and-why-are-they-important/) will be able to influence how markets act due to the large amount of money they can put into the markets. Investigating how those with a lot of money act with crypto can not only protect yourself from these movements but possibly profit from them as well. Understanding whale mentality is not for everyone since it is not required for successful investing, however, if you plan to be among the best crypto investors in the market, it is a required topic for you to know inside and out.\n' +
                '\n' +
                'Before the bull market even begins there is the mental war of finding out when the bull run will take off. Everyone is waiting for it to happen but no one knows for sure when things will start to boom. Those with investing systems don’t have to worry about when the crypto bull market starts or ends because the system tells them everything they need to know. Whether they are in slow markets or fast markets the system should be able to guide them with their decisions, preventing them from letting their emotions waste their money. Some systems are better suited for [different market environments](https://www.businessinsider.com/personal-finance/bear-market-vs-bull-market) so you must pay attention to what works best for your system and investing style and adapt to your surroundings.\n'
        },
        {
            img: BullMarket4,
            title: 'Final Thoughts',
            id: 'Final',
            description: 'An Apple iPad with a multicolored chart on it on top of a wooden table next to a calculator, pen, and a piece of white paper.',
            text: '### How to invest in crypto during a bull market?\n' +
                'The best way to invest in a crypto bull market is with an investing system so that you do not get caught up in the emotional ups and downs that can go on. Sticking to a plan will help you maintain consistent profits throughout the entire bull run, especially if you are using efficient assets.\n' +
                '\n' +
                '### What is blockchain technology?\n' +
                'Blockchain technology is the underworkings of what makes crypto function. If you want to be serious about investing in crypto, you are going to want to begin educating yourself about everything relating to it as well. This includes the blockchain and decentralized finance, also known as DeFi\n' +
                '\n' +
                '### How to tell when the next bull run is?\n' +
                'There is no way to know for sure when the next bull run is, however as long as you are keeping yourself updated with the markets and maintaining your investing system, when it comes you will be ready from the start to make the most of it.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}