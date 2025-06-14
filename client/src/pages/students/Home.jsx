import React from 'react'
import Hero from '../../components/students/Hero'
import Companies from '../../components/students/Companies'
import CoursesSection from '../../components/students/CoursesSection'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7'>
      <Hero/>
      <Companies/>
      <CoursesSection/>
    </div>
  )
}

export default Home