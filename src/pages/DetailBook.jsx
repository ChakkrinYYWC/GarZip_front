import { IonContent, IonPage, IonImg,IonText,IonIcon,IonLabel, IonButton, IonItem,IonRouterLink, IonRange ,IonList,IonThumbnail} from '@ionic/react';
import './DetailBook.css';
import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import Speech from 'react-speech';



const items = [
  { 
   src: 'https://images-se-ed.com/ws/Storage/Originals/978616/780/9786167809236L.jpg?h=a04eeda4648924e7fed88f7ec858a74c',
   text: 'ตอนที่1 : รักแรกพบ',
   who: 'จันจิรา',
   time: '12:34'

  },
  { 
    src: 'https://images-se-ed.com/ws/Storage/Originals/978616/780/9786167809236L.jpg?h=a04eeda4648924e7fed88f7ec858a74c',
    text: 'ตอนที่2 : รักข้างเดียว',
    who: 'จันจิรา',
    time: '12:34'
 
   },
   { 
    src: 'https://images-se-ed.com/ws/Storage/Originals/978616/780/9786167809236L.jpg?h=a04eeda4648924e7fed88f7ec858a74c',
    text: 'ตอนที่3 : รักเรามันเก่าไป',
    who: 'จันจิรา',
    time: '12:34'
 
   }

  ];

const DetailBook = () => {
  return (
    <IonPage className="DetailPage">
      {/* <IonHeader className="test1">
        <IonToolbar className="toolbar-container">
          <IonRouterLink href='/' className="button-back" >
              <IonIcon name="chevron-back-outline" ></IonIcon>
            </IonRouterLink>
        </IonToolbar>
      </IonHeader> */}
      <IonContent  >
        <div className='DetailBook' >
          <div className="bar">
            <IonRouterLink href='/Booklist' className="button-back">
                <IonIcon name="arrow-back-circle-outline" ></IonIcon>
               
            </IonRouterLink>
          </div>
          <div className="data-book">
            <IonImg className="image-book" src="https://images-se-ed.com/ws/Storage/Originals/978616/043/9786160436521L.jpg?h=bd3ff49d0462bbe40accb7e5614ac9a5" />
            <h3 >เรื่องผีรอบโลก : ผีออนไลน์0000000000</h3>
            <p>เขียนโดย : นายจักริน ยงยุทธวิชัย</p>
            <p>ระยะเวลา : 40 นาที 25 วินาที</p>
          </div>
          <div className='players'>
           
              <IonRange  className='range-time'>
                <IonLabel slot="start" className='start-time'>
                  <IonText>
                    <b>
                      00.00
                    </b>
                  </IonText>
                </IonLabel>

                <IonLabel slot="end">
                  <IonText>
                    <b>
                      11.11
                    </b>
                  </IonText>
                </IonLabel>
              </IonRange>
            
          </div>
          <div className='mix-button'>
            <IonButton  fill="clear" mode="ios" className='button-play-back'>
              <IonIcon name="play-back-outline"></IonIcon>
            </IonButton >

            <IonButton  fill="clear" mode="ios" className='button-play'>
              <IonIcon name="play-circle-outline" ></IonIcon>
            </IonButton >

            {/* <IonButton  fill="clear" mode="ios">
              <IonIcon  name="pause-circle-outline"></IonIcon>
            </IonButton> */}

            <IonButton fill="clear" mode="ios" className='button-play-forward'>
              <IonIcon name="play-forward-outline"></IonIcon >
            </IonButton>
            <IonButton fill="clear" mode="ios" className='button-like'>
              <IonIcon className='like-book' name="heart-outline"></IonIcon>
            </IonButton>
            <IonButton fill="clear" mode="ios" className='button-play-auto'>
              <IonIcon name="shuffle-outline"></IonIcon>
            </IonButton>
            <div className='button-name'>
              <span className="save">บันทึก</span>
              <span className="auto">เล่นอัตโนมัติ</span>
            </div>
          </div>

          <div className='story-book'>
            <h4 className='title-story'>เนื้อเรื่องย่อ</h4> 
            <div className='story'>กาลครั้งหนึ่งนานมาแล้ว มีเด็กน้อยคนหนึ่ง หลงรักแมวของเธอตั้งแต่แรกพบ ทำให้อยากเจอแมวทุกๆวัน</div> 
          </div>

          <div className='episode-Booklist'>
            <h1>ตอน</h1>
            <IonList className='list-book'>
              {items.map((image, i) => (
                <IonItem key={i} className="item-list" href='/DetailBook'>
                  <IonThumbnail slot="start" className='imge' >
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

        </div>

      </IonContent>
    </IonPage>
  );
};

export default DetailBook;
