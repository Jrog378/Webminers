import BlockchainBasicsMain from '../../images/articleimages/BlockchainBasicsMain.webp'
import BlockchainBasics1 from '../../images/articleimages/BlockchainBasics1.webp'
import BlockchainBasics2 from '../../images/articleimages/BlockchainBasics2.webp'
import BlockchainBasics3 from '../../images/articleimages/BlockchainBasics3.webp'
import BlockchainBasics4 from '../../images/articleimages/BlockchainBasics4.webp'
import BlockchainBasics5 from '../../images/articleimages/BlockchainBasics5.webp'
import BlockchainBasics6 from '../../images/articleimages/BlockchainBasics6.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function BiggestCryptoMistakes() {
    const Article = [
        {
            img: BlockchainBasicsMain,
            title: '',
            id: 'Intro',
            description: 'The bitcoin logo in the center of a digitally made circle in blue surrounded by ' +
                'multicolored lights and a blue background.',
            text: 'The powerful blockchain technology that brought us cryptocurrency is compelling and still developing more as time goes on. Since it is such a new technology, a few things need to be straightened out to optimize how you interact with crypto. While crypto is a volatile asset, there are still things we can do to control it and profit from these quick movements.\n' +
                '\n' +
                'Here are the 5 ways to achieve crypto success:\n' +
                '\n' +
                '1. [Efficient Investing](#EfficientInvesting)\n' +
                '2. [Studying Crypto Markets](#CryptoMarkets)\n' +
                '3. [Studying Good Investors](#GoodInvestors)\n' +
                '4. [Understanding the Economy](#Economy)\n' +
                '5. [Make Mistakes](#Mistakes)\n'
        },
        {
            img: BlockchainBasics1,
            title: 'Efficient Investing',
            id: 'EfficientInvesting',
            description: 'A black lightbulb wire in a block room with a shiny glass light bulb plugged into ' +
                'it with the coil slightly lit up orange.',
            text: 'Efficiency is hard to come by when there is volatility. When looking deep into what is cryptocurrency, we experience this a lot. The price of crypto moves around a lot more than the price of the S&P500 or gold. This is dangerous if you do not know what you are doing in the markets, or have not thoroughly tested your investing strategy yet. There are two ways to achieve cryptocurrency risk management with efficient profits. There are where you invest and how you invest. Firstly you must pick the right assets to invest in. Then you have to choose the right times to buy and sell this asset.\n' +
                '\n' +
                'The best cryptos to invest in are those with the highest efficiency. When looking for efficient assets, we would like to see the most amount of profit potential and the least amount of downside potential. To calculate this we will use a type of risk-to-reward ratio. While calculating these might take some time, you can a 3rd party resource to find that out, like [Webminers Asset Efficiency](/efficiency). Another way you can find efficient assets is just by avoiding new altcoins without a lot of price history, these have the highest chance of falling to 0. On top of that, the most investors involved the better, so we are going to want to [look for popular cryptocurrencies](popular-cryptocurrency). Next, we can solve how to diversify your cryptocurrency portfolio by evening out how much we are going to put into each asset based on efficiency and popularity with price history in mind. \n' +
                '\n' +
                'Now that we’ve got our [efficient cryptocurrency portfolio diversification](/balancing), it’s time to figure out when to buy and sell. You can do this by coding, or by hand. With both methods the main goal is to use price data, like the Relative Strength Index or moving averages, to start building your investing system, if you are coding you can get a bit more creative and even create your indicator. As we look at our data and indicators, we want to find a situation that happens multiple times, leading to a good chance for profit. Once we have your condition, we can [add it to our investing system](start-investing) and continue looking for ways to increase our accuracy. After some more testing, we should be all set to efficiently invest in cryptocurrency.\n'
        },
        {
            img: BlockchainBasics2,
            title: 'Study Crypto Markets',
            id: 'CryptoMarkets',
            description: 'A silver Apple Macbook with a blue and white bar chart on it on a black desk with two ' +
                'books and a cup of coffee next to it.',
            text: 'Unless you have a perfect investing strategy, there should always be room for researching more about the markets and freshening up on the crypto investing basics. There are so many [different types of investors](https://www.thebalancemoney.com/different-investing-styles-1289917) in the field that all have their methods on how to invest in cryptocurrency efficiently. This can get quite complicated if you are just starting. Studying the [risk and volatility](https://www.gemini.com/cryptopedia/volatility-index-crypto-market-price) that makes up crypto is not as simple as many may seem to think it is. Each time frame is different and has a different type of investor on it with different cryptocurrency investment strategies. \n' +
                '\n' +
                'Rather than looking through every crevice involved with cryptocurrencies, I suggest you start by studying the mindset of investors, also known as [cryptocurrency market psychology](crypto-market-psychology). Market psychology can help us critically think about why the market is moving in a certain direction. If we can understand current movements, then we can predict the future of cryptocurrency movements to some extent. The psychology of the market can help us understand that people are greedy at the top of good movements and [fearful at the bottom](https://www.sofi.com/learn/content/what-does-fud-mean/) of bad ones. We can begin to pick up on this and take advantage of their bad decisions. Success does not just have to only be from your good decisions, it can also be from mediocre decisions based on other peoples’ bad ones.\n' +
                '\n' +
                'Another great way to avoid big losses is to understand that the market can make [giant unpredictable movements](what-is-a-crypto-bubble) in short periods. These events are called black swan events and can be due to extremely good or bad events happening anywhere across the world that gather a lot of attention in ​​the crypto news. This attention scares investors, who rapidly pull their money out of the markets causing prices to dramatically fall, or rise if it is exciting news. Another form of rapid dropping in price can come from one of the crypto scams called a pump-and-dump scam. These scams are when an entity with a lot of money boosts the [price of an altcoin](what-is-an-altcoin) without a lot of investors gaining attention. This attention draws in more investors who continue to boost prices. This goes great until the original entity decides to take out their money for insane profits. This leaves the altcoin to crash while many investors are left with nothing.\n'
        },
        {
            img: BlockchainBasics3,
            title: 'Study Good Investors',
            id: 'GoodInvestors',
            description: 'A black and white bar chart on a piece of white paper in a spiral notebook with a thick ' +
                'calculator on top of it next to a laptop.',
            text: 'Great investors have all the knowledge they need to find success. While you are trying to achieve success of your own the fastest way is to [find a mentor](https://hbr.org/2021/03/whats-the-right-way-to-find-a-mentor) or historic figure who you want to learn from. You should never stop learning because we live in a time where many of us use the internet every day. Rather than using it for social media, we should be spending that time networking or using it for knowledge. There is no single way to find this knowledge with the many cryptocurrency research methods.\n' +
                '\n' +
                'Finding a mentor in the crypto space might be hard because so much of investing is online. You can sit inside forever and make money, but the best way to meet others in the crypto space is to get out and go to [blockchain events like conferences and meetups](crypto-investing-lifestyle-changes). Anywhere there are wealthy people, you will also find some of them are extremely good at investing their money. That is the key to keeping your wealth and those who are good at it will be wealthy for a long time. You might even end up bumping into amazing investors randomly who know things like how to start a blockchain business. Make sure you are hanging around the right crowd who are all driven on improving their futures.\n' +
                '\n' +
                'If you are unable to meet a mentor or investor who is better than you, your next best bet is to find someone online. This can be from any time in history, so you are going to want to [look for the best of the best](https://www.investopedia.com/world-s-11-greatest-investors-4773356). People like Benjamin Graham, Warrant Buffet, and Peter Lynch. These investors have published their knowledge out there for you to read and consume. While there might not be any industry secrets, you will be able to equip yourself with enough of their knowledge to create your own. After you read up on these historical figures, you can finally go into looking for articles, reports, or even [blockchain books](https://bookauthority.org/books/best-cryptocurrency-investing-books) made by investors who are better than you.\n'
        },
        {
            img: BlockchainBasics4,
            title: 'Understanding the Economy',
            id: 'Economy',
            description: 'A blue skyline filled with tall buildings in black with yellow lights in their windows ' +
                'with the sunset shining behind them.',
            text: 'The economy is a driving factor of how people are feeling about the money in their pockets. Another important figure from above that you can check out is Ray Dalio. He talks about the importance of the economy in his book [Principles for Dealing with the Changing World Order: Why Nations Succeed and Fail](https://amzn.to/42YLJHo). In his book, he talks about the economic machine. This explains how macroeconomic and microeconomic factors create cycles. These cycles build the timeframes that hold them.\n' +
                '\n' +
                'Microeconomic data can be used to increase your chances of success in investing. This type of data is largely [reliant on supply and demand](https://openoregon.pressbooks.pub/socialprovisioning2/chapter/5-2-demand-and-supply-in-financial-markets/) as well as how prices change. These changes will influence how people are spending. Sales attract more buyers, high prices will attract less. The balance between the two brings profit. If your goods are too cheap, you are working far harder than you have to so you can stay afloat. If your goods are too expensive, you are not getting the amount of customers you would like, leading to less profits than you should be getting. Somewhere in the middle is the perfect price, which has to be supported by supply and demand. When either price or supply is off balance, you are willing to compromise the other to balance things out. This entire system can be studied and used to make investment decisions.\n' +
                '\n' +
                'On a bigger scale, we have large figures [like interest rates](https://www.usbank.com/investing/financial-perspectives/market-news/how-do-rising-interest-rates-affect-the-stock-market.html#:~:text=%E2%80%9CIf%20interest%20rates%20move%20higher,at%20U.S.%20Bank%20Wealth%20Management.), money printing, and taxation. These macroeconomic data points are more long-term but still can be used to determine important events like the all-time peak of markets or a recession. When the economy finally gets out of a recession, investors can expect markets to begin to rise as more people have more spending money. Macroeconomic data is also a large factor that influences how banks are investing. These big institutions rely on economic data because it is very consistent and almost guarantees a profit. Even though returns are extremely slow, macroeconomic investing will hold a fraction of the risk as short-term investing has. Being able to understand [macroeconomic data can help you make profits](/insights) by predicting when these big institutions will start to buy.\n'
        },
        {
            img: BlockchainBasics5,
            title: 'Making Mistakes',
            id: 'Mistakes',
            description: 'A blue cup of coffee that is tipped over spilling the brown coffee all over a white ' +
                'piece of paper with numbers and words on it',
            text: 'We are going to make mistakes along the way of investing and the way these mistakes can lift us rather than push us down depends on how we treat the situation. If we use these mistakes as a way to learn then there should be nothing wrong with making them. As you start to learn how to invest, some concepts work for some investors and not you. This is completely fine and is all a part of how you forge yourself into a unique investor. \n' +
                '\n' +
                'Mistakes are powerful if you know how to analyze them. They hold the secrets of perfection because they show you how you could have been better. If you took every single mistake and learned from it so that you would never have to make it again, you would be far ahead of many other investors. Most people will continue to blame the markets or other people and not take accountability for what is going on. It’s ok to make mistakes as long as you can develop a way to learn from them.\n'
        },
        {
            img: BlockchainBasics6,
            title: 'Concluding Words',
            id: 'Conclusion',
            description: 'A person in a black and white suit holding a grey folder with papers in it about ' +
                'economic reports with an orange background.',
            text: '### What is blockchain technology?\n' +
                'Blockchain technology is the transactions that occur when doing transfers on the blockchain like cryptocurrency. These transfers across multiple nodes to reach their destination.\n' +
                '\n' +
                '### How to invest in crypto?\n' +
                'To invest in crypto, you are going to first need to find some efficient assets. These assets should have high chances for profit and a low chance for downside. Then you need to find trends with this asset that consistently lead to profitable movements after your signal.\n' +
                '\n' +
                '### How can you find successful investors?\n' +
                'Successful investors are all over if you surround yourself with successful people. They might not be in crypto, but wealthy people are amazing at preserving their wealth with assets and investing.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}