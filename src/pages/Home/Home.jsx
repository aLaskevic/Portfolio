import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import gmail from "../../assets/gmail.svg";
import abstract from "/Screen.svg";
import resume from "/Laskevic_Alexander_Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";

export default function Home() {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="Home">
      <nav>
        <img src={logo}></img>
        <ul>
          <li
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
          <li
            onClick={() => {
              document
                .querySelector(".contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </li>
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
      </nav>
      <div
        className="nav-mobile"
        onClick={() =>
          setIsShown((prev) => {
            return !prev;
          })
        }
      >
        <FontAwesomeIcon icon={isShown ? faXmark : faBars} />
      </div>
      <div className={"nav-mobile-screen" + (isShown ? " show" : " hide")}>
        <ul>
          <li
            onClick={() => {
              document
                .querySelector(".Home")
                .scrollIntoView({ behavior: "smooth" });
              setIsShown(false);
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              document
                .querySelector(".about-me")
                .scrollIntoView({ behavior: "smooth" });
              setIsShown(false);
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              document
                .querySelector(".contact")
                .scrollIntoView({ behavior: "smooth" });
              setIsShown(false);
            }}
          >
            Contact
          </li>
          <li
            onClick={() => {
              document
                .querySelector(".projects-section")
                .scrollIntoView({ behavior: "smooth" });
              setIsShown(false);
            }}
          >
            My Projects
          </li>
        </ul>
      </div>
      <img className="nav-mobile-logo" src={logo}></img>
      <div className="container">
        <div className="home-informations">
          <div className="first">
            <span>HI THERE 👋, I’M</span>
            <div>
              <img
                src={linkedin}
                onClick={() =>
                  window.open("https://www.linkedin.com/in/alexander-laskevic/")
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
          <div className="second">alex laskevic.</div>
          <div className="third">
            <span>FULLSTACK ‍💻</span>
            <span>•</span>
            <Typewriter
              words={[
                "DEVELOPER WITH PASSION!",
                "CREATIVE PROBLEM SOLVER!",
                "COMPUTER SCIENCE STUDENT",
              ]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </div>
          <div className="fourth">
            Full Stack Developer who focuses on writing clean, elegent and
            efficent Code and also love designing UI
          </div>
          <div className="resume" onClick={() => window.open(resume)}>
            Resume
          </div>
        </div>
        <img src={abstract}></img>
      </div>
    </div>
  );
}
