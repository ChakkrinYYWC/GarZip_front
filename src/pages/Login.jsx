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
          <img src="assets/GARZIPLOGO.PNG" alt="Garzip's logo" />
          <div className="heading ion-padding">
            <h1>Welcome to GARZIP</h1>
          </div>
          <div className="login-form ion-padding">
            <div className="form-input">
              <IonItem className="input">
                <IonLabel position="floating" className="input-text">Username</IonLabel>
                <IonInput className="input-text"
          
                  onIonChange={event => setUsername(event.target.value)} >
                </IonInput>
              </IonItem>
            </div>
            <div className="form-input">
              <IonItem className="input">
                <IonLabel position="floating" className="input-text">Password</IonLabel>
                <IonInput  
                  type="password"
                  onIonChange={event => setPassword(event.target.value)}
                >
                </IonInput>
              </IonItem>
            </div>
          </div>
          <div className="action-button">
            <IonButton className="register-button" size="large" fill="outline" routerLink="/register">Register</IonButton>
            <IonButton
              size="large"
              className="login-button"
              onClick={submit}
            >Login</IonButton>
          </div>
          <div className="forgotpass">
            <IonButton
              className="link-forgotpass"
              expand="block"
              onClick={() =>
                present({
                  cssClass: 'my-css',
                  message: 'Plaese insert your email. We will sent request for change password to you.',
                  inputs: [
                    {
                      type: 'text',
                      name: 'email',
                      placeholder: 'email',
                    }
                  ],
                  buttons: [
                    { text: 'cancle', handler: (d) => console.log('cancle pressed') },
                    {
                      text: 'confirm', handler: (d) => {
                        changepasswordRequest(d)
                      }
                    },
                  ],
                  onIonChange: (e) => console.log("e.inputs.value")
                  // onDidDismiss: (e) => console.log('did dismiss'),
                })
              }
            >
              forgot password?
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LogIn;
