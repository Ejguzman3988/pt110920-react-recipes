import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function NavBar() {
    return (
        <div id="nav-bar">
            <Link to="/recipes">
                <button><h2>&#x1f357; ALL Recipes</h2></button>
            </Link>
            <Link to="/saved_recipes">
                <button><h2> &#x1f4d6; MY RECIPES</h2></button>
            </Link>
            <Link to="/recipes/new">
                <button><h2> CREATE A NEW RECIPE</h2></button>
            </Link>
        </div>
    )
}

export default NavBar
