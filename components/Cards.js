// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios.get("https://lambda-times-api.herokuapp.com/articles")
.then(response => {
    const data = Object.entries(response.data.articles);
    data.forEach(item => {
        item[1].forEach(article =>{
            const container = document.getElementsByClassName("cards-container")[0];
            container.appendChild(articleMaker(article));
        })
    })
})
.catch(error => {
    console.log(error);
    const errorHolder = document.getElementsByClassName("errors-container");
    errorHolder.innerHTML = error.message;
})

function articleMaker(article){
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    const headLineDiv = document.createElement("div");
    headLineDiv.className = "headline";
    headLineDiv.innerHTML = article.headline;
    const authorDiv = document.createElement("div");
    authorDiv.className = "author";
    const imgContainer = document.createElement("div");
    imgContainer.className = "img-container";
    const img = document.createElement("img");
    img.src = article.authorPhoto;
    imgContainer.appendChild(img);
    const spanElement = document.createElement("span");
    spanElement.innerHTML = article.authorName;
    authorDiv.appendChild(imgContainer);
    authorDiv.appendChild(spanElement);
    cardDiv.appendChild(headLineDiv);
    cardDiv.appendChild(authorDiv);
    cardDiv.addEventListener("click",function (){
        console.log(headLineDiv.textContent);
    })
    return cardDiv;
}