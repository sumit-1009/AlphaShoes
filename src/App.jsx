import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Shoes from './components/Shoes'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Shoes />
      </div>
    </>
  )
}

export default App
