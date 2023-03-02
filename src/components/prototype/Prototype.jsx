import React from "react";
import "./Prototype.css";

export default function Prototype(props) {
  return (
    <div className={"prototype" + (props.last ? " reverse" : "")}>
      <img className="prototype-image" src={props.description.image}></img>
      <div className="prototype-content">
        <div>{props.description.title}</div>
        <div>{props.description.text}</div>
      </div>
    </div>
  );
}
