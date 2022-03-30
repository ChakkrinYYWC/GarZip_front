import './Setting.css';
import { IonToggle } from '@ionic/react';


const Setting = () => {
  return (
    <div className='page'>
      <div className='topper'>
        <center>ตั้งค่า</center>
      </div>
      <div className="choice">
        <span className="textchoice">โหมดผู้พิการทางการมองเห็น</span>
        {/* <span className="bottonchoice">hi</span> */}
        <div className="bottonchoice">
          <IonToggle value="isBlide" color="secondary" />
        </div>
      </div>
      <a href="/setting/UserInfo">
        <div className="choice">
          <span className="textchoice">ข้อมูลส่วนตัว</span>
          <div className="bottonchoice">〉</div>
        </div>
      </a>
      <a href="/setting/Changepassword">
        <div className="choice">
          <span className="textchoice">เปลี่ยนรหัสผ่าน</span>
          <div className="bottonchoice">〉</div>
        </div>
      </a>
    </div>
  );
};

export default Setting;
