import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import ProjectsSection from '../components/ProjectsSection'



const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Intro />
      <ProjectsSection />
    </div>
  )
}

export default HomePage
