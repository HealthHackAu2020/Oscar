import React, { useState } from "react";
import {
  IonHeader,
  IonPage,
  IonList,
  IonItem,
  IonRange,
  IonLabel,
  IonButton,
  IonBackButton,
  IonContent,
} from "@ionic/react";
import { arrowForwardSharp } from "ionicons/icons";
import Calendar from 'react-calendar'
import {  useDispatch } from 'react-redux'


export function MoodHistoryPage(props) {
  const { history } = props;

  return (
    <IonPage>
      <IonHeader>
        <IonBackButton defaultHref="/tabs/home"/>
      </IonHeader>

      <IonContent>
        <h1>Mood history</h1>

        <div>
          Overview of moods this month.
          Click on one of the days to view more information.

        </div>
        <IonButton
          className="next-btn"
          color="light"
          shape="round"
          onClick={(e) => {
            history.push("/quiz/MoodQuiz");
          }}
        >
          Complete mood quiz
        </IonButton>


        <Calendar />


      </IonContent>
    </IonPage>
  )

}