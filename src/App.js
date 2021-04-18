import React , {useState, useRef} from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId
} = require("./env.json");

firebase.initializeApp({
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId
})

const auth = firebase.auth();
const firestore= firebase.firestore();

const Filter = require('bad-words');

const App = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>
      <section>
        {/* if a user is signed in auth */}
        {user ? <ChatRoom/> : <SignIn/>} 
      </section>
    </div>
  );
}

const SignIn = ()=>{
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider(); //google auth popup
    auth.signInWithPopup(provider);
  }
  return (
    <>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      {/* <p>Do not violate the community guidelines or you will be banned for life!</p> */}
    </>
  )
}

const SignOut = () => {
  return auth.currentUser && (
    <button onClick= {() => auth.signOut()}>Sign Out</button>
  )
}

const ChatRoom = () =>{
  const messagesRef = firestore.collection('messages'); // gets collection from database called messages
  const query = messagesRef.orderBy('createdAt').limit(25); //orders collection of objects by createdAt key

  const [messages] = useCollectionData(query, {idField: 'id'}); //listens on real-time to data with a hook and gets the collection
  const [formValue, setFormValue] = useState(''); //react's state hook that changes its value real-time
  const dummy = useRef() //react's ref hook, so window will always have refernce in view (to auto-scroll chat)

  const filter = new Filter(); //filters out bad words

  const sendMessage = async(e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser; //user's google uid and profile image

    await messagesRef.add({ //adds new message to collection on firestone
      text: filter.isProfane(formValue) ? filter.clean(formValue) : formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })
    setFormValue(''); //resets chat input field

    dummy.current.scrollIntoView({behavior: 'smooth'}); //scroll down
  }

  return (
    <>
      {/* chat */}
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
        <div ref={dummy}></div>
      </main>

      {/* chat input */}
      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => {setFormValue(e.target.value);}}/> {/* bind hook to form input */}
        <button type={"subnit"} disabled={!formValue}>🕊️</button>
      </form>
    </>
  )
}

const ChatMessage = (props) => {
  const {text, uid, photoURL} = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    // different style depending on sent or received className
    <div className={`message ${messageClass}`}> 
      <img src={photoURL}/>
      <p>{text}</p>
    </div>
  ) 
}

export default App;
