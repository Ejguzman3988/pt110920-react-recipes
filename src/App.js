import React, { Component } from 'react'
import RecipesContainer from './containers/RecipesContainer'
import SavedRecipes from './containers/SavedRecipes'
import NavBar from './components/NavBar'
import "./App.css"

class App extends Component {
  state = {
    page: "recipes",
    recipes: [],
    saved: []
  }

  // We want to fetch on componentDidMount
  componentDidMount(){
    fetch('http://localhost:3001/recipes') 
      .then(resp => resp.json())
      .then(recipes => {
        this.setState({ recipes: recipes}, () => console.log("THIS IS THE LOG FROM SETTING STATE:", this.state))
      })
  }

  addToSaved = (id) => {
    const foundRecipe = this.state.recipes.find((recipe) => {
      return recipe.id === id
    })

    this.setState((prevState) => {
      // return { saved: prevState.saved.concat(foundRecipe) }
      return { saved: [...prevState.saved, foundRecipe]}
    }, () => console.log("ADDTOSAVED: ", this.state.saved))
  }

  render() {

    return (
      <div className="app">
        <NavBar /> 
        <RecipesContainer saved={this.state.saved} addToSaved={this.addToSaved} recipes={this.state.recipes} /> 
      </div>
    )
  }
}

export default App
