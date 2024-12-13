// 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

import { useState } from 'react';
import IngredientsList from './IngredientsList';
import ClaudeRecipe from './ClaudeRecipe';
import { getRecipeFromMistral } from "../../ai"

// import PropTypes from 'prop-types';

const Main = () => {

    const [ingredients, setIngredients] = useState([
        "all the main spices", "pasta", "ground beef", "tomato paste"
    ])

    const [recipe, setRecipe] = useState("")

    

    function addIngredient(event) {
        event.preventDefault(); // Prevent the page from reloading
        const formData = new FormData(event.target); // Create FormData object
        const newIngredient = formData.get("ingredient"); // Get the "ingredient" value

        if (newIngredient) {
            setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
            event.target.reset(); // Clear the input box
        }
    }

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    return (
        <main>
            <form onSubmit={addIngredient} className='form' aria-label='Add ingredient'>
                <input type="text" name="ingredient" placeholder='e.g. oregano' />
                <button>+ Add ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientsList 
             ingredients={ingredients}
             getRecipe={getRecipe}
            /> }

            {recipe ? <ClaudeRecipe recipe={recipe} /> : null}
        </main>
    );
};

// Main.propTypes = {
//     img: PropTypes.string.isRequired, // imgSrc must be a string and is required
//     country: PropTypes.string.isRequired,  // link must be a string and is required
//     googleMapsLink: PropTypes.string.isRequired,  // link must be a string and is required
//     title: PropTypes.string.isRequired,  // link must be a string and is required
//     dates: PropTypes.string.isRequired,  // link must be a string and is required
//     text: PropTypes.string.isRequired,  // link must be a string and is required

// };

export default Main