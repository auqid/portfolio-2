import React from 'react'
import hero from '../assets/hero-devices.svg'
import './intro.css'

const Intro = () => {
  return (
    <div id='about' className='container-intro'>
      <img src={hero} className='intro-img' alt='intro'/>
      <p className='intro-text'>
<span className='bold-text'>Hi, I’m Auqid. Nice to meet you.</span> <br/>
I am beginning my journey as a Web developer, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops.
</p>
    </div>
  )
}

export default Intro
