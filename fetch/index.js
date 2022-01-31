// * grabbing all the elements from the html file
let quote = document.getElementById('quote');
let author = document.getElementById('author');
let btn = document.getElementById('btn');

// * the quotes api url
const url = 'https://api.quotable.io/random';

// * fetching the quote and displaying on to the webpage
let fetchQuote = () => {
    fetch(url)
    .then((data) => data.json())
    .then((item) => {
        quote.innerText = item.content;
        author.innerText = item.author;
    })
    .catch((err) => console.log(err));
};

// * adding an event listener to the buttons
window.addEventListener('load', fetchQuote);
btn.addEventListener('click', fetchQuote);