class Recipe {

    constuctor(servings) {
        this.servings = servings;
    }
    
    ingredients() {
        let recipeRelations;
        const ingredients = new Map([
            ["Rostade Hasselnötter", 100],
            ["Smör", 250],
            ["Kakao", 2], 
            ["Strösocker", 4.5],
            ["Ägg", 4],
            ["Salt", 2],
            ["Vaniljpulver", 2],
            ["Vetemjöl", 3],
            ["Bakpulver", 0.5]
            ]);
        
        oneServing = ingredients.forEach(ingredients.get(value) / 24);
        recipeRelations = oneServing * this.servings;
        
        return document.getElementById('ingredient').innerHTML = ingredients.forEach(ingredients.set(key, recipeRelations));       
    }
    

    display() {
        const display = document.querySelector('servings')
        this.ingredientsTextElement.innerText =
          this.getDisplayIngredients(this.ingredients)
        if (this.servings != null) {
          this.ingredientsTextElement.innerText =
            `${this.getDisplayIngredients(this.servings)} ${this.ingredients}`
        } else {
          this.ingredientsTextElement.innerText = ''
        }
      }
    }

const servingsBtn = document.getElementById("servingsBtn").addEventListener("click", ingredients());
const currentServingsTextElement = document.querySelector('servings')
const ingredientsTextElement = document.getElementsById('ingredient');
const recipeList = document.querySelectorAll('[ingredients]')
const reviewList = document.querySelector('#review-list');
const noReviews = document.getElementById('#no-reviews');
const form = document.querySelector('form');
const postBtn = document.getElementById("reviewBtn").addEventListener("click", form, reviewDiv.classList.add('review'));

let ingredientRelations = [];

let reviews = [];
document.querySelector("body > div.c-site-wrapper > div.c-review > div.c-review__content > div.o-content-box.c-reviewe__instructions > div");

function handleSubmit(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Get recipe name, ingredients, and method input values
    const nameInput = document.querySelector('#review-name');
    const reviewInput = document.querySelector('#review');
    const reviewName = nameInput.value.trim();
    const reviewData = reviewInput.value.trim().split(',').map(i => i.trim());
    
    displayReviews();
}

if (reviewName && reviews.length) {
    const newReview = { reviewName, reviewData};
    reviews.push(newReview);
}

nameInput.value = '';
reviewInput.value = '';


form.addEventListener('submit', handleSubmit);

function displayReviews() {
    reviewList.innerHTML = '';
    reviews.forEach((reviewName, index) => {
    const reviewDiv = document.createElement('div');
    });
}

reviewDiv.innerHTML = `
    <h3>${reviews.reviewName}</h3>
    <p><strong>Review:</strong></p>
    <ul>
    ${reviewName.reviews.map(reviewData).join('')}
    </ul>
    <button class="delete-button" data-index="${index}">Delete</button>`;



reviewList.appendChild(reviewDiv);

noReviews.style.display = reviews.length > 0 ? 'none' : 'flex';



displayReviews();
