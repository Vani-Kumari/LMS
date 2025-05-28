import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
      <h1 className='text-3xl md:text-5xl relative font-bold text-gray-800 max-w-3xl mx-auto leading-tight'>
        Fuel Your Future with Our <span className='text-blue-600'>Engaging & Immersive Learning Platform</span> <img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0'/>
      </h1>

      <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>Transform your learning experience with our cutting-edge online platform. Featuring intuitive course creation, personalized learning paths, and real-time analytics, our platform helps learners succeed and educators thrive.</p>

      <p className='md:hidden text-gray-500 max-w-sm mx-auto'>Transform learning with our cutting-edge platform, offering personalized paths and real-time analytics.</p>

      <SearchBar/>
    </div>
  )
}

export default Hero