const details = [
    {
        id: 32,
        title: 'What is an Altcoin - Should You be Investing in Altcoins?',
        date: 'May 19th 2023',
        text: 'Altcoins, also known as alternative coins, are a great option to invest in other the main coins ' +
            'Bitcoin and Ethereum, however, there are some things you must know beforehand.',
        url: '/articles/what-is-an-altcoin',
        img: 'AltcoinMain.webp',
        alt: 'A single golden Bitcoin crypto coin with its logo on the face of the coin fading away into dust ' +
            'surrounded by other coins.',
        header: 'Altcoin.webp',
    },
    {
        id: 31,
        title: 'What is The Crypto Blockchain - Finances of the Blockchain',
        date: 'May 18th 2023',
        text: 'The crypto blockchain has many uses, mainly of which are based around working with money, ' +
            'including the crypto blockchain has investing and trading, staking, and smart contracts.',
        url: '/articles/what-is-the-crypto-blockchain',
        img: 'CryptoBlockMain.webp',
        alt: 'A golden Bitcoin crypto coin sitting on top of the face of a one hundred dollar bill with two ' +
            'other one hundred dollar bills.',
        header: 'CryptoBlock.webp',
    },
    {
        id: 30,
        title: 'What is a Crypto Bubble - Why Does The Crypto Market Crash',
        date: 'May 17th 2023',
        text: 'A crypto bubble is difficult to predict, but we should still study it to avoid losses. ' +
            'Crypto psychology, pump and dumps, and Black Swan events can help with these bubbles.',
        url: '/articles/what-is-a-crypto-bubble',
        img: 'CryptoBubbleMain.webp',
        alt: 'Stack of hundred dollar bills rolled up with a rubber band around them with a ' +
                'wooden hourglass in the background with white sand.',
        header: 'CryptoBubble.webp',
    },
    {
        id: 29,
        title: 'Short-Term vs Long-Term Crypto Investing - Top Crypto Styles',
        date: 'May 16th 2023',
        text: 'Short-term and Long-term crypto investing are both great options to incorporate in your ' +
            'investing style and it is important to know how they differ with profit and efficiency.',
        url: '/articles/short-term-vs-long-term-crypto-investing',
        img: 'ShortLongMain.webp',
        alt: 'A shiny ethereum crypto gold coin sitting up on its edge with other coins laying beneath it with ' +
            'the market chart in behind them.',
        header: 'ShortLong.webp',
    },
    {
        id: 28,
        title: 'Impactful Crypto Market Crashes - What You Can Learn From Them',
        date: 'May 15th 2023',
        text: 'Market Crashes in crypto can be a scary event, but being able to understand them more can help ' +
            'you better handle future crashes by looking into arbitrage events from the past.',
        url: '/articles/crypto-market-crashes',
        img: 'ArbitrageMain.webp',
        alt: 'A shiny metal Ethereum crypto coin with a leather wallet next to it containing a credit ' +
            'card all on to pof a stack of dollars.',
        header: 'Arbitrage.webp',
    },
    {
        id: 27,
        title: '3 Biggest Mistakes Crypto Investors Make - How to Avoid Them',
        date: 'May 14th 2023',
        text: 'Not using a plan, allowing emotion to take control, and decisions without volatility can be ' +
            'detrimental to your crypto investing as a beginner. Mistakes are how we become better.',
        url: '/articles/biggest-crypto-mistakes',
        img: 'CryptoMistakesMain.webp',
        alt: 'The cryptocurrency market in all red going up and down along a candle with lines going around it ' +
            'and arrows pointing downwards.',
        header: 'CryptoMistakes.webp',
    },
    {
        id: 26,
        title: 'What to do in a Bear Market - Work to do During Slow Crypto Markets',
        date: 'May 13th 2023',
        text: 'Bearish Markets are a great time for robust crypto investing practices, investing your time into a ' +
            'business, and spending your well-earned money on enjoyment until bullish again.',
        url: '/articles/what-to-do-in-bear-markets',
        img: 'BearMarketMain.webp',
        alt: 'Stacks of coins increasing as they go to the right with little plants on the top of them all next ' +
            'to a jar filled with coins.',
        header: 'BearMarket.webp',
    },
    {
        id: 25,
        title: 'AI Jobs - How AI Can Improve Your Work Productivity, Not Replace You',
        date: 'May 12th 2023',
        text: 'In terms of Investing, Creative Work, Programming, and Customer Support, instead of trying ' +
            'to outrun AI, workers can incorporate it to improve their productivity and value even more.',
        url: '/articles/ai-jobs-productivity',
        img: 'JobsAIMain.webp',
        alt: 'A head that is made up of technology as a image of artificial intelligence that is ' +
                'blue one one side and orange on the other.',
        header: 'JobsAI.webp'
    },
    {
        id: 24,
        title: 'Is Cryptocurrency Safe? - Keep Your Money and Devices Secure',
        date: 'May 11th 2023',
        text: 'The question of is cryptocurrency safe is an important one to answer. We can determine this ' +
            'with digital security, efficient investing, downsides of crypto, and finding legit cryptos.',
        url: '/articles/is-cryptocurrency-safe',
        img: 'SafeCryptoMain.webp',
        alt: 'Earth from space with the northern lights in the background and a bunch of connected ' +
                'shining white lines wrapped around earth.',
        header: 'SafeCrypto.webp'
    },
    {
        id: 23,
        title: 'Downsides of AI - What Crypto Investors Have to Look Out For',
        date: 'May 10th 2023',
        text: 'AI, as of right now, is an amazing tool for crypto investors to keep in their back pocket, however, ' +
            'As AI begins to get more popular in Investing, there are many downsides too.',
        url: '/articles/downsides-of-ai',
        img: 'DownsideAIMain.webp',
        alt: 'A blue realistic animated brain that has lines of wires as if it was a part of a ' +
                'computer representing artificial intelligence.',
        header: 'DownsideAI.webp'
    },
    {
        id: 22,
        title: 'AI Investing - How to Become an AI Quant',
        date: 'May 9th 2023',
        text: 'AI Quants are the new age of top level investors and to become one, it takes building ' +
            'an investing system with AI, then perfecting it with coding, data, and market skills.',
        url: '/articles/ai-quant-investing',
        img: 'AIQuantMain.webp',
        alt: 'Apple iPad with an investing app open that is showing the value of Bitcoin with a red ' +
                'line chart sitting on a wooden table.',
        header: 'AIQuant.webp'
    },
    {
        id: 21,
        title: 'Financial AI - How AI and Data Science Can Help Crypto Investors',
        date: 'May 7th 2023',
        text: 'Financial AI is on the move and we will be going over how AI will be impacting Automation, ' +
            'Sentiment, Market Correlation, and Robo Advising in the Financial World of Investing.',
        url: '/articles/financial-ai-and-data-science',
        img: 'AIFinanceMain.webp',
        alt: 'A black head cutout with eighteen googly eyes fully covering it with the letters A I resting ' +
            'over top all on a white surface.',
        header: 'AIFinance.webp'
    },
    {
        id: 20,
        title: 'What is Decentralization - Decentralized for Crypto Investors',
        date: 'May 1st 2023',
        text: 'There are many aspects of decentralization that are constantly developing, much of which is related ' +
            'to the blockchain. As crypto investors we will look into more about this technology.',
        url: '/articles/decentralization-for-crypto',
        img: 'DecenterMain.webp',
        alt: 'Mac Laptop on a small wooden table displaying a purple screen that says blockchain with ' +
                'multiple houseplants sitting behind it.',
        header: 'Decenter.webp'
    },
    {
        id: 19,
        title: 'Python Crypto Libraries - Programming Libraries For Crypto Investing',
        date: 'Apr 26th 2023',
        text: 'Programming in crypto gives you an advantage in the market that requires libraries to help ' +
            'you with this. Here are some essential Python libraries for crypto programming.',
        url: '/articles/python-crypto-libraries',
        img: 'CryptoCodingMain.webp',
        alt: 'Mac laptop with multiple lines of code shown on its screen next to a black mouse as ' +
            'well as a black iPhone and Apple watch.',
        header: 'CryptoCoding.webp'
    },
    {
        id: 18,
        title: 'Best Efficient Crypto to Buy - Efficient Crypto Updates',
        date: 'Apr 24th 2023',
        text: 'There are many ways to find the best crypto to invest in. Efficiency remains the most                      ' +
            'accurate and we will be going into four of the most efficient cryptos to pick from.',
        url: '/articles/best-efficient-crypto',
        img: 'BestCryptoMain.webp',
        alt: 'Three cryptocurrency coins resting on top of a one hundred dollar bill with a piece ' +
            'of paper on top and a gold watch next to it.',
        header: 'BestCrypto.webp'
    },
    {
        id: 17,
        title: 'Python for Crypto and Finance - How FinTech Uses Python for Profits',
        date: 'Apr 13th 2023',
        text: 'Python for Crypto and Finance has never been in more demand. There is more money to be made and the ' +
            'only question is how. We dive into AI, Automation, Quants, and Data Visualization for Finance.',
        url: '/articles/python-for-finance',
        img: 'PythonFinMain.webp',
        alt: 'Robot hand reaching out with one finger to a geometrically shaped group of white lines ' +
            'with a black background lit up by light.',
        header: 'PythonFin.webp'
    },
    {
        id: 16,
        title: 'Finding the Next Big Cryptocurrency - How I Find Cryptos in 2023',
        date: 'Apr 3rd 2023',
        text: 'There are many ways to find profitable coins in investing. It takes efficiency, ' +
            'popularity, and longevity to determine how successful a cryptocurrency will be.',
        url: '/articles/next-big-crypto',
        img: 'BigCryptoMain.webp',
        alt: 'A tiny clay man in a blue jacket and brown hair reading a book sitting on a pile of ' +
            'eleven foreign coins with gold coatings.',
        header: 'BigCrypto.webp'
    },
    {
        id: 15,
        title: 'How to Start Investing in Crypto - Making a Crypto Investing System',
        date: 'Mar 28th 2023',
        text: 'Finding valuable investments and creating your own investing system can seem complex' +
            'but things can be much easier than they seem with the right guidance.',
        url: '/articles/start-investing',
        img: 'StartInvestingMain.webp',
        alt: 'Black iPhone screen displaying the stocks app with 6 different companies resting on a sheet' +
            ' of paper with a blue chart on it.',
        header: 'StartInvesting.webp'
    },
    {
        id: 14,
        title: 'What Makes Investing a Timeless Money Maker',
        date: 'Mar 18th 2023',
        text: 'Timeless money making comes best from investing, where there are many forms, each having its own ' +
            'strengths and weaknesses',
        url: '/articles/timeless-investing',
        img: 'TimelessMain.webp',
        alt: 'Pink piggy bank that has a coin in it\'s slot on a white table surrounded in ten bronze coins',
        header: 'Timeless.webp'
    },
    {
        id: 13,
        title: 'What it Takes to Become a Smart Emotionless Crypto Investor',
        date: 'Mar 14th 2023',
        text: 'Becoming a Smart Emotionless Investor takes dedication through Investing Systems, limiting your' +
            ' strategies, and constant research.',
        url: '/articles/top-investor',
        img: 'TopMain.webp',
        alt: 'Maroon and old styled typewriter with aged metal parts that has written on a white page to ' +
            'never be afraid',
        header: 'Top.webp'
    },
    {
        id: 12,
        title: 'The Best Ways to Improve Your Mental State for Crypto Investing',
        date: 'Mar 13th 2023',
        text: 'The best ways to improve your mental state for smarter investing by improving your diet, physical ' +
            'health, mentality, and goals.',
        url: '/articles/mental-improve',
        img: 'MentalMain.webp',
        alt: 'Digital Portfolio Balance on a phone screen displayed using a green line and a black background' +
            'sitting on a wooden desk that has a plant on it.',
        header: 'Mental.webp'
    },
    {
        id: 11,
        title: 'How I Built a Crypto Website with Articles and an Investing System - Part 4',
        date: 'Feb 6th 2023',
        text: 'Many upgrades have occurred since you last saw a Webminers article. We are adding features like ' +
            'Market Insights, Asset Balancing, and Asset Efficiency.',
        url: '/articles/new-services',
        img: 'NewServicesMain.webp',
        alt: 'Digital Portfolio Balance on a phone screen displayed using a green line and a black background' +
            'sitting on a wooden desk that has a plant on it.',
        header: 'NewServices.webp'
    },
    {
        id: 10,
        title: 'Avoid the Copy and Paste Psyche & Break Applicant Uniformity',
        date: 'Oct 26th 2022',
        text: 'The world of developers and programmers is a plentiful place. However, you want to show how ' +
            'different you are and stand out with what you have.',
        url: '/articles/stand-out',
        img: 'UniqueMain.webp',
        alt: 'Calculator application overtop of a white screen with code in blue, purple and orange color ' +
            'typed on it on a mac laptop.',
        header: 'Unique.webp'
    },
    {
        id: 9,
        title: 'How I Built a Crypto Website with Articles and an Investing System - Part 3',
        date: 'Oct 15th 2022',
        text: 'Introduction to the new blog site that has been fully redone along with summary of the new ' +
            'categories and plans to come for webminers.',
        url: '/articles/new-webminers',
        img: 'SiteMain.webp',
        alt: 'Four lit up light bulbs all handing in a line from black wires with one swinging ' +
            'off to the side like a newton\'s cradle.',
        header: 'Site.webp'
    },
    {
        id: 8,
        title: 'How I Built a Crypto Website with Articles and an Investing System - Part 2',
        date: 'Sep 28th 2022',
        text: 'Improvements to Webminers are necessary and this is a brief overview of some of the things we have ' +
            'planned to come for readers.',
        url: '/articles/new-changes',
        img: 'ImproveMain.webp',
        alt: 'A black calculator, paperclip, and a pen on a piece of paper with a bar graph that has ' +
            'many thin black bars.',
        header: 'Improve.webp'
    },
    {
        id: 7,
        title: 'What Truly Makes a Good Technical Copywriter Stand Out',
        date: 'Sep 19th 2022',
        text: 'How to become a better technical copywriter and develop in-demand skills to make an impact ' +
            'and provide these services to businesses.',
        url: '/articles/good-tech-writer',
        img: 'GoodWriterMain.webp',
        alt: 'Older dip pen resting on a black tabletop and a black background along with a black shadow ' +
            'covering over them.',
        header: 'GoodWriter.webp'
    },
    {
        id: 6,
        title: '6 Growing Jobs To Take Advantage of our Technical Future',
        date: 'Sep 14th 2022',
        text: 'As Jobs began to be automated and replaced by technology, here are the few that have a ' +
            'prosperous future for anyone to take advantage.',
        url: '/articles/tech-future',
        img: 'TechieMain.webp',
        alt: 'Black glasses sitting in front of 4 computer screens where only through the glasses the image is clear.',
        header: 'Techie.webp'
    },
    {
        id: 5,
        title: 'Satellites - The Space Spies That Watch Over the World',
        date: 'Sep 11th 2022',
        text: 'Explaining the good and bad of constant satellite recording with where we draw the line between ' +
            'spying on people and privacy.',
        url: '/articles/space-spies',
        img: 'SatMain.webp',
        alt: 'Satellite in space looking down onto earth where there are brown dry mountains next to a deep blue ' +
            'body of water.',
        header: 'Sat.webp'
    },
    {
        id: 4,
        title: 'Python has Been Taking Over the Data Science World',
        date: 'Sep 7th 2022',
        text: 'Python has been hitting the world by storm, becoming the most popular programming language, ' +
            'especially in Data Science. Let\'s see why.',
        url: '/articles/python-data-science',
        img: 'PythonDataMain.webp',
        alt: 'Person in a black hoodie typing on a Mac Laptop with a black mouse next to it with green colored ' +
            'code filling the page.',
        header: 'PythonData.webp'
    },
    {
        id: 3,
        title: 'Data Visualization - A Profitable Data Science Subcategory',
        date: 'Sep 6th 2022',
        text: 'Data Visualization is the art of displaying data in a way that anyone can read allowing for the ' +
            'value of true creativity to be shown.',
        url: '/articles/data-vis',
        img: 'VisualMain.webp',
        alt: 'Bar graph on a purple sheet of paper with an iPhone displaying the calculator app next to a set ' +
            'of pencils and a notebook.',
        header: 'Visual.webp'
    },
    {
        id: 2,
        title: 'Ethical Hackers are Needed More Than Ever in Our Future',
        date: 'Sep 5th 2022',
        text: 'As hackers are getting better and better, what can truly be done to stop them to keep you and ' +
            'your family digitally safe.',
        url: '/articles/ethical-hacking',
        img: 'EthicalMain.webp',
        alt: 'MacBook Pro Laptop with two credit cards resting on the keyboard with a padlock on top of those.',
        header: 'Ethical.webp'
    },
    {
        id: 1,
        title: 'How I Built a Crypto Website with Articles and an Investing System - Part 1',
        date: 'Sep 4th 2022',
        text: 'Starting from programming to engineering to programming. The full cycle of why Jus is where ' +
            'he is and why',
        url: '/articles/introduction',
        img: 'IntroMain.webp',
        alt: 'Man in a black suit suit and a light grey shirt that is reaching out his hand for a greeting handshake.',
        header: 'Intro.webp'
    }
]
export default details;