const quote = document.getElementById('quote');
const author = document.getElementById('author');
const api_url = "https://quotes-api-self.vercel.app/quote"
async function getquote(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data.quote;
    author.innerHTML=data.author;
    console.log("Prasad");
}
getquote(api_url);
function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ quote.innerHTML +" ~ "+author.innerHTML,"Tweet Window","width=600px, height=300px")
}
// window.alert("hi")