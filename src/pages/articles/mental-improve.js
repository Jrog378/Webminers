import {Card} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Mentalmain from '../../images/articleimages/MentalMain.webp'
import Mental1 from '../../images/articleimages/Mental1.webp'
import Mental2 from '../../images/articleimages/Mental2.webp'
import Mental3 from '../../images/articleimages/Mental3.webp'
import Mental4 from '../../images/articleimages/Mental4.webp'
import Mental5 from '../../images/articleimages/Mental5.webp'
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

export default function MentalImprove() {
    const Artsections = [
        {
            img: Mentalmain,
            description: 'A man with a blue shirt writing using a black pen in an old book that has a leather book cover on a desk.',
            text: 'Keeping a clear mind can be beneficial in any area of your life, whether in high-stress ' +
                'situations or to complete tasks more efficiently.\n' +
                'Your health is of great importance in the lifestyle you choose, especially in investing in ' +
                'your mental health is critical.\n' +
                '\n' +
                'Some things that you can do to improve your mental health for improved investing performance a' +
                're as follows:\n' +
                '1. Perfect your morning routine\n' +
                '2. Workout at least five times a week\n' +
                '3. Hold yourself to the Golden Mean\n' +
                '4. Set goals and accomplish them'
        },
        {
            img: Mental1,
            description: 'A person pouring coffee into a see-through cup with coffee beans on a wooden table next to a black pitcher.',
            text: 'Waking up from 10 AM to noon is doable for some, but you must consider the downsides. When you lay ' +
                'in bed that late, it means one of two things. You either went to sleep too late or are getting ' +
                'too much sleep. Keeping your sleep schedule in rhythm with the sun also keeps your mind and ' +
                'body in rhythm.\n' +
                '\n' +
                'Getting sunlight is excellent for you at the beginning of the day to wake you up. I recommend ' +
                'exposing yourself to it as early in the day as possible. Rising from bed when the sun does has ' +
                'many benefits as well. When you wake up much earlier, you get to add time during the day to your ' +
                'schedule rather than doing things at night. The sun going back down naturally makes you less ' +
                'focused and more tired.\n' +
                '\n' +
                'Fueling your body comes towards the end of your routine, and whether you are fasting or eating ' +
                'breakfast, you should place importance on what you put in your body first thing in the morning. ' +
                'Lots of liquids in the morning wake up your body even more, and avoiding sugar increases how ' +
                'maintainable your energy is energy. Tea or coffee is popular in the US for having in the ' +
                'mornings. If you are looking for another option, water will do just fine.'
        },
        {
            img: Mental2,
            description: 'twenty-pound dumbbells all with metal handles on a black wrack containing more lighter dumbbells below it.',
            text: 'Working out is something that many people want to do but get lazy or don\'t stick to their ' +
                'plans because it is hard. When you are working hard in the gym, someone out there skipped that ' +
                'day and told themself tomorrow. \n' +
                '\n' +
                'Sticking to a plan for six to eight weeks is the layout I enjoy sticking to before it is time ' +
                'to change things up for me and start changing my program. A mix of cardio and weights is the ' +
                'recommended stack for a health plan, but depending on your goals, it may be better to stick ' +
                'with one or the other for a short time.\n' +
                '\n' +
                'Rest days are also something that many people put heavy importance on. If your goals are to ' +
                'be healthier as long as you are not pushing certain muscle groups too hard to the point ' +
                'where they get injured, then I support working out every day of the week. \n' +
                '\n' +
                'Working out becomes like therapy for those who enjoy it so much. A rest day feels like ' +
                'they are cheating themselves. I believe there is no reason you shouldn\'t keep working ' +
                'out every day or at least not keep track of what day should be a rest day and only take ' +
                'one when needed.\n'
        },
        {
            img: Mental3,
            description: 'ten stones all stacked on top of each other from largest to smallest with a beach in the background.',
            text: 'The Golden Mean is a Philosophical term that comes from Aristotle. He believes that virtue ' +
                'or happiness comes from neither one of two extremes but a mix of them. \n' +
                '\n' +
                'An example would be that you may find the most success with a diet if you do not go all out ' +
                'because you could get sick of it and punish yourself when you do not follow the rules, whereas ' +
                'just doing a diet should be celebrated and is an improvement. On the other side of the spectrum,' +
                ' you hold yourself accountable, not allowing yourself to turn every day into a cheat day.\n' +
                '\n' +
                'The point is that both sides of the extremes are not good ideas, but a mix where you are focused' +
                ' and dedicated is good, and that does not mean you have to beat yourself up over eating a sweet' +
                ' that was offered to you that contains sugar.'
        },
        {
            img: Mental4,
            description: 'Checklist on a white notebook on a wooden desk next to a full cup of coffee and a mechanical pencil.',
            text: 'Setting goals and accomplishing them was something that drove me this year so far. I wrote ' +
                'down my goals on sticky notes. Every time I reached one of those goals, it was a celebration. ' +
                'The feeling of achieving goals doesn\'t just help you at the moment. Set Long-term mental ' +
                'rewards where you are not beating yourself up every day about not making progress because you ' +
                'get to check these things off your list.\n' +
                '\n' +
                'Goals can be in any form. They can be for hobbies, work, education, relationships, or anything ' +
                'you can progress. You get to set these goals for yourself is the best part. You can do what ' +
                'you told yourself you would do. These goals also push you to improve because if you write ' +
                'something on your desk and look at it daily, it will be in your mind. You will be thinking ' +
                'about it and how close or far from reaching it you are.'
        },
        {
            img: Mental5,
            description: 'A candle chart of the stock market going up with lots of green bars and few red bars with a black background.',
            text: 'Investing is not just a few lines on a chart where you buy low and sell high. It is much more ' +
                'than that. Emotions come in when you don\'t want to miss out on any money or even if you have to ' +
                'make money right now. All these things are stacking up, showing that you HAVE to make money right ' +
                'now. These are all influencing your mind. To be a good investor, you have to be able to stop that.' +
                ' Create a robust mental state where you are not easily manipulated or influenced by outside forces' +
                ' or people. Then you will be able to succeed in following your investment plan as you want to.'
        }
    ]

    const Sections = Artsections.map(sections =>
        <Card key={sections.id} style={{borderStyle: 'none', background: 'none', padding: '1% 8%', width: '80%'}}>
            <Image style={{margin: 'auto', width: '70%', height: 'auto', borderRadius: '15px'}}
                   alt={sections.description}
                   src={sections.img}/>
            <Card.Body style={{paddingBottom: 0}}>
                <Card.Text className={styles.webmark} style={{paddingTop: '0px'}}>
                    <ReactMarkdown>{sections.text}</ReactMarkdown>
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
                    <title>The Best Ways to Improve your Mental State for Better Investing</title>
                    <meta property='og:title' content='MentalImprove'/>
                    <meta property='og:image' content={Mentalmain}/>
                    <meta name='description'
                          content='The best ways to improve your mental state for better investing by improving your diet, physical health, mentality, and goals.'/>

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
                                The Best Ways to Improve your Mental State for Better Investing
                            </Card.Title>
                            <Card.Text style={{color: 'rgb(200,200,200)', padding: '3% 10%', fontStyle: 'italic'}}>
                                Published on: Mar 13 2022
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
                    {Sections}
                    <br/>
                </Card>
            </main>
        </>
    )
}