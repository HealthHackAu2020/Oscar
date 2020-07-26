import React from "react";
import oscar from "../assets/oscar.png";
import logo from "../assets/logo.png";
import { IonButton, IonList, IonItem, IconContent } from "@ionic/react";

const MoodQuiz = () => {
  return (
    <div className="container">
      <h1>How are you physically feeling today?</h1>
      <h3>Select a feeling that best suit you</h3>
      <div>
        <IonList>
          <IonItem lines="none">
            <IonButton shape="round">Great</IonButton>
          </IonItem>
          <IonItem lines="none">
            <IonButton shape="round">Good</IonButton>
          </IonItem>
          <IonItem lines="none">
            <IonButton shape="round">Meh</IonButton>
          </IonItem>
          <IonItem lines="none">
            <IonButton shape="round">Poor</IonButton>
          </IonItem>
          <IonItem lines="none">
            <IonButton shape="round">Rough</IonButton>
          </IonItem>
        </IonList>
        <IonButton shape="round">Next</IonButton>
      </div>
      <a>Skip</a>
    </div>
  );
};

export default MoodQuiz;
