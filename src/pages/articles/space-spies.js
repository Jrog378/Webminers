import {Card, Container} from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Sat1 from '../../images/articleimages/Sat1.webp'
import Sat2 from '../../images/articleimages/Sat2.webp'
import Sat3 from '../../images/articleimages/Sat3.webp'
import Sat4 from '../../images/articleimages/Sat4.webp'
import SatMain from '../../images/articleimages/SatMain.webp'
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

export default function SpaceSpies() {
    const Artsections = [
        {
            title: '',
            img: SatMain,
            description: 'Satellite in space looking down onto earth where there are brown dry mountains next to a deep blue body of water.',
            text: 'Satellites have accomplished a large multitude of achievements from quality communication ' +
                'to NASA’s Manned Space Station, the [ISS(International Space Station)](https://www.nasa.gov/' +
                'missions/science/f-satellites.html).\n' +
                '\n' +
                'Most people, however, do not recognize the large impact that they have truly provided on technology.'
        },
        {
            title: 'Background to Satellites',
            img: Sat1,
            description: 'Large grey metal Satellite tower that is covered with over ten satellite dishes under the cloudy sky.',
            text: 'There are over 5500 operating Satellites across the entire world. Some ' +
                'are so advanced that they ' +
                'have helped track down criminals fleeing the authorities. Compared to the first ever satellite, a ' +
                'large metal sphere launched into space, you can see how far we have come.\n' +
                '\n' +
                'The advancements to date have been amazing and we have even moved into video recording with these ' +
                'satellites. This has a lot of uses where monitoring a specific area would be very helpful. ' +
                'If you thought that recording with this space technology was progressive, then you’ll be happy to ' +
                'hear that satellites have been used by the military to create 3d images or figures of areas of land ' +
                'as well. ' +
                'This means that rather than going in person or just using a single picture from the sky, we are now ' +
                'able to develop 3d figures to see the whole terrain and any obstacles that would otherwise go unnoticed.\n' +
                '\n' +
                'In Data Science, which is my major in case you haven\'t read my [Introduction Article](introduction) yet, ' +
                'spatial data is ' +
                'something that I foresee encountering during my education and definitely with real businesses. ' +
                'Spatial Data is data that belongs to a specific location or region. Satellites assist in both ' +
                'gathering this data and assigning it to specific places. ' +
                'If you have ever seen a map on the news with colors or numbers to explain a topic, that graphic has ' +
                'spatial data. In the medical field, knowing what areas or regions are at most risk or danger uses ' +
                'spatial data to assign numbers to a place.'
        },
        {
            title: 'Uses of Satellites',
            img: Sat2,
            description: 'Brown map on the wall of a white room with a computer on a wooden desk below it with coffee there too.',
            text: 'Spatial Data and satellite investigation advancements have also significantly contributed to ' +
                'counterintelligence in the US. For example, Osama Bin Laden had been found with the help of satellites. ' +
                'There have been many instances where our country gathers important information, just like this, ' +
                'from other places across the world with Space Technology.\n' +
                '\n' +
                'Alongside exploring other countries, Satellites have been used to explore Space itself. If you have ' +
                'heard a video of strange sounds in the ocean, [what satellites have found](https://www.nasa.gov/vision/' +
                'universe/features/halloween_sounds.html) will sound even crazier. ' +
                'Satellites have heard the sounds of plasma and more creepily, unidentified noises. This is not the ' +
                'only space discovery as satellites also use advanced radar to help explore unknown areas of the galaxy. \n' +
                '\n' +
                'The future of space exploration is not just a human in a spaceship going out and exploring but it ' +
                'is much more advanced. ' +
                'Rather than traveling, the future of space travel may rely on space technology like satellites. ' +
                'As this technology advances, we will only be able to take it further and have more accuracy. ' +
                'Whether looking for objects to rebound off of or even seeking out human life, there is so much ' +
                'to the future of space.\n' +
                '\n' +
                'Another addition that most people will not even realize is that 5 planets other than Earth also ' +
                'have satellites orbiting them. ' +
                'Now all these advancements are great and all but what does having satellites looking at earth ' +
                'mean for the public that can be watched at any time? ' +
                'There are certainly concerns that we are being constantly watched and photographed without even ' +
                'realizing it. \n' +
                '\n' +
                'The assumed privacy when no one is around is fake when you think about the cameras of the sky ' +
                'looking down at your every move. ' +
                'The most concerning part about everything is how easily these satellites can be hacked if the ' +
                'wrong person gets into contact with them.'
        },
        {
            title: 'The Threat of Hackers',
            img: Sat3,
            description: 'Large metal satellite disk on a metal structure looking up at the clear nighttime sky covered in bright stars.',
            text: 'Hackers can spy on individuals and groups to gain information or steal older records. This is not ' +
                'just domestic hackers either. Other countries have Hackers just for satellite hacking and taking over ' +
                'satellites of any form for their gain.\n' +
                '\n' +
                'Now at the moment, hackers are on the rise. It is even more dangerous how your location could be ' +
                'accessed and tracked by someone trying to kill you. I went over this topic in more detail in a ' +
                'previous article, called [Ethical Hackers Are Needed More Than Ever In Our Future](ethical-hacking)' +
                ', which you should read if you haven\'t already and want to know more about the topic. ' +
                'To explain how serious this is, imagine a hitman who has access to these satellite images and videos ' +
                'that are covering the entire world. \n' +
                '\n' +
                'There would be nowhere to hide other than underground tunnels. Not only would this person know ' +
                'where anyone is but they can track police and military patterns. ' +
                'International hackers can find information to track down secret campaigns or locations. ' +
                'There are so many possibilities for how others could use these advanced sky cameras for the wrong ' +
                'reasons. ' +
                'Even though there is a lot of good that comes with this technology, there are always going to be bad ' +
                'people who want the opposite with it'
        },
        {
            title: 'Our Safety',
            img: Sat4,
            description: 'Satellite photo of Italy from the space at night with lights covering the visible land completely.',
            text: 'Precautions must be of high importance now that we know what is at stake. Security must be ' +
                'top-notch before the recording should even begin to happen so that only those who should see what ' +
                'Satellites find will have access. \n' +
                '\n' +
                'After safety must come the security of the public. This means that people aren\'t being watched in ' +
                'their homes or other areas of private property where those property owners do not wish to be recorded. ' +
                'Photos should not be taken unless needed and videos should not be taken at all unless there is an ' +
                'ongoing investigation that would require long amounts of time to be recorded of someone’s private ' +
                'and personal life. ' +
                'Once the people are safe and left to their privacy then it is time for this space technology to do ' +
                'its job. \n' +
                '\n' +
                'Recording everyone without caring about privacy is still supported by many organizations but ' +
                'with great Technological Advancements come no extra rights to sacrifice the privacy of the people ' +
                'for “the greater good”.' +
                'Without a doubt, satellites will only get stronger, clearer, and more plentiful and will be capable ' +
                'of even more than they are today. I cannot wait to see what these devices can do for our future.\n' +
                '\n' +
                'Remember to smile because chances are you’re on camera!'
        },
    ]

    const Sections = Artsections.map(sections =>
        <Card key={sections.id} style={{borderStyle: 'none', background: 'none', padding: '1% 8%', width: '80%'}}>
            <Image style={{margin: 'auto', width: '70%', height: 'auto', borderRadius: '15px'}}
                   alt={sections.description}
                   src={sections.img}/>
            <Card.Body style={{paddingBottom: 0}}>
                <Card.Title style={{padding: '5px 0'}}><h2>{sections.title}</h2></Card.Title>
                <Card.Text className={styles.webmark} style={{paddingTop: '0px'}}>
                    <ReactMarkdown>{sections.text}</ReactMarkdown>
                </Card.Text>
            </Card.Body>
        </Card>
    )

    return (
        <>
            <Head>
                <script async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7878345029704986"
                        crossOrigin="anonymous"></script>
                <title>Satellites - The Space Spies That Watch Over The World</title>
                <meta property='og:title' content='SatSpies'/>
                <meta property='og:image' content={SatMain}/>
                <meta name='description'
                      content='Explaining the good and bad of constant satellite recording with where we draw the line between spying on people and privacy.'/>
            </Head>
            <div style={{backgroundColor: '#212529'}}>
                <Container>
                    <header>
                        <Card style={{borderStyle: 'none', background: 'none'}}>
                            <Card.Title style={{
                                color: 'rgb(200,200,200)',
                                textAlign: 'center',
                                fontSize: 'xx-large',
                                padding: '20px 3% 0 3%'
                            }}>
                                Satellites - The Space Spies That Watch Over The World
                            </Card.Title>
                            <Card.Text style={{color: 'rgb(200,200,200)', padding: '3% 10%', fontStyle: 'italic'}}>
                                Published on: Sep 11 2022
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
                    {Sections}
                    <br/>
                </Card>
            </div>
        </>
    )
}