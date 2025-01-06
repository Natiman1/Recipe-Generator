import { useState, useEffect, useRef } from 'react';
import IngredientsList from './IngredientsList';
import ClaudeRecipe from './ClaudeRecipe';
import { getRecipeFromMistral } from "../../ai"

const Main = () => {

    const [ingredients, setIngredients] = useState([
        "all the main spices", "pasta", "ground beef", "tomato paste"
    ])

    const [recipe, setRecipe] = useState("")
    const recipeSection = useRef(null)

    useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [recipe])

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
             ref={recipeSection}
             ingredients={ingredients}
             getRecipe={getRecipe}
            /> }

            {recipe ? <ClaudeRecipe recipe={recipe} /> : null}
        </main>
    );
};

export default Main