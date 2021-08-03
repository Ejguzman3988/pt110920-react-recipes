import React from 'react'
import {
    Link
  } from "react-router-dom";

function NavBar(props) {

    return (
        <div id="nav-bar">
            <Link to="/recipes">
                <button id="recipes"> &#x1f357; ALL Recipes</button>
            </Link>
            <Link to="/saved_recipes">
                <button id="saved"> &#x1f4d6; MY RECIPES</button>
            </Link>
            <Link to="/recipes/new">
            <button id="saved"> &#127762; NEW RECIPE</button>
            </Link>
        </div>
    )
}

export default NavBar
