import { IonContent, IonHeader, IonPage, IonImg,IonToolbar,IonIcon, IonItem, IonLabel, IonButton, IonList,IonRouterLink,IonThumbnail } from '@ionic/react';
import './Booklist.css';

type Item = {
  src: string;
  text: string;
  who: string;
  time: string;
};

const items: Item[] = [
  { 
   src: 'https://images-se-ed.com/ws/Storage/Originals/978616/780/9786167809236L.jpg?h=a04eeda4648924e7fed88f7ec858a74c',
   text: 'เปิดร้านยังไงให้ขายดี',
   who: 'จันจิรา',
   time: '12:34'

  },
  { 
    src: 'https://images-se-ed.com/ws/Storage/Originals/978616/780/9786167809236L.jpg?h=a04eeda4648924e7fed88f7ec858a74c',
    text: 'เปิดร้านยังไงให้ขายดี',
    who: 'จันจิรา',
    time: '12:34'
 
   },
   { 
    src: 'https://images-se-ed.com/ws/Storage/Originals/978616/780/9786167809236L.jpg?h=a04eeda4648924e7fed88f7ec858a74c',
    text: 'เปิดร้านยังไงให้ขายดี',
    who: 'จันจิรา',
    time: '12:34'
 
   },
  { 
   src: 'https://storage.naiin.com/system/application/bookstore/resource/product/202110/534381/1000243832_front_XXL.jpg?imgname=%E0%B9%80%E0%B8%A3%E0%B8%B2%E0%B9%80%E0%B8%95%E0%B8%B4%E0%B8%9A%E0%B9%82%E0%B8%95%E0%B8%82%E0%B8%B6%E0%B9%89%E0%B8%99%E0%B9%83%E0%B8%99%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B9%86-%E0%B8%A7%E0%B8%B1%E0%B8%99',
   text: 'เราเติบโตขึ้นในทุกๆวัน' ,
   who: 'จักริน',
   time: '12:34'

  }];

const Booklist: React.FC = () => {
  return (
    <IonPage className="Booklist-Page">
       
        <IonToolbar className="toolbar">
          Garzip
        </IonToolbar>
      
      <IonContent fullscreen>
        <div className='Booklist'>
          <h1>นิทาน</h1>
          <IonList >
            {items.map((image, i) => (
              <IonItem key={i} >
                <IonThumbnail slot="start" >
                  <IonImg  src={image.src} />
                </IonThumbnail>
                <span className="book">
                  <IonLabel className='title'>{image.text}</IonLabel>
                  <IonLabel className='detial'>เขียนโดย : {image.who}</IonLabel>
                  <IonLabel className='detial'>ระยะเวลา : {image.time} น.</IonLabel>
                </span>
               
              </IonItem>
            ))}
          </IonList>

          
        </div>
     
      </IonContent>
    </IonPage>
  );
};

export default Booklist;
