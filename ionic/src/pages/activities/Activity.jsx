import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import {
  IonGrid, IonRow, IonCol,
  IonContent, IonImg, IonCheckbox, IonHeader, IonPage, IonBackButton, IonItem, IonLabel, IonIcon } from '@ionic/react';
import './activity.css';

import { heartOutline, heart } from 'ionicons/icons'
import { useHistory } from 'react-router';

function ActivityBase(props) {

  const {
    activityId, title, duration, children,
    image,
    listMode, listSubtitle, 
  } = props

  const [ imageBig, listImage ] = function() {
    if (image) {
      return ["activities/large/" + image, "activities/small/" + image]
    } else {
      return [props.imageBig, props.listImage]
    }
  }()

  if (!imageBig) {
    console.warning("Missing big image for ", activityId)
  }
  if (!listImage) {
    console.warning("Missing list image for ", activityId)
  }

  const isFavourite = useSelector(state => !!state.favouriteActivities[activityId])
  const dispatch = useDispatch()

  function onFavouriteIconClicked() {
    if (isFavourite) {
      dispatch({ type: 'remove-favourite', activityId })
    } else {
      dispatch({ type: 'add-favourite', activityId })
    }
  }

  if (listMode) {
    return <ActivityListItem {...{ activityId, title, listSubtitle, listImage }} />
  }

  return (
    <IonPage>
      <IonHeader>
        <IonBackButton defaultHref="/tabs/activities" />
      </IonHeader>
      <IonContent>
        <div className="activity-content">
            <div style={{ float: 'right' }}>
              <IonIcon onClick={onFavouriteIconClicked} className="activity-fav-icon"
                  size='x-large'
                  icon={isFavourite ? heart : heartOutline} />
            </div>
          <div>
            <h2 className="activity-title">{title}</h2>
          </div>
          {duration && <div className="activity-duration">{duration}</div>}
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

function ActivityListItem(props) {
  const { activityId, title, listSubtitle, listImage } = props

  const history = useHistory()

  function onClick(e) {
    e.preventDefault();
    history.push(`/activity/${activityId}`);
  }
  return (
    <div className="activity-list-item">
      <IonGrid>
        <IonRow onClick={(activityId && history) ? onClick : undefined}>
          <IonCol size="4">
            <IonImg style={{ height: "5em", width: "90%" }} src={`assets/${listImage}`} />
          </IonCol>
          <IonCol size="8">
            <div className="title">{title}</div>
            <div className="subtitle">{listSubtitle}</div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  )
}

