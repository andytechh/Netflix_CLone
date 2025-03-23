import React from 'react'

const Trending = () => {
  return (
    <div className='flex items-start flex-col overflow-visible  justify-center mt-20'>
        <h1 className='text-2xl text-white font-bold align-start'>
            More Reasons to Join
        </h1>
        <div className='flex flex-row gap-3 items-center justify-center w-270 h-50 overflow-visible'> 
            <div className='w-100 h-41 bg-gray-600 opacity-70'>
            <h2>Enjoy on your Tv</h2>
            <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
            <div className="flex items-end justify-center mt-5">
                <img className="h-10" src="/src/assets/tae.jpg" alt="" />
            </div>
            </div>
            <div className='w-100 h-31 hover:opacity-85 transition duration-500 ease-in-out'>
            <h2>Enjoy on your Tv</h2>
            <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
            <div className="flex items-end justify-center mt-5">
                <img className="h-10" src="/src/assets/tae.jpg" alt="" />
            </div>
            </div>
            <div className='w-100 h-31 hover:opacity-85 transition duration-500 ease-in-out'>
            <h2>Enjoy on your Tv</h2>
            <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
            <div className="flex items-end justify-center mt-5">
                <img className="h-10" src="/src/assets/tae.jpg" alt="" />
            </div>
            </div>
            <div className='w-100 h-31 hover:opacity-85 transition duration-500 ease-in-out'>
            <h2>Enjoy on your Tv</h2>
            <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
            <div className="flex items-end justify-center mt-5">
                <img className="h-10" src="/src/assets/tae.jpg" alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Trending
