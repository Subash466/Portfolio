import React from 'react';
import './About.css'
import js from "../../Images/js.png";
import react from "../../Images/react.png";
import bootstrap from "../../Images/bootstrap.png";

const About = () => {
  return (
    <>
    <div className="about" id="about">
      <div className="container">
         <div className="details" >
            <p className="col-sm-6">I'm student of Anna Univercity,Chennai and Pursuing Alchemyst Full Stack Developer Program in Skill Safari. My Goal is become Full Stack developer and develope more Websites and Apps. </p>
             <span className="col-sm-6 info"> 
              <span>
                <h2>EDUCATION</h2>
                 <li>Completed Bachelor of Technology in Alagappa College of Technology, Anna University, Chennai</li>
              </span>
              <span>
                <h2>INTERESTS</h2>
                <li className="glyphicon glyphicon-pushpin"> Web Development</li><br/>
                <li className="glyphicon glyphicon-pushpin"> React Developer</li><br/>
                <li className="glyphicon glyphicon-pushpin"> Full Stack Developer</li>
              </span>
              </span>
          </div>
          </div>
          </div>
          <div className="skills">
            <h1> Skills</h1>
             <div className="skills-img">
             <p><img src={js} alt="Javascript"/>JavaScript</p>
             <p><img src={bootstrap} alt="Bootstrap"/>CSS & Bootstrap</p>
             <p><img src={react} alt="react"/>React.js</p>
             </div>
          </div>
          </>
  )
}

export default About
