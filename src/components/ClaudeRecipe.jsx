import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";

const ClaudeRecipe = (props) => {
    return (
        <section >
            <div className='suggested-recipe-container'>
                <h2>Suggested recipe:</h2>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {props.recipe}
                </ReactMarkdown>
            </div>
        </section>
    )
}

export default ClaudeRecipe

ClaudeRecipe.propTypes = {
    recipe: PropTypes.string.isRequired,
};

