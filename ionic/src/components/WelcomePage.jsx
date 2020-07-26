import React from "react";
import oscar from "../assets/oscar.png";
import logo from "../assets/logo.png";
import {
  IonButton,

} from "@ionic/react";
import "./WelcomePage.css";

const WelcomePage = () => {
  return (
    <div className="container">

      <div>
        <img src={logo}></img>
        <h3>The mind-gut guru</h3>
        <img src={oscar}></img>
      </div>
      <IonButton href="/MoodQuiz">Start</IonButton>
    </div>
  );
};

export default WelcomePage;
