import React, { Component } from 'react'
import RecipesContainer from './containers/RecipesContainer'
import NavBar from './components/NavBar'
import "./App.css"

class App extends Component {
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
