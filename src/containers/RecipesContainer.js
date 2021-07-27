import React, { Component } from 'react'

import FilterBar from "../components/FilterBar"
import Recipe from '../components/Recipe'

class RecipesContainer extends Component {
    
    componentDidMount(){
        console.log("RECIPE CONTAINER MOUNTED")
    }

    render() {
        const recipesJSX = this.props.recipes.map((r,idx) => {
            return (
            <Recipe saved={this.props.saved} addRecipe={this.props.addRecipe} recipe={r} key={idx} />
        )}) 
        
        return (
            <div id="recipe-container">
                <FilterBar />
                {recipesJSX}
            </div>
        )
    }
}

export default RecipesContainer
