import React from "react";
import "./AboutMe.css";
import chess from "../../assets/chess.svg";

export default function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me-content">
        <div className="about-me-title">
          <span>About Me</span>
          <span className="divider"></span>
        </div>
        <div className="about-me-text">
          I’m a <span className="secondary-color bold">Software Engineer</span>{" "}
          with the urge to bring my ideas to life. If you like to see what I’m
          currently working on visit my{" "}
          <span className="secondary-color bold">Github</span> profile or just
          check out my project section. Further I would describe myself as:
        </div>
      </div>
      <div className="keywords">
        <span>Ambitious</span>
        <span>Gaming Enthusiastic</span>
        <span>inquisitive</span>
      </div>
      <div className="skillset-section">
        <div>
          Here are a few <span className="bold">technologies</span> where I
          specialized myself in:
        </div>
        <div className="skillset">
          <ul className="skillset-list">
            <li>Javascript (ES6+)</li>
            <li>React</li>
            <li>Websocket</li>
          </ul>
          <ul className="skillset-list">
            <li>Typescript</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
      <div className="chess">
        <span>Click Me!</span>
        <img src={chess} alt="chess" />
      </div>
      <div className="circle"></div>
      <div className="circle2"></div>
    </div>
  );
}
