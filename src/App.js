import React, { Component } from 'react'
import RecipesContainer from './containers/RecipesContainer'
import SavedRecipes from './containers/SavedRecipes'
import NavBar from './components/NavBar'
import "./App.css"
import { connect } from 'react-redux'

class App extends Component {
  state = {
    page: "recipes",
    saved: []
  }

  render() {
    return (
      <div class="app">
        <NavBar /> 
        <RecipesContainer /> 
        <SavedRecipes />
      </div>
    )
  }
}

const MSTP = (state) => {
  return { saved: state.recipes}
}

export default connect(MSTP)(App)
