import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addSaved} from "../actions/savedActions"

import FilterBar from "../components/FilterBar"

class RecipesContainer extends Component {
    render() {
        const recipesJSX = this.props.recipes.map(r => {
            return (
            <div className="card">
                <h3>Title: {r.title}</h3>
                <p>Time: {r.time} mins</p>
                <img alt="recipe" src={r.image}></img> <br/>
                <button onClick={() => this.props.addSaved(r)}> Add to Recipe Book </button> 
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
    return { recipes: stateFromTheStore.root_recipes.recipes}
}

// MDTP
// Dispatch
// Actions

                // connect() -> returns function, That function expects a component
                // In the argument
                // connect(store stuff)( component )
// Dispatch is how we pass our actions into the reducer
// action is a json with type and payload
// dispatch is simlar to set state and that triggers a re render
const mapDispatchToProps = (dispatch) => {
    return{
        addSaved: (recipe) => dispatch(addSaved(recipe)),
        deleteSaved: (recipe) => dispatch({ type: "DELETE_SAVED", payload: recipe})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)
