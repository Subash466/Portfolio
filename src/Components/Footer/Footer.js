import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="link">
      <a href="https://github.com/Subash466/" ><span className="glyphicon glyphicon-log-in"> linkedin</span></a>
      <a href="https://www.linkedin.com/in/subash-balraj/" ><span className="glyphicon glyphicon-export"> GitHub</span></a>
      </div>
      <div className="info">
        <p><span className="glyphicon glyphicon-envelope"> 2812subash@gmail</span></p>
        <p><span className="glyphicon glyphicon-phone"> 9698463639</span></p>
      </div>
    </div>
  )
}

export default Footer
