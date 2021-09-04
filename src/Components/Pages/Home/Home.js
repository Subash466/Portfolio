import React from 'react'
import Mypic from '../../Images/Mypic.png'
import "./Home.css"


const Home = () => {
  return (
    <div className="home" id="home">
    <div className="home-container">
    <div className="left">
    <div className="home-img">
        <img className="img-circle" src={Mypic} alt="Profile" />
    </div>
    <h3>SUBASH <span>BALRAJ</span></h3>
    </div>
    <div className="right">
      <h4>" Programming isn't about what you know; It's about what you <span>can figure out "</span></h4>
      <div className="my-info">
        <a href="#project"><button className="btn">My Work</button></a>
         <a href="#footer"><button className="btn contact">Contact Me !</button></a>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Home
