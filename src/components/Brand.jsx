import React from 'react'
import Card from './Card'

const Brand = () => {
  return (
    <div className='m-6'>
      <h1 className='text-center font-serif text-4xl font-semibold text-orange-400 mb-8'>Our Brand</h1>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <Card title1={"Meritos Academy"} title2={"Our Brands"} link={'url("https://i0.wp.com/career-corner.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-06-16-at-3.01.04-PM-2.jpeg?resize=480%2C320&ssl=1' } /> 
        <Card title1={"Meritos.in"} title2={"Our Brands"} link={'url("https://i0.wp.com/career-corner.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-06-16-at-3.01.04-PM-2.jpeg?resize=480%2C320&ssl=1' } /> 
      </div>     
    </div>
  )
}

export default Brand
