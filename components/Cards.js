import axios from 'axios';
// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
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
const cardsContainer = document.querySelector('.cards-container');

function articleMaker(articleObj) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const authorContainer = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const name = document.createElement('span');
    
    card.className = 'card';
    headline.className = 'headline';
    imageContainer.className = 'img-container';
    authorContainer.className = 'author';

    headline.textContent = articleObj.headline;
    name.textContent = `By ${articleObj.authorName}`;
    image.src = articleObj.authorPhoto; 

    card.appendChild(headline);
    card.appendChild(authorContainer);
    authorContainer.appendChild(imageContainer);
    authorContainer.appendChild(name);
    imageContainer.appendChild(image);

    card.addEventListener('click', () => {
        console.log(headline.textContent)
    })

    return card
}

const articles = 'https://lambda-times-backend.herokuapp.com/articles';

axios.get(articles)
    .then(function (value) {
        console.log(value.data.articles);
        const cardInfo = value.data.articles;
        // console.log(cardInfo);
        for(let key in cardInfo){
            // console.log(cardInfo[key])
            const cardInfoArr = cardInfo[key];
            // console.log(cardInfoArr);
            cardInfoArr.forEach(item => {
                // console.log(item); 
                 cardsContainer.appendChild(articleMaker(item))
            })
        }
    })
    .catch(function (error) {
       console.log(error);
    })
