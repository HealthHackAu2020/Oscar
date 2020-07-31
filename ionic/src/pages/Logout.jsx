import React from 'react'
import { IonButton, IonPage } from '@ionic/react'
import './WelcomePage.css'

// For updating the application state
import { useAppContext } from '../context'
import { signOut } from '../firebaseConfig'

const Logout = ({ history }) => {
  const { userHasAuthenticated } = useAppContext()

  // TODO: trigger this from a logout button
  function handleLogout() {
    signOut()
    userHasAuthenticated(false)
    history.push('/tabs/Login')
  }

  return (
    <IonPage className='container'>
      <IonButton className='start-btn' onClick={handleLogout} shape='round'>
        Confirm Logout
      </IonButton>
    </IonPage>
  )
}

export default Logout
