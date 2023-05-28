import BearMarketMain from '../../images/articleimages/BearMarketMain.webp'
import BearMarket1 from '../../images/articleimages/BearMarket1.webp'
import BearMarket2 from '../../images/articleimages/BearMarket2.webp'
import BearMarket3 from '../../images/articleimages/BearMarket3.webp'
import BearMarket4 from '../../images/articleimages/BearMarket4.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function WhatToDoInBearMarkets() {
    const Article = [
        {
            img: BearMarketMain,
            title: '',
            id: 'Intro',
            description: 'Stacks of coins increasing as they go to the right with little plants on the top of ' +
                'them all next to a jar filled with coins.',
            text: 'Bear markets are time frames when the market is going downward. Bear markets ' +
                'are usually times when there are not a lot of people in the markets and not a lot of ' +
                'money to be made. Crypto Bear Markets can be seen like the [fall of Bitcoin]' +
                '(https://www.thetimes.co.uk/money-mentor/article/is-bitcoin-crash-coming/) after 2021. ' +
                'Bear Markets are not always a bad thing as long as you can find out what you are going ' +
                'to be spending your working hours doing rather than wasting your time. Let\'s get into ' +
                'what you can do when met with bearish markets.\n' +
                '\n' +
                '1. [Continue Investing](#Investing)\n' +
                '2. [Spending Time on Businesses](#BusinessTime)\n' +
                '3. [Spend Your Money](#SpendMoney)\n'
        },
        {
            img: BearMarket1,
            title: 'Continue Investing',
            id: 'Investing',
            description: 'A Macbook laptop showing a cryptocurrency trading screen next time a pile of crypto coins ' +
                'and an iphone showing another screen.',
            text: 'Investing during a bull market is great. Money comes much easier and you do not have to ' +
                'look too much into your signals. However, during a crypto bear market, it is not as easy going. ' +
                'Markets do not move as much and there are not many opportunities to make the big bucks like ' +
                'before. You have to work harder for less and most investors would rather save their time and ' +
                'money until the next bull market. There are still opportunities to make money though.\n' +
                '\n' +
                'The first step to continue making money during a crypto bear market is to reduce your buying ' +
                'power. The less money you put in means the less money you can make, but this also means the ' +
                'less you can lose. Using less money also comes with more efficiency when looking at the ratios ' +
                'used in Webminers [Asset Efficiency](/efficiency). More efficient investing with less downside ' +
                'is exactly what you need to be able to make money rather than lose it during a bear market.\n' +
                '\n' +
                'Another thing you can do to continue making money through Crypto Investing when the market is ' +
                'bearish is to “Bear Proof” your investing system. If you do not have an investing system ' +
                'already, check out my article on how to create one called [How to Start Investing in Crypto]' +
                '(/articles/start-investing), to build one of your own. To “Bear Proof” your investing system, ' +
                'you must make sure that the data you are using to test with is from bear markets. Once you have ' +
                'bear market data, you can then incorporate it into your strategy. It is important to take into ' +
                'account this bearish market data because it will not act the same way that normal data would. ' +
                'You should be able to create a robust system that can help guide you through bear markets with ' +
                'minimal losses.\n'
        },
        {
            img: BearMarket2,
            title: 'Spending Time on Businesses',
            id: 'BusinessTime',
            description: 'A cup of coffee with a small green plant next to black glasses and an open Apple ' +
                'Macbook laptop all on a dark wooden table.',
            text: 'Running a business along with Investing is a great way for the two to intertwine and make a ' +
                'lot of money. If your business is low on sales, you might not have the money for advertising, ' +
                'but by investing you can fuel that for further growth. On the flip side if investing is ' +
                'bringing you a lot of losses to stay in the game you can allow your business to make up for ' +
                'those losses.\n' +
                '\n' +
                'Keeping up with businesses is a perfect resource to use during bear markets because it can be ' +
                'a better way to spend your time. A yearly schedule could be Investing when the markets are ' +
                'going up with business on the side. Then when the bear market hits, you can begin to shift ' +
                'and put more time into your business and less time into investing. You can even stick to ' +
                'finance, Deloitte mentions 7 movements you can hop on board with to help the finance industry ' +
                'with your business in their article [Seven Forces Shaping the Future of Financial Services]' +
                '(https://www2.deloitte.com/us/en/pages/financial-services/articles/future-of-financial-' +
                'services.html).\n' +
                '\n' +
                'If you are someone who runs a low-maintenance business, similar to the ones listed by Vital ' +
                'Dollar in their article [13 Low-Maintenance Businesses](https://vitaldollar.com/low-' +
                'maintenance-business/), where you can still make money while not spending much time on it, ' +
                'then you are in a good spot. Investing and your business may still take less than 4 hours a ' +
                'day in work while providing you great returns. When the bear market hits, this may be time ' +
                'for you to start doing the behind-the-scenes work that you might have been pushing off for ' +
                'some time. You can spend this time updating your website and email templates, hiring new staff, ' +
                'looking into ways to make business processes more efficient, and even finding new ways to ' +
                'provide value to customers. Free time is greatly filled with creative work because you are ' +
                'not in any rush for a final product. Taking care of these issues may be annoying when doing ' +
                'it, but will pay off in the long run.\n'
        },
        {
            img: BearMarket3,
            title: 'Spend Your Money',
            id: 'SpendMoney',
            description: 'A large green field of grass with a single tree on one of the hills with birds in ' +
                'the sky underneath lots of dark clouds.',
            text: 'If all you do is make money then you are not putting it to good use. Money is meant to be ' +
                'spent and not just piled up doing nothing. Something that you can do when the crypto markets ' +
                'are not going your way is have some fun and spend that money. If you have a new hobby you ' +
                'would like to pick up, now is the time to do it when you don\'t have to pay attention to the ' +
                'markets.\n' +
                '\n' +
                'Since you have the time and money to spend on enjoyment, one thing you can do to fill it is ' +
                'put yourself in a new environment and go somewhere new. Traveling is a great way to gain new ' +
                'experiences and learn new things. Getting outdoors for new hobbies can be perfect for clearing ' +
                'your mind from the stress caused by investing in crypto. The outdoors also offers many ' +
                'activities like rock climbing or biking that you can spend hours training for a day. If ' +
                'you are interested in more ways to calm your mind, look over my article on [The Best Ways ' +
                'to Improve Your Mental State for Smarter Crypto Investing](/articles/mental-improve)\n' +
                '\n' +
                'The other way to spend money is in a way that is right at home. Enjoying a new car is an ' +
                'amazing opportunity to spend your time in bear markets. Going on long drives or repairing ' +
                'things that go wrong. Another way to spend your time and money is renovations. Installing ' +
                'new things to your house or living space and improving your living standard. A new office ' +
                'for your investing can go a long way as well as building yourself a new PC. If you plan to ' +
                'read my article about [How AI Can Improve Your Work Productivity Rather Than Replace You]' +
                '(/articles/ai-jobs-productivity), why not do it with an upgraded desk layout? There are ' +
                'endless ways to spend your money, why invest if you aren\'t going to use your profits?\n'
        },
        {
            img: BearMarket4,
            title: 'Final Words',
            id: 'FinalWords',
            description: 'A large green field of grass with a single tree on one of the hills with birds in ' +
                'the sky underneath lots of dark clouds.',
            text: 'Bear Markets can be tough for crypto investors to find out how to spend their time, but that ' +
                'doesn\'t mean it\'s impossible to make money or f it\'s ind a good way to spend this time. Bearish ' +
                'Markets are a great time for robust crypto investing practices, investing your time into a ' +
                'business, and spending your well-earned money on enjoyment. No matter what you do, understand ' +
                'what goes down must come up and to still be watching for when the bear market returns.\n'
        },
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}