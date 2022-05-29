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
      if (res) {
        localStorage.setItem('user_id', res.data[0]._id);
        localStorage.setItem('user_name', res.data[0].username);
        localStorage.setItem('user_email', res.data[0].email);
        localStorage.setItem('user_mode', res.data[0].mode);
        window.location.replace("/HOME");
      } else {
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
          <img src="https://res.cloudinary.com/dfuqgcqif/image/upload/v1653811989/AudioUploads/picture/GARZIPLOGO_osjg1i.png" alt="Garzip's logo" />
          <div className="heading ion-padding">
            <h1>ยินดีต้อนรับเข้าสู่ GARZIP</h1>
          </div>
          <div className="login-form ion-padding blind">
            <div className="form-input">
              <IonItem className="input">
                <IonLabel position="floating" alt='ชื่อผู้ใช้งาน' className="input-text">ชื่อผู้ใช้งาน</IonLabel>
                <IonInput className="input-text"

                  onIonChange={event => setUsername(event.target.value)} >
                </IonInput>
              </IonItem>
            </div>
            <div className="form-input">
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
          <div className="action-button ">
            
              {/* <button className="regisbutton" size="large" fill="outline"  type='submit'>สมัครสมาชิก</button> */}
    
            <IonRouterLink routerLink="/register" className="button-back">
              <button className='regisbutton'>สมัครสมาชิก</button>
            </IonRouterLink>
            <IonButton
              size="large"
              className="login-button"
              onClick={submit}
            >เข้าสู่ระบบ</IonButton>
          </div>
          <div className="forgotpass">
            <h1><IonButton
              className="link-forgotpass"
              expand="block"
              onClick={() =>
                present({
                  cssClass: 'my-css',
                  message: 'กรุณาใส่อีเมล ระบบจะส่งคำร้องตั้งรหัสผ่านใหม่ให้ท่าน',
                  inputs: [
                    {
                      type: 'text',
                      name: 'email',
                      placeholder: 'อีเมล',
                    }
                  ],
                  buttons: [
                    { text: 'ยกเลิก', handler: (d) => console.log('cancle pressed') },
                    {
                      text: 'ยืนยัน', handler: (d) => {
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
            </IonButton></h1>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LogIn;
