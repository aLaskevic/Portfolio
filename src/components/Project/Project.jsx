import React from "react";
import "./Project.css";

export default function Project(props) {
  console.log(props);
  return (
    <div className="project">
      <div className="project-title">
        <h1>{props.project.name}</h1>
        <h1>{"0" + (props.index + 1)}</h1>
      </div>
      <div className="project-content">
        <div className="project-left">
          <div className="image-container">
            <div></div>
            <img src={"/" + props.project.image}></img>
          </div>
          <ul className="Skilltags">
            {props.project.technologies.map((skill) => {
              return <li>{skill}</li>;
            })}
          </ul>
        </div>
        <div className="project-right">
          <div className="project-right-title">
            <h2>What is {props.project.name}</h2>
            <h2>Read more</h2>
          </div>
          <div className="project-right-text">{props.project.description}</div>
          <div className="project-right-click">
            <div
              onClick={() => {
                window.open(props.project.website);
              }}
            >
              Website
            </div>
            <div
              onClick={() => {
                window.open(props.project.github);
              }}
            >
              Check out my Code
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
