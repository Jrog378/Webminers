import CryptoFutureMain from '../../images/articleimages/CryptoFutureMain.webp'
import CryptoFuture1 from '../../images/articleimages/CryptoFuture1.webp'
import CryptoFuture2 from '../../images/articleimages/CryptoFuture2.webp'
import CryptoFuture3 from '../../images/articleimages/CryptoFuture3.webp'
import CryptoFuture4 from '../../images/articleimages/CryptoFuture4.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function IntoTheCryptoFuture() {
    const Article = [
        {
            img: CryptoFutureMain,
            title: '',
            id: 'Intro',
            description: 'A Golden Bitcoin crypto coin sitting on a top of a pile of multiple crypto coins of ' +
                'Ethereum and Litecoin that are gold and blue.',
            text: 'Crypto, when compared to other assets, is relatively new. It is a new technology that’s purpose differs from other forms of investments and that makes it unique. Rather than buying a share of a company, you are buying a digital currency that may go up in price or might fall to the ground. Ultimately it is a tricky topic and you are going to want to learn as much as you can before investing your life’s savings into it.\n' +
                '\n' +
                'Here are some topics you ought to know before putting a ton of money into crypto\n' +
                '\n' +
                '1. [Past of Crypto](#Past)\n' +
                '2. [Future of Crypto](#Future)\n' +
                '3. [How to Invest Knowing This](#Invest)\n'
        },
        {
            img: CryptoFuture1,
            title: 'Past of Crypto',
            id: 'Past',
            description: 'Three dollar bills sitting on top of a Macbook with two that are head side up and ' +
                'the other head side down on a wooden table.',
            text: 'The first ever company to introduce and create a cryptocurrency was back in 1989, called ECash from the company DigiCash. ECash was the first push to go digital with our cash, trying to make their product similar to a credit or debit card. Unfortunately, the company let go of the product 9 years later as it was no longer an [efficient asset](/efficiency) anymore. Even though this was the first crypto, you can see it was a bit ahead of its time as it was only able to get 5,000 users on board in its first 3 trial years. Other companies tried a similar [tactic as ECash](https://www.investopedia.com/terms/e/ecash.asp), however, none of them would become like the crypto giants of today.\n' +
                '\n' +
                'That was until Bitcoin came along. In the year 2008, many things came into play. [The Blockchain that we have come to recognize](https://cointelegraph.com/learn/how-does-blockchain-work-a-beginners-guide-to-blockchain-technology) mostly all over the world was put out into the world as the foundation and backend that made Bitcoin tick. Bitcoin had its slow upbringing just like other cryptos trying to get their footing in the world of finance. Three years after Bitcoins creation, we saw [Litecoin come into play](https://www.forbes.com/advisor/investing/cryptocurrency/litecoin/), hoping to be the alternative Bitcoin. Litecoin was even made based on Bitcoins code.\n' +
                '\n' +
                'More time goes by and Ethereum comes into play in 2013 and the first NFT on the Ethereum blockchain one year later. NFTs, also known as Non-Fungible Tokens, are a great way for digital artists to display their work and fund future projects. Ethereum has also been home to [decentralization](decentralization-for-crypto) and many Decentralized Applications, also known as DApps, as it is the most popular blockchain for these purposes. [DApps can serve many purposes](https://cointelegraph.com/learn/what-are-dapps-everything-there-is-to-know-about-decentralized-applications) in any field that needs them. Their purpose is to bring transparency and security to as many people that need it as possible. This innovation is a very powerful force that Ethereum can continue to push and shows how cryptocurrency changed the world for those involved with it.\n' +
                '\n' +
                'When we hit 2017 crypto had its [first giant bull run](crypto-bull-market). Cryptocurrency was booming and doing great, this was the first initial shock of it all and got attention into the field. Even though it got attention, the bull run was not forever until eventually calmed down in 2019. Shortly after in 2020, we began the largest bull run to this date reaching all-time highs that make previous highs look like tiny bumps. Everything relating to crypto was booming. That was until crypto again fell during 2022 for the long bear run that led into 2023, which is where we are at the time of writing.\n'
        },
        {
            img: CryptoFuture2,
            title: 'Future of Crypto',
            id: 'Future',
            description: 'Two stacks of silver coins and one stack of golden coins sitting on top of a piece ' +
                'of paper with writing on it along with pens.',
            text: 'When taking a look at What is the future of cryptocurrency, we must see where we are now. It seems as if we are in a gray area where the markets are slow and cannot make up their mind whether we are going up, or going down another leg. Whether crypto goes up or down from here seems almost unpredictable. This is a good thing for investors who have investing systems that help guide them through these times. During times of low volatility, large quick movements in price are more likely to happen as fewer people are there to resist them. If either direction ends up happening, most investors will panic and either [buy on the way up out of FOMO](https://en.wikipedia.org/wiki/Fear_of_missing_out) or sell on the way down from FUD. No matter what happens, prices will eventually rise higher. There has never been a [crash in crypto history](crypto-market-crashes) that has not recovered fully and continued to make all-time highs shortly after.\n' +
                '\n' +
                'When asking will cryptocurrency replace traditional currency, I believe that the best part about crypto is that it is constantly growing as an asset. In doing so it will never pass paper money in popularity, but will always be an amazing option digitally. This ability to be constantly growing is shown by the [creation of altcoins](https://mlsdev.com/blog/how-to-create-your-own-cryptocurrency) and how many different cryptos can be made while still being successful. With the growth of crypto as an asset and the blockchain in applications, we can continue to expect new cryptos to come into play that can be great contenders for the [top spots in investors\' wallets](efficiently-store-and-invest-crypto), giving us the answer to how scalable is cryptocurrency. Efficient cryptos tend to be those with the most history and have good price movements, so to make the top lists a new crypto would have to do extremely well.\n' +
                '\n' +
                'When we take a look at what is the future of decentralized finance, NFTs are undisputed as an extremely strong movement that empowers artists. As crypto recovers we can also expect the NFT market to recover as well. NFTs are at a slow patch in terms of attention but soon will pick back up again. Since [NFTs are such a unique technology](https://www.theverge.com/22310188/nft-explainer-what-is-blockchain-crypto-art-faq) that can be compared to investing in physical artwork, all it will take is a little attention from an upcoming bull market to send prices shooting up. When asking what is the future of non-fungible tokens, we can see the use of AI to create NFTs has also started to become a popular method for starting a large collection. All it takes is giving an application a few samples of your style and allowing it to recreate hundreds of unique images as if you hand-made each one.\n' +
                '\n' +
                'Businesses will start accepting cryptocurrency as payment shortly. Right now you may see a sign every blue moon that says that a restaurant takes bitcoin. Cryptocurrencies are an asset just like paper currency. While the price of crypto is going up, who wouldn\'t want a payment that would be worth more in a week when compared to regular cash? The increase in the ability to pay with crypto is a great way to gain popularity, however, some downsides we need to look out for are the increase in regulation and taxation for those who hold crypto. Governments want to crack down on crypto and are having a hard time currently getting around how decentralized it is. We will see how long this holds up in the crypto future.\n'
        },
        {
            img: CryptoFuture3,
            title: 'How to Invest Knowing This',
            id: 'Invest',
            description: 'An iPad, an open notebook, two closed notebooks, a pen, and a cup of coffee all ' +
                'sitting on a wooden table in a darkly lit room.',
            text: 'We know what has happened and what is to come, how can we start using this today? We have seen patterns of the past as the crypto market cycle tells us eventually another bull run will come. We can prepare ourselves by [creating systems](start-investing) to make the most of future opportunities. The next bull run could come and unless you have your investing system ready, you may miss out on a ton of profit. It is not worth the risk to wait any longer to start building.\n' +
                '\n' +
                'While having an investing system to catch moves in the market is great, you also have to know what assets are your best options. The market is always changing and in every bull market, there is a [new big crypto](next-big-crypto). To find this for our next profit spree, you are going to want to track efficiency and find the cryptos that have the most profit potential and the least amount of downside risk. When we build a portfolio filled with efficient cryptos, you will be able to catch all of the amazing movements they have to offer.\n' +
                '\n' +
                'Before the next bull run, you are also going to want to know how to avoid emotional investing. When your emotions get in the way, you can end up losing a ton of money. Since crypto is a volatile asset, stress levels are extremely high. We can avoid these losses by recognizing what is going on in the first place. When you study [crypto market psychology](crypto-market-psychology), you can see that a lot of investors buy at the top of the market when they are greedy for more profit and sell at the bottom when they are fearful of a larger crash. It should be the opposite and not realizing this can cost you a lot of profit and can even cause extra losses.\n' +
                '\n' +
                'Finally, to prepare for the next bull run, you are going to want to take a look at your own mental state and ways you can [improve yourself](https://www.entrepreneur.com/living/why-your-health-is-the-key-to-your-success-in-business/323244). If you are not taking care of your physical and mental health then you will not be as focused as you could be for investing. You will be more prone to mistakes and having a healthy mind fuels healthy profits.\n'
        },
        {
            img: CryptoFuture4,
            title: 'Conclusion',
            id: 'Conclusion',
            description: 'A stack of dollar bills that are rolled up with a rubber band around them sitting ' +
                'on a fan of fifty and hundred dollar bills.',
            text: '### What are the opportunities for cryptocurrency?\n' +
                'Crypto has a lot of room to grow. With the increasing number of stores and restaurants accepting cryptocurrency as payment, we can start to see more attention towards using crypto as a digital currency and not just an asset.\n' +
                '\n' +
                '### How can you protect yourself from future bull runs?\n' +
                'Due to market cycles, we know that the next bull run is coming, the only question is when. While this is almost impossible to know for sure, you are still going to want to prepare yourself. You can start by developing a crypto investing system and tracking asset efficiency to go along with your system.\n' +
                '\n' +
                '### What is decentralization?\n' +
                'Decentralization is the movement towards transparent security where users maintain the privacy that they deserve. This can be in the form of applications and assets.\n'
        },
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}