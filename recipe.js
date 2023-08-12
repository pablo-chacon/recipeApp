class Recipe {
    constructor(servings) {
        this.servings = servings;
    }

    calculateIngredientValue(amount) {
        return amount / 24 * this.servings;
    }

    generateIngredientList() {
        let ingredientList = '';

        ingredients.forEach((ingredient) => {
            const ingredientValue = this.calculateIngredientValue(ingredient.amount);
            ingredientList += `<li>${ingredient.ingredient}: ${ingredientValue}: ${ingredient.unit}</li>`;
        });

        return ingredientList;
    }

    display() {
        const ingredientList = this.generateIngredientList();
        ingredientsTextElement.innerHTML = ingredientList;
    }
}

const ingredients = [
    {
        ingredient: 'Roasted nuts',
        amount: 100,
        unit: 'g'
    },
    {
        ingredient: 'Butter',
        amount: 250,
        unit: 'g'
    },
    {
        ingredient: 'Cacao',
        amount: 2,
        unit: 'dl'
    },
    {
        ingredient: 'Sugar',
        amount: 4.5,
        unit: 'dl'
    },
    {
        ingredient: 'Egg',
        amount: 4,
        unit: 'pcs'
    },
    {
        ingredient: 'Salt',
        amount: 2,
        unit: 'teaspoon'
    },
    {
        ingredient: 'Vanilla powder',
        amount: 2,
        unit: 'pinch'
    },
    {
        ingredient: 'Flour',
        amount: 3,
        unit: 'dl'
    },
    {
        ingredient: 'Baking soda',
        amount: 0.5,
        unit: 'teaspoon'
    }
];

const servings = document.querySelector("input");
const log = document.getElementById("value");
const ingredientsTextElement = document.getElementById('ingredient');
const recipeList = document.querySelectorAll('[ingredients]');
const recipe = new Recipe(1);



recipe.display();
