import { createStore, applyMiddleware, compose } from "redux";

import * as Effects from 'redux-saga/effects'
import createSagaMiddleware from 'redux-saga'

import { Plugins } from '@capacitor/core';

const initialReduxState = {
  suggestedActivityIds: ["TimeToTakeAWalk"],
  favouriteActivities: {},
  completedActivities: {},
  mentalMood:'',
  physicalMood:''
};

function rootReducer(state = initialReduxState, action) {
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

    case "activity-complete":
      return {
        ...state,
        completedActivities: {
          ...state.completedActivities,
          [action.activityId]: action.date.toISOString(),
        },
      };

    case "activity-not-complete":
      const newDict = { ...state.completedActivities };
      delete newDict[action.activityId];
      return { ...state, completedActivities: newDict };

    case "add-mental-mood":
        return {...state, mentalMood: action.mentalMood}

    case "add-physical-mood":
        return {...state, physicalMood: action.physicalMood}

    default:
      if (!action.type || !action.type.startsWith("@@")) {
        console.warn("reduxStore.js: unhandled action", action);
      }
  }

  return state;
}




export default function createStoreWithInitialState(initialState) {

  const sagaMiddleware = createSagaMiddleware()

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
    // other store enhancers if any
  )
  const store = createStore(
    rootReducer,
    { ...initialReduxState, ...initialState },
    enhancer,
  )
  sagaMiddleware.run(rootSaga)
  return store
}

function* rootSaga() {
  yield Effects.fork(saveToCapacitorSaga)
}

function* saveToCapacitorSaga() {

  // after every action saves the redux state to capacitor

  while (true) {
    // wait for any action
    yield Effects.take()

    // get the store state
    const state = yield Effects.select()

    // save to capacitor storage plugin
    yield Effects.call(
      [Plugins.Storage, Plugins.Storage.set],
      { key: "oscar-redux", value: JSON.stringify(state) }
    )
  }
}