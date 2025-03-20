import React from 'react'
import { useState } from 'react'

const SliderCard = () => {
  return (
    <div className='w-screen h-screen flex flex-row align-center  justify-center'> 
        <div className='flex flex-row w-300 h-120 justify-center m-10'> 
            <img className='static w-full rounded-4xl opacity-85' src="src/assets/tae.jpg" alt="di gumana" />
        <div className='absolute w-300 h-20 mt-50 p-5'>
            <button className='bg-gray-400 rounded-3xl p-2 hover:bg-gray-300 h-15 w-9 opacity-70'>
            <img className='w-10 h-8' src="src/assets/left-chevron.png" alt="" />
            </button>
           
        </div>
    
        <div className='absolute w-300 h-20 mt-35 p-5 ml-35'>
            <h1 className='text-5xl text-white font-bold w-120'>Unlimited movies, TV shows, and more</h1>
            <p className='text-lg mt-3 text-white font-semibold'>Starts at <span>&#8369;</span>149. Cancel anytime.</p>
            <p className='mt-2 mb-2 text-m text-white'>Ready to watch? Enter your email to create or restart your membership.</p>
            <input className='bg-gray-400 rounded-3xl m p-3 w-70 outline-none focus:text-white placeholder:text-gray-300 placeholder:italic placeholder:p-2 hover:bg-gray-500' type="email" placeholder='Email address'/>
            <button className='bg-red-600 rounded-3xl text-white p-3 ml-4 font-semibold w-40 hover:bg-red-500'>Get Started &gt;</button>
        </div>
        <div className='absolute w-250 h-20 mt-50 p-5 ml-50 flex flex-row justify-end'>
        <button className='bg-gray-400 rounded-3xl p-2 hover:bg-gray-300 h-15 w-9 opacity-70'>   
            <img className='w-10 h-8 opacity-100' src="src/assets/8213522.png" alt="" />
            </button>
        </div>
        </div>
        
      <div></div>
      <div>
        <div></div>
        <div></div>
        </div>
      <div> </div>
    </div>
  )
}

export default SliderCard
