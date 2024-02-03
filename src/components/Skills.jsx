import React from 'react'
import './Skills.css'
import code from '../assets/Code.svg..png'

const Skills = () => {
  return (
    <>
<div className='container-skills'>

  <div className='container-item'>
  <img className='container-skills-img'src={code} alt='code logo'/>
  <h1>Full Stack Developer</h1>
  <h3>I like to code things from scratch, and <br/>enjoy  bringing ideas to life in the browser.</h3>
  <h4>Languages I speak:</h4>
  <h3>JavaScript, Python.</h3>
  <h4>Front End</h4>
  <h3>ReactJS, HTML, CSS</h3>
  <h4>Backend</h4>
  <h3>Node.js, Express.</h3>
  <h4>Database</h4>
  <h3>MySQL, MongoDB.</h3>
  </div>
   </div>

   </>
  )
}

export default Skills
