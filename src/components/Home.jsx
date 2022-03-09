import './Home.css';
import React, { useState, useCallback, useContext, useEffect } from 'react'
import {
    IonContent, IonList, IonListHeader,
    IonLabel, IonGrid, IonRow, IonThumbnail,
    IonItem, IonCol, IonTitle, IonHeader, IonToolbar
} from '@ionic/react';
import Axios from "axios";

const initialState = {
    name: ''
}

const Home = () => {
    // const { state, dispatch } = useContext(AppContext);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])
    const [test, setTest] = useState(345)
    
    const doPlay = {

    };

    async function getData(){
        await Axios.get("http://localhost:3000/book/app",{})
            .then((res) => {
                // console.log(res.data[0]);
                setData(res.data)
            })
            .catch((error) => {
                console.log('#2')
                console.log(error)
            });
    } 

    useEffect(async() => {
        await getData()
        await setLoading(false);
    }, [])

    console.log(data)
    data.sort((a, b) => (a._id > b._id ? -1 : 1));
    return (
        <>
            {
                loading ?
                <div>loading...</div>
                :
                <>
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
                                            <h3>##test##</h3>
                                            <p>##test##</p>
                                        </IonLabel>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonList>
                        
                        {/* <IonList>
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
                        </IonList> */}
                        {/* {data.filter(cate => cate.category == 'นิยาย').map(book => {
                            return(
                                <>
                                    <IonGrid>
                                        <h1> name : {book.name}</h1>
                                    </IonGrid>
                                    
                                </>
                            )
                        })} */}
                        <IonList>
                            <IonListHeader>
                                <IonLabel>นิยาย</IonLabel>
                            </IonListHeader>
                            <IonGrid>
                                <IonRow>
                                    { data.filter(cate => cate.category == 'นิยาย').map((book, index) => {
                                        return(
                                            <>

                                                <IonCol
                                                size="3"
                                                // className="new-track"
                                                onClick={() => doPlay}>
                                                <img src={book.image} />
                                                    <IonLabel>
                                                        <h3>{book.name}</h3>
                                                        <p>{book.auther}</p>
                                                        <p>{book.trailer}</p>
                                                        <p>{book.view}</p>
                                                    </IonLabel>
                                                </IonCol>
                                        
                                            </>
                                        )
                                    })}
                                </IonRow>
                            </IonGrid>
                        </IonList>

                        <IonList>
                            <IonListHeader>
                                <IonLabel>ธุรกิจ</IonLabel>
                            </IonListHeader>
                            <IonGrid>
                                <IonRow>
                                    { data.filter(cate => cate.category == 'ธุรกิจ').map((book, index) => {
                                        return(
                                            <>

                                                <IonCol
                                                size="3"
                                                // className="new-track"
                                                onClick={() => doPlay}>
                                                <img src={book.image} />
                                                    <IonLabel>
                                                        <h3>{book.name}</h3>
                                                        <p>{book.auther}</p>
                                                        <p>{book.trailer}</p>
                                                        <p>{book.view}</p>
                                                    </IonLabel>
                                                </IonCol>
                                        
                                            </>
                                        )
                                    })}
                                </IonRow>
                            </IonGrid>
                        </IonList>
                        <IonList>
                            <IonListHeader>
                                <IonLabel>นิทาน</IonLabel>
                            </IonListHeader>
                            <IonGrid>
                                <IonRow>
                                    { data.filter(cate => cate.category == 'นิทาน').map((book, index) => {
                                        return(
                                            <>

                                                <IonCol
                                                size="3"
                                                // className="new-track"
                                                onClick={() => doPlay}>
                                                <img src={book.image} />
                                                    <IonLabel>
                                                        <h3>{book.name}</h3>
                                                        <p>{book.auther}</p>
                                                        <p>{book.trailer}</p>
                                                        <p>{book.view}</p>
                                                    </IonLabel>
                                                </IonCol>
                                        
                                            </>
                                        )
                                    })}
                                </IonRow>
                            </IonGrid>
                        </IonList>
                        <IonList>
                            <IonListHeader>
                                <IonLabel>ศาสนา</IonLabel>
                            </IonListHeader>
                            <IonGrid>
                                <IonRow>
                                    { data.filter(cate => cate.category == 'ศาสนา').map((book, index) => {
                                        return(
                                            <>

                                                <IonCol
                                                size="3"
                                                // className="new-track"
                                                onClick={() => doPlay}>
                                                <img src={book.image} />
                                                    <IonLabel>
                                                        <h3>{book.name}</h3>
                                                        <p>{book.auther}</p>
                                                        <p>{book.trailer}</p>
                                                        <p>{book.view}</p>
                                                    </IonLabel>
                                                </IonCol>
                                        
                                            </>
                                        )
                                    })}
                                </IonRow>
                            </IonGrid>
                        </IonList>
                        <IonList>
                            <IonListHeader>
                                <IonLabel>บทความ</IonLabel>
                            </IonListHeader>
                            <IonGrid>
                                <IonRow>
                                    { data.filter(cate => cate.category == 'บทความ').map((book, index) => {
                                        return(
                                            <>

                                                <IonCol
                                                size="3"
                                                // className="new-track"
                                                onClick={() => doPlay}>
                                                <img src={book.image} />
                                                    <IonLabel>
                                                        <h3>{book.name}</h3>
                                                        <p>{book.auther}</p>
                                                        <p>{book.trailer}</p>
                                                        <p>{book.view}</p>
                                                    </IonLabel>
                                                </IonCol>
                                        
                                            </>
                                        )
                                    })}
                                </IonRow>
                            </IonGrid>
                        </IonList>
                        <IonList>
                            <IonListHeader>
                                <IonLabel>สืบสวน</IonLabel>
                            </IonListHeader>
                            <IonGrid>
                                <IonRow>
                                    { data.filter(cate => cate.category == 'สืบสวน').map((book, index) => {
                                        return(
                                            <>

                                                <IonCol
                                                size="3"
                                                // className="new-track"
                                                onClick={() => doPlay}>
                                                <img src={book.image} />
                                                    <IonLabel>
                                                        <h3>{book.name}</h3>
                                                        <p>{book.auther}</p>
                                                        <p>{book.trailer}</p>
                                                        <p>{book.view}</p>
                                                    </IonLabel>
                                                </IonCol>
                                        
                                            </>
                                        )
                                    })}
                                </IonRow>
                            </IonGrid>
                        </IonList>
                        <IonList>
                            <IonListHeader>
                                <IonLabel>จิตวิทยา</IonLabel>
                            </IonListHeader>
                            <IonGrid>
                                <IonRow>
                                    { data.filter(cate => cate.category == 'จิตวิทยา').map((book, index) => {
                                        return(
                                            <>

                                                <IonCol
                                                size="3"
                                                // className="new-track"
                                                onClick={() => doPlay}>
                                                <img src={book.image} />
                                                    <IonLabel>
                                                        <h3>{book.name}</h3>
                                                        <p>{book.auther}</p>
                                                        <p>{book.trailer}</p>
                                                        <p>{book.view}</p>
                                                    </IonLabel>
                                                </IonCol>
                                        
                                            </>
                                        )
                                    })}
                                </IonRow>
                            </IonGrid>
                        </IonList>
                        <IonList>
                            <IonListHeader>
                                <IonLabel>ทั่วไป</IonLabel>
                            </IonListHeader>
                            <IonGrid>
                                <IonRow>
                                    { data.filter(cate => cate.category == 'ทั่วไป').map((book, index) => {
                                        return(
                                            <>

                                                <IonCol
                                                size="3"
                                                // className="new-track"
                                                onClick={() => doPlay}>
                                                <img src={book.image} />
                                                    <IonLabel>
                                                        <h3>{book.name}</h3>
                                                        <p>{book.auther}</p>
                                                        <p>{book.trailer}</p>
                                                        <p>{book.view}</p>
                                                    </IonLabel>
                                                </IonCol>
                                        
                                            </>
                                        )
                                    })}
                                </IonRow>
                            </IonGrid>
                        </IonList>
                    </IonContent> 
                </>
            }
        </>

    );
};

