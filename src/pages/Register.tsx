import { IonContent, IonHeader, IonPage, IonTitle, IonInput, IonItem, IonLabel, IonButton,IonRouterLink,IonCheckbox  } from '@ionic/react';
<<<<<<< HEAD
=======

import ExploreContainer from '../components/ExploreContainer';
>>>>>>> 04fbd8de39cfa331d935bbd0e56c033b6243650e
import './Register.css';

const LogIn: React.FC = () => {
  return (
    <IonPage className="Page">
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
        <div className='register'>
          <div className="bar">
            <IonRouterLink href='/login' className="button-back">ย้อนกลับ</IonRouterLink>
          </div>
          <div className="heading-register ion-padding">
            <h1>สมัครสมาชิก</h1>
          </div>
          <div className="register-form ion-padding">
            <div className="form-input">
           
              <IonItem className="input">
                <IonLabel position="floating" className="input-text">ชื่อผู้ใช้งาน</IonLabel>
                <IonInput type="text" ></IonInput>
              </IonItem>
            </div>
            <div className="form-input">
             <IonItem className="input">
               <IonLabel position="floating" className="input-text">อีเมล์</IonLabel>
               <IonInput type="email" ></IonInput>
             </IonItem>
           </div>
            <div className="form-input">
              <IonItem className="input">
                <IonLabel position="floating" className="input-text">รหัสผ่าน</IonLabel>
                <IonInput type="text" ></IonInput>
              </IonItem>
            </div>
            <div className="form-input">
              <IonItem className="input">
                <IonLabel position="floating" className="input-text">ยืนยันรหัสผ่าน</IonLabel>
                <IonInput type="text" ></IonInput>
              </IonItem>
            </div>
            <div className='Check-mode'>
              <IonCheckbox slot="start" color="dark" className='Checkbox' />
              <IonLabel position="floating" className="text">โหมดผู้พิการทางการมองเห็น</IonLabel>
            </div>
            <div className="action-button-regis">
              <IonButton size="large" className="register-button" routerLink="/login">สมัครสมาชิก</IonButton>
            </div>  
          </div>
        </div>
     
      </IonContent>
    </IonPage>
  );
};

export default LogIn;
