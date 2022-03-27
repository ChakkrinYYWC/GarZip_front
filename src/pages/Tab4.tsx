import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Setting from '../components/Setting';
import '../components/Setting.css';

const Tab4: React.FC = () => {
  return (
    <IonPage className='page'>
      
      <IonContent fullscreen>
        <Setting />
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
