import { IonContent, IonPage } from '@ionic/react';
import Axios from 'axios';
import { useState, useEffect } from 'react'
import './Userinfo.css';

const UserInfo = () => {
  const [data, setData] = useState([])
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const user_name = localStorage.getItem('user_name')

  async function getData() {
    await Axios.post("http://localhost:3000/user", {
      data: { username: user_name }
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

  return (
    <IonPage className="page">
      <IonContent fullscreen >
        {data.map((user, i) => (
          <div key={i}>
            <div className='userinfochoice'>
              <span className='text'>Username : </span>
              <input
                type="text"
                className='input'
                placeholder={user.username}
                onChange={(event) => {
                  setUsername(event.target.value)
                }} />
            </div>
            <div className='userinfochoice'>
              <span className='text'>Email : </span>
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
        <center>
          <button className='canclebutton' onClick={cancle} >Cancle</button>
          <button className='savebutton' onClick={save} >Save</button>
        </center>
      </IonContent>
    </IonPage>
  );
};

export default UserInfo;
