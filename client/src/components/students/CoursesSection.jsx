import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard';

const CoursesSection = () => {

  const {allCourses}= useContext(AppContext);
  return (
    <div className=' py-16 md:px-40 px-8'>
      <h2 className='text-center text-3xl font-medium text-gray-800'>Learn From The Best</h2>
      <p className='text-center text-sm md:text-base text-gray-500 mt-3'>Discover our top-rated courses across various categories. from coding and design to business and wellness, our courses are crafted to deliver results.</p>

      <div className='grid [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))] px-4 md:px-0 md:my-16 my-10 gap-4'>
  {allCourses.slice(0, 4).map((course, index) => (
    <CourseCard key={index} course={course} />
  ))}
</div>


       <div className="flex justify-center mt-8"> {/* Added wrapper for centering */}
        <Link
          to={'/course-list'}
          onClick={() => scrollTo(0, 0)}
          className='text-gray-500 border border-gray-500/30 px-10 py-2 rounded w-fit hover:bg-gray-100 transition'
        >
          Show all Courses
        </Link>
      </div>
    
    </div>
  )
}

export default CoursesSection