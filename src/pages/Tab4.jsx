import { IonContent, IonLabel, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import Setting from '../components/Setting';
import Axios from 'axios';
import './Tab4.css';

const Tab4 = () => {
  const user_id = localStorage.getItem('user_id');
  const user_mode = localStorage.getItem('user_mode');

  async function changemode() {
    console.log('changemode')
    await Axios.post("https://garzipback.herokuapp.com/user/changemode", {
      id: user_id, mode: user_mode
    }).then((res) => {
      if (res) {
        localStorage.setItem('user_mode', res.data);
        window.location.replace("/setting");
      }
    }).catch((error) => {
      console.log(error)
    });
  }
  // return (
  //   <IonPage className='page'>

  //     <IonContent fullscreen>
  //       <Setting />
  //     </IonContent>
  //   </IonPage>
  // );
  if (user_mode === 'false') {
    return (
      <IonPage className='page'>
        <IonHeader className="Setting">
          <div className='title_fav'>
            <IonLabel className="name_pages">ตั้งค่า</IonLabel>
          </div>
        </IonHeader>
        {/* <div className='topper'>
          <div>ตั้งค่า</div>
        </div> */}
        <IonContent fullscreen >
          <a>
            <div onClick={changemode} className="choice">
              <span className="textchoice">สลับเป็นโหมดผู้พิการทางการมองเห็น</span>
            </div>
          </a>
          <a href="/setting/UserInfo">
            <div className="choice">
              <span className="textchoice">ข้อมูลส่วนตัว</span>
              <IonIcon className="bottonchoice" name="chevron-forward-outline"></IonIcon>
            </div>
          </a>
          <a href="/setting/Changepassword">
            <div className="choice">
              <span className="textchoice">เปลี่ยนรหัสผ่าน</span>
              <IonIcon className="bottonchoice" name="chevron-forward-outline"></IonIcon>
            </div>
          </a>
          <div className='g_button umm' >
            <a href="/Login" className='umm'>
              <button className='canclebuttonBlind'>ออกจากระบบ</button>
            </a>
          </div>
        </IonContent>
      </IonPage>
    );
  } else {
    return (
      <IonPage className='page blind'>
        <IonHeader className="Setting">
          <div className='title_fav'>
            <IonLabel className="name_pages"><h1>ตั้งค่า</h1></IonLabel>
          </div>
        </IonHeader>
        {/* <div className='topper'>
          <div>ตั้งค่า</div>
        </div> */}
        <IonContent fullscreen >
          <div onClick={changemode} className="choice">
            <span className="textchoiceBlind"><h1>สลับเป็นโหมดสายตาปกติ</h1></span>
          </div>
          <a href="/setting/UserInfo">
            <button><div className="choice">
              <span className="textchoiceBlind">ข้อมูลส่วนตัว</span>
            </div></button>
          </a>
          <a href="/setting/Changepassword">
            <button><div className="choice">
              <span className="textchoiceBlind">เปลี่ยนรหัสผ่าน</span>
            </div></button>
          </a>
          <a href="/Login">
            <button><div className="choice">
              <button><span className="textchoiceBlind">ออกจากระบบ</span></button>
            </div></button>
          </a>

          {/* <button onclick={window.location.replace('/setting/UserInfo')}>Continue</button> */}
          {/* <div className='g_button' >
            <a href="/Login">
              <button className='cancleSettingbuttonBlind'  >ออกจากระบบ</button>
            </a>


          </div> */}
        </IonContent>
      </IonPage>
    );
  }
};

export default Tab4;
