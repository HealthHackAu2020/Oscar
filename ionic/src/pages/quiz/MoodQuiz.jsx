import React, { useState } from "react";
import { IonButton, IonPage, IonHeader, IonBackButton } from "@ionic/react";
import "./MoodQuiz.css";
import { arrowForwardSharp } from "ionicons/icons";

const MoodQuiz = ({ history }) => {
  const [physicalMood, setPhysicalMood] = useState();
  const [activated, setActivated] = useState("");

  function onClick(e, page) {
    if (!physicalMood) return;
    e.preventDefault();
    history.push(page);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonBackButton />
      </IonHeader>
      <div className="container">
        <h2 className="quiz-title">How are you physically feeling today?</h2>
        <p className="quiz-tet">Select a feeling that best suit you</p>
        <div>
          <div>
            <IonButton
              className={activated==='great' ?  'active-mood-btn': 'mood-btn'}
              shape="round"
              id={activated==='great' ?  'active-great': 'great'}
              onClick={(e) => {
                setActivated(e.target.id);
                setPhysicalMood(e.target.id);
              }}
            >
              Great
            </IonButton>
          </div>
          <div>
            <IonButton
              className={activated==='good' ?  'active-mood-btn': 'mood-btn'}
              shape="round"
              id={activated==='good' ?  'active-good': 'good'}
              onClick={(e) => {
                setActivated(e.target.id);
                setPhysicalMood(e.target.id);
              }}
            >
              Good
            </IonButton>
          </div>
          <div>
            <IonButton
              className={activated==='meh' ?  'active-mood-btn': 'mood-btn'}
              shape="round"
              id={activated==='meh' ?  'active-meh': 'meh'}
              onClick={(e) => {
                setActivated(e.target.id);
                setPhysicalMood(e.target.id);
              }}
            >
              Meh
            </IonButton>
          </div>
          <div>
            <IonButton
              className={activated==='poor' ?  'active-mood-btn': 'mood-btn'}
              shape="round"
              id={activated==='poor' ?  'active-poor': 'poor'}
              onClick={(e) => {
                setActivated(e.target.id);
                setPhysicalMood(e.target.id);
              }}
            >
              Poor
            </IonButton>
          </div>
          <div>
            <IonButton
              className={activated==='rough' ?  'active-mood-btn': 'mood-btn'}
              shape="round"
              id={activated==='rough' ?  'active-rough': 'rough'}
              onClick={(e) => {
                setActivated(e.target.id);
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
        <button className="skip-btn" onClick={undefined}>
          Skip
        </button>
      </div>
    </IonPage>
  );
};

export default MoodQuiz;
