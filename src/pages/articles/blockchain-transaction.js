import BlockchainTransMain from '../../images/articleimages/BlockchainTransMain.webp'
import BlockchainTrans1 from '../../images/articleimages/BlockchainTrans1.webp'
import BlockchainTrans2 from '../../images/articleimages/BlockchainTrans2.webp'
import BlockchainTrans3 from '../../images/articleimages/BlockchainTrans3.webp'
import BlockchainTrans4 from '../../images/articleimages/BlockchainTrans4.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function BlockchainTransaction() {
    const Article = [
        {
            img: BlockchainTransMain,
            title: '',
            id: 'Intro',
            description: 'The world see from outer space with lines and dots all over it that are connected to ' +
                'each other and glowing with rings as well.',
            text: 'The blockchain has many uses and some people only look at it from an investing standpoint where all it does is allow crypto transfers to anonymously pass through. There is much more to a blockchain transaction. The blockchain uses nodes to pass information and data along a road to reach its destination. There are varying levels of security depending on what form of transaction you are making.\n' +
                '\n' +
                'Here are the different methods of a decentralized blockchain transaction for each level of security:\n' +
                '\n' +
                '1. [Cryptocurrencies](#Cryptos)\n' +
                '2. [Data Transferring](#Data)\n' +
                '3. [Decentralized Applications](#DApps)\n'
        },
        {
            img: BlockchainTrans1,
            title: 'Cryptocurrencies',
            id: 'Cryptos',
            description: 'A plant inside a jar that also has a pile of multiple Bitcoin crypto coins inside it ' +
                'next to another coin all on a gray table.',
            text: 'Every single time you buy, sell, or transfer [efficient crypto](/efficiency) or regular crypto on the blockchain, you are completing an anonymous transaction. This crypto blockchain transaction is an open transaction, also known as a public transaction, and is a type of blockchain transaction that is among individuals. There is a great priority on crypto blockchain transparency that is open to whoever wants to see it. The security of blockchain transactions for crypto is the [full representation of decentralization](decentralization-for-crypto) where nothing is hidden from anyone and the technology is open to anyone who would like to use it. Even though individual identities can be hidden with open transactions, the main point is that everything that is done with this type of blockchain transaction is fully open to the public to see.\n' +
                '\n' +
                'Bitcoin, creating the [first-ever blockchain transaction](https://cointelegraph.com/learn/what-is-bitcoin-a-beginners-guide-to-the-worlds-first-cryptocurrency), is the founding father of open transactions. With the creation of the blockchain and Bitcoin, came a new type of asset. The [cryptocurrency was beginning its evolution](into-the-crypto-future) to the decentralized blockchain transaction that we have today. Anyone who wanted to take part in the blockchain could do so with Bitcoin. Buying and selling this asset multiple times over, and even occasionally using it to purchase goods with it. We can see how blockchain transactions are improving the future of cryptocurrency from the constant growth of businesses accepting crypto as payment.\n' +
                '\n' +
                'As more cryptos began to be created, [popular cryptos](popular-cryptocurrency) were more than just Bitcoin. Efficiency started to matter as the selection of digital assets got wider. Those who wanted to make money with this technology had to [create investing systems](start-investing) that took advantage of the open transaction. Investors have even gotten attracted to seeking out the next big crypto, that will be able to provide amazing profits similar to Bitcoin. While open transactions powered the investing of cryptocurrency, the blockchain got more popular. We see today that the blockchain has reached out into different fields and spread its wings to the masses, rather than just being used for an investment.\n' +
                '\n' +
                'A downside to open transactions is the very thing that makes it so good. Since an open blockchain transaction is fully transparent, it is more likely to be hacked. The [crypto blockchain transaction](what-is-the-crypto-blockchain) future is a promising one, however, this chance of getting hacked is very difficult to get around. The most important part of preventing yourself from getting your cryptocurrency hacked is how secure you are keeping your computer. Keeping yourself safe, when trading, investing, or just working with Bitcoin, is essential to prevent your hard work and money from going down the drain. Keeping your [secret keys in a safe place](https://coinsutra.com/store-private-keys/) should be a must when using a cryptocurrency wallet or exchange. Another downside we have to keep in mind is speed. The future of crypto is only going to get faster, which is amazing, but for the time being, we do not have the capability for a fast blockchain transaction that many desire. The speed of blockchain transactions for cryptocurrency payments is also not the best, however, networks like Ethereum are constantly working to speed up their transactions for users.\n'
        },
        {
            img: BlockchainTrans2,
            title: 'Data Transferring',
            id: 'Data',
            description: 'The world from outer space but the world is all swirled up with clouds and water ' +
                'instead on continents with dots and lines.',
            text: 'When organizations need to transfer data securely, a great decentralized option for them is a closed transaction. Closed blockchain transactions take the same framework as open transitions when it comes to the structure of [blockchain technology](https://www.investopedia.com/terms/b/blockchain.asp). Where they differ comes down to those involved and sending the data and information. This could be one organization with another one that they are working with and need to transfer data securely, or one organization transferring data with itself. In the case of a single organization that would be called a private transaction and in the case of having multiple organizations, that would be called a Consortium or [Federated transaction](https://originstamp.com/blog/public-consortium-private-blockchain/).\n' +
                '\n' +
                'Closed transactions still have transparency, but not to the public. There is sometimes classified information being transferred with closed transactions that are not intended for the public. The transparency is within their own company or group of companies. Each organization sending data has the transparency to recognize other transactions happening even if they are still anonymous. These transactions are more secure from hacking than open transactions as they are privately done, rather than with the public.\n' +
                '\n' +
                'Data can also be [stored within the blockchain](https://www.geeksforgeeks.org/how-to-store-data-in-blockchain/). This data would be put away and only accessed when requested by a closed transaction. As big data becomes an issue for companies, they will begin to start looking for ways to store large amounts of information. While giving access to your data to centralized companies may not be popular for every business, the blockchain is a great place to turn to. The company will be the only one with access to the data and there will not have to be as much concern for a data breach unless performed from the inside.\n' +
                '\n' +
                'The downsides are that even though the blockchain is decentralized at its root, the technology can be used in not-so-public ways. This is not exactly a bad thing for companies but can confuse looking at the system on the outside when everything is still private. Another downside is that when working with another company, your site could be fully secure, however, a breach in the partnering company\'s security can also mean a breach in yours. All sides of a closed blockchain transaction must be doing their part to keep everyone secure. Another issue is the cost of the blockchain might be higher than alternative forms of data storage or transfer. A [cheap blockchain transaction](https://coincodex.com/article/22831/cheapest-crypto-to-transfer/) is hard to come by, but the more attention we can get toward decentralization, the cheaper it will get.\n'
        },
        {
            img: BlockchainTrans3,
            title: 'Decentralized Applications',
            id: 'DApps',
            description: 'A bunch of blocks, cubes, and squares in blue all lined up together in order with a ' +
                'slight spherical curve on the outside layer.',
            text: 'When decentralized applications, also known as DApps, need a place to put their data, they can try to use closed applications, however, they are a bit too restrictive for interacting with customers and clients. Since open transactions do not offer as much security, DApps are forced to investigate another type of blockchain transaction. Innovation of blockchain transactions for cryptocurrency dApps has provided businesses with hybrid transactions that are not quite fully transparent, while still not being fully closed off to the public. \n' +
                '\n' +
                '[Hybrid transactions](https://www.makeuseof.com/what-is-hybrid-blockchain-how-differ-from-regular-blockchain/) are a mix of the two securities in the form that there is more transparency to the public than closed transactions, yet still more secure than regular public transactions. When dealing with hybrid transactions, you may run into cases where you do not know who you are interacting with while still feeling secure from it being a hybrid transaction. If you are unsure of who the data is going to be, do not send anything sensitive because you do not know for sure how it will be used.\n' +
                '\n' +
                'Hybrid transaction technology is often used when an individual is either invited or has paid to take part in actions that involve the transfer of data using the blockchain network with organizations. These organizations can provide services that are still partially private and not available to the entire public. This can be especially useful where the solutions you are providing have an extremely high potential value, like applications that use [AI in decentralized financial](financial-ai-and-data-science), also known as DeFi, sectors.\n' +
                '\n' +
                'When working with hybrid technologies you are going to see a lot of variations in style, products, and security because every company or set of companies would want to have a unique product that provides a solution that is not already there. An example of a hybrid blockchain could be a community that thousands of people are eligible to join, however, you do not want the entire general public to have the access or transparency that comes with an open transaction. [Smart contracts](https://chain.link/education/smart-contracts) can also be set between individuals and a company, where after the agreement is finalized and conditions are met, a trustless blockchain transaction is conducted to give both sides what they have agreed upon. Since smart contracts are a new technology now and then we will see vulnerabilities being exploited to take all the money in that agreement. Decentralized blockchain transactions and the future of smart contracts should only be safer as more workers who create these contracts learn from their mistakes.\n'
        },
        {
            img: BlockchainTrans4,
            title: 'Closing Words',
            id: 'Closing',
            description: 'A square electronics chip with white lines coming out representing wires in front of ' +
                'a blue image with a lot of lines on it.',
            text: '### What is the future for the innovation of blockchain transactions for crypto?\n' +
                'The future of blockchain transactions for crypto will be faster, cheaper, and safer. The blockchain is still a developing technology and there are many areas of improvement coming.\n' +
                '\n' +
                '### What is a smart contract?\n' +
                'A smart contract is an agreement made by two parties on the blockchain. This agreement will hold onto an agreed payment until the conditions are met. Once the conditions are met, the contract will compete, providing both parties with the agreed-upon, payment, services, or products.\n' +
                '\n' +
                '### Why are cryptocurrency transfers slow?\n' +
                'Cryptocurrency blockchain transactions tend to be slower when there is a lot of traffic in the network. This can be due to high volatility in the markets or just a popular time for sending crypto.\n'
        },
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}