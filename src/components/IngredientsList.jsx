import PropTypes from 'prop-types';

function IngredientsList(props) {

    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    return (
        <section>
            <h2 className='ingredient'>Ingredient on hand:</h2>
            <ul className="ingredients-list">
                {ingredientsListItems}
            </ul>
            {props.ingredients.length > 3 && <div className='recipe-container'>
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={props.getRecipe}>Get a recipe</button>
            </div>}

        </section>
    )
}

IngredientsList.propTypes = { 
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    getRecipe: PropTypes.func.isRequired, 
};

export default IngredientsList