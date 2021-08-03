import React, { Component } from 'react'
import FilterBar from "../components/FilterBar"
import Recipe from '../components/Recipe'
import RecipeForm from '../components/RecipeForm';
import {
    Switch,
    Route,
  } from "react-router-dom";

class RecipesContainer extends Component {

    state = {
        search: ""
    }

    inputChange = (e) => {
        this.setState({ search: e.target.value })
    }
    
    componentDidMount(){
        console.log("RECIPE CONTAINER MOUNTED")
    }

   filterRecipes = () => {
       return this.props.recipes.filter( (r) => {
           return r.title.toLowerCase().includes(this.state.search.toLowerCase())
       } )
   }
    
    render() {
        const recipesJSX = this.filterRecipes().map(r => {
            return (
                <Recipe key={r.id} saved={this.props.saved} addToSaved={this.props.addToSaved} recipe={r} />
        )}) 
        
        return (
            <div id="recipe-container">
                <Switch>
                    <Route exact path="/recipes">
                        <FilterBar handleChange={this.inputChange} />
                        {recipesJSX}
                    </Route>
                    <Route exact path="/recipes/new" component={(routeInfo) => <RecipeForm routeInfo={routeInfo} />}/>
                    <Route path="/recipes/:id" component={(routeInfo) => {
                        const routeId = parseInt(routeInfo.match.params.id)
                        const r = this.props.recipes.find(recipe => recipe.id === routeId)
                    
                        return (!!r ? 
                            <Recipe key={r.id} saved={this.props.saved} addToSaved={this.props.addToSaved} recipe={r}/>
                            :
                            <h1 id="error"> ERORR AGAIN </h1>)
                        }} />

                    <Route path="*" render={() => <h1 id="error">CONTAINER ERROR!!!</h1>}/>

                </Switch>
            </div>
        )
    }
}

export default RecipesContainer
