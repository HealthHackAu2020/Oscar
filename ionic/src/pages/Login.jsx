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
import { loginUser } from '../firebaseConfig'
import { toast } from '../toast'

// For updating the application state
import { useAppContext } from '../context'

import { arrowForwardSharp } from "ionicons/icons";

const Login = ({ history }) => {
  //eslint-disable-next-line
  const [userName, setUserName] = useState('')
  //eslint-disable-next-line
  const [password, setPassword] = useState('')

  const { userHasAuthenticated } = useAppContext()

  async function login() {
    const res = await loginUser(userName, password)
    if (!res) {
      console.log(res)
      toast('Error Logging in with your credentials')
    } else {
      toast('You have successfully logged in')
      userHasAuthenticated(true)
      history.push('/tabs/Home')
    }
  }

  return (
    <IonPage className='container'>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Enter your details</ion-card-title>
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
            </IonList>
          </ion-card-content>
        </ion-card>
      </div>
      <div>
        <IonButton
            className="next-btn"
            color="light"
            shape="round"
            onClick={login}
          >
            Next
            <ion-icon icon={arrowForwardSharp}></ion-icon>
        </IonButton>
      </div>
    </IonPage>
  )
}

export default Login
