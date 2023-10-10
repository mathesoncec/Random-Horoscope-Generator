//define arrays of data for each part of the message

const zodiacSigns = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", 'Aquarius', "Pisces"
];

const astroMessages = [
    "Today is a day to take risks and embrace change.",
    "Your energy levels will be high, and you'll accomplish your goals.",
    "A surprise is waiting for you today. Stay open to new opportunities.",
    "Focus on self-care and relaxation to maintain your balance.",
    "You'll have the courage to speak your mind and make a difference.",
    "A creative project will lead to success. Trust your instincts.",
    "Harmony and balance will be your guiding principles today.",
    "Your determination will lead you to victory in your endeavors.",
    "Adventure awaits! Be open to new experiences and ideas.",
    "Your disciplined approach will help you achieve your goals.",
    "Your innovative thinking will set you apart from the crowd.",
    "Embrace your intuition; it will lead you in the right direction."
];

// Function to generate a random message
function generateMessage() {
    const randomSign = zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
    const randomMessage1 = astroMessages[Math.floor(Math.random() * astroMessages.length)];
    let randomMessage2 = astroMessages[Math.floor(Math.random() * astroMessages.length)];

    if (randomMessage1 === randomMessage2) {
        randomMessage2 = astroMessages[Math.floor(Math.random() * astroMessages.length)];
    }

    return `Your horoscope for ${randomSign}:\n${randomMessage1}\n${randomMessage2}`;
}

console.log(generateMessage())