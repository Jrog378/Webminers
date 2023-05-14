import TopMain from '../../images/articleimages/TopMain.webp'
import Top1 from '../../images/articleimages/Top1.webp'
import Top2 from '../../images/articleimages/Top2.webp'
import Top3 from '../../images/articleimages/Top3.webp'
import Top4 from '../../images/articleimages/Top4.webp'
import Top5 from '../../images/articleimages/Top5.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function TopInvestor() {
    const Article = [
        {
            img: TopMain,
            title: '',
            id: 'Intro',
            description: 'Maroon and old styled typewriter with aged metal parts that has written on a white page to never be afraid',
            text: '95% of people who go into crypto investing lose money. As investors, we must limit our losses and not ' +
                'become that 95%. What does it take to be in the top five or even one percent? In this article, ' +
                'we will find out. \n' +
                '\n' +
                'To master anything, you must attack it from many angles. For starters, here are four things that ' +
                'I found to maximize profits in investing:\n' +
                '\n' +
                '1. [Stop Making Emotional Decisions](#EmotionalInvesting)\n' +
                '2. [Create an Investing System](#InvestingSystem)\n' +
                '3. [Stop Trying to Catch Every Move](#CatchEverything)\n' +
                '4. [Continue Researching](#Research)'
        },
        {
            img: Top1,
            title: 'No More Emotional Investing',
            id: 'EmotionalInvesting',
            description: 'Stock market website opening in a Mac laptop on a glass table with a notebook and pen resting on top of it',
            text: 'Emotion comes naturally to humans. Fundamentally the act of competition is a very emotion-inducing ' +
                'activity. Trying hard to make money without losing all your money can cause worry and stress. ' +
                'It is up to us to be emotionless investors if we want to make money in the markets. You cannot let' +
                ' your emotions take control. Every decision must have empirical evidence to back it. Otherwise, ' +
                'you might as well be gambling. We have an insightful article on emotion called [The Best Ways ' +
                'to Improve your Mental State for Better Investing](/articles/mental-improve).\n' +
                '\n' +
                'When talking about emotions and investing, the two emotions that come into play the most are fear' +
                ' and greed. [Alternative’s Fear and Greed scale](https://alternative.me/crypto/fear-and-greed-index/)' +
                ' is a well-trusted resource that you should visit.' +
                ' Fear is more common at the bottom of a trend where everyone is afraid to buy because the ' +
                'market could go lower, and greed takes place when the market is at its top, and people buy high ' +
                'in hopes it will go higher. Fear and greed are vital to prevent the same mistakes the emotional' +
                ' investor makes. The crypto market moves all around. No one move determines the next.\n' +
                '\n' +
                'Fear of missing out, known as FOMO, will make you want to buy too early. FOMO happens when it ' +
                'seems like the perfect time to buy, but you are afraid of making the wrong decision and losing ' +
                'profit. Investors that are not smart, mainly the 95% mentioned earlier that lose money, let ' +
                'this fear control what they do. To prevent this, the intelligent investor makes an Investing ' +
                'System.'
        },
        {
            img: Top2,
            title: 'Build Your Investing System',
            id: 'InvestingSystem',
            description: 'Large road system of bridges and highways going around each other in twists and bends near buildings and trees',
            text: 'Investing systems are how you automate your investments so that data or rules make decisions ' +
                'instead of you and your emotions. This data may be collected daily, weekly, or even monthly, ' +
                'depending on what type of investor you plan to be. It doesn\'t matter how often you gather your ' +
                'data, but what does matter is how accurate the data you collect is.\n' +
                '\n' +
                'Data for an investing system comes from many sources. Data can be found directly from markets ' +
                'in rules, price levels, or volume levels. Indicators like Volume Distribution, [Relative Strength ' +
                'Index](https://en.wikipedia.org/wiki/Relative_strength_index), and Moving Average Convergence ' +
                'Divergence are widely used in Investing Systems. ' +
                'Macroeconomic and Microeconomic Indicators are generally easier to follow as they take a slower ' +
                'amount of time to follow. These economic indicators are also the choice of many large investment' +
                ' firms with a lot of money. It is up to the investor to build their system to suit the investing' +
                ' style that compliments them.\n' +
                '\n' +
                '[Webminers Market Insights](/insights) is an example of our investing system. For Market' +
                'Insights, we use Macroeconomic data and Custom indicators to determine a good time to buy ' +
                'and sell. This data is collected daily. We specialize in the reflexivity of the markets. reflexivity' +
                ' shows us what goes up must come down and the other way around.'
        },
        {
            img: Top3,
            title: 'Stop Trying To Catch Everything',
            id: 'CatchEverything',
            description: 'Five Bitcoins and one other coin resting on top of multiple One Hundred dollar bills with the face side up',
            text: 'Being able to catch every move successfully will never happen. The markets are unpredictable, ' +
                'and attempting to get every move will only ruin your accuracy. The market moves happen for ' +
                'different reasons. The only way to make money every time the market moves would be to broaden ' +
                'your data to account for all these reasons. Now that you have this data, you will undergo the ' +
                'consequences of diversifying this much.\n' +
                '\n' +
                'Over-diversifying your system leads to spreading yourself too thin. You will lose to someone who ' +
                'specializes if you diversify too much. Spending more time studying multiple moves will never ' +
                'beat someone that only pays attention to one type of move. \n' +
                '\n' +
                'Over-diversification can take place with the collection of data or the assets that you are ' +
                'tracking. I experienced this when following too many assets at once, seeing when they were at ' +
                'the best time to buy. Rather than adding all this work to my plate, I took the time to develop' +
                ' [Webminers Asset Efficiency](/efficiency) so I could then pick and choose which ' +
                'assets I wanted to track and which I would save for later if one of my mains were to stop ' +
                'performing as well. Minimization eases the load of updating the Market Insights and makes life easier' +
                ' by removing unnecessary work.\n' +
                '\n' +
                'There are many types of investing styles. Our in-depth article will be coming out soon about ' +
                'what they are and how you can pick one that goes with your personality. Join our ' +
                '[Email List](/email-list) for updates on this.\n'
        },
        {
            img: Top4,
            title: 'More Research',
            id: 'Research',
            description: 'Black glasses, five red-orange colored pencils, and a white lined notebook are all resting on a white table',
            text: 'Research is a fantastic opportunity to improve and learn something new. Never stop learning ' +
                'life and investing because there will always be ways to improve. Improvement in investing comes ' +
                'in the form of researching and honing your techniques. If your system seems inaccurate, one of ' +
                'your indicators could have stopped working or needs replacement.\n' +
                '\n' +
                'Research is also a superb tool because nothing works forever. Eventually, whether it is an ' +
                'automated strategy or a custom indicator, something will stop being as accurate as it once was.' +
                ' Being able to adapt to this is critical to a timeless investing system.\n' +
                '\n' +
                'Finding a roadmap can also help you stay focused on the task of actually researching. Roadmaps' +
                ' include writing down your goals and what you hope to achieve. For example, looking through ' +
                '[Tradingview](https://tradingview.com) for a community-made indicator and making sure that ' +
                'you know what asset you want it for and \n'
        },
        {
            img: Top5,
            title: 'Summary',
            id: 'Summary',
            description: 'A black chess piece on a board with black and white on either side with a shining gold crow resting on top of it',
            text: 'To be in the top percent of investors, you must take investing seriously. No successful' +
                ' investor has ever gotten there by accident. Control your emotions, create an investing ' +
                'system, do not worry about every move, and keep improving. These are what define top-tier ' +
                'investors. To keep up with the Webminers Investing System, visit our Twitter and Homepage. \n' +
                '\n' +
                'I hope you enjoyed this article! More to come.'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}