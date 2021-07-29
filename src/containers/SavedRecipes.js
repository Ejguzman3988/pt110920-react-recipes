import React, { Component } from 'react'
import Recipe from '../components/Recipe'

class SavedRecipes extends Component {
    
    state = {
        timeLeft: 60
    }
    
    componentDidMount(){
        // set interval returns the id of the counter
        this.timerId = setInterval(this.updateTime, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }

    updateTime = () => {
        this.setState((prevState) => {
            return {
                timeLeft: prevState.timeLeft - 1
            }
        })
    }
    
    
    render() {

        // array of recipes
        // this.props.saved [{id:1, title: 'food'},{},{}]
        const recipes = this.props.saved.map(r => <Recipe recipe={r} saved={this.props.saved} />) 
        // recipes [<Recipe />,<Recipe />,<Recipe />,<Recipe />]
    
        return (
            <div id="saved-recipe">
                <h3>YOU HAVE THIS MUCH TIME LEFT: {this.state.timeLeft}</h3>
               {recipes}
            </div>
        )
    }
}

export default SavedRecipes
