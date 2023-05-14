import DecenterMain from '../../images/articleimages/DecenterMain.webp'
import Decenter1 from '../../images/articleimages/Decenter1.webp'
import Decenter2 from '../../images/articleimages/Decenter2.webp'
import Decenter3 from '../../images/articleimages/Decenter3.webp'
import Decenter4 from '../../images/articleimages/Decenter4.webp'
import Decenter5 from '../../images/articleimages/Decenter5.webp'
import React from "react";
import ArticleFormat from "@/components/format";
import {useRouter} from "next/router";

export default function DecentralizationForCrypto() {
    const Article = [
        {
            img: DecenterMain,
            title: '',
            id: 'Intro',
            description: 'Mac Laptop on a small wooden table displaying a purple screen that says blockchain with ' +
                'multiple houseplants sitting behind it.',
            text: 'Decentralization is a large movement right now as privacy concern grows. Decentralization is ' +
                'the movement away from traditional ways of a central power influencing many things that people ' +
                'do. This includes tracking what people do online and with their electronic devices from shopping ' +
                'to emails. Decentralization also gives additional privacy to the user from hackers and other ' +
                'forms of digital attacks.\n' +
                '\n' +
                'Here are the main categories of Decentralization that we will go into\n' +
                '\n' +
                '1. [Finance (DeFi)](#DeFi)\n' +
                '2. [Decentralized Applications (dApps)](#DApps)\n' +
                '3. [Search Engines / Web Browsers](#DecentralizedWeb)\n' +
                '4. [Digital Messaging / Emails](#Social)\n'
        },
        {
            img: Decenter1,
            title: 'Decentralized Finance',
            id: 'DeFi',
            description: 'Multiple silver cryptocurrency coins all sitting on a wooden table with tiny square ' +
                'letters in the middle of them spelling crypto.',
            text: 'Decentralized finance is a movement away from traditional banking. The DeFi movement is ' +
                'great as it solves a lot of the issues that have previously caused more harm than good. ' +
                'DeFi provides a place to store your money that isn’t a bank. This place is called a wallet. ' +
                'Wallets can store many different cryptocurrencies as well. The main ones are called ' +
                'stablecoins, which are coins that normally stick to a single price. If you are interested,' +
                'check out [Top Stablecoins by Market Cap](https://www.coingecko.com/en/categories/stablecoins) ' +
                'from CoinGecko\n' +
                '\n' +
                'Defi also provides quick transactions since everything is through the blockchain. For banks ' +
                'most transactions will take around 3-5 days, however, blockchain transactions can take as ' +
                'little as a few hours or even minutes. DeFi has made room for all the things you can think ' +
                'of from traditional banks. Borrowing and lending can replace traditional loans. With Yield ' +
                'Farming you can replace traditional CDs or Treasury Bonds. There are even Decentralized ' +
                'Exchanges where you can trade your cryptocurrencies.\n' +
                '\n' +
                'When going to standard banks, if you were to try to take out a ton of money, they might not ' +
                'be able to give you the money since once you give them your money, they then go around and ' +
                'use it for other things. When you put your money in a bank, it’s not just sitting in your ' +
                'account, it\'s being moved around, attempting to make the bank money. Being a part of DeFi ' +
                'can be tricky because new companies are very hard to trust. However, this business is ready ' +
                'to take off. MetaMask is a well-known company that has been around since 2016. If you are looking' +
                'for crypto to fill your wallet, [Finding the Next Big Crypto](next-big-crypto) ' +
                'will have some good information for you\n'
        },
        {
            img: Decenter2,
            title: 'Decentralized Applications',
            id: 'DApps',
            description: 'A laptop, mouse, large book, and a smart phone are all resting on top of each other ' +
                'with silver metal chains wrapping around them.',
            text: 'Decentralized Applications, also known as dApps, use the blockchain for privacy. DApps are still ' +
                'very early in their development and the cost of creating one is far more than a regular application. ' +
                'Using the blockchain creates much slower applications with compromising security, which not every ' +
                'application needs. \n' +
                '\n' +
                'Another form of dApp comes from gaming. Gaming is an addictive way to spend your time for enjoyment. ' +
                'What if you could make money at the same time? Decentralized games are given incentives to play ' +
                'and win with rewards of their own. This could be a cryptocurrency that the company has made that ' +
                'they give away for completing tasks or winning a round. These games will ultimately try to get ' +
                'you to hold their cryptocurrency for more in-game rewards. This means you make money by winning ' +
                'and they make money from your holdings. Both sides profit.\n' +
                '\n' +
                'There are also decentralized gambling sites. These sites provide an outlet for people to bet ' +
                'on almost anything without worry of getting their money fraudulently taken even if they win a ' +
                'bet. Similar to decentralized cryptocurrency exchanges, decentralized gambling sites use ' +
                'cryptocurrency for their transactions, but instead of buying a crypto and selling later, you will ' +
                'be buying a smart contract. Smart contracts are contracts that fully remove the middleman of a ' +
                'deal. As soon as both conditions are met, decentralized nodes will perform the transactions for ' +
                'each party making sure that no one gets scammed out of a deal.\n'
        },
        {
            img: Decenter3,
            title: 'Search Engines & Web Browsers',
            id: 'DecentralizedWeb',
            description: 'A mac laptop sitting on a wooden table with a black smartphone and a notebook next to it ' +
                'with two pens resting on top of it.',
            text: 'Search Engines and Browsing is something that most people with a computer use daily and it is ' +
                'insane how much of your everyday searches are taken and used by your search engine for money. This ' +
                'lack of privacy is very important to know when many people don’t. The way to counter this is with ' +
                'a decentralized Search Engine or Web Browser.\n' +
                '\n' +
                'Decentralizing your search engine can be done in two ways. Firstly is giving privacy to your ' +
                'existing search engine. Secondly is using a different, more safe search engine. Adding privacy ' +
                'to an existing search engine is not as easy as just using a private browser, because google and ' +
                'more still track on there. Making sure that you use extensions on your browsers can help prevent ' +
                'this sort of tracking. There are ad blockers, cookie blockers, and automatic history deletion ' +
                'additions that you can add to your regular search engine to increase security. \n' +
                '\n' +
                'An easy alternative is to fully change your search engine to something like ' +
                '[DuckDuckGo](https://duckduckgo.com/). The ' +
                'DuckDuckGo search engine is super easy to implement and helps keep your browsing secure. The ' +
                'extension even rates websites you are visiting to make sure that even when you are not on your ' +
                'search engine, it can still warn you of threats. Another way to decentralize is to change browsers. ' +
                'Brave Browser is a great option for a browser that values your privacy over money along with ' +
                'DuckDuckGo having their own application as well.\n'
        },
        {
            img: Decenter4,
            title: 'Digital Messaging & Emails',
            id: 'Social',
            description: 'An old fashioned black phone with a wire resting on its silver colored holder with ' +
                'number buttons all connected to a white wall.',
            text: 'Having emails and messaging tracked is hard to avoid because it has been solidified into our ' +
                'daily lives. The ultimate solution is not to do any of it, but how realistic is that really. ' +
                'Instead, with decentralization, we are finding new ways to privatize our digital life. New ' +
                'social media apps, with focus on privacy are important along with instant messaging.\n' +
                '\n' +
                'To avoid Apple’s reign over our messages there are some things that we can do to limit them. ' +
                'Something like the popular application WhatsApp is a solution that many people have already ' +
                'been implementing. However for the concern of privacy there is a better option. Signal ' +
                'messaging app is one of the best decentralized messaging apps that I have come across, ' +
                'which is extremely important to keeping our private lives private.\n' +
                '\n' +
                'Emails are our private life and the main way that you may contact people in a professional ' +
                'setting or someone you do not know too well. This is also the way that many professional ' +
                'contractors or remote workers communicate with their employers. If all these emails are not ' +
                'really private then this causes a concern not only for privacy, but for people who have ' +
                'disclosure agreements or private matters talked about over email. [Protonmail]' +
                '(https://proton.me/mail) is an example of one of the companies pushing for more decentralized ' +
                'emailing.\n'
        },
        {
            img: Decenter5,
            title: 'Closing',
            id: 'Closing',
            description: 'The word blockchain in white letters is resting next to a pen, smart phone, calendar, ' +
                'pair of glasses, and a silver mac laptop.',
            text: 'If you value your privacy and want to stop big corporations from stealing your information ' +
                'and using it for money then the decentralized movement can help you solve some of these ' +
                'problems, the only issue is how new it is. This is also a pro however because new products ' +
                'mean that you can be right at the face of development and innovation. As Crypto Investors it is our job' +
                'to take advantage of the parts of our field and keep up with the times. If you are interesting in' +
                'building your own investing system make sure to check out, [How to Start Investing in Crypto]' +
                '(start-investing)\n' +
                '\n' +
                'If you are interested in actually working with the blockchain and being apart of the innovation, ' +
                'read my article [6 Growing Jobs For The Future](tech-future)\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}