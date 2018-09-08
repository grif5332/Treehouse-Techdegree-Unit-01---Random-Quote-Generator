/* === FSJS - Random Quote Generator ===
Tested on the following Browsers:
Firefox, Opera, Chrome
===================================== */

const intervalTimer = setInterval(printQuote, 10000);  // this is the global interval.  initial time : 10sec.

// (FSJS)Create the array of quote objects and name it quotes
const quotes = [
    {
        quote : "A good teacher can inspire hope, ignite the imagination, and instill a love of learning.", 
        source : "Brad Henry",
    },
    {
        quote : "Stay positive and happy. Work hard and don't give up hope. Be open to criticism and keep learning. Surround yourself with happy, warm and genuine people.",
        source : "Tena Desae"
    },
    {
        quote : "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
        source : "Dr. Seuss",
        citation : "I Can Read With My Eyes Shut!",
        year : "1978",
        tags : ["learning", "kids book", "author"]
    },
    {
        quote : "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.",
        source : "Pele",
        tags : ["soccer", "sports"]
    },
    {
        quote : "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
        source : "Colin Powell",
        tags : ["army", "general"]
    },
    {
        quote : "Develop a passion for learning. If you do, you will never cease to grow.",
        source : "Anthony J. D'Angelo"
    },
    {
        quote : "We learn from failure, not from success!",
        source : "Bram Stoker",
        citation : "Dracula",
        year : "1897",
        tags : ["Vampire", "author", "classic"]
    },
    {
        quote : "Education is what remains after one has forgotten what one has learned in school.",
        source : "Albert Einstein",
        tags : ["smart", "science"]
    },
    {
        quote : "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        source : "Benjamin Franklin",
        tags : ["Founding Father", "US"]
    },
    {
        quote : "You live and learn. At any rate, you live.",
        source : "Douglas Adams",
        citation : "Mostly Harmless",
        year : "1992",
        tags : ["author", "humor", "British"]
    },
    {
        quote : "Change is the end result of all true learning.",
        source : "Leo Buscaglia"
    },
    {
        quote : "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        source : "Mahatma Gandhi"
    },
    {
        quote : "Leadership and learning are indispensable to each other.",
        source : "John F. Kennedy",
        year : "1963",
        tags: ["President"]
    },
    {
        quote : "A good teacher must be able to put himself in the place of those who find learning hard.",
        source : "Eliphas Levi"
    },
    {
        quote : "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
        source : "Bruce Lee"
    },
    {
        quote : "I learned the value of hard work by working hard.",
        source : "Margaret Mead"
    },
    {
        quote : "The beautiful thing about learning is nobody can take it away from you.",
        source : "B.B. King",
        tags : ["Blues", " Musician"]
    },
    {
        quote : "Don't limit a child to your own learning, for he was born in another time.",
        source : "Rabindranath Tagore"
    },
    {
        quote : "I have never met a man so ignorant that I couldn't learn something from him.",
        source : "Galileo Galilei",
        year : "1564 - 1642"
    },
    {
        quote : "Learning is not attained by chance, it must be sought for with ardor and diligence.",
        source : "Abigail Adams"
    }, 
    {
        quote : "Your mind will answer most questions if you learn to relax and wait for the answer.",
        source : "William S. Burroughs",
        year : "1914 - 1997"
    },
    {
        quote : "You cannot open a book without learning something.",
        source : "Confucius"
    },
    {
        quote : "I'm not afraid of storms, for I'm learning how to sail my ship.",
        source : "Louisa May Alcott"
    },
    {
        quote : "I like to listen. I have learned a great deal from listening carefully. Most people never listen.",
        source : "Ernest Hemingway",
        year : "1899 - 1961"
    },
    {
        quote : "You don't learn to walk by following rules. You learn by doing, and by falling over.",
        source : "Richard Branson"
    },
    {
        quote : "Research is formalized curiosity. It is poking and prying with a purpose.",
        source : "Zora Neale Hurston"
    },
    {
        quote : "What makes a child gifted and talented may not always be good grades in school, but a different way of looking at the world and learning.",
        source : "Chuck Grassley"
    },
    {
        quote : "The library is the temple of learning, and learning has liberated more people than all the wars in history.",
        source : "Carl T. Rowan"
    },
    {
        quote : "He who would learn to fly one day must first learn to stand and walk and run and climb and dance; one cannot fly into flying.",
        source : "Friedrich Nietzche"
    },
    {
        quote : "I don't love studying. I hate studying. I like learning. Learning is beautiful.",
        source : "Natalie Portman",
        tags : ["Actress", "Star Wars"]
    },
    {
        quote : "Everything is a learning process: any time you fall over, it's just teaching you to stand up the next time.",
        source : "Joel Edgerton"
    },
    {
        quote : "Flying is learning how to throw yourself at the ground and miss.",
        source : "Douglas Adams",
        tags : ["author", "humor", "British"]
    },
    {
        quote : "I am always doing that which I cannot do, in order that I may learn how to do it.",
        source : "Pablo Picasso"
    },
    {
        quote : "The noblest pleasure is the joy of understanding",
        source : "Leonardo da Vinci"
    },
    {
        quote : "Education is learning what you didn't even know you didn't know.",
        source : "Daniel J. Boorstin"
    },
    {
        quote : "You aren't learning anything when you're talking.",
        source : "Lyndon B. Johnson",
        tags : ["President", "US", "Leader"]
    },
    {
        quote : "I never learn anything talking. I only learn things when I ask questions.",
        source : "Lou Holtz",
        tags : ["college", "football", "TV"]
    },
];

