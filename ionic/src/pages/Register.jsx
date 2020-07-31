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
import { registerUser } from '../firebaseConfig'
import { toast } from '../toast'

const Register = ({ history }) => {
  //eslint-disable-next-line
  const [userName, setUserName] = useState('')
  //eslint-disable-next-line
  const [password, setPassword] = useState('')
  //eslint-disable-next-line
  const [confirmPassword, setConfirmPassword] = useState('')

  async function signUp() {
    if (confirmPassword !== password) {
      toast('Passwords must match')
    }
    if (userName.trim() === '' || password.trim() === '') {
      toast('Username and Password are required')
    }
    const res = await registerUser(userName, password)
    if (res) {
      toast('Successfully registered')
      history.push("/tabs/Login");
    }
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
                <IonLabel position='floating'>Email</IonLabel>
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
        <IonButton className='start-btn' onClick={signUp} shape='round'>
          Sign Up
        </IonButton>
      </div>
    </IonPage>
  )
}

export default Register
