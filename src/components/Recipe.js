import React, { Component } from 'react'

class Recipe extends Component {
    render() {
        const r = this.props.recipe
        return (
            <div className="card">
                <h3>Title: {r.title}</h3>
                <p>Time: {r.time} mins</p>
                <img alt="recipe" src={r.image}></img> <br/>
                <button onClick={() => this.props.addSaved(r)}> Add to Recipe Book </button> 
                <div dangerouslySetInnerHTML={{__html: r.instructions}}></div>
            </div>

        )
    }
}

export default Recipe
