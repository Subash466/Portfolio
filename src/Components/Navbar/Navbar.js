import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="nav-tag">
      <nav className="navbar navbar-inverse navbar-fixed top">
              <div className="container">
            <div className="navbar-header ">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#mynav">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <h1>Developer</h1>
             </div>
                  <div className="collapse navbar-collapse" id="mynav" >
                  <ul className="nav navbar-nav navbar-right"> 
                      <li ><a href="/" ><span className="glyphicon glyphicon-home"></span> Home</a></li>
                      <li ><a href="#about" onScroll><span className="glyphicon glyphicon-user"></span> About</a></li>
                      <li ><a href="#project"><span className="glyphicon glyphicon-education"></span> Projects</a></li>
                      <li ><a href="#resume"><span className="glyphicon glyphicon-list-alt"></span> Resume</a></li>
                      <li ><a href="#contact"><span className="glyphicon glyphicon-envelope"></span> Contact</a></li>
            </ul>  
               </div>       
              </div>  
        </nav> 
    </div>
  )
}

export default Navbar
