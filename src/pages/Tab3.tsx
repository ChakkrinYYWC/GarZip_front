import React, { useState, useCallback, useContext, useEffect } from 'react'
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonItemDivider, IonCheckbox, IonItem, IonList, IonLabel,
  IonButtons, IonIcon, IonButton, IonChip
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
    <IonPage className="Booklist">
      <IonHeader className="test1">
        <h1>ชั้นหนังสือ</h1>
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

        <IonLabel>เพิ่มล่าสุด</IonLabel>
        <IonCheckbox  value='1' onClick={e => setCurrentId(1)} />

        <IonLabel>ฟังล่าสุด</IonLabel>
        <IonCheckbox  value='2' onClick={e => setCurrentId(2)} />

        <IonLabel>เรียงตามชื่อเรื่อง</IonLabel>
        <IonCheckbox  value='3' onClick={e => setCurrentId(3)} />

        <IonLabel>เรียงตามชื่อผู้แต่ง</IonLabel>
        <IonCheckbox  value='4' onClick={e => setCurrentId(4)} />

      </IonHeader>

      <Listening {...{ currentId, setCurrentId }}  />

    </IonPage>

  );
};

export default Tab3;
