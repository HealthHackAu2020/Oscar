import React, { useState } from 'react'
import {
  IonPage,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle
} from '@ionic/react'

import './WelcomePage.css'
import { registerUser } from '../firebaseConfig'
import { toast } from '../toast'

import { arrowForwardSharp } from "ionicons/icons";

const Register = ({ history }) => {
  //eslint-disable-next-line
  const [userName, setUserName] = useState('')
  //eslint-disable-next-line
  const [password, setPassword] = useState('')
  //eslint-disable-next-line
  const [confirmPassword, setConfirmPassword] = useState('')
  //eslint-disable-next-line
  const [firstName, setFirstName] = useState('')
  //eslint-disable-next-line
  const [lastName, setLastName] = useState('')

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
      history.push('/quiz/MoodQuiz')
    }
  }
  return (
    <IonPage className='container'>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Enter your details below</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <IonList>
              <IonItem>
                <IonLabel position='floating'>First name</IonLabel>
                <IonInput
                  onIonChange={(e) => setFirstName(e.target.value)}>
                </IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position='floating'>Last name</IonLabel>
                <IonInput
                  onIonChange={(e) => setLastName(e.target.value)}>
                </IonInput>
              </IonItem>
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
        <IonButton
            className="next-btn"
            color="light"
            shape="round"
            onClick={signUp}
          >
            Next
            <ion-icon icon={arrowForwardSharp}></ion-icon>
        </IonButton>
      </div>
    </IonPage>
  )
}

export default Register
