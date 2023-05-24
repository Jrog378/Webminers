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
            text: 'The blockchain has many uses and some people only look at it from an investing standpoint ' +
                'where all it does is allow crypto transfers to anonymously pass through. There is much more ' +
                'to a blockchain transaction. The blockchain uses nodes to pass information and data along a ' +
                'road to reach its destination. There are varying levels of security depending on what form ' +
                'of transaction you are making.\n' +
                '\n' +
                'A blockchain transaction comes in many forms, such as the following:\n' +
                '\n' +
                '1. [Open Transaction](#Open)\n' +
                '2. [Closed Transaction](#Closed)\n' +
                '3. [Hybrid Transaction](#Hybrid)\n'
        },
        {
            img: BlockchainTrans1,
            title: 'Open Transaction',
            id: 'Open',
            description: 'A plant inside a jar that also has a pile of multiple Bitcoin crypto coins inside it ' +
                'next to another coin all on a gray table.',
            text: 'Open transactions, also known as public transactions, are a type of blockchain transaction ' +
                'that is among individuals. There is a great priority on transparency and the transaction is ' +
                'open to whoever wants to see it. This is the full representation of [decentralization]' +
                '(decentralization-for-crypto) where nothing is hidden from anyone and the technology is open ' +
                'to anyone who would like to use it. Even though individual identities can be hidden with open ' +
                'transactions, the main point is that everything that is done with this type of blockchain ' +
                'transaction is fully open to the public to see.\n' +
                '\n' +
                'One of the best examples of open transactions is the buying, selling, and exchanging of ' +
                'cryptocurrencies. Buying and selling crypto is done with an open blockchain transaction and ' +
                'is the very backbone of decentralized finance. Bitcoin, [creating the first ever blockchain ' +
                'transaction](into-the-crypto-future), is the founding father of open transactions. At the ' +
                'time there were not any products similar to Bitcoin, only talk about what a blockchain could ' +
                'be. Bitcoin can be seen as the first of its kind and a movement in the right direction for ' +
                'more privacy in a digital world.\n' +
                '\n' +
                'A downside to open transactions is the very thing that makes it so good. Since an open ' +
                'blockchain transaction is fully transparent, it is more likely to be hacked. [Keeping ' +
                'yourself safe](is-cryptocurrency-safe), when trading, investing, or just working with ' +
                'Bitcoin, is essential to preventing your hard work and money from going down the drain. ' +
                'Keeping your [secret keys](https://news.bitcoin.com/how-to-safely-store-your-wallet-recovery-' +
                'phrase/) in a safe place should be a must when using a cryptocurrency wallet or exchange.\n'
        },
        {
            img: BlockchainTrans2,
            title: 'Closed Transaction',
            id: 'Closed',
            description: 'The world from outer space but the world is all swirled up with clouds and water ' +
                'instead on continents with dots and lines.',
            text: 'Closed blockchain transactions take the same framework as open transitions when it comes ' +
                'to the structure of blockchain technology. Where they differ comes down to those involved and ' +
                'sending the data and information. Closed transactions are done within organizations. This could ' +
                'be one organization with another one that they are working with and need to transfer data ' +
                'securely, or one organization transferring data with itself. In the case of a single ' +
                'organization that would be called a private transaction and in the case of having multiple ' +
                'organizations, that would be called a Consortium or [Federated transaction](https://arxiv.' +
                'org/pdf/2101.12428v1.pdf).\n' +
                '\n' +
                'Closed transactions still have transparency, but not transparency to the public. There is ' +
                'sometimes classified information being transferred with closed transactions that are not ' +
                'intended for the public. The transparency is [within their own company or group of companies]' +
                '(https://www.ibm.com/topics/blockchain-for-business). Each organization sending data has the ' +
                'transparency to recognize other transactions happening even if they are still anonymous. These ' +
                'transactions are more secure from hacking than open transactions as they are privately done, ' +
                'rather than with the public.\n' +
                '\n' +
                'The downsides are that even though the blockchain is [decentralized at its root](https://www.' +
                'ciesin.columbia.edu/decentralization/English/General/Different_forms.html), the technology ' +
                'can be used in not-so-public ways. This is not exactly a bad thing for companies but can ' +
                'confuse looking at the system on the outside when everything is still private. Another ' +
                'downside is that when working with another company, your site could be fully secure, however, ' +
                'a breach in the partnering company\'s security can also mean a breach in yours. All sides of ' +
                'a closed blockchain transaction must be doing their part to keep everyone secure.\n'
        },
        {
            img: BlockchainTrans3,
            title: 'Hybrid Transaction',
            id: 'Hybrid',
            description: 'A bunch of blocks, cubes, and squares in blue all lined up together in order with a ' +
                'slight spherical curve on the outside layer.',
            text: 'A hybrid transaction is not quite fully transparent, while at the same time not being fully ' +
                'closed off to the public. Hybrid blockchain transactions are a mix of both open and closed ' +
                'transactions mixed to create a great technology that is secure and offers its features to the ' +
                'public. Hybrid transaction technology is often used when an individual is either invited or ' +
                'paid to join the blockchain network with organizations. These organizations can provide ' +
                'services that are still private and not available to the entire public. This can be especially ' +
                'useful where the solutions you are providing have an extremely high potential value, like ' +
                '[AI in finance](financial-ai-and-data-science).\n' +
                '\n' +
                'When working with hybrid technologies you are going to see a lot of variations in style, ' +
                '[products](https://builtin.com/blockchain/blockchain-applications), and security because every ' +
                'company or set of companies would want to have a unique product that provides a solution that ' +
                'is not already there. An example of a hybrid blockchain could be a community that thousands of ' +
                'people are eligible to join, however, it is not as easy to get access to as a regular public ' +
                'blockchain transaction.\n' +
                '\n' +
                'Hybrid transactions are a mix of the two securities in the form that there is more ' +
                'transparency to the public than closed transactions, yet still more secure than regular ' +
                'public transactions. When dealing with hybrid transactions, you may run into cases where ' +
                'you do not know who you are interacting with while still feeling secure from it being a hybrid ' +
                'transaction. If you are unsure of who the data is going to be, do not send anything sensitive ' +
                'because you do not know for sure how it will be used.\n'
        },
        {
            img: BlockchainTrans4,
            title: 'Closing Words',
            id: 'Closing',
            description: 'A square electronics chip with white lines coming out representing wires in front of ' +
                'a blue image with a lot of lines on it.',
            text: 'Many great technologies come with the [blockchain](what-is-the-crypto-blockchain) and ' +
                'exploring them is a must if you are trying to stick with the times and recent innovations. Keep ' +
                'in mind that your data safety should be your number one priority because you never know who ' +
                'might be trying to get something from you without you even knowing it. \n' +
                '\n' +
                'When using open blockchain transactions, make sure that you do your research to know how ' +
                'transparent they are, and even though they embody decentralization, you should still watch ' +
                'what you are doing. Closed blockchain transactions are a great way for organizations to ' +
                'transfer data with blockchain technology while keeping maximum security. To meet right in ' +
                'the middle hybrid transactions have a little bit of both.\n'
        },
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}