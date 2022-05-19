import React, { useState, useEffect } from 'react'
import {
  IonContent, IonPage, IonImg, IonText, IonIcon, IonLabel, IonButton,
  IonItem, IonRouterLink, IonRange, IonList, IonButtons, IonThumbnail
} from '@ionic/react';
import './DetailBook.css';
import Axios from "axios";
import Speech from 'speak-tts'
import { wait } from '@testing-library/react';

const items = [
  {
    src: 'https://images-se-ed.com/ws/Storage/Originals/978616/780/9786167809236L.jpg?h=a04eeda4648924e7fed88f7ec858a74c',
    text: 'ตอนที่1 : รักแรกพบ',
    who: 'จันจิรา',
    time: '12:34'

  },
  {
    src: 'https://images-se-ed.com/ws/Storage/Originals/978616/780/9786167809236L.jpg?h=a04eeda4648924e7fed88f7ec858a74c',
    text: 'ตอนที่2 : รักข้างเดียว',
    who: 'จันจิรา',
    time: '12:34'

  },
  {
    src: 'https://images-se-ed.com/ws/Storage/Originals/978616/780/9786167809236L.jpg?h=a04eeda4648924e7fed88f7ec858a74c',
    text: 'ตอนที่3 : รักเรามันเก่าไป',
    who: 'จันจิรา',
    time: '12:34'

  }
]

