import React from 'react';
import { useSelector } from 'react-redux'
import { IonContent, IonHeader, IonPage } from '@ionic/react';
import AllActivities from './activities/AllActivities';
import './AllActivitiesTab.css';


const AllActivitiesTab = () => {

  const suggestedActivityIds = useSelector(state => state.suggestedActivityIds)

  const favouriteActivitiesMap = useSelector(state => state.favouriteActivities)
  const completedActivitiesMap = useSelector(state => state.completedActivities)

  const favouriteActivities = Object.keys(favouriteActivitiesMap)
  const completedActivities = Object.keys(completedActivitiesMap)

  const alreadyShown = new Set(suggestedActivityIds)
  for (const activityId of favouriteActivities) {
    alreadyShown.add(activityId)
  }
  for (const activityId of completedActivities) {
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
          <h3>Activities to do today</h3>
          <div className="activities-tab-message">
            Based off your mood quiz today, learning the fundamentals of
            mindfulness will help you take control of your moods.
          </div>
          <br />

          <h3>Suggested for you</h3>
          {
            suggestedActivityIds
              .map(activityId => AllActivities.find(activity => activity.activityId === activityId))
              .map(SomeActivity => (
                <SomeActivity key={SomeActivity.activityId} listMode />
              ))
          }
          <br />

          {favouriteActivities.length > 0 &&
            <h3>Favourite activities</h3>
          }
          {
            favouriteActivities
              .map(activityId => AllActivities.find(activity => activity.activityId === activityId))
              .map(SomeActivity => (
                <SomeActivity key={SomeActivity.activityId} listMode />
              ))
          }
          {favouriteActivities.length > 0 &&
            <br />
          }

          {otherActivities.length > 0 && <h3>Other activities</h3>
          }
          {
            otherActivities.map(SomeActivity => (
              <SomeActivity key={SomeActivity.activityId} listMode />
            ))
          }

          {completedActivities.length > 0 && <h3>Past activities</h3>
          }
          {
            completedActivities
            .map(activityId => AllActivities.find(activity => activity.activityId === activityId))
            .map(SomeActivity => (
              <SomeActivity key={SomeActivity.activityId} listMode />
            ))
          }

        </div>


      </IonContent>
    </IonPage>
  );
};


export default AllActivitiesTab;
