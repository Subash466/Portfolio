import React from 'react'
import Mypic from '../../Images/Mypic.png'
import "./Home.css"

const Home = () => {
  return (
    <div className="home" id="home">
    <div className="home-img">
        <img className="img-circle" src={Mypic} alt="Profile" />
    </div>
    <h3>SUBASH BALRAJ</h3>
    <p>Hi, I'm Subash a Web Developer. I am passionate about developing Websites and Apps. </p>
    </div>
  )
}

export default Home
