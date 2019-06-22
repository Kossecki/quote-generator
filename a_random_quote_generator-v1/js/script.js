//project 1 - A Random Quote Generator

let quotes = [
  { 
    quote: "... there is nothing that can be done without the patient corraboration of time.",
    source: "Edgar Degas",
    citation: "DEGAS by himself"
  },
  { 
    quote: "Treat what you don't have as nonexistent. Look at what you have, the things you value most, and think of how much you'd crave them if you didn't have them.",
    source: "Marcus Aurelius",
    citation: "Meditations, Book Seven: 27",
    year: 'second century CE'
  },
  { 
    quote: "Why this? Why that? Why? Why? Why?",
    source: "Dear Daugther",
    year: 'everyday single day'
  },
  { quote: "Drawing is not form, it is the sensation on has of it",
    source: "Edgar Degas",
    citation: "DEGAS by himself"
  },
  { quote: "Dig deep, the water—goodness—is down there. And as long as you keep digging, it will keep bubbling up.",
    source: "Marcus Aurelius"
  }

]
// Function to generate a random quote from the quotes array
function getRandomQuote() {
let random = Math.floor(Math.random()* (quotes.length));
let randomQuote = quotes[random];
return randomQuote;
}

// A variable 'quote' stores the product of the getRandomQuote function
// and a variable 'message' is declared & left empty
let quote = getRandomQuote();
let message = '';


//The message is concatenated using HTML classes for paragraphs and span
message += '<p class="quote">' + quote.quote + '</p>';
message += '<p class="source">'+ quote.source;
// if the properties 'citation' and 'year' are defined, they are also added to the message
if(quote.citation !== undefined){
  message += '<span class="citation">' + quote.citation + '</span>';
  }
if (quote.year !== undefined) {
  message += '<span class="year">' + quote.year + '</span>';
  } 
message += '</p>';

// Function to write the content of the message variable inside the HTML elemet 'quote-box'
function printQuote() {
  let div = document.getElementById('quote-box');
  div.innerHTML = message;
  return(message);
}

printQuote();


document.getElementById('loadQuote').addEventListener("click", printQuote, false);



