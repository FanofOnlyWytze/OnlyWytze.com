async function fetchQuotes() {
    var obj = await fetch("https://www.onlywytze.com/quotes.json")
    .then(res => res.json());
    return obj;
}

function newQuote() {
    var promise = Promise.resolve(fetchQuotes());
    promise.then(obj => {
        var randomNumber = Math.floor(Math.random() * (obj.length));
        document.getElementById('quoteDisplayQuote').innerHTML = obj[randomNumber].quote;
        document.getElementById('quoteDisplayCite').innerHTML = "- " + obj[randomNumber].cite;
    });
}