import BigCryptoMain from '../../images/articleimages/BigCryptoMain.webp'
import BigCrypto1 from '../../images/articleimages/BigCrypto1.webp'
import BigCrypto2 from '../../images/articleimages/BigCrypto2.webp'
import BigCrypto3 from '../../images/articleimages/BigCrypto3.webp'
import BigCrypto4 from '../../images/articleimages/BigCrypto4.webp'
import BigCrypto5 from '../../images/articleimages/BigCrypto5.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function NextBigCrypto() {
    const Article = [
        {
            img: BigCryptoMain,
            title: '',
            id: '',
            description: 'A tiny clay man in a blue jacket and brown hair reading a book sitting on a pile of ' +
                'eleven foreign coins with gold coatings.',
            text: 'The world of investing is very broad and crypto is one of the more volatile categories. ' +
                'This is both good and bad for those wanting to make money. More risk means more reward as ' +
                'well. I believe that crypto is only getting started and now is one of the best times ever' +
                ' to get on board. If you have been following Crypto for a while you know about the recent ' +
                'bull run that has led to this current bear run. \n' +
                '\n' +
                'In the beginning, crypto was very sketchy and hard to trust. Now that we know what it is ' +
                'capable of and are at a low in the market, the only way to go is up.\n' +
                '\n' +
                'There are tons of cryptocurrencies out there and finding the one you want to invest in ' +
                'can be tricky. How will we know which ones are the best for you?\n' +
                '\n' +
                '1. [Efficiency Limits Losses](#Efficiency)\n' +
                '2. [Popularity Ensures Movement](#Popularity)\n' +
                '3. [Trends For Longevity](#Longevity)\n' +
                '4. [The Big Cryptocurrencies for Reliability](#Reliability)\n'
        },
        {
            img: BigCrypto1,
            title: 'Efficiency Limits Losses',
            id: 'Efficiency',
            description: 'Innovative lightbulb with the bright part coiled around in the shape of a cube surrounded ' +
                'by a completely dark background.',
            text: 'these coins takes research and time. When choosing an efficient asset, we do not care about which ' +
                'asset is the best one to invest in at this moment. What we want, is something that will continually ' +
                'make us profit. We must look into risk-reward ratios and make sure that even if a coin is good at ' +
                'making money, it has to be able to minimize its risk as well. \n' +
                '\n' +
                'The Golden Mean is a term used by the philosopher Socrates that I believe is very important to ' +
                'consider when picking assets and investing. The Golden Mean is a term used to make sure that you ' +
                'are not too far on either of the extremes. This can apply in a game like chess where you should ' +
                'not be too aggressive that you lose your pieces. However, you should not be too passive to the ' +
                'where you get crushed by your opponent. The Golden Mean represents the perfect balance. An ' +
                'Efficient asset holds The Golden Mean between risk and reward.\n' +
                '\n' +
                'Finding this balance takes measuring a coin’s efficiency with data. This involves finding ' +
                'important ratios like the Sortino and Sharpe Ratios. Investopedia wrote an article called ' +
                '[What Are Greeks in Finance and How Are They Used?](https://www.investopedia.com/terms/g/greeks.asp)' +
                '  on many other types of risk-related variables. It is also another option to leave the calculations ' +
                'to an outside source. Webminers has our very own [Asset Efficiency Page](/efficiency) ' +
                'dedicated to the most important ratios available.\n'
        },
        {
            img: BigCrypto2,
            title: 'Popularity Ensures Movement',
            id: 'Popularity',
            description: 'Black laptop computer screen two blow graphs covered in blue bars that are skewed to ' +
                'the right containing an orange line.',
            text: 'Popular coins are those that are traded by a bunch of people during a set amount of time ' +
                'and this is a great opportunity for you. Seeing that there is a lot of demand for a certain ' +
                'Cryptocurrency early can be a great way to make an amazing profit. \n' +
                '\n' +
                'Hopping on the bandwagon is not always good and it takes a certain type of investor to be able ' +
                'to identify if you have already missed the profit train. Even though these movements are hard ' +
                'to see, this does not mean it is impossible. High-demand coins can slowly start to go up in ' +
                'value, which is where you come in, and then skyrocket in value.\n' +
                '\n' +
                '[Shiba Inu](https://www.coingecko.com/en/coins/shiba-inu) ' +
                'was a prime example of a coin that slowly gained attention and demand until ' +
                'it took off. Identifying this coin early would have been insanely profitable. Joining late, ' +
                'and you could have lost all your money. Many other things go into a coin gaining popularity. ' +
                'The article ' +
                '[How to play crypto narratives](https://postyxbt.medium.com/how-to-play-crypto-narratives-bbc524fd12cc)' +
                ' goes more in-depth about this type of investing.\n'
        },
        {
            img: BigCrypto3,
            title: 'Trends For Longevity',
            id: 'Longevity',
            description: 'A pen drawn line chart on a white piece of paper with two pens and a metal ruler resting ' +
                'on top all on a dark brown wooden table.',
            text: 'Trends are always surrounding us. Trending videos, careers, and applications are coming and going ' +
                'quickly. AI is one of the most notable recent trends. When ChatGPT had its big trend of attention ' +
                'AI cryptos began to soar. Following trends in your field can help you identify when there will be ' +
                'an outperforming asset when compared to another part of the market. Maybe this is data science coins ' +
                'or decentralized finance. Whatever it may be, staying on top of the news can help you get the ' +
                'edge over others. \n' +
                '\n' +
                'Since trends come and go fast it is important to stay up to date. ' +
                '[Seekingalpha.com](https://seekingalpha.com) ' +
                'has been a reputable source for similar information and I suggest you check it out of you are ' +
                'willing to pay for a subscription for knowledge. \n' +
                '\n' +
                'My favorite form of gathering information comes from social media though. Social media is ' +
                'great for finding trends. [Twitter](https://twitter.com) even has a category of trending hashtags. ' +
                'I use Twitter anytime I need to do research for new data or cryptocurrencies to look into. There ' +
                'is so much to look through on social media and as long as you know how to sift through the garbage, ' +
                'there will be lots of value waiting for you.\n'
        },
        {
            img: BigCrypto4,
            title: 'The Big Cryptocurrencies for Reliability',
            id: 'Reliability',
            description: 'A tipped-over glass jar that is holding a large number of bronze coins with some ' +
                'spilled out onto a light brown surface.',
            text: 'Big cryptocurrencies have been around the longest and will stay around even longer. These coins ' +
                'have the reliability of never going to 0. This means that they are the least risky out of all the ' +
                'other cryptocurrencies you can pick from. These cryptos are Ethereum, Bitcoin, and Solana. Solana ' +
                'has had its issues so it may not be as reliable as it used to be, but Bitcoin and Ethereum remain ' +
                'on top. They are the most reliable coins you can choose. They have years of history that you can ' +
                'look into, and tons of data to be able to study and evaluate.\n' +
                '\n' +
                'Being the mass monsters they are, this allows them to contain all of the categories above. When ' +
                'AI trends, so do Eth and Btc because they will always go up when another category goes up since ' +
                'so many people are involved with these coins. Eth and Btc have a characteristic called market ' +
                'correlation. This means that when people are excited to buy crypto, no matter what it is, people ' +
                'end up buying Eth and Btc as well. After all who wouldn’t? \n' +
                '\n' +
                'Eth and Btc remain at the top of my list for big coins to hold which is why if you take a look at ' +
                '[Webminers Asset Balancing](/balancing) ' +
                'you will see that Ethereum takes up the majority of the research-suggested portfolio. ' +
                'Eth is efficient, has popularity, and trends, and is one of the big dogs of cryptocurrencies. ' +
                'I believe that for the time being, even when Btc does better for short periods, Eth will catch ' +
                'up eventually.\n'
        },
        {
            img: BigCrypto5,
            title: 'Closing',
            id: '',
            description: 'Cryptocurrency candle chart on a screen that is heading downward with three lines above ' +
                'it colored blue, green, and yellow.\n',
            text: 'Now that we know how to find the next big cryptocurrencies to invest in, it’s time to go out ' +
                'and find them. To find a generally good time to buy based on multiple different timeframes, ' +
                'you can visit [Webminers Market Insights](/insights) to keep track of where we are ' +
                'in the market and time your decisions based on research.\n' +
                '\n' +
                'Join the [Webminers Mailing List](/email-list) to get notified when new articles ' +
                'are published'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}