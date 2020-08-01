import React from 'react';
import { useSelector } from 'react-redux'
import { IonContent, IonHeader, IonPage } from '@ionic/react';
import AllActivities from '../activities/AllActivities';
import './QuizResult.css';


const QuizResult = () => {

  const suggestedActivityIds = useSelector(state => state.suggestedActivityIds)
  const favouriteActivitiesMap = useSelector(state => state.favouriteActivities)

  const favouriteActivities = Object.keys(favouriteActivitiesMap)

  const alreadyShown = new Set(suggestedActivityIds)
  for (const activityId of favouriteActivities) {
    alreadyShown.add(activityId)
  }

  const otherActivities = AllActivities.filter(SomeActivity => !alreadyShown.has(SomeActivity.activityId))

  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
        </IonHeader>
        <div  className="all-activities-tab">
          <h3 c>Today's mood summary</h3>
          <div className="activities-tab-message">
          Thank you for completing today’s mood quiz. Your suggested result is below. Remember, your greatest wealth is your health.

          </div>
          <br />
          <br />

          <h3>Mindfulness activity</h3>
          {
            suggestedActivityIds
              .map(activityId => AllActivities.find(activity => activity.activityId === activityId))
              .map(SomeActivity => (
                <SomeActivity key={SomeActivity.activityId} listMode />
              ))
          }
          <br />


          {otherActivities.length > 0
          && <h3>Other activities</h3>
          }
          {
            otherActivities.map(SomeActivity => (
              <SomeActivity key={SomeActivity.activityId} listMode />
            ))
          }

        </div>


      </IonContent>
    </IonPage>
  );
};


export default QuizResult;
