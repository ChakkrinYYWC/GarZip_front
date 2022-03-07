import { IonContent, IonHeader, IonPage, IonImg,IonToolbar,IonIcon, IonItem, IonLabel, IonButton, IonList,IonRouterLink,IonThumbnail } from '@ionic/react';
import './DetailBook.css';

type Item = {
  src: string;
  text: string;
};

const items: Item[] = [{ src: 'https://images-se-ed.com/ws/Storage/Originals/978616/780/9786167809236L.jpg?h=a04eeda4648924e7fed88f7ec858a74c', text: 'เปิดร้านยังไงให้ขายดี' }];

const DetailBook: React.FC = () => {
  return (
    <IonPage className="Page">
       <IonHeader className="test1">
        <IonToolbar className="toolbar-container">
          <IonRouterLink href='/' className="button-back" >
              <IonIcon name="chevron-back-outline" ></IonIcon>
            </IonRouterLink>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='DetailBook'>
          {/* <div className="bar">
            <IonRouterLink href='/' className="button-back" >
              <IonIcon name="chevron-back-outline" ></IonIcon>
            </IonRouterLink>
          </div> */}
        
          <IonList>
            {items.map((image, i) => (
              <IonItem key={i}>
                <IonThumbnail slot="start">
                  <IonImg src={image.src} />
                </IonThumbnail>
                <div className="book">
                  <IonLabel>{image.text}</IonLabel>
                </div>
               
              </IonItem>
            ))}
          </IonList>
        </div>
     
      </IonContent>
    </IonPage>
  );
};

export default DetailBook;
