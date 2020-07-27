import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonList,
  IonItem,
  IonRange,
  IonLabel,
  IonButton,
  IonBackButton,
} from "@ionic/react";
import { arrowForwardSharp } from "ionicons/icons";

import "./MentalQuiz.css";

const MentalQuiz = ({ history }, props) => {
  const [stressed, setStressed] = useState(0);
  const [optimistic, setOptimistic] = useState(0);
  const [worried, setWorried] = useState(0);

  function onClick(e, page) {
    e.preventDefault();
    history.push(page);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonBackButton />
      </IonHeader>

      <IonContent className="container">
        <h1 className="quiz-title">How are you mentally feeling today?</h1>
        <h3 classNmae="quiz-text">Use the sliders to answer the below moods</h3>
      </IonContent>
      <IonContent>
        <IonList>
          <IonLabel>Stressed</IonLabel>
          <IonItem lines="none">
            <IonRange
              className="range-bar"
              min={0}
              max={10}
              pin={true}
              value={stressed}
              onIonChange={(e) => setStressed(e.detail.value)}
            >
              <IonLabel slot="start">0</IonLabel>
              <IonLabel slot="end">10</IonLabel>
            </IonRange>
          </IonItem>
          <IonLabel>optimistic</IonLabel>
          <IonItem lines="none">
            <IonRange
              className="range-bar"
              min={0}
              max={10}
              pin={true}
              value={optimistic}
              onIonChange={(e) => setOptimistic(e.detail.value)}
            >
              <IonLabel slot="start">0</IonLabel>
              <IonLabel slot="end">10</IonLabel>
            </IonRange>
          </IonItem>
          <IonLabel>Worried</IonLabel>
          <IonItem lines="none">
            <IonRange
              className="range-bar"
              min={0}
              max={10}
              pin={true}
              value={worried}
              onIonChange={(e) => setWorried(e.detail.value)}
            >
              <IonLabel slot="start">0</IonLabel>
              <IonLabel slot="end">10</IonLabel>
            </IonRange>
          </IonItem>
        </IonList>
        <IonButton
          className="next-btn"
          color="light"
          shape="round"
          onClick={(e) => {
            onClick(e, "/quiz/MentalQuiz");
          }}
        >
          Next
          <ion-icon icon={arrowForwardSharp}></ion-icon>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default MentalQuiz;
