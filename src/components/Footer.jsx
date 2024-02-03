import React from 'react'
import './footer.css'
import {FaLinkedin, FaGithub, FaTwitter, FaYoutube} from 'react-icons/fa'
const Footer = () => {
  return (
<>
<div class = "footer"> 

  <a href="https://www.linkedin.com/in/auqidirfan/"><i className="fa fa-linkedin fa-4x logo1"><FaLinkedin/></i></a>
   <a href="https://www.github.com/auqid"><i className="fa fa-twitter fa-4x logo1"><FaGithub/></i></a>
 <a href="https://www.linkedin.com/in/jgottu/" ><i className="fa fa-instagram fa-4x logo1"><FaTwitter/></i></a>
<a href="https://www.linkedin.com/in/jgottu/" ><i className="fa fa-youtube fa-4x logo1"><FaYoutube/></i></a>
  </div>






</>
    




  )

  
}

export default Footer
