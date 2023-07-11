import NegativeEmotionsMain from '../../images/articleimages/NegativeEmotionsMain.webp'
import NegativeEmotions1 from '../../images/articleimages/NegativeEmotions1.webp'
import NegativeEmotions2 from '../../images/articleimages/NegativeEmotions2.webp'
import NegativeEmotions3 from '../../images/articleimages/NegativeEmotions3.webp'
import NegativeEmotions4 from '../../images/articleimages/NegativeEmotions4.webp'
import NegativeEmotions5 from '../../images/articleimages/NegativeEmotions5.webp'
import NegativeEmotions6 from '../../images/articleimages/NegativeEmotions6.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function NegativeEmotionalInvesting() {
    const Article = [
        {
            img: NegativeEmotionsMain,
            title: '',
            id: 'Intro',
            description: 'An image of a white yacht in the blue water while the sun sets in the background shining ' +
                'the land with orange and yellow.',
            text: 'Emotional investing is a joint event that happens in financial markets daily. Behavioral finance is one of the most important aspects of investing. To better understand emotional investing, we must break it down into pieces. This way, we can find out the emotions that hold us back to avoid them and the feelings that cause losses for other investors.\n' +
                '\n' +
                'Here are 5 emotions that negatively impact returns and profits:\n' +
                '\n' +
                '1. [Fear](#Fear)\n' +
                '2. [Greed](#Greed)\n' +
                '3. [Naivety](#Naivety)\n' +
                '4. [Revenge](#Revenge)\n' +
                '5. [Bias](#Bias)\n'
        },
        {
            img: NegativeEmotions1,
            title: 'Fear',
            id: 'Fear',
            description: 'A bright full moon in the night sky is lit up blue and surrounded by blue clouds covered ' +
                'by darkness and other gray clouds.',
            text: 'Investing in financial markets can be daunting for many people. Market volatility has many moving parts, and making money from investing takes work. There will always be this emotional avoidance of losing money. This avoidance is also called fear. Fear is not uncommon when looking into how investors feel daily. Hence, there is nothing to be ashamed of if you think of a time when you were fearfully investing. Fears can stem from various sources, including the fear of losing money, not knowing enough about investing, and the fear of making mistakes. The most important part is identifying what is going on first.\n' +
                '\n' +
                'Fear is a normal and natural emotion when investing that has to be looked further into this emotion to [better understand it](https://www.thebalancemoney.com/8-steps-to-overcome-investment-fear-4101564). Fear is sometimes reasonable if you know why it is happening. In fact, fear can be a helpful tool in preventing investors from making impulsive decisions or taking unnecessary risks if done correctly. The most basic form of fear you will experience is the form of FUD, also known as fear, uncertainty, and despair. FUD gets its power from stirring up your emotions with exaggerations or false events to cause anxiety. \n' +
                '\n' +
                'Fear can be in media where articles put down an investment or investing market. When you see an article or person stirring up your emotions, your [first step to avoiding FUD](https://www.nerdwallet.com/article/investing/fud) is recognizing what is happening. If you feel yourself losing control, you should stop and ask yourself what actual evidence you have that supports and is against these claims. After thinking about the evidence, you can get more or decide based on your proof. This decision should purely be from your findings and your own conclusions, not the one of someone else. \n' +
                '\n' +
                'Another way to alleviate fear is to completely ignore what influences your emotions. If you know the media will cause anxiety and feeling, you can stop reading it entirely. It can\'t affect you if you don’t give the sources of this fear power. Sticking to your investing strategy will help you get through bad events, so there is no need to make decisions from someone’s opinions. Creating and sticking to a solid investment plan can help investors avoid making hasty decisions based on emotions and instead perform rational Investing for the long term.\n'
        },
        {
            img: NegativeEmotions2,
            title: 'Greed',
            id: 'Greed',
            description: 'Five dollar bills rolled up and stood on their edges behind a green one-dollar currency ' +
                'on a white surface with the face upwards.',
            text: 'Greed occurs on the other side of the spectrum compared to fear. Desire can quickly take over your actions in the markets and make you forget entirely about your rules, strategies, and fundamentals, all for that craving for more profit. Greedy investing will force you into a short-term thinking mindset where your decisions are based on what is happening in the market rather than seeing the whole picture.\n' +
                '\n' +
                'Benjamin Graham, the father of value investing, wrote in his book [The Intelligent Investor](https://amzn.to/44zqoW7) about the power of investing in efficient assets, an excellent resource for educating yourself about investing with less risk. This efficiency comes from reducing the overall downside risk while increasing profit potential. When you can invest in assets efficiently, profits become easier. One of the biggest downfalls of letting greed get to you and your investing is its blinding effect, causing enormous risks without much reason other than emotion, which can lead to significant losses based on your impulses. These losses will reduce your efficiency, which is different from our goal.\n' +
                '\n' +
                'The most common time to feel greed [is at the top of markets](https://www.investopedia.com/articles/01/030701.asp). When we are at the top, those run by emotions are the only ones still buying. You can protect yourself if you are not one of those emotional buyers. As the price continues to rise, sell when you are supposed to. Don’t fall into the trap of hoping you don’t miss out if you know the movement is driven by emotion. Let the greedy investors keep buying because, eventually, market bubbles pop, and prices will begin to fall again. Once it starts to fall, you don’t want to be the person who panic sells after making a greedy purchase. It is better to stay out of the market than to make bad decisions and lose money.\n' +
                '\n' +
                'Greedy investors desire more profits even when they have already gotten enough. Some are even addicted to the rush it gives them, as if they are [gambling away their money](https://www.forbes.com/sites/forbesfinancecouncil/2022/06/01/investing-vs-gambling-understanding-risk-adjusted-performance/?sh=2e098c0a57d9). This blinding effect that greed has led to taking enormous risks without much reason other than emotion, which can lead the significant losses based on your impulses. We already know that risk aversion is fundamental to investing. To avoid this gambler-like feeling, we need to take our investing seriously. Trying to make profits with your own money at risk can feel like something other than a game. Investing can still be fun, but we must stay focused with our guard up whenever we are working with our money.\n'
        },
        {
            img: NegativeEmotions3,
            title: 'Naivety',
            id: 'Naivety',
            description: 'A row of multicolored books all in a line on a bookshelf all of which containing white ' +
                'pages with dark shadows behind them.',
            text: 'When investing, naivety is very similar and can be just as dangerous as the emotion of greed. This is due to both these emotions having a feeling of overconfidence. The difference lies in the reason. While greedy investing gives you confidence from the same feeling as gambling, naivety gives investors the false impression that they are better than they know. Being naive can lead to many losses and is one of the biggest reasons new investors quit. Many of the newer investors that left believe they deserve to make money in the markets depending on how much effort they put in when really it is [just a lack of experience](https://fastercapital.com/content/Why-Investing-is-hard.html). They also think that if they lose money, it’s the market\'s fault rather than not understanding the market.\n' +
                '\n' +
                'Some veteran investors have been doing this for decades. Everything is possible with time. If you study the right things, you need consistency. Your first year or two might not be profitable. Starting out in investing sets your foundation for profit that lasts the rest of your life. That does not come from a few months of practice and not doing your research. To avoid naivety, we need to set up an investing strategy from the start. Once we have our plan, we must tackle our decisions and find weaknesses. Then all we have left to do is continually adjust and adapt to the market and our system to continue improving our returns.\n' +
                '\n' +
                'When [building an investing plan](https://moneysmart.gov.au/how-to-invest/develop-an-investing-plan). Not all assets should be treated the same. Some are better than others. It’s our job to find out which. Asset selection can be a little tricky when first starting off. An easy way around this is picking popular choices because even though you didn’t do much research, you know these assets have a lot of demand. After you choose your potential investments for your portfolio, it’s time to build your strategy on how to invest in them. This should be done by finding trends or situations that repeat themselves over the past few months or years. Once you have a set of movements you know have a high chance of profit, you can start putting them into your system.\n' +
                '\n' +
                'This system will guide you through times of uncertainty and help you level up from the stage of a new investor to a mediocre investor. While rules won’t make you the perfect investor, they can help you get started. You will want to start tracking your trades and decisions as you improve. This can be done in a trading journal, where you write down your reasoning before making an investment decision and then write down the outcome afterward. By doing this, you can have a book filled with your choices that you can reflect on and notice where your weaknesses and strengths are. [Paper journals are a great resource](https://amzn.to/3NGE8HL), where you have a hard copy of your decisions. I believe that writing down things is much better than typing them out.\n'
        },
        {
            img: NegativeEmotions4,
            title: 'Revenge',
            id: 'Revenge',
            description: 'A red sunset on the mountains as black birds are flying through the sky containing ' +
                'highlights of orange and yellow clouds.',
            text: 'When making a mistake in investing, our natural response is to feel bad about it or upset at our decisions. When we lose money, this is a hard thing to process. As investors, we need to be able to take losses and realize that they are going to happen eventually. This acceptance prevents the feeling of losing money from turning into anger, making us want to make money even more. This type of anger gets a hold of us and makes us go into hazardous decisions that should not be acted upon. \n' +
                '\n' +
                'This type of investment decision is called revenge trading. Revenge trading is your natural response to being upset at losses, forcing you back into the market to [recover your losses](https://foolwealth.com/insights/wondering-when-you-may-recover-your-market-losses). When investors trade with revenge, they are no longer making rational investment decisions based on market analysis but acting out of frustration and a desire to recoup losses. This can lead to impulsive trades needing to be grounded in solid investment principles.\n' +
                '\n' +
                'These trades will fuel your negative emotions even more since you will likely continue losing more money, causing stress and anxiety to build as you feel less in control. This can quickly spiral out of control if not stopped early on. [Patience](https://einvestingforbeginners.com/patient-investing/) is one of the most essential traits that investors must have. Tolerance allows you to wait for the best opportunities, prevent self-sabotage, and not rush.\n' +
                '\n' +
                'Victoria Ivashina and Josh Lerner discuss the importance of patience while investing in their book [Patient Capital](https://amzn.to/43p7LDy). Those who are not patient will make bad decisions for no reason. Being patient is also a fantastic skill outside of investing that can increase your happiness outside of work. While others are upset about traffic, you can embrace it. While lines are ruining other people’s days, patient investors will be able to carry their skills to real life and not allow these tiny things to negatively impact them. \n'
        },
        {
            img: NegativeEmotions5,
            title: 'Bias',
            id: 'Bias',
            description: 'A wooden table that has three white playing cards, poker chips of many colors, and five ' +
                'red dice with white dots on top.',
            text: 'Bias is inherent in human nature and can be particularly damaging when investing. Investors who allow their preferences to influence their decisions can make costly mistakes that can impact their portfolios and wallets for years. Investing is challenging, making it easy to fall prey to cognitive traps. By taking a mindful and intentional approach to investing, you can avoid emotional biases and these pitfalls to make sound decisions that align with your financial goals and risk tolerance. \n' +
                '\n' +
                '[Confirmation bias](https://www.wallstreetmojo.com/confirmation-bias-examples/) occurs when investors seek information confirming their beliefs and ignore evidence contradicting them. If an investor believes a particular asset is a good investment, confirmation bias can occur whenever something positive happens. This bias makes investors look for positive news or analysis supporting their view and only shares part of the picture. To avoid confirmation bias, investors should consciously seek out diverse sources of information and consider all viewpoints before making investment decisions.\n' +
                '\n' +
                '[Gambler\'s fallacy is seen](https://www.etmoney.com/blog/gamblers-fallacy-what-is-it-and-how-to-avoid-it-while-investing/) in both casinos and investing. It occurs when one believes their odds of winning the next one are higher after a few wins. Since you spend so many rounds beating, you feel that your luck will always stay strong. As investors, the odds of you being successful rarely change unless you modify your strategy. Not knowing this before going on a winning streak can lead to taking more significant risks and losing more than what was gained. Rather than falling prey to their biases, investors must reason and stick to their plans no matter what is happening in the markets. Mary Scott wrote a book called [Gambler\'s Fallacy](https://amzn.to/44fKPYx) which can be used as a great resource to better understand the mind of gamblers and how to avoid gambling with your investments.\n'
        },
        {
            img: NegativeEmotions6,
            title: 'Concluding Words',
            id: 'Conclusion',
            description: 'A city on the water is lit up with blue lights and each building has its own white and ' +
                'yellow room lights on in random windows.',
            text: 'To overcome emotional investing, we have to understand what influences us. These emotions are powerful forces for risk if not taken seriously. The psychology of investing is dependent on the feelings that others are feeling. You want to be someone other than the one that suffers from emotional mistakes. Fear, greed, naivety, revenge, and bias do not have to be removed from your body entirely as they are natural to feel. The investor\'s job is not to let them impact their financial decisions, regardless of their emotions.\n' +
                '\n' +
                '### How to stay calm when the market is volatile?\n' +
                'During volatile markets, emotions are at their peak. The best way to avoid them from taking over is to put systems in place and be able to notice when you feel them coming into play.\n' +
                '\n' +
                '### What is the impact of emotions on investment performance?\n' +
                'Emotions will cause you to make decisions that are not entirely in line with the rules you have placed on yourself. These irrational decisions hold more risk and a greater chance for losses.\n' +
                '\n' +
                '### How can you level up your investing?\n' +
                'Everything comes in phases. The best way to level up is to continually study the investing field and areas related to the assets you choose to invest in. Knowledge will eventually build up until you have enough to level up.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}