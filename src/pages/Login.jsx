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
import { Redirect } from 'react-router';
import React from 'react'


const LogIn = () => {
  const [present] = useIonAlert();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function submit() {
    await Axios.post("https://garzipback.herokuapp.com/auth/login", {
      username: username, password: password
    }).then((res) => {
      if(res){
        localStorage.setItem('user_id', res.data[0]._id);
      localStorage.setItem('user_name', res.data[0].username);
      localStorage.setItem('user_email', res.data[0].email);
      localStorage.setItem('user_mode', res.data[0].mode);
      window.location.replace("/HOME");
      }else{
        window.location.replace("/login");
      }
    }).catch((error) => {
      console.log(error)
    });

  }

  async function changepasswordRequest(data) {
    const email = data.email
    await Axios.post("https://garzipback.herokuapp.com/auth/passwordforgotten", {
      email: email
    }).catch((error) => {
      console.log(error)
    });
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
                <IonInput className="input-text"
          
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
          {/* <div className="login-with-facebook" >
            <IonIcon className="icon-facebook" icon={logoFacebook} />
            <IonRouterLink href="#" className="link-login-with-facebook">เข้าสู่ระบบด้วยFacebook</IonRouterLink>
          </div> */}

          <div className="forgotpass">
            <IonButton
              className="link-forgotpass"
              expand="block"
              onClick={() =>
                present({
                  cssClass: 'my-css',
                  //header: 'กรอกอีเมล์เพื่อตั้งรหัสผ่านใหม่',
                  message: 'กรอกอีเมล์ ระบบจะส่งอีเมล์ให้ท่านเพื่อตั้งรหัสผ่านใหม่',
                  inputs: [
                    {
                      type: 'text',
                      name: 'email',
                      placeholder: 'อีเมล์',
                    }
                  ],
                  buttons: [
                    { text: 'ยกเลิก', handler: (d) => console.log('cancle pressed') },
                    {
                      text: 'ยืนยัน', handler: (d) => {
                        console.log('ok pressed')
                        changepasswordRequest(d)
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
