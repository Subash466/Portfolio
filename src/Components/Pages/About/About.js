import React from 'react';
import './About.css'
import js from "../../Images/js.png";
import react from "../../Images/react.png";
import bootstrap from "../../Images/bootstrap.png";
import node from "../../Images/node.png";
import db from "../../Images/db.png";
import redux from "../../Images/redux.png";

const About = () => {
  return (
    <>
    <div className="about" id="about">
      <div className="container">
         <div className="details" >
            <p className="col-sm-6">I'm student of Anna University,Chennai and passionate about developing  websites and Apps. Even though I'm biotechnology student , I had an interest in web development , this attraction led towards gaining skill in Full Stack Development . Now I'm happy being a Web Developer. My Goal is become a Full Stack developer and develope more Websites and Apps. </p>
             <span className="col-sm-6 info"> 
              <span>
                <h2>EDUCATION</h2>
                <li>Completed Bachelor of Technology in Alagappa College of Technology, Anna University, Chennai</li>
              </span>
              <span>
                <h2>Work Experience</h2>
                <li>Pursuing Alchemyst Full Stack Developer Program in skill safari </li>
                <li>Completed Skill Safari Summer Internship Program 2021</li>
                <li> Completed online training on Website Development Mastery program on ACADEMY OF WEALTH </li>
              </span>
              <span>
                <h2>INTERESTS</h2>
                <li className="glyphicon glyphicon-pushpin"> Web Development</li><br/>
                <li className="glyphicon glyphicon-pushpin"> React Developer</li><br/>
                <li className="glyphicon glyphicon-pushpin"> Full Stack Developer</li><br/>
                <li className="glyphicon glyphicon-pushpin"> MERN Stack Developer</li>
              </span>
              </span>
          </div>
          </div>
          </div>
          <div className="skills">
            <h1> Skills</h1>
            <div className="image">
             <div className="skills-img">
             <p><img src={js} alt="Javascript"/>JavaScript</p>
             <p><img src={bootstrap} alt="Bootstrap"/>CSS & Bootstrap</p>
             <p><img src={react} alt="react"/> React.js</p>
             <p><img src={node} alt="node"/>Node js & Express</p>
             <p><img src={db} alt="database"/>MongoDB & MySQL</p>
             <p><img src={redux} alt="redux"/> Redux</p>
             </div>
             </div>
          </div>
          </>
  )
}

export default About
