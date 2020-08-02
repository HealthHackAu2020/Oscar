import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonButton
} from "@ionic/react";
import "./Profile.css";
import { useAppContext } from '../context'
import { signOut } from '../firebaseConfig'


const Profile = ({ history }) => {
  const { userHasAuthenticated } = useAppContext()
  function handleLogout() {
    signOut()
    userHasAuthenticated(false)
    history.push('/welcome')
  }
  return (
    <IonPage >
      <IonHeader></IonHeader>
      <IonContent>
        <IonHeader collapse="condense"></IonHeader>
        <div className="profile-page-content">
          <div>
            <div className="profile-page-hi">Your Profile</div>
            <div className="profile-page-welcome-msg">
              Edit your information and view your level with Oscar.
            </div>
          </div>
          <IonGrid>
            <ProfileInfo
              text="Lauren"
              description="You have had IBD for 4 years and signed up with Oscar in 2020. 23 years old studying BA and in your final fourth year at Sydney University"
            />
          </IonGrid>
          <div>
            <div className="profile-page-hi">Activities</div>
            <IonGrid >
              <ActivityListItem className="profile-list-item" listSubtitle="Oscar activities completed" streak="10" />
              <ActivityListItem className="profile-list-item" listSubtitle="Day streak on the app" streak="07" />
            </IonGrid>
            <IonGrid className='container'><IonButton
              className="next-btn"
              color="light"
              shape="round"
              onClick={handleLogout}>
              Logout
              </IonButton></IonGrid>
          </div>
        </div>
      </IonContent>
    </IonPage >
  );
};

function ProfileInfo(props) {
  const { text, description } = props;
  return (
    <IonCol size="12">
      <div className="profile-summary">
        <div>{text}</div>
        <div>{description}</div>
        <div>Edit information</div>
        <div><h6>Interests</h6></div>
        <IonGrid>
          <IonRow >
            <IonCol className="profile-pill-one">Fashion</IonCol>
            <IonCol className="profile-pill-two">Brunching</IonCol>
            <IonCol className="profile-pill-three">Animals</IonCol>
            <IonCol className="profile-pill-four">Socialising</IonCol>
          </IonRow>
        </IonGrid>
      </div>

    </IonCol>
  );
}


function ActivityListItem(props) {
  const { listSubtitle, streak } = props

  return (
    <div className="profile-list-item">
      <IonGrid>
        <IonRow >
          <IonCol size="3">
            <div className="streak">{streak}</div>
          </IonCol>
          <IonCol size="9">
            <div className="subtitle-container">
              <div className="subtitle">{listSubtitle}</div>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  )
}

export default Profile;
