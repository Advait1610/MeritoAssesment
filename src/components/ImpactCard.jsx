import React from 'react'
import CountUp from 'react-countup';
const ImpactCard = (props) => {
  return (
    <div>
      <div className="rounded overflow-hidden shadow-lg">
  <div className="px-6 py-4">
    <div className="font-bold text-6xl mb-8 text-center text-amber-500"><CountUp start={props.beg} end={props.end} duration={props.dur} delay={0} /></div>
    <p className="text-center text-slate-900 text-lg">
      {props.title}
    </p>
  </div>
  
</div>
    </div>
  )
}

export default ImpactCard
