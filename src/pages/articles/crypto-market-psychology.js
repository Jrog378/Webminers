import CryptoPsychologyMain from '../../images/articleimages/CryptoPsychologyMain.webp'
import CryptoPsychology1 from '../../images/articleimages/CryptoPsychology1.webp'
import CryptoPsychology2 from '../../images/articleimages/CryptoPsychology2.webp'
import CryptoPsychology3 from '../../images/articleimages/CryptoPsychology3.webp'
import CryptoPsychology4 from '../../images/articleimages/CryptoPsychology4.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function CryptoMarketCrashes() {
    const Article = [
        {
            img: CryptoPsychologyMain,
            title: '',
            id: 'Intro',
            description: 'An unlit glass light bulb resting on its side in front of an unfocused set of lights ' +
                'that are in the shape of an upwards beam.',
            text: 'Market psychology is a way of thought while interacting with the markets. The psychology ' +
                'of the markets is always changing because humans are naturally full of emotions. Crypto, being ' +
                'a risky asset and relatively new, is naturally going to be higher in emotion than regular ' +
                'markets. Before entering the markets there are a few things you should learn and use to your ' +
                'advantage about crypto market psychology.\n' +
                '\n' +
                'They go as follows:\n' +
                '\n' +
                '1. [Psychology of a Market Cycle](#MarketCycle)\n' +
                '2. [Investing Psychology](#Investing)\n' +
                '3. [Trading Psychology](#Trading)\n'
        },
        {
            img: CryptoPsychology1,
            title: 'Psychology of a Market Cycle',
            id: 'MarketCycle',
            description: 'A dark wooden board on a dark wooden wall with letters in white pushed into the center ' +
                'of the board spelling out emotions.',
            text: 'The [psychology of a market cycle](https://advisor.visualcapitalist.com/psychological-pitfalls-' +
                'market-cycle/) can be explained by talking about the phases that investors go through as the ' +
                'market goes up and down. When the market is going up, most people are excited and happy. In ' +
                'opposition, when the market is going down most people are annoyed whether they are losing money ' +
                'or miss the profits they got while the market was going up. Determining where you are currently ' +
                'in the market psychology cycle can also help you determine which phase is coming next and plan ' +
                'accordingly based on the help of others’ emotions to avoid losses to increase profits.\n' +
                '\n' +
                'The market starts before going up where people are passing off many movements as micro movements ' +
                'that don’t mean much. Once there are more and more micro movements going up investors get ' +
                'uncertain of what is going on and do not know whether to believe they are in another bull ' +
                'market. The market continues up and people are hoping for the best and soon people are rushing ' +
                'to buy in fear that they will miss out on the great movement. At the top people are blinded by ' +
                'the sell signals and continue to hold onto their assets hoping for more profit, not paying ' +
                'attention to [what is about to happen](what-is-a-crypto-bubble).\n' +
                '\n' +
                'Then the [bear market](what-to-do-in-bear-markets) comes. The market begins to fall and people ' +
                'get anxious. They enter the [5 stages of grief](https://www.verywellmind.com/five-stages-of-' +
                'grief-4175361) and begin to deny what is happening and panic sell trying to savor any amount ' +
                'of money they have left in the market. Finally, people accept their losses and either fully ' +
                'sell or just leave their money in. People lose hope in the markets and stop putting more money ' +
                'in. Price remains with little action until another big movement comes along, starting the cycle ' +
                'all over again.\n'
        },
        {
            img: CryptoPsychology2,
            title: 'Investing Psychology',
            id: 'Investing',
            description: 'A glass light bulb that is lit up with orange light sitting up right inside of a ' +
                'white room that is dimly lit from the bulb.',
            text: 'Knowing how cycles work is great, but when investing there are a whole different set of rules ' +
                'that you should be following as well. Investors use data along with investing systems to make ' +
                'their decision to avoid using emotions, however, that does not mean that it will always be the ' +
                'case. [Human error is possible](https://seekingalpha.com/instablog/1025076-the-better-investor/' +
                '250058-how-to-profit-from-systematic-human-errors-in-investing) and can even be caused by the ' +
                'psychological battles involved in investing.\n' +
                '\n' +
                'When investors are excited about the markets, they are more likely to put money in and buy ' +
                'without fully using their evidence. [Emotional investing](top-investor) decisions can also be ' +
                'false signals that were not checked for accuracy instead the investor rushed into the markets ' +
                'to buy at the slightest bit of a buy signal. This is important to know because you can tell when ' +
                'people are buying without reason, even for long-term investors, causing unpredictable movements ' +
                'that you should stay out of.\n' +
                '\n' +
                'Another instance is [crypto arbitrage](crypto-market-crashes). This is when the market goes in ' +
                'a direction opposite that data is saying it would and the psychology of this concept goes both ' +
                'ways. If the market goes up without investors having the signal, people will regret or lose ' +
                'trust in their system. If the market goes down when their data says buy, investors will get ' +
                'anxious about their losses or make a revenge decision, completely forgetting about [safe ' +
                'investing](is-cryptocurrency-safe).\n'
        },
        {
            img: CryptoPsychology3,
            title: 'Trading Psychology',
            id: 'Trading',
            description: 'An Apple iPhone showing a crypto trading candle chart that is going up and down placed ' +
                'in top of a pile of money and coins.',
            text: 'In trading psychology, emotions are even more impactful since you are making much more of the ' +
                'decisions on your own. Trading in the crypto markets is faster-paced than investing, giving it ' +
                'less accuracy with your signals so it takes extra work to be able to recognize when something is ' +
                'worth making a move on. It is important to be mindful of using smaller time frames as well ' +
                'because all topics are multiplied as the timeframe gets smaller.\n' +
                '\n' +
                'Market mind games can be played where if a [market mover or whale](https://www.investopedia.' +
                'com/terms/b/bitcoin-whale.asp) with a lot of money wants to screw you over to make money, they ' +
                'will wait for a common trading signal and make the market do the opposite, forcing traders to ' +
                'sell unwillingly. The psychology at play is being able to tell what is a real movement and what ' +
                'is fake along with what other investors are thinking as well. The only way to make money is to ' +
                'take money from someone else.\n' +
                '\n' +
                'Crypto Trading is much more risky than investing, giving it a higher profit and loss potential. ' +
                'When losses are piling up on traders they will want to either quit or forcefully make their ' +
                'money back. Forcefully getting their money back will in most cases end in emotional trading ' +
                'where they will just lose all the rest of their money. When traders are willing over and over ' +
                'they believe they are on fire and cannot lose. This puts them into [the gambler\'s fallacy]' +
                '(https://effectiviology.com/gamblers-fallacy/) or the monte carlo fallacy. This fallacy is ' +
                'strong because they believe that their chance of winning is more likely based on how many ' +
                'times they have previously won or won in a row. This would be from being on a winning streak ' +
                'and getting the feeling that you are unable to lose.\n'
        },
        {
            img: CryptoPsychology4,
            title: 'Final Words',
            id: 'Final',
            description: 'The word fear is written out in black letters on individual wooden squares resting on ' +
                'top of a pile of more wooden squares.',
            text: 'Investing can be known as a stressful and emotionally intense activity. When looking at the ' +
                'psychology of crypto investing we can see what people mean but that does not mean that you ' +
                'have to fall into the same traps that others do. To prevent falling into the psychological ' +
                'tricks the market has to offer, make sure that you are investing the same way no matter what ' +
                'phase of the market you are in. When investing or trading keep in mind what others are ' +
                'thinking and see if you can make money from their mistakes. Also, use a [fear and greed index]' +
                '(https://alternative.me/crypto/fear-and-greed-index/) for light reference. Always make ' +
                'decisions with evidence, not emotions.\n' +
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