
import React from 'react'

function NavBar(props) {

    return (
        <div id="nav-bar">
            <button id="recipes" onClick={props.changePage}> &#x1f357; ALL Recipes</button>
            <button id="saved" onClick={props.changePage}> &#x1f4d6; MY RECIPES</button>
        </div>
    )
}

export default NavBar
