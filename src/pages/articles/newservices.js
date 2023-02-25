import {Card} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import NewServicesMain from '../../images/articleimages/NewServicesMain.webp'
import NewServices1 from '../../images/articleimages/NewServices1.webp'
import NewServices2 from '../../images/articleimages/NewServices2.webp'
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Newservices() {
    const Artsections = [
        {
            img: NewServicesMain,
            description: 'Digital Portfolio Balance on a phone screen displayed using a green line and a black background' +
                'sitting on a wooden desk that has a plant on it.',
            text: 'Welcome to 2023, everyone! Today we\'ve got a great start to the year for Webminers as we are merging ' +
                'this previously article-driven site into providing services to customers and viewers. If you are here ' +
                'from Twitter, you probably never saw the side of webminers that was just articles, but either way, I ' +
                'hope you stick around to see the exciting future we have planned for you guys. Subscriptions, extended ' +
                'features, and account management is coming sooner than you think.\n' +
                '\n' +
                'The Webminers System places great importance on the three biggest questions in finance that are \'When ' +
                'to invest?\', \'What to invest?\', and \'How well did I invest?\'. These three questions come at ' +
                'different levels but are critical for investors to ask themselves throughout their processes.'
        },
        {
            img: NewServices1,
            description: 'Spreadsheet over a bar graph on a white piece of paper with a red pen resting on top of it' +
                'next to a spiral notebook that has a light blue cover.',
            text: 'Let\'s start with when to invest. [Webminers Seasons](/seasons) has a great set of graphics displaying Long ' +
                'Term(50-100 Years), Mid Term(4-8 Years), and Short Term(4-6 Months) seasons all on one page. ' +
                'Shorter timeframes are available with our Investors\' Plan(link coming soon). Each plot has a ' +
                'simplistic marker to show what our market insights are saying. It also must be mentioned that just ' +
                'because the point is at the bottom does not mean the market cannot go any lower. When dealing ' +
                'with long timeframes, it is statistically a very intuitive time to buy. The longer the timeframe, ' +
                'the less risk involved.\n' +
                '\n' +
                'Next, we need to find out where to invest. Finding your assets can seem very daunting at first ' +
                'because you might not know what the most profitable choices could be. Whether you lost a ton of ' +
                'money on a penny coin or have only been investing in Bitcoin or Ethereum, [Asset Weightings]' +
                '(/weightings) is where we will step things up and diversify for less risk. Our base digital asset ' +
                'is Ethereum(Yes, over Bitcoin). We have chosen this coin for two reasons, market cap, and efficiency. ' +
                'Our Altcoins make up the rest of our portfolio and are hand-picked with two things in mind: predictability ' +
                'and efficiency. We want a coin that follows our data nicely, is not prone to unpredictable movements ' +
                'and does not carry unnecessary risk. Each coin in our portfolio has its own \'mini-term\' seasons' +
                '(2-8 Weeks) for extreme accuracy and will be available through our Swing Traders Plan(link coming ' +
                'soon).\n' +
                '\n' +
                'Finally, we have made our data-driven investments. Next, we need to see if we optimally invested. ' +
                'We need to find a way to track our efficiency rather than just ending percentages. Our Optimizer ' +
                'Plan(link coming soon) does just that, where you have access to a constantly growing calculator ' +
                'that gives you ratios like the Omega Ratio, Sortino Ratio, Sharpe Ratio, and more. Our ratios have ' +
                'pros and cons that balance each other and say something different about each portfolio you check. ' +
                'Sharpe Ratios are the most simplistic, but I enjoy using their straightforward calculation as it ' +
                'is simple and solid. More accurate ratios come in as the Sortino ratio. The Sortino ratio is a ' +
                'very efficient measurement of two portfolios over the same timeframe. The Sortino Ratio also ' +
                'takes into account the time of the portfolio. Meaning that the wider spread of the trading numbers ' +
                'you use, the harder it is to compare to thinner systems that do not range as much. That leads us ' +
                'to the golden ratio. The Omega Ratio is the gold standard because it is accurate, not influenced ' +
                'by time, and optimal enough to measure your system so you can track your efficiency and progress.'
        },
        {
            img: NewServices2,
            description: 'Man in a button down shirt and tie typing on a silver computer that is on a wooden desk' +
                'with papers containing graphs and a calculator on it.',
            text: 'As for the article part of the website, we will be shifting away from the content relating to ' +
                'mainly coding information to be able to focus more on the financial and data science side of ' +
                'things. There is much to talk about in this more focused niche, causing better content overall. ' +
                'We are planning posts about upgrades to Webminers and financial topics that we find interesting. ' +
                'As AI is a hot topic right now, you can expect to see some content focused on how Deep Learning ' +
                'and Machine Learning can come into play with financial systems.\n' +
                '\n' +
                'All this has been a difficult journey, especially having to learn much of this without any ' +
                'schooling or teacher being there to walk through these processes. We have come so far in developing ' +
                'this site with react, adding financial math and science, plotting with JavaScript, and ' +
                'personally developing algorithms to add efficiency to the Webminers system. Loads of work ' +
                'took place to get Webminers where it is today. Thank you to everyone still here supporting us. ' +
                'Being this far in the article means you cared enough to stick around. Webminers looks forward ' +
                'to you seeing the rest of the site and our Twitter if you are looking for more content. Furthermore, ' +
                'enjoy the new financial calculators to visualize the importance of portfolio optimization. \n' +
                '\n' +
                'My plans for webminers are still uncertain, but as of, more people have to try out what we have ' +
                'to offer. Webminers will never stop making the site more valuable over time and more features ' +
                'to the optimization calculator on top of the individual plans because I believe in delivering ' +
                'far more than what you pay. Share my website with friends and family who you think would be ' +
                'interested if you would like to help us out. Contact webminers for any suggestions you may have.'
        },

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
                <div>
                    <header>
                        <Card style={{borderStyle: 'none', background: 'none'}}>
                            <Card.Title style={{
                                color: 'rgb(200,200,200)',
                                textAlign: 'center',
                                fontSize: 'xx-large',
                                padding: '20px 3% 0 3%'
                            }}>
                                Leveling Up Webminers Services and Content With Financial Data
                            </Card.Title>
                            <Card.Text style={{color: 'rgb(200,200,200)', padding: '3% 10%', fontStyle: 'italic'}}>
                                Published on: Jan 06 2023
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