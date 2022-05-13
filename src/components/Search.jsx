import React, { useState, useCallback, useContext, useEffect } from 'react'
import {
    IonContent,
    IonRouterLink, IonIcon, IonLabel, IonItem, IonRow,
    IonCol, IonCard, IonCardContent, IonCardHeader,
    IonCardTitle, IonList, IonThumbnail, IonImg
} from '@ionic/react';
import './Search.css';
import { If, Then, ElseIf, Else } from "react-if-elseif-else-render";


const Search = ({ text, bookinfo, mode }) => {
    return (
        <>
            <IonContent fullscreen>
                {
                    text ?
                        <div className='Booklist_search'>
                            <IonLabel className='name_catagory'>หมวดหมู่หนังสือ</IonLabel>
                            <IonRow className='col_catagory'>
                                <IonCol size="6" className="set_col">
                                    <IonCard href='/Booklist/นิยาย' mode='md' className='box_catagory1 box'>
                                        <IonCardHeader>
                                            <IonCardHeader>
                                            </IonCardHeader>
                                            <IonCardContent>
                                            </IonCardContent>
                                            <IonCardTitle className='text_catagory1 textname'>นิยาย</IonCardTitle>
                                        </IonCardHeader>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="6" className="set_col">
                                    <IonCard href='/Booklist/ธุรกิจ' mode='md' className='box_catagory2 box'>
                                        <IonCardHeader>
                                            <IonCardHeader>
                                            </IonCardHeader>
                                            <IonCardContent>
                                            </IonCardContent>
                                            <IonCardTitle className='text_catagory2 textname'>ธุรกิจ</IonCardTitle>
                                        </IonCardHeader>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                            <IonRow className='col_catagory'>
                                <IonCol size="6" className="set_col">
                                    <IonCard href='/Booklist/นิทาน' mode='md' className='box_catagory3 box'>
                                        <IonCardHeader>
                                            <IonCardHeader>
                                            </IonCardHeader>
                                            <IonCardContent>
                                            </IonCardContent>
                                            <IonCardTitle className='text_catagory3 textname'>นิทาน</IonCardTitle>
                                        </IonCardHeader>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="6" className="set_col">
                                    <IonCard href='/Booklist/ศาสนา' mode='md' className='box_catagory4 box'>
                                        <IonCardHeader>
                                            <IonCardHeader>
                                            </IonCardHeader>
                                            <IonCardContent>
                                            </IonCardContent>
                                            <IonCardTitle className='text_catagory4 textname'>ศาสนา</IonCardTitle>
                                        </IonCardHeader>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                            <IonRow className='col_catagory'>
                                <IonCol size="6" className="set_col">
                                    <IonCard href='/Booklist/บทความ' mode='md' className='box_catagory5 box'>
                                        <IonCardHeader>
                                            <IonCardHeader>
                                            </IonCardHeader>
                                            <IonCardContent>
                                            </IonCardContent>
                                            <IonCardTitle className='text_catagory5 textname'>บทความ</IonCardTitle>
                                        </IonCardHeader>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="6" className="set_col">
                                    <IonCard href='/Booklist/สืบสวน' mode='md' className='box_catagory6 box'>
                                        <IonCardHeader>
                                            <IonCardHeader>
                                            </IonCardHeader>
                                            <IonCardContent>
                                            </IonCardContent>
                                            <IonCardTitle className='text_catagory6 textname'>สืบสวน</IonCardTitle>
                                        </IonCardHeader>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                            <IonRow className='col_catagory'>
                                <IonCol size="6" className="set_col">
                                    <IonCard href='/Booklist/จิตวิทยา' mode='md' className='box_catagory7 box'>
                                        <IonCardHeader>
                                            <IonCardHeader>
                                            </IonCardHeader>
                                            <IonCardContent>
                                            </IonCardContent>
                                            <IonCardTitle className='text_catagory7 textname'>จิตวิทยา</IonCardTitle>
                                        </IonCardHeader>
                                    </IonCard>
                                </IonCol>
                                <IonCol size="6" className="set_col">
                                    <IonCard href='/Booklist/ทั่วไป' mode='md' className='box_catagory8 box'>
                                        <IonCardHeader>
                                            <IonCardHeader>
                                            </IonCardHeader>
                                            <IonCardContent>
                                            </IonCardContent>
                                            <IonCardTitle className='text_catagory8 textname'>ทั่วไป</IonCardTitle>
                                        </IonCardHeader>
                                    </IonCard>
                                </IonCol>
                            </IonRow>

                        </div>
                        :
                        <>
                            <div className='Booklist'>
                                <div className='search_results'>ผลการค้นหา</div>
                                <If condition={mode == 'all'}>
                                    <Then>
                                        <IonList className='search_list'>
                                            {bookinfo.found_book_name.map((book, i) => {
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
                                        <IonList className='search_list'>
                                            {bookinfo.fonud_book_auther.map((book, i) => {
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
                                    </Then>
                                    <ElseIf condition={mode == 'name'}>
                                        <IonList className='search_list'>
                                            {bookinfo.found_book_name.map((book, i) => {
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
                                    </ElseIf>
                                    <ElseIf condition={mode == 'auther'}>
                                        <IonList className='search_list'>
                                            {bookinfo.fonud_book_auther.map((book, i) => {
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
                                    </ElseIf>
                                </If>
                            </div>
                        </>
                }

            </IonContent>
        </>
    );
};

export default Search;
