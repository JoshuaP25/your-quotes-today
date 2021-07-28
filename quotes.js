let quotes = ['“The purpose of our lives is to be happy.” — Dalai Lama',
              '“If you want to live a happy life, tie it to a goal, not to people or things.”– Albert Einstein',
              '“The big lesson in life, baby, is never be scared of anyone or anything.”– Frank Sinatra',
              '“The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.”– Henry Ford'];

let text = document.getElementById('quote');
let button = document.getElementById('generateQuote');

function random() {
    return Math.floor(Math.random() * quotes.length);
}

function generate() {
    text.innerHTML = quotes[random()];
    button.innerHTML = "Come back tomorrow!";
    button.disabled = true;
}

button.addEventListener('click', generate);