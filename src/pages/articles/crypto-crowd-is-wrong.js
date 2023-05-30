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
            text: 'The crypto markets are a powerful place where those who have a plan win, and others who ' +
                'rely on their egos to make their money get crushed. Other people just invest with the crowd. ' +
                'We know that following a trend in data works well with investing but we are going to be ' +
                'looking into what happens when people invest based on trending opinions, not data.\n' +
                '\n' +
                'Here are three ways that following the crowd leads to losses:\n' +
                '\n' +
                '1. [Always a Winner and a Loser](#WinnerLoser)\n' +
                '2. [Market Manipulation](#MarketManipulation)\n' +
                '3. [Bad Data](#BadData)\n'
        },
        {
            img: CryptoCrowd1,
            title: 'Always a Winner and a Loser',
            id: 'WinnerLoser',
            description: 'A bunch of chess pieces all in a dark gray box while all being knocked down to the ' +
                'ground other than the black side’s king.',
            text: 'Whenever you buy or sell crypto, that transaction is [peer-to-peer](blockchain-transaction), meaning one person to another. This takes place when two people agree on the value of crypto, even if one of the investors is wrong. Sometimes they are even both right. A crypto can go up, in the hands of one investor and when they decide to sell, the one who buys that crypto can still end up making money. The point is that eventually, someone is losing money. When you make money on an asset that is someone else’s money that you are taking from them.\n' +
                '\n' +
                'One way that you are beating another investor is when they are forced to sell their crypto. When the price falls too much, [a liquidation or stop loss can occur](https://www.coindesk.com/markets/2021/08/13/what-does-liquidation-mean-and-how-to-avoid-it/). This means that the investor’s asset fell in price far beyond where they could handle it, forcing them to automatically sell when it hits the target price. When this happens the crypto is inherently cheap and a good opportunity for buyers. These investors were forced to sell at a loss, allowing you to scoop up their losses for your profits.\n' +
                '\n' +
                'Another way to take someone else’s money is to sell to them at the top. When you sell to another investor at the top, the market then begins to fall. By collecting your profit, you are giving away the responsibility of that asset to someone else for their money. The asset begins to fall and lose value. That value loss is also your profit. The makeup of losses and gains will eventually even out if it is not completely even at the time of selling. The main takeaway is that to make money someone has to lose money.\n'
        },
        {
            img: CryptoCrowd2,
            title: 'Market Manipulation',
            id: 'MarketManipulation',
            description: 'A single dollar bill saying face up on a wooden table that has a plant in a white pot ' +
                'on it all next to it and a wooden coaster.',
            text: 'Market manipulation is when a [crypto whale uses a lot of money to influence the outcome of the markets](https://www.binance.com/en/blog/fiat/what-is-market-manipulation-in-cryptocurrency-421499824684902912). This could be to push the price up or crash the price down. If the goal is to push the price up, this is because they are trying to brute force the price up enough for their large amount to make a profit. And if they are trying to crash the price down, this is so that they can force people to sell unwillingly and buy back again lower. Both scenarios can be very difficult to predict.\n' +
                '\n' +
                'A tactic that is heavily used with this manipulation is finding areas that many buyers will be trying to buy at. Since [moving averages are a very popular method of price measurement](https://www.investopedia.com/ask/answers/122314/what-are-main-disadvantages-using-moving-averages-ma.asp), a whale may look for a buying point and once that point hits, they crash the price down forcing all who bought to sell their crypto, allowing the whale to buy back lower. It is important to use unique methods of buying and selling your crypto so that others do not attempt to manipulate the price on you.\n' +
                '\n' +
                'Another form of manipulation is pump-and-dump scams. When a pump and dump happens, a whale is influencing the price and making it seem like there are these crazy returns. Once people buy in due to falling prey to this [market psychology](crypto-market-psychology) trick, the whale completely sells everything for insane profit leaving everyone out to dry as the price crashes to the floor. These scams mainly happen with [altcoins](what-is-an-altcoin) and newer cryptocurrencies that are more vulnerable to this kind of attack.\n'
        },
        {
            img: CryptoCrowd3,
            title: 'Bad Data',
            id: 'BadData',
            description: 'An Apple iMac computer with a keyboard on a white desk with a notebook, pen, two ' +
                'plants, multiple books, and an hourglass.',
            text: 'Data is everything when investing with an [investing system](start-investing). Bad data can ruin everything so it is important to look over your data and inspect for accuracy before attempting to use it to make actual predictions. There are two types of errors when making predictions and both are important to consider. These errors are Type I and Type II errors. A large reason that data begins to become bad is that people catch on. Others catch on to good indicators and make them less useful as time goes on.\n' +
                '\n' +
                'Type I error is considered a false positive. What this means is that in your prediction, you believed [something was going to happen according to your data when it didn’t](https://www.forbes.com/sites/lawrencelight/2020/02/19/misleading-buy-and-sell-signals-for-stocks/). This could be a buy signal where you are looking at your data and believe that the market is going to go up so you buy your crypto, then it does the opposite and you lose money. To prevent this many times you are going to want to just add more data of a different kind so that you still receive the good positive signals, but only if this second condition is met as well. If done correctly, you will be able to recover losses caused by this type I error without suffering the loss of any profit.\n' +
                '\n' +
                'A type II error is in many cases worse. In investing this error is a false negative. That means there was a movement that [could have made your profit but your system did not tell you to buy](https://www.tradingheroes.com/journal-missed-trades/). The first way to solve this is to find out why this movement happened. If it was because of an article [in the news](news-in-the-crypto-market) then you are going to want to add sentiment to your system. There are other indicators that you might want to add to your system if you can find one that would have helped you detect this move in the market. The way around this error is to find new data or get rid of the old data that you have been using and start fresh, which is why it is a much harder problem to solve than type I.\n'
        },
        {
            img: CryptoCrowd4,
            title: 'Closing Words',
            id: 'Closing',
            description: 'A shopping cart with a couple bills folded up with the twenty showing and two golden ' +
                'coins with the Bitcoin logo all inside it.',
            text: 'There are a lot of ways to be right in crypto and you do not have to be right every time. It is important to follow your system and make sure that you are aware of what the crowd is thinking, however not follow it blindly. Understand that in crypto, someone’s profit is another person\'s loss and how market manipulation can make a whale a lot of money. Data is the backbone of investing systems and it is important to make sure that it is accurate and still works. Being consistent will be rewarding and don’t let the fear of missing out take over.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}