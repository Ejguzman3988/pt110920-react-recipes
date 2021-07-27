import React, { Component } from 'react'
import { recipeArray } from "../recipeArray"
import FilterBar from "../components/FilterBar"

class RecipesContainer extends Component {
    render() {
        const recipesJSX = recipeArray.recipes.map(r => {
            return <div className="card">
                <h3>Title: {r.title}</h3>
                <p>Time: {r.time} mins</p>
                <img alt="recipe" src={r.image}></img> <br/>
                <button> Add to Recipe Book </button> 
                <div dangerouslySetInnerHTML={{__html: r.instructions}}></div>
            </div>
        }) 
        
        return (
            <div id="recipe-container">
                <FilterBar />
                {recipesJSX}
            </div>
        )
    }
}

export default RecipesContainer
