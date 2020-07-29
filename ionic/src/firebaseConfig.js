import * as firebase from 'firebase'
import { toast } from './taost'
require('dotenv').config()

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: 'oscar-6d8d1.firebaseapp.com',
  databaseURL: 'https://oscar-6d8d1.firebaseio.com',
  projectId: 'oscar-6d8d1',
  storageBucket: 'oscar-6d8d1.appspot.com',
  messagingSenderId: '432484727295',
  appId: '1:432484727295:web:f7a2887621b680cec5cfca',
  measurementId: 'G-4HW0T40CVM',
}

firebase.initializeApp(config)

export async function loginUser(username, password) {
  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
    console.log(res)
  } catch (error) {
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
