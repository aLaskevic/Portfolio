import React from "react";
import Image from "/Livepiano.png";
import "./Prototype.css";

export default function Prototype(props) {
  return (
    <div className={"prototype" + (props.last ? " reverse" : "")}>
      <img className="prototype-image" src={Image}></img>
      <div className="prototype-content">
        <div>{props.description.title}</div>
        <div>{props.description.text}</div>
      </div>
    </div>
  );
}
