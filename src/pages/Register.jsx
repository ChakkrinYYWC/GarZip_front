import { IonContent, IonHeader, IonPage, IonTitle, IonInput, IonItem, IonLabel, IonButton,IonRouterLink,IonCheckbox  } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Register.css';
import Axios from 'axios';
import { useState } from 'react'

const LogIn = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [c_password, setC_password] = useState('')
  const [mode, setMode] = useState(false)

  async function submit() {
    console.log(username)
    console.log(email)
    console.log(password)
    console.log(c_password)
    console.log(mode)
    await Axios.post("http://localhost:3000/auth/register", {
      username: username, email: email, password: password, c_password: c_password, mode: mode
    }).then((res) => {
      window.location.href = "/login";
    }).catch((error) => {
      console.log(error)
    });
  }

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
                <IonInput type="text" onIonChange={event => setUsername(event.target.value)} ></IonInput>
              </IonItem>
            </div>
            <div className="form-input">
             <IonItem className="input">
               <IonLabel position="floating" className="input-text">อีเมล์</IonLabel>
               <IonInput type="email" onIonChange={event => setEmail(event.target.value)} ></IonInput>
             </IonItem>
           </div>
            <div className="form-input">
              <IonItem className="input">
                <IonLabel position="floating" className="input-text">รหัสผ่าน</IonLabel>
                <IonInput type="password" onIonChange={event => setPassword(event.target.value)} ></IonInput>
              </IonItem>
            </div>
            <div className="form-input">
              <IonItem className="input">
                <IonLabel position="floating" className="input-text">ยืนยันรหัสผ่าน</IonLabel>
                <IonInput type="password" onIonChange={event => setC_password(event.target.value)} ></IonInput>
              </IonItem>
            </div>
            <div className='Check-mode'>
              <IonCheckbox className='Checkbox' onIonChange={event => setMode(event.target.checked)} checked={mode} />
              <IonLabel position="floating" className="text">โหมดผู้พิการทางการมองเห็น</IonLabel>
            </div>
            <div className="action-button-regis">
              <IonButton size="large" className="register-button" onClick={submit}>สมัครสมาชิก</IonButton>
            </div>  
          </div>
        </div>
     
      </IonContent>
    </IonPage>
  );
};

export default LogIn;
