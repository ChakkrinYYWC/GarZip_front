import React, { useState, useCallback, useContext, useEffect } from 'react'
import {
  IonContent, IonHeader, IonPage, IonRouterLink, IonLabel,
  IonThumbnail, IonImg, IonItem, IonList,IonPopover,IonIcon
} from '@ionic/react';
import Listening from '../components/Listening';
import './BlindTab3.css';
import {
  personCircle, search, helpCircle, star, create,
  ellipsisHorizontal, ellipsisVertical
} from 'ionicons/icons';
import Axios from "axios";

const BlindTab3 = (classes, ...props)  => {
  const [checked, setChecked] = useState(0);
  const [currentId, setCurrentId] = useState(0)
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
  const [filterName, setFilterName] = useState()

  async function getData() {
    await Axios.get("http://localhost:3000/book/app", {})
      .then((res) => {
        // console.log(res.data[0]);
        setData(res.data)
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
      } else if (classes.currentId == 2) {
        console.log('ฟังล่าสุด**')
        setData(data.sort((a, b) => (a._id > b._id ? -1 : 1)))
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


  function test(name) {
    // console.log(name)
    setCurrentId(name)
  }

  

  return (
    <IonPage className="favbook">
      <IonHeader className="fav_book">
        <div className='title_fav'>
        <IonLabel className="name_pages">ชั้นหนังสือ</IonLabel>
        <IonRouterLink  id="nested-button" className="button-filter">
          {/* <IonIcon name="options-outline"></IonIcon> */}
          <label >ตัวกรอง</label>
        </IonRouterLink>
        </div>

        {/* <IonToolbar color="Shade">
          <IonButtons slot="primary">
            <IonButton color="primary">
              <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical} />
            </IonButton>
          </IonButtons>
        </IonToolbar> */}
        {/* <IonButton color="light" onClick={e => setCurrentId(1)}>เพิ่มล่าสุด</IonButton>
        <IonButton color="light">ฟังล่าสุด</IonButton>
        <IonButton color="light">เรียงตามชื่อเรื่อง</IonButton>
        <IonButton color="light">เรียงตามชื่อผู้แต่ง</IonButton> */}

        {/* <IonLabel>เพิ่มล่าสุด</IonLabel>
        <IonCheckbox  value='1' onClick={e => setCurrentId(1)} />

        <IonLabel>ฟังล่าสุด</IonLabel>
        <IonCheckbox  value='2' onClick={e => setCurrentId(2)} />

        <IonLabel>เรียงตามชื่อเรื่อง</IonLabel>
        <IonCheckbox  value='3' onClick={e => setCurrentId(3)} />

        <IonLabel>เรียงตามชื่อผู้แต่ง</IonLabel>
        <IonCheckbox  value='4' onClick={e => setCurrentId(4)} /> */}

      </IonHeader>
      <IonContent fullscreen >

        

        <IonPopover  trigger="nested-button" dismissOnSelect={true} >
        <IonContent >
          <IonList  className='Popover'>
            <IonLabel className='sorting'>จัดเรียงหนังสือ</IonLabel>
            <IonItem button={true} detail={false} className='Sort_book'>
             
              <IonLabel className='Sort'>เพิ่มล่าสุด</IonLabel>
            </IonItem>
            <IonItem button={true} detail={false} className='Sort_book'>
            
              <IonLabel className='Sort'>ฟังล่าสุด</IonLabel>
            </IonItem>
            <IonItem button={true} detail={false} className='Sort_book'>
             
              <IonLabel className='Sort'>เรียงตามชื่อเรื่อง</IonLabel>
            </IonItem>
            <IonItem button={true} detail={false} className='Sort_book'>
             
              <IonLabel className='Sort'>เรียงตามชื่อผู้เขียน</IonLabel>
            </IonItem>

          </IonList>
        </IonContent>
      </IonPopover>
        {/* <IonHeader collapse="condense" className="test1">
          <IonToolbar className="toolbar-container">
            <IonTitle size="large">Listening#2</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        {/* <Listening name="Tab 3 page" /> */}
        {/* <Listening {...{ currentId, setCurrentId }}  />  */}
        <div className='name_screen'>ฟังล่าสุด</div>
        <div className='Booklist'>
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
      </div>
       
       
      </IonContent>
    </IonPage>

  );
};

export default BlindTab3;
