import React from 'react'
import './main.css'
import cube from '../assets/png-transparent-3-by-3-rubik-s-cube-art-t-shirt-rubiks-cube-drawing-color-hand-painted-cube-watercolor-painting-color-splash-hand-thumbnail.png'

const Main = () => {
  return (
   <div className='container-main'>
   <p className='container-text'>
   <span className='container-text1'>Fullstack & Frontend Developer.</span><br/>
  I design and code beautifully simple things, and I love what I do.
   </p>
   <img src={cube} alt='cube' className='container-img'/>
   
  
   
   
   
   </div>
  )
}

export default Main
