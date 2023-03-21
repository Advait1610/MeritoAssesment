import React from 'react'
import Card from './Card'

const SocialInitiative = () => {
  return (
    <div className='m-6'>
        <h1 className='text-center font-serif text-4xl font-semibold text-orange-400 mb-8'>Social Initiatives</h1>
        <div className='grid grid-cols-1 md:grid-cols-2'>
              <Card title1={"Helppad"} title2={"Social Initiative"} link={'url("https://i0.wp.com/career-corner.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-06-16-at-3.01.04-PM-1.jpeg?resize=480%2C320&ssl=1'} />
              <Card title1={"#LeadTheChange"} title2={"Social Initiative"} link={'url("https://i0.wp.com/career-corner.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-06-16-at-3.18.04-PM.jpeg?resize=480%2C320&ssl=1'} />
              <Card title1={"#WeFightCC"} title2={"Social Initiative"} link={'url("https://i0.wp.com/career-corner.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-06-16-at-5.41.14-PM.jpeg?resize=480%2C320&ssl=1'} />
              <Card title1={"Enlight"} title2={"Social Initiative"} link={'url("https://i0.wp.com/career-corner.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-06-16-at-7.23.13-PM-1.jpeg?resize=480%2C320&ssl=1'} />
        </div>
    </div>
  )
}

export default SocialInitiative
