import './Setting.css';
import { IonIcon } from '@ionic/react';
import Axios from 'axios';


const Setting = () => {
  const user_id = localStorage.getItem('user_id');
  const user_mode = localStorage.getItem('user_mode');

  async function changemode(){
    console.log('changemode')
    await Axios.post("http://localhost:3000/user/changemode", {
      id: user_id, mode: user_mode
    }).then((res) => {
      if(res){
      localStorage.setItem('user_mode', res.data);
      window.location.replace("/setting");
      }
    }).catch((error) => {
      console.log(error)
    });
  }

  if (user_mode === 'false') {
    return (
      <div className='page'>
        <div className='topper'>
          <center>ตั้งค่า</center>
        </div>
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
        <center className='g_button' >
          <a href="/Login">
            <button className='canclebuttonBlind'  >ออกจากระบบ</button>
          </a>


        </center>
      </div>
    );
  } else {
    return (
      <div className='page'>
        <div className='topper'>
          <center>ตั้งค่า</center>
        </div>
        <a onClick={changemode}>
          <div className="choice">
            <span className="textchoiceBlind">สลับเป็นโหมดสายตาปกติ</span>
          </div>
        </a>
        <a href="/setting/UserInfo">
          <div className="choice">
            <span className="textchoiceBlind">ข้อมูลส่วนตัว</span>
          </div>
        </a>
        <a href="/setting/Changepassword">
          <div className="choice">
            <span className="textchoiceBlind">เปลี่ยนรหัสผ่าน</span>
          </div>
        </a>
        <a href="/Login">
          <div className="choice">
            <span className="textchoiceBlind">ออกจากระบบ</span>
          </div>
        </a>
      </div>
    );
  }

};

export default Setting;
