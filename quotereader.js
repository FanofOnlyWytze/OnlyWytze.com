var obj = fetch("../quotes.JSON")
.then(res => res.text())
.then(data => JSON.parse(data))

console.log(obj)

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (obj.length));
    document.getElementById('quoteDisplay').innerHTML = obj;
}