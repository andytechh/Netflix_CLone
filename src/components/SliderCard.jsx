import React from 'react'
import { useState } from 'react'
import Trending from './Trending'
const SliderCard = (props) => {
  return (
    <div className='w-screen flex flex-col items-center justify-between'> 
        <div className='flex flex-row w-300 h-100 justify-center m-10'> 
            <img className='static w-screen rounded-4xl opacity-85' src="src/assets/tae.jpg" alt="di gumana" />
        <div className='absolute w-300 h-20 mt-50 p-5'>
            <button className='bg-gray-400 rounded-3xl p-2 hover:bg-gray-300 h-15 w-9 opacity-70'>
            <img className='w-10 h-8' src="src/assets/left-chevron.png" alt="" />
            </button>
           
        </div>
    
        <div className='flex flex-col absolute w-200 h-20 mt-35 p-5 '>
            <h1 className='text-2xl text-white font-bold w-120'>Unlimited movies, TV shows, and more</h1>
            <p className='text-lg mt-3 text-white font-semibold'>Starts at <span>&#8369;</span>149. Cancel anytime.</p>
            <p className='mt-2 mb-2 text-m text-white'>Ready to watch? Enter your email to create or restart your membership.</p>

            <div>
            <input className='bg-gray-400 rounded-3xl m p-3 w-70 outline-none focus:text-white placeholder:text-gray-300 placeholder:italic placeholder:p-2 hover:bg-gray-500' type="email" placeholder='Email address'/>
            <button className='bg-red-600 rounded-3xl text-white p-3 ml-4 font-semibold w-40 hover:bg-red-500'>Get Started &gt;</button>
            </div>
            
        </div>
        <div className='absolute w-250 h-20 mt-50 p-5 ml-50 flex flex-row justify-end'>
        <button className='bg-gray-400 rounded-3xl p-2 hover:bg-gray-300 h-15 w-9 opacity-70'>   
            <img className='w-10 h-8 opacity-100' src="src/assets/8213522.png" alt="" />
            </button>
        </div>
        </div>
        
        <div className='flex items-start flex-col overflow-visible  justify-center'>
        <h2 className='text-2xl text-white font-bold align-start'>Trending Now</h2>
      <div className='flex flex-row gap-3 items-center justify-center w-270 h-40 overflow-visible'>

      <div className='w-200 h-31 hover:opacity-85 transition duration-500 ease-in-out'>
        <h1 className='absolute text-4xl text-white font-bold '>1</h1>
        <img  className='rounded-2xl h-50' src="/src/assets/incognito.jpg" alt="wala" />
      </div>
      <div className='w-200 h-31 rounded-2xl hover:opacity-85 transition duration-500 ease-in-out '>  
      <h1 className='absolute text-4xl text-black font-bold '>2</h1>
        <img className='rounded-2xl h-50' src="/src/assets/helloloveagain.jpg" alt="wala" />
      </div>
      <div  className='w-200 h-31 hover:opacity-85 transition duration-500 ease-in-out'>
      <h1 className='absolute text-4xl text-white font-bold '>3</h1>
        <img  className='rounded-2xl h-50' src="/src/assets/sosyal.jpg" alt="wala" />
      </div>
      
      <div className='w-200 h-31 hover:opacity-85 transition duration-500 ease-in-out'>
      <h1 className='absolute text-4xl text-black font-bold '>4</h1>
        <img  className='rounded-2xl h-50' src="/src/assets/whenlife.jpg" alt="wala" />
      </div>
      
      <div className='w-200 h-31 hover:opacity-85 transition duration-500 ease-in-out'>
      <h1 className='absolute text-4xl text-white font-bold '>5</h1>
        <img  className='rounded-2xl h-50' src="/src/assets/6.jpg" alt="wala" />
      </div>
      
      <div className='w-200 h-31 hover:opacity-85 transition duration-500 ease-in-out'>
      <h1 className='absolute text-4xl text-black font-bold '>6</h1>
        <img  className='rounded-2xl h-50'  src="/src/assets/7.jpg" alt="wala" />
      </div>
      <div className='w-200 h-31 hover:opacity-85 transition duration-500 ease-in-out'>
      <h1 className='absolute text-4xl text-white font-bold '>7</h1>


        <img  className='rounded-2xl h-50' src="/src/assets/8.jpg" alt="wala" />
      </div>
      <div className='w-200 h-31 hover:opacity-85 transition duration-500 ease-in-out'>
      <h1 className='absolute text-4xl text-black font-bold '>8</h1>
        <img className='rounded-2xl h-50'  src="/src/assets/9.jpg" alt="wala" />
      </div>
      

      <div className='w-200 h-31 hover:opacity-85 transition duration-500 ease-in-out'>
      <h1 className='absolute text-4xl text-white font-bold '>9</h1>
        <img  className='rounded-2xl h-50' src="/src/assets/10.jpg" alt="wala" />
      </div>

      
      
      </div>
    </div>
    
    <Trending/>
    </div>
  )
}

export default SliderCard
