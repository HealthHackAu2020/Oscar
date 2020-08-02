import React from 'react';
import { IonBackButton, IonContent, IonHeader, IonPage } from '@ionic/react';
import './ActivityDone.css';

export function ActivityDone(props) {

  return (
    <IonPage>
      <IonHeader style={{ backgroundColor: "white"}}>
        <IonBackButton defaultHref="/tabs/activities" />
      </IonHeader>
      <IonContent>
        <div className="activity-done-content">

          <div className="activity-done-placeholder"></div>
          <div className="activity-done-placeholder"></div>

          <div className="activity-done-message">
            <h1>Done!</h1>
            <h3>Motivation is what gets you started.<br />
                Habit is what keeps you going.</h3>
          </div>

        </div>

      </IonContent>
    </IonPage>
  )

}