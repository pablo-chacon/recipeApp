class Recipe {
    constructor(servings) {
        this.servings = servings;
    }
    
    calculateIngredientValue(ingredientValue) {
        return ingredientValue / 24 * this.servings;
    }
    
    generateIngredientList() {
        let ingredientList = '';
        
        ingredients.forEach((item) => {
            const ingredientValue = this.calculateIngredientValue(item.value);
            ingredientList += `<li>${item.key}: ${ingredientValue}</li>`;
        });
        
        return ingredientList;
    }

    display() {
        servingsBtn.addEventListener("click", () => {
            ingredientsTextElement.innerHTML = this.generateIngredientList();
        });
    }
}

const servingsBtn = document.getElementById("servingsBtn");
const ingredientsTextElement = document.getElementById('ingredient');
const recipeList = document.querySelectorAll('[ingredients]');

const ingredients = new Map([
    ['Roasted nuts', 100],
    ['Butter', 250],
    ['Cacao', 2],
    ['Sugar', 4.5],
    ['Egg', 4],
    ['Salt', 2],
    ['Vanilla powder', 2],
    ['Flour', 3],
    ['Baking soda', 0.5]
]);

const recipe = new Recipe(1);
recipe.display();