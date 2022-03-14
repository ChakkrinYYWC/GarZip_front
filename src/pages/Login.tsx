<<<<<<< HEAD
import { IonContent, IonHeader, IonPage, IonInput,IonIcon, IonItem, IonLabel, IonButton, IonRouterLink  } from '@ionic/react';
=======
import { IonContent, IonHeader, IonPage, useIonAlert, IonInput,IonIcon, IonItem, IonLabel, IonButton, IonImg,IonRouterLink  } from '@ionic/react';
>>>>>>> 04fbd8de39cfa331d935bbd0e56c033b6243650e

import { logoFacebook } from 'ionicons/icons';

// import ExploreContainer from '../components/ExploreContainer';

import './Login.css';

const LogIn: React.FC = () => {
const [present] = useIonAlert();
  return (
    <IonPage className="loginPage">
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
        <div className="login-section ion-padding">
          <img src="assets/logo_garzip.jpeg" alt=""/>
          <div className="heading ion-padding">
            <h1>ยินดีต้อนรับเข้าสู่กระซิบ</h1>
          </div>
          <div className="login-form ion-padding">
            <div className="form-input">
              {/* <IonTitle>ชื่อผู้ใช้งาน</IonTitle> */}
              <IonItem className="input">
                <IonLabel position="floating" className="input-text">ชื่อผู้ใช้งาน</IonLabel>
                <IonInput type="text" ></IonInput>
              </IonItem>
            </div>
            <div className="form-input">
              {/* <IonTitle>รหัสผ่าน</IonTitle> */}
              <IonItem className="input">
                <IonLabel position="floating" className="input-text">รหัสผ่าน</IonLabel>
                <IonInput type="text" ></IonInput>
              </IonItem>
            </div>
          </div>
          <div className="action-button">
            <IonButton className="register-button" size="large" fill="outline" routerLink="/register">สมัครสมาชิก</IonButton>
            <IonButton size="large" className="login-button">เข้าสู่ระบบ</IonButton>
          </div> 
          <div className="login-with-facebook" >
            <IonIcon className="icon-facebook" icon={logoFacebook} />
            <IonRouterLink href="#" className="link-login-with-facebook">เข้าสู่ระบบด้วยFacebook</IonRouterLink>
          </div>

          <div className="forgotpass">
            <IonButton  
            className="link-forgotpass"
            expand="block"
            onClick={() =>
              present({
                cssClass: 'my-css',
                // header: 'กรอกอีเมล์เพื่อตั้งรหัสผ่านใหม่',
                message: 'กรอกอีเมล์เพื่อตั้งรหัสผ่านใหม่',
                inputs: [
                  {
                    name: 'email',
                    placeholder: 'อีเมล์',
                    type: 'email'
                  }
                ],
                buttons: [
                  'ยกเลิก',
                  { text: 'ยืนยัน', handler: (d) => console.log('ok pressed') },
                ],
                onDidDismiss: (e) => console.log('did dismiss'),
              })
            }
          >
            ลืมรหัสผ่าน?
          </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LogIn;
