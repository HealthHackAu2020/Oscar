import React from "react";
import oscar from "../assets/oscar.png";
import logo from "../assets/logo.png";
import { IonButton, IonImg } from "@ionic/react";
import "./WelcomePage.css";

const WelcomePage = () => {
  return (
    <div className="container">
      <div>
        <IonImg src={`assets/logo/png`}></IonImg>
        <h3>The mind-gut guru</h3>
        <IonImg src={`assets/oscar.png`}></IonImg>
      </div>
      <IonButton href="/MoodQuiz">Start</IonButton>
    </div>
  );
};

export default WelcomePage;
