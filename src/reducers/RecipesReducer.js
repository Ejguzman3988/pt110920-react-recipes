import {recipeArray} from "../recipeArray"

const initialState = {
    recipes: [...recipeArray.recipes]
}


const RecipesReducer = (state = initialState) => {
    return state
 }


 export default RecipesReducer