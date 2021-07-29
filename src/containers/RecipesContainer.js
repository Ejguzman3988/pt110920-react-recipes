import React, { Component } from 'react'
import FilterBar from "../components/FilterBar"
import Recipe from '../components/Recipe'

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
                <FilterBar handleChange={this.inputChange} />
                {recipesJSX}
            </div>
        )
    }
}

export default RecipesContainer
