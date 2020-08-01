import React, { useState, useEffect } from 'react'
import { firebase } from './firebaseConfig'
import { Redirect, Route } from 'react-router-dom'
import {
  IonApp,
  IonSpinner,
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

import {
  personOutline,
  calendarOutline,
  homeOutline,
  keyOutline,
  logOutOutline,
  personAddOutline,
} from 'ionicons/icons'
import Home from './pages/Home'
import AllActivities from './pages/activities/AllActivities'
import AllActivitiesTab from './pages/AllActivitiesTab'
import WelcomePage from './pages/WelcomePage'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Support from './pages/Support'
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

// this variables.css seems to break tabs
// import "./theme/variables.css";
import './theme/variables-prev.css'

import './theme/maxWidth.css'

// For updating the application state
import { AppContext } from './context'

import { isLoggedIn } from './firebaseConfig'

function Tabs(props) {
  let displayOptions
  if (props.isAuthenticated) {
    displayOptions = (
      <IonTabBar slot='bottom'>
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
        <IonTabButton tab='Logout' href='/tabs/Logout'>
          <IonIcon icon={logOutOutline} />
          <IonLabel>Logout</IonLabel>
        </IonTabButton>
      </IonTabBar>
    )
  } else {
    displayOptions = (
      <IonTabBar slot='bottom'>
        <IonTabButton tab='Register' href='/tabs/Register'>
          <IonIcon icon={personAddOutline} />
          <IonLabel>Signup</IonLabel>
        </IonTabButton>
        <IonTabButton tab='Login' href='/tabs/Login'>
          <IonIcon icon={keyOutline} />
          <IonLabel>Login</IonLabel>
        </IonTabButton>
      </IonTabBar>
    )
  }
  return (
    (
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
          <Route path='/tabs/Logout' component={Logout} />
          <Route path='/tabs/Support' component={Support} />
        </IonRouterOutlet>
        {displayOptions}
      </IonTabs>
    )
  )
}

function App2() {
  const [isAuthenticated, userHasAuthenticated] = useState(isLoggedIn())
  const [isAuthenticating, setIsAuthenticating] = useState(true)

  console.log("App2 isAuthenticated", isAuthenticated)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      userHasAuthenticated(!!user)
      setIsAuthenticating(false)
    });
  }, [])

  if (isAuthenticating) {
    return <IonSpinner />;
  }

  return (
    <IonApp>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Provider store={reduxStore}>
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

              <Route path='/tabs' render={() => <Tabs isAuthenticated={isAuthenticated} />} />

              {isAuthenticated ? (
                <Route
                  path='/'
                  render={() => <Redirect to='/tabs/home' />}
                  exact={true}
                />
              ) : (
                  <Route
                    path='/'
                    render={() => <Login />}
                    exact={true}
                  />
                )}
            </IonRouterOutlet>
          </IonReactRouter>
        </Provider>
      </AppContext.Provider>
    </IonApp >
  )
}

export default App2
