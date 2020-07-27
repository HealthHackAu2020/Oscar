import React, { useState } from "react";
import { IonButton, IonPage, IonHeader, IonBackButton } from "@ionic/react";
import "./MoodQuiz.css";
import { arrowForwardSharp } from "ionicons/icons";

const MoodQuiz = ({ history }) => {
  const [physicalMood, setPhysicalMood] = useState();

  function onClick(e, page, physicalMood) {
    if (!physicalMood) return;
    e.preventDefault();
    history.push(page, physicalMood);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonBackButton />
      </IonHeader>
      <div className="container">
        <h2 className="quiz-title">How are you physically feeling today?</h2>
        <p className='quiz-tet'>Select a feeling that best suit you</p>
        <div>
          <div>
            <IonButton
              className="mood-btn"
              color="danger"
              shape="round"
              id="great"
              onClick={(e) => {
                setPhysicalMood(e.target.id);
              }}
            >
              Great
            </IonButton>
          </div>
          <div>
            <IonButton
              className="mood-btn"
              color="warning"
              shape="round"
              id="good"
              onClick={(e) => {
                setPhysicalMood(e.target.id);
              }}
            >
              Good
            </IonButton>
          </div>
          <div>
            <IonButton
              className="mood-btn"
              color="success"
              shape="round"
              id="meh"
              onClick={(e) => {
                setPhysicalMood(e.target.id);
              }}
            >
              Meh
            </IonButton>
          </div>
          <div>
            <IonButton
              className="mood-btn"
              color="tertiary"
              shape="round"
              id="poor"
              onClick={(e) => {
                setPhysicalMood(e.target.id);
              }}
            >
              Poor
            </IonButton>
          </div>
          <div>
            <IonButton
              className="mood-btn"
              color="medium"
              shape="round"
              id="rough"
              onClick={(e) => {
                setPhysicalMood(e.target.id);
              }}
            >
              Rough
            </IonButton>
          </div>
          <IonButton
            className="next-btn"
            color="light"
            shape="round"
            onClick={(e) => {
              onClick(e, "/quiz/MentalQuiz", physicalMood);
            }}
          >
            Next 
            <ion-icon icon={arrowForwardSharp}></ion-icon>
          </IonButton>
        </div>
        <a className="skip-btn" href="">
          Skip
        </a>
      </div>
    </IonPage>
  );
};

export default MoodQuiz;
