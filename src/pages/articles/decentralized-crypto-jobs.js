import CryptoJobsMain from '../../images/articleimages/CryptoJobsMain.webp'
import CryptoJobs1 from '../../images/articleimages/CryptoJobs1.webp'
import CryptoJobs2 from '../../images/articleimages/CryptoJobs2.webp'
import CryptoJobs3 from '../../images/articleimages/CryptoJobs3.webp'
import CryptoJobs4 from '../../images/articleimages/CryptoJobs4.webp'
import CryptoJobs5 from '../../images/articleimages/CryptoJobs5.webp'
import CryptoJobs6 from '../../images/articleimages/CryptoJobs6.webp'
import CryptoJobs7 from '../../images/articleimages/CryptoJobs7.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function DecentralizedCryptoJobs() {
    const Article = [
        {
            title: '',
            id: 'Intro',
            img: CryptoJobsMain,
            description: 'A golden coin resting on its edge with the Bitcoin logo on it facing forward in front ' +
                'of a city made from silver buildings.',
            text: 'Making more from your work gives you the freedom to do more of what you want. Whether this is going out to eat, or buying that new car you’ve always wanted. On top of more money, being a part of something new gives you that fresh scent of opportunity. A few years down the line you can look back and say that you helped build something great that exists. Both of these can come from working in a new and innovative workplace like cryptocurrency.\n' +
                '\n' +
                'Here are 6 decentralized jobs that will help jump-start your career in crypto and impact our future for the better:\n' +
                '\n' +
                '1. [Financial Advisor](#FinancialAdvisor)\n' +
                '2. [Software Developer / Blockchain Developer](#Developer)\n' +
                '3. [Data Scientist / Artificial Intelligence Expert](#Data)\n' +
                '4. [Ethical Hacker / Cybersecurity Specialist](#CyberCrime)\n' +
                '5. [Digital Marketer](#DigitalMarketer)\n' +
                '6. [Technical Writer](#TechnicalWriter)\n'
        },
        {
            title: 'Financial Advisor',
            id: 'FinancialAdvisor',
            img: CryptoJobs1,
            description: 'A gray pen without a cap next to a black calculator with white lettered buttons and a ' +
                'yellow sticky note pad all on a table.',
            text: 'Financial advising is a path that will never go away. No matter what AI is developed or a robot that can copy and paste messages to customers, the feeling of putting someone’s hard-earned money into a real person’s hands that they trust will always be in need. Robots cannot match the empathy and personalization that real humans can. As we adopt cryptocurrency more as time goes on, investors who ask for advice should be the ones who hear about it. Crypto is an important asset in the category of investing and financial advisors suggest it is both giving the customer a great asset and promoting crypto at the same time. In doing so, we can give profits to happy customers and increase the exposure that crypto has.\n' +
                '\n' +
                'Being a financial advisor means that you can help customers make money from investing and the markets in ways that they do not have the expertise to do themselves. You will be able to create a personal connection with these people and advise them with your suggestions and [pieces of knowledge about efficient assets](/efficiency). Financial advisors also have the opportunity of working with clients who have extremely large funds to be invested, sometimes in the millions. It is important to understand that being a financial advisor is the most risky job on this list, and with this risk comes the opportunity to make a lot of impact.\n'
        },
        {
            title: 'Software Developer / Blockchain Developer',
            id: 'Developer',
            img: CryptoJobs2,
            description: 'A darkly colored metal chain with light blue technology wires attached to it with the ' +
                'yellow sun shining down on top of it.',
            text: 'The blockchain is the [system upon which cryptocurrencies function](what-is-the-crypto-blockchain). This system has much more meaning than the transfer of money as well. Blockchain is such an attractive technology because the whole idea of it is security and transparency. The blockchain is built with nodes and these nodes are what transfer data and information over the blockchain. When we do this openly, we can be transparent about what is going on, while still being secure by preventing this data from being stolen or used against anonymous users.\n' +
                '\n' +
                'This [sense of security](blockchain-transaction) is very attractive to customers that technology businesses strive to please. Where there is a need in an industry comes opportunity. The jobs of both Software Developers and Blockchain Developers are very important to give these customers what they want. Using these crypto jobs can ensure that the safety of customers is secure and their needs are met. These applications being provided to customers must be built by either Software Developers or Blockchain Developers and sometimes a mix of the two. The blockchain provides these in-demand jobs from being a growing technology that needs your help and expertise to expand and grow.\n'
        },
        {
            title: 'Data Scientist / Artificial Intelligence Expert',
            id: 'Data',
            img: CryptoJobs3,
            description: 'A white cup of coffee on a white place is sitting next to a gray macbook laptop with ' +
                'multi-colored bar and pie graphs on it.',
            text: 'Financial analytics is a very broad term that covers how someone could use data for financial purposes. Most importantly these purposes can help when dealing with crypto and investing. When someone has data about financial markets, we want to be able to process and understand this information. Data can come from almost anything including the economy and price data. These numbers have been relatively similar throughout the years, with the main thing being changed is how we look at this data. Being able to analyze financial data and find a way to consistently make money in the markets with an investing system is a priceless solution that companies are willing to pay generously for. This creates [high-paying jobs for you](https://www.coursera.org/articles/financial-analytics).\n' +
                '\n' +
                'Data Scientists and Artificial Intelligence experts are in great need as of right now, with even more of a desire inside the financial industry. Finance is known to provide well-paying jobs and mixing that with technology will only expand this even more. While working in finance and crypto, your job as a data scientist or artificial intelligence expert would be to develop programs or [systems that can be used to make a profit](start-investing) in the markets. Understanding the markets can be tricky for someone who is just in the field of data and has not worked much with finance. Learning the ropes of the markets and [market psychology](crypto-market-psychology) opens lots of doors for even more areas of work including the chance of [becoming an AI Quant](ai-quant-investing).\n'
        },
        {
            title: 'Ethical Hacker / Cybersecurity Specialist',
            id: 'CyberCrime',
            img: CryptoJobs4,
            description: 'A red padlock sitting on the keyboard of a dark gray macbook laptop that has a turned ' +
                'off black screen in front of a white wall.',
            text: 'As the world goes more digital, crime does as well. Digital crime [will continue to rise as well](https://www.theguardian.com/technology/2021/jun/14/age-of-the-cyber-attack-us-digital-destabilization) and there is little that anyone can do about it other than protecting themselves. This crime comes in the form of scams, fraud, phishing, and even the stealing of digital information or money. Websites and banks get hacked, causing you to lose data and money, fake sites are put up and you get scam emails, hacking into your devices or stealing your data and passwords, there are tons of ways that you could be vulnerable to these types of attacks. For businesses to solve these security issues that are on the rise, they need specialized workers who know how.\n' +
                '\n' +
                'Cybersecurity specialists and ethical hackers are both jobs that will continue to rise in demand with this need. [Ethical hacking in crypto is essential](ethical-hacking) to preserve the security of investors and protect other companies while making deals using smart contracts. Crypto, just like anything else involving large amounts of money stored in one place, is a hotspot for criminals to target and attempt to steal by compromising devices or finding security phrases to unlock crypto wallets. Smart contracts can have vulnerabilities if there is a mistake, allowing for [millions of dollars to be stolen](https://arstechnica.com/information-technology/2021/12/hackers-drain-31-million-from-cryptocurrency-service-monox-finance/) from the two parties making this deal. Being able to make an impact by working as a cybersecurity specialist or ethical hacker will mean that you are contributing to making blockchain technology safer, providing confidence and growth to crypto with these blockchain security jobs.\n'
        },
        {
            title: 'Digital Marketer',
            id: 'DigitalMarketer',
            img: CryptoJobs5,
            description: 'A gray macbook laptop with black keys on a white table next to an silver iPhone that ' +
                'has a turned off screen and a red apple.',
            text: 'Over 70k posts are sent out every single second with [billions of people actively using social media](https://backlinko.com/social-media-users). Digital marketers take advantage of this abundance by providing promotional content on social media platforms. Digital marketing can be the face of the brand in many cases, where the majority of sales can come from. Marketing online will reach much more people than a single person could by word of mouth, making it especially important when dealing with cryptocurrency companies. Since digital marketing is online, it is one of the many flexible decentralized jobs in the crypto industry.\n' +
                '\n' +
                'Digital marketing jobs are creative jobs and when you take part in this, you will be able to help a large variety of decentralized finance, also known as [DeFi](https://www.investopedia.com/decentralized-finance-defi-5113835), companies get the attention they deserve to grow their brand. The blockchain can provide for multiple different industries, each needing you for marketing campaigns of their own to promote themselves and authority in their domain. Once you are a part of one of the many remote decentralized jobs in the crypto workplace, you will be able to start making your footprint by giving good products to the hands of customers who will benefit most from it.\n'
        },
        {
            title: 'Technical Writer',
            id: 'TechnicalWriter',
            img: CryptoJobs6,
            description: 'A silver matte colored tin that is holding multiple black pencils with white erasers ' +
                'on a white table next to a pile of books.',
            text: 'Technical Writing bridges the gap between tech speak and what regular people can read and understand. This can be in the form of [educational pieces or briefings](https://www.indeed.com/career-advice/career-development/technical-writing) where it is your job to explain something interesting and complicated to someone who might not know enough to understand the extremely detailed version. This job is important because most workers have not mastered the art of dumbing things down for others and are used to speaking the complicated language to their coworkers.\n' +
                '\n' +
                'This type of writing merges with social media and digital marketing as well. You may have to market a complicated product that needs to be [explained easily](https://hbr.org/2013/06/battle-tested-tips-for-effecti) on social media where people do not want a complicated message. Being so simple that an elementary schooler could understand, yet complicated enough to solve real-world problems is an amazing way to sell a good product to almost anyone.\n'
        },
        {
            title: 'Main Points',
            id: 'MainPoints',
            img: CryptoJobs7,
            description: 'A white piece of paper that has written on it we are hiring with an exclamation mark all ' +
                'in black marker that is slightly faded.',
            text: '### What are the best-decentralized jobs in the crypto industry?\n' +
                'There is no one-size-fits-all when it comes to the best jobs in crypto. This is subjective as there are many ways to succeed in this field and you should pick the path that interests you the most.\n' +
                '\n' +
                '### Will I make more money in bull runs?\n' +
                'When the market is doing well, more people are excited to buy crypto and blockchain products. This fuels businesses to be able to pay employees or workers more and gives you the chance to show your skills in a high-pressure environment.\n' +
                '\n' +
                '### Do I need any prior skills to get into the crypto industry?\n' +
                'No, you do not. There is a place for anyone in the crypto industry and as long as you put in the time to improve your line of work, things are more likely to work out for you than the crowd.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}