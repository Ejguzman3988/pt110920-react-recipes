import React, { Component } from 'react'
import FilterBar from "../components/FilterBar"
import Recipe from '../components/Recipe'

class RecipesContainer extends Component {
    
    componentDidMount(){
        console.log("RECIPE CONTAINER MOUNTED")
    }

   
    
    render() {
        const recipesJSX = this.props.recipes.map(r => {
            return (
                <Recipe key={r.id} saved={this.props.saved} addToSaved={this.props.addToSaved} recipe={r} />
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
