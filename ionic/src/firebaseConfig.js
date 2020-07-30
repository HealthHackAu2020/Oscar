import * as firebase from 'firebase'
import { toast } from './taost'
require('dotenv').config()

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
}

firebase.initializeApp(config)

export async function loginUser(username, password) {
  console.log("loginuser")
  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
    console.log(res)
    return res
  } catch (error) {
    console.log('failure')
    console.log(error)
  }
}

export async function registerUser(username, password) {
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(username, password)
    console.log(res)
  } catch (error) {
    toast(error.message)
  }
}
