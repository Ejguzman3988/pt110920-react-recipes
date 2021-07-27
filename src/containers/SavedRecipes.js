import React, { Component } from 'react'
import Recipe from '../components/Recipe'

class SavedRecipes extends Component {
    render() {
        const recipeJSX = this.props.saved.map( (r,idx) => <Recipe saved={this.props.saved} recipe={r} key={idx} /> )

        return (
            <div id="saved-recipe">
                { recipeJSX }
            </div>
        )
    }
}

export default SavedRecipes
