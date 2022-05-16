const { ChineseZodiac } = require('../models');

const chineseZodiacData = [
    {
        name:'Rat',
        prediction: 'Rat people (those born in the year of the Rat), according to Chinese astrological predictions, you were affected by various adverse changes due to a (partial) coincidence with Tai Sui last year. Entering year of the Tiger 2022, your fortune will be more stable than last year. Although there will not be much development, the year will pass smoothly in general.' + '\r\n' +
        'The probability of promotion this year is small, but you should still try hard, and there is a small chance you will succeed.' + '\r\n' +
        'When signing various documents and contracts, Rat people, you must carefully read the relevant clauses, so as to avoid disputes in the future, which may lead to lawsuits.' + '\r\n' +
        'When traveling on business or far away, be sure to buy travel insurance to protect your personal safety.'
    },
    {
        name:'OX',
        prediction:'Ox people (those born in a Chinese zodiac year of the Ox), according to Chinese astrological predictions, in year of the Tiger 2022, your overall fortune will steadily pick up, and development prospects for this year are very good'+ '\r\n' +

        'In terms of relationships, single Ox people, you are expected to exit from singleness in 2022. As long as you treat that someone sincerely, you will reap a happy harvest of love. For Ox people with a partner, you are expected to enter the realm of marriage this year.'+ '\r\n' +
        
        'In terms of health, people of the year of the Ox, you will have some minor problems, but they will just be colds and the like. Don't worry too much. You should actively exercise your body in your spare time to improve your resistance to infection.'
    
    },
    {
        name:'Tiger',
        prediction:'Tiger people (those born in the year of the Tiger), according to Chinese astrological predictions, as you again enter your zodiac birth year 2022, you must be psychologically prepared. Many things will not go according to your expectations. Being in your birth year, you will easily to be in opposition to Tai Sui (the star/god of age), so you will need to be cautious in your undertakings.'+ '\r\n' +

        'Tigers, doing certain lucky things will help you withstand many disasters: it would be very auspicious for you to hold your wedding, have children, or buy a home this year or next year.'+ '\r\n' +
        
        'In terms of your career, Tiger people, you will have good fortune this year. If you can work on a high-priority project, you will have a high probability of being promoted as long as you work hard.'+ '\r\n' +
        
        'Tiger people, you should wear accessories that match your zodiac sign this year to defuse bad luck. Your best match is the Chinese zodiac pig, so it is recommended that you choose pig-shaped ornaments.'
    
    },
    {
        name:'Rabbits',
        prediction:'Rabbit people (those born in a Chinese zodiac year of the Rabbit), according to Chinese astrological predictions, in year of the Tiger 2022, you will feel a little bit guilty, but the problem will not be big, and many things will go smoothly.'+ '\r\n' +

        'This year is suitable to begin the “three happy events of life” — marriage, having a child, and buying a house or extending your home, all of which are conducive to the development of your personal and family fortunes.'+ '\r\n' +
        
        'Rabbits who are engaged in creative, artistic, and similar fields, your career fortunes will see a significant period of upswell. It is necessary for you to perform well in leadership, and this will soon usher in a promotion and salary increase. However, everything must not be too rushed. It is necessary for you to follow a step-by-step process to progress your projects, otherwise accidents are likely to occur.'
    
    },
    {
        name:'Dragon',
        prediction:'Dragon people (those born in a Chinese zodiac year of the Dragon), you have had a rough patch of fortune in the past year of the Ox, but your positive attitude has also driven out a lot of bad luck. Dragons, in the year of the Tiger 2022, life will be much better than previously, especially in your career. As long as you work hard on the groundwork, you will surely get rich returns.',
    
    },
    {
        name:'Snake',
        prediction:'Snake people (those born in the year of the Snake), according to Chinese astrological predictions, you will encounter some setbacks and difficulties in 2022, but in the end they will all be overcome and sorted out, and your overall fortune will not be bad. As long as you have more patience, you will be able to solve difficult problems.' + '\r\n' +

        'Relational instability will be your biggest problem this Tiger year. Snakes, when you are over-stressed and upset, you are recommended to travel to soothe your mood.'+ '\r\n' +
        
        'This year Snake people, you can choose to move or get married, and you can alleviate misfortune by holding a happy event. If there is no happy event to be held, you can choose to participate in more banquets with relatives and friends, which will help remove bad luck from your body.'
    
    },
    {
        name:'Horse',
        prediction:'Horse people (those born in a Chinese zodiac year of the Horse), your luck this Tiger year 2022 will show an upward trend, especially in terms of career development. As long as you know how to seize an opportune time and go all out in your projects, your leaders will see your shining attributes.'+ '\r\n' +

        'Your interpersonal relationships will also improve compared with previous years, and you will generally get along very harmoniously with your family and colleagues.'
    
    },
    {
        name:'Goat',
        prediction:'Goat people (those born in a Chinese zodiac year of the Goat), your luck for this Tiger year of 2022 is relatively smooth. Your career development is ideal, and happy events will be ushered in one after another. This year is worth looking forward to!'+ '\r\n' +

        'Goats, there will be greater development in your interpersonal relationships this year, and you will be able to make close friends.'+ '\r\n' +
        
        'You will also get along well with your colleagues, work efficiency will be improved, and the progress of your projects will be accelerated. Your personal talents can be used readily, and your good team coordination skills will be appreciated by your boss, which will make many people happy.'+ '\r\n' +
        
        'This year, unmarried people of the Goat sign, you will see the joys of dating life rolling in. When you meet the right person, you must learn to cherish it.',
    
    },
    {
        name:'Monkey',
        prediction:'Monkey people (those born in a Chinese zodiac year of the Monkey), your overall fortune in 2022 is average, according to Chinese astrological predictions.'+ '\r\n' +

        'During this year, Monkeys, you will encounter many unexpected things. It will be obvious that things are going smoothly for a start, but there will be many changes later, which may catch you off guard. However, there is no need to be too anxious. Changes are not necessarily a bad thing in the end, and sometimes they are a blessing in disguise.'+ '\r\n' +
        
        'Monkey people, 2022 is astrologically suitable for you to engage in happy events, such as getting married and having children, moving to a new home, or starting a company.',
    
    },
    {
        name:'Rooster',
        prediction:'Rooster people (those born in the year of the Rooster), according to Chinese astrological predictions, your overall luck will have an upward trend in 2022, and you will have the opportunity to obtain a platform to showcase your talents.' + '\r\n' +

        'Roosters, you should see great improvements in your career, wealth, and interpersonal relationships this year. This year, you will meet wealthy people who will help you. You will have many opportunities for learning and development, and you will go to the next level in your career. You will inevitably encounter setbacks in the process, but as long as you persist and don't give up, you can win success.',
    
    },
    {
        name:'Dog',
        prediction:'Dog people (those born in a Chinese zodiac year of the Dog), you are destined to have good fortune in 2022, showing an upward trend compared to the previous year, according to Chinese astrological predictions.'+ '\r\n' +

        'After receiving behind-the-scenes help from powerful people, your careers should improve a lot, and you will be favored by your leaders.'+ '\r\n' +
        
        'Dogs, you are advised to go out more, communicate with others, and not to close yourselves off to avoid being depressed all day. You will have more inspirational moments this year. Dogs, learn to seize any opportunity to use your strengths in your work and shine.',
    
    },
    {
        name:'Pig',
        prediction:'Pigs (those born in a Chinese zodiac year of the Pig), according to Chinese astrological predictions for 2022, although you will encounter many unsatisfactory things, the final result will be good.' + '\r\n' +

        'You will be in a very happy mood this year. You can choose to instigate one of the “three happy events” in your life this year, that is, getting married, adding to your family, or buying a home, which will dilute your bad luck.'+ '\r\n' +
        
        'Pigs who will be in love in 2022, you can choose to enter the life of marriage this year and have a smooth and happy year.',
    
    },
]

const seedChinesezodiac = () => ChineseZodiac.bulkCreate(chineseZodiacData);

module.exports = seedChinesezodiac;