import DownsideAIMain from '../../images/articleimages/DownsideAIMain.webp'
import DownsideAI1 from '../../images/articleimages/DownsideAI1.webp'
import DownsideAI2 from '../../images/articleimages/DownsideAI2.webp'
import DownsideAI3 from '../../images/articleimages/DownsideAI3.webp'
import DownsideAI4 from '../../images/articleimages/DownsideAI4.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function DownsidesOfAi() {
    const Article = [
        {
            img: DownsideAIMain,
            title: '',
            id: 'Intro',
            description: 'A blue realistic animated brain that has lines of wires as if it was a part of a ' +
                'computer representing artificial intelligence.',
            text: 'Artificial Intelligence is a growing technology just like crypto and the blockchain. Creating a crypto investing system is a great way to avoid emotional investing and follow trends that can lead you to profits. When we add AI to our investing systems, things get a bit more complicated. AI, as of right now, can lead to a few downsides when mixed with investing.\n' +
                '\n' +
                'These are the 3 ways that AI could cause negative effects when mixed with investing:\n' +
                '\n' +
                '1. [Market Manipulation](#MarketManipulation)\n' +
                '2. [Sentiment](#Sentiment)\n' +
                '4. [The Top 1%](#Top1)\n'
        },
        {
            img: DownsideAI1,
            title: 'Market Manipulation',
            id: 'MarketManipulation',
            description: 'A black and white image of a computer screen that has three different line charts ' +
                'and multiple datasets for market analysis.',
            text: 'The crypto markets are filled with large hedge funds, banks, and whales who move a lot of money in and out. This causes manipulation in the markets, even with [efficient assets](/efficiency), since some entire moves can be made from the buying and selling of these market movers. These instances could be dropping the price a ton forcing people to cut their losses and sell as well as falsely raising the market price just to rapidly drop it. When AI comes into play, this can be good for investors to make smarter decisions, as well as detrimental if in the wrong hands.\n' +
                '\n' +
                'AI can be used to identify weaknesses in the [volatile markets](what-impacts-crypto-volatility) where there is a high chance of large movements in price. These can be from times of low volatility or unique cases that would be hard to see without advanced technology. If a market mover can catch onto this, there could be serious losses caused by purposely manipulating the markets to gain the upper hand over other investors. In doing so they can use AI to cause other people in the markets to lose a lot of money.\n' +
                '\n' +
                'When there are [algorithmic trading programs](https://www.investopedia.com/articles/active-trading/101014/basics-algorithmic-trading-concepts-and-examples.asp) and investing systems being used in the market, there are certain times when they will be executing trades. In doing so they will be able to find the conditions that these investing systems use to make their trades. After knowing this knowledge, a market mover can purposely make it seem like it is a good time to buy, when in fact the market is going to continue going down. This will cause the systems to buy crypto, then after the [price continues to fall](what-is-a-crypto-bubble), force them to sell to cut their losses for this market mover to get their discounted price.\n' +
                '\n' +
                'This may sound like the markets are completely out of your control. There is still hope for you to protect yourself. Constantly improving your investing system can make it less predictable. [Researching new trends](https://seekingalpha.com/article/4134479-how-to-investment-research) and finding unique movements that others are not taking advantage of can also help your investing system be very specialized when compared to others. Make sure that when markets are getting sketchy or unpredictable you take extra precautions before investing your money.\n'
        },
        {
            img: DownsideAI2,
            title: 'Sentiment',
            id: 'Sentiment',
            description: 'Multiple newspapers stacked on top of each other with the camera focused on ' +
                'one in the middle of them that says World Business.',
            text: 'Since AI is a growing technology, it can sometimes be paired with [web3 technologies](web3-crypto-growth), like cryptocurrency and the blockchain. There are even some AI-focused cryptocurrency altcoins. This is good when the sentiment of AI is positive. If there is a new product that comes out getting everyone\'s attention, those AI altcoins and general cryptocurrencies will all go up in value as people buy more. This connection of sentiment can also be negative. When pieces against AI come out, whether this be talking about how [rushed AI is](https://time.com/6281737/ai-we-cant-trust-big-tech-gary-marcus/) or how dangerous it could be, the market will reflect negatively.\n' +
                '\n' +
                'Sentiment can also be affected by AI itself. Since AI is still developing, there is nothing stopping someone from releasing false information generated by AI on the [news or the internet](news-in-the-crypto-market). This propaganda could be just a mistake by the AI or fully on purpose from the publisher, either way it may end up influencing the markets. [Fraud and forgery](https://bernardmarr.com/what-are-the-negative-impacts-of-artificial-intelligence-ai/) can be extremely hard to determine when someone publishes a story. They are their proof because it is their story, however, what if this story is causing a lot of harm and there is doubt of the legitimacy?\n' +
                '\n' +
                'AI used to produce false news can generate fully realistic images of [events that never even happened](https://abcnews.go.com/US/real-worry-ai-making-harder-spot-fake-images/story?id=98188795). Faking crises across the world, and generating charities based on fake images that are only developed to trigger your emotions into wanting to help out those in need is a serious problem to look out for. These images can be elusive and persuade readers into supporting things that never actually happened or cause people to think negatively about the topic of the fake images.\n' +
                '\n' +
                'AI-powered applications [make mistakes](https://www.businessinsider.com/google-fears-ai-running-wild-but-it-is-too-late-2023-1?op=1), giving off false information. The accuracy of an AI model is based on the data that was used to train it. When there are faulty events and false data put into AI models, they see it as the truth. When this happens, this information can spit back out to users asking questions. The AI thinks that it is giving the correct answer, however, the data it is presenting is wrong from the start. Since it is AI, most people will take what they see as fact, not realizing that AI can be wrong in the information that it provides. Any sort of advice that could impact you critically should never be just from software, especially after knowing the shortcomings of AI in investing. Always seek professional help when possible.\n'
        },
        {
            img: DownsideAI3,
            title: 'The Top 1%',
            id: 'Top1',
            description: 'A briefcase full of one hundred dollar bill stacks with rubber bands on a black ' +
                'table with more bills surrounding the case.',
            text: 'The Top 1% is commonly referred to as the best of the best. This also refers to the top 1% of people with money. The rich will always have more and better access to technology when compared to those with less money and this can greatly impact Crypto Investors and everyday people when it comes to AI. The Top 1% of people with money will have better AI than what is released to the public because they can offer more money to the company. There are many levels of paid plans, many of which have a top level far out of reach for the majority of people. Those that can afford it may end up buying it, gaining access to the technology that is far better than what is offered in other plans, thus giving them the ability to make [even more money through crypto](make-money-with-cryptocurrency) and other avenues.\n' +
                '\n' +
                'Those in the top 1% also have better connections for the most part. Rich people may know CEOs of other tech companies. [Knowing people in important positions](https://executivebiz.com/articles/the-importance-of-networking-with-executives-ceos/) can provide you with unique opportunities. You might get access to the brand new software before the public, or even private access to an invite-only AI model that just a few people have access to. Connections provide opportunity and those at the top can use their connections to gain more technology than those who are not at the top. Better AI will produce more accurate results and can even produce a wider selection of answers or ways to use the information that is provided.\n' +
                '\n' +
                'These connections can also be used to gain information that is not normally accessible to the public. Rich people will [find out about the news first](https://www.michaelpage.com.au/advice/career-advice/career-progression/top-12-benefits-networking-why-networking-important). Developing lawsuits that can cause markets to fall, or releases of innovative products that will hype up the markets. Those who are in positions of knowledge get to act first. Planning before the rest of the investors do. This can set them up for success before anyone even gets the chance to know what’s even going on. While these traits of the top 1% are not guarantees of profit as well as something that only the richest people in the world have access to, they are important to take note of.\n' +
                '\n' +
                'To prevent yourself from losing out to those with more money or knowledge than you, creating an investing system that prevents [emotional investing](avoid-emotional-investing) can guide you through these times, rather than just trying to guess your way through. Another way to protect yourself is with a news aggregator. This software will send useful articles your way, putting them all in one place so it is easy to stay up to date with the most recent events going on in crypto. Finally, growing your network is a great way to save yourself the struggle of missing out. Even if you are not the one who’s friends with an important CEO, you may just bump into someone who is. When you make this connection, they may be able to share the knowledge that they are given to help you out as well as to avoid the dangers of AI in investing.\n'
        },
        {
            img: DownsideAI4,
            title: 'Final Thoughts',
            id: 'FinalThoughts',
            description: 'A back background that has a blue outline of a head and a question mark in the ' +
                'middle of it with blue lines going all over.',
            text: '### What is the biggest drawback of AI in investing?\n' +
                'The biggest drawback is who AI is available too. When AI goes away to the largest bidder, that means that only the rich have access. When the rich only have access they can use that AI to find flaws in the markets and use them to their advantage.\n' +
                '\n' +
                '### What is the easiest way to combat the negatives of AI in investing?\n' +
                'The best thing that you can do to protect yourself is to build a solid and unique investing system. This will protect you from making emotional investing decisions as well as be different enough to not be targeted when trying to take out a large number of investors.\n' +
                '\n' +
                '### Is there anything the blockchain can do to help?\n' +
                'Yes, the best thing to do from the blockchain is to provide services with AI that are provided to everyone equally. Since the blockchain is anonymous, data can be preserved while still being transparent. This provides equal opportunity and can help out all investors make better decisions\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}