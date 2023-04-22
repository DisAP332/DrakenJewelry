import { useState } from 'react'
import './App.css'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Store } from './Pages/Store'
import { Navbar } from './Components/Navbar'

import profileIcon from './Icons/accountIcon.png'

firebase.initializeApp({
  apiKey: "AIzaSyBy3Vp3L1l_HtsztZMdLXBuVlL99yXvA4M",
  authDomain: "draken-jewelry.firebaseapp.com",
  projectId: "draken-jewelry",
  storageBucket: "draken-jewelry.appspot.com",
  messagingSenderId: "969793291765",
  appId: "1:969793291765:web:adcb01185be7c34a4e8cbc",
  measurementId: "G-9RYVGZBP6J"
})

const auth = firebase.auth();
const firestore = firebase.firestore();



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='appWrap'>
      <Navbar
        signIn = {SignIn}
      />
      <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Store' element={<Store />}/>
          <Route path='/About' element={<About />}/>
        </Routes>
      </div>
    </div>
  )
}



function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div onClick={signInWithGoogle}>
      <img src={profileIcon} alt='Icon' />
      <h3>My Account</h3>
    </div>
  )
}

export default App
