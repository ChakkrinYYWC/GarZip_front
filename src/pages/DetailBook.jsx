import React, { useState, useEffect } from 'react'
import {
  IonContent, IonPage, IonImg, IonText, IonIcon, IonLabel, IonButton,
  IonItem, IonRouterLink, IonRange, IonList, IonButtons, IonThumbnail
} from '@ionic/react';
import './DetailBook.css';
import Axios from "axios";
import Speech from 'speak-tts'
import { wait } from '@testing-library/react';
import { emit } from 'process';

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
  const [pitch, setPitch] = useState()
  const [time, setTime] = useState(Number)

  const speech = new Speech()
  async function getData() {
    await Axios.get("http://localhost:3000/book/app/detail/" + props.match.params.id, {})
      .then((res) => {
        // console.log(res.data[0].text);
        setStory(res.data[0].text)
        setData(res.data)
        const random_boolean = Math.random() < 0.5;
        if (random_boolean === true) {
          setPitch(2)
        }
        if (random_boolean === false) {
          setPitch(0.125)
        }
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
    'volume': 1,
    'lang': 'th-TH',
    'rate': 1,
    'pitch': pitch,
    'splitSentences': false,
    // 'listeners': {
    //   'onvoiceschanged': (voices) => {
    //     console.log("Event voiceschanged", voices)
    //   }
    // }
  })

  const asdf = 'Bobby สวัสดี woke up because he heard a dog. He heard a dog barking outside his window. Bobby woke up when he heard the dog barking. Bobby got out of bed. He got out of bed and walked to the window. He looked out the window. He saw a big brown dog. It was barking very loud. Bobby opened his window. He looked at the barking dog. Why are you barking so loud, he asked the dog. The dog looked at Bobby. Then it stopped barking.'
  const sdfg = 'Nancy wants to live a long time. She wants to live for one hundred years. She is five years old now. She wants to live 95 more years. Then she will be 100. Her father is 30 years old. He wants to live a long time too. He wants to live for one hundred years. He wants to live for 70 more years. "Daddy, we will grow old together, okay?" Nancy said to her father. "Yes, honey, we will grow old together," he said to Nancy. Then Nancy smiled. She gave her daddy a big hug.'
  const dfgh = 'Johnny jumped over the dog. The dog was lying on the ground. Johnny jumped over it. The dog saw Johnny jump over it. The dog got up. The dog got up and barked at Johnny. Johnny laughed. He laughed while the dog barked. Johnny ran over to the fence. The dog chased him to the fence. Johnny jumped over the fence. He turned around and looked at the dog. The dog stopped at the fence. The dog could not jump over the fence. Johnny said, "Jump, jump!" The dog barked, but did not jump.'
  const zxcv = "Fred had a red rubber ball. He kicked the ball. It flew through the air. He picked it up. He threw it against a wall. The ball came back to Fred. He kicked it with his foot again. The ball flew over the wall. He picked it up again. He bounced it on the street. The ball bounced up and down. Then it stopped bouncing up and down. It didn't move. Fred's dog barked at the ball. Fred kicked the ball. His dog ran after the ball."
  const xcvb = "Mary ate a blueberry. She loved blueberries. Then she ate a blackberry. She loved blackberries. Then she ate a strawberry. She loved strawberries. Mary was confused. A blueberry is blue, so you call it a blueberry. A blackberry is black, so you call it a blackberry. A strawberry is red. So, why don't you call it a redberry? Mary asked her mom. Her mom didn't know. She asked her dad. Her dad didn't know. She asked her little brother. 'Because a red berry is a cherry!' her brother said."
  var readingtime = 0

  async function playsound() {
    const percentagevalue = time*(asdf.length/100)
    const storysliced = asdf.slice(percentagevalue, asdf.length)
    console.log(storysliced)
    speech.speak({
      text: storysliced,
      queue: false,
      listeners: {
        onstart: () => {
          Axios.get("http://localhost:3000/playcount", {
          }).catch((error) => {
              console.log(error)
            });
          // console.log("Start utterance");
          setPlay(false)
        },
        onend: () => {
          // console.log("End utterance");
          // console.log("sumsentencetime "+sumsentencetime)
          // allsentencetime += sumsentencetime/word
          // // console.log("allsentencetime "+allsentencetime)
          // sumsentencetime = 0
          // sentence +=1
          console.log("readingtime " + readingtime)
          setPlay(true)
        },
        onresume: () => {
          // console.log("Resume utterance");
        },
        onpause: () => {
          console.log("Pause utterance");
          setPlay(true)
        },
        onboundary: event => {
          // console.log(
          //   event.name +
          //   " boundary reached after " +
          //   ((event.elapsedTime) / 1000) +
          //   " seconds. At char " +
          //   event.charIndex
          // );
          readingtime = (((event.elapsedTime) / 1000) / event.charIndex)
          // if(Math.round((event.charIndex/(asdf.length/100)) == 0)||(Math.round(event.charIndex/(asdf.length/100)) == Infinity)){
          //   console.log('finish')
          // }else{
          //   setTime(Math.round(event.charIndex/(asdf.length/100)))
          // }
          // console.log(Math.round((event.charIndex + percentagevalue)/(asdf.length/100)))
          setTime(Math.round((event.charIndex + percentagevalue)/(asdf.length/100)))
        }
      }
    }).then(() => {
      // console.log("Success !")
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
  if (user_mode === 'false') {
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
                      <p>ระยะเวลาประมาณ : {Math.round((story.length) * 0.08129142485119)}</p>
                    </div>
                    <div className='players'>
                      <IonRange 
                        className='range-time'
                        step="1"
                        min="0"
                        max="100"
                        pin="true"
                        value={time}
                        debounce="1300"
                        onIonChange={async e =>{
                          if (e.detail.value >= 95 && e.detail.value <= 110) {
                            console.log(e.detail.value + ' and theres is no need to do anything.')
                          }else{
                            setTime(e.detail.value)
                            console.log(e.detail.value)
                            // await playsound(e.detail.value)
                          }
                        }}
                      >
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
  } else {
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
                        <IonRouterLink href='/' className="button-back">ย้อนกลับ</IonRouterLink>
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
  }


};

export default DetailBook;
