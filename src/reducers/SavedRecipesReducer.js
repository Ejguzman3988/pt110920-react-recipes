const initialState = {
    saved: []
}

// dispatch
const SavedRecipesReducer = (state = initialState, action) => {
    switch(action.type){
        
        // ACTION SET UP!
        case "ADD_SAVED":
            return {
                ...state,
                saved: [...state.saved, action.payload]
            }
        

        default:
            return state
    }
 }


 export default SavedRecipesReducer