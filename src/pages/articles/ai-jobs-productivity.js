import JobsAIMain from '../../images/articleimages/JobsAIMain.webp'
import JobsAI1 from '../../images/articleimages/JobsAI1.webp'
import JobsAI2 from '../../images/articleimages/JobsAI2.webp'
import JobsAI3 from '../../images/articleimages/JobsAI3.webp'
import JobsAI4 from '../../images/articleimages/JobsAI4.webp'
import JobsAI5 from '../../images/articleimages/JobsAI5.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function AiQuantInvesting() {
    const Article = [
        {
            img: JobsAIMain,
            description: 'A head that is made up of technology as a image of artificial intelligence that is ' +
                'blue one one side and orange on the other.',
            text: 'When new technology comes around people are always worried about their jobs ' +
                'and getting replaced by these new innovative ideas to help companies save money. ' +
                'When it comes to getting replaced in today’s time, most people are afraid of ' +
                'robots taking over the workplace and the [Downsides of AI](/articles/downsides-' +
                'of-ai). One way you can avoid this, is rather than fight it, use this technology ' +
                'to your advantage.\n' +
                '\n' +
                'Here are the jobs you are going to want to have to use AI to your advantage\n' +
                '\n' +
                '1. [Investors](#Investors)\n' +
                '2. [Creative Workers](#CreativeWorkers)\n' +
                '3. [Developers and Programmers](#DevelopersProgrammers)\n' +
                '4. [Customer Support Engineers](#CustomerSupport)\n'
        },
        {
            img: JobsAI1,
            title: 'Investors',
            id: 'Investors',
            description: 'A phone that is showing crypto charts on top of some hundred dollar bills that are ' +
                'face up with a shiny metal pen on top of them.',
            text: 'Investors of the past have been hard-coded to create algorithms with set rules from ' +
                'their findings. AI has the power to change that. With AI, investors can find profitable ' +
                'trends far more accurately than any human could, however, we are not quite there yet. In ' +
                'the meantime, rather than being left behind as AI gets stronger, it is important to use it ' +
                'to your advantage. My article on [How to Become an AI Quant](/articles/ai-quant-investing).\n' +
                '\n' +
                'AI Investing has to be taken from many aspects and the most reasonable right now is ' +
                'finding how efficient each asset is. We can do this by using price data and allowing ' +
                'our AI to process it, telling us which the best Assets are and why. There can be many ' +
                'different methods of determining efficiency and this is where the human mind will come ' +
                'in. AI may not be able to choose the right asset for personalized situations and to stay' +
                ' with the times investors can use the results to their advantage rather than being ' +
                'fully replaced by AI-Powered Robo Investors. If you would like to see where we are ' +
                'currently with Robo Advising technology, Investopedia has an article called ' +
                '[Robo-Advisor: Advantages and Disadvantages](https://www.investopedia.com/articles/' +
                'personal-finance/010616/pros-cons-using-roboadvisor.asp). \n' +
                '\n' +
                'Another aspect that AI can help with is balancing a portfolio. If an investor would ' +
                'like a specific set of assets in their portfolio at all times it can be difficult to ' +
                'know how much of what will bring you the most profit. When we use AI to balance our ' +
                'assets, we can include the specific data that should be included in the evaluation. ' +
                'Forbes talks about similar cases in their article [Why An AI Portfolio Is Better Than ' +
                'A Traditional Fund Manager](https://www.forbes.com/sites/qai/2022/08/23/why-an-ai-' +
                'portfolio-is-better-than-a-traditional-fund-manager/?sh=658d0d84594b). The creativity ' +
                'of when to invest, at the moment, is more accurate when made by human investors. ' +
                'Those who are investing would be able to use the results of the AI portfolio balancing ' +
                'in their investing where they buy and sell when they feel like it, but the amounts ' +
                'are predetermined. If you are interested in researching when to invest, visit our ' +
                'page [Market Insights](/insights).\n'
        },
        {
            img: JobsAI2,
            title: 'Creative Workers',
            id: 'CreativeWorkers',
            description: 'A shiny glass lightbulb that is dimly lit with an orange flow surrounding it that is ' +
                'vintage in front of a fully black background.',
            text: 'The human mind is far more capable and amazing than many seem to realize. The way we ' +
                'think is very complicated and much more advanced than a few lines of code. Even though ' +
                'this is true, we still face the fact that creative work could be replaced by robots if ' +
                'technology gets to that. To remain above creative robots, there are many things you can ' +
                'do to ensure that you will always beat them.\n' +
                '\n' +
                'For artists and photographers that may get replaced by AI image generators, there is ' +
                'still hope to get the upper hand. For AI to generate something great it has to process ' +
                'an image that is already great. If you have a specific style of art or photos, you can ' +
                'use your portfolio to train an AI model. Once you give the AI your work, it will process ' +
                'your style and understand how to create images similar to it. Constantly creating your ' +
                'work can be used to adapt your model to represent your style better than a traditional ' +
                'image generator like [Dall-e 2](https://openai.com/product/dall-e-2). Once you have a ' +
                'complete model, all you have to do is tell it what type of image you want it to make, ' +
                'fully based on your work.\n' +
                '\n' +
                'Writing is very similar. AI produces generic solutions to complicated problems where ' +
                'writing would become boring and repetitive. Creative minds are essential to writing ' +
                'engaging content. Simple AI like Grammarly is great for finding typos, however, to ' +
                'fully generate text, it would be bland and get crushed by professionals in this field. ' +
                'This does not mean that AI is not helpful for writers though. This technology can be ' +
                'used to bring up aspects of topics that you might have missed so that your writing can ' +
                'fully represent the information you are trying to talk about. Using it as a tool for ' +
                'editing and outlines rather than a text generator is the perfect way to use AI for ' +
                'your work rather than get replaced by it.\n'
        },
        {
            img: JobsAI3,
            title: 'Developers and Programmers',
            id: 'DevelopersProgrammers',
            description: 'A macbook laptop with computer code displayed on it and an iPhone resting on the ' +
                'keyboard next to an open notebook and pen.',
            text: 'Programming errors are common and no one wants to read through the source code of ' +
                'libraries or search through their code to see if they missed a semicolon or had a random ' +
                'typo in hundreds of lines of code. For example, when writing in [Python for Crypto and ' +
                'Finance](/articles/python-for-finance), you will need to be creative enough to produce ' +
                'your solutions, but can still use AI to help with your tedious work of debugging and ' +
                'repeating code.\n' +
                '\n' +
                'Developing code means that you must provide unique solutions that have never been done ' +
                'before. AI has to be trained on previous code to be able to give you the answers you ' +
                'want and since it has never been done before, it requires the thinking of a developer. ' +
                'This opportunity shows that programming will be very difficult to replace as long as you ' +
                'are programming something that has never been done before. \n' +
                '\n' +
                'Staying ahead of AI means that you have to not only produce new code, but be fast at ' +
                'writing code that has already been done, and what better way than to use AI in your ' +
                'coding? Using well-trained AI for coding can help you repeat annoying code that takes ' +
                'a while to do. AI will speed up your productivity to the point where all you have to do ' +
                'for repetitive code is write what you need and copy and paste it into your own. Code ' +
                'from AI can also be with good coding practices to save you even more time when going ' +
                'through it. If you are interested in seeing how you can reduce time on less important ' +
                'tasks, take a look at the Forbes article on [5 AI Tools That Can Generate Code To Help ' +
                'Programmers](https://www.forbes.com/sites/janakirammsv/2022/03/14/5-ai-tools-that-can-' +
                'generate-code-to-help-programmers/?sh=2d100cfb5ee0)\n'
        },
        {
            img: JobsAI4,
            title: 'Customer Support',
            id: 'Customer Support',
            description: 'A person on a black chalkboard with the words service, quality, efficiency, ' +
                'reliability, and customer all surrounding it.',
            text: 'The customer is always right and annoyingly, to ensure that both sides get what they want, ' +
                'it takes time to satisfy them. Customers want to make sure they are getting the treatment ' +
                'and products they pay for and companies want to make sure that they are being paid a proper ' +
                'amount for the work that they are doing. AI can help Customer Service Engineers increase ' +
                'customer engagement, as mentioned by McKinsey & Company in their article [AI-enabled ' +
                'customer service](https://www.mckinsey.com/capabilities/operations/our-insights/the-next-' +
                'frontier-of-customer-engagement-ai-enabled-customer-service). \n' +
                '\n' +
                'Customer service chatbots are a great way to speed up how fast you can satisfy a customer ' +
                'without having to pay an actual employee to pick up the phone and talk someone through how ' +
                'to manage their account. AI can explain complicated processes and clarify when the customer ' +
                'needs it. \n' +
                '\n' +
                'Customer Service Engineers are in charge of making sure this process goes as smoothly as ' +
                'possible and AI can help them when doing this rather than hurt them if they use AI ' +
                'correctly. Customer service engineers used to have to hard code solutions on how to help ' +
                'customers with long documents to solve issues. AI can make coding customer service shorter ' +
                'and more accurate than previous chatbots.\n'
        },
        {
            img: JobsAI5,
            title: 'Ending Notes',
            description: 'Black board with a bunch of lightbulbs and a plus sign then a bunch of gears that ' +
                'equal a bar chart that is flowing upwards.',
            text: 'The thought of AI being just as capable as a human worker can be scary though. The way to ' +
                'get around this is to improve how well human productivity is. In terms of Investing, ' +
                'Creative Work, Programming, and Customer Support, instead of trying to outrun AI, workers can ' +
                'incorporate it to improve their value even more.'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}