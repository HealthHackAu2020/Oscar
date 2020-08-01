import React from "react";
import { useSelector } from "react-redux";
import { IonContent, IonHeader, IonPage, IonCol } from "@ionic/react";
import AllActivities from "../activities/AllActivities";
import generateRec from "./recGenerator";
import "./QuizResult.css";

const QuizResult = () => {
  const suggestedActivityIds = useSelector(
    (state) => state.suggestedActivityIds
  );
  const favouriteActivitiesMap = useSelector(
    (state) => state.favouriteActivities
  );
  const completedActivitiesMap = useSelector(
    (state) => state.completedActivities
  );
  const completedActivities = Object.keys(completedActivitiesMap);

  const physicalMood = useSelector((state) => state.physicalMood);
  const mentalMood = useSelector((state) => state.mentalMood);

  const SuggestedActivity = generateRec(
    { physicalMood, mentalMood },
    completedActivities
  );
  console.log("QuizResult -> suggestedActivity", SuggestedActivity)

  const favouriteActivities = Object.keys(favouriteActivitiesMap);

  const alreadyShown = new Set(suggestedActivityIds);
  for (const activityId of favouriteActivities) {
    alreadyShown.add(activityId);
  }


  return (
    <IonPage>
      <IonHeader></IonHeader>
      <IonContent>
        <IonHeader collapse="condense"></IonHeader>
        <div className="all-activities-tab">
          <h3>Today's mood summary</h3>
          <div className="activities-tab-message">
            Thank you for completing today’s mood quiz. Your suggested result is
            below. Remember, your greatest wealth is your health.
          </div>
          <br />

          <h3>Mindfulness activity</h3>
          {SuggestedActivity && <SuggestedActivity key={SuggestedActivity} listMode />}

          <br />
          
          <h3>Quote of the day</h3>
          <QuoteOfTheDay
            text="Whoever wants to reach a distant goal must take small steps"
            author="Helmut Schmidt"
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

function QuoteOfTheDay(props) {
  const { text, author } = props;
  return (
    <IonCol size="12">
      <div className="home-page-quote-of-the-day">
        
        <div>{text}</div>
        <div>— {author}</div>
      </div>
    </IonCol>
  );
}

export default QuizResult;