const DetailBook = ({ ...props }) => {

  // const [name, setName] = useState(props.match.params.id)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const [story, setStory] = useState('')
  const [play, setPlay] = useState(true)

  const speech = new Speech()
  async function getData() {
    await Axios.get("http://localhost:3000/book/app/detail/" + props.match.params.id, {})
      .then((res) => {
        // console.log(res.data[0].text);
        setStory(res.data[0].text)
        setData(res.data)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  useEffect(async () => {
    await getData()
    await setLoading(false);
  }, [])

  speech.init({
    'volume': 0.5,
    'lang': 'th-TH',
    'rate': 1,
    'pitch': 0.125,
    'splitSentences': true,
    // 'listeners': {
    //   'onvoiceschanged': (voices) => {
    //     console.log("Event voiceschanged", voices)
    //   }
    // }
  })

  async function playsound() {
    // setStory("ฉันกำลังพูดอยู่นะ ไม่ได้ยินหรือไง")
    speech.speak({
      text: story,
      queue: false,
      listeners: {
        onstart: () => {
          console.log("Start utterance");
          setPlay(false)
        },
        onend: () => {
          console.log("End utterance");
          setPlay(true)
        },
        onresume: () => {
          console.log("Resume utterance");
        },
        onpause: () => {
          console.log("Pause utterance");
          setPlay(true)
        },
        onboundary: event => {
          console.log(
            event.name +
            " boundary reached after " +
            event.elapsedTime +
            " milliseconds. At char " + 
            event.charIndex
          );
        }
      }
    }).then(() => {
      console.log("Success !")
      Axios.get("http://localhost:3000/playcount", {})
      .catch((error) => {
        console.log(error)
      });
    }).catch(e => {
      console.error("An error occurred :", e)
    })
  }

  // async function onPlay() {
  //   setPlay(false)
  //   playsound()
  // }

  // async function onPause() {
  //   setPlay(true)
  //   speech.pause()
  // }

  // console.log(play)
const user_mode = localStorage.getItem('user_mode');
if(user_mode === 'false'){
  return (
    <>
      {
        loading ?
          <div></div>
          :
          <>
            <IonPage className="DetailPage">
              <IonContent  >
                <div className='DetailBook' >
                  <div className="bar">
                    <IonRouterLink href='/HOME' className="button-back">
                      <IonIcon name="chevron-back-outline" ></IonIcon>
                    </IonRouterLink>
                    <IonRouterLink href='/HOME' className="button-save">
                      <IonIcon name="heart-circle-outline"></IonIcon>
                      <div className="save"></div>
                    </IonRouterLink>
                  </div>
                  <div className="data-book">
                    <IonImg className="image-book" src={data[0].image} />
                    <h3 >{data[0].name}</h3>
                    <p>เขียนโดย : {data[0].auther}</p>
                    <p>ระยะเวลา : {data[0].text.length}  น.</p>
                  </div>
                  <div className='players'>
                    <IonRange className='range-time'>
                      <IonLabel slot="start" className='start-time'>
                        <IonText>
                          <b>
                            0%
                          </b>
                        </IonText>
                      </IonLabel>

                      <IonLabel slot="end">
                        <IonText>
                          <b>
                            100%
                          </b>
                        </IonText>
                      </IonLabel>
                    </IonRange>
                  </div>
                  <div className='mix-button'>
                    <IonButton fill="clear" mode="ios" className='button-play-back'>
                      <IonIcon name="play-back-outline"></IonIcon>
                    </IonButton >
                    {
                      play ?
                        <IonButton fill="clear" mode="ios" className='button-play' onClick={() => playsound()}>
                          <IonIcon name="play-circle-outline" ></IonIcon>
                        </IonButton >
                        :
                        <IonButton fill="clear" mode="ios" className='button-play' onClick={() => speech.pause()} >
                          <IonIcon name="pause-circle-outline"></IonIcon>
                        </IonButton>
                    }

                    <IonButton fill="clear" mode="ios" className='button-play-forward'>
                      <IonIcon name="play-forward-outline"></IonIcon >
                    </IonButton>
                  </div>

                  <div className='story-book'>
                    <h4 className='title-story'>เนื้อเรื่องย่อ</h4>
                    <div className='story'>{data[0].trailer}</div>
                  </div>

                  <div className='episode-Booklist'>
                    <h1>ตอน</h1>
                    <IonList className='list-book'>
                      {items.map((image, i) => (
                        <IonItem key={i} className="item-list" href='/DetailBook'>
                          <IonThumbnail slot="start" className='image' >
                            <IonImg src={image.src} />
                          </IonThumbnail>
                          <span className="book">
                            <IonLabel className='title'>{image.text}</IonLabel>
                            <IonLabel className='detial'>เขียนโดย : {image.who}</IonLabel>
                            <IonLabel className='detial'>ระยะเวลา : {image.time} น.</IonLabel>
                          </span>

                        </IonItem>
                      ))}
                    </IonList>
                  </div>
                </div>

              </IonContent>
            </IonPage >
          </>
      }
    </>
  );
}else{
  return (
    <>
      {
        loading ?
          <div></div>
          :
          <>
            <IonPage className="DetailPage">
              <IonContent  >
                <div className='DetailBook Blind' >
                  <div className="bar">
                  <IonButtons slot="start">
                    <IonRouterLink href='/HOME' className="button-back">ย้อนกลับ</IonRouterLink>
                  </IonButtons>
  
               
                  </div>
                  <div className="data-book">
                    <h3 >{data[0].name}</h3>
                    <p>เขียนโดย : {data[0].auther}</p>
                    <p>ระยะเวลา : {data[0].text.length}  น.</p>
                  </div>
                  <div className='players'>
                    <IonRange className='range-time'>
                      <IonLabel slot="start" className='start-time'>
                        <IonText>
                          <b>
                            0%
                          </b>
                        </IonText>
                      </IonLabel>

                      <IonLabel slot="end">
                        <IonText>
                          <b>
                            100%
                          </b>
                        </IonText>
                      </IonLabel>
                    </IonRange>
                  </div>
                  <center className='group_buttonn'>
  
                    {
                      play ?
                        <IonButton fill="clear" mode="ios" className='savebuttonBlind' onClick={() => playsound()}>
                        ฟัง
                        </IonButton >
                        :
                        <IonButton fill="clear" mode="ios" className='savebuttonBlind' onClick={() => speech.pause()} >
                        หยุด
                        </IonButton>
                    }
                    <IonButton fill="clear" mode="ios" className='savebuttonBlind'>
                    ก่อนหน้า
                    </IonButton >
                    <IonButton fill="clear" mode="ios" className='savebuttonBlind'>
                      ถัดไป
                    </IonButton>

                    <IonButton fill="clear" mode="ios" className="savebuttonBlind">
                     บันทึก
                    </IonButton>
                  </center>

                  <div className='story-book'>
                    <h4 className='title-story'>เนื้อเรื่องย่อ</h4>
                    <div className='story'>{data[0].trailer}</div>
                  </div>

                  <div className='episode-Booklist'>
                    <h1>ตอน</h1>
                    <IonList className='list-book'>
                      {items.map((image, i) => (
                        <IonItem key={i} className="item-list" href='/DetailBook'>
                          <span className="book">
                            <IonLabel className='title'>{image.text}</IonLabel>
                            {/* <IonLabel className='detial'>เขียนโดย : {image.who}</IonLabel> */}
                            <IonLabel className='detial'>ระยะเวลา : {image.time} น.</IonLabel>
                          </span>

                        </IonItem>
                      ))}
                    </IonList>
                  </div>
                </div>

              </IonContent>
            </IonPage >
          </>
      }
    </>
  );
}


};

export default DetailBook;
