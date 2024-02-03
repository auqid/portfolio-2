import React from 'react'
import './main.css'
import cube from '../assets/png-transparent-3-by-3-rubik-s-cube-art-t-shirt-rubiks-cube-drawing-color-hand-painted-cube-watercolor-painting-color-splash-hand-thumbnail.png'

const Main = () => {
  return (
   <div className='container-main'>
   <img src={cube} alt='cube' className='container-img'/>
   <p className='container-text'>
   Designer, Fullstack & Frontend Developer.
  I design and code beautifully simple things, and I love what I do.
   </p>
  
   
   
   
   </div>
  )
}

export default Main
