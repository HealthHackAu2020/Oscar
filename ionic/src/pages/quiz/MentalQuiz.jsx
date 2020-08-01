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
} from "@ionic/react";
import { arrowForwardSharp } from "ionicons/icons";
import {  useDispatch } from 'react-redux'

import "./MentalQuiz.css";

const MentalQuiz = ({ history }, props) => {
  const dispatch = useDispatch();
  const [stressed, setStressed] = useState(0);
  const [frustrated, setFrustrated] = useState(0);
  const [worried, setWorried] = useState(0);

  function onClick(e, page) {
    e.preventDefault();
    const physicalMood = stressed + frustrated + worried
    dispatch({type: 'add-physical-mood', physicalMood})
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

      <div className="container">
        <h2 className="quiz-title">How are you mentally feeling today?</h2>
        <p className="quiz-text">Use the sliders to answer the below moods</p>
        {/* <div> */}
          <IonList>
            <RangeBar
              handler={handler}
              value={stressed}
              setState={setStressed}
              parameter="Stressed"
            ></RangeBar>
            <RangeBar
              handler={handler}
              value={frustrated}
              setState={setFrustrated}
              parameter="Frustrated"
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
        </div>
      {/* </div> */}
    </IonPage>
  );
};

function RangeBar(props) {
  const { parameter, handler, value, setState } = props;
  return (
    <div className='bar-container'>
      <IonLabel className='range-bar-label'>{parameter}</IonLabel>
      <IonItem lines="none">
        <IonRange
          className="range-bar"
          min={0}
          max={10}
          pin={false}
          value={value}
          onIonChange={(e) => handler(setState, e.detail.value)}
        >
          <IonLabel slot="start">0</IonLabel>
          <IonLabel slot="end">10</IonLabel>
        </IonRange>
      </IonItem>
    </div>
  );
}

export default MentalQuiz;
