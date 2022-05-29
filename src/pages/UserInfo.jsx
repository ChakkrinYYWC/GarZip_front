import { IonContent, IonPage, IonRouterLink, IonTabButton } from '@ionic/react';
import Axios from 'axios';
import { useState, useEffect } from 'react'
import './Userinfo.css';
import React from 'react'
import Setting from './Tab4';


const UserInfo = () => {
  const [data, setData] = useState([])
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const user_name = localStorage.getItem('user_name')

  async function getData() {
    console.log(user_name)
    await Axios.post("https://garzipback.herokuapp.com/user", {
      username: user_name
    }).then((res) => {
      // console.log(res.data[0])
      setData(res.data)
    }).catch((error) => {
      console.log(error)
    });
  }

  async function save() {
    await Axios.put("https://garzipback.herokuapp.com/user/all", {
      data: { id: data[0]._id, username: username, email: email }
    }).then((res) => {
      localStorage.setItem('user_name', username);
      window.location.replace("/setting");
    }).catch((error) => {
      console.log(error)
    });
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
                <span className='text'>อีเมล : </span>
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
            <IonRouterLink onclick="history.back()" className="button-back">
              <button className='canclebutton'>ยกเลิก</button>
            </IonRouterLink>
          </center>

        </IonContent>
      </IonPage>
    )
  } else {
    return (
      <IonPage className="page">
        <div className='topper'>
          <center><h4>ข้อมูลส่วนตัว</h4></center>
        </div>
        <IonContent fullscreen >
          {data.map((user, i) => (
            <div key={i}>
                <div className='userinfochoiceBlind'>
                  <span className='textBlind'><h4>ชื่อผู้ใช้งาน : </h4></span>
                  <input
                    aria-label='Enter search text'
                    type="text"
                    className='inputBlind'
                    placeholder={user.username}
                    onChange={(event) => {
                      setUsername(event.target.value)
                    }} />
                </div>
              <h8>
                <div className='userinfochoiceBlind'>
                  <span className='textBlind'><h4>อีเมล : </h4></span>
                  <input
                    type="email"
                    className='inputBlind'
                    placeholder={user.email}
                    onChange={(event) => {
                      setEmail(event.target.value)
                    }} />
                </div>
              </h8>
            </div>
          ))}
          <center className='group_buttonn' >
            <button className='savebuttonBlind' onClick={save} >บันทึก</button>
            <IonRouterLink onclick="history.back()" className="button-back">
              <button className='canclebuttonBlind'>ยกเลิก</button>
            </IonRouterLink>
          </center>

        </IonContent>
      </IonPage>
    )
  }
}

export default UserInfo;
