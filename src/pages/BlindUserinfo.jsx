import { IonContent, IonPage,IonButton } from '@ionic/react';
import Axios from 'axios';
import { useState, useEffect } from 'react'
import './BlindUserinfo.css';

const BlindUserInfo = () => {
  const [data, setData] = useState([])
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const user_name = localStorage.getItem('user_name')

  async function getData() {
    await Axios.post("http://localhost:3000/user", {
      username: user_name
    }).then((res) => {
      console.log(res.data[0])
      setData(res.data)
    }).catch((error) => {
      console.log(error)
    });
  }

  async function save() {
    await Axios.put("http://localhost:3000/user/all", {
      data: { id: data[0]._id, username: username, email: email }
    }).then((res) => {
      window.location.href = "/Blindsetting";
    }).catch((error) => {
      console.log(error)
    });
  }

  async function cancle() {
    window.location.href = "/Blindsetting";
  }

  useEffect(async () => {
    await getData()
  }, [])

  return (
    <IonPage className="page">
      <div className='topper'>
        <center>ข้อมูลส่วนตัว</center>
      </div>
      <IonContent fullscreen >
        {data.map((user, i) => (
          <div key={i}>
            <div className='userinfochoice'>
              <div className='textBlind'>ชื่อผู้ใช้งาน : </div>
              <input
                type="text"
                className='input'
                placeholder={user.username}
                onChange={(event) => {
                  setUsername(event.target.value)
                }} />
            </div>
            <div className='userinfochoice'>
              <span className='textBlind'>อีเมล์ : </span>
              <input
                type="email"
                className='input'
                placeholder={user.email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }} />
            </div>
          </div>
        ))}
        <center className='g_button' >
          <button className='savebuttonBlind' onClick={save} >บันทึก</button>
          <button className='canclebuttonBlind' onClick={cancle} >ยกเลิก</button>
        </center>
         
      </IonContent>
    </IonPage>
  );
};

export default BlindUserInfo;
