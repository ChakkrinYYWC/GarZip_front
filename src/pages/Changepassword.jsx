import { IonContent, IonPage, IonRouterLink } from '@ionic/react';
import Axios from 'axios';
import { useState } from 'react'
import './Changepassword.css';
import React from 'react'

const Changepassword = () => {
    const [oldpassword, setoldpassword] = useState('')
    const [newpassword, setnewpassword] = useState('')
    const [confirm_newpassword, setconfirm_newpassword] = useState('')

    async function submit() {
        const user_id = localStorage.getItem('user_id')
        await Axios.put("https://garzipback.herokuapp.com/user/password", {
            data: {
                id: user_id,
                oldpassword: oldpassword,
                newpassword: newpassword,
                confirm_newpassword: confirm_newpassword
            }
        }).then((res) => {
            window.location.replace("/setting");
        }).catch((error) => {
            console.log(error)
        });
    }

    const user_mode = localStorage.getItem('user_mode');
    if (user_mode === 'false') {
        return (
            <IonPage className="page">
                <div className='topper'>
                    <center>เปลี่ยนรหัสผ่าน</center>
                </div>
                <IonContent fullscreen >
                    <div className='userinfochoice'>
                        <span className='text'>รหัสผ่าน : </span>
                        <input
                            type="password"
                            className='input-changepassword'
                            onChange={(event) => {
                                setoldpassword(event.target.value)
                            }} />
                    </div>
                    <div className='userinfochoice'>
                        <span className='text'>รหัสผ่านใหม่ : </span>
                        <input
                            type="password"
                            className='input-changepassword'
                            onChange={(event) => {
                                setnewpassword(event.target.value)
                            }} />
                    </div>
                    <div className='userinfochoice'>
                        <span className='text-confirm'>ยืนยันรหัสผ่านใหม่ :  </span>
                        <input
                            type="password"
                            className='input-changepassword'
                            onChange={(event) => {
                                setconfirm_newpassword(event.target.value)
                            }} />
                    </div>
                    <center className='group_button'>
                        <button className='savebutton' onClick={submit} >บันทึก</button>
                        <IonRouterLink onclick="history.back()" className="button-back">
                            <button className='canclebutton'>ยกเลิก</button>
                        </IonRouterLink>
                    </center>
                </IonContent>
            </IonPage>
        );
    } else {
        return (
            <IonPage className="page">
                <div className='topper'>
                    <center><h1>เปลี่ยนรหัสผ่าน</h1></center>
                </div>
                <IonContent fullscreen >
                    <div className='userinfochoiceBlind'>
                        <span className='text-confirmABlind'><h4>รหัสผ่าน : </h4></span>
                        <input
                            type="password"
                            className='input-changepasswordBlind'
                            onChange={(event) => {
                                setoldpassword(event.target.value)
                            }} />
                    </div>
                    <div className='userinfochoiceBlind'>
                        <span className='text-confirmABlind'><h4>รหัสผ่านใหม่ : </h4></span>
                        <input
                            type="password"
                            className='input-changepasswordBlind'
                            onChange={(event) => {
                                setnewpassword(event.target.value)
                            }} />
                    </div>
                    <div className='userinfochoiceBlind'>
                        <span className='text-confirmBlind'><h4>ยืนยันรหัสผ่านใหม่ :  </h4></span>
                        <input
                            type="password"
                            className='input-changepasswordBlind'
                            onChange={(event) => {
                                setconfirm_newpassword(event.target.value)
                            }} />
                    </div>
                    <center className='group_button'>
                        <button className='savebuttonBlind' onClick={submit} >บันทึก</button>
                        <IonRouterLink onclick="history.back()" className="button-back">
                            <button className='canclebuttonBlind'>ยกเลิก</button>
                        </IonRouterLink>
                    </center>
                </IonContent>
            </IonPage>
        );
    }
};

export default Changepassword;
