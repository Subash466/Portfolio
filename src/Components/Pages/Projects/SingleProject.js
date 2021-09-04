import React, { useState } from 'react';
import "./Project.css";

const SingleProject = ({img,git,link,disc,title}) => {
  const [isHover,setIsHover]=useState(false)
  
  return (
    <div className="list" >
     <div className="project-details" onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
     <a href={link} target="_blank"  rel="noreferrer">
     {
     isHover ? (
      <>
     <h3>{title}</h3>
     <p>{disc}</p>
     </>
     )
     :
    <img src={img} alt={title}/>
     }</a></div>
     <div className="git"><a href={git}><button>Code</button></a></div>
    </div>
  )
}

export default SingleProject
