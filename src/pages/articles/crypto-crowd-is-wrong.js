import CryptoCrowdMain from '../../images/articleimages/CryptoCrowdMain.webp'
import CryptoCrowd1 from '../../images/articleimages/CryptoCrowd1.webp'
import CryptoCrowd2 from '../../images/articleimages/CryptoCrowd2.webp'
import CryptoCrowd3 from '../../images/articleimages/CryptoCrowd3.webp'
import CryptoCrowd4 from '../../images/articleimages/CryptoCrowd4.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function CryptoCrowdIsWrong() {
    const Article = [
        {
            img: CryptoCrowdMain,
            title: '',
            id: 'Intro',
            description: 'A white money bag filled with stacks of cash next to some gold and silver coin showing ' +
                'the Bitcoin logo all on a brown table.',
            text: 'Crypto markets are extremely volatile and an amazing place for profits if you can control them. Some investors believe it is best to just ride trends and follow the crowd, however, this does not always work out well for them. Learning to invest can be difficult, but there are ways around these issues that are much more reliable than hoping that following others will result in profit.\n' +
                '\n' +
                'Here are three ways that you can protect yourself from the mistakes the majority of investors suffer from:\n' +
                '\n' +
                '1. [Crypto Arbitrage](#Arbitrage)\n' +
                '2. [Always a Winner and a Loser](#WinnerLoser)\n' +
                '3. [Market Manipulation](#MarketManipulation)\n'
        },
        {
            img: CryptoCrowd1,
            title: 'Crypto Arbitrage',
            id: 'Arbitrage',
            description: 'An Apple iMac computer with a keyboard on a white desk with a notebook, pen, two ' +
                'plants, multiple books, and an hourglass.',
            text: 'Data is everything when investing with [an investing system](start-investing). Unreliable data can ruin everything so it is important to look over your data and inspect for accuracy before attempting to use it to make actual predictions. Learning how to buy and sell crypto safely is all about how reliable your data can be while investing. When we do this we can limit the chances of crypto arbitrage. [Crypto arbitrage is an occurrence](crypto-market-crashes) that happens when your investing system gives you a signal when in reality the market goes the other way. The majority of investors will fully suffer from this type of event causing great losses to consume their profits. It does not have to be this way for you if you learn crypto profit protection.\n' +
                '\n' +
                'Your investing system is not always right, the best way to limit when you are wrong is by having a variety of data. By using [multiple sources](https://www.tokenmetrics.com/blog/best-indicators-for-crypto-trading-and-analysis) you may get fewer signals, but the ones you do get will be much stronger if done correctly. Learning how to make a crypto profit without the crypto crowd requires you to have different data than the crowd. On top of increasing accuracy, you can also set up your investing system to catch itself before losing profit.\n' +
                '\n' +
                'You can do this by adding [extra stop conditions](https://www.forbes.com/advisor/in/investing/stop-loss-meaning/) to your crypto profit strategy that will trigger if things stop going according to plan. This is much more secure than the signals trying to time the top of the market. Whenever a case of crypto arbitrage happened you made an error. There are two types of errors when making predictions and both are important to consider. These errors are Type I and Type II errors. A large reason that data begins to become bad is that people catch on. Others catch on to good indicators and make them less useful as time goes on. Creating indicators that are not easily used by others can help avoid crypto crowd mistakes.\n' +
                '\n' +
                'Type I error is [considered a false positive](https://en.wikipedia.org/wiki/Type_I_and_type_II_errors). What this means is that in your prediction, you believed something was going to happen according to your data when it didn’t. This could be a buy signal where you are looking at your data and believe that the market is going to go up so you buy your crypto, then it does the opposite and you lose money. To prevent this many times you are going to want to just add more data of a different kind so that you still receive the good positive signals, but only if this second condition is met as well. If done correctly, you will be able to recover losses caused by this type I error without suffering the [loss of any profit](is-cryptocurrency-safe).\n' +
                '\n' +
                'A type II error is in many cases worse. In investing this error is a false negative. That means there was a movement that could have made your profit but your system did not tell you to buy. The first way to solve this is to find out why this movement happened. If it was because of an [article in the news](news-in-the-crypto-market) then you are going to want to add sentiment to your system. There are other indicators that you might want to add to your system if you can find one that would have helped you detect this move in the market. The way around this error is to find new data or get rid of the old data that you have been using and start fresh, which is why it is a much harder problem to solve than type I.\n'
        },
        {
            img: CryptoCrowd2,
            title: 'Always a Winner and a Loser',
            id: 'WinnerLoser',
            description: 'A bunch of chess pieces all in a dark gray box while all being knocked down to the ' +
                'ground other than the black side’s king.',
            text: 'Whenever you buy or sell crypto, that [transaction is peer-to-peer](blockchain-transaction), meaning one person to another. This takes place when two people agree on the value of crypto. When this transaction is happening, if the market were to fall right after, the one selling made a profit and the one buying lost money. We have to note this because profit does not come out of thin air. Whenever you are making money in the markets, someone else has lost money. This could be one investor losing thousands and funding your profit, or multiple investors who lose money combined to fund your profit. Either way, when someone is making money, it has to come from someone else.\n' +
                '\n' +
                'One way that you are beating another investor is when they are forced to sell their crypto at a loss. When the [price falls too much](what-is-a-crypto-bubble), a liquidation or stop loss can occur. This means that the investor’s asset fell in price far beyond where they could handle it, forcing them to automatically sell when it hits the target price. [Stop losses are a great way](https://www.investopedia.com/articles/stocks/09/use-stop-loss.asp) to determine how to shield your crypto profits from volatility by setting a limit on your losses. When this happens the crypto is inherently cheap and a good opportunity for buyers. These investors were forced to sell at a loss, allowing you to scoop up their losses for your profits.\n' +
                '\n' +
                'Another way to take someone else’s money is to sell to them at the top. When you sell to another investor at the top, the market then begins to fall. [By collecting your profit](https://cointelegraph.com/learn/a-beginners-guide-to-taking-crypto-profits-and-reinvesting), you are giving away the responsibility of that asset to someone else for their money. The asset begins to fall and lose value. That value loss is also your profit. The makeup of losses and gains will eventually even out if it is not completely even at the time of selling. The main takeaway is that to make money someone has to lose money.\n'
        },
        {
            img: CryptoCrowd3,
            title: 'Market Manipulation',
            id: 'MarketManipulation',
            description: 'A single dollar bill saying face up on a wooden table that has a plant in a white pot ' +
                'on it all next to it and a wooden coaster.',
            text: 'Market manipulation is when a crypto whale uses a lot of money to influence the outcome of the markets. This could be to push the price up or [crash the price down](what-impacts-crypto-volatility). If the goal is to push the price up, this is because they are trying to brute force the price up enough for their large amount to make a profit. And if they are trying to crash the price down, this is so that they can force people to sell unwillingly and buy back again lower. Both scenarios can be very difficult to predict. Finding how to protect your crypto profits [from the herd](https://capital.com/herd-bias) will be your ticket to avoiding this manipulation.\n' +
                '\n' +
                'A tactic that is heavily used [with this manipulation](https://seekingalpha.com/article/4484512-stock-market-manipulation) is finding areas that many buyers will be trying to buy at. Since moving averages are a very popular method of price measurement, a whale may look for a buying point and once that point hits, they crash the price down forcing all who bought to sell their crypto, allowing the whale to buy back lower. It is important to use unique methods of buying and selling your crypto so that others do not attempt to manipulate the price on you.\n' +
                '\n' +
                'Another form of manipulation is [pump-and-dump scams](https://www.fool.com/investing/stock-market/market-sectors/financials/cryptocurrency-stocks/how-to-spot-crypto-scam/). When a pump and dump happens, a whale is influencing the price and making it seem like there are these crazy returns. Once people buy in due to falling prey to this market psychology trick, the whale completely sells everything for insane profit leaving everyone out to dry as the price crashes to the floor. These scams mainly happen with altcoins and newer cryptocurrencies that are more vulnerable to this kind of attack. To figure out how to protect your crypto profits from pump-and-dump scams, make sure that you look into the price history of an altcoin before investing in it so you know it’s reliable.\n'
        },
        {
            img: CryptoCrowd4,
            title: 'Closing Words',
            id: 'Closing',
            description: 'A shopping cart with a couple bills folded up with the twenty showing and two golden ' +
                'coins with the Bitcoin logo all inside it.',
            text: '### How to invest in crypto without losing money\n' +
                'The best way to invest in crypto without losing money is by creating a unique investing system. This way your indicators and trends are not easily able to be replicated and you can avoid making the same mistakes as the crypto crowd does.\n' +
                '\n' +
                '### How can you avoid crypto arbitrage?\n' +
                'Crypto arbitrage can be avoided by using multiple different types of data in your investing system. If one of your indicators fails, you still have others that are not too closely related that can make up for it. You can even swap out the unreliable indicators to make your system more robust.\n' +
                '\n' +
                '### Is the crowd always wrong?\n' +
                'The crypto crowd is not always wrong, however, whenever someone makes money, it has to come from someone else. To make your profit, you do not want to simply follow other investors because eventually, you are going to be put in a position where they take their profit and leave not enough for you.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}