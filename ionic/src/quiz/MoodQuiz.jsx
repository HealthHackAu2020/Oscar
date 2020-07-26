import React from "react";
import { IonButton, IonPage, IonHeader, IonBackButton } from "@ionic/react";
import COLOR from "../theme/theme";
import "./MoodQuiz.css";

const MoodQuiz = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonBackButton />
      </IonHeader>
      <div className="container">
        <h1>How are you physically feeling today?</h1>
        <h3>Select a feeling that best suit you</h3>
        <div>
          <div lines="none">
            <IonButton className="mood-btn" color="danger" shape="round">
              Great
            </IonButton>
          </div>
          <div lines="none">
            <IonButton className="mood-btn" color="warning" shape="round">
              Good
            </IonButton>
          </div>
          <div lines="none">
            <IonButton className="mood-btn" color="success" shape="round">
              Meh
            </IonButton>
          </div>
          <div lines="none">
            <IonButton className="mood-btn" color="tertiary" shape="round">
              Poor
            </IonButton>
          </div>
          <div lines="none">
            <IonButton className="mood-btn" color="medium" shape="round">
              Rough
            </IonButton>
          </div>
          <IonButton
            className="next-btn"
            color="light"
            href="/MentalQuiz"
            shape="round"
          >
            Next
          </IonButton>
        </div>
        <a>Skip</a>
      </div>
    </IonPage>
  );
};

export default MoodQuiz;
