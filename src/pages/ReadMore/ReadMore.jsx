import React from "react";
import "./ReadMore.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Prototype from "../../components/prototype/Prototype";
import { motion } from "framer-motion";

export default function ReadMore(props) {
  return (
    <div className={"read-more " + (props.isModalOpen ? "show" : "hide")}>
      <div className="read-more-back" onClick={() => props.close()}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>
      <div className="read-more-home">
        {props.project.readMore ? (
          <img src={"./" + props.project.readMore?.backgroundImage}></img>
        ) : (
          ""
        )}
        <div className="dark-overlay">
          <div className="read-more-home-title">
            <div>PROJECT</div>
            <div>{props.project.name}</div>
            <ul>
              {props.project.technologies.map((skill) => {
                return <li>{skill}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="read-more-introduction">
        <div className="read-more-introduction-title">Introduction</div>
        <div className="read-more-introduction-text">
          {props.project.readMore?.introduction}
        </div>
        <div
          className="read-more-introduction-button"
          onClick={() => window.open(props.project.website)}
        >
          Visit Application
        </div>
      </div>
      <div className="read-more-prototype">
        <div className="prototype-title">
          <div>{props.project.name.toUpperCase()}</div>
          <div>The Prototype</div>
          {console.log("THE PROPS: ", props)}
          {props.project.readMore?.descriptions.map((description, index) => {
            if (index % 2 == 0)
              return (
                <Prototype
                  id={index}
                  description={description}
                  last={true}
                ></Prototype>
              );

            return (
              <Prototype
                id={index}
                description={description}
                last={false}
              ></Prototype>
            );
          })}
        </div>
      </div>
    </div>
  );
}
