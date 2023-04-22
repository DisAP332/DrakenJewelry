import React, { useState } from 'react'
import firebase from 'firebase/compat/app'

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
    <div className="App">
    </div>
  )
}

export default App
