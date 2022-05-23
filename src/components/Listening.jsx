import React, { useState, useCallback, useContext, useEffect } from 'react'
import Axios from "axios";
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonItemDivider, IonCheckbox, IonItem, IonList, IonLabel,
  IonButtons, IonIcon, IonButton, IonChip, IonRouterLink,
  IonThumbnail, IonImg
} from '@ionic/react';
const user_id = localStorage.getItem("user_id");

const Listening = (classes, ...props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
  const [lastdata, setLastdata] = useState()
  const [addLast, setAddLast] = useState()
  const [filterName, setFilterName] = useState()

  async function getData() {
    await Axios.get("http://localhost:3000/book/bookshelf/" + user_id, {})
      .then((res) => {
        // console.log(res.data);
        // setData(res.data.sort((a, b) => (a._id > b._id ? -1 : 1)))
        setData(res.data)
        // setLoading(false)
      })
      .catch((error) => {
        console.log('#2')
        console.log(error)
      });
  }
  // console.log(data)

  useEffect(async () => {
    await getData()
    console.log(classes.currentId)
    if (classes.currentId != 0) {
      // window.location.reload();
      if (classes.currentId == 1) {
        console.log('เพิ่มใหม่ล่าสุด')
      // } else if (classes.currentId == 2) {
      //   console.log('ฟังล่าสุด**')
        // setData(data.sort((a, b) => (a._id > b._id ? -1 : 1)))
      } else if (classes.currentId == 3) {
        console.log('เรียงตามชื่อเรื่อง')
        setData(data.sort((a, b) => (a.savebook[0].name > b.savebook[0].name ? 1 : -1)))
        setLoading(true);
      } else if (classes.currentId == 4) {
        console.log('เรียงตามชื่อผู้แต่ง')
        setData(data.sort((a, b) => (a.savebook[0].auther > b.savebook[0].auther ? 1 : -1)))
        setLoading(true);
      }

    }
  }, [classes.currentId])

  function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

  // console.log(data.sort((a, b) => (a.savebook._id > b.savebook._id ? 1 : -1)))
  return (
    <IonContent fullscreen>
      <div className='Booklist'>
        <IonList className='list-book'>
          {data.map((book, i) => {
            // console.log(book)
            return (
              <IonRouterLink href={`/DetailBook/${book.savebook[0]._id}`} className="button-back">
                <IonItem key={i} className="item-list" >
                  <IonThumbnail slot="start" className='image'>
                    <IonImg src={book.savebook[0].image} />
                  </IonThumbnail>
                  <span className="book">
                    <IonLabel className='title'>{book.savebook[0].name}</IonLabel>
                    {/* <IonLabel className='title'>{book.savebook[0]._id}</IonLabel> */}
                    <IonLabel className='detial'>เขียนโดย : {book.savebook[0].auther}</IonLabel>
                    <IonLabel className='detial'>ยอดฟัง : {kFormatter(book.savebook[0].view)} ครั้ง</IonLabel>
                    {/* <IonLabel className='detial'>ระยะเวลา : 00.00 น.</IonLabel> */}
                  </span>
                </IonItem>
              </IonRouterLink>
            )

          })}
        </IonList>
      </div>
    </IonContent>
  );
};

export default Listening;
