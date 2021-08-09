// javascript
var arcadeSound = new Audio("js/sounds/arcade.wav");
var quotes = [
	'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe. -Albert Einstein', 
	'You only live once, but if you do it right, once is enough. -Mae West', 
	'If you tell the truth, you don\'t have to remember anything. -Mark Twain', 
	'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.  -Martin Luther King Jr.', 
	'In three words I can sum up everything I\'ve learned about life: it goes on. -Robert Frost',
	'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams. -Dr. Seuss', 
	'The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela',
	'It is during our darkest moments that we must focus to see the light. -Aristotle',
	'Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead',
	'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. -Helen Keller',
]

function generateQuote() 
{
	var randomInt = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomInt];
	arcadeSound.play();
}