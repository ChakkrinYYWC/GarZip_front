import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Search from '../components/Search';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    // <IonPage>
    //   <IonHeader>
    //     <IonToolbar>
    //       <IonTitle></IonTitle>
    //     </IonToolbar>
    //   </IonHeader>
    //   <IonContent fullscreen>
    //     <IonHeader collapse="condense">
    //       <IonToolbar>
    //         <IonTitle size="large">S</IonTitle>
    //       </IonToolbar>
    //     </IonHeader>
    //     <ExploreContainer name="Tab 2 page" />
    //   </IonContent>
    // </IonPage>

    <IonPage >
      <IonHeader className="test1">
        <IonToolbar className="toolbar-container">
          <IonTitle >Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense" className="test1">
          <IonToolbar className="toolbar-container">
            <IonTitle size="large">Search</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Search name="Tab 3 page" />
      </IonContent>
    </IonPage>
    
  );
};

export default Tab2;
