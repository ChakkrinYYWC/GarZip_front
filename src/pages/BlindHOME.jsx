import './BlindHOME.css';
import React, { useState, useCallback, useContext, useEffect } from 'react'
import {
    IonContent, IonList, IonLabel,  IonThumbnail,
    IonItem,  IonPage, IonHeader, IonIcon,IonSlides, 
    IonSlide, IonCard, IonCardContent, IonCardTitle, 
    IonRouterLink
} from '@ionic/react';
import Axios from "axios";
import moment from "moment";
import { Swiper, SwiperSlide } from 'swiper/react';

const slideOpts = {
    initialSlide: 1,
    speed: 400
};

const initialState = {
    name: ''
}

const BlindHOME = () => {
    // const { state, dispatch } = useContext(AppContext);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])

    const doPlay = {

    };

    async function getData() {
        await Axios.get("http://localhost:3000/book/app", {})
            .then((res) => {
                console.log(res.data[0]);
                setData(res.data)
            })
            .catch((error) => {
                console.log('#2')
                console.log(error)
            });
    }

    useEffect(async () => {
        await getData()
        await setLoading(false);
    }, [])

    // console.log(data)
    // data.sort((a, b) => (a._id > b._id ? -1 : 1));

    // const testdata = [
    //     {
    //         title: "forth",
    //         subtitle: "forth socute",
    //         image: "https://รูปการ์ตูนน่ารักๆ.com/wp-content/uploads/2017/12/6ec5bab63858fa79f5958a9e7320655f.jpg"
    //     },
    //     {
    //         title: "forth",
    //         subtitle: "forth socute",
    //         image: "https://รูปการ์ตูนน่ารักๆ.com/wp-content/uploads/2017/12/6ec5bab63858fa79f5958a9e7320655f.jpg"
    //     },
    //     {
    //         title: "forth",
    //         subtitle: "forth socute",
    //         image: "https://รูปการ์ตูนน่ารักๆ.com/wp-content/uploads/2017/12/6ec5bab63858fa79f5958a9e7320655f.jpg"
    //     },
    //     {
    //         title: "forth",
    //         subtitle: "forth socute",
    //         image: "https://คลังสื่อการสอน.com/wp-content/uploads/2021/11/IMG_3320-1024x1024.png"
    //     },
    // ]
    return (
        <>
            {
                loading ?
                    <div>loading...</div>
                    :
                    <>
                        <IonPage className="BlindHOMEPage">
                            <IonContent fullscreen >
                                <div className="bar">
                                    <IonLabel >GARZIP</IonLabel>
                                </div>
                                {/* <a href="/login">login</a> */}

                                  
                                <IonItem className="item-list-Blind">

                                    <IonLabel className="title-category">
                                 
                                        <IonRouterLink href="/BlindBooklist/ฟังต่อ" >
                                            <IonLabel className='title-category-Blind'> ฟังต่อ </IonLabel>
                                        </IonRouterLink>
                                        <IonRouterLink href="/BlindBooklist/ยอดนิยม" >
                                            <IonLabel className='title-category-Blind'> ยอดนิยม </IonLabel>
                                        </IonRouterLink>
                                        <IonRouterLink href="/BlindBooklist/เรื่องใหม่ล่าสุด" >
                                            <IonLabel className='title-category-Blind'> เรื่องใหม่ล่าสุด </IonLabel>
                                        </IonRouterLink>
                                        <IonRouterLink href="/BlindBooklist/นิยาย" >
                                            <IonLabel className='title-category-Blind'> นิยาย </IonLabel>
                                        </IonRouterLink>
                                        <IonRouterLink href="/BlindBooklist/ธุรกิจ" >
                                            <IonLabel className='title-category-Blind'> ธุรกิจ  </IonLabel>
                                        </IonRouterLink>
                                        <IonRouterLink href="/BlindBooklist/นิทาน" >
                                            <IonLabel className='title-category-Blind'> นิทาน </IonLabel>
                                        </IonRouterLink>
                                        <IonRouterLink href="/BlindBooklistศาสนา" >
                                            <IonLabel className='title-category-Blind'> ศาสนา </IonLabel>
                                        </IonRouterLink>
                                        <IonRouterLink href="/BlindBooklist/บทความ" >
                                            <IonLabel className='title-category-Blind'> บทความ </IonLabel>
                                        </IonRouterLink>
                                        <IonRouterLink href="BlindBooklist/สืบสวน" >
                                            <IonLabel className='title-category-Blind'> สืบสวน </IonLabel>
                                        </IonRouterLink>
                                        <IonRouterLink href="/BlindBooklist/จิตวิทยา " >
                                            <IonLabel className='title-category-Blind'> จิตวิทยา </IonLabel>
                                        </IonRouterLink>
                                         <IonRouterLink href="/BlindBooklist/ทั่วไป" >
                                            <IonLabel className='title-category-Blind'> ทั่วไป </IonLabel>
                                        </IonRouterLink>
                 
                                    </IonLabel>
                                </IonItem>
                                {/* {moment(book.create_date).format("MMM DD YYYY hh:mm:ss")} */}
     
                                

                              


                            
                            </IonContent>
                        </IonPage>
                    </>
            }
        </>

    );
};

export default BlindHOME;

