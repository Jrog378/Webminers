import BusinessCryptoMain from '../../images/articleimages/BusinessCryptoMain.webp'
import BusinessCrypto1 from '../../images/articleimages/BusinessCrypto1.webp'
import BusinessCrypto2 from '../../images/articleimages/BusinessCrypto2.webp'
import BusinessCrypto3 from '../../images/articleimages/BusinessCrypto3.webp'
import BusinessCrypto4 from '../../images/articleimages/BusinessCrypto4.webp'
import BusinessCrypto5 from '../../images/articleimages/BusinessCrypto5.webp'
import BusinessCrypto6 from '../../images/articleimages/BusinessCrypto6.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function BusinessCryptoChanges() {
    const Article = [
        {
            img: BusinessCryptoMain,
            title: '',
            id: 'Intro',
            description: 'A line of business buildings that are colored blue with orange highlights right next to ' +
                'the water with light coming out the tops.',
            text: 'Cryptocurrency and the blockchain go hand in hand. Since they were both created at the same time, they are like brothers. Cryptocurrency is a growing industry and its reach goes far beyond the markets. The blockchain is a powerful force for decentralization in the business world and web3 business opportunities have never provided a better opportunity to hop on board.\n' +
                '\n' +
                'Here are 5 fields that will be greatly impacted and changed forever by cryptocurrency and the blockchain:\n' +
                '\n' +
                '1. [Finance](#Finance)\n' +
                '2. [Gaming](#Gaming)\n' +
                '3. [Freelancing](#Freelancing)\n' +
                '4. [Art](#Art)\n' +
                '5. [Brick-and-Mortar](#BrickAndMortar)\n'
        },
        {
            img: BusinessCrypto1,
            title: 'Finance',
            id: 'Finance',
            description: 'A blue chart with numbers on it and lines going in front of it in blue and light blue ' +
                'with blue buildings surrounding the lines.',
            text: 'Finance has been known to provide generous payment for those who work in this field, due to how much you are working with money and currency. How businesses spend and invest their money is very important to them because that is how they will profit. Web3 cryptocurrencies have brought something amazing to the table in the form of decentralized finance, also known as DeFi. DeFi provides both high volatility and [efficient assets](/efficiency) to the table for companies to make tons of profit with. Anyone who works with assets cannot refuse the benefits of cryptocurrency. [Decentralized finance business implications](https://www.investopedia.com/decentralized-finance-defi-5113835) are changing fields like investing, wealth preservation, and financial planning with a transparent way to protect your money from inflation, and make money.\n' +
                '\n' +
                'Those who build investing systems in crypto can harness the [inherent high volatility](what-impacts-crypto-volatility) and prevent themselves from losing money. In the business world, these investors are called quants. Crypto, being a developing technology, is even attracting the likes of artificial intelligence into investing due to the profit potential. Quants who are bringing [AI to their investing systems](ai-quant-investing) can begin making even more money as they analyze the market in a much more detailed way than humans could. The future of [investing in crypto has AI](financial-ai-and-data-science) in its sights, where businesses are changing their entire models just to get a piece of crypto.\n'
        },
        {
            img: BusinessCrypto2,
            title: 'Gaming',
            id: 'Gaming',
            description: 'A set of black video gaming headphones on a white table with a brown leather headband ' +
                'on them and a black wire coming from them.',
            text: 'If you have played video games before, chances are you have made an account with some company out there to play. This includes giving an email, password, username, and possibly a first name to start playing. These companies also might have had you sign a contract allowing them to do whatever they want with your data. This infringes on your privacy, even if you never knew it was happening. [Decentralized gaming business strategies](video-games-with-the-blockchain) are putting a stop to that. As the future of gaming with crypto adopts the blockchain we will see [data stored in nodes](https://www.section.io/engineering-education/why-data-storage-is-shifting-to-the-blockchain/) rather than in the hands of a company. This allows users to not have to worry if a company is breaking their trust for their benefit while still getting the personalized experience from a game that still uses your data for the player’s benefit.\n' +
                '\n' +
                'The blockchain has more use than just data privacy, as we can even see NFT business applications stretch into gaming. While other games are using regular designs and skins to give your character style, NFTs can bring decentralization into gaming with the customization they provide. Buying and selling NFTs will be [peer-to-peer transactions](blockchain-transaction) and provide transparency and safety, unlike modern methods and transferring items. Many futuristic gaming companies look forward to using NFTs as they are both newer technologies. NFTs can be used in virtual worlds and become [more popular with VR](https://www.binance.com/en/blog/nft/are-ar-and-vr-nfts-the-future-of-nfts-421499824684903557). Customizing your virtual avatar can be done with NFTs from unique clothing designs to hairstyles and accessories. NFTs will continue to pave their way into helping you customize your virtual world in VR and other futuristic gaming products.\n'
        },
        {
            img: BusinessCrypto3,
            title: 'Freelancing',
            id: 'Freelancing',
            description: 'A notepad and a fountain pen on it for freelance work next to a blue smartphone and an ' +
                'orange cup on coffee on an orange plate.',
            text: 'Life as a freelancer is difficult when first starting. Customers might not trust you fully and you might not even trust them back. [Web3 offers trustless transactions](https://www.gemini.com/cryptopedia/trustless-meaning-blockchain-non-custodial-smart-contracts) on the blockchain to provide freelancers and customers not to have to worry about who they trust because, with the use of smart contracts, your deals can be done without the worry of whether the other side will end up providing what they agreed upon. Smart contract business uses will increase your customers by removing a drawback many people have with having to trust a random individual. Once the conditions of a smart contract are met, the two parties will get what is agreed upon and you won’t have to stress about not receiving payment and the customer won\'t have to stress about not getting what they paid for.\n' +
                '\n' +
                'Since blockchain and cryptocurrencies are developing fields, there are not many people who have the experience to teach business owners how to use its web3 technology. As a specialist in the blockchain, freelancers can fill this need by providing their services to companies who want to get on board making their practices more secure. If you were to go into this field as a specialist, there would not be as much competition and there is [extreme demand for consulting or other services](https://www.blockchain-council.org/web-3/why-demand-for-blockchain-developers-shot-up-in-2022-23/).\n'
        },
        {
            img: BusinessCrypto4,
            title: 'Art',
            id: 'Art',
            description: 'A white lined notebook with a silver fountain with bronze accents resting on it all on ' +
                'top of a dark brown wooden picnic table.',
            text: '[NFTs are an amazing way](https://www.theverge.com/22310188/nft-explainer-what-is-blockchain-crypto-art-faq) to fund artists. The field of artistry is underfunded and many great artists are not able to make the money they deserve for their work. Digital art is a great way to be able to sell your work to anyone in the world and NFTs have made digital art even better for the creators. Whenever anyone buys or sells an NFT the creator gets paid as well. Those who invest in art fund these artists and whenever you sell their art, they get paid again. Since NFTs are becoming more popular in other fields of business, this gives artists another opportunity to design and create for a company that can pay much more than individuals.\n' +
                '\n' +
                'While NFTs are amazing for artists, their creation opened up the opportunity for services. People in the industry who want to create their NFTs, but do not have the artistic ability can pay a company to create hundreds of pieces for them so that they can start selling sooner. Countless art business strategies involve NFTs including using artificial intelligence. A company could open its doors to artists who send them around 100 images of their past work and the company can process this, creating hundreds of images based on their style of art. These images are unique and can be for NFTs. There can be multiple collections made this way as well. Even if someone who is not an artist wants to start an NFT collection. All it takes is some [software to create as many NFTs](https://learn.bybit.com/nft/best-ai-powered-nft-creator-apps-art-generator/) as the customer wants in an instant.\n'
        },
        {
            img: BusinessCrypto5,
            title: 'Brick-and-Mortar',
            id: 'BrickAndMortar',
            description: 'A tiny silver metal shopping cart on black wheels with light blue on the handlebar and ' +
                'child seat that has a white background.',
            text: 'Brick-and-mortar stores, or any store that has at least one physical location, might seem old and outdated but are essential to supplying physical goods to anyone who wants them immediately. There is no need to wait for shipping or purchase online when you can grab what you want right next door. These stores are also restaurants and clothing stores, which the majority of customers would rather do their purchasing from inside. Online payments are quick and easy, for someone who keeps money in crypto rather than a bank, paying using the blockchain is preferable. As businesses start to accept crypto more, they become more secure and get payments much faster than it would take to process the payment of a credit card or check, as the bank still has to go through approval processes. If speed is still an issue, early adoption of crypto is still a great idea because [blockchain technology will only get quicker](what-is-the-crypto-blockchain).\n' +
                '\n' +
                'For the times when customers do not want to buy things in-store, we have third-party apps like Doordash and [other delivery services that have to pay businesses](https://www.bloomberg.com/news/articles/2022-02-11/uber-ceo-says-app-will-eventually-accept-crypto-as-payment) the cost of their goods. Since these applications will mainly be paid for on applications, it is a digital payment that has to go through. As digital payments through third-party applications will start accepting web3 digital currencies like cryptocurrency, businesses may have to adapt to join the convenience and security of this blockchain payment. Cryptocurrency business impact should not be forced onto anyone or any business as it is ultimately still up to them, however, to convenience the customer, companies who support cryptocurrency payments may gain more profit as people tend to prefer companies that are easy to buy from. The future of crypto business transformation is still undetermined and should be something that you keep yourself updated on with businesses in your area.\n'
        },
        {
            img: BusinessCrypto6,
            title: 'Closing Words',
            id: 'Closing',
            description: 'A city skyline that has a few skyscrapers in the middle of the city surrounded by large ' +
                'and small buildings during sunset.',
            text: '### Is it too late to hop on board with web3?\n' +
                'No, it is never too late to get started. Learning about web3 is the perfect way to increase your value in business, and prepare yourself for the adoption of blockchain technology\n' +
                '\n' +
                '### Is cryptocurrency a good investment?\n' +
                'Cryptocurrency is a high-volatility asset that has more risk than other assets if you go into it without knowing much about the markets. If you prepare yourself with an investing system paired with general knowledge, you will be able to overcome this and use crypto’s volatility for profits\n' +
                '\n' +
                '### What fields of business need blockchain?\n' +
                'We have mentioned a few in this article like finance, art, and freelancing, but the blockchain can be universally used in business wherever it\'s needed. Data is everywhere and the blockchain can safely secure the data of businesses.\n'
        },
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}