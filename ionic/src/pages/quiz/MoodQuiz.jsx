import React from "react";
import { IonButton, IonPage, IonHeader, IonBackButton } from "@ionic/react";
import "./MoodQuiz.css";

const MoodQuiz = ({history}) => {
  function onClick(e) {
    e.preventDefault();
    history.push(`/quiz/MentalQuiz`);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonBackButton />
      </IonHeader>
      <div className="container">
        <h2>How are you physically feeling today?</h2>
        <p>Select a feeling that best suit you</p>
        <div>
          <div>
            <IonButton className="mood-btn" color="danger" shape="round">
              Great
            </IonButton>
          </div>
          <div>
            <IonButton className="mood-btn" color="warning" shape="round">
              Good
            </IonButton>
          </div>
          <div>
            <IonButton className="mood-btn" color="success" shape="round">
              Meh
            </IonButton>
          </div>
          <div>
            <IonButton className="mood-btn" color="tertiary" shape="round">
              Poor
            </IonButton>
          </div>
          <div>
            <IonButton className="mood-btn" color="medium" shape="round">
              Rough
            </IonButton>
          </div>
          <IonButton
            className="next-btn"
            color="light"
            onClick={onClick}
            shape="round"
          >
            Next
          </IonButton>
        </div>
        <a href='/'>Skip</a>
      </div>
    </IonPage>
  );
};

export default MoodQuiz;