export default Home;

// return (
//     // <div className="container">
//     //   <strong>{name}</strong>
//     // </div>
//     <IonContent>
//         <IonListHeader>

//         </IonListHeader>
//         <IonListHeader>

//         </IonListHeader>
//         <IonListHeader>

//         </IonListHeader>
//         <IonHeader collapse="condense">
//             <IonTitle size="large" >Garzip</IonTitle>
//         </IonHeader>
        
//         <IonList>
//             <IonListHeader>
//                 <IonLabel>ฟังต่อ</IonLabel>
//             </IonListHeader>
//             <IonGrid>
//                 <IonRow>
//                     <IonCol
//                         size="3"
//                         className="new-track"
//                         onClick={() => doPlay}>
//                         <img src="assets/icon/icon.png" />
//                         <IonLabel>
//                             <h3>test1</h3>
//                             <p>test2</p>
//                         </IonLabel>
//                     </IonCol>
//                     <IonCol
//                         size="3"
//                         className="new-track"
//                         onClick={() => doPlay}>
//                         <img src="assets/icon/icon.png" />
//                         <IonLabel>
//                             <h3>test1</h3>
//                             <p>test2</p>
//                         </IonLabel>
//                     </IonCol> <IonCol
//                         size="3"
//                         className="new-track"
//                         onClick={() => doPlay}>
//                         <img src="assets/icon/icon.png" />
//                         <IonLabel>
//                             <h3>test1</h3>
//                             <p>test2</p>
//                         </IonLabel>
//                     </IonCol>
//                 </IonRow>
//             </IonGrid>
//         </IonList>

