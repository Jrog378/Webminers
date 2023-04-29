import {Card, Container} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import PythonData1 from '../../images/articleimages/PythonData1.webp'
import PythonData2 from '../../images/articleimages/PythonData2.webp'
import PythonData3 from '../../images/articleimages/PythonData3.webp'
import PythonData4 from '../../images/articleimages/PythonData4.webp'
import PythonDataMain from '../../images/articleimages/PythonDataMain.webp'
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Details from "@/components/details";
import Email from "@/components/email";
import {GoogleAdSense} from "nextjs-google-adsense";
import React from "react";

export default function PythonDataScience() {
    const Article = [
        {
            title: '',
            img: PythonDataMain,
            description: 'Person in a black hoodie typing on a Mac Laptop with a black mouse next to it with green colored code filling the page.',
            text: 'Python has been seen many times as one of the most popular programming languages in today’s world ' +
                'and with the rise of Data Science, it can be seen to truly shine.' +
                'Why is python so popular though? What makes python better than the other languages for data science? ' +
                'Well, I will go over these reasons starting with the most important.\n' +
                '\n' +
                'Python is so popular because there is a low level of entry. This means that it is very easy to pick ' +
                'up and learn the basics. ' +
                'When things are easy to pick up this leads to accomplishment. ' +
                'Anyone who has programmed before can think back to the excitement of their first ‘Hello World’ code ' +
                'and it launched them into being interested in the language. ' +
                'Ease of use can allow enjoyment from all ages because this language is just as easy as speaking ' +
                'your native one. '
        },
        {
            title: 'First Lessons',
            img: PythonData1,
            description: 'Mac Laptop with multicolored coding displayed on it alongside a notebook and a pen on top of that.',
            text: 'After learning a bit about the rules of strings, integers, and floats you can get into the math. ' +
                'Next, you’ll find yourself with truth statements and loops. ' +
                'Finally, the last basic topics are classes and functions(groups of code that can be called to action).' +
                'As you can see there is not much to picking up this language and getting the basics down.' +
                'A full intro course can be completed in less than a few months.\n' +
                '\n' +
                'For the regular code fanatic, their path may end here, but for those who got so wrapped in that they ' +
                'must learn more, this is only the beginning.' +
                'You see, Python is a relatively innocent language from the outside, but when you ask experts on the ' +
                'language they will tell you otherwise. ' +
                'This is because they know just how far the rabbit hole goes. ' +
                'Don’t be discouraged however because if they can do it so can you.'
        },
        {
            title: 'Introduction to Data Science',
            img: PythonData2,
            description: 'Laptop with a notebook and pen resting on it with a spreadsheet all above a spreadsheet and a line graph in blue.',
            text: 'For data science one of the most basic tasks is loading up data and cleaning it. ' +
                'This can be done with libraries and once you know what you are doing it is a breeze to get done as ' +
                'long as you have a dataset that is willing to work with you.\n' +
                '\n' +
                'After cleaning comes graphing. Luckily another reason python is so popular is because of its ' +
                'extensive library selection for almost anything. The plotly library is one of the basic graphing ' +
                'libraries for python. ' +
                'After you know how to graph, in comes data science. These can be executed with different algorithms ' +
                'and equations that are completely done by the code so you don’t really have to remember anything(but ' +
                'you eventually should). ' +
                'These algorithms range from Data Mining, Statistical Efficiency, and even Deep Learning/Machine ' +
                'Learning/AI. ' +
                'There is so much able to be done and the world of data is your playground.'
        },
        {
            title: 'Other Uses for Python',
            img: PythonData3,
            description: 'Glasses, a blue bar chart, a notepad with pen, coffee, a Mac Laptop, and paperclips on a black table.',
            text: 'If you are seeing this and telling yourself that you don\'t really want to work with algorithms ' +
                'but still want to do more than just graphing then fear not. ' +
                'There are more than just algorithms to working with data. I for one went down this path as well. ' +
                'The Scrapy Framework is one of the most resourceful frameworks I have ever worked with, including ' +
                'applications that range to even ethical hacking. ' +
                'But we won’t get into that. Scrapy is mainly a web scraping framework.\n' +
                '\n' +
                'Web Scraping is when you scan a site for data, meaning anything from emails, product names, numbers, ' +
                'or even saving the code of the whole website. ' +
                'If there is enough interest I can go more into depth about Web Scraping and even provide a tutorial if ' +
                'there is enough interest, let me know in the comments below if this is something you would like to see. ' +
                'Back to the topic at hand. Web scraping helps data scientists with projects that they could have never ' +
                'imagined to be possible by collecting their data from the web. ' +
                'The possibilities are endless.\n' +
                '\n' +
                'Now that you have your formula for how you plan to utilize python for your data science work, it’s ' +
                'time to get your data. ' +
                'When starting you won\'t want to scrape websites, instead go to kaggle.com where they provide them ' +
                'for free.' +
                'Starting in python may be harder for some compared to others, because of this make sure you go at ' +
                'your own pace and don’t rush based on someone else’s suggestion for how fast you could or should learn ' +
                'python.' +
                'The coding language is truly an art and should be gone through slowly and thoroughly to make sure ' +
                'you get the most out of it. ' +
                'The biggest time waster is going too fast and having to look up things or go back to find answers.' +
                'I know for a fact I have fallen victim to rushing through things in programming and regretted it ' +
                'because it rarely pays off.'
        },
        {
            title: 'Where to Go From Here',
            img: PythonData4,
            description: 'Dark desk lit up by a desk lite with a Mac Laptop on a computer stand with a book and a tiny globe.',
            text: 'One of the industry\'s favorite websites for coding help is [StackOverflow](https://stackoverflow.com/).' +
                ' Coders tend to only use this for their questions but I recommend looking through other people’s ' +
                'questions and learning from the answers for 15 minutes a day.' +
                'There won’t be any shortcuts along your way to becoming fluent in python but that does not mean there ' +
                'isn’t any way to increase your productivity.\n' +
                '\n' +
                'Burnouts are a thing to look out for, they happen to the best of us and making achievable goals that ' +
                'you stick to is very important to make to avoid these circumstances. ' +
                'My final tip is to get to know your preferred libraries. ' +
                'Especially with Machine Learning, there are so many different options to pick from and you need to ' +
                'make sure you find one that suits you. ' +
                'Too many people use Python libraries without knowing their true potential so when you pick yours make ' +
                'sure to get to know them.\n' +
                '\n' +
                'Now it is time to send you on your way. Consider taking free online courses in Python or checking ' +
                'out my favorite website for learning coding GeeksforGeeks.com where they have a growing list of articles ' +
                '34in many fields of programming.\n' +
                '\n' +
                'Remember, don’t give up, and enjoy the process!'
        }
    ]
    const Detail = Details.find((article) => article.url === '/articles/python-data-science');
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
                <meta property='og:title' content='PythonDataScience'/>
                <meta property='og:image' content={PythonDataMain}/>
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