import React, { Component } from 'react'

export default class RecipeForm extends Component {
    render() {
        return (
            <div id="recipe-form">
                <h1> CREATE A NEW RECIPE! </h1>
                <form>
                    <div>
                        <label htmlFor="title">title:</label>
                        <input id="title" />
                    </div>
                    <div>
                        <label htmlFor="time">time:</label>
                        <input id="time" />
                    </div>
                    <div>
                        <label htmlFor="image">image:</label>
                        <input id="image" />
                    </div>
                    <div>
                        <label htmlFor="instructions">instructions:</label>
                        <input id="instructions" />
                    </div>
                    <div>
                        <input type="submit" value="create recipe"/>
                    </div>
                </form>

                <button onClick={() => this.props.routeInfo.history.push("/recipes")}>GO TO RECIPES PLEASE!!</button>
            </div>
        )
    }
}
