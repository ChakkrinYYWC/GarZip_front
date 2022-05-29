import { useState, useEffect } from 'react'
import {
  IonHeader, IonPage, IonLabel, IonRouterLink,
  IonIcon, IonContent, IonPopover, IonList, IonItem
} from '@ionic/react';
import './Tab3.css';
import Search from '../components/Search';
import Listening from '../components/Listening';


const Tab3 = () => {
  const [titel, setTitel] = useState('เพิ่มล่าสุด');
  const [currentId, setCurrentId] = useState(0)
  const user_mode = localStorage.getItem('user_mode');

  const setName = (index, name) => {
    // console.log(name)
    setTitel(name)
    setCurrentId(index)
  }
  if (user_mode === 'false') {
    return (
      <IonPage className="favbook">
        <IonHeader className="fav_book">
          <div className='title_fav'>
            <IonLabel className="name_pages">ชั้นหนังสือ</IonLabel>
            <IonRouterLink id="nested-button" className="button-screen">
              <IonIcon name="options-outline"></IonIcon>
            </IonRouterLink>
          </div>

        </IonHeader>
        <IonContent fullscreen >
          <div className='name_screen'>{titel}</div>
          <IonPopover trigger="nested-button" dismissOnSelect={true} >
            <IonContent >
              <IonList className='Popover'>

                <IonLabel className='sorting'>จัดเรียงหนังสือ</IonLabel>

                <IonItem button={true} detail={false} className='Sort_book'>
                  <IonLabel className='Sort' onClick={e => setName(1, "เพิ่มล่าสุด")}>เพิ่มล่าสุด</IonLabel>
                </IonItem>
                <IonItem button={true} detail={false} className='Sort_book'>
                  <IonLabel className='Sort' onClick={e => setName(3, 'เรียงตามชื่อเรื่อง')}>เรียงตามชื่อเรื่อง</IonLabel>
                </IonItem>
                <IonItem button={true} detail={false} className='Sort_book'>
                  <IonLabel className='Sort' onClick={e => setName(4, 'เรียงตามชื่อผู้เขียน')}>เรียงตามชื่อผู้เขียน</IonLabel>
                </IonItem>

              </IonList>
            </IonContent>
          </IonPopover>

          <Listening {...{ currentId, setCurrentId }} />

        </IonContent>
      </IonPage>

    );

  } else {
    return (
      <IonPage className="favbook">
        <IonHeader className="fav_book">
          <div className='title_fav'>
              <IonLabel className="name_pagesB">ชั้นหนังสือ</IonLabel>
            
              <IonRouterLink id="nested-button" className="button-filter">
                <label><h6>ตัวกรอง</h6></label>
            </IonRouterLink>
            
            

          </div>

        </IonHeader>
        <IonContent fullscreen >
          <div className='name_screen'><h2>{titel}</h2></div>
          <IonPopover trigger="nested-button" dismissOnSelect={true} >
            <IonContent >
              <IonList className='Popover'>

                <IonLabel className='sorting'><h1>จัดเรียงหนังสือ</h1></IonLabel>

                <IonItem button={true} detail={false} className='Sort_book'>
                  <h8><IonLabel className='Sort' onClick={e => setName(1, "เพิ่มล่าสุด")}>เพิ่มล่าสุด</IonLabel></h8>
                </IonItem>
                <IonItem button={true} detail={false} className='Sort_book'>
                  <h8><IonLabel className='Sort' onClick={e => setName(3, 'เรียงตามชื่อเรื่อง')}>เรียงตามชื่อเรื่อง</IonLabel></h8>
                </IonItem>
                <IonItem button={true} detail={false} className='Sort_book'>
                  <h8><IonLabel className='Sort' onClick={e => setName(4, 'เรียงตามชื่อผู้เขียน')}>เรียงตามชื่อผู้เขียน</IonLabel></h8>
                </IonItem>

              </IonList>
            </IonContent>
          </IonPopover>

          <Listening {...{ currentId, setCurrentId }} />

        </IonContent>
      </IonPage>

    );

  }

};

export default Tab3;