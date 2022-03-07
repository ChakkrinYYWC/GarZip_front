import { IonContent, IonHeader, IonPage, IonImg,IonText,IonIcon,IonLabel, IonButton, IonItem,IonRouterLink,IonThumbnail, IonRange } from '@ionic/react';
import './DetailBook.css';



const DetailBook: React.FC = () => {
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
          {/* <div className="bar">
            <IonRouterLink href='/' className="button-back" >
              <IonIcon name="chevron-back-outline" ></IonIcon>
            </IonRouterLink>
          </div> */}
          <div className="data-book">
         
            
              <IonImg className="image-book" src="https://images-se-ed.com/ws/Storage/Originals/978616/043/9786160436521L.jpg?h=bd3ff49d0462bbe40accb7e5614ac9a5" />
              
              <h3 >เรื่องผีรอบโลก : ผีออนไลน์0000000000</h3>          
              <p>เขียนโดย : นายจักริน ยงยุทธ</p>
              <p>ระยะเวลา : 40 นาที 25 วินาที</p>
           
            
          </div>
          <div className='players'>

            <IonItem className='line-time'lines="none" >
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
            </IonItem>



            <IonButton  fill="clear" mode="ios" className='button-play-back'>
              <IonIcon name="play-back-outline"></IonIcon>
            </IonButton >
            
            <IonButton  fill="clear" mode="ios" className='button-play'>
              <IonIcon name="play-circle-outline" ></IonIcon>
            </IonButton >

            {/* <IonButton  fill="clear" mode="ios">
              <IonIcon  name="pause-circle-outline"></IonIcon>
            </IonButton> */}

            <IonButton  fill="clear" mode="ios" className='button-play-forward'>
              <IonIcon name="play-forward-outline"></IonIcon >
            </IonButton>

          </div>
          <IonButton  fill="clear" mode="ios" className='button-play-forward'>
            <IonIcon name="heart-circle-outline"></IonIcon>
          </IonButton>

          <IonButton  fill="clear" mode="ios" className='button-play-auto'>
            <IonIcon name="shuffle-outline"></IonIcon>
          </IonButton>
         
        
          <div className='story-book'>
            <h4 className='title-story'>เนื้อเรื่องย่อ</h4> 
            <div className='story' >กาลครั้งหนึ่งนานมาแล้ววววววววbfkhmslbmf,odkzmbjikazmhdrifpjbmksge,bfijkmmpm,gbkdozgnzdfngxbvzvfdgh;;;;;;;;;;;;;;;วว</div> 
          </div>
        </div>
    
      </IonContent>
    </IonPage>
  );
};

export default DetailBook;
