import React  from "react";
import {
  IonHeader,
  IonPage,
  IonButton,
  IonBackButton,
  IonContent,
} from "@ionic/react";
import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css';
import './MoodHistory.css';


export function MoodHistoryPage(props) {
  const { history } = props;


  function getDayClassName({ date, view }) {

    if (view != "month") {
      return
    }

    if (date >= new Date()) {
      return // in the future
    }

    const score = Math.random() * 10

    if (score > 8) {
      return "mood-history-day-better"
    } else if (score > 5) {
      return "mood-history-day-neutral"
    } else {
      return "mood-history-day-not-great"
    }
  }


  return (
    <IonPage>
      <IonHeader>
        <IonBackButton defaultHref="/tabs/home" />
      </IonHeader>

      <IonContent className="mood-history-content">
        <div className="mood-history-top">
          <h1>Mood History</h1>

          <div>
            Overview of moods this month.
            Click on one of the days to view more information.
          </div>
          <br />
          <IonButton
            style={{ width: "15em" }}
            color="light"
            shape="round"
            onClick={(e) => {
              history.push("/quiz/MoodQuiz");
            }}
          >
            Complete mood quiz
          </IonButton>
        </div>

        <div style={{ height: "3em " }} />

        <Calendar

          navigationLabel={
            ({ date }) => <div><strong>{monthNames[date.getMonth()]}</strong> {date.getFullYear()}</div>
          }
          next2Label={null}
          prev2Label={null}

          tileClassName={getDayClassName}

        />
        <div className="legend">
          <span className="not-great">⚫</span> Not a great day
          <span style={{ marginLeft: '2em'}}></span>
          <span className="better">⚫</span> A better day

        </div>


      </IonContent>
    </IonPage>
  )

}

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];