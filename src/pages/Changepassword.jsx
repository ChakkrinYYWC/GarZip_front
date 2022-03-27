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

    return (
        <IonPage className="page">
            <IonContent fullscreen >
                <div className='userinfochoice'>
                    <span className='text'>Password : </span>
                    <input
                        type="password"
                        className='input'
                        onChange={(event) => {
                            setoldpassword(event.target.value)
                        }} />
                </div>
                <div className='userinfochoice'>
                    <span className='text'>New password : </span>
                    <input
                        type="password"
                        className='input'
                        onChange={(event) => {
                            setnewpassword(event.target.value)
                        }} />
                </div>
                <div className='userinfochoice'>
                    <span className='text'>Confirm new password : </span>
                    <input
                        type="password"
                        className='input'
                        onChange={(event) => {
                            setconfirm_newpassword(event.target.value)
                        }} />
                </div>
                <center>
                    <button className='cancle1button' onClick={cancle} >Cancle</button>
                    <button className='submitbutton' onClick={submit} >Submit</button>
                </center>
            </IonContent>
        </IonPage>
    );
};

export default Changepassword;
