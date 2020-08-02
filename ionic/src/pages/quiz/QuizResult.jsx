import React from "react";
import { useSelector } from "react-redux";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonCard,
  IonCardSubtitle,
  IonCardTitle,
  IonCardHeader,
  IonCardContent,
  IonBackButton,
} from "@ionic/react";
import moment from "moment";
import generateRec from "./recGenerator";
import quoteList from "../../data/quote.json";
import "./QuizResult.css";

export const quotePicker = (array) => {
  const randomInt = Math.floor(Math.random() * array.length);
  return array[randomInt];
};

const QuizResult = () => {
  const completedActivitiesMap = useSelector(
    (state) => state.completedActivities
  );
  const physicalMoodMap = useSelector((state) => state.physicalMood);
  const mentalMoodMap = useSelector((state) => state.mentalMood);
  const today = moment().format("DD-MM-YYYY");

  const completedActivities = Object.keys(completedActivitiesMap);

  const SuggestedActivity = generateRec(
    { physicalMood: physicalMoodMap[today], mentalMood: mentalMoodMap[today] },
    completedActivities
  );

  const quoteOfTheDay = quotePicker(quoteList);

  return (
    <IonPage>
      <IonHeader>
        <IonBackButton defaultHref="/quiz/MentalQuiz" />
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense"></IonHeader>
        <div className="all-activities-tab">
          <h3>Today's mood summary</h3>
          <div className="activities-tab-message">
            Thank you for completing today’s mood quiz. Your suggested result is
            below. Remember, your greatest wealth is your health.
          </div>
          <br />

          <IonCard color="light" className="card">
            <IonCardHeader>
              <IonCardSubtitle className="sub-title mindfulness-title">
                Mindfulness activity
              </IonCardSubtitle>
              <IonCardTitle className="title">
                Try take some time for you today
              </IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Oscar believes that when you are feeling not well mentally to take
              some time out. I think you should try the escape activity and try
              look after yourself today.
            </IonCardContent>
            <div className="activity">
              {SuggestedActivity && (
                <SuggestedActivity key={SuggestedActivity} listMode />
              )}
            </div>
          </IonCard>

          <br />

          <QuoteOfTheDay
            text={quoteOfTheDay.text}
            author={quoteOfTheDay.author}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

function QuoteOfTheDay(props) {
  const { text, author } = props;
  return (
    <IonCard color="light" className="card">
      <IonCardHeader>
        <IonCardSubtitle className="sub-title quote-title">
          Quote of the day
        </IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>"{text}"</IonCardContent>
      <IonCardContent>— {author}</IonCardContent>
    </IonCard>
  );
}

export default QuizResult;
