import React from "react"
import DUMMY_IMG from '../assets/dummy.png'

import './style.css'
export default function App() {
   return (
    <div className="app">
        <h1>App</h1>
        <img src={DUMMY_IMG} alt="dummmy-image-demo" />
     </div>
   )
}
