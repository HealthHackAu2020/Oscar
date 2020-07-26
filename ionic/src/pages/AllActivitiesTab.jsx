import React from 'react';
import { IonGrid, IonImg, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCol, IonRow } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './AllActivitiesTab.css';

const AllActivitiesTab = () => {
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
          <br />

          <h3>Suggested for you</h3>

          <ActivityListItem
            title="Let's take a walk"
            subtitle="Time to appreciate the environment"
            image="park"
          />
          <ActivityListItem
            title="Let's think together"
            subtitle="Let's imagine we are deep in space"
            image="spaceship"
          />
          <ActivityListItem
            title="Let's have a brainstorm"
            subtitle="What are some goals for this year?"
            image="cloud"
          />
          <ActivityListItem
            title="Let's relax"
            subtitle="Time to watch something you've been waiting to see"
            image="fries"
          />


        </div>


      </IonContent>
    </IonPage>
  );
};

function ActivityListItem(props) {
  const { title, subtitle, image } = props
  return (
    <div className="activity-list-item">
      <IonGrid>
        <IonRow>
          <IonCol size="4">
            <IonImg style={{ height: "5em", width: "90%" }} src={`assets/${image}.png`} />
          </IonCol>
          <IonCol size="8">
            <div class="title">{title}</div>
            <div class="subtitle">{subtitle}</div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  )
}

export default AllActivitiesTab;
