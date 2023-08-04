import React, { useState } from 'react'
import Arrow from './Arrow'
import Card from './Card'

const images = [
  'https://images.pexels.com/photos/1327373/pexels-photo-1327373.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1600',
]

const Carousel = () => {

  const [index, setIndex] = useState(0)

  const next = () => {
    if (index < images.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }

  }
  const prev = () => {
    if (index > 0) {
      setIndex(index - 1)
    } else {
      setIndex(images.length - 1)
    }
  }

  return (
    <div className='carousel'>
      <Card imgsrc={images[index]}/>
      <Card imgsrc={images[index]}/>
      <Card imgsrc={images[index]}/>
      <Card imgsrc={images[index]}/>
      {/* <Arrow src="https://cdn-icons-png.flaticon.com/512/109/109618.png" alt='flecha-i' fn={prev} /> */}
      {/* <Arrow src="https://cdn-icons-png.flaticon.com/512/109/109617.png" alt='flecha-d' fn={next} /> */}
    </div>
  )
}

export default Carousel