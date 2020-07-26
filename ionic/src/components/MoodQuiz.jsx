import React from "react";
import oscar from "../assets/oscar.png";
import logo from "../assets/logo.png";
import { IonButton } from "@ionic/react";

const MoodQuiz = () => {
  return (
    <div className="container">
      <h1>How are you physically feeling today?</h1>
      <h3>Select a feeling that best suit you</h3>
      <a href='./Welcome.jsx'> Great</a>
    </div>
  );
};

export default MoodQuiz;
