import * as firebase from 'firebase'
import { toast } from './toast'
require('dotenv').config()

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
}

firebase.initializeApp(firebaseConfig)

export { firebase }

export function addData() {
  firebase
    .firestore()
    .collection('profile')
    .add({ title: 'second todo', description: 'new todo' })
    .then((documentReference) => {
      console.log('document reference ID', documentReference.id)
    })
    .catch((error) => {
      console.log(error.message)
    })
}
export function quizResult(result) {
  firebase
    .firestore()
    .collection('moodquiz')
    .add({ physical: result.physical, mental: { stress: result.mental.stress, optimism: result.mental.optimism, worried: result.mental.anxiety } })
    .then((documentReference) => {
      console.log('document reference ID', documentReference.id)
    })
    .catch((error) => {
      console.log(error.message)
    })
}

export async function getData() {
  const data = await firebase
    .firestore()
    .collection('moodQuiz')
    .get()
    .then((querySnapshot) => {
      console.log(querySnapshot)
      return querySnapshot
    })
    .catch((err) => {
      console.log(err.message)
    })
  return data
}

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log('user is still logged in', user)
  } else {
    // No user is signed in.
  }
});

export function isLoggedIn() {
  var user = firebase.auth().currentUser
  if (user) {
    console.log('user is still logged in', user)
    return true
  }
  return false
}

export function signOut() {
  firebase
    .auth()
    .signOut()
}

export async function loginUser(username, password) {

  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
    console.log(res.user)
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
    return res
  } catch (error) {
    toast(error.message)
  }
}
