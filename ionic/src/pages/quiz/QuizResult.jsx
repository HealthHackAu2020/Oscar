import React from "react";
import { useSelector } from "react-redux";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonCol,
  IonCard,
  IonCardSubtitle,
  IonCardTitle,
  IonCardHeader,
  IonCardContent,
} from "@ionic/react";
import generateRec from "./recGenerator";
import "./QuizResult.css";

const QuizResult = () => {
  const completedActivitiesMap = useSelector(
    (state) => state.completedActivities
  );
  const physicalMood = useSelector((state) => state.physicalMood);
  const mentalMood = useSelector((state) => state.mentalMood);

  const completedActivities = Object.keys(completedActivitiesMap);

  const SuggestedActivity = generateRec(
    { physicalMood, mentalMood },
    completedActivities
  );

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

          <IonCard color="light" className='card'>
            <IonCardHeader>
              <IonCardSubtitle className="sub-title mindfulness-title">
                Mindfulness activity
              </IonCardSubtitle>
              <IonCardTitle>Try take some time for you today</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Oscar believes that when you are feeling not well mentally to take
              some time out. I think you should try the escape activity and try
              look after yourself today.
            </IonCardContent>
            {SuggestedActivity && (
              <SuggestedActivity key={SuggestedActivity} listMode />
            )}
          </IonCard>

          <br />

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
    <IonCard color="light" className='card'>
      <IonCardHeader>
        <IonCardSubtitle className="sub-title quote-title">
        Quote of the day
        </IonCardSubtitle>
        <IonCardTitle>{text}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>— {author}</IonCardContent>
    </IonCard>
  );
}

export default QuizResult;
