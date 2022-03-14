import { IonContent, IonHeader, IonPage, IonImg, IonToolbar, IonIcon, IonItem, IonLabel, IonList, IonRouterLink, IonThumbnail } from '@ionic/react';
import Axios from 'axios';

// const user = {
//   "username": "roong",
//   "password": "12345"
// }
// Axios.get('http://localhost:3000/auth/login',{
// }).then(res => {
//   console.log(res.data)
// }).catch(error => console.log(error))
const sendGetRequest = () => {
  return Axios({
    url: 'http://localhost:3000/auth/login',
    method: 'get',
    data: {
      "username": "roong",
      "password": "12345"
    }
  }).then(response => {
    console.log(response);
    return response.data;
  })
};

type Item = {
  src: string;
  text: string;
};

const items: Item[] = [{ src: 'https://images-se-ed.com/ws/Storage/Originals/978616/780/9786167809236L.jpg?h=a04eeda4648924e7fed88f7ec858a74c', text: 'เปิดร้านยังไงให้ขายดี' }];

const UserInfo: React.FC = () => {
  sendGetRequest()
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

export default UserInfo;
