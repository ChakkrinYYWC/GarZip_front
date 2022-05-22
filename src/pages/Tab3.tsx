import React, { useState, useCallback, useContext, useEffect } from 'react'
import {
  IonContent, IonHeader, IonPage, IonRouterLink, IonLabel,
  IonButton, IonCheckbox, IonItem, IonList,IonPopover,IonIcon
} from '@ionic/react';
import Listening from '../components/Listening';
import './Tab3.css';
import {
  personCircle, search, helpCircle, star, create,
  ellipsisHorizontal, ellipsisVertical
} from 'ionicons/icons';


const Tab3 = () => {
  // const [checked, setChecked] = useState(0);
  const [titel, setTitel] = useState('เพิ่มล่าสุด');
  const [currentId, setCurrentId] = useState(0)
  const [data, setData] = useState([])

  function setName(index, name) {
    // console.log(name)
    setTitel(name)
    setCurrentId(index)
  }
  const user_mode = localStorage.getItem('user_mode');
  if(user_mode === 'false'){
    return (
      <IonPage className="favbook">
        <IonHeader className="fav_book">
          <div className='title_fav'>
          <IonLabel className="name_pages">ชั้นหนังสือ</IonLabel>
          <IonRouterLink  id="nested-button" className="button-screen">
            <IonIcon name="options-outline"></IonIcon>
          </IonRouterLink>
          </div>
  
        </IonHeader>
        <IonContent fullscreen >
          <div className='name_screen'>{titel}</div>
  
          <IonPopover trigger="nested-button" dismissOnSelect={true} >
          <IonContent >
            <IonList  className='Popover'>

              <IonLabel className='sorting'>จัดเรียงหนังสือ</IonLabel>

              <IonItem button={true} detail={false} className='Sort_book'>
                <IonLabel className='Sort' onClick={e => setName(1, "เพิ่มล่าสุด")}>เพิ่มล่าสุด</IonLabel>
              </IonItem>

              {/* <IonItem button={true} detail={false} className='Sort_book'>
                <IonLabel className='Sort' onClick={e => setName(2, 'ฟังล่าสุด')}>ฟังล่าสุด</IonLabel>
              </IonItem> */}

              <IonItem button={true} detail={false} className='Sort_book'>
              <IonLabel className='Sort' onClick={e => setName(3, 'เรียงตามชื่อเรื่อง')}>เรียงตามชื่อเรื่อง</IonLabel>
              </IonItem>

              <IonItem button={true} detail={false} className='Sort_book'>
              <IonLabel className='Sort' onClick={e => setName(4, 'เรียงตามชื่อผู้เขียน')}>เรียงตามชื่อผู้เขียน</IonLabel>
              </IonItem>
  
            </IonList>
          </IonContent>
        </IonPopover>
          <Listening {...{ currentId, setCurrentId }}  /> 
         
         
        </IonContent>
      </IonPage>
  
    );
  }else{
    return (
    <IonPage className="favbook Blind">
      <IonHeader className="fav_book">
        <div className='title_fav'>
        <IonLabel className="name_pages">ชั้นหนังสือ</IonLabel>
        <IonRouterLink  id="nested-button" className="button-filter">
          {/* <IonIcon name="options-outline"></IonIcon> */}
          <label >ตัวกรอง</label>
        </IonRouterLink>
        </div>
      </IonHeader>
      <IonContent fullscreen >
        <IonPopover  trigger="nested-button" dismissOnSelect={true} >
        <IonContent className='Blind'>
          <IonList  className='Popover Blind'>
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
  }


};

export default Tab3;
