import WebCryptoMain from '../../images/articleimages/WebCryptoMain.webp'
import WebCrypto1 from '../../images/articleimages/WebCrypto1.webp'
import WebCrypto2 from '../../images/articleimages/WebCrypto2.webp'
import WebCrypto3 from '../../images/articleimages/WebCrypto3.webp'
import WebCrypto4 from '../../images/articleimages/WebCrypto4.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function Web3CryptoGrowth() {
    const Article = [
        {
            img: WebCryptoMain,
            title: '',
            id: 'Intro',
            description: 'The world from space that is dimly lit with all it’s lights showing up from cities ' +
                'and the outline of the sun in the background.',
            text: 'The web3 movement is the new wave of innovation. We have exciting new technology that comes and goes where there is a lot of hype for it, but it soon dies out. VR is amazing and when VR-related things happened, everyone wanted a part of it. VR is still great technology and will have a promising future, yet it’s had some ups and downs. Crypto is another part of the web3 movement that is just getting started and there are many ways that it is getting involved with improving people’s lives.\n' +
                '\n' +
                'Here are some examples of how web3 crypto will continue to grow:\n' +
                '\n' +
                '1. [Web3 Crypto Investing](#Investing)\n' +
                '2. [Web3 Blockchain](#Blockchain)\n' +
                '3. [Web3 Decentralization](#Decentralization)\n'
        },
        {
            img: WebCrypto1,
            title: 'Web3 Crypto Investing',
            id: 'Investing',
            description: 'Five one hundred dollar bills all stacked on top of each other in a fan where just ' +
                'all the bottom right corners are showing.',
            text: 'When you are [investing in efficient cryptocurrencies](/efficiency), it is very different from other types of assets. Investing in an asset like a company gives you great volatility to make a profit and is a great way to support a company you like by purchasing a share of it. While investing is great, to make money you still have to look into the [complexities of the company](https://www.investopedia.com/articles/basics/06/invest1000.asp) and predict how well they are going to sell their product. Along with that, you will have to pay attention to the news to see what is going on with the company in the public\'s eye. If you want a physical asset, like gold, that does not suffer from these traits and is only impacted by the markets and economy, then you have to risk volatility and deal with less profit. Crypto on the other hand is the best of both worlds.\n' +
                '\n' +
                'Crypto gives investors the chance to buy a digital asset that is not connected to a centralized share of a company. Bad business decisions are not a worry in crypto, however, there are still some things to look out for. When investing in cryptocurrency, you have to use data to determine when it is a good time to buy and the news still has a great impact on the market. When [news articles come out](news-in-the-crypto-market) that are negative about crypto, expect markets to drop. Even when there is news that just barely relates to crypto, [people can panic and sell](https://www.sofi.com/learn/content/what-does-fud-mean/) their coins.\n' +
                '\n' +
                'Another aspect of crypto investing is how you identify which assets are good and bad. The best cryptocurrencies to invest in for the future are those that are the most efficient. This means that there is low downside risk and high upside potential. When you find a cryptocurrency that is efficient enough, you can pair it with an investing system and you’ll be on your way. Altcoins are also something to look out for as they have higher volatility. [Altcoins with higher volatility](what-is-an-altcoin) are not necessarily a good thing because even though they have a higher profit potential, they also gain much more of a downside risk, which may make them less efficient than usual.\n' +
                '\n' +
                'Since cryptocurrencies are built [on top of the blockchain](what-is-the-crypto-blockchain), they are a powerful moving force in web3. With the first-ever blockchain being Bitcoin, there is much to come in terms of improvements and security. This push for decentralized finance, also known as DeFi, shows how Web3 is changing the way we use cryptocurrencies. [Virtual Currencies](https://www.fool.com/investing/stock-market/market-sectors/financials/cryptocurrency-stocks/virtual-currency/), much like credit or debit cards, are very easy to store and secure so you do not have to worry about getting robbed in public. Crypto represents security.\n'
        },
        {
            img: WebCrypto2,
            title: 'Web3 Blockchain',
            id: 'Blockchain',
            description: 'A wooden hourglass with all the sand on the top next to a stack of one hundred ' +
                'dollar bills placed in a fan shape on a table.',
            text: 'Crypto may be a part of the blockchain, but the blockchain is much more than just cryptocurrency markets. Blockchain technology has multiple [different types of transactions](blockchain-transaction) that each provides web3 security in its way. The base level is mainly for cryptocurrency and the most secure is for data transfer within a company. A hybrid version of these two is what influences the future of Web3 and the impact on businesses that it has. These hybrid transactions are built for decentralized applications, also known as DApps, to give security to businesses working with individuals to provide them with products and services.\n' +
                '\n' +
                'These [DApps can tend to focus](https://decrypt.co/resources/what-are-decentralized-applications-dapps) on cryptocurrency and decentralized finance, but that does not mean that the blockchain cannot help elsewhere. We can see how blockchain is revolutionizing the gaming industry by providing more security for players with their data. Rather than companies being able to use it however they want to make a profit or have the chance of getting all user data stolen in a data breach, the blockchain can help with transparency, security, and privacy control. Decentralization in businesses will only become more popular along with blockchain innovation.\n' +
                '\n' +
                'As hackers and cyber-attacks become more common, the need for the blockchain becomes more intense. People love their security and businesses who have been hacked before know how bad it can get. Randoms held over businesses heads can be held where if they do not pay up the hackers can release trillions of pieces of data out into the public. Blackmail can occur where if a company is doing something illegal, a hacker can gain evidence and threaten to turn them in unless they pay them. There are so many different reasons for privacy to become more needed than ever in the future that the blockchain has no other choice but to be adopted by companies seeking security.\n' +
                '\n' +
                'Even though the blockchain is a great method of security, current drawbacks have to be overcome before rapid growth can continue to be pursued. At this time the [blockchain is very slow](https://bernardmarr.com/the-5-big-problems-with-blockchain-everyone-should-be-aware-of/) compared to other methods of storing or transferring data, making it not very relevant where a customer may become impatient. The world wants everything to be faster, internet, cable, even food service. Slow data is not very attractive to companies until the blockchain can speed things up. The blockchain is also very and not trusted as well as it may deserve. Companies see new tech that they do not trust and decide it would be less risky for them just to try and recreate that security in their way.\n'
        },
        {
            img: WebCrypto3,
            title: 'Web3 Decentralization',
            id: 'Decentralization',
            description: 'A piece of paper with writing on it that has a pen and an iphone showing a candle ' +
                'chart of the crypto markets resting on top.',
            text: 'The main movement behind web3 is a [world with more decentralization](decentralization-for-crypto). Decentralization is the push toward having our privacy rights outside of a central entity. Many governments and companies use all types of strategies to spy on those in their country, even tracking the things you buy in person and online. Crypto helps give consumers a method of privacy in the digital world.\n' +
                '\n' +
                'Decentralization has brought the rise of DeFi and its impact on cryptocurrencies. We have [stablecoins](are-stablecoins-stable) that we can put money into rather than the banking system. Central banks have failed in the past leaving those who put their hard-earned money in them without anything. Even though crypto exchanges can fail it is always advised to keep your [crypto in a wallet](https://www.techtarget.com/searchsecurity/definition/crypto-wallet-cryptocurrency-wallet) after using an exchange until you plan to make another transaction or trade. These transactions and trades are a secure way of transferring money to and from someone else on the market for assets.\n' +
                '\n' +
                'Another way of transferring these assets is [with smart contracts](https://cointelegraph.com/learn/what-are-smart-contracts-a-beginners-guide-to-automated-agreements). Smart contracts are the decentralized way to make business deals where both sides are kept secure from each other. Neither one can get scammed as there are no middlemen. When a smart contract is conducted, there are a set of rules that have to be met before payment is exchanged for products or services. With these contracts, as soon as these rules are met, both sides will get what they agreed to by a transaction over the blockchain.\n' +
                '\n' +
                'When the world is [more decentralized](https://www.toppr.com/guides/fundamentals-of-economics-and-management/organising/advantages-and-disadvantages-of-decentralisation/), this not only creates better security for individuals but also for groups of people of all sizes. Large companies can benefit from more security and smaller communities transferring goods, services, and payments can as well. When a group of people can come together with a common goal, we can see how influential it can be over our future.\n'
        },
        {
            img: WebCrypto4,
            title: 'Final Comments',
            id: 'Final',
            description: 'A blue brain shaped thing that has all these orange wires and lines going around it in ' +
                'front of a circuit board background.',
            text: '### What is the impact of blockchain on the cryptocurrency industry?\n' +
                'The blockchain was created alongside the first-ever cryptocurrency, Bitcoin. This growth of technology together is fundamental, as we cannot have one without the other. The blockchain technology that runs cryptocurrency affects it based on speed, price, and usability and the improvement of the blockchain will only make all of these more convenient for users.\n' +
                '\n' +
                '### What is decentralization?\n' +
                'Decentralization is the movement away from a central entity controlling how much privacy we have. Large companies use our data for their profits and some users do not even know it. The fact that everything about you can be sold to the highest bidder is quite unsettling. Decentralization is the push to give privacy back to internet users.\n' +
                '\n' +
                '### What is the future of DeFi?\n' +
                'The future of DeFi has much to come. It is still a developing field and has lots of room to grow. DeFi has a powerful place in the investing world with cryptocurrencies and has started shifting into the world of business. The finance needs of companies should be private and DeFi is on its way to providing this security to anyone who needs it.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}