import React, { useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'

import { Provider } from 'react-redux'
import reduxStore from './data/reduxStore'

import { personOutline, calendarOutline, homeOutline, keyOutline, logOutOutline, personAddOutline } from 'ionicons/icons'
import Home from './pages/Home'
import AllActivitiesTab from './pages/AllActivitiesTab'
import WelcomePage from './pages/WelcomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import MoodQuiz from './pages/quiz/MoodQuiz'
import MentalQuiz from './pages/quiz/MentalQuiz'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'
import AllActivities from './pages/activities/AllActivities'

// For updating the application state
import { AppContext } from "./context";

function App2() {

  const [isAuthenticated, userHasAuthenticated] = useState(false);

  // TODO: trigger this from a logout button
  function handleLogout() {
    userHasAuthenticated(false);
  }

  function Tabs() {
    let displayOptions;
    if (isAuthenticated){
      displayOptions = <IonTabBar slot='bottom'>
        <IonTabButton tab='home' href='/tabs/home'>
          <ion-icon icon={homeOutline}></ion-icon>
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab='activities' href='/tabs/activities'>
          <IonIcon icon={calendarOutline} />
          <IonLabel>Activities</IonLabel>
        </IonTabButton>
        <IonTabButton tab='WelcomePage' href='/tabs/WelcomePage'>
          <IonIcon icon={personOutline} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
        </IonTabBar>;
    } else {
      displayOptions = <IonTabBar slot='bottom'>
        <IonTabButton tab='Register' href='/tabs/Register'>
          <IonIcon icon={personAddOutline} />
          <IonLabel>Signup</IonLabel>
        </IonTabButton>
        <IonTabButton tab='Login' href='/tabs/Login'>
          <IonIcon icon={keyOutline} />
          <IonLabel>Login</IonLabel>
        </IonTabButton>
      </IonTabBar>;
    }
    return (
      <IonTabs>
        <IonRouterOutlet>
          <Route path='/tabs/home' component={Home} exact={true} />
          <Route
            path='/tabs/activities'
            component={AllActivitiesTab}
            exact={true}
          />
          <Route path='/tabs/WelcomePage' component={WelcomePage} />
          <Route path='/tabs/Login' component={Login} />
          <Route path='/tabs/Register' component={Register} />
        </IonRouterOutlet>
        {displayOptions}
      </IonTabs>
    )
  }

  return (
    <IonApp>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      {/* <Provider store={reduxStore}> */}
        <IonReactRouter>
          <IonRouterOutlet>
            {AllActivities.map((activityRenderFunc) => (
              <Route
                key={activityRenderFunc.activityId}
                path={'/activity/' + activityRenderFunc.activityId}
                component={activityRenderFunc}
              />
            ))}

            <Route path='/quiz/MoodQuiz' component={MoodQuiz} />
            <Route path='/quiz/MentalQuiz' component={MentalQuiz} />

            <Route path='/tabs' component={Tabs} />

            <Route
              path='/'
              render={() => <Redirect to='/tabs/home' />}
              exact={true}
            />
          </IonRouterOutlet>
        </IonReactRouter>
      {/* </Provider> */}
      </AppContext.Provider>
    </IonApp>
  )
}

export default App2
