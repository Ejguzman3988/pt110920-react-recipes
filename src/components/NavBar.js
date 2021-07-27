import React from 'react'

function NavBar(props) {
    return (
        <div id="nav-bar">
            <button id="recipes" onClick={(e) => props.handleClick(e)} ><h2>&#x1f357; ALL Recipes</h2></button>
            <button id="saved" onClick={(e) => props.handleClick(e)}><h2> &#x1f4d6; MY RECIPES</h2></button>
        </div>
    )
}

export default NavBar
