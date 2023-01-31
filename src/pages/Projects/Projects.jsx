import React from "react";
import { useState } from "react";
import Project from "../../components/Project/Project";
import data from "./Projects.json";
import "./Projects.css";

export default function project() {
  return (
    <div className="projects-section">
      <div className="title">
        <span>CHECK OUT MY</span>
        <span>Latest Projects</span>
      </div>
      <div className="project-list">
        {data.map((project, index) => {
          return <Project index={index} project={{ ...project }}></Project>;
        })}
      </div>
    </div>
  );
}
