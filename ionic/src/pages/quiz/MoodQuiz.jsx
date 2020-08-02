import React, { useState } from "react";
import {
  IonButton,
  IonPage,
  IonHeader,
  IonBackButton,
  IonContent,
} from "@ionic/react";
import "./MoodQuiz.css";
import { arrowForwardSharp } from "ionicons/icons";
import { useDispatch } from "react-redux";
import moment from "moment";

const MoodQuiz = ({ history }) => {
  const dispatch = useDispatch();
  const [activated, setActivated] = useState("");

  function onClick(e, page) {
    e.preventDefault();
    history.push(page);
  }

  function btnSelect(physicalMood) {
    setActivated(physicalMood);
    const simplifiedMood = simplifyPhysicalMood(physicalMood);
    const today = moment().format("DD-MM-YYYY");
    dispatch({
      type: "add-physical-mood",
      physicalMood: simplifiedMood,
      date : today
    });
  }

  function simplifyPhysicalMood(physicalMood) {
    if (physicalMood === "great" || physicalMood === "good") {
      return "good";
    }
    if (physicalMood === "meh") {
      return "ok";
    }
    return "bad";
  }

  return (
    <IonPage>
      <IonHeader>
        <IonBackButton defaultHref="/tabs/home" />
      </IonHeader>
      <IonContent className="container">
        <h2 className="quiz-title">How are you physically feeling today?</h2>
        <p className="quiz-text">Select a feeling that best suit you</p>
        <div>
          <div>
            <IonButton
              className={activated === "great" ? "active-mood-btn" : "mood-btn"}
              shape="round"
              id={activated === "great" ? "active-great" : "great"}
              onClick={(e) => {
                btnSelect(e.target.id);
              }}
            >
              Great
            </IonButton>
          </div>
          <div>
            <IonButton
              className={activated === "good" ? "active-mood-btn" : "mood-btn"}
              shape="round"
              id={activated === "good" ? "active-good" : "good"}
              onClick={(e) => {
                btnSelect(e.target.id);
              }}
            >
              Good
            </IonButton>
          </div>
          <div>
            <IonButton
              className={activated === "meh" ? "active-mood-btn" : "mood-btn"}
              shape="round"
              id={activated === "meh" ? "active-meh" : "meh"}
              onClick={(e) => {
                btnSelect(e.target.id);
              }}
            >
              Meh
            </IonButton>
          </div>
          <div>
            <IonButton
              className={activated === "poor" ? "active-mood-btn" : "mood-btn"}
              shape="round"
              id={activated === "poor" ? "active-poor" : "poor"}
              onClick={(e) => {
                btnSelect(e.target.id);
              }}
            >
              Poor
            </IonButton>
          </div>
          <div>
            <IonButton
              className={activated === "rough" ? "active-mood-btn" : "mood-btn"}
              shape="round"
              id={activated === "rough" ? "active-rough" : "rough"}
              onClick={(e) => {
                btnSelect(e.target.id);
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
              if (!activated) return;
              onClick(e, "/quiz/MentalQuiz");
            }}
          >
            Next
            <ion-icon icon={arrowForwardSharp}></ion-icon>
          </IonButton>
        </div>
        <button
          className="skip-btn"
          onClick={(e) => {
            onClick(e, "/tabs/home");
          }}
        >
          Skip
        </button>
      </IonContent>
    </IonPage>
  );
};

export default MoodQuiz;
