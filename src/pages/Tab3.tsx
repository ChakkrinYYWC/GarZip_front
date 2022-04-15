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
  const [checked, setChecked] = useState(0);
  const [currentId, setCurrentId] = useState(0)


  function test(name) {
    // console.log(name)
    setCurrentId(name)
  }


  return (
    <IonPage className="favbook">
      <IonHeader className="fav_book">
        <div className='title_fav'>
        <IonLabel className="name_pages">ชั้นหนังสือ</IonLabel>
        <IonRouterLink  id="nested-button" className="button-screen">
          <IonIcon name="options-outline"></IonIcon>
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
        {/* <div className='title_fav'>
          <IonLabel className="name_pages">ชั้นหนังสือ</IonLabel>
          <IonRouterLink  id="nested-button" className="button-screen">
            <IonIcon name="options-outline"></IonIcon>
          </IonRouterLink>
        </div> */}
        <div className='name_screen'>ฟังล่าสุด</div>

        <IonPopover trigger="nested-button" dismissOnSelect={true} >
        <IonContent >
          <IonList  className='Popover'>
            <IonLabel className='sorting'>จัดเรียงหนังสือ</IonLabel>
            <IonItem button={true} detail={false} className='Sort_book'>
              {/* <IonCheckbox  value='1' onClick={e => setCurrentId(1)} /> */}
              <IonLabel className='Sort'>เพิ่มล่าสุด</IonLabel>
            </IonItem>
            <IonItem button={true} detail={false} className='Sort_book'>
              {/* <IonCheckbox  value='2' onClick={e => setCurrentId(2)} /> */}
              <IonLabel className='Sort'>ฟังล่าสุด</IonLabel>
            </IonItem>
            <IonItem button={true} detail={false} className='Sort_book'>
              {/* <IonCheckbox  value='3' onClick={e => setCurrentId(3)} /> */}
              <IonLabel className='Sort'>เรียงตามชื่อเรื่อง</IonLabel>
            </IonItem>
            <IonItem button={true} detail={false} className='Sort_book'>
              {/* <IonCheckbox  value='4' onClick={e => setCurrentId(4)} /> */}
              <IonLabel className='Sort'>เรียงตามชื่อผู้เขียน</IonLabel>
            </IonItem>
          
            
            {/* <IonPopover trigger="nested-trigger" dismissOnSelect={true} side="end">
              <IonContent>
                <IonItem button={true}>
                  <IonLabel>Nested Option</IonLabel>
                </IonItem>
              </IonContent>
            </IonPopover> */}

          </IonList>
        </IonContent>
      </IonPopover>
        {/* <IonHeader collapse="condense" className="test1">
          <IonToolbar className="toolbar-container">
            <IonTitle size="large">Listening#2</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        {/* <Listening name="Tab 3 page" /> */}
        <Listening {...{ currentId, setCurrentId }}  /> 
       
       
      </IonContent>
    </IonPage>

  );
};

export default Tab3;
