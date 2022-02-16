import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Home from '../components/Home';
import React from "react";
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
        {/* <IonHeader>
          <IonToolbar>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent> 
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Garzip</IonTitle>
            </IonToolbar>
          </IonHeader>
          <Home/> 
        </IonContent> */}
        
        <Home/> 
    </IonPage>
  );
};

export default Tab1;
