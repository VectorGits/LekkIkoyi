import React from 'react'
import Hero from './Hero/Hero'
import AppartmentTypes from './AppartmentTypes/AppartmentTypes'
import Properties from './Properties/Properties'
import CityProperties from './CityProperties/CityProperties'
import HowItWorks from './HowItWorks/HowItWorks'
import WhyWorkWithUs from './WhyItWorks/WhyItWorks'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <WhyWorkWithUs />
      <Properties />
      <CityProperties />
      <HowItWorks />
    </div>
  )
}

export default Home
