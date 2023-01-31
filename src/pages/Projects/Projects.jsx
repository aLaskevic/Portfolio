import React from "react";
import { useState } from "react";
import Project from "../../components/Project/Project";
import data from "./Projects.json";
import "./Projects.css";

export default function project() {
  const [counter, setCounter] = useState(1);
  return (
    <div className="projects-section">
      <div className="title">
        <span>CHECK OUT MY</span>
        <span>Latest Projects</span>
      </div>
      <div className="project-list">
        {data.map((project) => {
          return <Project project={{ counter, ...project }}></Project>;
        })}
      </div>
    </div>
  );
}
