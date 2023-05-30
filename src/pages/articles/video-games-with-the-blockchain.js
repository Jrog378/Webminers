import CryptoGamingMain from '../../images/articleimages/CryptoGamingMain.webp'
import CryptoGaming1 from '../../images/articleimages/CryptoGaming1.webp'
import CryptoGaming2 from '../../images/articleimages/CryptoGaming2.webp'
import CryptoGaming3 from '../../images/articleimages/CryptoGaming3.webp'
import CryptoGaming4 from '../../images/articleimages/CryptoGaming4.webp'
import CryptoGaming5 from '../../images/articleimages/CryptoGaming5.webp'
import CryptoGaming6 from '../../images/articleimages/CryptoGaming6.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function VideoGamesWithTheBlockchain() {
    const Article = [
        {
            img: CryptoGamingMain,
            title: '',
            id: 'Intro',
            description: 'A gaming controller with a blue light on the top that is shining off of a reflective ' +
                'table and fully lighting up a dark room.',
            text: 'Crypto is paving its way through the investing field as an amazing asset choice, yet it ' +
                'continues to reach outside of just the markets. Crypto and Gaming are starting to mix more than ' +
                'ever in unique ways that are drawing in more customers than usual. Crypto is a great investment ' +
                'opportunity that is backed by secure and futuristic technology. Gaming is a great way to ' +
                'entertain people and provoke playful competition between players working with teammates or ' +
                'alone. When they mix it creates an innovative new idea to be capitalized on.\n' +
                '\n' +
                'Here are the ways that crypto and gaming are mixing:\n' +
                '\n' +
                '1. [Earning Crypto](#EarningCrypto)\n' +
                '2. [NFTs](#NFTs)\n' +
                '3. [Blockchain Technology](#BlockchainTechnology)\n' +
                '4. [Virtual Reality](#VR)\n' +
                '5. [Feeling of Winning](#Winning)\n'
        },
        {
            img: CryptoGaming1,
            title: 'Earning Crypto',
            id: 'EarningCrypto',
            description: 'Multiple one hundred dollar bills balancing on their sides with the head side facing ' +
                'forward and a blue light shining on them.',
            text: 'Making money in crypto does not just have to be from making amazing profits. It can also take place from playing video games. Video games have started offering you crypto as a reward for playing. The way they can afford to be able to do this is because of the hype around crypto itself. You may be offered a special cryptocurrency or altcoin that is owned by the company running the game or just crypto in exchange for you playing well. Either way, gaming is a great way for [companies to join the web3 movement](web3-crypto-growth).\n' +
                '\n' +
                'When you receive an [altcoin or crypto that is owned by the company](what-is-an-altcoin) who made the game they are making money in two ways. That company may be using crypto as a way to gather customers when compared to regular money because crypto is much more of a hype word than cash. Once they have all of the customers they need they can then depend on using [advertising or other methods of making money for themselves](https://developer.mozilla.org/en-US/docs/Games/Publishing_games/Game_monetization), whether this be getting you to buy more from the game or the company.\n' +
                '\n' +
                'If a company owns its cryptocurrency or is being paid by existing crypto, this is an opportunity for them to give this crypto away. By giving this crypto away as a reward, players that possess it can use it inside the game to boost their stats or increase certain perks. You may also be prompted to buy more of their crypto to gain even more perks inside the game.\n' +
                '\n' +
                'If the company does not own the crypto that they are providing, then chances are the rewards will be much less. They are using the idea of crypto to entice customers into playing their game. These types of rewards can be given out to the best players or for single-player achievements. They are very attractive to players being drawn into the games since [crypto has the capacity to change lives](crypto-opportunities). Be careful where you give your [crypto wallet information and log in](https://bitcoin.org/en/secure-your-wallet) because you never know if a game has the main purpose of stealing your crypto to make money. There are many crypto scams out there and it is important to do your research before joining a game or giving someone your information to play.\n'
        },
        {
            img: CryptoGaming2,
            title: 'NFTs',
            id: 'NFTs',
            description: 'A notebook with multiple paint brushes sitting on a dirty wooden table next to it with ' +
                'a full paint tray of colors beside it.',
            text: 'NFTs have normally just been digital images that people can buy, sell, and trade with each other. Crypto Gaming has made this much more with the introduction of NFT into their games. These games can come in the form of rewards or by using actual NFTs for gaming designs inside their games. The main purpose of using NFTs in games could be to give NFT designers a place in business or to hop on the hype that comes with the NFT term.\n' +
                '\n' +
                '[NFT Games that use these items as rewards](https://www.creativebloq.com/features/best-nft-games) are trying to entice you into playing the game similarly to cryptocurrency. These NFTs are slightly different, however. [Creating an NFT](https://www.howtogeek.com/783359/how-to-make-an-nft/) does not take any money out of a company\'s pocket, only time. Since this is the case, handing out NFTs as rewards would be cheaper than using NFTs and with the compromise of offering an artist a position. This artist\'s position might not even be a downside because every time an NFT is bought or sold, the creator gets a percentage of the sale. That way if a company is offering NFTs and users are buying and selling, it can make up for the cost of creating that NFT in the first place.\n' +
                '\n' +
                'The hype from the NFT world came with the [large tokens being worth millions of dollars](https://www.finder.com/most-expensive-nfts) and giving you access to private communities. Everyone wanted a bit of the action and began creating their collections or attempting to buy and sell NFTs as if they were crypto. This eventually led to [the downfall of NFTs in popularity](https://www.makeuseof.com/nft-market-collapse-lessons-learned/) as the amount out there far exceeded the real demand for the projects. As attention began to fall, this turned out to be a good thing for the NFT space because now you could build real communities with trust and bond rather than someone trying to make a cheap buck off of the artwork. This helped NFTs return to the true state that the community was meant to be like.\n'
        },
        {
            img: CryptoGaming3,
            title: 'Blockchain Technology',
            id: 'BlockchainTechnology',
            description: 'The Bitcoin logo in gold being shown by tons of little dots and a network of these dots ' +
                'all floating around it in a circle.',
            text: 'With the [innovation of the blockchain](into-the-crypto-future), we see companies attempting hard to keep users\' data safe. Even in video games, there are data breaches where the databases used were not up to the standard that they should have been. [The blockchain can help secure this data](what-is-the-crypto-blockchain) from potential hacks and will even have higher security than crypto does, depending on how the company sets its system up.\n' +
                '\n' +
                'In terms of data, video games have login info and other linked accounts that may help support users inside the game. Many applications offer incentives for connecting social media like Twitter or Facebook. [This data is stored within the user\'s account](https://www.trendmicro.com/vinfo/us/security/news/online-privacy/data-privacy-and-online-gaming-why-gamers-make-for-ideal-targets) and should be private. Other data may be profile photos, chats with other teammates, and even conversations while playing. If you have an insecure game, almost anything a player does on the platform is up for grabs. Having blockchain games can help stop that.\n' +
                '\n' +
                'The way that this happens is by using a [closed transaction to store and transfer data](blockchain-transaction). Closed transactions, unlike an open transaction with crypto, require authorization where you are accepted into the ecosystem and the nodes involved are not accessible from the outside. This system is harder to hack, though is still possible from an inside member who already has access to the application and their user data. The blockchain can also help by involving smart contracts inside of the game itself. These contracts can protect users attempting to make in-game deals from being scammed by other players, making the entire environment that much safer and more welcoming.\n' +
                '\n' +
                'The blockchain represents innovation and growing security. With this security comes slowness and that is detracting from video games that involve action or high-speed decisions. This speed feature will only improve as time goes on and the technology adapts to its climate. As this happens it will continue to spread reach into games faster along with its improvements.\n'
        },
        {
            img: CryptoGaming4,
            title: 'Virtual Reality',
            id: 'VR',
            description: 'A virtual reality headset with two controllers sitting next to it all on top of a while ' +
                'table inside a dimly lit black room.',
            text: 'Even though Virtual Reality and Cryptocurrencies feel as if they are brand-new technologies, VR has probably been around longer than you could imagine. [The invention of VR dates back to the mid-90s](https://en.wikipedia.org/wiki/Virtual_reality) and was originally military technology. The military would run simulations by having those being tested wear a set of VR goggles that would put the screen up to their face and make it seem as if the simulation was real life. As this tech comes to the public sector it takes form in areas like Video Games and even drones.\n' +
                '\n' +
                'The world of video games with VR sprouted in the 1990s when this tech then started to innovate and become more advanced with motion and controllers that you can use inside the game. This introduction made other companies want to produce VR for consumers, creating a competitive market. Competition pushes people into producing better products to outshine their opposing companies and VR started to become more than just the simulations and training exercises it used to be. VR developed into the [enjoyable experience that we have today](https://www.makeuseof.com/an-introduction-to-vr-gaming/).\n' +
                '\n' +
                'VR developed into ultra-realistic video games where some have the same crypto rewards systems as well. One of the most notable forms of crypto gaming in VR is the metaverse. The metaverse and VR will be using both forms of rewards and in-game items with crypto earnings and NFTs. These forms of VR will also be the sources of revenue with 3rd party brands paying to get their place in the metaverse. Shoe companies, clothing companies, and sports companies. Any bit of showing inside counts as marketing to the brand outside of VR and this is valuable to big corporations.\n' +
                '\n' +
                'NFTs are a great avenue for 3d designers to get their foot in the door with credited pieces. These artists can make money designing 3d outfits and styles that go in the metaverse. Players and users can then purchase and exchange items, each time paying the creator. Jobs in the metaverse like digital real estate can bring users income from crypto by actually working in VR.\n'
        },
        {
            img: CryptoGaming5,
            title: 'Feeling of Winning',
            id: 'Winning',
            description: 'The word win spelled out with tiny wooden squares that have each letter written on them ' +
                'in black all on top of a pile of squares',
            text: 'Investing is notoriously rewarding when you perfectly time the market and get that amazing win with extra money as the reward. Winning money is much more emotionally triggering than just making money, because of this we see [gamblers even getting involved in the investing markets](investing-vs-gambling). The dopamine that is triggered by winning money can cause strong addiction or hook people into coming back for more. When you Emotionally invest, [you do not make decisions rationally and end up losing more money than before](top-investor).\n' +
                '\n' +
                'The emotion we get from winning a good trade rather than gambling and winning by chance can also be converted over to video games. When you play video games, it feels good to improve and get better at the game. The feeling of being great at something gives you the impression that you have an edge over your opponent and always have the upper hand. When you win and beat your opponent fair and square, it feels good because you know that you beat them purely because you were better.\n' +
                '\n' +
                'In investing it is a similar feeling. When you mix investing in crypto and gaming together you get gaming with the reward of crypto. These crypto rewards can act as twice as many rewards. Free crypto given to you from achieving something feels amazing because it is money and a win you earned and the [feeling of beating your opponent fuels your good emotions](https://www.psychologytoday.com/us/blog/your-neurochemical-self/201608/why-winning-feels-good). Coming the two together, as we are doing right now, can amplify those emotions.\n' +
                '\n' +
                'The psychology of gaming is very similar to the [psychology of the markets and how a winner feels](what-impacts-crypto-volatility) is also very similar. Since you are putting the two together you get psychologically a double win when you play these crypto games. People will be more attracted to your game because of this. The idea of winning two things in one is more pleasing than just a regular win to customers. They get to earn crypto while playing video games. Mentally, this is a great model for selling games and a very simple setup for marketing.\n'
        },
        {
            img: CryptoGaming6,
            title: 'Closing Words',
            id: 'Closing',
            description: 'Two video game controllers on a black table in a dark room with a green and blue flow ' +
                'of lines that are lit up passing by them.',
            text: 'Gaming is a great way to spend some free time and enjoy playing around. Video games can help you creatively solve problems and work as a team or alone to compete with your opponent. When we mix crypto with gaming we get a great combination. This turns into a place where you can earn crypto or NFTs for your accomplishments and even use some of your earnings to style your characters or give yourself in-game perks. Crypto gaming also brings Blockchain Technology to keep your data safe and secure while you play so that you don\'t have to worry [while being a part of the decentralization movement](decentralization-for-crypto). Virtual reality is becoming more and more realistic along with adapting crypto technology with similar rewards and items as regular gaming.\n' +
                '\n' +
                'Together crypto gaming gives you an even better experience than regular gaming as it provides you with the feeling you may get from investing and winning a game combined. Crypto gaming is still in its early phases and has a lot of room to grow as well. As it begins to take more opportunities it gets, be sure to look out for improvements in speed, gaming experience, and better rewards. I look forward to the future of crypto gaming and believe you should as well.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}