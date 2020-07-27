import React from "react";
import { IonButton, IonImg, IonPage } from "@ionic/react";
import "./WelcomePage.css";

const WelcomePage = ({ history }) => {
  function onClick(e) {
    e.preventDefault();
    history.push(`/quiz/MoodQuiz`);
  }

  return (
    <IonPage className="container">
      <div>
        <IonImg className="logo" src={`assets/logo.png`} alt="logo"></IonImg>
        <h3 className="the-mind-gut-guru">The mind-gut guru</h3>
        <IonImg className="oscar" src={`assets/oscar.png`} alt="oscar"></IonImg>
      </div>
      <div>

      <IonButton className="start-btn" onClick={onClick} shape="round">
        Start
      </IonButton>
      </div>
    </IonPage>
  );
};

export default WelcomePage;
