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
            text: 'Crypto, when compared to other assets, is relatively new. It is a new technology ' +
                'that’s purpose differs from other forms of investments and that makes it unique. Rather ' +
                'than buying a share of a company, you are buying a digital currency that may go up in ' +
                'price or might fall to the ground. Ultimately it is a tricky topic and you are going to ' +
                'want to learn as much as you can before investing your life’s savings into it.\n' +
                '\n' +
                'Here are some topics you ought to know before putting a ton of money into crypto\n' +
                '\n' +
                '1. [Crypto’s History](#History)\n' +
                '2. [Crypto’s Future](#Future)\n' +
                '3. [How to Invest Knowing This](#Invest)\n'
        },
        {
            img: CryptoFuture1,
            title: 'Crypto’s History',
            id: 'History',
            description: 'Three dollar bills sitting on top of a Macbook with two that are head side up and ' +
                'the other head side down on a wooden table.',
            text: 'The first ever company to introduce and create a cryptocurrency was back in 1989, called ' +
                '[ECash from the company DigiCash](https://en.wikipedia.org/wiki/Ecash). ECash was the first ' +
                'push to go digital with our cash, trying to make their product similar to a credit or debit card. ' +
                'Unfortunately, the company let go of the product 9 years later. Even though this was the first ' +
                'crypto, you can see it was a bit ahead of its time as it was only able to get 5,000 users on ' +
                'board in its first 3 trial years. Other companies tried a similar tactic as ECash, however, ' +
                'none of them would become like the crypto giants of today.\n' +
                '\n' +
                'That was until Bitcoin came along. In the year 2008 many things came into play. [The Blockchain]' +
                '(/articles/what-is-the-crypto-blockchain) that we have come to recognize mostly all over the ' +
                'world was put out into the world as the foundation and backend that made [Bitcoin](https://' +
                'bitcoin.org/) tick. Bitcoin had its slow upbringing just like other cryptos trying to get their ' +
                'footing in the world of finance. Three years after Bitcoins creation, we saw Litecoin come into ' +
                'play, hoping to be the alternative Bitcoin. Litecoin was even made based on Bitcoins code.\n' +
                '\n' +
                'More time goes by and Ethereum comes into play in 2013 and the [first NFT](https://nftnow.com' +
                '/art/quantum-the-first-piece-of-nft-art-ever-created/) on the Ethereum blockchain one year ' +
                'later. Then we hit 2017, crypto\'s first giant bull run. Crypto was booming and doing great, ' +
                'this was the first initial shock of it all and got attention into the field. Even though it got ' +
                'attention, the bull run was not forever and eventually came down until 2019, and again in 2020 ' +
                'for the largest one yet. During this time, decentralization was coming into businesses all over ' +
                'and NFTs started to boom as well. Crypto again fell after the bull run during 2022 for the long ' +
                '[Bear Run](/articles/what-to-do-in-bear-markets) that led to where we are now.\n'
        },
        {
            img: CryptoFuture2,
            title: 'Crypto’s Future',
            id: 'Future',
            description: 'Two stacks of silver coins and one stack of golden coins sitting on top of a piece ' +
                'of paper with writing on it along with pens.',
            text: 'We are currently in a gray area. It is very hard to tell if we are still in the previous bear ' +
                'market or a new bull market. What we can say is that the future holds profit and a ton of it. ' +
                'Never in the history of crypto has there been a crash in Ethereum or Bitcoin where prices would ' +
                'later on continue to meet brand-new all-time highs. This means that no matter how low the price ' +
                'fell, it always recovered and went higher than the previous highest price either coin has ever ' +
                'had.\n' +
                '\n' +
                'We can continue to expect new cryptos to come into play that can be great contenders for the ' +
                'top spots in investors\' wallets as great cryptos have been coming out since the beginning of ' +
                'it all. The NFT market will continue to [cycle as it has been](https://medium.com/guildfi/the-' +
                'next-stage-in-the-nft-cycle-6e8375618929) as well. Currently on a low for attention, but soon ' +
                'will pick back up again, shooting prices on NFTs up. NFTs have started to use AI to generate ' +
                'their art, turning amazing ideas for projects from text to image.\n' +
                '\n' +
                'Businesses will start accepting cryptocurrency as payment more than currently. Right now you ' +
                'may see a sign every blue moon that says that a restaurant takes bitcoin. These types of signs ' +
                'are only going to get [more popular](https://www.nbcnews.com/business/bitcoin-bitcoin-' +
                'restaurants-start-accept-cryptocurrencies-rcna21211). Cryptocurrencies are an asset just ' +
                'like currency. While the price of crypto is going up, who wouldn\'t want a payment that would ' +
                'be worth more in a week when compared to regular cash? Some downsides we need to look out for ' +
                'are the increase in regulation and taxation for those who hold crypto. Governments want to ' +
                'crack down on crypto and are having a hard time currently getting around how [decentralized ' +
                'it is](/articles/decentralization-for-crypto). We will see how long this holds up in the ' +
                'crypto future.\n'
        },
        {
            img: CryptoFuture3,
            title: 'How to Invest Knowing This',
            id: 'Invest',
            description: 'An iPad, an open notebook, two closed notebooks, a pen, and a cup of coffee all ' +
                'sitting on a wooden table in a darkly lit room.',
            text: 'We know what has happened and what is to come, how can we start using this today? We have ' +
                'seen patterns of the past. Patterns and cycles show great returns on investment when we can ' +
                'catch a bull run at the beginning. Tracking the status of what is to come can be as easy as ' +
                'once a month or more hands-on once a day with an [investing system](/articles/start-investing). ' +
                'Investing opportunities and returns will only increase as more people get involved with the ' +
                'markets as popularity grows.\n' +
                '\n' +
                'The NFT markets are adapting AI and this is something we can take advantage of right now. ' +
                'AI-generated images are a very popular business because they have so many uses. As [AI in ' +
                'financial fields](/articles/financial-ai-and-data-science) begins to be more widely adopted, ' +
                'those who were there from the start will have the upper hand. If AI images are not your thing, ' +
                'you can get into AI investing as it is still in the early stages as well, with an amazing ' +
                'potential upside if you can come up with a successful model.\n' +
                '\n' +
                'There truly is no perfect route for you to take if you want to get involved right now. The ' +
                'best thing for you to do if you do not already have an idea of what you would like to do in ' +
                'the crypto space is research. Looking into the topics you enjoy and how they interlock with ' +
                'crypto can give you ideas that others might not have explored before. You may fall into ' +
                'something you never knew was possible and that could be your way of contributing and being ' +
                'a part of the crypto movement.\n'
        },
        {
            img: CryptoFuture4,
            title: 'Conclusion',
            id: 'Conclusion',
            description: 'A stack of dollar bills that are rolled up with a rubber band around them sitting ' +
                'on a fan of fifty and hundred dollar bills.',
            text: 'Crypto has an interesting past of innovation and new technology, as well as a promising ' +
                'future. There are many things you can do now so that you can be engaged in it. If you do not ' +
                'know something, don’t feel afraid to look into it, even if there are few sources to guide you. ' +
                'Joining public forums allows you to ask questions to industry experts and get hands-on advice ' +
                'on topics that you may want to dive a bit deeper into. Be safe when getting involved and I ' +
                'hope you are as excited as I am about our future in the world of crypto.\n' +
                '\n' +
                'Consult a professional before investing.\n'
        },
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}