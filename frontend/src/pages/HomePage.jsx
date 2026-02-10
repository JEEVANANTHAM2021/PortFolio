import React from 'react'
import Navbar from '../components/layout/Navbar'
import ProjectsSection from '../components/sections/ProjectsSection'
import HeroSection from '../components/sections/HeroSection'
import JourneySection from '../components/sections/JourneySection'




const HomePage = () => {
  return (
    <div className='min-h-screen bg-gray-200'>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <JourneySection />
    </div>
  )
}

export default HomePage
