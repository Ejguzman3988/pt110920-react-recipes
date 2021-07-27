import React, { Component } from 'react'


// Class vs Function components - the main difference are lifecycle methods
class Recipe extends Component{
    
    isSaved = () => {
        return !!this.props.saved.find(recipe => recipe.id === this.props.recipe.id)
        // If inside true, if not inside of saved false
    }

    componentDidUpdate(){
        console.log("UPDATE")
    } // DO NOT SET STATE HERE UNLESS IN CONDITIONAL


    shouldComponentUpdate(nextProps, nextState){
        // Return True it updates
        // Return False it doesn't update
        // We do not want update when if already saved
        // We do want to update if they are part of the next new props
        return !this.isSaved() && !!nextProps.saved.find(recipe => recipe.id === this.props.recipe.id)
                // Not in Saved         It is in saved in the next props
    }

    render(){
        const {recipe, addToSaved} = this.props
        
        return (
            <div key={recipe.id} className="card">
                <h3>Title: {recipe.title}</h3>
                <p>Time: {recipe.time} mins</p>
                <img alt="recipe" src={recipe.image}/> <br/>
                {!this.isSaved() ? <button onClick={(e) => addToSaved(recipe.id)}> Add to Recipe Book </button> : "Added"}
                <div dangerouslySetInnerHTML={{__html: recipe.instructions}}></div>`
            </div>
        )
    }
}

export default Recipe

