import InvestGambleMain from '../../images/articleimages/InvestGambleMain.webp'
import InvestGamble1 from '../../images/articleimages/InvestGamble1.webp'
import InvestGamble2 from '../../images/articleimages/InvestGamble2.webp'
import InvestGamble3 from '../../images/articleimages/InvestGamble3.webp'
import InvestGamble4 from '../../images/articleimages/InvestGamble4.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function InvestingVsGambling() {
    const Article = [
        {
            img: InvestGambleMain,
            title: '',
            id: 'Intro',
            description: 'A golden coin with a bitcoin logo on it is sitting up on its edge with an image of the ' +
                'market in green going up behind it.',
            text: 'Investing and gambling go hand in hand with each other having many similarities. At the ' +
                'same time though, they have their differences. Being able to distinguish these differences ' +
                'allows you to dive into the purpose of each of them and make sure that you aren’t mixing the ' +
                'two because when you do it can be catastrophic.\n' +
                '\n' +
                'Here are some topics to cover:\n' +
                '\n' +
                '1. [Crypto Investing](#CryptoInvesting)\n' +
                '2. [Casino Gambling](#CasinoGambling)\n' +
                '3. [Their Combination Chaos](#Chaos)\n'
        },
        {
            img: InvestGamble1,
            title: 'Crypto Investing',
            id: 'CryptoInvesting',
            description: 'A golden coin with a Bitcoin symbol on it sitting in a pile of dirt with a ferris ' +
                'wheel and an amusement park in the background.',
            text: 'Crypto investing started when [Bitcoin was first created](into-the-crypto-future) as a ' +
                'blockchain asset. This happened in 2009 after the stock market crash to ensure that ' +
                'centralization would not be able to affect this form of asset. Since then many other great ' +
                'assets have come into play and Bitcoin remains the top dog. When it comes to actually ' +
                'investing with these assets there are many different methods but out of all of them, the most ' +
                'important aspect of crypto investing is your investing system.\n' +
                '\n' +
                'Your [investing system](start-investing) is the rules and regulations of which you buy and ' +
                'sell so that your decisions are not guesses. Those who call themselves investors in the market ' +
                'do not randomly buy cryptocurrencies hoping they will go up by magic. Building an actual plan ' +
                'of attack is what makes someone an investor. Investing is a science and cannot just be tossed ' +
                'together, hoping you will come up with a perfect equation. There must be purpose in what you ' +
                'do so that you can have precision in your actions.\n' +
                '\n' +
                'Investing is also an art form. While you do have these rules, you get to create them yourself. ' +
                'The markets are unpredictable and that is the best part because while people see random lines ' +
                'up and down you can see patterns, then to you those lines aren’t so random. [Market psychology]' +
                '(crypto-market-psychology) helps give investors the upper hand. They also must embrace what ' +
                'happens because sometimes you will lose money. Taking it as an art form means you should accept ' +
                'your losses as lessons and not let anger control what you do with your money.\n'
        },
        {
            img: InvestGamble2,
            title: 'Casino Gambling',
            id: 'CasinoGambling',
            description: 'Two red dice that are see through showing sixes with white dots next to 3 stacks of ' +
                'poker chips all on top of a laptop keyboard.',
            text: 'Gambling in a casino could be a variety of [different games](https://www.wikihow.com/' +
                'Best-Odds-in-Casino), with different ways of playing. You have slot machines where the house ' +
                'has electronically rigged you. Roulette, where your odds will always be around that of winning ' +
                'a coin toss. Finally, we have the [card games](https://www.pokernews.com/casino/casino-card-' +
                'games.htm), where you would be surprised how many different games you can play with a deck of ' +
                'cards. These gambling methods have different ways of stealing your money but ultimately all ' +
                'have the same end goal. At its heart gambling is a trade of money for the thrill of almost ' +
                'winning.\n' +
                '\n' +
                'When playing games other than cards, these are purely based on the odds. Your odds will never ' +
                'change from when you sit down to when you get back up. The [gambler\'s fallacy](https://en.' +
                'wikipedia.org/wiki/Gambler%27s_fallacy) shows the representation of how someone can think when ' +
                'they win multiple times in a row. Due to being on a roll, those under this fallacy think that ' +
                'they have better odds to win the next round. Many other psychological tricks come into play, ' +
                'especially with addiction. Gamblers can be seen saying one more round or one more spin tens ' +
                'even hundreds of times before actually stopping.\n' +
                '\n' +
                'When it comes to card games, you have a calculated percent chance of winning and you have to ' +
                'read the thoughts of others playing against you. These card games use up a lot more [gambling ' +
                'psychology](https://www.investing.com/news/cryptocurrency-news/trading-vs-gambling-same-' +
                'psychology-different-outcomes-2548880) as well. Every hand dealt is a new round of players ' +
                'studying the psychology of gambling with each other. Trying to find weaknesses or if it is a ' +
                'good idea to quit is the intention otherwise they could lose money. Poker is still a game and ' +
                'most people are just playing it for enjoyment not to win the pot.\n'
        },
        {
            img: InvestGamble3,
            title: 'Their Combination Chaos',
            id: 'Chaos',
            description: 'A white piece of paper with a chart written on it that goes up and down with the ' +
                'final movement down next to a dark brown pen.',
            text: 'These two categories intertwine where professional gamblers [use tactics at their advantage]' +
                '(https://corporatefinanceinstitute.com/resources/economics/game-theory/) to win money and ' +
                'continue to make a profit. Investors do the same as this. At that point no matter what you are ' +
                'doing, if you can put money into something and, without incredible risk, consistently make money ' +
                'then you are investing. This means that people at the poker table can be investors and those ' +
                'trading in the markets can be gamblers.\n' +
                '\n' +
                'Gambling in the markets is a very important thing to overcome because you can be gambling without ' +
                'even knowing it. Those involved with the markets lose hundreds of thousands of dollars a day all ' +
                'on their own. They put money into the markets without reason and depend on emotional investing to ' +
                'be able to bring them profit when it is leading them in the complete opposite direction. Gambling ' +
                'in the markets can be voluntary as well. Some people have more money than they know what to do ' +
                'with so they treat the financial markets and crypto markets as their playground.\n' +
                '\n' +
                'The other part where gambling comes in is asset selection. When investors pick bad assets without ' +
                'evidence, that is a gamble. Buying into crypto because of hype or attention will only lead to ' +
                'issues. Pump-and-dump scams with [altcoins](what-is-an-altcoin) that grab your attention ' +
                'persuading you to buy can cause you to lose every dollar you put into it [when they fall]' +
                '(what-is-a-crypto-bubble). There are so many cases where people in the markets aren\'t being ' +
                'cautious with their money, gambling it away. These people are the exact people that are funding ' +
                'regular investors’ profits. Those who follow their rules and work hard in the markets will ' +
                'profit from the losses of gamblers.\n'
        },
        {
            img: InvestGamble4,
            title: 'Conclusive Words',
            id: 'Conclusion',
            description: 'A golden coin with the bitcoin logo on it in front of a silver and bronze coins with ' +
                'the logo as well in a darkly lit room.',
            text: 'Investing and Gambling are two completely different categories of using your money, yet ' +
                'they still have their similarities. While gamblers exchange their money for fun or thrill, ' +
                'investors exchange their money for even more money in return. Even though they belong in two ' +
                'different areas you will come across many investors in the gambling areas where they can ' +
                'consistently make money. You will see gamblers in investing areas where they will consistently ' +
                'toss their money into the market, whether on purpose or from mistakes of their methods. The ' +
                'important thing to remember is both gamblers and investors get what they earn.\n' +
                '\n' +
                'Consult a professional before risking large amounts of money.\n'
        },
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}