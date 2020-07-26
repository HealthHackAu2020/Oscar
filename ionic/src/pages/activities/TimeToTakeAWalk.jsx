
import React from 'react';
import { IonContent, IonHeader, IonPage, IonBackButton } from '@ionic/react';
import './activity.css';

function TimeToTakeAWalk(props) {

  return (
    <IonPage>
      <IonHeader>
          <IonBackButton defaultHref="/tabs/activities" />
      </IonHeader>
      <IonContent>
          <div className="activity-content">
              <h2 className="activity-title">Time to take a walk</h2>
              <div className="activity-duration">5 - 20 minutes</div>
              <div className="activity-text">
                  <p>
                    Time to be conscious of the environment every time
                    you get a chance to go for a walk. It doesn't have to
                    be long, it could simply be 5 mins.
                  </p>
                  <p>
                      Inside or outside the house, look around your surroundings
                      for 3 new things that you have never noticed before.
                      Appreciate the environment you are in to seek internal
                      calmness.
                  </p>
            </div>

          </div>
      </IonContent>
    </IonPage>
  )

}


export default TimeToTakeAWalk;