//         <IonList>
//             <IonListHeader>
//                 <IonLabel>ยอดนิยม</IonLabel>
//             </IonListHeader>
//             <IonItem onClick={() => doPlay} button>
//                 <IonThumbnail slot="start">
//                     <img src="assets/icon/icon.png" />
//                 </IonThumbnail>
//                 <IonLabel>
//                     <h2>test3</h2>
//                     <p>test4</p>
//                 </IonLabel>
//             </IonItem>
//             <IonItem onClick={() => doPlay} button>
//                 <IonThumbnail slot="start">
//                     <img src="assets/icon/icon.png" />
//                 </IonThumbnail>
//                 <IonLabel>
//                     <h2>test3</h2>
//                     <p>test4</p>
//                 </IonLabel>
//             </IonItem>
//             <IonItem onClick={() => doPlay} button>
//                 <IonThumbnail slot="start">
//                     <img src="assets/icon/icon.png" />
//                 </IonThumbnail>
//                 <IonLabel>
//                     <h2>test3</h2>
//                     <p>test4</p>
//                 </IonLabel>
//             </IonItem>
//         </IonList>
//         <IonList>
//             <IonListHeader>
//                 <IonLabel>นิยาย</IonLabel>
//             </IonListHeader>
//             <IonGrid>
//                 <IonRow>
//                     <IonCol
//                         size="3"
//                         className="new-track"
//                         onClick={() => doPlay}>
//                         <img src="assets/icon/icon.png" />
//                         <IonLabel>
//                             <h3>test1</h3>
//                             <p>test2</p>
//                         </IonLabel>
//                     </IonCol>
//                 </IonRow>
//             </IonGrid>
//         </IonList>
//         <IonList>
//             <IonListHeader>
//                 <IonLabel>ธุรกิจ</IonLabel>
//             </IonListHeader>
//             <IonGrid>
//                 <IonRow>
//                     <IonCol
//                         size="3"
//                         className="new-track"
//                         onClick={() => doPlay}>
//                         <img src="assets/icon/icon.png" />
//                         <IonLabel>
//                             <h3>test1</h3>
//                             <p>test2</p>
//                         </IonLabel>
//                     </IonCol>
//                 </IonRow>
//             </IonGrid>
//         </IonList>
//         <IonList>
//             <IonListHeader>
//                 <IonLabel>นิทาน</IonLabel>
//             </IonListHeader>
//             <IonGrid>
//                 <IonRow>
//                     <IonCol
//                         size="3"
//                         className="new-track"
//                         onClick={() => doPlay}>
//                         <img src="assets/icon/icon.png" />
//                         <IonLabel>
//                             <h3>test1</h3>
//                             <p>test2</p>
//                         </IonLabel>
//                     </IonCol>
//                 </IonRow>
//             </IonGrid>
//         </IonList>
//         <IonList>
//             <IonListHeader>
//                 <IonLabel>ศาสนา</IonLabel>
//             </IonListHeader>
//             <IonGrid>
//                 <IonRow>
//                     <IonCol
//                         size="3"
//                         className="new-track"
//                         onClick={() => doPlay}>
//                         <img src="assets/icon/icon.png" />
//                         <IonLabel>
//                             <h3>test1</h3>
//                             <p>test2</p>
//                         </IonLabel>
//                     </IonCol>
//                 </IonRow>
//             </IonGrid>
//         </IonList>
//         <IonList>
//             <IonListHeader>
//                 <IonLabel>บทความ</IonLabel>
//             </IonListHeader>
//             <IonGrid>
//                 <IonRow>
//                     <IonCol
//                         size="3"
//                         className="new-track"
//                         onClick={() => doPlay}>
//                         <img src="assets/icon/icon.png" />
//                         <IonLabel>
//                             <h3>test1</h3>
//                             <p>test2</p>
//                         </IonLabel>
//                     </IonCol>
//                 </IonRow>
//             </IonGrid>
//         </IonList>
//         <IonList>
//             <IonListHeader>
//                 <IonLabel>สืบสวน</IonLabel>
//             </IonListHeader>
//             <IonGrid>
//                 <IonRow>
//                     <IonCol
//                         size="3"
//                         className="new-track"
//                         onClick={() => doPlay}>
//                         <img src="assets/icon/icon.png" />
//                         <IonLabel>
//                             <h3>test1</h3>
//                             <p>test2</p>
//                         </IonLabel>
//                     </IonCol>
//                 </IonRow>
//             </IonGrid>
//         </IonList>
//         <IonList>
//             <IonListHeader>
//                 <IonLabel>จิตวิทยา</IonLabel>
//             </IonListHeader>
//             <IonGrid>
//                 <IonRow>
//                     <IonCol
//                         size="3"
//                         className="new-track"
//                         onClick={() => doPlay}>
//                         <img src="assets/icon/icon.png" />
//                         <IonLabel>
//                             <h3>test1</h3>
//                             <p>test2</p>
//                         </IonLabel>
//                     </IonCol>
//                 </IonRow>
//             </IonGrid>
//         </IonList>
//         <IonList>
//             <IonListHeader>
//                 <IonLabel>ทั่วไป</IonLabel>
//             </IonListHeader>
//             <IonGrid>
//                 <IonRow>
//                     <IonCol
//                         size="3"
//                         className="new-track"
//                         onClick={() => doPlay}>
//                         <img src="assets/icon/icon.png" />
//                         <IonLabel>
//                             <h3>test1</h3>
//                             <p>test2</p>
//                         </IonLabel>
//                     </IonCol>
//                 </IonRow>
//             </IonGrid>
//         </IonList>

//     </IonContent>
// );
