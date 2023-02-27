import {Card} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import PythonData1 from '../../images/articleimages/PythonData1.webp'
import PythonData2 from '../../images/articleimages/PythonData2.webp'
import PythonData3 from '../../images/articleimages/PythonData3.webp'
import PythonData4 from '../../images/articleimages/PythonData4.webp'
import PythonDataMain from '../../images/articleimages/PythonDataMain.webp'
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

export default function PythonDataScience() {
    const Artsections = [
    {
        img: PythonDataMain,
        description: 'Person in a black hoodie typing on a Mac Laptop with a black mouse next to it with green colored code filling the page.',
        text: 'Python has been seen many times as one of the most popular programming languages in today’s world ' +
            'and with the rise of Data Science, it can be seen to truly shine.\n' +
            '\n' +
            'Why is python so popular though? What makes python better than the other languages for data science? ' +
            'Well, I will go over these reasons starting with the most important.\n' +
            '\n' +
            'Python is so popular because there is a low level of entry. This means that it is very easy to pick ' +
            'up and learn the basics.\n' +
            '\n' +
            'When things are easy to pick up this leads to accomplishment. \n' +
            '\n' +
            'Anyone who has programmed before can think back to the excitement of their first ‘Hello World’ code ' +
            'and it launched them into being interested in the language\n' +
            '\n' +
            'Ease of use can allow enjoyment from all ages because this language is just as easy as speaking ' +
            'your native one.\n' +
            '\n' +
            'For those interested in learning more it is relatively simple to pick up.'
    },
    {
        img: PythonData1,
        description: 'Mac Laptop with multicolored coding displayed on it alongside a notebook and a pen on top of that.',
        text: 'After learning a bit about the rules of strings, integers, and floats you can get into the math.\n' +
            '\n' +
            'Next, you’ll find yourself with truth statements and loops.\n' +
            '\n' +
            'Finally, the last basic topics are classes and functions(groups of code that can be called to action)' +
            '. \n' +
            '\n' +
            'As you can see there is not much to picking up this language and getting the basics down.\n' +
            'A full intro course can be completed in less than a few months.\n' +
            '\n' +
            'For the regular code enjoyer, their path may end here, but for those who got so wrapped in that they ' +
            'must learn more, this is only the beginning.\n' +
            '\n' +
            'You see, Python is a relatively innocent language from the outside, but when you ask experts on the ' +
            'language they will tell you otherwise.\n' +
            '\n' +
            'This is because they know just how far the rabbit hole goes.\n' +
            '\n' +
            'Don’t be discouraged however because if they can do it so can you.'
    },
    {
        img: PythonData2,
        description: 'Laptop with a notebook and pen resting on it with a spreadsheet all above a spreadsheet and a line graph in blue.',
        text: 'For data science one of the most basic tasks is loading up data and cleaning it.\n' +
            '\n' +
            'This can be done with libraries and once you know what you are doing it is a breeze to get done as ' +
            'long as you have a dataset that is willing to work with you.\n' +
            '\n' +
            'After cleaning comes graphing. Luckily another reason python is so popular is because of its ' +
            'extensive library selection for almost anything. The plotly library is one of the basic graphing ' +
            'libraries for python.\n' +
            '\n' +
            'After you know how to graph, in comes data science. These can be executed with different algorithms ' +
            'and equations that are completely done by the code so you don’t really have to remember anything(but ' +
            'you eventually should).\n' +
            '\n' +
            'These algorithms range from Data Mining, Statistical Analysis, and even Deep Learning/Machine ' +
            'Learning/AI. \n' +
            '\n' +
            'There is so much able to be done and the world of data is your playground.'
    },
    {
        img: PythonData3,
        description: 'Glasses, a blue bar chart, a notepad with pen, coffee, a Mac Laptop, and paperclips on a black table.',
        text: 'If you are seeing this and telling yourself that you don\'t really want to work with algorithms ' +
            'but still want to do more than just graphing then fear not.\n' +
            '\n' +
            'There are more than just algorithms to working with data. I for one went down this path as well\n' +
            '\n' +
            'The Scrapy Framework is one of the most resourceful frameworks I have ever worked with, including ' +
            'applications that range to even ethical hacking. \n' +
            '\n' +
            'But we won’t get into that. Scrapy is mainly a web scraping framework.\n' +
            '\n' +
            'Web Scraping is when you scan a site for data, meaning anything from emails, product names, numbers, ' +
            'or even saving the code of the whole website.\n' +
            '\n' +
            'If there is enough interest I can go more into depth about Web Scraping and even provide a tutorial if ' +
            'there is enough interest, let me know in the comments below if this is something you would like to see.\n' +
            '\n' +
            'Back to the topic at hand. Web scraping helps data scientists with projects that they could have never ' +
            'imagined to be possible by collecting their data from the web. \n' +
            '\n' +
            'The possibilities are endless.\n' +
            '\n' +
            'Now that you have your formula for how you plan to utilize python for your data science work, it’s ' +
            'time to get your data. \n' +
            '\n' +
            'When starting you won\'t want to scrape websites, instead go to kaggle.com where they provide them ' +
            'for free.\n' +
            '\n' +
            'Starting in python may be harder for some compared to others, because of this make sure you go at ' +
            'your own pace and don’t rush based on someone else’s suggestion for how fast you could or should learn ' +
            'python\n' +
            '\n' +
            'The coding language is truly an art and should be gone through slowly and thoroughly to make sure ' +
            'you get the most out of it. \n' +
            '\n' +
            'The biggest time waster is going too fast and having to look up things or go back to find answers.\n' +
            '\n' +
            'I know for a fact I have fallen victim to rushing through things in programming and regretted it ' +
            'because it rarely pays off.'
    },
    {
        img: PythonData4,
        description: 'Dark desk lit up by a desk lite with a Mac Laptop on a computer stand with a book and a tiny globe.',
        text: 'One of the industry\'s favorite websites for coding help is [StackOverflow](https://stackoverflow.com/).\n' +
            '\n' +
            'Coders tend to only use this for their questions but I recommend looking through other people’s ' +
            'questions and learning from the answers for 15 minutes a day.\n' +
            '\n' +
            'There won’t be any shortcuts along your way to becoming fluent in python but that doesn’t mean there ' +
            'isn’t any way to increase your productivity.\n' +
            '\n' +
            'Burnouts are a thing to look out for, they happen to the best of us and making achievable goals that ' +
            'you stick to is very important to make to avoid these circumstances.\n' +
            '\n' +
            'My final tip is to get to know your preferred libraries.\n' +
            '\n' +
            'Especially with Machine Learning, there are so many different options to pick from and you need to ' +
            'make sure you find one that suits you.\n' +
            '\n' +
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

    const Sections = Artsections.map(sections =>
        <Card key={sections.id} style={{borderStyle: 'none', background: 'none', padding: '1% 8%', width:'80%'}}>
            <Image style={{margin: 'auto', width: '70%', height: 'auto', borderRadius:'15px'}} alt={sections.description}
                   src={sections.img}/>
            <Card.Body style={{paddingBottom: 0}}>
                <Card.Text style={{paddingTop: '0px'}}>
                    <ReactMarkdown className={styles.webp}>{sections.text}</ReactMarkdown>
                </Card.Text>
            </Card.Body>
        </Card>
    )

    return (
        <>
            <main style={{backgroundColor: '#212529'}}>
                <Head>
                    <script async
                            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7878345029704986"
                            crossOrigin="anonymous"></script>
                </Head>
                <div>
                    <header>
                        <Card style={{borderStyle: 'none', background: 'none'}}>
                            <Card.Title style={{
                                color: 'rgb(200,200,200)',
                                textAlign: 'center',
                                fontSize: 'xx-large',
                                padding: '20px 3% 0 3%'
                            }}>
                                Python Has Been Taking Over The Data Science World
                            </Card.Title>
                            <Card.Text style={{color: 'rgb(200,200,200)', padding: '3% 10%', fontStyle: 'italic'}}>
                                Published on: Sep 7 2022
                            </Card.Text>
                        </Card>
                    </header>
                </div>
                <Card
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        borderRadius: '35px',
                        background: 'rgb(213, 233, 223)'
                    }}>
                    <p/>
                    {Sections}
                    <br/>
                </Card>
            </main>
        </>
    )
}