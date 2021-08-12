import {recipeArray} from "../recipeArray"

// state right is a javascript object (JSON) key recipes an array of recipes 
const initialState = {
    recipes: [...recipeArray.recipes],
    deleted_recipes: [],
    loading: true,
    theme: "dark",
}

// what is an action?
// is a js obj. {}
// js obj with keys of type and payload.

// addAction = {
    // type: "ADD_RECIPE",
    // payload: data
//}

// deleteAction = {
    // type: "DELETE_ACTION",
    // payload: recipe
//}



const RecipesReducer = (state = initialState, action) => {
    // REDUCER: return the new state. 
    switch(action.type){

        case "ADD_RECIPE":
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
                // recipes: state.recipes.concat(recipe)
            } // returns a js obj with array
        case "DELETE_RECIPE":
            // return a new array without the payload (which is a singular recipe)
            
            return {
                ...state,
                recipes: state.recipes.filter(r => r !== action.payload)
            } 

        case "UPDATE_RECIPE":


        default: 
            return state

    }

    
 }


 export default RecipesReducer