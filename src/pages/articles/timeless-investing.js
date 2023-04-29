import {Card, Container} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import TimelessMain from '../../images/articleimages/TimelessMain.webp'
import Timeless1 from '../../images/articleimages/Timeless1.webp'
import Timeless2 from '../../images/articleimages/Timeless2.webp'
import Timeless3 from '../../images/articleimages/Timeless3.webp'
import Timeless4 from '../../images/articleimages/Timeless4.webp'
import Timeless5 from '../../images/articleimages/Timeless5.webp'
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Details from "@/components/details";
import Email from "@/components/email";
import {GoogleAdSense} from "nextjs-google-adsense";
import React from "react";

export default function TimelessInvesting() {
    const Article = [
        {
            img: TimelessMain,
            title: '',
            id: '',
            description: 'Pink piggy bank that has a coin in it\'s slot on a white table surrounded in ten bronze coins',
            text: 'Trends are all around us, especially those who are the ones trying to create new trends. Trends also must last. How long trends last is arguably as important as creating one. Something trendy for a day is undesirable for those who want to make money. That is why timeless trends are the golden prize.\n' +
                '\n' +
                'Investing is the most timeless money maker out there. Here\'s why\n' +
                '\n' +
                '1. [Inflation only decreases assets value](#Inflation)\n' +
                '2. [You do not only have to invest in an asset](#Knowledge)\n' +
                '3. [Online investment opportunities are increasing](#OnlineInvesting)\n' +
                '4. [Reflexive Investing](#ReflexiveInvesting)'
        },
        {
            img: Timeless1,
            title: 'Inflation Increases Assets Value',
            id: 'Inflation',
            description: 'White sheet of paper covered in pie, bar, line, and donut charts next to a computer and colored pencils',
            text: 'As time goes on, money is worth less and less. We saw this from gas prices hitting all-time ' +
                'highs and from the stories of being able to buy soda for a quarter. However you choose to see it,' +
                ' the message behind it is that the dollar will always become less valuable in the future.\n' +
                '\n' +
                'With the value of the dollar decreasing, the price of goods increases, including investment ' +
                'opportunities. Watch collections, car collections, real estate, and more all go up in value. ' +
                'Investors can use this fact and put their money into an investment making their money unaffected ' +
                'by inflation. Wealthy people enjoy doing this as they have more money to lose if their net worth ' +
                'is one percent less valuable. \n' +
                '\n' +
                'What does this mean for you? Well, it means that to preserve your wealth, you should put your ' +
                'money in an investment so that inflation doesn\'t eat away at it. Something that is not a ' +
                'savings account because historically, we have seen many times that interest in savings ' +
                'accounts under performs inflation. Don\'t think your money is safe from being devalued in a ' +
                'bank. Assets like stocks and cryptocurrencies are on the riskier side you can pick from. ' +
                'Visit [Webminers Asset Balancing](/balancing) to learn more if you are interested in finding assets to ' +
                'combat inflation. If the risk is not your thing, try looking into collecting different types of' +
                ' tangled assets like art or stamps.\n'
        },
        {
            img: Timeless2,
            title: 'Investing in Non-Assets',
            id: 'Knowledge',
            description: 'Large blue bookshelf filled with books of all sizes and colors that has natural light shining down the middle',
            text: 'Assets and tangible objects aren\'t the only things you can invest in. Knowledge is the most ' +
                'profitable investment, no matter how you look at it. It may take some time to gain knowledge, ' +
                'but the result is worth it. Investing in your health is important too. Our article, ' +
                '[Becoming a Smart Emotionless Investor](/articles/top-investor), has extremely educational ' +
                'information about the importance of health and emotional well-being.\n' +
                '\n' +
                'Investing in your happiness is a very under looked investment that most people don\'t consider. ' +
                'Finding hobbies and putting a little money into them upfront so that you have the right tools ' +
                'for the job will go a long way. For a hobby like rock climbing, this could be a facility ' +
                'membership. Even some rock climbing shoes and chalk to help your experience run smoother. ' +
                'Good quality tools would be an example for those who are household mechanics. Never put a ' +
                'price on your happiness. Invest in it every once in a while.\n' +
                '\n' +
                'Lastly, you can invest in opportunity. Whether this be with your time or money, you can ' +
                'use this opportunity to spend more time with loved ones or see an inspirational speech ' +
                'that could change your life. Being open to new opportunities can be a strange change in your ' +
                'life, but it will be for the better. Time is the absolute measure of wealth since it will ' +
                'run out eventually. Being able to spend it with those you love is priceless. Enjoy mini ' +
                'vacations and outings when you can.\n'
        },
        {
            img: Timeless3,
            title: 'Online Investing Opportunities',
            id: 'OnlineInvesting',
            description: 'Silver Mac laptop on an sunny outside wood table with the google page open next to a black iPhone',
            text: 'More people spend time on social media than ever before, and it\'s continuing to grow. ' +
                'There are tons of investment opportunities online. These opportunities are easily ' +
                'accessible **today**, and the amount will continue to grow. You can buy cars, ' +
                'businesses, cryptocurrencies, and anything you can imagine online.\n' +
                '\n' +
                'Buying a business used to be where you had to live near the owner or have connections ' +
                'to them, but this is changing. Now you can buy ' +
                '[Profitable Companies](https://www.bizbuysell.com/), [Full Websites](https://flippa.com/websites),' +
                ' or just your [Own Website Domain](https://www.godaddy.com/). As the world goes digital, ' +
                'so do investments, meaning there has never been an easier time to invest. The only downside ' +
                'to more things online is you have to work harder to sort through the competition for the ' +
                'investment opportunity that is right for you.\n' +
                '\n' +
                'My favorite website for investment opportunities is [BusinessForSale.com]' +
                '(https://us.businessesforsale.com/) as they\'re fantastic and the number one ' +
                'business-for-sale website in the US. You can buy any business for any price. I ' +
                'think it is well worth it for you to check them out.\n'
        },
        {
            img: Timeless4,
            title: 'Reflexive Investing',
            id: 'ReflexiveInvesting',
            description: 'Dark setting that has small slices in it where light can get through that slowly gets smaller towards the center',
            text: 'Investing markets are reflexive. They will go up and down for infinity, meaning there ' +
                'will always be a good enough time to buy coming up or a good time to sell. ' +
                '[Webminers Market Insights](/insights) makes finding that easy for you. Since the markets will either ' +
                'be going up or down, all we have to do is time the transition point correctly to make money.\n' +
                '\n' +
                'Transition points from many different timelines. The most notable is the 2-8 week season. ' +
                'That is where the most opportunity comes from with the most predictability. Shorter time ' +
                'frames result in more profit opportunities at the cost of more risk. If the risk is something ' +
                'you like to avoid, there are many timeframes to pick from that are more extensive timewise.\n' +
                '\n' +
                'A larger time frame of 50-100 years gives more time to develop giant upsides and downsides. ' +
                'These crashes resemble the bottom of the market, like the crash of 2008 and the Great ' +
                'Depression in 1929. Investing and waiting 25 years until you have time to sell again may ' +
                'be the style you choose to pick. The larger the timeframe, the less worry about the market ' +
                'you will have. Less stress comes from the window to sell being broad, and you only have to ' +
                'pay attention to it once a month.'
        },
        {
            img: Timeless5,
            title: 'Summary',
            id: '',
            description: 'A large Stock Exchange TV with a lot of green numbers in the middle of it with red numbers surrounding them',
            text: 'We have outlined what makes investing timeless. It\'s your turn to act on this knowledge. ' +
                'Securing your money in an investment opportunity will shield it from inflation, no matter ' +
                'how risky or safe you wish to be. Investing in opportunities for happiness and non-tangible ' +
                'objects like knowledge will improve your life more than any amount of money could. Can\'t ' +
                'decide on whether to invest in assets or non-assets? Why not do both? \n' +
                '\n' +
                'Thank you for reading. Happy Investing!'
        }
    ]
    const Detail = Details.find((article) => article.url === '/articles/timeless-investing');
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
            <GoogleAdSense publisherId="pub-7878345029704986" data-nscript={false}/>
            <Head>
                <title>{Detail.title}</title>
                <meta property='og:title' content='TopInvestor'/>
                <meta property='og:image' content={TimelessMain}/>
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