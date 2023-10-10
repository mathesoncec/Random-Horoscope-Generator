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
    "Embrace your intuition; it will lead you in the right direction.",
    "Stay patient and persistent; success is just around the corner.",
    "It's a good day to connect with old friends and strengthen bonds.",
    "Don't be afraid to seek advice from a mentor or trusted source.",
    "Your financial situation is looking positive; make wise investments.",
    "Focus on your health and well-being; prioritize self-care today.",
    "Expect unexpected opportunities to come your way.",
    "Your charisma will attract positive attention and opportunities.",
    "Take time for introspection and personal growth.",
    "Embrace change as a chance for personal transformation."
];

// Define an array of inspirational quotes
const inspirationalQuotes = [
    "Believe you can and you're halfway there. -Theodore Roosevelt",
    "The only way to do great work is to love what you do. -Steve Jobs",
    "In the middle of every difficulty lies opportunity. -Albert Einstein",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. -Winston Churchill",
    "The best way to predict the future is to create it. -Peter Drucker",
    "Hardships often prepare ordinary people for an extraordinary destiny. -C.S. Lewis",
    "The only limit to our realization of tomorrow will be our doubts of today. -Franklin D. Roosevelt"
];

// Function to generate a random message
function generateMessage() {
    const randomSign = zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
    const randomMessage1 = astroMessages[Math.floor(Math.random() * astroMessages.length)];
    let randomMessage2 = astroMessages[Math.floor(Math.random() * astroMessages.length)];
    const inspirationalQuote = inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)];

    if (randomMessage1 === randomMessage2) {
        randomMessage2 = astroMessages[Math.floor(Math.random() * astroMessages.length)];
    }

    return `Your horoscope for ${randomSign}:\n${randomMessage1}\n${randomMessage2}\n${inspirationalQuote}`;
}

console.log(generateMessage())