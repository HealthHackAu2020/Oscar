import React from 'react';
import { IonContent, IonImg, IonCheckbox, IonHeader, IonPage, IonBackButton, IonItem, IonLabel, IonIcon } from '@ionic/react';
import './activity.css';

import { heartOutline, heart } from 'ionicons/icons'

function ActivityBase(props) {

  const { title, duration, children, imageBig } = props

  const isFavourite = false

  return (
    <IonPage>
      <IonHeader>
        <IonBackButton defaultHref="/tabs/activities" />
      </IonHeader>
      <IonContent>
        <div className="activity-content">
            <div style={{ float: 'right' }}>
              <IonIcon className="activity-fav-icon"
                  size='x-large'
                  icon={isFavourite ? heart : heartOutline} />
            </div>
          <div>
            <h2 className="activity-title">{title}</h2>
          </div>
          <div className="activity-duration">{duration}</div>
          <div className="activity-text">
            {children}
          </div>
        </div>

        <IonImg className="activity-image" src={"/assets/" + imageBig} />

        <IonItem className="activity-complete-checkbox">
          <IonCheckbox slot="start" />
          <IonLabel>Mark as complete</IonLabel>
        </IonItem>

      </IonContent>
    </IonPage>
  )

}


export default ActivityBase;