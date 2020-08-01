import React from "react";
import { IonButton, IonImg, IonPage } from "@ionic/react";
import "./WelcomePage.css";

const WelcomePage = ({ history }) => {

  function login(e) {
    e.preventDefault();
    history.push(`/tabs/Login`);
  }
  function register(e) {
    e.preventDefault();
    history.push(`/tabs/Register`);
  }

  return (
    <IonPage className="container">
      <div>
        <IonImg className="logo" src={`assets/logo.png`} alt="logo"></IonImg>
        <h3 className="the-mind-gut-guru">The mind-gut guru</h3>
        <IonImg className="oscar" src={`assets/oscar.png`} alt="oscar"></IonImg>
      </div>  
      <div className="welcome-buttons">
      <IonButton
            className="register-btn"
            color="primary"
            shape="round"
            strong
            onClick={register}
          >
            Register
      </IonButton>
      <IonButton
            className="login-btn"
            color="light"
            shape="round"
            strong
            onClick={login}
          >
            Login
      </IonButton>
      </div>
      <div>
      </div>
      <div>
       {/* TODO: Add terms of Service */}
      </div>
    </IonPage>
  );
};

export default WelcomePage;
