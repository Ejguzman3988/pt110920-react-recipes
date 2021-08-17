import React, { Component } from 'react'
import RecipesContainer from './containers/RecipesContainer'
import SavedRecipes from './containers/SavedRecipes'
import NavBar from './components/NavBar'
import "./App.css"
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Loading from './svg/Loading'

class App extends Component {
  state = {
    saved: []
  }

  render() {
    return (
      <Router>
        <div class="app">
          <NavBar />
          <Switch>
            <Route path="/recipes" component={(routerInfo) => <RecipesContainer routerInfo={routerInfo} />}  />
            <Route path="/saved_recipes" component={(routerInfo) =>  <SavedRecipes routerInfo={routerInfo} />}  />
          </Switch> 
        </div>
      </Router>
    )
  }
}

const MSTP = (state) => {
  return { saved: state.recipes}
}

export default connect(MSTP)(App)
