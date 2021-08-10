import React, { Component } from 'react'
import { connect } from 'react-redux'

import FilterBar from "../components/FilterBar"

class RecipesContainer extends Component {
    render() {
        const recipesJSX = this.props.recipes.map(r => {
            return (
            <div className="card">
                <h3>Title: {r.title}</h3>
                <p>Time: {r.time} mins</p>
                <img alt="recipe" src={r.image}></img> <br/>
                <button> Add to Recipe Book </button> 
                <div dangerouslySetInnerHTML={{__html: r.instructions}}></div>
            </div>
        )}) 
        
        return (
            <div id="recipe-container">
                <FilterBar />
                {recipesJSX}
            </div>
        )
    }
}

const mapStateToProps = (stateFromTheStore) => {
    return { recipes: stateFromTheStore.recipes}
}

// MDTP
// Dispatch
// Actions

                // connect() -> returns function, That function expects a component
                // In the argument
                // connect(store stuff)( component )
export default connect(mapStateToProps)(RecipesContainer)