function getRandomQuote() {  // (FSJS)Create the getRandomQuuote function and name it getRandomQuote
    let randomNumberForQuote = getRandomNumbers();  //calls getRandomNumber() and inserts its value into the let Var. 
    
    let randomQuote = quotes[randomNumberForQuote];  //uses the  random number to get a random item from the quotes array.
    
    return randomQuote; //return the randomQuote data from the quotes array.
};

function printQuote() { // (FSJS)Create the printQuote funtion and name it printQuote
    let quoteData = getRandomQuote();  //Create a variable thats stores the getRandomQuote() function.
    let quoteOutput = `<p class="quote">${quoteData.quote}</p><p class="source">${quoteData.source}`;  //create a var to store the HTML string that contains the quote and source.
    
    if ("citation" in quoteData) {  //conditional to test whether there are citations, IF present then append to end of the quoteOutput
        quoteOutput += `<span class="citation"> ${quoteData.citation}</span>`;
    }
    
    if ("year" in quoteData) {  //conditional to test whether there is a year,  IF present then append to end of the quoteOutput
        quoteOutput += `<span class="year"> ${quoteData.year}</span>`;
    }
    
    if ("tags" in quoteData) { //conditional to test whether there are tags,  IF present then append to end of the quoteOutput
        quoteOutput += `<br>tags: `;
        for (let i = 0; i < quoteData.tags.length; i++) {  //since tags are present, loop through the tag array and append them to quoteOutput.
            quoteOutput += ` "${quoteData.tags[i]}"`;
        }
    }

    document.getElementById('quote-box').innerHTML = quoteOutput + `</p>`;
    randomBackgroundColor();
};

// (FSJS)This event listener will respond to "Show another quote" button clicks
// (FSJS)when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/* == Random Number Generator. == */
function getRandomNumbers() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    return randomNumber;
};

/* == Random Background Color Generator == */
function randomBackgroundColor() {
    let red = Math.floor(Math.random() * 256); //generates the red part of the RGB
    let green = Math.floor(Math.random() * 256);  //generates the green part of the RGB
    let blue =  Math.floor(Math.random() * 256);  //generates the blue part of the RGB

    let randomBackgroundColor = `rgba(${red},${green},${blue}, .85)`;  // puts the BG color together.  The .85 opacity is for future random bg image implementation.  

    document.body.style.backgroundColor = randomBackgroundColor;
    document.getElementById('loadQuote').style.backgroundColor = randomBackgroundColor; //makes the button(s) background the same color as bg.
};