import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import Typewriter from '../ui/TypeWriter'


const ProjectsSection = () => {
  return (
      <section className="relative min-h-screen px-12 pt-12 overflow-hidden border rounded-es-full">
       <div className='flex items-center justify-center'>
        {/* Header Title */}
          <Typewriter 
          text={`A peak into My playground of Work`}
          className='font-["sans-serif"] text-5xl text-black' />
       </div>

       {/* Project Grids */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 p-4 items-center'>
          <div className="card w-120 shadow-md border">
            <figure className='overflow-hidden rounded-2xl'>
              <img
                src={assets[1]}
                alt="Kz-project" 
                className='w-full h-full object-cover cursor-pointer transition-transform hover:scale-110'/>
            </figure>
          </div>

          <div className="card w-120 bg-transparent shadow-none border-0">
            <figure className='overflow-hidden rounded-2xl'>
              <img
                src={assets[2]}
                alt="Shoes" 
                className='w-full h-full object-cover cursor-pointer transition-transform hover:scale-110'/>
            </figure>
          </div>

          <div className="card w-120 bg-transparent shadow-none border-0">
            <figure className='overflow-hidden rounded-2xl'>
              <img
                src={assets[3]}
                alt="Shoes" 
                className='w-full h-full object-cover cursor-pointer transition-transform hover:scale-110'/>
            </figure>
          </div>

          <div className="card w-120 bg-transparent shadow-none border-0">
            <figure className='overflow-hidden rounded-2xl'>
              <img
                src={assets[5]}
                alt="Shoes" 
                className='w-full h-full object-cover cursor-pointer transition-transform hover:scale-105'/>
            </figure>
          </div>
        </div>

        <Link to={'/projects'} className='flex items-center justify-start space-y-6 z-50'>
          <button className='btn btn-accent rounded-full transition-transform hover:scale-105 hover:bg-amber-950'>View more projects</button>
        </Link>
      </section>
  )
}

export default ProjectsSection
