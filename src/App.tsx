import { useRef, useState } from 'react'
import firebase from 'firebase/compat/app'
import './App.css'

import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Store } from './Pages/Store'
import { Navbar } from './Components/Navbar'

firebase.initializeApp({
  apiKey: "AIzaSyBy3Vp3L1l_HtsztZMdLXBuVlL99yXvA4M",
  authDomain: "draken-jewelry.firebaseapp.com",
  projectId: "draken-jewelry",
  storageBucket: "draken-jewelry.appspot.com",
  messagingSenderId: "969793291765",
  appId: "1:969793291765:web:adcb01185be7c34a4e8cbc",
  measurementId: "G-9RYVGZBP6J"
})

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='appWrap'>
      <Navbar/>
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

export default App
