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

  componentDidMount(){
    fetch('http://localhost:3001/recipes')
      .then(resp => resp.json())
      .then(recipes => this.setState({recipes: recipes}))
  }

  handlePage = (e) => {
    this.setState({page: e.target.id})
  }
  
  addRecipe = (id) => {
    const foundRecipe = this.state.recipes.find( recipe => recipe.id === id)
    this.setState((prevState) => {
      return{
        //saved: prevState.saved.concat(foundRecipe)
        saved: [...prevState.saved, foundRecipe]
      }
    }, () => console.log(this.state))
  }

  render() {
    return (
      <div className="app">
        <NavBar handleClick={this.handlePage} /> 
        {this.state.page === "recipes" ? <RecipesContainer addRecipe={this.addRecipe} recipes={this.state.recipes} saved={this.state.saved} /> : <SavedRecipes saved={this.state.saved} /> }
      </div>
    )
  }
}

export default App
