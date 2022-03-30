import React, { useState, useCallback, useContext, useEffect } from 'react'
import {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
    IonRouterLink, IonIcon, IonLabel, IonItem, IonInput,
    IonSearchbar, IonFooter, IonButtons, IonBackButton,
    IonButton, IonSegment, IonSegmentButton, IonRow,
    IonCol, IonCard, IonCardContent, IonCardHeader,
    IonCardSubtitle, IonCardTitle, IonList, IonThumbnail, IonImg
} from '@ionic/react';
import './Search.css';


const Search = ({ text }) => {
    const [data, setData] = useState([])

    return (
        <>
            <IonContent fullscreen>
                {
                    text ?
                        <div className='Booklist'>
                            <h4>หมวดหมู่หนังสือ</h4>
                            <IonRow>
                                <IonCol size="6">
                                    <IonCard href='/Booklist/นิยาย' mode='md'>
                                        <IonCardHeader>
                                            <IonCardHeader>
                                            </IonCardHeader>
                                            <IonCardContent>
                                            </IonCardContent>
                                            <IonCardTitle color='black'>นิยาย</IonCardTitle>
                                        </IonCardHeader>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="6">
                                    <IonCard href='/Booklist/ธุรกิจ' mode='md'>
                                        <IonCardHeader>
                                            <IonCardHeader>
                                            </IonCardHeader>
                                            <IonCardContent>
                                            </IonCardContent>
                                            <IonCardTitle color='black'>ธุรกิจ</IonCardTitle>
                                        </IonCardHeader>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size="6">
                                    <IonCard href='/Booklist/นิทาน' mode='md'>
                                        <IonCardHeader>
                                            <IonCardHeader>
                                            </IonCardHeader>
                                            <IonCardContent>
                                            </IonCardContent>
                                            <IonCardTitle color='black'>นิทาน</IonCardTitle>
                                        </IonCardHeader>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="6">
                                    <IonCard href='/Booklist/ศาสนา' mode='md'>
                                        <IonCardHeader>
                                            <IonCardHeader>
                                            </IonCardHeader>
                                            <IonCardContent>
                                            </IonCardContent>
                                            <IonCardTitle color='black'>ศาสนา</IonCardTitle>
                                        </IonCardHeader>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size="6">
                                    <IonCard href='/Booklist/บทความ' mode='md'>
                                        <IonCardHeader>
                                            <IonCardHeader>
                                            </IonCardHeader>
                                            <IonCardContent>
                                            </IonCardContent>
                                            <IonCardTitle color='black'>บทความ</IonCardTitle>
                                        </IonCardHeader>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="6">
                                    <IonCard href='/Booklist/สืบสวน' mode='md'>
                                        <IonCardHeader>
                                            <IonCardHeader>
                                            </IonCardHeader>
                                            <IonCardContent>
                                            </IonCardContent>
                                            <IonCardTitle color='black'>สืบสวน</IonCardTitle>
                                        </IonCardHeader>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size="6">
                                    <IonCard href='/Booklist/จิตวิทยา' mode='md'>
                                        <IonCardHeader>
                                            <IonCardHeader>
                                            </IonCardHeader>
                                            <IonCardContent>
                                            </IonCardContent>
                                            <IonCardTitle color='black'>จิตวิทยา</IonCardTitle>
                                        </IonCardHeader>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="6">
                                    <IonCard href='/Booklist/ทั่วไป' mode='md'>
                                        <IonCardHeader>
                                            <IonCardHeader>
                                            </IonCardHeader>
                                            <IonCardContent>
                                            </IonCardContent>
                                            <IonCardTitle color='black'>ทั่วไป</IonCardTitle>
                                        </IonCardHeader>
                                    </IonCard>
                                </IonCol>
                            </IonRow>

                        </div>
                        :
                        <>
                            <div className='Booklist'>
                                <p>ผลการค้นหา</p>
                                <IonList >
                                    {data.map((book, i) => {
                                        return (
                                            <IonRouterLink href={`/DetailBook/${book._id}`} className="button-back">
                                                <IonItem key={i} >
                                                    <IonThumbnail slot="start" >
                                                        <IonImg src={book.image} />
                                                    </IonThumbnail>
                                                    <span className="book">
                                                        <IonLabel className='title'>{book.name}</IonLabel>
                                                        <IonLabel className='detial'>เขียนโดย : {book.auther}</IonLabel>
                                                        <IonLabel className='detial'>ระยะเวลา : 00.00 น.</IonLabel>
                                                    </span>
                                                </IonItem>
                                            </IonRouterLink>
                                        )
                                    })}
                                </IonList>
                            </div>
                        </>
                }

            </IonContent>
        </>
    );
};

export default Search;
