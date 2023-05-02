import SiteMain from '../../images/articleimages/SiteMain.webp'
import Site1 from '../../images/articleimages/Site1.webp'
import Site2 from '../../images/articleimages/Site2.webp'
import Site3 from '../../images/articleimages/Site3.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function NewWebminers() {
    const Article = [
        {
            img: SiteMain,
            description: 'Four lit up lightbulbs all handing in a line from black wires with one swinging off to the ' +
                'side like a newton\'s cradle.',
            text: 'Here is the new webminers website!\n' +
                '\n' +
                'This website was a whole process in itself. I would like to thank both [roadmaps.sh](https://roadmap.sh/)' +
                ' website and [fireship](https://fireship.io/) ' +
                'on [YouTube](https://www.youtube.com/c/Fireship), as their content helped me a lot in finding my initial ' +
                'direction.\n' +
                '\n' +
                'To complete the front end of a website you must have HTML(basic structure) and how you wish to style ' +
                'that(CSS). Making your website dynamic requires Javascript and this language can tie everything together. ' +
                '[Frameworks and libraries](https://www.geeksforgeeks.org/why-should-you-use-framework-in-programming/) ' +
                'are extensions of languages to construct regular tasks a bit less tediously and ' +
                'I tested out the VueJS, AngularJS, and ReactJS frameworks for Javascript. \n'
        },
        {
            title: 'Choosing A Front End Framework',
            img: Site1,
            description: 'A blurred out person that is holding a sticker or piece of paper that is displaying the blue ' +
                'logo for the React JS library.',
            text: 'After finding out all that would be hard to pick up because I have minimal experience in Javascript, ' +
                'I decided to pick ReactJS. To me, its syntax and methodologies behind it made the most sense and I knew ' +
                'it would be the easiest for me to learn and implement. ' +
                'Many components had to be made with this framework and I started out by messing around with making ' +
                'different components, whether that be on the same document or different ones, just to get a feel of ' +
                'how everything worked. At this time I was working on the homepage and article page and later on ended up ' +
                'fully reorganizing everything so that it would flow better and be easier to make changes to.\n' +
                '\n' +
                'I made individual article pages based on a similar format with these components and added urls to ' +
                'everything, which took forever to figure out, and was on the home stretch of fine-tuning the website.' +
                ' I added metadata, this data allows search engines to know what’s going on like what a site is for or ' +
                'what an image is, and styles to my different CSS files. ' +
                'Looking back at what I said may seem like it was an easy journey, but trust me there were many ' +
                'roadblocks to overcome. I put in around at least 7 hours a day, including weekends, just coding for ' +
                'the past half month. That comes out to around 100 hours at least put into this site alongside ' +
                'being a full-time student.\n' +
                '\n' +
                'I spent countless hours attempting to connect my site to an application called [GitHub Pages]' +
                '(https://pages.github.com/), just ' +
                'for it not to be compatible with sites that use Javascript the way that I have. My laptop ended ' +
                'up shutting down and for a while no longer wanting to be charged. I also ran into an issue with ' +
                'my Content Management System(CMS) or file manager where my projects got all jumbled up and my ' +
                'entire website was fully deleted from my machine. Making the categories was one of the most ' +
                'difficult problems to solve in my opinion as I was attempting to do it with the CSS and for ' +
                'some reason changing one category made this change happen on every page.\n'
        },
        {
            title: 'Types of Articles we are Writing',
            img: Site2,
            description: 'Scrabble letters on dark wood with black lettering spelling out fail your way to success with ' +
                'each word being a new line.',
            text: 'Things like this made me want to rip my hair out and I kept telling myself how I wasted a day on a ' +
                'stupid problem or I wasn\'t being productive enough. Yet the truth is to be a better developer it is ' +
                'necessary to go through these things. Without struggle comes minimal growth. The struggle made my ' +
                'site not just unique but stronger as a whole, hopefully. ' +
                'These issues only make me a stronger developer where I will be able to implement our future plans ' +
                'like adding a discussion/forum section of the site where those interested in similar topics can ' +
                'chat and ask questions.\n' +
                '\n' +
                'Our Data Science category is filled with a field that will always allow webminers to grow with an ' +
                'evermore interesting and intricate domain that will always have more to talk about. More and more ' +
                'articles will be written about upcoming unique trends that you probably haven\'t seen before. ' +
                'Interesting articles that anyone can understand and find enjoyable to read and actually take ' +
                'something from them is the end goal that I work to every day with this article\n' +
                '\n' +
                'Our Coding section was selected for the same core values as the Data Science section as there ' +
                'will always be something to talk about whether this is me learning something new or just ' +
                'something that is worth writing about. It is important to be able to communicate these topics t' +
                'o both technical and non-technical people. ' +
                'Even the Crypto category has big plans with blockchain technologies and ways to combine coding ' +
                'and Cryptocurrency trading. There is so much that is out there waiting to be redistributed and knowing this gives me the opportunity to seek out this knowledge to write about.\n'
        },
        {
            title: 'More to Come',
            img: Site3,
            description: 'Pen sitting next to a notebook with writing on it in black ink in a dark setting sitting on a ' +
                'piece of paper on a dark desk.',
            text: 'I know there is a lot coming to webminers but how can readers know if my content is authentic? ' +
                'I am in love with tech and have been since the [beginning](introduction)' +
                '. I also provide services in the tech world ' +
                'as a Data Strategy Consultant where I ensure that the way that companies are structuring their Data ' +
                'Science projects as efficiently as possible. ' +
                'I also build this site myself [from scratch](new-changes)' +
                ' and have a project for webminers coming up very soon. As ' +
                'for education, I am studying Computational and Data Sciences. I do not think that this means that I ' +
                'should be your one and only source of information out there, but I personally love what I do and am ' +
                'passionate about both gaining knowledge myself and sharing that with others.\n' +
                '\n' +
                'We started as a company that only wrote about tech with plans of expansion as time went on. Now we ' +
                'are a multi-tiered company in the makes with their own personal website and services being offered. ' +
                'As we grow in experience, abilities, size, and influence we strive to become an even more unique ' +
                'company. ' +
                'In terms of this project that I have been talking about, I do not plan to reveal much until the ' +
                'time comes. For now, though, all I will say is that this project is going to become a service ' +
                'webminers will be offering to viewers that will contain a little from all of the categories ' +
                'featured on this site.\n' +
                '\n' +
                'I can’t wait until I have more updates, for now, enjoy the new site!'
        },
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}