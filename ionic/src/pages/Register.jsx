import React, { useState } from 'react'
import {
  IonPage,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
} from '@ionic/react'

import './WelcomePage.css'

const Register = ({ history }) => {
  //eslint-disable-next-line
  const [userName, setUserName] = useState('')
  //eslint-disable-next-line
  const [password, setPassword] = useState('')
  //eslint-disable-next-line
  const [confirmPassword, setConfirmPassword] = useState('')

  function registerUser() {
    console.log(userName, password, confirmPassword)
  }
  return (
    <IonPage className='container'>
      <div>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Sign Up</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <IonList>
              <IonItem>
                <IonLabel position='floating'>Username</IonLabel>
                <IonInput
                  onIonChange={(e) => setUserName(e.target.value)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position='floating'>Password</IonLabel>
                <IonInput
                  type='password'
                  onIonChange={(e) => setPassword(e.target.value)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position='floating'>Confirm Password</IonLabel>
                <IonInput
                  type='password'
                  onIonChange={(e) => setConfirmPassword(e.target.value)}
                ></IonInput>
              </IonItem>
            </IonList>
          </ion-card-content>
        </ion-card>
      </div>
      <div>
        <IonButton className='start-btn' onClick={registerUser} shape='round'>
          Sign Up
        </IonButton>
      </div>
    </IonPage>
  )
}

export default Register
