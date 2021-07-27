import React, { Component } from 'react'

class Recipe extends Component {

    isInSaved = () => {
        return !!this.props.saved.find(recipe => recipe.id === this.props.recipe.id)
    }

    componentDidUpdate(){
        console.log("UPDATED!")
    }

    shouldComponentUpdate(nextProps, nextState){
        // if true it will update
        return !this.isInSaved() && !!nextProps.saved.find(recipe => recipe.id === this.props.recipe.id)
        // if false it will not update
    }
    
    render() {
        return (
            <div key={this.props.recipe.id} className="card">
                <h3>Title: {this.props.recipe.title}</h3>
                <p>Time: {this.props.recipe.time} mins</p>
                <img alt="recipe" src={this.props.recipe.image}></img> <br/>
                {this.isInSaved() ? "Already Saved" : <button onClick={() => this.props.addRecipe(this.props.recipe.id)}> Add to Recipe Book </button> }
                <div dangerouslySetInnerHTML={{__html: this.props.recipe.instructions}}></div>
            </div>
        )
    }
}

export default Recipe
