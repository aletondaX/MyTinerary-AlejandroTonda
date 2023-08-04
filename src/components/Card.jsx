import React from 'react'

function Card(props) {
  return (
    <div className='card'>
      <img src={props.imgsrc} alt="Card Image"/>
      <p>Japan</p>
    </div>
  )
}

export default Card