import { combineReducers } from "redux";
import RecipesReducer from "./RecipesReducer";
import SavedRecipesReducer from "./SavedRecipesReducer";

// js obj {}
const rootReducer = combineReducers({
    root_recipes: RecipesReducer,
    root_saved: SavedRecipesReducer,
})

export default rootReducer

