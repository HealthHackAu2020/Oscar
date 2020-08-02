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

import { Plugins } from '@capacitor/core';
import { Provider } from 'react-redux'
import createStoreWithInitialState from './data/reduxStore'

import {
  personOutline,
  calendarOutline,
  homeOutline,
  logOutOutline,
} from 'ionicons/icons'
import Home from './pages/Home'
import AllActivities from './pages/activities/AllActivities'
import AllActivitiesTab from './pages/AllActivitiesTab'
import WelcomePage from './pages/WelcomePage'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Support from './pages/Support'
import Profile from './pages/Profile'
import Register from './pages/Register'
import MoodQuiz from './pages/quiz/MoodQuiz'
import MentalQuiz from './pages/quiz/MentalQuiz'
import QuizResult from './pages/quiz/QuizResult'

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

import './App.css'

// For updating the application state
import { AppContext } from './context'

import { isLoggedIn } from './firebaseConfig'
import { MoodHistoryPage } from './pages/quiz/MoodHistory'
import { ActivityDone } from './pages/activities/ActivityDone'

function Tabs() {
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
          <Route path='/tabs/ActivityDone' component={ActivityDone} />
          
          <Route path='/tabs/Logout' component={Logout} />
          <Route path='/tabs/Support' component={Support} />
          <Route path='/tabs/Profile' component={Profile} />
          <Route path='/tabs/QuizResult' component={QuizResult} />
        </IonRouterOutlet>
        <IonTabBar slot='bottom'>
          <IonTabButton tab='home' href='/tabs/home'>
            <ion-icon icon={homeOutline}></ion-icon>
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab='activities' href='/tabs/activities'>
            <IonIcon icon={calendarOutline} />
            <IonLabel>Activities</IonLabel>
          </IonTabButton>
          <IonTabButton tab='profile' href='/tabs/Profile'>
            <IonIcon icon={personOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    )
  )
}

function App2() {
  // Await Firebase authentication
  const [isAuthenticated, setUserHasAuthenticated] = useState(isLoggedIn())
  const [isAuthenticating, setIsAuthenticating] = useState(true)
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      setUserHasAuthenticated(!!user)
      setIsAuthenticating(false)
    });
  }, [])

  // Aawait restorage of redux state from ionic capacitor storage plugin
  const [reduxStore, setReduxStore] = useState(null)
  useEffect(() => {
    Plugins.Storage.get({ key: "oscar-redux" })
      .then(ret => setReduxStore(createStoreWithInitialState((ret && ret.value) ? JSON.parse(ret.value) : { stateRestoredEmpty: true })))
      .catch(err => {
        console.error("Storage.get failed", err)
        setReduxStore(createStoreWithInitialState({ stateRestoreError: err }))
      })
  }, [])

  console.log("App2 isAuthenticated", isAuthenticated)
  console.log("App2 reduxStore", reduxStore)
  if (isAuthenticating || !reduxStore) {
    return <div className="center-spinner"><IonSpinner /></div>;
  }

  return (
    <IonApp>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated: setUserHasAuthenticated }}>
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
              <Route path='/quiz/QuizResult' component={QuizResult} />

              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />

              <Route path='/welcome' component={WelcomePage} />

              <Route path='/tabs' render={() => <Tabs/>} />
              <Route path='/MoodHistory' component={MoodHistoryPage} />

              {isAuthenticated ? (
                <Route
                  path='/'
                  render={() => <Redirect to='/tabs/home' />}
                  exact={true}
                />
              ) : (
                  <Route
                    path='/'
                    render={() => <Redirect to='/welcome' />}
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
