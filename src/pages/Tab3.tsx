import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Listening from '../components/Listening';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage >
      <IonHeader className="test1">
        <IonToolbar className="toolbar-container">
          <IonTitle >Listening</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense" className="test1">
          <IonToolbar className="toolbar-container">
            <IonTitle size="large">Listening</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Listening name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
