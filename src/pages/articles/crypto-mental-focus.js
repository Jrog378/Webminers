import MentalFocusMain from '../../images/articleimages/MentalFocusMain.webp'
import MentalFocus1 from '../../images/articleimages/MentalFocus1.webp'
import MentalFocus2 from '../../images/articleimages/MentalFocus2.webp'
import MentalFocus3 from '../../images/articleimages/MentalFocus3.webp'
import MentalFocus4 from '../../images/articleimages/MentalFocus4.webp'
import MentalFocus5 from '../../images/articleimages/MentalFocus5.webp'
import MentalFocus6 from '../../images/articleimages/MentalFocus6.webp'
import MentalFocus7 from '../../images/articleimages/MentalFocus7.webp'
import MentalFocus8 from '../../images/articleimages/MentalFocus8.webp'
import React from "react";
import {useRouter} from "next/router";
import ArticleFormat from "@/components/format";

export default function CryptoMentalFocus() {
    const Article = [
        {
            title: '',
            id: 'Intro',
            img: MentalFocusMain,
            description: 'Digital Portfolio Balance on an iPhone screen displayed using a green line sitting ' +
                'on a wooden desk that has a plant on it.',
            text: 'Crypto investing can be a stressful and irritating field because the markets are ' +
                'known to do unpredictable things. Being able to counter this goes much beyond how you ' +
                'invest or trade in the markets. It lies in you, the investor. As someone who deals with ' +
                'an asset like crypto with such high market volatility, there are still some ' +
                'things you can do to improve your focus and keep bringing in profits.\n' +
                '\n' +
                'Here’s what it takes to stay focused and keep yourself in the best conditions ' +
                'possible for investing:\n' +
                '\n' +
                '1. [Morning Routine](#MorningRoutine)\n' +
                '2. [Workout Often](#WorkoutOften)\n' +
                '3. [The Golden Mean](#GoldenMean)\n' +
                '4. [Setting Goals](#SettingGoals)\n' +
                '5. [Invest With a Purpose](#InvestingPurpose)\n' +
                '6. [Study Other Investors](#StudyInvestors)\n' +
                '7. [Study Yourself](#StudyYourself)\n'
        },
        {
            title: 'Morning Routine',
            id: 'MorningRoutine',
            img: MentalFocus1,
            description: 'A bunch of coffee beans on a table with someone pouring coffee into a cup from a glass ' +
                'slow drip coffee maker with a black lid.',
            text: 'Crypto investing is all about patterns and trends. How do you plan to continue to follow those trends if you aren’t keeping yourself in your natural rhythm? Waking up early is great, but what is even more important is waking up at a time your body can handle every single day. If you want to keep yourself in order then you can’t be confusing your body by waking up at all different times.\n' +
                '\n' +
                'Once you wake up, getting up immediately can get you into the groove of starting your day. [Getting sunlight is excellent for you](https://www.verywellhealth.com/morning-sunlight-exposure-3973908) when you wake up or shortly after, exposing yourself to sunlight early in the morning will give you the energy you need to get important tasks done. When it is late at night we do not want to do as much work. Waking up earlier can help you counter this because you will be spending more of your day awake while the sun is out than usual. \n' +
                '\n' +
                'Once you are out of bed and getting your day started, have some water and some food to give you the energy to push through your first morning tasks. Avoid sugar in the mornings as well since it leads to crashes later in the day. Sustainable energy is what we are after here so that you can be consistent with your work and investing. If you don’t have the energy you need, how do you plan to do your tasks, [like picking efficient cryptocurrencies](/efficiency).\n'
        },
        {
            title: 'Workout Often',
            id: 'WorkoutOften',
            img: MentalFocus2,
            description: 'A rack of twenty metal dumbbells with black rubber covering the metal on each side of ' +
                'the shiny handles with weight numbers.',
            text: 'Working out is a great way to [boost your health as a whole](https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise/art-20048389). Getting active can boost your immune system, reduce stress, make you feel happier, give you extra energy, and boost the performance of your body as a whole. Working out can also give you the feeling of accomplishment when you reach new goals.\n' +
                '\n' +
                '[During crypto bear markets](what-to-do-in-bear-markets) you may feel down about not making as much profit as before, it is important to keep your head up otherwise you will miss new opportunities. Working out can be a great way to give you motivation during these times and is a way for you to fill your time with something that is bettering your health.\n' +
                '\n' +
                '[Rest days are important to growth](https://www.medicalnewstoday.com/articles/327138#summary), yet some people do not prefer them because they feel like they are not doing enough or feel bad because they are skipping a workout. An easy way around this is doing a different type of exercise. Rather than lifting weights, you can put in cardio or a stretching session. There are many options to help you get by on rest days.\n'
        },
        {
            title: 'The Golden Mean',
            id: 'GoldenMean',
            img: MentalFocus3,
            description: 'Ten stones all stacked on top of each other with the largest on the bottom and slowly ' +
                'going smaller in size until the top.',
            text: 'The [Golden Mean is a Philosophical term](https://en.wikipedia.org/wiki/Golden_mean_(philosophy)) that comes from Aristotle. It means that virtue or happiness comes from the balance between two extremes. This would mean that if you were to be [successful in crypto investing](make-money-with-cryptocurrency), the best way to do this is to not be too aggressive and take every investment you can make, but also not hold back. The golden mean would be somewhere in the middle where you can avoid risk and maximize return.\n' +
                ' \n' +
                'Upholding this in your own life can help you avoid conflict or getting involved in situations that are too far off an extreme. Staying calm during a market crash is a tough task, but can be reached as long as you have a plan and understand that things will go alright if you stick to them rather than panic or just sit there and do nothing about it.\n'
        },
        {
            title: 'Set Goals to Achieve',
            id: 'SettingGoals',
            img: MentalFocus4,
            description: 'A long checklist written inside of a white notebook on a wooden desk next to a full ' +
                'cup of coffee and a mechanical pencil.',
            text: 'Goals are a great way to mark milestones in a mission or journey. When talking about [mental health they have greater importance](https://positivepsychology.com/benefits-goal-setting/). Every time a goal is reached, it should be a celebration. These celebrations are good for you and encourage growth, especially if they are closer together than long-term milestones. \n' +
                '\n' +
                'Checking things off your list will make you feel good and show you your progress in the short term, rather than being demotivated from not setting short-term goals and having to wait so long for your next achievement.\n' +
                '\n' +
                'These goals can be for anything including hobbies, work, education, relationships, or anything you can progress in. These goals also push you to improve because if you write something on your list and look at it daily, reaching this goal will follow you throughout your day. You will be thinking about it and the distance it takes to reach it. When setting goals for investing, they can help you develop a disciplined investment [strategy that you stick to](https://www.wikihow.com/Not-Give-Up).\n'
        },
        {
            title: 'Invest With a Purpose',
            id: 'InvestingPurpose',
            img: MentalFocus5,
            description: 'A golden piggy bank sitting on a table with three full stacks of one hundred dollar ' +
                'bills leaning on each other next to it.',
            text: 'Crypto investing with a purpose gives you the image of what you are fighting for. When you are just investing for fun, this is where you will lose money and even fall into great losses when [bad things happen like a crypto bubble crash](what-is-a-crypto-bubble). To protect your investments from market crashes you should make sure that you know why you are investing. This purpose is something that you are working for and that you hold meaning to.\n' +
                '\n' +
                'While investing you may second guess that investment is made off of greed where you are just hoping for profit rather than deciding with evidence. When you are [long-term investing in crypto](short-term-vs-long-term-crypto-investing) you can lose sight of what you are waiting for whether this be to make a new investment or leave the position you are currently in. To avoid losing sight of your purpose, you can write it down alongside your goals for investing.\n'
        },
        {
            title: 'Study Other Investors',
            id: 'StudyOthers',
            img: MentalFocus6,
            description: 'A white lined notebook sitting on a lightly colored table with a golden pen and a ' +
                'golden bar on top of it next to each other.',
            text: 'Studying other crypto investors is a great way to see what mistakes people are making in the markets and ways that you believe those mistakes could be avoided. This can help you avoid making emotional investing decisions yourself or even taking advantage of the mistakes of others.\n' +
                '\n' +
                'Understanding how others will act is a great way to predict how those investors will act in the future. Being able to understand the [market psychology of your competitors](crypto-market-psychology) can go a long way. When the markets are scared and full of fear that the price is crashing and everyone is selling, we can tell that the prices are on a giant discount and this is an amazing opportunity to buy. Knowing this can help you put investing systems in place so that you don’t make the same mistakes as others\n'
        },
        {
            title: 'Study Yourself',
            id: 'StudyYourself',
            img: MentalFocus7,
            description: 'An Apple Macbook sitting on a wooden table turned off next to a cup of coffee and a ' +
                'small notebook with a pen resting on top.',
            text: 'To [protect your investments in a bear market](https://www.investopedia.com/articles/investing/070115/4-ways-survive-and-prosper-bear-market.asp), you must study yourself. Understand your weaknesses because these are what are going to be amplified once you enter the slow times of the market. When volatility is at its lowest you are going to make the most mistakes. Studying yourself can include issues in your personal life or day-to-day activities that are bringing you down. Creating a plan will get you on track to overcome these issues that you want to change. Another part that you may want to change is your investing system. To fix this you are going to want to look into your data and toss out the bad parts holding you back.\n' +
                '\n' +
                'Once you find out what you want to change about the negatives holding you back, it’s time to find the good parts of your investing. You can find what you are good at investing in and what your investing style is. Once you find these, you will be able to create ways to change the bad parts of everything to [complement the good](https://hbr.org/2021/08/how-to-make-smart-investments-a-beginners-guide). If you find data that is bad, look for some that amplify your good data. If you find something wrong with your morning routine, change it in a way that amplifies the best parts of your day. Even if it is just the little things, everything matters when you are trying to improve yourself and your investing.\n'
        },
        {
            title: 'Main Points',
            id: 'MainPoints',
            img: MentalFocus8,
            description: 'A candle chart of the stock market going up with lots of green bars and few red bars ' +
                'going upwards with a black background.',
            text: '### How to avoid emotional investing?\n' +
                'Avoiding emotional investing can be done by ensuring that you are in the best mental condition yourself. Once you have done that you can put investing systems in place to avoid the emotional stress that can come from the markets.\n' +
                '\n' +
                '### Investing morning routine\n' +
                'Wake up at a consistent time and get sunlight. Water should be the first thing you consume along with avoiding sugar early on. Try and fit in a workout before you start working.\n' +
                '\n' +
                '### How to get over demotivation?\n' +
                'Set consistent goals that are closer together than crazy milestones. Make sure you are doing things outside of work that are reducing your stress and helping you feel better during the day. Look at yourself and your investment for areas of improvement.\n'
        }
    ]
    const router = useRouter();
    return (
        <>
            <ArticleFormat Article={Article} url={router.pathname}/>
        </>
    )
}