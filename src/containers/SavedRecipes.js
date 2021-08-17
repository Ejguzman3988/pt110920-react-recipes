import React, { Component } from 'react'
import { connect } from 'react-redux'
import Recipe from "../components/Recipe"


class SavedRecipes extends Component {
    render() {
        const recipes = this.props.saved.map( recipe => <Recipe recipe={recipe} />)
        return (
            <div id="saved-container">
                <h1>SAVED RECIPES</h1>
                <p>{recipes}</p>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        saved: state.root_saved.saved
    }
}
export default connect(mapStateToProps)(SavedRecipes)
