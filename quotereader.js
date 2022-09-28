async function fetchQuotes() {
    var obj = await fetch("https://www.onlywytze.com/quotes.json")
    .then(res => res.text())
    .then(data => JSON.parse(data))
}

function newQuote() {
    var obj = fetchQuotes();
    var randomNumber = Math.floor(Math.random() * (obj.length));
    document.getElementById('quoteDisplay').innerHTML = obj;
}