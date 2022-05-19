import { IonContent, IonPage, IonButton } from '@ionic/react';
import Axios from 'axios';
import { useState, useEffect } from 'react'
import './Userinfo.css';
import React from 'react'


const UserInfo = () => {
  const [data, setData] = useState([])
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const user_name = localStorage.getItem('user_name')

  async function getData() {
    await Axios.post("http://localhost:3000/user", {
      username: user_name
    }).then((res) => {
      // console.log(res.data[0])
      setData(res.data)
    }).catch((error) => {
      console.log(error)
    });
  }

  async function save() {
    await Axios.put("http://localhost:3000/user/all", {
      data: { id: data[0]._id, username: username, email: email }
    }).then((res) => {
      window.location.href = "/setting";
    }).catch((error) => {
      console.log(error)
    });
  }

  async function cancle() {
    window.location.href = "/setting";
  }

  useEffect(async () => {
    await getData()
  }, [])
  const user_mode = localStorage.getItem('user_mode');
  if (user_mode === 'false') {
    return (
      <IonPage className="page">
        <div className='topper'>
          <center>ข้อมูลส่วนตัว</center>
        </div>
        <IonContent fullscreen >
          {data.map((user, i) => (
            <div key={i}>
              <div className='userinfochoice'>
                <span className='text'>ชื่อผู้ใช้งาน : </span>
                <input
                  type="text"
                  className='input'
                  placeholder={user.username}
                  onChange={(event) => {
                    setUsername(event.target.value)
                  }} />
              </div>
              <div className='userinfochoice'>
                <span className='text'>อีเมล์ : </span>
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
          <center className='group_button' >
            <button className='savebutton' onClick={save} >บันทึก</button>
            <button className='canclebutton' onClick={cancle} >ยกเลิก</button>
          </center>

        </IonContent>
      </IonPage>
    )
  } else {
    return (
      <IonPage className="page">
        <div className='topper'>
          <center>ข้อมูลส่วนตัว</center>
        </div>
        <IonContent fullscreen >
          {data.map((user, i) => (
            <div key={i}>
              <div className='userinfochoiceBlind'>
                <span className='textBlind'>ชื่อผู้ใช้งาน : </span>
                <input
                  type="text"
                  className='inputBlind'
                  placeholder={user.username}
                  onChange={(event) => {
                    setUsername(event.target.value)
                  }} />
              </div>
              <div className='userinfochoiceBlind'>
                <span className='textBlind'>อีเมล์ : </span>
                <input
                  type="email"
                  className='inputBlind'
                  placeholder={user.email}
                  onChange={(event) => {
                    setEmail(event.target.value)
                  }} />
              </div>
            </div>
          ))}
          <center className='group_buttonn' >
            <button className='savebuttonBlind' onClick={save} >บันทึก</button>
            <button className='canclebuttonBlind' onClick={cancle} >ยกเลิก</button>
          </center>

        </IonContent>
      </IonPage>
    )
  }
}

export default UserInfo;
