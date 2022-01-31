import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { logIn } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const LogIn: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* <IonTitle>Register</IonTitle> */}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default LogIn;
