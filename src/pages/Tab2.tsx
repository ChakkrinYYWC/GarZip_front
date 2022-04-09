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

  // async function send() {
  //   console.log(searchText)
  //   await Axios.post("http://localhost:3000/search/", {
  //     info : searchText
  //   }).then((res) => {
  //     console.log(res.data)
  //   }).catch((error) => {
  //     console.log(error)
  //   });
  // }

  return (

    <IonPage className="Booklist">
      <IonHeader  className="test1">
        <h1>ค้นหา</h1>
        <IonSearchbar 
          className='searchbar'
          placeholder="ค้นหา" 
          value={searchText}
          onClick={e => setText(false)}
          onIonChange={async e => {
            setSearchText(e.detail.value!)
            // await send();
          }}
          onIonCancel={e => setText(true)}
          showCancelButton="focus" ></IonSearchbar>
        {
          text ?
            <>
            </>
            :
            <>
              {/* <IonButton shape="round" fill="outline">Outline</IonButton> */}
              <IonSegment className='SegmentAll' onIonChange={e => console.log(e.detail.value)} value="all" >
                <IonSegmentButton value="all" className='SegmentAll'>
                  <IonLabel className='Segment'>ทั้งหมด</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="book" className='SegmentAll'>
                  <IonLabel className='Segment'>ชื่อหนังสือ</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="auther" className='SegmentAll'>
                  <IonLabel className='Segment'>ผู้แต่ง</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </>
        }
      </IonHeader>
      <Search text={text} bookinfo={searchText}/>
      
    </IonPage>

  );
};

export default Tab2;