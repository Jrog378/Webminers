import Ethical1 from '../../images/articleimages/Ethical1.webp'
import Ethical2 from '../../images/articleimages/Ethical2.webp'
import Ethical3 from '../../images/articleimages/Ethical3.webp'
import Ethical4 from '../../images/articleimages/Ethical4.webp'
import EthicalMain from '../../images/articleimages/EthicalMain.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function EthicalHacking() {
    const Article = [
        {
            img: EthicalMain,
            title: '',
            id: 'Intro',
            description: 'MacBook Pro Laptop with two credit cards resting on the keyboard with a padlock on top of those.',
            text: 'Crypto investors can have entire life savings online at a given time that they cannot afford to lose, then crypto hackers come along. Mercilessly taking everything. The crypto industry is revolutionary for their technology and decentralization, but some drawbacks remain. Hackers have become an issue recently in the crypto world.\n' +
                '\n' +
                'There is still hope, though. Here are some ways that you can keep yourself safe from crypto hackers:\n' +
                '\n' +
                '[Safety Basics](#Basics)\n' +
                '[Crypto Vulnerabilities](#Vulnerabilities)\n' +
                '[Crypto Device Protections](#DeviceProtections)\n'
        },
        {
            title: 'Safety Basics',
            id: 'Basics',
            img: Ethical1,
            description: 'A small section of a Mac Laptop with a rainbow gradient light from red to blue and a black keyboard.',
            text: 'When discussing ethical and regular hackers, it may need clarification on which side they are on. To clarify, Ethical Hackers, also known as white hat hackers, use hacking for ethical purposes to try and find weaknesses and how to fix them. On the other hand, regular hackers, also known as black hat hackers, find those weaknesses and use them for their good.\n' +
                '\n' +
                'Just because black hat hackers are out, there does not mean they are attacking you specifically. They will be going after individuals that take the least amount of work to hack into for the most return. If you are to put up minimal defenses, many hackers would just find someone else rather than attempt to hack you. Reasons that you can use are not using public Wifi, [using a VPN](https://www.howtogeek.com/133680/htg-explains-what-is-a-vpn/) on private Wifis, and using built-in virus protection on your devices.\n' +
                '\n' +
                'Web safety is also essential because even if you have a fully protected computer, you still have to worry about what you willingly give access to your computer. Only use trusted links or [https rather than http](https://www.cloudflare.com/learning/ssl/why-is-http-not-secure/) sites on the web. Don’t click links from untrusted emails or text messages. Even trusted contacts sending you a sketchy link should not be fully charged. Just because someone else depends on a link does not mean you have to. Trust your instincts.\n'
        },
        {
            title: 'Crypto Vulnerabilities',
            id: 'Vulnerabilities',
            img: Ethical2,
            description: 'Bitcoin sitting in front of a computer screen that has the crypto market graph that is in the color blue.',
            text: 'While crypto is known for its safety, there are still some vulnerabilities that you have to look out for. The blockchain technology used in [crypto transactions](blockchain-transaction) is a peer-to-peer system that is very open to the public, including hackers. Your crypto\'s safety will largely depend on your actions on your computer and how you manage the risk that comes with crypto investing online. Hackers can even make money right from your accounts.\n' +
                '\n' +
                'Only some exchanges regarding your hard-earned money\'s safety will be a good fit for you. Some businesses you will be forced to use when investing out-of-the-ordinary [altcoins](what-is-an-altcoin) may need to be more secure. They can be vulnerable to hacks themselves, risking the money you put into your account with them. The other issue that exchanges may have is internal issues that you should look for. The [FTX situation](https://www.investopedia.com/what-went-wrong-with-ftx-6828447) is an excellent example of how much money was stolen from regular crypto investors from trusting a corrupt exchange.\n' +
                '\n' +
                'Centralized companies also support specific decentralized cryptocurrencies, like Silicon Valley Bank keeping USDC. When the bank failed, the price of USDC fell almost 20 cents lower than a dollar, which was not supposed to happen for [this stablecoin](are-stablecoins-stable). The background and foundation of crypto can be irregular and cause extra risk when hoping to invest in it. One of the easiest ways to keep yourself safe from these issues is by sticking with a [popular cryptocurrency](popular-cryptocurrency).\n'
        },
        {
            title: 'Crypto Device Protections',
            id: 'DeviceProtections',
            img: Ethical3,
            description: 'Computer screen with a mouse hovering over a button that is labeled with the word security in the color blue.',
            text: 'To keep yourself safe from crypto hacks, you can do more to keep [your crypto wallets](https://www.coinbase.com/learn/crypto-basics/what-is-a-crypto-wallet) safe from harm. The basics, like a VPN and no public wifi, are still suggested and are a great start to your security, but you will need more. Hackers will be persistent when there is a lot of money involved.\n' +
                '\n' +
                'Do not write your secret phrases on your laptop or iPhone. If one of your devices gets hacked, you want to ensure that it cannot do any more harm than just what’s on the phone. These phrases should also not be put in plain sight. If someone were to break into the area where you store your computer, they have that phrase right there. It would be a good idea to write it down somewhere you will remember or save it in an encrypted file you put onto a USB.\n' +
                '\n' +
                'Another type of hack is where two companies or partners will make an agreement called a [smart contract](https://www.ibm.com/topics/smart-contracts). This smart contract is on the blockchain and removes the need for a middleman. The money is then put into the blockchain and held there until all terms of the agreement have been met, where the two sides then exchange what was agreed upon. This sounds great and more secure than usual, yet there are still vulnerabilities. Suppose this intelligent contract needs to be written better. In that case, a hacker can exploit the contract, taking all the cryptocurrency that was supposed to be sent to the worker.\n'
        },
        {
            title: 'Summary',
            img: Ethical4,
            id: 'Summary',
            description: 'Random characters flowing over the screen from top to bottom in the color green with a black background, the matrix.',
            text: 'Overall there are many methods to protect yourself from the possible outcomes of crypto hackers. Ethical hackers are great because they can help regular businesses find the same vulnerabilities that those black hat hackers are looking for. Staying safe takes some time so that you can look into what you are doing. Always remember your VPN and do not use public wifi. Crypto investing is only as safe as you let it be.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}