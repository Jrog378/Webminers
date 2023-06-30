import CryptoLifestyleMain from '../../images/articleimages/CryptoLifestyleMain.webp'
import CryptoLifestyle1 from '../../images/articleimages/CryptoLifestyle1.webp'
import CryptoLifestyle2 from '../../images/articleimages/CryptoLifestyle2.webp'
import CryptoLifestyle3 from '../../images/articleimages/CryptoLifestyle3.webp'
import CryptoLifestyle4 from '../../images/articleimages/CryptoLifestyle4.webp'
import CryptoLifestyle5 from '../../images/articleimages/CryptoLifestyle5.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function CryptoInvestingLifestyleChanges() {
    const Article = [
        {
            img: CryptoLifestyleMain,
            title: '',
            id: 'Intro',
            description: 'An animated line chart with multiple square sections on it containing a large blue ' +
                'line going up and down across the chart.',
            text: 'Cryptocurrency investing is an amazing way to get your hands on some high-volatility profit. Since crypto moves around a lot more than regular assets, it can be trickier to make money from, however, if you can manage some profit, it can be life-changing. While this profit is great to have, it is still important to have an actual purpose for investing. This can be a goal or achievement you hope to reach and the main purpose is to have something you are consistently working towards.\n' +
                '\n' +
                'To find your purpose in crypto investing, here are 4 ways that DeFi can change your life:\n' +
                '\n' +
                '1. [Wealth From Profit](#Wealth)\n' +
                '2. [Support From Profits](#Support)\n' +
                '3. [Wealth From Businesses](#Businesses)\n' +
                '4. [Support From Hobby Investing](#Hobby)\n'
        },
        {
            img: CryptoLifestyle1,
            title: 'Wealth From Profit',
            id: 'Wealth',
            description: 'A whiteboard with black plastic around the outside and a black market attached to the ' +
                'top containing a line going up on it.',
            text: 'Wealth creation is not easy. Every single wealthy person has their version of how they got there and what wealth is to them. Therefore your method of reaching it is up to you. If you decide to reach wealth through cryptocurrencies there are many options to pick from. The main ones are investing and trading. While trading uses mainly charts with the help of data, investing uses mainly data with the help of charts. No matter which you choose, understand that you can have the best strategy in the world, but it doesn’t matter unless you choose the right assets. To set up how crypto investing can change your life for the better, choose [efficient cryptocurrencies](/efficiency) with a high potential for profit and low potential for risk.\n' +
                '\n' +
                'After you find the proper assets to invest in it’s time to make money with them. To me, investing is the best choice you can make because it has a much lower risk than trading. If you are going to reach wealth from investing alone, you are going to either want something to support your investment or already have money to speed things up. After funding your investing account it\'s time to [build your investing system](start-investing). We are going to have to look into the price data of our cryptocurrency of choice, like the relative strength index or moving averages, and find trends that have a history of providing valuable insights to the market. This means that when we see the trend happen, we know that there is profit around the corner. After gathering a few trends we want to follow, we can build our investing system with them. All we have to do is wait for a signal, then invest.\n' +
                '\n' +
                'Efficiency comes in many shapes and sizes. Some investors do not prefer [popular cryptocurrencies](popular-cryptocurrency) like Bitcoin or Ethereum. There are still other efficient assets out there in the form of altcoins, also known as alternative coins. These [altcoins can assist](what-is-an-altcoin) in your wealth creation, however, tend to have much more downside risk. It is important to be careful in choosing altcoins and making sure that you have a well-rounded portfolio.\n'
        },
        {
            img: CryptoLifestyle2,
            title: 'Support From Profits',
            id: 'Support',
            description: 'A dark green mug with black coffee in it on a lightly shaded wooden table that has a ' +
                'gray macbook laptop sitting next to it.',
            text: 'Another way that crypto can change your life is by supporting your already coming income. If you already own a successful business or are working in a promising job, you may want to find a way to [increase your income](https://www.bankrate.com/investing/passive-income-ideas/). Crypto can help you do that. If there is a certain part of your life that you wish was better, maybe this is going on more vacations or getting a faster car, that can be your purpose for investing. These goals can be achieved through consistency, and since you are already making money, you have a way to fund your investing portfolio. While it may be uncomfortable to cut back on spending until your portfolio is funded to your liking, it will be worth it when you see the returns coming in.\n' +
                '\n' +
                'The type of investing system you want to build here is a much slower one if you do not have as much time to be able to focus on the markets. A slow investing system will hold trades much longer than usual. These could be up to months of keeping your money in one asset, as long as your system says it’s still profitable to keep your money in. While you may not get the same returns you are [gaining much less risk](https://www.idfcfirstbank.com/finfirst-blogs/finance/5-methods-to-reduce-investment-risks-from-your-portfolio) and much more time to focus on your other or do the other things in your schedule. While you must still take things seriously when your money is at risk, this type of crypto investing system should not feel like a full-time job.\n'
        },
        {
            img: CryptoLifestyle3,
            title: 'Wealth From Businesses',
            id: 'Businesses',
            description: 'A water skyline that is covered in multiple large corporate buildings with water in ' +
                'front of them reflecting their bright image.',
            text: 'Cryptocurrency is made up of a much bigger part of decentralized finance, also known as DeFi, and this technology is very powerful. Since [DeFi is a developing technology](what-is-the-crypto-blockchain), there are a lot of opportunities created when figuring out how to use DeFi to improve your financial life. Alongside the creation of cryptocurrency, the blockchain was born as well. This chain of nodes makes it possible for companies, by using different types of blockchain transactions, to send and store their data securely. In a world where data is becoming increasingly important, this technology has perfectly timed its rise to blockchain adoption.\n' +
                '\n' +
                'When determining how to change your life with crypto, [starting a business with blockchain technology](business-crypto-changes) is a great opportunity. You can be a part of changing the world with crypto by providing amazing transparency and security to customers. The blockchain is in demand across multiple different fields of business and [smart contracts](https://www.investopedia.com/terms/s/smart-contracts.asp) can be used with almost any business deal imaginable. When deciding how to get started with DeFi, you need to first find a problem, and then the solution that you want to provide to the world. This could be a form of showing customers how to lend and borrow with DeFi, providing them with passive income, or anything else you might be passionate about using blockchain to improve.\n' +
                '\n' +
                'These businesses can help you gain the financial freedom that you need to change your life for the better. You will be making an impact in the world and bettering others’ lives as well. [Starting a crypto business](https://www.legalzoom.com/articles/31-blockchain-business-ideas-to-capitalize-on) is a good way to continue to be informed about more than just the asset side of the blockchain with a more hands-on approach. Connecting with other business owners in DeFi can even get you some insider knowledge that can then be used in investing to preserve your wealth and add even more to your pockets.\n'
        },
        {
            img: CryptoLifestyle4,
            title: 'Support From Hobby Investing',
            id: 'Hobby',
            description: 'A mountain skyline with a sunset in the back of it with shining orange rays coming from ' +
                'it coloring the ground orange and red.',
            text: 'The final way is just for the pure enjoyment of what crypto investing is. Crypto is an innovative and new technology and some of you may just want to invest for fun. Making money might be a goal, however, it does not determine why you invest. You may enjoy the [thrill of investing](https://www.morningstar.com/financial-advice/thrill-trade) or like to work with data. Investing in crypto is easy to do online and you can start with however much you want to. Investing as a hobby is a good way to solve problems and get rewarded for it. While investing in crypto as a hobby may seem like lazy investing, it doesn’t have to be. Hobbyists can still be in the top 1% of regular investors, however, they do it for fun more than profit. With this comes studying the art of crypto investing as well. You might want to dig deep into the reasons markets move.\n' +
                '\n' +
                'Economics is a very broad topic that can sound boring. Those in economics can use their knowledge to their advantage in crypto. Studying economics comes with a fundamental understanding of how money and environmental changes can impact how people think about financial markets like crypto. Macroeconomics, [using long-term economic data](https://www.spglobal.com/en/research-insights/featured/special-editorial/are-crypto-markets-correlated-with-macroeconomic-factors), can be suited best using data similar to inflation and GDP, and microeconomics, using short-term economic data, can be used like supply and demand. Since economics is the foundation of the economy, a hobbyist crypto investor should consider investigating more about how economics impacts the crypto markets.\n' +
                '\n' +
                'Another topic to be well acquainted with is [crypto market psychology](https://learn.bybit.com/trading/what-is-trading-psychology/). The psychology of the markets defines how investors think based on the moves of the market. We know that emotional investors tend to be greedy by holding on longer than they should, fearful by worrying about missing profit buying at the top, and then also afraid of losing more while the market is falling, selling at the bottom. These concepts can be mastered and applied in crypto investing to profit from those who invest based on emotions. Topics like [FOMO and FUD](https://seekingalpha.com/article/4487248-fomo-in-stocks) are great to not just understand but see happen in real time inside of crypto markets as well.\n'
        },
        {
            img: CryptoLifestyle5,
            title: 'Conclusive Words',
            id: 'Final',
            description: 'A golden coin with the Ethereum logo on it in black next to a pile of four other coins ' +
                'and a crypto market chart behind them.',
            text: '### Can you invest full-time?\n' +
                'Investing can become a full-time job as long as you can have the funds to do so. When investing we look for percentages, not dollars, so the best way to reach your dollar value profit is to shoot for a percentage and continue growing your portfolio.\n' +
                '\n' +
                '### Is a crypto business a good idea?\n' +
                'Crypto businesses are a great idea. It is very closely related to crypto and has a lot of demand due to being a newer technology. This business can also help fund further investing and you gain insider knowledge.\n' +
                '\n' +
                '### How to start investing?\n' +
                'Firstly you need efficient assets you would like to invest in with low risk and high profit potential. Then with these assets, you will start to look for trends in price data that can lead to profit. Once you find your trends, you can start adding them to your system and testing them out.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}