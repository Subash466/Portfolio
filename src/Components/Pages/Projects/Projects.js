import React from 'react'
import "./Project.css";
import movie from "../../Images/movie.PNG";
import rps from '../../Images/Rps.PNG';
import todo from '../../Images/todo.PNG';
import tic from '../../Images/tic.PNG'

const Projects = () => {
  return (
    <div className="project" id="project">
    <h1>Projects </h1>
    <div className="list">
      <div className="one img-rounded">
      <h3>Movie-Review</h3>
      <a  href="https://movies-revies-fsd21a.netlify.app/" target="_blank" rel="noreferrer"><img src={movie} alt="Movie-review" /></a>
      <div className="github ">
      <a className="glyphicon glyphicon-file" href="https://github.com/Subash466/movies-review" target="_blank" rel="noreferrer"> Code</a>
      </div>
      </div>
      <div className="one img-rounded">
      <h3>Rock-Paper-Scissor Game</h3>
      <a href="https://rock-paper-scissor-game-subash.netlify.app/" target="_blank" rel="noreferrer"><img src={rps} alt="Rps Game" /></a>
      <div className="github ">
        <a className="glyphicon glyphicon-file" href="https://github.com/Subash466/Rock-paper-scissors" target="_blank" rel="noreferrer"> Code</a>
      </div>
      </div>
      <div className="one img-rounded">
      <h3>TODO List</h3>
      <a href="https://todo-list-fsd21a.netlify.app/" target="_blank" rel="noreferrer"><img src={todo} alt="Todo list" /></a>
      <div className="github ">
        <a className="glyphicon glyphicon-file" href="https://github.com/Subash466/Todo-List" target="_blank" rel="noreferrer"> Code</a>
      </div>
      </div>
      <div className="one img-rounded">
      <h3>Tic-Tac-Toe Game</h3>
      <a href="https://tic-tak-toe-fsd21a.netlify.app/" target="_blank" rel="noreferrer"><img src={tic} alt="Tic-tac-toe game" /></a>
      <div className="github ">
        <a className="glyphicon glyphicon-file" href="https://github.com/Subash466/Tic-Tak-Toe" target="_blank" rel="noreferrer"> Code</a>
      </div>
      </div>
    </div>
  </div>
  )
}

export default Projects
