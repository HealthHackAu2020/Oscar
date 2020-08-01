import React, { useEffect, useState } from 'react'
import { IonButton, IonPage } from '@ionic/react'
import './WelcomePage.css'

// For updating the application state

import { addData, getData } from '../firebaseConfig'

const Test = ({ history }) => {
  //eslint-disable-next-line
  const [todos, setTodos] = useState('')

  useEffect(() => {
    testRetreival()
  }, [])

  function testConnection() {
    addData()
  }

  function testRetreival() {
    const data = getData()
    console.log('here ', data)
    data.forEach(doc => {

      setTodos(prev => ([...prev, doc.data()]))
    })
  }

  return (
    <IonPage className='container'>
      <IonButton className='start-btn' onClick={testConnection} shape='round'>
        Confirm Logout
      </IonButton>
      <div>
        {todos.length === 0 ? null : todos.map((todo) => <h1>{todo.title}</h1>)}
      </div>
    </IonPage>
  )
}

export default Test
