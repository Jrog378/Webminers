import {Card, Container} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Visual1 from '../../images/articleimages/Visual1.webp'
import Visual2 from '../../images/articleimages/Visual2.webp'
import Visual3 from '../../images/articleimages/Visual3.webp'
import Visual4 from '../../images/articleimages/Visual4.webp'
import VisualMain from '../../images/articleimages/VisualMain.webp'
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Details from "@/components/details";
import Email from "@/components/email";
import {GoogleAdSense} from "nextjs-google-adsense";
import React from "react";

export default function DataVis() {
    const Article = [
        {
            title: '',
            img: VisualMain,
            description: 'Bar graph on a purple sheet of paper with an iPhone displaying the calculator app next to a set of pencils and a notebook.',
            text: 'While I was teaching myself the different aspects of data mining, Data Visualization came up. ' +
                'I did not know this at the time but I would soon realize how Data Visualization can become its own ' +
                'profession outside of Data Science. ' +
                'Data Visualization can be defined as putting data into a visual that people can easily understand. ' +
                'For example, the stock market.'
        },
        {
            title: 'Why Data Visualization is Important',
            img: Visual1,
            description: 'The stock market graph on the screen of an IPad in the color green with a pen and piece of paper sitting next to it.',
            text: 'Everyone has seen a stock market chart even if it is just a demo of the up and down lines. ' +
                'That chart is technically a visual of data. ' +
                'Instead of spitting out a bunch of numbers of people selling and buying that would take hours to ' +
                'read over, the market is visualized by those connecting rising and falling lines.\n' +
                '\n' +
                'Data has become more and more important in today’s society and with tools like [Tyler Technologies]' +
                '(https://www.tylertech.com/), [Tableau](https://www.tableau.com/), and [Power BI]' +
                '(https://powerbi.microsoft.com/) putting data into aesthetically pleasing visuals has never been easier. ' +
                'Data Visualization is becoming the new graphic design. So many businesses need data to be shown to ' +
                'their customers, and so many unique ways to do this.\n' +
                '\n' +
                'Programming languages like Python and R have great visualization tools so that programmers can ' +
                'fully customize how to display data. This is great because certain industries need different styles and ' +
                'themes. ' +
                'Experts have been creating their own styles and making their unique mark in the industry that companies ' +
                'seek out. ' +
                'Amazing Data Visualizers are all over and the market for cheap visuals is very competitive. If you ' +
                'are looking to join this job market, however, you won’t need to worry about that. ' +
                'Top performers have very little competition as there is very little needed to get started but being ' +
                'able to show good work and experience really sets you apart from the crowd.'
        },
        {
            title: 'Learning Data Visualization',
            img: Visual2,
            description: 'Sheet of graphs with a Mac Laptop on the left side of it and a group of colored pencils on the right side of it.',
            text: 'There are many aspects that need to be mastered in order to perfect your ability to visualize data. ' +
                'Firstly knowing what tools to use when is one of the most important. This skill helps you know what ' +
                'type of graph would best support the data or even what colors best represent certain trends.' +
                'This skill may be the most valuable but is not even hard to develop. Experience will hand you the ' +
                'necessary knowledge to identify what is needed at what time.\n' +
                '\n' +
                'Another factor in learning how to get into Data Visualization is what tool you plan to use. Whether ' +
                'it is programming or a No-Code(no coding needed AT ALL)  you put time into learning how your tool works. ' +
                'Programming languages can have extra features to help you along your journey, which when learned, can ' +
                'save tons of time. On the other hand, No-Code options can have hidden features that advanced users ' +
                'can utilize to really increase the quality of your final product.\n' +
                '\n' +
                'Once you have your tool picked and your data visualized you need to make sure you have a method of ' +
                'presentation. Dynamic Visuals(visuals you can adjust or interact with) come in handy when you are ' +
                'presenting the visuals you have made yourself but sometimes just a Static Visual(still visuals like ' +
                'images) is best.\n' +
                '\n' +
                'The ability to take your visuals out of your visualization tool can be a lengthy process if you go ' +
                'into it without researching the best method beforehand. This can lead to a final product that you did ' +
                'not quite expect or want where you could have to start over.'
        },
        {
            title: 'Soft Skills to Build',
            img: Visual3,
            description: 'Empty classroom with wooden chairs and a large chalkboard at the front with a podium on the left side of it.',
            text: 'Presentation and communication skills are the final skill that you really need to drill home ' +
                'before you can become a Data Visualizer. These skills can be considered the backbone of any job.' +
                'They are especially important with data. People just looking at a line that goes up and down don’t ' +
                'know what it means or how it is important to them.\n' +
                '\n' +
                'Your job is to let them know your work’s importance. Without labels and Descriptions, your work ' +
                'is incomplete and lacks the intention that it needs to have. ' +
                'Instead of this make your visuals influence the readers and give the graphics importance. Data visuals ' +
                'with great descriptions and explanations can have a lot of impacts. ' +
                'This is your job. You are helping businesses make data-driven decisions and now is your time to ' +
                'shine to show off and explain your work. \n' +
                '\n' +
                'After you have polished your skills and become the definition of a Data Visualization Specialist, ' +
                'it is time to expand what you can do. This is where you can really get into what interests you if ' +
                'you desire more than just Data Visualization. ' +
                'The field of Data Science encapsulates a lot of different opportunities and Data Visualization ' +
                'overlaps with many. ' +
                'You can go into Web Scraping [as I did](introduction) and learn how to get your own data for the ' +
                'businesses, ' +
                'or you could go work with Machine Learning and Data Efficiency to further help people analyze your ' +
                'graphics.\n' +
                '\n' +
                'There are so many different supporting skills that can be used in this field. ' +
                'On top of expanding what you can do, it is also important to expand what you use to get your results. ' +
                'Using different tools or programming languages can help you when taking on jobs with companies that ' +
                'are picky about that stuff. ' +
                'Some companies only work with certain tools and unless you have at least some experience, ' +
                'this could cause you to lose an opportunity.'
        },
        {
            title: 'Start Practicing',
            img: Visual4,
            description: 'Spreadsheet filled with numbers with a piece of paper with a blue line graph on the far left side of the spreadsheet.',
            text: 'To get started if you haven’t already, I would recommend you explore kaggle.com for a dataset that ' +
                'you like. Next, use [Tableau Public](https://public.tableau.com/app/discover)(Free Version of Tableau) ' +
                'and mess around with some of your ' +
                'options. Microsoft Excel is one of the most beginner-friendly ways to get visuals up and running as ' +
                'well.\n' +
                '\n' +
                'After this experiment, there are many paid options you can go into without code or the completely ' +
                'free way of programming. ' +
                'At the end of the day, how you plan to learn is completely up to you and your interests. Technical ' +
                'skill level also greatly influences how well-suited a tool may be for you. ' +
                'It is always best to start small compared to starting big and possibly getting overwhelmed. If you ' +
                'get stuck, check on forums or online because chances are, someone like you has gone through the ' +
                'exact same thing.\n' +
                '\n' +
                'Good Luck!'
        }
    ]
    const Detail = Details.find((article) => article.url === '/articles/data-vis');
    const Sections = () => {
        return (
            <>
                {Article.map(sections =>
                    <Card key={sections.id}
                          style={{borderStyle: 'none', background: 'none', padding: '1% 8%', width: '80%'}}>
                        <Image style={{margin: 'auto', width: '70%', height: 'auto', borderRadius: '15px'}}
                               alt={sections.description}
                               src={sections.img}
                               id={sections.id}
                               placeholder={'blur'}
                        />
                        <Card.Body style={{paddingBottom: 0}}>
                            <Card.Title style={{padding: '5px 0'}}><h2>{sections.title}</h2></Card.Title>
                            <Container className={styles.webmark} style={{padding: '0px'}}>
                                <ReactMarkdown>{sections.text}</ReactMarkdown>
                            </Container>
                        </Card.Body>
                    </Card>)}
            </>
        )
    }

    return (
        <>
            <GoogleAdSense publisherId="pub-7878345029704986" />
            <Head>
                <title>{Detail.title}</title>
                <meta property='og:title' content='DataVis'/>
                <meta property='og:image' content={VisualMain}/>
                <meta name='description'
                      content={Detail.description}/>
            </Head>
            <article style={{backgroundColor: '#212529'}}>
                <Container>
                    <header>
                        <Card style={{borderStyle: 'none', background: 'none'}}>
                            <Card.Title style={{
                                color: 'rgb(200,200,200)',
                                textAlign: 'center',
                                fontSize: 'xx-large',
                                padding: '20px 3% 0 3%'
                            }}>
                                {Detail.title}
                            </Card.Title>
                            <Card.Text style={{color: 'rgb(200,200,200)', padding: '3% 10%', fontStyle: 'italic'}}>
                                Published on: {Detail.date}
                            </Card.Text>
                        </Card>
                    </header>
                </Container>
                <Card
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        borderRadius: '35px',
                        background: 'whitesmoke'
                    }}>
                    <Sections/>
                    <Email/>
                </Card>
            </article>
        </>
    )
}