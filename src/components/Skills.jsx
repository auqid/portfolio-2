import React from 'react'
import './Skills.css'
//import code from '../assets/Code.svg..png'
import cal from '../assets/icon-calculator.svg'
import kar from '../assets/icon-karma.svg'
import sup from '../assets/icon-supervisor.svg'
import bul from '../assets/icon-team-builder.svg'



const Skills = () => {
  return (
    <>
{/* <div classNameName='container-skills'>

  <div classNameName='container-item'>
  <img classNameName='container-skills-img'src={code} alt='code logo'/>
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
   </div> */}


<section className="cards">
  <div className="card-team-builder">
      <h1 className="card-title">Full Stack Developer.</h1>
      <p className="card-paragraph">I like to code things from scratch, and enjoy  bringing ideas to life in the browser.</p>
      <div className="card-image">
        <img src={bul} alt='builder-logo'/>
      </div>
    </div>
   
   
    <div className="card-supervisor">
      <h1 className="card-title">Languages I speak:</h1>
      <p className="card-paragraph">JavaScript, Python.</p>
      <div className="card-image">
        <img src={sup} alt='supervisor-logo'/>
      </div>
    </div>

    
    
    <div className="card-karma">
      <h1 className="card-title">Front End.</h1>
      <p className="card-paragraph">ReactJS, HTML, CSS.</p>
      <div className="card-image">
        <img src={kar} alt='karma-logo'/>
      </div>
    </div>

    <div className="card-calculator">
      <h1 className="card-title">Backend.</h1>
      <p className="card-paragraph">Node.js, Express.</p>
      <div className="card-image">
        <img src={cal} alt='calculator-img'/>
      </div>
    </div>
  </section>

   </>
  )
}

export default Skills
