import React from 'react'
import CircularText from '../ui/CircularText'
import CurvedSection from '../ui/Curved'
import { assets } from '../../assets/assets'

const JourneySection = () => {
  return (
    
        <section className='min-h-screen bg-amber-100 mt-12'>
          <CurvedSection curve='tr'>
          <div className='flex items-center justify-between'>
            <h1 className='text-5xl text-black'>Design Journey</h1>
            <CircularText text='Open to Work * Open to Work * ' className='font-[sans-serif]'>
              <img src={assets[0]} alt='profile_img' className='object-cover'/>
            </CircularText>
          </div>
          </CurvedSection>
        </section>
    
  )
}

export default JourneySection
