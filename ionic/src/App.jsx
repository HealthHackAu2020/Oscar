import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {  personOutline, calendarOutline, homeOutline } from "ionicons/icons";
import Home from "./pages/Home";
import AllActivitiesTab from "./pages/AllActivitiesTab";
import TimeToTakeAWalk from "./pages/activities/TimeToTakeAWalk"
import Tab3 from "./pages/Tab3";
import MoodQuiz from './components/MoodQuiz'

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App2 = () => (
  <IonApp>
    <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/activity/TimeToTakeAWalk" component={TimeToTakeAWalk} />

          <Route path="/MoodQuiz" component={MoodQuiz} />

          <Route path="/tabs" component={Tabs}  />

          <Route path="/" render={() => <Redirect to="/tabs/home" />} exact={true} />
        </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

function Tabs() {
  return (
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tabs/home" component={Home} exact={true} />
          <Route path="/tabs/activities" component={AllActivitiesTab} exact={true} />
          <Route path="/tabs/tab3" component={Tab3} />

        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/tabs/home">
            <ion-icon icon={homeOutline}></ion-icon>
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="activities" href="/tabs/activities">
            <IonIcon icon={calendarOutline} />
            <IonLabel>Activities</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tabs/tab3">
            <IonIcon icon={personOutline} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
  )
}

export default App2;
