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
            text: 'The web3 movement is the new wave of innovation. We have exciting new technology that comes ' +
                'and goes where there is a lot of hype for it, but it soon dies out. VR is amazing and when ' +
                'VR-related things happened, everyone wanted a part of it. VR is still great technology and ' +
                'will have a promising future, yet it’s had some ups and downs. Crypto is another part of the ' +
                'web3 movement that is just getting started and there are many ways that it is getting involved ' +
                'with improving people’s lives.\n' +
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
            text: 'Investing in an asset like a company gives you great [volatility to make a profit](what-impacts-' +
                'crypto-volatility) and is a great way to support a company you like by purchasing a share of it. ' +
                'While investing is great, to make money you still have to look into the complexities of the ' +
                'company and predict how well they are going to sell their product. Along with that, you will ' +
                'have to pay attention to the News to see what is going on with the company in the public\'s eye. ' +
                'If you want a physical asset, like gold, that does not suffer from these traits and is only ' +
                'impacted by the markets and economy, then you have to risk volatility and deal with less profit. ' +
                'Crypto on the other hand is the best of both worlds.\n' +
                '\n' +
                'Crypto gives investors the chance to buy a digital asset that is not connected to a centralized ' +
                'share of a company. Bad management decisions are not a chance in crypto, however, there are still ' +
                'some things to look out for. When investing in cryptocurrency, you have to use data to determine ' +
                'when it is a good time to buy and the news still has a great impact on the market. When [news ' +
                'articles](news-in-the-crypto-market) come out that are negative about crypto, expect markets to ' +
                'drop. Even when there is news that just barely relates to crypto, people can panic and sell ' +
                'their coins.\n' +
                '\n' +
                'The reason crypto is a part of web3 is because it is one of the first popular versions of ' +
                'digital currency. Virtual Currencies, much like credit or debit cards, [are very easy to store]' +
                '(https://www.investopedia.com/terms/v/virtual-currency.asp) and secure so you do not have to ' +
                'worry about getting robbed in public. Cash is very easy to take from you since it is just paper. ' +
                'Crypto represents security. You also don’t have to choose a risky crypto. There are alternatives, ' +
                'like stablecoins, that will pay you interest, as if a bank would, to store your money in their ' +
                'crypto.\n'
        },
        {
            img: WebCrypto2,
            title: 'Web3 Blockchain',
            id: 'Blockchain',
            description: 'A wooden hourglass with all the sand on the top next to a stack of one hundred ' +
                'dollar bills placed in a fan shape on a table.',
            text: '[The blockchain](what-is-the-crypto-blockchain) is a powerful technology that fuels crypto. ' +
                'This blockchain technology is in charge of transferring cryptocurrency from one person to another ' +
                'and making crypto trading and investing possible. The blockchain is also very secure. This very ' +
                'secure way of moving around data has caught wind in business for its uses. In the world of data, ' +
                'being able to store and move large quantities of data is very important.\n' +
                '\n' +
                'As hackers and cyber-attacks [become more common](https://www.npr.org/2021/06/08/1004493917/the-' +
                'reason-behind-the-surge-in-cyberattacks), the need for the blockchain becomes more intense. ' +
                'People love their security and businesses who have been hacked before know how bad it can get. ' +
                'Randoms held over businesses heads can be held where if they do not pay up the hackers can ' +
                'release trillions of pieces of data out into the public. [Blackmail](https://www.bbc.com/news/' +
                'newsbeat-23724703) can occur where if a company is doing something illegal, a hacker can gain ' +
                'evidence and threaten to turn them in unless they pay them. There are so many different reasons ' +
                'for privacy to become more needed than ever in the future that the blockchain has no other choice ' +
                'but to be adopted by companies seeking security.\n' +
                '\n' +
                'Even though the blockchain is a great method of security, current drawbacks have to be overcome ' +
                'before rapid growth can continue to be pursued. At this time the [blockchain is very slow](https:' +
                '//www.hyperledger.org/learn/publications/blockchain-performance-metrics) compared to other ' +
                'methods of storing or transferring data, making it not very relevant where a customer may become ' +
                'impatient. The world wants everything to be faster, internet, cable, even food service. Slow data ' +
                'is not very attractive to companies until the blockchain can [speed things up](https://www.forbes.' +
                'com/sites/piasilva/2021/06/01/speed-is-the-most-important-thing-for-your-business-profitability---' +
                'heres-why/?sh=7dd0ae3969d2). The blockchain is also very and not trusted as well as it may ' +
                'deserve. Companies see new tech that they do not trust and decide it would be less risky for them ' +
                'just to try and recreate that security in their way.\n'
        },
        {
            img: WebCrypto3,
            title: 'Web3 Decentralization',
            id: 'Decentralization',
            description: 'A piece of paper with writing on it that has a pen and an iphone showing a candle ' +
                'chart of the crypto markets resting on top.',
            text: 'Web3 also has the [topic of decentralization](decentralization-for-crypto). Decentralization ' +
                'is the motivation to move towards having our rights outside of central control. An example would ' +
                'be our right to privacy. Many governments use all types of strategies to spy on those in their ' +
                'country, even tracking the things you buy in person and online. Crypto helps give consumers a ' +
                'method of privacy in the digital world from these governments and hackers that may be trying to ' +
                'steal their money. \n' +
                '\n' +
                'Central banks can also fail leaving those who put their hard-earned money in them without ' +
                'anything. Even though crypto exchanges can fail it is always advised to keep your crypto in a ' +
                'wallet after using an exchange until you plan to make another transaction or trade. These ' +
                'transactions and trades are a secure way of transferring money to and from someone else on the ' +
                'market for assets. \n' +
                '\n' +
                'Another way of transferring these assets is with smart contracts. Smart contracts are the ' +
                'decentralized way to make business deals where both sides are kept secure from each other. ' +
                'Neither one can get scammed as there are no middlemen. When a smart contract is conducted, there ' +
                'are a set of rules that have to be met before payment is exchanged for products or services. ' +
                'With these contracts, as soon as these rules are met, both sides will get what they agreed to by ' +
                'a [transaction over the blockchain](blockchain-transaction).\n'
        },
        {
            img: WebCrypto4,
            title: 'Final Comments',
            id: 'Final',
            description: 'A blue brain shaped thing that has all these orange wires and lines going around it in ' +
                'front of a circuit board background.',
            text: 'Crypto has a lot of uses and has the potential to grow. Web3 is on its way and not slowing ' +
                'down for anyone. The web3 crypto movement might not be very strong at the moment but things will ' +
                'begin to pick up. Crypto technology has come a long way and still has many improvements that need ' +
                'to be made. When these are done, there will be tons of companies waiting to accept them into ' +
                'their innovative strategies. The Crypto Investing industry is slowly gaining popularity due to ' +
                'the similarities between stocks and physical assets. The blockchain will continue to be improved, ' +
                'becoming more secure and faster. Finally, security and privacy will continue to grow as the ' +
                'demands for decentralization increase. Web3 crypto has a big future ahead of us.\n' +
                '\n' +
                'Consult a professional before investing.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}