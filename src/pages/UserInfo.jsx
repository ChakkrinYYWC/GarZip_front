import { IonContent, IonHeader, IonPage, IonInput, IonToolbar, IonIcon, IonItem, IonLabel, IonList, IonRouterLink, IonThumbnail } from '@ionic/react';
import Axios from 'axios';
import React, { useState, useEffect } from 'react'
import './Userinfo.css';

const UserInfo = () => {
  const [data, setData] = useState([])
  const [username, setUsername] = useState([])
  const [email, setEmail] = useState([])

  async function getData() {
    await Axios.post("http://localhost:3000/user", {
      data: { username: 'forth' }
    }).then((res) => {
      console.log(res.data[0]);
      setData(res.data)
    }).catch((error) => {
      console.log(error)
    });
  }

  useEffect(async () => {
    await getData()
  }, [])

  return (
    <IonPage className="Pagee">
      <IonHeader className="test1">
        <IonToolbar className="toolbar-container">
          <IonRouterLink href='/setting' className="button-back" >
            <IonIcon name="chevron-back-outline" ></IonIcon>
          </IonRouterLink>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        
          {data.map((user, i) => (
            <IonList key={i}>
              <div className='choice'>
                <IonItem>
                  <a className='text'>Username : </a>
                  <IonInput 
                    type="text" 
                    name="Surname" 
                    className='text' 
                    value={user.username} 
                    placeholder="username" 
                    onChange={(event) => {
                      setUsername(event.target.value)
                    }}>
                  </IonInput>
                </IonItem>
              </div>
              <div className='choice'>
                <IonItem>
                  <a className='text'>Email : </a>
                  <IonInput 
                    type="text" 
                    name="Surname" 
                    className='text' 
                    value={user.email} 
                    placeholder="email" 
                    onChange={async(event) => {
                      await setEmail(event.target.value)
                      console.log(email)
                    }}>
                  </IonInput>
                </IonItem>
              </div>
            </IonList>
          ))}
        
      </IonContent>
    </IonPage>
  );
};

export default UserInfo;
