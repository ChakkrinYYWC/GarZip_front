import { IonContent, IonPage } from '@ionic/react';
import Axios from 'axios';
import { useState } from 'react'
import './Changepassword.css';

const Changepassword = () => {
    const [oldpassword, setoldpassword] = useState('')
    const [newpassword, setnewpassword] = useState('')
    const [confirm_newpassword, setconfirm_newpassword] = useState('')

    async function submit() {
        await Axios.put("http://localhost:3000/user/password", {
            data: {
                id: "6229b1de1bfd019fc0d0c39c",
                oldpassword: oldpassword,
                newpassword: newpassword,
                confirm_newpassword: confirm_newpassword
            }
        }).then((res) => {
            window.location.href = "/setting";
        }).catch((error) => {
            console.log(error)
        });
    }

    async function cancle() {
        window.location.href = "/setting";
    }

    const user_mode = localStorage.getItem('user_mode');
    if (user_mode === 'false'){
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
                        <button className='canclebutton' onClick={cancle} >ยกเลิก</button>
                       
                    </center>
                </IonContent>
            </IonPage>
        );
    }else{
        return (
            <IonPage className="page">
                <div className='topper'>
                    <center>เปลี่ยนรหัสผ่าน</center>
                </div>
                <IonContent fullscreen >
                    <div className='userinfochoiceBlind'>
                        <span className='text-confirmABlind'>รหัสผ่าน : </span>
                        <input
                            type="password"
                            className='input-changepasswordBlind'
                            onChange={(event) => {
                                setoldpassword(event.target.value)
                            }} />
                    </div>
                    <div className='userinfochoiceBlind'>
                        <span className='text-confirmABlind'>รหัสผ่านใหม่ : </span>
                        <input
                            type="password"
                            className='input-changepasswordBlind'
                            onChange={(event) => {
                                setnewpassword(event.target.value)
                            }} />
                    </div>
                    <div className='userinfochoiceBlind'>
                        <span className='text-confirmBlind'>ยืนยันรหัสผ่านใหม่ :  </span>
                        <input
                            type="password"
                            className='input-changepasswordBlind'
                            onChange={(event) => {
                                setconfirm_newpassword(event.target.value)
                            }} />
                    </div>
                    <center className='group_button'>
                        <button className='savebuttonBlind' onClick={submit} >บันทึก</button>
                        <button className='canclebuttonBlind' onClick={cancle} >ยกเลิก</button>
                       
                    </center>
                </IonContent>
            </IonPage>
        );
    }
};

export default Changepassword;
