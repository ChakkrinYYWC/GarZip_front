import './BlindSetting.css';
import { IonToggle,IonIcon } from '@ionic/react';


const BlindSetting = () => {
  return (
    <div className='page'>
      <div className='topper'>
        <center className='tangka'>ตั้งค่า</center>
      </div>
      <div className="choice">
        <span className="textchoice">โหมดผู้พิการทางการมองเห็น</span>
        {/* <span className="bottonchoice">hi</span> */}
        <div className="bottonchoice">
          <IonToggle value="isBlind" className="choice_Blide" />
        </div>
      </div>
      <a href="/Blindsetting/BlindUserInfo">
        <div className="choice">
          <span className="textchoice">ข้อมูลส่วนตัว</span>
          <IonIcon className="bottonchoice" name="chevron-forward-outline"></IonIcon>
        </div>
      </a>
      <a href="/Blindsetting/BlindChangepassword">
        <div className="choice">
          <span className="textchoice">เปลี่ยนรหัสผ่าน</span>
          <IonIcon className="bottonchoice" name="chevron-forward-outline"></IonIcon>
          {/* <div className="bottonchoice"> <i class="fa-solid fa-angle-right"></i> </div> */}
        </div>
      </a>
    </div>
  );
};

export default BlindSetting;
