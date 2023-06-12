import DecenterMain from '../../images/articleimages/DecenterMain.webp'
import Decenter1 from '../../images/articleimages/Decenter1.webp'
import Decenter2 from '../../images/articleimages/Decenter2.webp'
import Decenter3 from '../../images/articleimages/Decenter3.webp'
import Decenter4 from '../../images/articleimages/Decenter4.webp'
import Decenter5 from '../../images/articleimages/Decenter5.webp'
import Decenter6 from '../../images/articleimages/Decenter6.webp'
import React from "react";
import ArticleFormat from "@/components/format";
import {useRouter} from "next/router";

export default function DecentralizationForCrypto() {
    const Article = [
        {
            img: DecenterMain,
            title: '',
            id: 'Intro',
            description: 'An orange glowing cube that is surrounded by other small dark gray cubes stuck to it ' +
                'that form lines of cubes on both sides.',
            text: 'The blockchain has been around since 2008 and is at the forefront of decentralization. This movement towards privacy is constantly growing and becoming more innovative as time goes on. Decentralization is the movement away from traditional ways of a central power deciding what defines our privacy rights and what doesn’t. I’m sure that you can agree that someone using your data for money without you even knowing about it should never happen, and the movement of the blockchain is to ensure that problems like that happen less.\n' +
                '\n' +
                'The blockchain can be split up into 5 different categories of decentralization and they are the following:\n' +
                '\n' +
                '1. [Finance](#Finance)\n' +
                '2. [Applications](#Apps)\n' +
                '3. [Search Engines](#SearchEngines)\n' +
                '4. [Messaging](#Messaging)\n' +
                '5. [Personal Information](#Info)\n'
        },
        {
            img: Decenter1,
            title: 'Finance',
            id: 'Finance',
            description: 'Two stacks of twenty dollar bills on top of each other with the face side up and an ' +
                'iPhone on top with an orange calculator app.',
            text: 'Decentralized finance, also known as DeFi, helps individuals keep their money safe and private. In a time of crisis, which has happened before, banks are very vulnerable because people want to take out their money when the banks. When people panic and try to take out all their money, banks can fail due to not having the amount everyone is asking for. The DeFi movement is great as it solves a lot of the issues caused by the banking system and gives the power back to the people in terms of safely storing their money. Crypto wallets use blockchain technology to transfer funds in and out, [efficiently storing users\' money](efficiently-store-and-invest-crypto), without the chance of failure during an economic crisis, as long as they are not stored in something unstable, [this includes some stablecoins](are-stablecoins-stable). Wallets can store many different types of cryptocurrencies with varying levels of risk involved.\n' +
                '\n' +
                'DeFi provides a secure avenue to transfer money. Whether you are making a purchase at an approved retailer or sending money from wallet to wallet, cryptocurrency is a great option. The blockchain will [safely transfer your funds](blockchain-transaction) where you would like them to go and you do not need to request approval from a bank when sending large amounts. DeFi has made room to replace many of the perks involved with traditional banking too. Borrowing and lending to replace traditional loans, Yield Farming to replace traditional CDs or treasury bonds, and there are even decentralized exchanges where you can trade your cryptocurrencies.\n' +
                '\n' +
                'The blockchain also provides assets to be invested in. Cryptocurrency is considered a volatile asset, which is great if you know how to use it to your advantage. When investing in stocks, you have to worry about how a company does, its revenue, and what happens in the news with the company you choose to invest in. While crypto can still be [impacted by the news](news-in-the-crypto-market), it is not in the same way as stocks. Cryptocurrencies do not have underlying companies that impact the value of the coin, they are purely influenced by the demand of the investors.\n'
        },
        {
            img: Decenter2,
            title: 'Applications',
            id: 'Apps',
            description: 'One blue pen resting next to a notebook with a blue cover and a Macbook computer behind ' +
                'them with multi-colored code displaying.',
            text: 'Decentralized Applications, also known as dApps, use the [blockchain for privacy](what-is-the-crypto-blockchain). DApps are still very relatively new in their development and the cost of creating one is far more than a regular application. Using the blockchain creates much slower applications with the compromise of gained security, which not every application needs or wants to sacrifice. DApps can come in any form you can think of. Every application that exists today can be remade decentralized. [Decentralization does not always guarantee success](https://www.investopedia.com/terms/d/decentralized-applications-dapps.asp) though.\n' +
                '\n' +
                'Gaming is an addictive way to spend your time for enjoyment and the blockchain can take part in providing this enjoyment. In doing so, companies can give their users the confidence that their personal information will not be used without their knowledge and their data is secure. [Decentralized games](video-games-with-the-blockchain) also give incentives to play and win with rewards of their own. This could be a cryptocurrency that the company has made that they [give away for completing tasks or winning a round](https://www.techopedia.com/cryptocurrency/best-play-to-earn-games). These games will ultimately try to get you to hold their cryptocurrency for more in-game rewards. This means you make money by winning and they make money from your holdings. Both sides profit.\n' +
                '\n' +
                'There are also decentralized gambling sites. These sites provide an outlet for people to bet on almost anything without worry of getting their money fraudulently taken even if they win a bet. Similar to decentralized cryptocurrency exchanges, [decentralized gambling sites](investing-vs-gambling) use cryptocurrency for their transactions, but instead of buying crypto and selling later, you will be buying a smart contract. Smart contracts are contracts that fully remove the middleman of a deal. As soon as both conditions are met, decentralized nodes will perform the transactions for each party making sure that no one gets scammed out of a deal.\n'
        },
        {
            img: Decenter3,
            title: 'Search Engines',
            id: 'SearchEngines',
            description: 'One silver Apple Macbook with the google screen on it next to a black notebook with two ' +
                'blue pens and an iPhone beside them all.',
            text: 'Search Engines are something that billions of searches happen every single day and it is insane how much of your searches are taken and used by the search engine to make themselves money. This lack of privacy is very important to know when many people don’t. The way to counter this is with a decentralized Search Engine or Web Browser. [Using the blockchain to decentralize](https://www.geeksforgeeks.org/what-is-decentralization-definition-working-need-benefits/#) your search engine can be done in two ways. Firstly it gives privacy to your existing search engine. Secondly is using a different, more safe search engine.\n' +
                '\n' +
                'Adding privacy to an existing search engine is not as easy as just using a private browser, because Google and more still track on there. Making sure that you use extensions on your browsers can help prevent this sort of tracking. There are ad blockers, cookie blockers, and automatic history deletion additions that you can add to your regular search engine to increase security. The [DuckDuckGo search engine](https://duckduckgo.com/) is super easy to implement and helps keep your browsing secure. The extension even rates websites you are visiting to make sure that even when you are not on your search engine, it can still warn you of threats. Another way to decentralize is to change browsers. Brave Browser is a great option for a browser that values your privacy over money along with DuckDuckGo has an application as well.\n'
        },
        {
            img: Decenter4,
            title: 'Messaging',
            id: 'Messaging',
            description: 'One black notebook with an iPhone that is turned off and a brown pen resting on top if ' +
                'it next to a silver macbook laptop.',
            text: 'Having messaging tracked is hard to avoid because it has been solidified into our daily lives. The iPhone is so popular and when messaging, those who don’t have that blue message are instantly noticed. The idea of Apple products is so attractive to users and once they acquire one, they become a part of [Apple’s tracking spree](https://www.nytimes.com/wirecutter/blog/how-iphone-apps-track-you/). Rather than simply just not messaging others on your phone, there has to be a better solution. With decentralization, we are finding new ways to privatize our digital life. New social media apps, with a focus on privacy, are important along with instant messaging.\n' +
                '\n' +
                'Keeping our messages and emails secure comes down to third-party applications. These applications are many times private companies that get to make their own decisions and dedicate themselves to the user\'s security. With the pledges of not collecting data or using encrypted messaging, messaging apps can hop on board with decentralization. While the adoption of the blockchain with messages and emails is not quite fast enough yet, this technology is growing and improving. We can expect to eventually see [some attempts at blockchain messaging](https://coincentral.com/top-blockchain-messaging-apps-crypto-messengers/) that will help us maintain the security that we desire.\n'
        },
        {
            img: Decenter5,
            title: 'Personal Information',
            id: 'Info',
            description: 'One light blue digitally generated outline of a padlock with lines going through it ' +
                'and connecting to each other like a chain.',
            text: 'Data collection is essential to a company\'s function. We know that companies use data to reflect on their performance and customer satisfaction. This turns into a privacy issue when data like posts you view on social media or directions from google maps are being [used to serve you ads](https://www.eff.org/deeplinks/2020/03/google-says-it-doesnt-sell-your-data-heres-how-company-shares-monetizes-and) when you are browsing the web hours or days later. Private information like location, people you talk to, and personal interests should not be used to make a company like Google money by using it to give you targeted ads.\n' +
                '\n' +
                'The line between personal data and data that can be used by companies for their profit must be drawn at this time when so much of our lives are spent online. [Digital privacy should be a right](https://hbr.org/2022/02/the-new-rules-of-data-privacy), not a privilege. As decentralized apps become more common with blockchain technology, their support can help preserve our security. Allowing for encrypted data transfer and anonymous users will keep data secure as well as even if data is used by a company, this company does not know where it is coming from. By not tying a number to an actual person, businesses can continue using data to track their progress, the only difference is that they are only tracking themselves and not their users individually.\n'
        },
        {
            img: Decenter6,
            title: 'Closing',
            id: 'Closing',
            description: 'A light blue background with white lines going all over with a digital circle in the ' +
                'middle and an outline of a city in front.',
            text: '### What is decentralized finance?\n' +
                'Decentralized finance is the use of the blockchain in the financial world where assets and bank-like services can be provided to users, with extra security and protection. This includes cryptocurrencies and the transferring, buying, and selling of digital assets.\n' +
                '\n' +
                '### How does blockchain technology support decentralization?\n' +
                'The blockchain provides an avenue for anonymous and secure transfer of data. This is essential for decentralization to avoid the trackers and data used by large corporations\n' +
                '\n' +
                '### How can I support decentralization?\n' +
                'Support is easy. All you have to do is continue to use applications that provide the extra security qualities that you are looking for, even if there are some drawbacks.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}