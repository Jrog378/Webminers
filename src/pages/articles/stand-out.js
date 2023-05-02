import Unique1 from '../../images/articleimages/Unique1.webp'
import Unique2 from '../../images/articleimages/Unique2.webp'
import Unique3 from '../../images/articleimages/Unique3.webp'
import Unique4 from '../../images/articleimages/Unique4.webp'
import Unique5 from '../../images/articleimages/Unique5.webp'
import Unique6 from '../../images/articleimages/Unique6.webp'
import UniqueMain from '../../images/articleimages/UniqueMain.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function StandOut() {
    const Article = [
        {
            title: '',
            id: '',
            img: UniqueMain,
            description: 'Calculator application overtop of a white screen with code in blue, purple and orange color ' +
                'typed on it on a mac laptop.',
            text: 'The world of developers and programmers is a plentiful place. There are tons of people with the ' +
                'same skills and identical resumes. However, you want to show how different you are and stand out with ' +
                'what you have.\n' +
                '\n' +
                'These are my five ways to make yourself stand out as the authoritative among boys in the programming ' +
                'world:\n' +
                '1. [Show that you do more than sit at home and code](#OtherHobbies).\n' +
                '2. [Show your projects mean something to you](#PassionForWork)\n' +
                '3. [Grow your network](#GrowNetwork)\n' +
                '4. [Reach out instead of just applying online](#ReachOut)\n' +
                '5. [Show you can learn new things](#AbleToLearn)'
        },
        {
            title: 'Show Other Hobbies or Activities',
            id: 'OtherHobbies',
            img: Unique1,
            description: 'Black and white image of a coffee that says stay calm and drink coffee on a desk next to a ' +
                'laptop and notebook with a pen on it.',
            text: 'Showing that you do more than sit at home and code is very important to interviewers. Don’t think ' +
                'they will call you coding god just because you say you spend your time coding in your mom\'s ' +
                'basement. Companies would much rather see you developing more soft skills so that you can contribute ' +
                'to the team with more than just your code.\n' +
                '\n' +
                'Companies want to see teamwork skills or passion for other things that are just what they are hiring ' +
                'you for. Often pairing work skills and hobby skills leads to a more plentiful reward than just work ' +
                'skills. ' +
                'They also want to hear about what makes you passionate and how well you can build relationships, ' +
                'whether that be with upper-level members or just team members. Having something in common with your ' +
                'interviewer and building a connection based on this exponentially grows your chance of getting hired.'
        },
        {
            title: 'Show Passion for Your Work',
            id: 'PassionForWork',
            img: Unique2,
            description: 'Wide set of tools like sheers, wire, pliers, scissors, and pieces of wood on a piece of paper ' +
                'on a brown wooden desk.',
            text: 'You might have some passion for hobbies now, but do you show passion for your job? We live in a ' +
                'world where it is a regular occurrence to hear about someone hating their job. Very rarely do ' +
                'companies find someone in the upper one percent of humans that can bring passion and excitement to ' +
                'everything they do, including their work. ' +
                'Projects being a big part of your resume gives your the perfect opportunity to express what your ' +
                'long hours spent building something went into. Express yourself and your thoughts. Tell them about ' +
                'the good and the bad on top of how excited you were when you got around them. Keep them interested in ' +
                'your stories.\n' +
                '\n' +
                'If you finish an application that you were working on for months, don\'t be bland when people ask ' +
                'about it. It will seem like you don\'t even care about what you do. Instead, bring some spark to ' +
                'your explanations and spruce them up a little. ' +
                'Even though I do not do web scraping much anymore, I am excited to share my projects because they ' +
                'were incredible and unforgettable learning experiences. How someone talks about what they do and ' +
                'what they have done will repeat itself. Companies prefer passionate people over boring people.'
        },
        {
            title: 'Grow Your Network',
            id: 'GrowNetwork',
            img: Unique3,
            description: 'A lot of board game pieces that are many different colors on a white board that has black ' +
                'lines connecting some of the pieces.',
            text: 'When a regular person thinks about having a network of people who work at all these big companies ' +
                'so that they can get references or mention stories about accredited people, they most definitely would ' +
                'love to have it. Yet the issue is not many are willing to go through the process of getting it. ' +
                'Networking is a long process that takes years to start to benefit from it. Mutual friends are a ' +
                'powerful thing because you never know who knows who. Don’t think I mean use your friends and people ' +
                'around you for their people of status either though.\n' +
                '\n' +
                'Getting to know someone is a great thing and interesting people have amazing stories to tell. Since ' +
                'the beginning of the school year, I have been trying to learn from others as much as possible and one ' +
                'of the easiest ways to do this is by getting to know new people and their stories. ' +
                'I don’t condone using someone in any way but in the case of learning about who they are and why they ' +
                'are who they are, it is some of the most beneficial information about them if you know how to listen ' +
                'to them and learn from it. ' +
                'So many people have the life lessons that they are waiting to share and would be more than happy just ' +
                'to give them away to you. Take some time to get to know people and you never know who you might meet ' +
                'next.'
        },
        {
            title: 'Reach Out To Employers',
            id: 'ReachOut',
            img: Unique4,
            description: 'A dark grey fuzzy background with the white keyboard keys e, m, a, i, l, to spell email in ' +
                'black letters with a slight vignette.',
            text: 'Being low-budget has many downsides, including not having the fancy perks other companies may have. ' +
                'I have to do things the hard way and the most annoying of these is reaching out to people. ' +
                'Even though this is not my favorite task, I still greatly need it because it also shows I have put in ' +
                'the work to find a specific potential client. Reaching out for jobs is very similar in this way.\n' +
                '\n' +
                'Not many people reach out to the management of a company and only those who wish to stand out will. ' +
                'After applying online or in person. Reach out and instead of talking about what you can do or how much ' +
                'skill you have, tell this important company member what you can give to them. ' +
                'This is far harder than it sounds. Telling someone what you can provide instead of who you are will ' +
                'take a little extra thought about yourself and it is all worth it. Businesses don’t care about what ' +
                'you have when emailing, they care about what you can provide and the results they can get. '
        },
        {
            title: 'Present Your Ability to Learn',
            id: 'AbleToLearn',
            img: Unique5,
            description: 'A room decorated in an older style with a lot of books organized and stacked on top of each ' +
                'other with a dark shadow over them.',
            text: 'The ability to learn new things might be at the bottom but by no means is it the least important. ' +
                'Showing adaptability means that you can work in a fast-paced environment and learn new things on the fly. ' +
                'Being proficient in many things can help display this. Learning to balance which skills you wish to ' +
                'develop can impact how much value you bring to a company. Continually providing value can come from ' +
                'many different results or having even better results from one thing.\n' +
                '\n' +
                'Being valued produces many opportunities for you; raises, promotions, time off, and other work ' +
                'benefits. Mistakes will be easily forgotten because you are known for good work. You gain trust and ' +
                'reliance from a company that can generate chances outside of work that you would not have been able ' +
                'to get without them. ' +
                'Soft skills, similar to learning and adapting, build you as a person because they will define who ' +
                'you are as a worker. These soft skills are far more important than hard skills as they define who ' +
                'you are and the general aspect of what you bring to a company.\n'
        },
        {
            title: 'Conclusion',
            id: '',
            img: Unique6,
            description: 'A white lit up sign plugged in on a wooden desk that says you can do this next to a mac ' +
                'laptop and a black notebook.',
            text: 'Stay true to who you are and show that off. Wear it loud and proud because companies are interested ' +
                'in people like you, but they cannot see it from the outside.\n' +
                '\n' +
                'Take advantage of the capabilities you can offer and be proud of who you are so that those looking ' +
                'for you can find you.'
        },
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}