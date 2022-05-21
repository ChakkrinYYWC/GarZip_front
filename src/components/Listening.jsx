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
  const [addLast, setAddLast] = useState()
  const [filterName, setFilterName] = useState()

  async function getData() {
    await Axios.get("http://localhost:3000/book/bookshelf/"+ user_id, {})
      .then((res) => {
        console.log(res);
        // setData(res.data.sort((a, b) => (a._id > b._id ? -1 : 1)))
        setData(res.data[0].sort((a, b) => (a._id > b._id ? -1 : 1)))
        setAddLast(res.data[1])
        // setData(res.data, res.data)
      })
      .catch((error) => {
        console.log('#2')
        console.log(error)
      });
  }

  useEffect(async () => {
    await getData()
    console.log(classes.currentId)
    if (classes.currentId != 0) {
      // window.location.reload();
      if (classes.currentId == 1) {
        console.log('เพิ่มใหม่ล่าสุด')
        setData(data.sort((a, b) => (a._id > b._id ? -1 : 1)))
        console.log(data)
      } else if (classes.currentId == 2) {
        console.log('ฟังล่าสุด**')
        // setData(data.sort((a, b) => (a._id > b._id ? -1 : 1)))
      }else if (classes.currentId == 3) {
        console.log('เรียงตามชื่อเรื่อง')
        setData(data.sort((a, b) => (a.name > b.name ? 1 : -1)))
      }else if (classes.currentId == 4) {
        console.log('เรียงตามชื่อผู้แต่ง')
        setData(data.sort((a, b) => (a.auther > b.auther ? 1 : -1)))
      }
    }
    setLoading(false);
  }, [classes.currentId])


  // function sortData(name) {
  //   if (name == 0) {
  //     console.log('*1')
  //     data.sort((a, b) => (a._id > b._id ? 1 : -1))
  //   } else if (name == 1) {
  //     console.log('*2')
  //     data.sort((a, b) => (a._id > b._id ? -1 : 1))
  //   }
  // }
  // data.sort((a, b) => (a._id > b._id ? 1 : -1))

  return (
    <IonContent fullscreen>
      <div className='Booklist'>
        <IonList className='list-book'>
          {data.map((book, i) => {
            return (
              <IonRouterLink href={`/DetailBook/${book._id}`} className="button-back">
                <IonItem key={i} className="item-list" >
                  <IonThumbnail slot="start" className='image'>
                    <IonImg src={book.image} />
                  </IonThumbnail>
                  <span className="book">
                    <IonLabel className='title'>{book.name}</IonLabel>
                    <IonLabel className='title'>{book._id}</IonLabel>
                    <IonLabel className='detial'>เขียนโดย : {book.auther}</IonLabel>
                    <IonLabel className='detial'>ระยะเวลา : 00.00 น.</IonLabel>
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
