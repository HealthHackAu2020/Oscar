import React, { Link } from "react";
import { Redirect, Route } from "react-router-dom";
import oscar from "../assets/oscar.png";
import logo from "../assets/logo.png";
import { IonButton, IonRouterOutlet } from "@ionic/react";
import "./WelcomePage.css";
import MoodQuiz from "./MoodQuiz";

const WelcomePage = () => {
  return (
    <div className="container">
      <IonRouterOutlet>
        <Route path="/MoodQuiz" component={MoodQuiz} exact={true} />
        <Route
          path="/"
          render={() => <Redirect to="/MoodQuiz" />}
          exact={true}
        />
      </IonRouterOutlet>
      <div>
        <img src={logo}></img>
        <h3>The mind-gut guru</h3>
        <img src={oscar}></img>
      </div>
      <IonButton href="/MoodQuiz">
        Start
      </IonButton>
    </div>
  );
};

export default WelcomePage;
