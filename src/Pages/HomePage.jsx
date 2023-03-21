import React from 'react'
// import Carousel from '../components/carousel'
import AboutUs from '../components/AboutUs'
import Impact from '../components/Impact'
import Brand from '../components/Brand'
import SocialInitiative from '../components/SocialInitiative'
import Slider from '../components/carousel'

const HomePage = () => {
  return (
    <div>
      <Slider />
      <AboutUs />
      <hr class="w-48 h-1 mx-auto my-6 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-400"/>
      <Impact />
      <hr class="w-48 h-1 mx-auto my-6 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-400"/>
      <Brand />
      <hr class="w-48 h-1 mx-auto my-6 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-400" />
      <SocialInitiative />
    </div>
  )
}

export default HomePage
