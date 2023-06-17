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
            text: 'When first starting in crypto investing, it is hard to make a profit consistently. Many investors feel like they are just gambling their money away to the markets hoping for something good to happen. This is not how it should be and is not sustainable long-term. If you are serious about making money through crypto investing then you must understand the difference between gambling away your money to the markets and having an actual plan for investing in cryptocurrency.\n' +
                '\n' +
                'For us to find out how to invest in crypto without losing money, we must cover these topics:\n' +
                '\n' +
                '1. [Crypto Gambling](#Gambling)\n' +
                '2. [Crypto Investing](#Investing)\n' +
                '3. [Crypto Market Mindset](#Mindset)\n'
        },
        {
            img: InvestGamble1,
            title: 'Crypto Gambling',
            id: 'Gambling',
            description: 'Two red dice that are see through showing sixes with white dots next to 3 stacks of ' +
                'poker chips all on top of a laptop keyboard.',
            text: 'To not put a value on investing with a plan and taking the time to [hand-pick efficient assets](/efficiency), you might as well be gambling away your money to the markets. It does not always have to be this way. When gambling, many times the odds are already against you, however, you put in money hoping for returns. This is exciting, triggers your emotions, and makes you feel amazing when you win. Even if you do not come out of the casino with more than you came in with, many people still enjoy gambling away their money for the thrill of it.\n' +
                '\n' +
                'Gambling in a casino could be a variety of different games, with different ways of playing. You have slot machines where the house has electronically rigged you. [Roulette](https://www.wikihow.com/Win-at-Roulette), where your odds will always be around that of winning a coin toss. Finally, we have the card games, where you would be surprised how many different games you can play with a deck of cards. These gambling methods have different ways of stealing your money but ultimately all have the same end goal. At its heart gambling is a trade of money for the [thrill of almost winning](https://www.psychologytoday.com/us/blog/cutting-edge-leadership/201603/the-psychology-gambling). Usually, you would have to go to a casino to get these games that are so pleasurable to win, but why would you when the crypto markets are right on your devices? You can gamble at home in the cryptocurrency markets since they are [high in volatility](what-impacts-crypto-volatility).\n' +
                '\n' +
                'When playing games other than cards, these are purely based on the odds. Your odds will never change from when you sit down to when you get back up. [The gambler\'s fallacy](https://en.wikipedia.org/wiki/Gambler%27s_fallacy) shows the representation of how someone can think when they win multiple times in a row. Due to being on a roll, those under this fallacy think that they have better odds to win the next round. Many other psychological tricks come into play, especially with addiction. Gamblers can be seen saying one more round or one more spin tens even hundreds of times before actually stopping. When playing in the market, on the other hand, your odds seem to be much better than any game, because you are using assets. The whole idea of assets is that they will go up in value. If you were to bring gambling into the markets like this, your chances are probably better at the casino.\n' +
                '\n' +
                'When it comes to card games, you have a [calculated percent chance of winning](https://www.investopedia.com/financial-edge/0910/casino-stats-why-gamblers-rarely-win.aspx) and you have to read the thoughts of others playing against you. These card games use up a lot more gambling psychology as well. Every hand dealt is a new round of players studying the psychology of gambling with each other. Trying to find weaknesses or if it is a good idea to quit is the intention otherwise they could lose money. [Poker is still a game](https://beastsofpoker.com/make-money-playing-poker/) and most people are just playing it for enjoyment not to win the pot. As we get closer to real crypto investing, these percentages can transfer over. You may feel extremely confident with one investment and not so much with another where your chances of success are lower. The better you structure your investing, the higher the chance of winning will be.\n'
        },
        {
            img: InvestGamble2,
            title: 'Crypto Investing',
            id: 'Investing',
            description: 'A golden coin with a Bitcoin symbol on it sitting in a pile of dirt with a ferris ' +
                'wheel and an amusement park in the background.',
            text: 'As we attempt to understand how profit can come from the crypto market, we might want a little history first. Crypto investing started when Bitcoin was first created along with [its blockchain](what-is-the-crypto-blockchain). This happened in 2008 after the stock market crash to ensure that centralization would not be able to affect this form of asset. The future of crypto investing from that point on has provided many other great assets that have come into play while Bitcoin remains at the top. When it comes to actually investing with these assets there are many different methods but out of all of them, the most important aspect of crypto investing is your investing system.\n' +
                '\n' +
                'Your [investing system is the rules](start-investing) and regulations of which you buy and sell so that your decisions are not guesses. Those who call themselves investors in the market do not randomly buy cryptocurrencies hoping they will go up by magic. Building an actual plan of attack is what makes someone an investor. Investing is a science and cannot just be tossed together, hoping you will come up with a perfect equation. There must be purpose in what you do so that you can have precision in your actions. Precision will guide you on how to manage risk when investing in crypto.\n' +
                '\n' +
                'Investing is also an art form. While you do have these rules, you get to create them yourself. The markets are unpredictable and that is the best part because while people see random lines up and down you can see patterns, then to you those lines aren’t so random. [Crypto market psychology](crypto-market-psychology) helps give investors the upper hand. They also must embrace what happens because sometimes you will lose money. Taking it as an art form means you should accept your losses as lessons and not let anger control what you do with your money.\n' +
                '\n' +
                'When you pick bad assets without evidence or don’t know how to [diversify your crypto portfolio](/balancing),  that is a gamble. Buying into crypto because of hype or attention will only lead to issues. Rather than [buying altcoins](what-is-an-altcoin) hoping that something good will happen from them, we are going to investigate each asset to find out how to choose the right crypto to invest in. This is done by measuring the risk and reward of each asset we are interested in. Those with less downside risk and more upside potential are the most efficient assets. These assets are great options to invest in as they provide the best profit potential. By using these assets we can optimize the risks and rewards of crypto investing.\n'
        },
        {
            img: InvestGamble3,
            title: 'Crypto Market Mindset',
            id: 'Mindset',
            description: 'A white piece of paper with a chart written on it that goes up and down with the ' +
                'final movement down next to a dark brown pen.',
            text: 'The market mindset of it all intertwines where professional gamblers use tactics to their advantage to win money and continue to make a profit. Professional gamblers play the odds for a living and are good at it. They can go into a game designed to take all your money and end up on top, beating the house. The markets can be the same way. When we look at [crypto market psychology](https://academy.shrimpy.io/post/crypto-market-psychology-how-to-trade-rationally), we see how when the markets are at their highest, our emotions want us to buy the most, and when the markets are at their lowest, our emotions compel us to sell the most. It is completely backward and comes down to how we feel about the market direction.\n' +
                '\n' +
                'To flip the script like professional gamblers, we have to control our emotions and set up a plan. No matter how we feel, this plan will guide us through it. It’s going to be wrong sometimes and right for others, but just like the gamblers, we stick to the rules and limits that we have set for ourselves to maintain control. These rules and limits are also how to [avoid FOMO and FUD](https://www.nerdwallet.com/article/investing/fud). You will lose your mind trying to catch every single move in the market. Sometimes the best thing to do is only buy cryptocurrencies when your investing system has given you multiple signals and you can know for sure which way the market is headed.\n' +
                '\n' +
                'Gambling in the markets is a very important thing to overcome because you can be gambling without even knowing it. Finding how to stay disciplined when investing in crypto can help you avoid losing hundreds of thousands of dollars a day all on your own. They put money into the markets without reason and depending on the [emotional side of crypto investing](https://www.fidelity.ca/en/investor/investorinsights/tips-to-avoid-emotional-investment-crypto/) to be able to bring them profit when it is leading them in the complete opposite direction. Gambling in the markets can be voluntary as well. Some people have more money than they know what to do with so they treat the financial markets and crypto markets as their playground.\n'
        },
        {
            img: InvestGamble4,
            title: 'Conclusive Words',
            id: 'Conclusion',
            description: 'A golden coin with the bitcoin logo on it in front of a silver and bronze coins with ' +
                'the logo as well in a darkly lit room.',
            text: '### How can you avoid gambling in crypto investing?\n' +
                'It is very easy to gamble when first starting. The best ways to avoid this are selecting efficient assets with good profit potential and building an investing system that provides you with rules to guide you to profit.\n' +
                '\n' +
                '### What is the biggest emotional mistake in investing?\n' +
                'The biggest emotional mistake is being afraid to miss profit. When you are fearful of missing a movement, you are experiencing the fear of missing out or FOMO and this can cause you to make emotional decisions that can cost you profit.\n' +
                '\n' +
                '### Investing vs Gambling?\n' +
                'Gambling is when you are putting money into a game, hoping to make a profit from it. Investing is putting money into an asset with a plan of how you will profit from it. There are gamblers in the investing markets and investors in casinos.\n'
        },
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}