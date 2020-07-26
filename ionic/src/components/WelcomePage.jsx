import React, { Link } from "react";
import { Redirect, Route } from "react-router-dom";
import oscar from "../assets/oscar.png";
import logo from "../assets/logo.png";
import { IonReactRouter } from "@ionic/react-router";
import {
  IonButton,
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import "./WelcomePage.css";
import MoodQuiz from "./MoodQuiz";
import Home from "../pages/Home";
import Tab3 from "../pages/Tab3";

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
