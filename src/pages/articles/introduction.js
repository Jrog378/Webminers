import Intro1 from '../../images/articleimages/Intro1.webp'
import Intro2 from '../../images/articleimages/Intro2.webp'
import Intro3 from '../../images/articleimages/Intro3.webp'
import IntroMain from '../../images/articleimages/IntroMain.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function Introduction() {
    const Article = [
        {
            img: IntroMain,
            title: '',
            id: 'Intro',
            description: 'Man in a black suit suit and a light grey shirt that is reaching out his hand for a greeting handshake.',
            text: 'As a professional in the crypto scene, I never could have predicted this from such a unique past. I have always had the dream of owning my business and started college in engineering. After analyzing the programs in the engineering department I realized it wasn’t for me. Even though I enjoyed repairing vehicles and machines, I did not feel the passion I was hoping for.\n' +
                '\n' +
                'I ended up falling into the Data Science major that my college offered. Computer science was on the table but once again, I just didn\'t have the passion for the classes. Data Science felt right to me and I had already taken one of their classes before making the swap.\n' +
                '\n' +
                'I started to engulf myself into data, learning data mining and data visualization. I took online classes and worked on extra projects. I researched the jobs and fields I could go into. I was hooked and could not get enough data. I used [kaggle] for datasets and knew that if I wanted to be a professional in the field then my work would have to be similar to those who were competing in coding competitions, but everything looked so complicated.\n'
        },
        {
            title: 'Business Goals',
            id: 'BusinessGoals',
            img: Intro1,
            description: 'Many graphs in a mac laptop including, bar chart, map, donut chart, and line graph with a blue theme.',
            text: 'I wanted to start a business on top of my schooling so I began coding in hopes of learning how to create websites enough to start selling my services. I built my own personal project and worked hard to style it and make it as professional as possible. After I felt I had worked enough, I thought about how much work I just did for a single website and the fact that I did not want to do that for every customer I had. The website I was creating took a lot of effort and specialization, and I knew it was only authentic to me. I felt like I only wanted to develop for myself.\n' +
                '\n' +
                'I needed that unique idea to get me into the life I wanted to live by owning my business. It was summer. I spend time working on my car or doing projects around the house, working with my hands back to my engineer routes. I decided I would attempt a new type of service. I started to research what I could do, finding little things like Data Visualization, Data Storytelling, Data Mining, or even Web Scraping, waiting for the opportunity good enough to start a business.\n' +
                '\n' +
                'I also began learning to write professionally because I knew I would need those skills later. Writing is the benchmark to show potential customers who I am and what I can do. Whether it was marketing or understanding how to put attractive text onto websites, technical writing was a must for me to succeed.\n'
        },
        {
            title: 'Deadlines',
            id: 'Deadlines',
            img: Intro2,
            description: 'HTML code on a mac laptop that is in the process of being made into a website with different types of tags.',
            text: 'Once again, the programming side of things did not seem to stick with me. I loved programming and could do it all day as long as I had a purpose. I just had this feeling deep down that programming for others isn\'t my thing. I dropped the idea again. Thinking back, I am grateful for these trials because learning what works for me and what does not, even though it might have seemed like a waste of time, however it has all come back to help me later on.\n' +
                '\n' +
                'I still had the same issue as before. The more I looked for businesses, the more I felt lost. I bought a 3d Printer to try and create my product and found out quickly how much work would have to go into such a small product where my dollars per hour would be lower than minimum wage. Like everything else, I gathered what I learned and carried it with me.\n' +
                '\n' +
                'What to do crowded my mind. Summer was running out, and now was the best time to focus my mind on something and jump-start a business before school began again. I had been a small participant in the Crypto markets with [Coinbase] and their free coins for learning about the company. This time was different. I wanted to use my data science knowledge in the markets.\n'
        },
        {
            title: 'The Foundation',
            img: Intro3,
            id: 'Foundation',
            description: 'Grey Mac Laptop with a black keyboard with a rainbow gradient light shining down on it from above.',
            text: 'I decided to create a system that could compete with the best in the market and bring me the self-made success I desired so much. I knew it would take a while. So I studied and tested with small amounts. I knew that if I could double my money with $500, I could double any amount.\n' +
                '\n' +
                'Learning from this short period of running in circles showed me trying new things and embracing failure. Speed up time-consuming tasks with automated systems or offloading work. Never acting on emotion is critical to intelligent and calculated conclusions. Be the person you want to be able to look back on and feel proud of who you were. Make the future you proud of the achievements you are yet to achieve. Always appreciate those who deserve it because many people go unseen. You never know how little it would take to make someone\'s day.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}