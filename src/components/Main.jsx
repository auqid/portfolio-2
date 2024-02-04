import React from 'react'
import './main.css'
import { ReactTyped } from 'react-typed'
import cube from '../assets/png-transparent-3-by-3-rubik-s-cube-art-t-shirt-rubiks-cube-drawing-color-hand-painted-cube-watercolor-painting-color-splash-hand-thumbnail.png'
import {useState, Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Scene from './Scene'

const Main = () => {
  return (
   <div className='container-main'>
   <p className='container-text'>
    <div className='container-text1'>
     <span>I am a </span>
    <ReactTyped
      strings={[
        " Full Stack Developer.",
        " Front-End Developer.",
        " Back-End Developer.",
      ]}
      typeSpeed={50}
      backSpeed={70}
      loop
      />
    
    </div><br/>
  I design and code beautifully simple things, and I love what I do.
   </p>
   {/* <img src={cube} alt='cube' className='container-img'/> */}
   <Canvas>
    <ambientLight intensity={1.5}/>
    <OrbitControls enableZoom={false}/>
    <Suspense fallback={null}>
      <Scene/>
    </Suspense>
    <Environment preset='sunset'/>
   </Canvas>
   
  
   
   
   
   </div>
  )
}

export default Main
