import { useState, useEffect } from 'react'
import {
  IonHeader, IonPage, IonLabel, 
  IonSearchbar, IonSegment, IonSegmentButton, 
} from '@ionic/react';
import './Tab2.css';
import Search from '../components/Search';
import Axios from 'axios';

const Tab2 = () => {
  const [searchText, setSearchText] = useState('');
  const [text, setText] = useState(true);

  console.log(text)
  console.log(searchText)
  async function send() {
    await Axios.post("http://localhost:3000/search/", {
      info : searchText
    }).then((res) => {
      console.log(res.data)
    }).catch((error) => {
      console.log(error)
    });
  }

  return (

    <IonPage className="Booklist-Page">
      <IonHeader collapse="condense" className="test1">
        <h1>Search</h1>
        <IonSearchbar value={searchText} onClick={e => setText(false)} 
        onIonChange={e => {
          setSearchText(e.detail.value!);
          send();
        }}
          onIonCancel={e => setText(true)} showCancelButton="focus" ></IonSearchbar>
        {
          text ?
            <>
            </>
            :
            <>
              {/* <IonButton shape="round" fill="outline">Outline</IonButton> */}
              <IonSegment onIonChange={e => console.log(e.detail.value)} value="all" color="secondary">
                <IonSegmentButton value="all">
                  <IonLabel>ทั้งหมด</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="book">
                  <IonLabel>ชื่อหนังสือ</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="auther">
                  <IonLabel>ผู้แต่ง</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </>
        }
      </IonHeader>
      <Search text={text}/>
    </IonPage>

  );
};

export default Tab2;
