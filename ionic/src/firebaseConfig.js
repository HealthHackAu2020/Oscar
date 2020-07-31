import * as firebase from 'firebase'
import { toast } from './toast'
require('dotenv').config()

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
}

firebase.initializeApp(config)

export function isLoggedIn() {
  var user = firebase.auth().currentUser;
  if (user) {
    return true
  }
  return false;
}

export function signOut(){
  firebase.auth().signOut().then(function() {
    // Signed out
  }).catch(function(error) {
    toast(error.message)
  });
}

export async function loginUser(username, password) {
  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
    return res
  } catch (error) {
    console.log(error)
  }
}

export async function registerUser(username, password) {
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(username, password)
  } catch (error) {
    toast(error.message)
  }
}
