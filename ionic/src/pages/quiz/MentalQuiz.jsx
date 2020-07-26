import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonRange,
  IonLabel,
  IonIcon,
  IonItemDivider,
  IonBackButton,
} from "@ionic/react";
import { sunny } from "ionicons/icons";

const MentalQuiz = () => {
  const [value, setValue] = useState(0);
  const [rangeValue, setRangeValue] = useState({ lower: 0, upper: 0 });

  return (
    <>
      <IonHeader>
        <IonBackButton />
      </IonHeader>

      <IonContent className="container">
        <h1>How are you mentally feeling today?</h1>
        <h3>Use the sliders to answer the below moods</h3>
      </IonContent>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>IonRange Examples</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItemDivider>Default</IonItemDivider>
            <IonItem>
              <IonRange
                pin={true}
                value={value}
                onIonChange={(e) => setValue(e.detail.value)}
              />
            </IonItem>
            <IonItem>
              <IonLabel>Value: {value}</IonLabel>
            </IonItem>

            <IonItemDivider>Min & Max</IonItemDivider>
            <IonItem>
              <IonRange min={-200} max={200} color="secondary">
                <IonLabel slot="start">-200</IonLabel>
                <IonLabel slot="end">200</IonLabel>
              </IonRange>
            </IonItem>

            <IonItemDivider>Icons</IonItemDivider>
            <IonItem>
              <IonRange min={20} max={80} step={2}>
                <IonIcon size="small" slot="start" icon={sunny} />
                <IonIcon slot="end" icon={sunny} />
              </IonRange>
            </IonItem>

            <IonItemDivider>With Snaps & Ticks</IonItemDivider>
            <IonItem>
              <IonRange
                min={1000}
                max={2000}
                step={100}
                snaps={true}
                color="secondary"
              />
            </IonItem>

            <IonItemDivider>With Snaps & No Ticks</IonItemDivider>
            <IonItem>
              <IonRange
                min={1000}
                max={2000}
                step={100}
                snaps={true}
                ticks={false}
                color="secondary"
              />
            </IonItem>

            <IonItemDivider>Dual Knobs</IonItemDivider>
            <IonItem>
              <IonRange
                dualKnobs={true}
                min={0}
                max={60}
                step={3}
                snaps={true}
                onIonChange={(e) => setRangeValue(e.detail.value)}
              />
            </IonItem>
            <IonItem>
              <IonLabel>
                Value: lower: {rangeValue.lower} upper: {rangeValue.upper}
              </IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonPage>
    </>
  );
};

export default MentalQuiz;
