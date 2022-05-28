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
  const [data, setData] = useState([]);
  const [mode, setMode] = useState('all');

  async function send(searchdata) {
    await Axios.post("https://garzipback.herokuapp.com/search/", {
      info: searchdata
    }).then(async (res) => {
      // console.log(res.data)
      setData(res.data)
      // console.log(data)
    }).catch((error) => {
      console.log(error)
    });
  }
  async function st(searchdata) {
    await Axios.post("https://garzipback.herokuapp.com/search/", {
      info: searchdata
    }).then(async (res) => {
      // console.log(res.data)
      setData(res.data)
      // console.log(data)
    }).catch((error) => {
      console.log(error)
    });
  }

  useEffect(() => {
    st("")
  }, [])

  return (

    <IonPage className="Booklist">
      <IonHeader className="test1">
        <h1>ค้นหา</h1>
        <IonSearchbar
          className='searchbar'
          placeholder="ค้นหา"
          value={searchText}
          // onClick={e => setText(false)}
          onIonChange={async e => {
            setText(false)
            setSearchText(e.detail.value!)
            send(e.detail.value)
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
              <IonSegment className='SegmentAll' onIonChange={e => setMode(e.detail.value)}>
                <IonSegmentButton value="all" className='SegmentAll'>
                  <IonLabel className='Segment'>ทั้งหมด</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="name" className='SegmentAll'>
                  <IonLabel className='Segment'>ชื่อหนังสือ</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="auther" className='SegmentAll'>
                  <IonLabel className='Segment'>ผู้แต่ง</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </>
        }
      </IonHeader>
      <Search text={text} bookinfo={data} mode={mode}/>

    </IonPage>

  );
};

export default Tab2;