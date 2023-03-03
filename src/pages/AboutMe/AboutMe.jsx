import React from "react";
import "./AboutMe.css";
import { motion } from "framer-motion";
import iconCss from "/icons/skill_css.svg";
import iconHtml from "/icons/skill_html.svg";
import iconJavascript from "/icons/skill_javascript.svg";
import iconAngular from "/icons/skill_angular.svg";
import iconMongo from "/icons/skill_mongodb.svg";
import iconTypescript from "/icons/skill_typescript.svg";
import iconNode from "/icons/skill_nodejs.svg";
import iconReact from "/icons/skill_react.svg";
import iconMore from "/icons/skill_more.svg";

export default function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me-container">
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
        >
          <div className="about-me-header">ABOUT ME </div>
          <div className="about-me-text">
            I am a full stack web developer, computer science student, and
            software engineer. With experience in a range of programming
            languages, I have developed web and mobile applications. As a
            lifelong learner, I am always seeking out new challenges to expand
            my knowledge of software design principles, algorithms, and data
            structures. I am passionate about creating reliable, high-quality
            software that meets the needs of users through collaboration and
            continuous feedback.
          </div>
        </motion.div>
        <motion.div
          className="skill-section"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
        >
          <img src={iconHtml}></img>
          <img src={iconCss}></img>
          <img src={iconJavascript}></img>
          <img src={iconTypescript}></img>
          <img src={iconReact}></img>
          <img src={iconAngular}></img>
          <img src={iconMongo}></img>
          <img src={iconNode}></img>
          <img src={iconMore}></img>
        </motion.div>
      </div>
    </div>
  );
}
