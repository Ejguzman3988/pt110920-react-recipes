import React, { Component } from 'react'
import RecipesContainer from './containers/RecipesContainer'
import NavBar from './components/NavBar'
import "./App.css"

class App extends Component {
  state = {
    page: "recipes",
    recipes: [],
    saved: []
  }

  render() {
    return (
      <div class="app">
        <NavBar /> 
        <RecipesContainer />
      </div>
    )
  }
}

export default App
