import React from 'react'
import github from '../Images/github.png';
import linkedin from '../Images/linkedin.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="link">
      <a href="https://github.com/Subash466/" ><img src={github} alt="logo" />  github</a>   
      <a href="https://www.linkedin.com/in/subash-balraj/" ><img src={linkedin} alt="logo" /> linkedin</a>
      </div>
      <div className="info">
        <p><span className="glyphicon glyphicon-envelope"> subashbalraj28@gmail</span></p>
        <p><span className="glyphicon glyphicon-phone"> 6379409646</span></p>
      </div>
    </div>
  )
}

export default Footer
