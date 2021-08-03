import React, { Component } from 'react'
import RecipesContainer from './containers/RecipesContainer'
import SavedRecipes from './containers/SavedRecipes'
import NavBar from './components/NavBar'
import RecipeForm from './components/RecipeForm'
import { ClimbingBoxLoader
} from 'react-spinners'
import "./App.css"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  state = {
    page: "recipes",
    recipes: [],
    saved: []
  }

  changePage = (e) => {
   
    
    this.setState({
      page: e.target.id
    })
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
    })
  }

  render() {

    return (
      <Router>
        <div className="app">
          <NavBar /> 
          <Switch>
            {this.state.recipes.length > 0 ? <Route path="/recipes" component={() => <RecipesContainer 
                                                      saved={this.state.saved} 
                                                      addToSaved={this.addToSaved} 
                                                      recipes={this.state.recipes}
                                                      /> 
                                              }/> : <h1 id="error"><ClimbingBoxLoader
                                              /> </h1>}
                                                  

            <Route path="/saved_recipes" component={() => <SavedRecipes saved={this.state.saved} />}/>
              
          
            <Route path="*" render={() => <h1 id="error">APP ERROR!!!</h1>}/>

          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
