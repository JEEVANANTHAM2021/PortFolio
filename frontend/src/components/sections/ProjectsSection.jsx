import React from 'react'
import CurvedSection from '../ui/Curved'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'


const ProjectsSection = () => {
  return (
      <section className="relative min-h-screen px-12 pt-12 overflow-hidden">
        <CurvedSection curve='tr' className='bg-gray-500'>
       <div className='flex items-center justify-center'>
        {/* Header Title */}
          <h1 className='font-["sans-serif"] text-5xl text-black'>A peak into My playground of Work</h1>
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
            <div className="card-body font-[sans-serif]">
              <h2 className="card-title text-4xl">E-commerce</h2>
              <p className='text-2xl'>KartZon</p>
            </div>
          </div>

          <div className="card w-120 bg-transparent shadow-none border-0">
            <figure className='overflow-hidden rounded-2xl'>
              <img
                src={assets[2]}
                alt="Shoes" 
                className='w-full h-full object-cover cursor-pointer transition-transform hover:scale-110'/>
            </figure>
            <div className="card-body font-[sans-serif]">
              <h2 className="card-title text-4xl">Frontend </h2>
              <p className='text-2xl'>Bonkers</p>
            </div>
          </div>

          <div className="card w-120 bg-transparent shadow-none border-0">
            <figure className='overflow-hidden rounded-2xl'>
              <img
                src={assets[3]}
                alt="Shoes" 
                className='w-full h-full object-cover cursor-pointer transition-transform hover:scale-110'/>
            </figure>
            <div className="card-body font-[sans-serif]">
              <h2 className="card-title text-4xl">Pixel Perfect - UI</h2>
              <p className='text-2xl'>FloraVision</p>
            </div>
          </div>

          <div className="card w-120 bg-transparent shadow-none border-0">
            <figure className='overflow-hidden rounded-2xl'>
              <img
                src={assets[5]}
                alt="Shoes" 
                className='w-full h-full object-cover cursor-pointer transition-transform hover:scale-105'/>
            </figure>
            <div className="card-body font-[sans-serif]">
              <h2 className="card-title text-4xl">CRUD</h2>
              <p className='text-2xl'>ThinkBoard</p>
            </div>
          </div>
        </div>

        <Link to={'/projects'} className='flex items-center justify-center space-y-6'>
          <button className='btn btn-accent rounded-full transition-transform hover:scale-105 hover:bg-amber-950'>View more projects</button>
        </Link>
        </CurvedSection>
      </section>
  )
}

export default ProjectsSection
