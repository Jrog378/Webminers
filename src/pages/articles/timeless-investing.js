import TimelessCryptoMain from '../../images/articleimages/TimelessCryptoMain.webp'
import TimelessCrypto1 from '../../images/articleimages/TimelessCrypto1.webp'
import TimelessCrypto2 from '../../images/articleimages/TimelessCrypto2.webp'
import TimelessCrypto3 from '../../images/articleimages/TimelessCrypto3.webp'
import TimelessCrypto4 from '../../images/articleimages/TimelessCrypto4.webp'
import TimelessCrypto5 from '../../images/articleimages/TimelessCrypto5.webp'
import TimelessCrypto6 from '../../images/articleimages/TimelessCrypto6.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function TimelessInvesting() {
    const Article = [
        {
            img: TimelessCryptoMain,
            title: '',
            id: 'Intro',
            description: 'Pink piggy bank that has a coin inside of its slot surrounded by ten other bronze ' +
                'colored coins while on two of them on a table.',
            text: 'Trends come and go however, crypto is here to stay. Trends are all over, yet crypto will ' +
                'continue to be a large part of many people\'s lives and businesses. There will be bull and bear ' +
                'markets, but the underlying technology will always be popular. Crypto is innovative and ' +
                'relatively new when compared to other assets. This is not stopping it from being a big part of ' +
                'the investment scene. Crypto can be very eye-catching to some and many people still believe ' +
                'that investing in cryptocurrency is a scam when it is an extremely real and profitable field.\n' +
                '\n' +
                'Crypto is going to be here forever and here are some of the reasons it will be timeless:\n' +
                '\n' +
                '1. [Digital Money](#DigitalMoney)\n' +
                '2. [Market Recovery](#MarketRecovery)\n' +
                '3. [Crypto Community](#CryptoCommunity)\n' +
                '4. [Assets Beat Inflation](#AssetsVsInflation)\n' +
                '5. [Crypto Brings Other Opportunities](#OtherOpportunity)\n'
        },
        {
            img: TimelessCrypto1,
            title: 'Digital Money',
            id: 'DigitalMoney',
            description: 'A bunch of golden coins in three different stacks all with the Bitcoin logo on them and ' +
                'one coin in front with the logo on it.',
            text: 'Crypto, as you may know, is a digital asset. With the world going online, there is more need for money to be used digitally. Before crypto, the main method of payment online was with credit and debit cards, and if you were bold, wire transfers straight from your bank account. There should be more than only a way to pay for goods and services online. These types of payments should be subjective and up to the buyer to decide how they would like to pay rather than being forced to use the same old cards they would for in-person purchases. Crypto is an alternative payment method that gives power back to the people and not to some bank that is going to use your money for their means.\n' +
                '\n' +
                '[Credit card hacks are evermore abundant](https://www.techtarget.com/whatis/feature/How-do-cybercriminals-steal-credit-card-information) and when people take your debit card information, that money is not secured by you. bank. It is considered an authorized purchase if they use your pin, leaving you with no way to get back your money. As the online market becomes less secure we need to fight back with an extremely secure form of payment, like cryptocurrencies. Crypto provides security by using blockchain technology for transactions and sends currency [by using peer-to-peer transactions](blockchain-transaction) with blockchain nodes.\n' +
                '\n' +
                'Crypto\'s whole purpose is based on the digital transfer of money. By being fully focused on this one area, it is a much faster form of getting money from one person’s hands to another when compared to a regular bank. When sending crypto, you are not required to request permission from anyone but yourself, and you don’t need to worry about your crypto wallet not being able to handle moving that many funds at once, whereas banks do not always have the amount in your bank account on hand. When you put your money [into the crypto blockchain](what-is-the-crypto-blockchain), it stays there. Unlike banks, the blockchain will not use your money for other means and will continue to store your crypto as long as you would like.\n' +
                '\n' +
                'Cryptocurrency is also easy to [store in multiple locations](https://www.kubera.com/blog/managing-multiple-crypto-wallets) if you do not want too much sitting around in one place. You are allowed as many crypto wallets as you would like. It could be just one and it could be a thousand. As long as you keep the secret keys to access your crypto wallet, that money is secure. If you are afraid of investing in a volatile cryptocurrency that is always changing its price, you can look into using stablecoins. As long as you do your research to [avoid unstable stablecoins](are-stablecoins-stable), then your money is safely locked in at being valued the same as the amount you put into that coin.\n'
        },
        {
            img: TimelessCrypto2,
            title: 'Market Recovery',
            id: 'MarketRecovery',
            description: 'A bunch of stars in the sky spinning in circles to make multiple different rings of ' +
                'stars under the blue space filled sky.',
            text: 'If you are concerned about [the volatility of crypto](what-impacts-crypto-volatility), but still want to invest in something with a high-profit potential, there is still some hope that your money will be safe in the long run. When we look at the price history of popular cryptos like Bitcoin or Ethereum, we can see that there has never been a dip or crash that the markets have not recovered from and reached new all-time price highs. This means that no matter how low the market will go, statistically the market will return to even higher than it was before. This makes crypto a great investment for long-term profits since it will always continue to rise in value.\n' +
                '\n' +
                'When you put your money in crypto, the [short-term value may move around a lot](https://www.usatoday.com/story/sponsor-story/ascend-agency/2022/11/15/why-do-crypto-prices-fluctuate-so-much/10697392002/), but you can be sure that eventually, it will be worth much more than you put in. If you are constantly nervous about what is going on with your investments, after you buy crypto you might be best off just not looking at all so that you don’t even notice the small changes, only the big profits over time. [The psychology of the market](​​crypto-market-psychology) is designed to make you feel emotions and make decisions based on them. That is exactly how you will give away your profits to someone else. When the market is low, you will want to sell when this is the best time to buy more. When the market is at its top you are going to want to buy more and get more profit, when you should be selling off your balance.\n' +
                '\n' +
                'Avoiding emotional investing can be as easy as [setting up an investing system](start-investing) to help you through emotional times in the market. Knowing that your system says that you bought at a good time can reassure you that no matter what happens in the market, your data states that it will eventually be profitable for you.\n' +
                '\n' +
                'Since the market comes in cycles you can use this system to [identify bull markets](crypto-bull-market). These markets will continually make you profit in the long term and have great movements to catch a ride on for investors that do not want to have to do a lot of maintenance. Once you buy before a bull market, you can just leave your money in if you would like, then once the bull market ends and it’s time for a [bear market, you can sell your crypto](what-to-do-in-bear-markets) into cash and decide what you are going to do with it until your next profitable movement.\n'
        },
        {
            img: TimelessCrypto3,
            title: 'Crypto Community',
            id: 'CryptoCommunity',
            description: 'A silver Apple Macbook on a wooden desk next to a notebook that is folded open with a ' +
                'black pen resting on one of the pages.',
            text: 'A community of engaged individuals helps keep whatever they support still moving. Crypto has a very strong community of investors, traders, and other forms of buyers. This causes a strong network of people in the different categories of cryptocurrency. There is a place for everyone and it does not just have to be able to make a ton of money, even if this is the outcome for some of the members.\n' +
                '\n' +
                'The crypto community works together as a whole and [pushes to keep the decentralization](decentralization-for-crypto) that crypto set out to protect. Crypto is a symbol of privacy and security, with [a community that stands for it](https://beincrypto.com/learn/crypto-communities/). Among the general crypto community, there are smaller ones within it. Different cryptocurrencies including main coins like Bitcoin and Ethereum have large amounts of people who enjoy talking about why they prefer the crypto they do. These groups also share the new technologies and innovations that their favorite cryptocurrency strives to create.\n' +
                '\n' +
                'Below those groups. [Altcoins have their communities](what-is-an-altcoin) as well. Even though they are smaller than the big cryptos, this does not mean that they are any less involved with each other. [New projects and developing cryptocurrencies](https://cryptonews.com/news/new-cryptocurrency.htm) depend on their communities for support as they might not have as many investors. This support goes two ways where the crypto treats its investors well and the investors continue to stick with the crypto.\n' +
                '\n' +
                'Communities can be on social media or forums. More general groups can be just for investors or day traders and specific groups can have as little as 20 members for a crypto just trying to start. There are lots of different-sized communities with different purposes for anyone to join in crypto. You can be in as many as you would like or as few. These communities will continue to connect, helping crypto as a whole maintain its timelessness.\n'
        },
        {
            img: TimelessCrypto4,
            title: 'Assets Beat Inflation',
            id: 'AssetsVsInflation',
            description: 'A black board with a bunch of white scratches on it from previous writing that has the ' +
                'word inflation written on it in chalk.',
            text: 'Inflation is the sole reason that we cannot just leave money sitting around forever, as [it will continue to lose its value](https://www.investopedia.com/terms/i/inflation.asp). Rather than just letting the value of our money disappear on us, we have to find a way to increase its value at least as much as inflation if we want to continue to preserve its worth. Even better if we can find a way to increase its value more than inflation decreases it.\n' +
                '\n' +
                'Since the value of the dollar decreases, the price of goods increases. Fortunately for investors, this includes asset prices as well. When you buy an asset like watches, unique cars, real estate, and crypto, all of them will go up in value as inflation devalues the dollar. Investors can use this fact and put their money into an investment making their money unaffected by inflation. The wealthy will do this the most out of anyone because a percentage of their [net worth is worth a lot more](https://www.cnbc.com/2021/05/12/net-worth-to-be-considered-wealthy-in-2021.html) than a percent of other people’s net worth.\n' +
                '\n' +
                '[Preserving money’s value with assets](https://www.usbank.com/wealth-management/financial-perspectives/financial-planning/wealth-preservation.html%20.html) is not just for rich people. Crypto has a very low entry-level, which means that you can put any amount of money into the markets. Assets like cryptocurrency are a great option to beat inflation. They will continue to increase in value faster than the dollar decreases and many times will even outperform the interest you would get from savings accounts with a regular bank.\n' +
                '\n' +
                'As [money continues to be printed](https://www.thebalancemoney.com/is-the-federal-reserve-printing-money-3305842), the value of the dollar loses value and the value of your cryptocurrency will only begin to be valued higher. This will make your assets worth more than the amount of money you put in. When money is given back to the public, like stimulus checks or lower interest rates for borrowing money, the markets will continue to increase in value.\n'
        },
        {
            img: TimelessCrypto5,
            title: 'Crypto Brings Other Opportunities',
            id: 'OtherOpportunity',
            description: 'The earth in space with a bunch of lines and dots connecting to each other to build a ' +
                'network with stars all above the planet.',
            text: 'The innovation of cryptocurrency brought us to the world of the blockchain. With the [start of the blockchain](https://hbr.org/2017/02/a-brief-history-of-blockchain), we are also given other technologies that are not just cryptocurrencies. These technologies will help maintain crypto as a whole while the blockchain becomes more popular. As the blockchain starts to have more uses, crypto will start gaining popularity, as crypto is a single part of the blockchain as a whole.\n' +
                '\n' +
                'NFTs are a way for digital artists to develop their artwork that can be sold over again multiple times, each time providing money for the original creator. These NFTs can also be used in video games as rewards or skins for characters, giving benefits back to members of their community. These NFTs can be worth a ton of money and considered long-term assets, just like investing in hand-painted or made art would be.\n' +
                '\n' +
                'The blockchain also creates a safe place to conduct business with smart contracts that use crypto as payment for goods or services. Once the terms are met, instantly both sides get what they agreed to. The blockchain can store and transfer data, creating an avenue for applications and company services.\n' +
                '\n' +
                'As companies begin to adopt the blockchain into their ways of business, it will be very difficult to get rid of. Unless it is causing serious issues, the blockchain solution can be expected to remain inside this company until something better comes along. While the blockchain is used in these companies\' applications and NFT networks, crypto will continue to last longer than ever.\n'
        },
        {
            img: TimelessCrypto6,
            title: 'Ending Words',
            id: 'Ending',
            description: 'A white clock with a black encasing sitting on a black desk with a laptop, paper, and a ' +
                'pen jar filled with pens next to it.',
            text: 'Crypto is a timeless investment as a digital currency that is secure and a viable method for paying with or transferring large quantities of money. It is also all kept in your wallet instead of in a bank, while still making more returns than savings account interest could. Crypto markets historically have recovered every time they crash and continue to hit new highs. With a strong community and other opportunities through NTFs and the blockchain, crypto will be able to continue to maintain support from those involved. All of these reasons contribute to the fact that crypto is not going away anytime soon. If you are interested in finding out a good time to buy crypto long-term, visit webminers insights for our indicators to help identify when is a statistically good time to buy and sell crypto.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}