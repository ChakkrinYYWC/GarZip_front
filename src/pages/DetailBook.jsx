import { IonContent, IonPage, IonImg, IonText, IonIcon, IonLabel, IonButton, IonItem, IonRouterLink, IonRange } from '@ionic/react';
import './DetailBook.css';
import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import Speech from 'react-speech';

const DetailBook = () => {
  // const [textvalue, setTextvalue] = useState("");
  const textvalue = "React hooks for in-browser Speech Recognition and Speech Synthesis.";
  const { speak, cancel, voices } = useSpeechSynthesis();
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
        {/* <IonHeader>
          <IonToolbar className="toolbar">
            <IonRouterLink href='/' className="button-back" >
                <IonIcon name="chevron-back-outline" ></IonIcon>
              </IonRouterLink>
          </IonToolbar>
        </IonHeader> */}

        <div className='DetailBook' >
          <div className="bar">
            <IonRouterLink href='/login' className="button-back">
              <IonIcon name="chevron-back-outline" ></IonIcon>
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
            <IonButton onClick={() => cancel()} fill="clear" mode="ios" className='button-play-back'>
              <IonIcon name="play-back-outline"></IonIcon>
            </IonButton >

            <IonButton onClick={() => speak({ text: textvalue })} fill="clear" mode="ios" className='button-play'>
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
            <div className='story'>กาลครั้งหนึ่งนานมาแล้ว มีเด็กน้อยคนหนึ่ง หลงรักแมวของเธอ</div> 
          </div>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default DetailBook;
