import './Home.css';
import React, { useState, useCallback, useContext } from 'react'
import {
    IonContent, IonList, IonListHeader,
    IonLabel, IonGrid, IonRow, IonThumbnail,
    IonItem, IonCol, IonTitle, IonHeader, IonToolbar
} from '@ionic/react';

interface ContainerProps {
    name: string;
}

const Home = () => {
    // const { state, dispatch } = useContext(AppContext);

    const doPlay = {

    };

    return (
        // <div className="container">
        //   <strong>{name}</strong>
        // </div>
        <IonContent>
            <IonListHeader>
                
            </IonListHeader>
            <IonListHeader>
                
            </IonListHeader>
            <IonListHeader>
                
            </IonListHeader>
            <IonHeader collapse="condense">
                <IonTitle size="large" >Garzip</IonTitle>
            </IonHeader>
            <IonList>
                <IonListHeader>
                    <IonLabel>ฟังต่อ</IonLabel>
                </IonListHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol
                            size="3"
                            className="new-track"
                            onClick={() => doPlay}>
                            <img src="assets/icon/icon.png" />
                            <IonLabel>
                                <h3>test1</h3>
                                <p>test2</p>
                            </IonLabel>
                        </IonCol>
                        <IonCol
                            size="3"
                            className="new-track"
                            onClick={() => doPlay}>
                            <img src="assets/icon/icon.png" />
                            <IonLabel>
                                <h3>test1</h3>
                                <p>test2</p>
                            </IonLabel>
                        </IonCol> <IonCol
                            size="3"
                            className="new-track"
                            onClick={() => doPlay}>
                            <img src="assets/icon/icon.png" />
                            <IonLabel>
                                <h3>test1</h3>
                                <p>test2</p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonList>

            <IonList>
                <IonListHeader>
                    <IonLabel>ยอดนิยม</IonLabel>
                </IonListHeader>
                <IonItem onClick={() => doPlay} button>
                    <IonThumbnail slot="start">
                        <img src="assets/icon/icon.png" />
                    </IonThumbnail>
                    <IonLabel>
                        <h2>test3</h2>
                        <p>test4</p>
                    </IonLabel>
                </IonItem>
                <IonItem onClick={() => doPlay} button>
                    <IonThumbnail slot="start">
                        <img src="assets/icon/icon.png" />
                    </IonThumbnail>
                    <IonLabel>
                        <h2>test3</h2>
                        <p>test4</p>
                    </IonLabel>
                </IonItem>
                <IonItem onClick={() => doPlay} button>
                    <IonThumbnail slot="start">
                        <img src="assets/icon/icon.png" />
                    </IonThumbnail>
                    <IonLabel>
                        <h2>test3</h2>
                        <p>test4</p>
                    </IonLabel>
                </IonItem>
            </IonList>
            <IonList>
                <IonListHeader>
                    <IonLabel>นิยาย</IonLabel>
                </IonListHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol
                            size="3"
                            className="new-track"
                            onClick={() => doPlay}>
                            <img src="assets/icon/icon.png" />
                            <IonLabel>
                                <h3>test1</h3>
                                <p>test2</p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonList>
            <IonList>
                <IonListHeader>
                    <IonLabel>ธุรกิจ</IonLabel>
                </IonListHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol
                            size="3"
                            className="new-track"
                            onClick={() => doPlay}>
                            <img src="assets/icon/icon.png" />
                            <IonLabel>
                                <h3>test1</h3>
                                <p>test2</p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonList>
            <IonList>
                <IonListHeader>
                    <IonLabel>นิทาน</IonLabel>
                </IonListHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol
                            size="3"
                            className="new-track"
                            onClick={() => doPlay}>
                            <img src="assets/icon/icon.png" />
                            <IonLabel>
                                <h3>test1</h3>
                                <p>test2</p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonList>
            <IonList>
                <IonListHeader>
                    <IonLabel>ศาสนา</IonLabel>
                </IonListHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol
                            size="3"
                            className="new-track"
                            onClick={() => doPlay}>
                            <img src="assets/icon/icon.png" />
                            <IonLabel>
                                <h3>test1</h3>
                                <p>test2</p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonList>
            <IonList>
                <IonListHeader>
                    <IonLabel>บทความ</IonLabel>
                </IonListHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol
                            size="3"
                            className="new-track"
                            onClick={() => doPlay}>
                            <img src="assets/icon/icon.png" />
                            <IonLabel>
                                <h3>test1</h3>
                                <p>test2</p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonList>
            <IonList>
                <IonListHeader>
                    <IonLabel>สืบสวน</IonLabel>
                </IonListHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol
                            size="3"
                            className="new-track"
                            onClick={() => doPlay}>
                            <img src="assets/icon/icon.png" />
                            <IonLabel>
                                <h3>test1</h3>
                                <p>test2</p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonList>
            <IonList>
                <IonListHeader>
                    <IonLabel>จิตวิทยา</IonLabel>
                </IonListHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol
                            size="3"
                            className="new-track"
                            onClick={() => doPlay}>
                            <img src="assets/icon/icon.png" />
                            <IonLabel>
                                <h3>test1</h3>
                                <p>test2</p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonList>
            <IonList>
                <IonListHeader>
                    <IonLabel>ทั่วไป</IonLabel>
                </IonListHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol
                            size="3"
                            className="new-track"
                            onClick={() => doPlay}>
                            <img src="assets/icon/icon.png" />
                            <IonLabel>
                                <h3>test1</h3>
                                <p>test2</p>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonList>

        </IonContent>
    );
};

export default Home;
