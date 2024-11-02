import React from 'react'
import Hero from './Hero/Hero'
import Properties from './Properties/Properties'
import CityProperties from './CityProperties/CityProperties'
import HowItWorks from './HowItWorks/HowItWorks'
import WhyWorkWithUs from './WhyItWorks/WhyItWorks'
import BuildingFeatures from './BuildingFeatures/BuildingFeatures'
import Reviews from './Reviews/Reviews'
import Blog from './Blog/Blog'
import InquiryForm from '../Form'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <WhyWorkWithUs />
      <Properties />
      <CityProperties />
      <HowItWorks />
      <BuildingFeatures />
      <Reviews />
      <Blog />
      <InquiryForm/>
    </div>
  )
}

export default Home
