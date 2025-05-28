import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({data}) => {

  const navigate= useNavigate();
  const [input, setInput]= useState(data? data: '');
  const onSearchHandler=(e)=>{
    e.preventDefault()
    navigate('/course-list/'+ input);
  }

  return (
    
      <form onSubmit={onSearchHandler} className='max-w-xl w-full md:h-11 h-9 flex items-center bg-white border border-gray-500/20 rounded-xl'>
        <img src={assets.search_icon} alt="search-icon" className='md:w-auto w-10 px-3'/>
        <input onChange= {e =>setInput(e.target.value)} value={input}
        type="text" placeholder='Search Courses' className='w-full h-full outline-none text-gray-500/80'/>
        <button type='submit' className='bg-blue-600 rounded-xl text-white md:px-9 px-5 md:py-2 py-1 mx-1 cursor-pointer'> Search</button>
      </form>
  
  )
}

export default SearchBar