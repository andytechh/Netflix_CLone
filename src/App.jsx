import { useState } from 'react'
import Header from './components/Header'
import SliderCard from './components/SliderCard'
import './App.css'

import React from 'react'

const App = () => {
  return (
    <div className='
     bg-gradient-to-b from-black via-gray-900 to-black
      h-screen
      w-screen
      overflow-hidden
      flex
      flex-col
   '> 
      <Header />
      <SliderCard />

    </div>
  )
}

export default App
