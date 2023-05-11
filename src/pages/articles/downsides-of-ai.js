import DownsideAIMain from '../../images/articleimages/DownsideAIMain.webp'
import DownsideAI1 from '../../images/articleimages/DownsideAI1.webp'
import DownsideAI2 from '../../images/articleimages/DownsideAI2.webp'
import DownsideAI3 from '../../images/articleimages/DownsideAI3.webp'
import DownsideAI4 from '../../images/articleimages/DownsideAI4.webp'
import DownsideAI5 from '../../images/articleimages/DownsideAI5.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function DownsidesOfAi() {
    const Article = [
        {
            img: DownsideAIMain,
            description: 'A blue realistic animated brain that has lines of wires as if it was a part of a ' +
                'computer representing artificial intelligence.',
            text: 'AI, as of right now, is an amazing tool for crypto investors to keep in their ' +
                'back pocket. There are tons of uses and possibilities for integration. Investing ' +
                'has not yet been taken over by AI, however this does not mean that this will ' +
                'continue to be the case. As AI begins to get more popular in Investing, there are ' +
                'many downsides we must take into account.\n' +
                '\n' +
                'These are the ways that AI could be used as a tool of harm in the markets:\n' +
                '\n' +
                '1. [Market Manipulation](#MarketManipulation)\n' +
                '2. [Large Spikes or Dips From Sentiment](#Sentiment)\n' +
                '3. [Fake News](#FakeNews)\n' +
                '4. [The Top 1%](#Top1)\n'
        },
        {
            img: DownsideAI1,
            title: 'Market Manipulation',
            id: 'MarketManipulation',
            description: 'A black and white image of a computer screen that has three different line charts ' +
                'and multiple datasets for market analysis.',
            text: 'Manipulation of the markets happens all the time from Market Movers. These instances ' +
                'could be dropping the price a ton forcing people to cut their losses and sell as well as ' +
                'falsely raise market price just to rapidly drop it. When AI comes into play, this can be ' +
                'good for investors to make smarter decisions, as well as detrimental if in the wrong hands. ' +
                'Instances like mentioned in my article about [AI Quants](/articles/ai-quant-investing) can ' +
                'be used for harm just as easily as they are used to make an investor money.\n' +
                '\n' +
                'AI can be used to identify weaknesses in the market. These can be from low volatility or ' +
                'unique cases that would be hard to see without advanced technology. If a Market Whale, also ' +
                'known as someone who trades with a ton of money, is able to catch onto this, there could be ' +
                'serious losses. This could be for fun or to make this Market Mover a lot more money.\n' +
                '\n' +
                'Another way that AI could be used in a negative way for investors would be to identify ' +
                'trends that automated trading programs or investors normally use as a buy signal. There are ' +
                'many indicators that investors use on a daily basis, being able to identify areas where a ' +
                'lot of people hope to be buying can be an easy way for a Market Mover to make money. All ' +
                'they would have to do is wait for that condition, then sell the amount they are holding, ' +
                'forcing others to unwillingly cut their losses, then rebuy at a lower price.\n'
        },
        {
            img: DownsideAI2,
            title: 'Large Spikes or Dips From Sentiment',
            id: 'Sentiment',
            description: 'A black windows keyboard that is showing Twitter, Facebook, LinkedIn, Pinterest, ' +
                'and more social media company logos as keys',
            text: 'Market sentiment makes up what the majority of people on the internet are thinking ' +
                'of a specific topic, in our case this is AI. Since AI is so universal, there are many ' +
                'AI-powered applications like [Chatbot AIs](https://www.zdnet.com/article/best-ai-chatbot/) ' +
                'and [AI Image Generators](https://www.tomsguide.com/features/5-best-ai-image-generators-' +
                'tested-and-compared) that a lot of people use and put their attention towards.\n' +
                '\n' +
                'If something amazing and new came out, there would be an unexpected rise in market price ' +
                'followed by a matching fall that are both not able to be explained through regular data ' +
                'and must be found out with a sentiment indicator. This means that investors who use only ' +
                'data and are only familiar with one type of investing will suffer when their system no ' +
                'longer works during this time of hype.\n' +
                '\n' +
                'The other hard part about sentiment of AI is if something bad were to happen. If AI gets ' +
                'out of hand or ends up causing harm to someone, this will be all over the news and people ' +
                'will begin to worry. Worry of the public will then cause the markets to fall unexpectedly ' +
                'again.\n'
        },
        {
            img: DownsideAI3,
            title: 'Fake News',
            id: 'FakeNews',
            description: 'Multiple newspapers stacked on top of each other with the camera focused on ' +
                'one in the middle of them that says World Business.',
            text: 'AI is still developing and as of now there is nothing stopping someone from releasing ' +
                'false information from AI on the news or internet. This propaganda could be by accident ' +
                'and a mistake by the AI or fully on purpose. Fraud and forgery can be almost impossible ' +
                'to detect digitally.\n' +
                '\n' +
                'AI used to produce false news can generate fully realistic images of events that never ' +
                'even happened. Josh Goldstein has many good points on [AI-Powered Propaganda]' +
                '(https://www.foreignaffairs.com/united-states/coming-age-ai-powered-propaganda), especially ' +
                'in Social Media. Faking crises across the world, generating charities based on fake images ' +
                'that are only developed to trigger your emotions into wanting to help out those in need is ' +
                'a serious problem to look out for. For crypto investors who are inherently “anti-regulation”, ' +
                'as I talked about in my article [What is Decentralization](/articles/decentralization-for-' +
                'crypto), this will cause some issues. This forces crypto investors to find other forms of ' +
                'protection against possible losses until a solution can come into play that regulates AI in ' +
                'the crypto world.\n' +
                '\n' +
                'AI-powered applications make mistakes, giving off information. Any sort of advice that could ' +
                'impact you critically should never be just from AI. Afterall AI bases its answers off of ' +
                'previous data and you may have a special case or the AI could have bad data to make the ' +
                'decision for you. Always seek professional help when possible.\n'
        },
        {
            img: DownsideAI4,
            title: 'The Top 1%',
            id: 'Top1',
            description: 'A briefcase full of one hundred dollar bill stacks with rubber bands on a black ' +
                'table with more bills surrounding the case.',
            text: 'The Top 1% is commonly referred to as the best of the best. This also refers to the ' +
                'top 1% of people with money. The rich will always have more and better access to technology ' +
                'when compared to those with less money and this can greatly impact Crypto Investors and ' +
                'everyday people when it comes to AI. Adam Enfroy provides a very nice list of [AI Investing ' +
                'Tools](https://www.adamenfroy.com/ai-investing-software) with great technology that contains ' +
                'subscriptions that seem to be targeted at investors with money to spare on them. However, ' +
                'we do not see many cheap or free tools.\n' +
                '\n' +
                'The Top 1% of people with money will have better AI than what is released to the public ' +
                'because they are able to offer more money to it or might even get it through their important ' +
                'connections. Better AI will produce more accurate results and can even produce a wider ' +
                'selection of answers or ways to use the information that is provided.\n' +
                '\n' +
                'This unique AI that is not provided to the general public can also be technology that we ' +
                'have never heard of before. Classified information that is only available to the highest ' +
                'bidder is definitely out there and can be used against investors without them even knowing ' +
                'it.\n'
        },
        {
            img: DownsideAI5,
            title: 'Final Thoughts',
            description: 'A back background that has a blue outline of a head and a question mark in the ' +
                'middle of it with blue lines going all over.',
            text: 'AI has amazing applications, as mentioned in my article [Financial AI]' +
                '(/articles/financial-ai-and-data-science), but it is not perfect and will never be without ' +
                'downside. Every positive has its negative and it is important to know what our future holds ' +
                'as technology advances. Protecting yourself from these dangers is crucial for reasonable ' +
                'investing so that you are not a sitting duck when a crisis comes. Ensure that you are keeping ' +
                'up with the times only investing with a robust Investing System. \n' +
                '\n' +
                'Interested in making a robust system? Check out my article on [How to Start Investing]' +
                '(/articles/start-investing)\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}