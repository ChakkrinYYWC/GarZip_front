import React, { useState, useEffect } from 'react'
import {
  IonContent, IonPage, IonImg, IonText, IonIcon, IonLabel, IonButton,
  IonItem, IonRouterLink, IonRange, IonList, IonButtons, IonThumbnail, IonCheckbox
} from '@ionic/react';
import './DetailBook.css';
import Axios from "axios";
import Speech from 'speak-tts'
import { wait } from '@testing-library/react';
import { emit } from 'process';
import { useHistory, withRouter, useNavigate } from "react-router-dom";
import ReactAudioPlayer from 'react-audio-player';


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
  const [timeuser, setTimeuser] = useState([])
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(true);
  const [story, setStory] = useState('')
  const [play, setPlay] = useState(true)
  const [man, setMan] = useState(Boolean)
  const [woman, setWoman] = useState(Boolean)
  const [pitch, setPitch] = useState()
  const [time, setTime] = useState(Number)
  const [episode, setEpisode] = useState([])
  const [ep_audio, setEp_audio] = useState([])
  const [test, setTest] = useState('')
  const [indexchapter, setIndexchapter] = useState()
  // const audio = new Audio()
  // const [countTime, setCountTime] = useState(true)
  // const history = useHistory();
  const user_id = localStorage.getItem("user_id");
  var indexview = 0
  const speech = new Speech()

  async function getData() {
    await Axios.get("https://garzipback.herokuapp.com/book/app/detail/" + props.match.params.id, {})
      .then((res) => {
        setStory(res.data[0].text)
        setData(res.data)
        setEpisode(res.data[0].chapter)
        // console.log(timeuser)
        setTest(res.data[0].voice)

        const random_boolean = Math.random() < 0.5;
        if (random_boolean === true) {
          setMan(true)
          setWoman(false)
          setPitch(0.125)
        }
        if (random_boolean === false) {
          setMan(false)
          setWoman(true)
          setPitch(1.5)
        }
      })
      .catch((error) => {
        console.log(error)
      });
  }
  async function getUser() {
    await Axios.get("https://garzipback.herokuapp.com/user/app/" + user_id, {}).then(async (res) => {
      // console.log(res.data[0].continue_book.length)
      setTimeuser(res.data[0].continue_book)
      add_time: {
        for (let i = 0; i < res.data[0].continue_book.length; i++) {
          // console.log('continue_book: ' + res.data[0].continue_book[i]._id)
          // console.log(props.match.params.id)
          if (res.data[0].continue_book[i]._id == props.match.params.id) {
            // console.log('**')
            // console.log(res.data[0].continue_book[i].time)
            setTime(res.data[0].continue_book[i].time)
            break add_time;
          } else {
            // console.log('##')
            setTime(0)
          }
        }
      }
      // setUser(res.data[0].continue_book)
    }).catch((error) => {
      console.log(error)
    });
  }
  // console.log(timeuser)
  useEffect(async () => {
    await getUser()
    await getData()
    await checkBook(props.match.params.id)
    await setLoading(false);

  }, [indexchapter])

  speech.init({
    'volume': 1,
    'lang': 'th-TH',
    'rate': 1,
    'pitch': pitch,
    'splitSentences': false,
    // 'voice':'Google UK English Male',
    // 'listeners': {
    //   'onvoiceschanged': (voices) => {
    //     console.log("Event voiceschanged", voices)
    //   }
    // }
  })

  const asdf = 'Bobby woke up because he heard a dog. He heard a dog barking outside his window. Bobby woke up when he heard the dog barking. Bobby got out of bed. He got out of bed and walked to the window. He looked out the window. He saw a big brown dog. It was barking very loud. Bobby opened his window. He looked at the barking dog. Why are you barking so loud, he asked the dog. The dog looked at Bobby. Then it stopped barking.'
  const sdfg = 'Nancy wants to live a long time. She wants to live for one hundred years. She is five years old now. She wants to live 95 more years. Then she will be 100. Her father is 30 years old. He wants to live a long time too. He wants to live for one hundred years. He wants to live for 70 more years. "Daddy, we will grow old together, okay?" Nancy said to her father. "Yes, honey, we will grow old together," he said to Nancy. Then Nancy smiled. She gave her daddy a big hug.'
  const dfgh = 'Johnny jumped over the dog. The dog was lying on the ground. Johnny jumped over it. The dog saw Johnny jump over it. The dog got up. The dog got up and barked at Johnny. Johnny laughed. He laughed while the dog barked. Johnny ran over to the fence. The dog chased him to the fence. Johnny jumped over the fence. He turned around and looked at the dog. The dog stopped at the fence. The dog could not jump over the fence. Johnny said, "Jump, jump!" The dog barked, but did not jump.'
  const zxcv = "Fred had a red rubber ball. He kicked the ball. It flew through the air. He picked it up. He threw it against a wall. The ball came back to Fred. He kicked it with his foot again. The ball flew over the wall. He picked it up again. He bounced it on the street. The ball bounced up and down. Then it stopped bouncing up and down. It didn't move. Fred's dog barked at the ball. Fred kicked the ball. His dog ran after the ball."
  const xcvb = "Mary ate a blueberry. She loved blueberries. Then she ate a blackberry. She loved blackberries. Then she ate a strawberry. She loved strawberries. Mary was confused. A blueberry is blue, so you call it a blueberry. A blackberry is black, so you call it a blackberry. A strawberry is red. So, why don't you call it a redberry? Mary asked her mom. Her mom didn't know. She asked her dad. Her dad didn't know. She asked her little brother. 'Because a red berry is a cherry!' her brother said."
  var readingtime = 0

  async function playsound() {
    const percentagevalue = time * (story.length / 100)
    const storysliced = story.slice(percentagevalue, story.length)
    // console.log(storysliced)
    speech.speak({
      text: storysliced,
      queue: false,
      listeners: {
        onstart: () => {
          console.log('#start')
          setPlay(false)
          Axios.get("https://garzipback.herokuapp.com/playcount", {
          }).catch((error) => {
            console.log(error)
          });
        },
        onend: () => {
          setPlay(true)
        },
        onresume: () => {
          // setPlay(false)
        },
        onpause: async () => {
          console.log('#pause')
          setPlay(true)
        },
        onboundary: event => {
          readingtime = (((event.elapsedTime) / 1000) / event.charIndex)
          setTime(Math.round((event.charIndex + percentagevalue) / (story.length / 100)))
          var count = (Math.round((event.charIndex + percentagevalue) / (story.length / 100)))

          add_view: {
            if (count > 5.00 && indexview == 0) {
              // console.log('view up!')
              indexview = indexview + 1

              Axios.post("https://garzipback.herokuapp.com/book/updateview/" + data[0]._id, {})
                .then((res) => {
                  // console.log(res);
                })
                .catch((error) => console.log(error));
              break add_view;
            }
            // console.log(countview)
          }
        }
      }
    }).then(() => {
      console.log('#then')
      setPlay(true)
      // speech.start()
      // console.log('#then 2')
      // setPlay(false)

    }).catch(e => {
      console.log('#catch')
      console.error("An error occurred :", e)
    })
  }
  // console.log(play)
  // async function onPlay() {
  //   setPlay(false)
  //   playsound()
  // }

  // async function onPause() {
  //   setPlay(true)
  //   speech.pause()
  // }

  // console.log(play)
  const addBook = (id) => {
    const data = { user_id };
    console.log('add book')
    Axios.post("https://garzipback.herokuapp.com/book/addFav/" + id, data, {})
      .then((res) => {
        setSaved(false)
        // console.log(res);
      })
      .catch((error) => console.log(error));
  };
  const removeBook = (id) => {
    const data = { user_id };
    console.log('remove book')
    Axios.post("https://garzipback.herokuapp.com/book/removeFav/" + id, data, {})
      .then((res) => {
        setSaved(true)
        // console.log(res);
      })
      .catch((error) => console.log(error));
  };
  const checkBook = async (id) => {
    const data = { user_id };
    console.log('check book')
    await Axios.post("https://garzipback.herokuapp.com/book/saveBook/" + id, data, {})
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          // console.log(res.data[i]);
          if (res.data[i] == id) {
            console.log('have book')
            setSaved(false)
            break
          } else {
            console.log('no have book')
            setSaved(true)
          }
        }
      }).catch((error) => console.log(error));
  };

  async function BackStory(event) {
    console.log(data)
    await Axios.get("https://garzipback.herokuapp.com/book/app/nextdetail/back/" + props.match.params.id + "/" + data[0].category, {
    }).then((res) => {
      window.location.replace("/DetailBook/" + res.data);
    }).catch((error) => console.log(error));

  }
  async function FowardStory(event) {
    await Axios.get("https://garzipback.herokuapp.com/book/app/nextdetail/next/" + props.match.params.id + "/" + data[0].category, {
    }).then((res) => {
      window.location.replace("/DetailBook/" + res.data);
    }).catch((error) => console.log(error));

  }
  const addTime = (id, time) => {
    const data = { user_id, time };
    console.log('add book')
    Axios.post("https://garzipback.herokuapp.com/book/continue/" + id, data, {})
      .then((res) => {
        // setSaved(false)
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  const removeTime = (id) => {
    const data = { user_id };
    console.log('remove time')
    Axios.post("https://garzipback.herokuapp.com/book/removeContinue/" + id, data, {})
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
  }

  // function playAudio() {
  //   console.log('****')
  //   var msg = new SpeechSynthesisUtterance('Help me with this code please?');
  //   msg.pitch = 0;
  //   msg.rate = .6;
  //   window.speechSynthesis.speak(msg);

  //   var msg = new SpeechSynthesisUtterance();
  //   var voices = window.speechSynthesis.getVoices();
  //   msg.voice = voices[10]; // Note: some voices don't support altering params
  //   msg.voiceURI = 'native';
  //   msg.volume = 1; // 0 to 1
  //   msg.rate = 1.2; // 0.1 to 10
  //   msg.pitch = 2; //0 to 2
  //   msg.text = 'Sure. This code plays "Hello World" for you';
  //   msg.lang = 'en-US';

  //   msg.onend = function (e) {
  //     var msg1 = new SpeechSynthesisUtterance('Now code plays audios for you');
  //     msg1.voice = speechSynthesis.getVoices().filter(function (voice) { return voice.name == 'Whisper'; })[0];
  //     msg1.pitch = 2; //0 to 2
  //     msg1.rate = 1.2; //0 to 2
  //     // start your audio loop.
  //     speechSynthesis.speak(msg1);
  //     console.log('Finished in ' + e.elapsedTime + ' seconds.');
  //   };

  //   speechSynthesis.speak(msg);
  // }

  // const audio = new Audio(
  //   "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3",
  // );

  // const start = () => {
  //   audio.play();
  // };

  // console.log(indexchapter)
  // console.log(episode)
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
                      <IonRouterLink onclick="history.back()" className="button-back">
                        <IonIcon name="chevron-back-outline" ></IonIcon>
                      </IonRouterLink>
                      {
                        saved ?
                          //โปร่ง
                          <IonRouterLink onClick={() => addBook(data[0]._id)} className="button-save">
                            <IonIcon name="bookmark-outline"></IonIcon>
                            {/* <IonIcon ios="ios-bookmark" md="md-bookmark" name="bookmark-outline"></IonIcon> */}
                            <div className="save"></div>
                          </IonRouterLink>
                          :
                          //ทึบ
                          <IonRouterLink onClick={() => removeBook(data[0]._id)} className="button-save">
                            <IonIcon name="bookmark"></IonIcon>
                            <div className="save"></div>
                          </IonRouterLink>
                      }
                    </div>
                    <div className="data-book">
                      <IonImg className="image-book" src={data[0].image} />
                      <h3 >{data[0].name}</h3>

                      {
                        indexchapter == undefined ?
                          <>
                            <ReactAudioPlayer
                              src={data[0].voice}
                              // onPause={(e)=> {console.log('Pause:: '+e.target.currentTime)}}
                              onPlay={(e) => { console.log(e) }}
                              onEnded={(e) => { console.log('end') }}
                              onListen={(e) => {
                                // console.log(e)
                                add_view: {
                                  if (e > 5.00 && indexview == 0) {
                                    // console.log('view up!')
                                    indexview = indexview + 1
                                    Axios.post("https://garzipback.herokuapp.com/book/updateview/" + data[0]._id, {})
                                      .then((res) => {
                                        console.log(res);
                                      })
                                      .catch((error) => console.log(error));
                                    break add_view;
                                  }
                                }
                              }}
                              listenInterval
                              controls
                            />
                          </>
                          :
                          <>
                            <ReactAudioPlayer
                              src={episode[indexchapter].voice}
                              controls
                            />
                          </>
                      }



                      {/* <p>เขียนโดย : {data[0].voice}</p> */}
                      {/* <h4>text: {data[0].chapter[indexchapter].voice}</h4> */}
                      <h4>เขียนโดย : {data[0].auther}</h4>
                      <p>ยอดฟัง : {kFormatter(data[0].view)} ครั้ง </p>
                    </div>
                    <div className='players'>
                      {/* <IonRange
                        className='range-time'
                        step="1"
                        min="0"
                        max="100"
                        pin="true"
                        value={time}
                        debounce="1300"
                        onIonChange={async e => {
                          if (e.detail.value >= 95 && e.detail.value <= 110) {
                            console.log(e.detail.value + ' and theres is no need to do anything.')
                            removeTime(data[0]._id)
                          } else {
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
                      </IonRange>*/}
                    </div>


                    {/* <div className='mix-button'>
                      <IonButton fill="clear" mode="ios" className='button-play-back' onClick={(event) => BackStory(event)}>
                        <IonIcon name="play-back-outline"></IonIcon>
                      </IonButton >

                      {
                        play ?
                          <IonButton fill="clear" mode="ios" className='button-play' onClick={() => playsound()}>
                            <IonIcon name="play-circle-outline" ></IonIcon>
                          </IonButton >
                          :
                          <IonButton fill="clear" mode="ios" className='button-play' onClick={() => {
                            speech.pause()
                            // setPlay(true)
                            // console.log(time)
                            if (time > 2) {
                              addTime(data[0]._id, time)
                            }

                          }} >
                            <IonIcon name="pause-circle-outline"></IonIcon>
                          </IonButton>
                      }

                      <IonButton fill="clear" mode="ios" className='button-play-forward' onClick={(event) => FowardStory(event)}>
                        <IonIcon name="play-forward-outline"></IonIcon >
                      </IonButton> 
                    </div>*/}
                    {/* <div className='Check-pitch'>
                      <span className='G_Checkbox'>
                        <IonCheckbox className='Checkbox' onIonChange={event => (setMan(event.target.checked), setWoman(!(event.target.checked)), setPitch(0.125))} checked={man} />
                        <IonLabel position="floating" className="text">น้ำเสียงชาย</IonLabel>
                      </span>
                      <span>
                        <IonCheckbox className='Checkbox' onIonChange={event => (setWoman(event.target.checked), setMan(!(event.target.checked)), setPitch(1.5))} checked={woman} />
                        <IonLabel position="floating" className="text">น้ำเสียงหญิง</IonLabel>
                      </span>
                    </div> */}

                    <div className='story-book'>
                      <h4 className='title-story'>เนื้อเรื่องย่อ</h4>
                      <h4><div className='story'>{data[0].trailer}</div></h4>
                    </div>

                    {
                      episode == undefined ?
                        <>
                        </>
                        :
                        <div className='episode-Booklist'>
                          {/* <h1>ตอน</h1> */}
                          <IonList className='list-book'>
                            {episode.map((book, i) => {
                              // console.log(book)
                              return (

                                <IonItem key={i} className="item-list" onClick={() => { setIndexchapter(i) }}>
                                  {/* <IonItem key={i} className="item-list" href={"/DetailBook/" + book._id}> */}
                                  <IonThumbnail slot="start" className='image' >
                                    <IonImg src={book.image} />
                                  </IonThumbnail>
                                  <span className="book">
                                    {/* <h1>ddfdfd</h1> */}
                                    <h4><IonLabel className='title'>{book.name}</IonLabel></h4>
                                    <h4><IonLabel className='detial'>เขียนโดย : {data[0].auther}</IonLabel></h4>
                                    {/* <IonLabel className='detial'>ระยะเวลา : {Math.round((story.length) * 0.08129142485119)}  วินาที.</IonLabel> */}
                                  </span>
                                </IonItem>

                              )
                            })}
                          </IonList>
                        </div>
                    }
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
                        <IonRouterLink onclick="history.back()" className="button-back"><h4>ย้อนกลับ</h4></IonRouterLink>
                      </IonButtons>


                    </div>
                    <div className="data-book">
                      <h3 >{data[0].name}</h3>
                      <p><h4>เขียนโดย : {data[0].auther}</h4></p>
                      <p><h4>ยอดผู้ฟัง : {kFormatter(data[0].view)} ครั้ง </h4></p>
                    </div>
                    <div className='players'>
                      {/* <IonRange
                        className='range-time'
                        step="1"
                        min="0"
                        max="100"
                        pin="true"
                        value={time}
                        debounce="1300"
                        onIonChange={async e => {
                          if (e.detail.value >= 94 && e.detail.value <= 110) {
                            console.log(e.detail.value + ' and theres is no need to do anything.')
                            removeTime(data[0]._id)
                          } else {
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
                      </IonRange> */}
                      <ReactAudioPlayer
                        src={data[0].voice}
                        controls
                        onListen={(e) => {
                          // console.log(e)
                          add_view: {
                            if (e > 5.00 && indexview == 0) {
                              // console.log('view up!')
                              indexview = indexview + 1
                              Axios.post("https://garzipback.herokuapp.com/book/updateview/" + data[0]._id, {})
                                .then((res) => {
                                  console.log(res);
                                })
                                .catch((error) => console.log(error));
                              break add_view;
                            }
                          }
                        }}
                        listenInterval
                      />
                    </div>
                    <center className='group_buttonn'>

                      {/* {
                        play ?
                          <IonButton fill="clear" mode="ios" className='savebuttonBlind' onClick={() => playsound()}>
                            ฟัง
                          </IonButton >
                          :
                          <IonButton fill="clear" mode="ios" className='savebuttonBlind' onClick={() => {
                            speech.pause()
                            if (time > 2) {
                              addTime(data[0]._id, time)
                            }
                          }} >
                            หยุด
                          </IonButton>
                      } */}
                      <IonButton fill="clear" mode="ios" className='savebuttonBlind' onClick={(event) => BackStory(event)}>
                        ก่อนหน้า
                      </IonButton >
                      <IonButton fill="clear" mode="ios" className='savebuttonBlind' onClick={(event) => FowardStory(event)}>
                        ถัดไป
                      </IonButton>

                      {
                        saved ?
                          <h8>
                            <IonRouterLink onClick={() => addBook(data[0]._id)}>
                              <IonButton fill="clear" mode="ios" className="savebuttonBlind">
                                บันทึก
                              </IonButton>
                            </IonRouterLink>
                          </h8>
                          :
                          <h8>
                            <IonRouterLink onClick={() => removeBook(data[0]._id)} >
                              <IonButton fill="clear" mode="ios" className="savebuttonBlind">
                                ยกเลิกบันทึก
                              </IonButton>
                            </IonRouterLink>
                          </h8>
                      }
                    </center>

                    {/* <div className='Check-pitch'>
                      <div>
                        <IonCheckbox className='CheckboxBlind' onIonChange={event => (setMan(event.target.checked), setWoman(!(event.target.checked)), setPitch(0.125))} checked={man} />
                        <IonLabel position="floating" className="text"> เสียงผู้ชาย</IonLabel>
                      </div>
                      <div>
                        <IonCheckbox className='CheckboxBlind' onIonChange={event => (setWoman(event.target.checked), setMan(!(event.target.checked)), setPitch(1.5))} checked={woman} />
                        <IonLabel position="floating" className="text">เสียงผู้หญิง</IonLabel>
                      </div>
                    </div> */}

                    <div className='story-book'>
                      <h4 className='title-story'>เนื้อเรื่องย่อ</h4>
                      <div className='story'><h4>{data[0].trailer}</h4></div>
                    </div>

                    {
                      episode == undefined ?
                        <>
                        </>
                        :
                        <div className='episode-Booklist'>
                          <h1>ตอน</h1>
                          <IonList className='list-book blind'>
                            {episode.map((book, i) => {
                              return (
                                <button><IonItem key={i} className="item-list" href='/DetailBook'>
                                  <span className="book">
                                    <IonLabel className='title'>{book.name}</IonLabel>
                                    <IonLabel className='detial'>เขียนโดย : {data[0].auther}</IonLabel>
                                    {/* <IonLabel className='detial'>ระยะเวลา : {image.time} น.</IonLabel> */}
                                  </span>

                                </IonItem></button>
                              )
                            })}
                          </IonList>
                        </div>
                    }

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
