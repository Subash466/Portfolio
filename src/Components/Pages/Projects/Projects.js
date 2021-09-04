import React from 'react'
import "./Project.css";
import movie from "../../Images/movie.PNG";
import rps from '../../Images/Rps.PNG';
import cash from '../../Images/cash.PNG';
import Ticket from '../../Images/Ticket.PNG';
import SingleProject from './SingleProject';

const Projects = () => {
  const projectsList=[{
    name:"Movie-Review",
    disc:"This app provide Movie and series details & developed by react.js. Here Movie and series details are collected from 'themoviedb' API.",
    link:"https://movies-revies-fsd21a.netlify.app/",
    img:`${movie}`,
    git:"https://github.com/Subash466/movies-review",
  },
  {
    name:"Rock-Paper-Scissor Game",
    disc:"This is rock-paper-scissor game developed by Html,Css & Javascript. This game developed using suffle concept.",
    link:"https://rock-paper-scissor-game-subash.netlify.app/",
    img:`${rps}`,
    git:"https://github.com/Subash466/Rock-paper-scissors",
  },
  {
    name:"Cash Counter",
    disc:"This app help to check balance amount & developed by react.js. This app provide balance amount details with Note count. ",
    link:"https://cash-counter-fsd21a.netlify.app/",
    img:`${cash}`,
    git:"https://github.com/Subash466/Todo-List",
  },
  {
    name:"Movie-Ticket",
    disc:"This app about Movie ticket booking & developed using html,css & javascript. Here Local storage used to save user booking seats.",
    link:"https://ticket-select-site.netlify.app/",
    img:`${Ticket}`,
    git:"https://github.com/Subash466/Tic-Tak-Toe",
  },
]
  return (
    <div className="project-container" id="project">
    <h1>Projects </h1>
    <div className="project">
        {projectsList.map((project)=>{
          return(
          <SingleProject
          img={project.img}
          link={project.link}
          disc={project.disc}
          title={project.name}
          git={project.git}
          />
          )
        })}
         </div>
    </div>
  )}
export default Projects
