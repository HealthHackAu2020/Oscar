import { createStore } from "redux";

const initialState = {
  suggestedActivityIds: ["TimeToTakeAWalk"],
  favouriteActivities: {},
  mentalMood:'',
  physicalMood:''
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "add-favourite":
      return {
        ...state,
        favouriteActivities: {
          ...state.favouriteActivities,
          [action.activityId]: true,
        },
      };

    case "remove-favourite":
      const newFavourites = { ...state.favouriteActivities };
      delete newFavourites[action.activityId];
      return { ...state, favouriteActivities: newFavourites };

    case "add-mental-mood":
        return{...state, mentalMood: action.mentalMood}

    case "add-physical-mood":
        return{...state, physicalMood: action.physicalMood}

    default:
      if (!action.type || !action.type.startsWith("@@")) {
        console.warn("reduxStore.js: unhandled action", action);
      }
  }

  return state;
}

export default createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
