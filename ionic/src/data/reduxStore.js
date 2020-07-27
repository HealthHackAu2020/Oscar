import { createStore } from 'redux'


const initialState = {
    suggestedActivityIds: ['TimeToTakeAWalk'],

    favouriteActivities: {}
}

function rootReducer(state = initialState, action) {

    switch (action.type) {

        case "add-favourite":
            return { ...state, favouriteActivities: { ...state.favouriteActivities, [action.activityId]: true } }

        case "remove-favourite":
            const newFavourites = { ...state.favouriteActivities }
            delete newFavourites[action.activityId]
            return { ...state, favouriteActivities: newFavourites }

        case "@@INIT":
            return initialState

        default:
            console.warn("REDUX REDUCER: uhandled action", action)
    }
    
}


export default createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)