import React from "react";
import logo from "../../assets/logo.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import gmail from "../../assets/gmail.svg";
import avatar from "../../assets/avatar.svg";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

export default function Home() {
  return (
    <ScrollContainer>
      <div className="Home">
        <div className="navigation">
          <img className="navigation-logo" src={logo}></img>
          <ul className="navigation-menu">
            <li
              className="l"
              onClick={() => {
                document
                  .querySelector(".Home")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Home
            </li>
            <li
              className="l"
              onClick={() => {
                document
                  .querySelector(".about-me")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              About
            </li>
            <li className="l">Contact</li>
            <li
              id="button-primary"
              onClick={() => {
                document
                  .querySelector(".projects-section")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              My Projects
            </li>
          </ul>
        </div>
        <main>
          <div className="left-section">
            <div className="headline">
              <div className="headline-title">HEY THERE 👋 I'AM</div>
              <div className="headline-links">
                <img
                  src={linkedin}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/alexander-laskevic/"
                    )
                  }
                ></img>
                <img
                  src={github}
                  onClick={() => window.open("https://github.com/aLaskevic")}
                ></img>
                <img
                  src={gmail}
                  onClick={() =>
                    (window.location.href = "mailto:al.laskevic@gmail.com")
                  }
                ></img>
              </div>
            </div>
            <div className="name">
              <span className="primary-color">A</span>LEXANDER
              <br></br>
              <span className="primary-color">L</span>ASKEVIC
            </div>
            <div className="profile-tags">
              <span>Fullstack Developer</span>
              <span>•</span>
              <span id="typed">
                <Typewriter
                  words={[
                    "Developer with passion",
                    "Gaming Enthusiast",
                    "Computer Science Student",
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </div>
            <div className="resume">Resume</div>
          </div>
          <div className="avatar">
            <img className="avatar-image" src={avatar}></img>
            <div className="avatar-rect"></div>
          </div>
        </main>
      </div>
    </ScrollContainer>
  );
}
