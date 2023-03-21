import React from 'react'
// import CountUp from 'react-countup/build/CountUp'
import ImpactCard from './ImpactCard'

const Impact = () => {
  return (
    <div className='m-20 content-center'>
          <h1 className='text-center font-serif text-4xl font-semibold text-orange-400 pb-10'>Our Impact</h1>
          <div className='Impacts grid grid-cols-1 md:grid-cols-3'>
              <ImpactCard title={"Carrer Guidance Session"} beg={0} end={300} dur={3} />
              <ImpactCard title={"Years in Action"} beg={0} end={10} dur={5}/>
              <ImpactCard title={"Students & Professionals"} beg={10000} end={50000} dur={4}/>
          </div>
    </div>
  )
}

export default Impact
