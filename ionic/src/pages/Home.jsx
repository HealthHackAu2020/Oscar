import React from "react";
import {
  IonImg,
  IonButton,
  IonIcon,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import "./Home.css";

const HomeTab = ({ history }) => {
  return (
    <IonPage>
      <IonHeader></IonHeader>
      <IonContent>
        <IonHeader collapse="condense"></IonHeader>
        <div>
          <div className="home-page-date">18th January 2020</div>
          <div className="home-page-hi">Good Morning</div>
          <div className="home-page-hi">Lauren</div>
          <div className="home-page-welcome-msg">
            Glad to hear you're feeling a bit better today.
          </div>
        </div>
        <IonGrid>
          <IonRow>
            <HomeTabBigButton title="Today's activities" image="bulb" history={history} page="/tabs/activities" />
            <HomeTabBigButton title="Meet-up schedule" image="clouds" />
          </IonRow>
          <IonRow>
            <HomeTabBigButton title="Mood quiz" image="sliders" />
            <HomeTabBigButton title="Connect and chat" image="hand" />
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
