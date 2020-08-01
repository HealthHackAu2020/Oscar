import React, { useState }from "react";
import {
  IonImg,
  IonContent,
  IonHeader,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import "./Home.css";

const HomeTab = ({ history }) => {

  const date = new Date();

  const nth = function(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  }

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const [firstName] = useState('Lauren')

  return (
    <IonPage>
      <IonHeader></IonHeader>
      <IonContent>
        <IonHeader collapse="condense"></IonHeader>
        <div>
          <div className="home-page-date">{dayNames[date.getDay()]}, {date.getDate()}{nth(date.getDate())} of {monthNames[date.getMonth()]} {date.getFullYear()}</div>
          <div className="home-page-hi">Good {date.getHours() < 12 ? `Morning` : `Afternoon`}</div>
          <div className="home-page-hi">{firstName}</div>
          <div className="home-page-welcome-msg">
            Glad to hear you're feeling a bit better today.
          </div>
        </div>
        <IonGrid>
          <IonRow>
            <HomeTabBigButton title="Today's activities" image="bulb" history={history} page="/tabs/activities" />
            <HomeTabBigButton title="Help &amp; Support" image="clouds" history={history} page="/tabs/Support" />
          </IonRow>
          <IonRow>
            <HomeTabBigButton title="Mood quiz" image="sliders" history={history} page="/MoodHistory" />
            <HomeTabBigButton title="Connect" image="hand" />
          </IonRow>

          <QuoteOfTheDay
            text="Whoever wants to reach a distant goal must take small steps"
            author="Helmut Schmidt"
          />
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

function HomeTabBigButton(props) {
  const { page, history, title, image } = props;
  function onClick(e) {
    e.preventDefault();
    history.push(page)
  }
  return (
    <IonCol size="6" onClick={page ? onClick : undefined}>
      <div className="home-page-big-button">
        <IonImg
          style={{ height: "10em", width: "90%" }}
          src={`assets/${image}.png`}
        />
        {title}
      </div>
    </IonCol>
  );
}

function QuoteOfTheDay(props) {
  const { text, author } = props;
  return (
    <IonCol size="12">
      <div className="home-page-quote-of-the-day">
        <div>Quote of the day</div>
        <div>{text}</div>
        <div>— {author}</div>
      </div>
    </IonCol>
  );
}

export default HomeTab;
