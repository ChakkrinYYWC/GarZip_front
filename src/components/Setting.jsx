import './Setting.css';
import { IonToggle,IonIcon } from '@ionic/react';


const Setting = () => {
const user_mode = localStorage.getItem('user_mode');
  if(user_mode === 'false'){
    return (
      <div className='page'>
        <div className='topper'>
          <center>ตั้งค่า</center>
        </div>
        <div className="choice">
          <span className="textchoice">สลับเป็นโหมดผู้พิการทางการมองเห็น</span>
          {/* <span className="bottonchoice">hi</span> */}
          <div className="bottonchoice">
            <IonToggle value="isBlind" className="choice_Blide" />
          </div>
        </div>
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
            {/* <div className="bottonchoice"> <i class="fa-solid fa-angle-right"></i> </div> */}
          </div>
        </a>
        <center className='g_button' >
            <button className='canclebuttonBlind'  >ออกจากระบบ</button>
        </center>
      </div>
    );
  }else{
    return (
      <div className='page'>
        <div className='topper'>
          <center>ตั้งค่า</center>
        </div>
        <div className="choice">
          <span className="textchoiceBlind">สลับเป็นโหมดปกติ</span>
          {/* <span className="bottonchoice">hi</span> */}
        </div>
        <a href="/setting/UserInfo">
          <div className="choice">
            <span className="textchoiceBlind">ข้อมูลส่วนตัว</span>
          </div>
        </a>
        <a href="/setting/Changepassword">
          <div className="choice">
            <span className="textchoiceBlind">เปลี่ยนรหัสผ่าน</span>
            {/* <div className="bottonchoice"> <i class="fa-solid fa-angle-right"></i> </div> */}
          </div>
        </a>
        <a href="/Login">
          <div className="choice">
            <span className="textchoiceBlind">ออกจากระบบ</span>
            {/* <div className="bottonchoice"> <i class="fa-solid fa-angle-right"></i> </div> */}
          </div>
        </a>
      </div>
    );
  }
  
};

export default Setting;
