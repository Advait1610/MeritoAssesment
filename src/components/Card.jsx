import React from 'react'
import './Styles/Card.css'

const Card = (props) => {
  return (
    <div className='card-body'>
      <main className="page-content">
        <div className="card bg-cover" style={{ backgroundImage: props.link}}>
    <div className="content">
            <h2 className="title text-white">{props.title1}</h2>
      <p className="copy ">{props.title2}</p>
      <button className="btn">Explore</button>
    </div>
  </div>
</main>
    </div>
  )
}

export default Card
