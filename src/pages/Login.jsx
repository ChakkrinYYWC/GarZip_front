import {
  IonContent, IonHeader, IonPage,
  useIonAlert, IonInput, IonIcon, IonItem,
  IonLabel, IonButton, IonCheckbox, IonRouterLink
} from '@ionic/react';
import { logoFacebook } from 'ionicons/icons';
import Axios from 'axios';
import { useState } from 'react'
// import ExploreContainer from '../components/ExploreContainer';
import './Login.css';

const LogIn = () => {
  const [present] = useIonAlert();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [femail, setFemail] = useState('')

  async function submit() {
    await Axios.post("http://localhost:3000/auth/login", {
      username: username, password: password
    }).then((res) => {
      localStorage.setItem('user_id', res.data[0]._id);
      localStorage.setItem('user_name', res.data[0].username);
      localStorage.setItem('user_email', res.data[0].email);
      // const user_id = localStorage.getItem('id');
      // const user_name = localStorage.getItem('username');
      // const user_email = localStorage.getItem('email');
      window.location.href = "/HOME";
    }).catch((error) => {
      console.log(error)
    });

  }

  async function changepasswordRequest() {
    console.log("changepasswordRequest press = ",femail)
  }

  return (
    <IonPage className="loginPage">
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
        <div className="login-section ion-padding">
          <img src="assets/GARZIPLOGO.PNG" alt="" />
          <div className="heading ion-padding">
            <h1>ยินดีต้อนรับเข้าสู่ GARZIP</h1>
          </div>
          <div className="login-form ion-padding">
            <div className="form-input">
              {/* <IonTitle>ชื่อผู้ใช้งาน</IonTitle> */}
              <IonItem className="input">
                <IonLabel position="floating" className="input-text">ชื่อผู้ใช้งาน</IonLabel>
                <IonInput className="input"
                  type="text"

                  onIonChange={event => setUsername(event.target.value)} >
                </IonInput>
              </IonItem>
            </div>
            <div className="form-input">
              {/* <IonTitle>รหัสผ่าน</IonTitle> */}
              <IonItem className="input">
                <IonLabel position="floating" className="input-text">รหัสผ่าน</IonLabel>
                <IonInput  
                  type="password"
                  onIonChange={event => setPassword(event.target.value)}
                >

                </IonInput>

              </IonItem>
            </div>
          </div>
          <div className="action-button">
            <IonButton className="register-button" size="large" fill="outline" routerLink="/register">สมัครสมาชิก</IonButton>
            <IonButton
              size="large"
              className="login-button"
              onClick={submit}
            >เข้าสู่ระบบ</IonButton>
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
                  //header: 'กรอกอีเมล์เพื่อตั้งรหัสผ่านใหม่',
                  message: 'กรอกอีเมล์เพื่อตั้งรหัสผ่านใหม่',
                  inputs: [
                    {
                      name: 'email',
                      placeholder: 'อีเมล์',
                      type: 'email',
                      onIonChange: (event) => setFemail(event.target.value)
                    }
                  ],
                  buttons: [
                    { text: 'ยกเลิก', handler: (d) => console.log('cancle pressed') },
                    {
                      text: 'ยืนยัน', handler: (d) => {
                        console.log('ok pressed')
                        changepasswordRequest()
                      }
                    },
                  ],
                  onIonChange: (e) => console.log("e.inputs.value")
                  // onDidDismiss: (e) => console.log('did dismiss'),
                })
              }
            >
              ลืมรหัสผ่าน?
            </IonButton>
          </div>

          {/* <IonInput [type]="password_type" placeholder="Password" name="password" [(ngModel)]="password" required></IonInput>

          <IonIcon name="eye" item-right (click)="togglePasswordMode()"></IonIcon> */}


        </div>
      </IonContent>
    </IonPage>
  );
};

export default LogIn;
