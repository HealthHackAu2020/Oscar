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

  function handler(condition, value) {
    condition(value);
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
          <RangeBar
            handler={handler}
            value={stressed}
            setState={setStressed}
            parameter="Stressed"
          ></RangeBar>
          <RangeBar
            handler={handler}
            value={optimistic}
            setState={setOptimistic}
            parameter="Optimistic"
          ></RangeBar>
          <RangeBar
            handler={handler}
            value={worried}
            setState={setWorried}
            parameter="Worried"
          ></RangeBar>
        </IonList>
        <div>
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
        </div>
      </IonContent>
    </IonPage>
  );
};

function RangeBar(props) {
  const { parameter, handler, value , setState} = props;
  return (
    <>
      <IonLabel>{parameter}</IonLabel>
      <IonItem lines="none">
        <IonRange
          className="range-bar"
          min={0}
          max={10}
          pin={true}
          value={value}
          onIonChange={(e) => handler(setState, e.detail.value)}
        >
          <IonLabel slot="start">0</IonLabel>
          <IonLabel slot="end">10</IonLabel>
        </IonRange>
      </IonItem>
    </>
  );
}

export default MentalQuiz;
