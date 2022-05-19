import React, { useState, useCallback, useContext, useEffect } from 'react'
import {
  IonContent, IonHeader, IonPage, IonImg, IonToolbar, IonIcon, IonItem, IonLabel, IonButton,
  IonList, IonRouterLink, IonThumbnail, IonButtons, IonBackButton
} from '@ionic/react';
import './Booklist.css';
import Axios from "axios";

const Booklist = ({ ...props }) => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);

  async function getData() {
    await Axios.get("http://localhost:3000/book/app/" + props.match.params.name, {})
      .then((res) => {
        // console.log(res.data);
        setData(res.data)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  useEffect(async () => {
    await getData()
    await setLoading(false);
  }, [])
  const user_mode = localStorage.getItem('user_mode');
  if(user_mode === 'false'){
    return (

      <IonPage className="Booklist-Page">
  
  
        <IonContent fullscreen>
          <div className='Booklist'>
            <div className="bar">
              {/* <IonButtons slot="start">
                <IonBackButton icon="chevron-back-outline" text="" defaultHref="/HOME" />
              </IonButtons>
  
              <IonRouterLink href='/HOME' className="button-back">
                <IonIcon name="chevron-back-outline" ></IonIcon>
              </IonRouterLink> */}
  
  
              <IonButtons slot="start">
                <IonRouterLink href='/HOME' className="button-back">
                    <IonIcon name="chevron-back-outline" ></IonIcon>
                </IonRouterLink>
                {/* <IonBackButton  icon="chevron-back-outline" text="" defaultHref="/HOME" /> */}
                <IonLabel >GARZIP</IonLabel>
              </IonButtons>
  
            </div>
            <h1>{props.match.params.name}</h1>
  
            {/* <IonRouterLink href='/DetailBook/' className="button-back"> */}
            <IonList className='list-book'>
              {data.map((book, i) => {
                return (
                  <IonRouterLink href={`/DetailBook/${book._id}`} className="button-back">
  
                    <IonItem key={i} className="item-list" >
                      <IonThumbnail slot="start" className='image' >
                        <IonImg src={book.image} />
                      </IonThumbnail>
                      <span className="book">
                        <IonLabel className='title'>{book.name}</IonLabel>
                        <IonLabel className='detial'>เขียนโดย : {book.auther}</IonLabel>
                        <IonLabel className='detial'>ระยะเวลา : 00.00 น.</IonLabel>
                      </span>
                    </IonItem>
                  </IonRouterLink>
                )
              })}
            </IonList>
            {/* </IonRouterLink> */}
  
          </div>
  
        </IonContent>
      </IonPage>
  
    );
  }else{
    return (

      <IonPage className="Booklist-Page ">
  
  
        <IonContent fullscreen>
          <div className='Booklist Blind'>
            <div className="bar">
              <IonButtons slot="start">
                <IonRouterLink href='/HOME' className="button-back">ย้อนกลับ</IonRouterLink>
              </IonButtons>
  
            </div>
            <h1>{props.match.params.name}</h1>
  
            {/* <IonRouterLink href='/DetailBook/' className="button-back"> */}
            <IonList className='list-book'>
              {data.map((book, i) => {
                return (
                  <IonRouterLink href={`/DetailBook/${book._id}`} className="button-back">
  
                    <IonItem key={i} className="item-list" >
                     
                      <span className="book">
                        <IonLabel className='title'>{book.name}</IonLabel>
                        <IonLabel className='detial'>เขียนโดย : {book.auther}</IonLabel>
                        <IonLabel className='detial'>ระยะเวลา : 00.00 น.</IonLabel>
                      </span>
                    </IonItem>
                  </IonRouterLink>
                )
              })}
            </IonList>
            {/* </IonRouterLink> */}
  
          </div>
  
        </IonContent>
      </IonPage>
  
    );
  }
  
};

export default Booklist;
