import React from "react";
import "./Prototype.css";
import { motion } from "framer-motion";

export default function Prototype(props) {
  return (
    <motion.div
      className={"prototype" + (props.last ? " reverse" : "")}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      transition={{
        duration: 0.25,
        delay: 0.5,
      }}
    >
      <img className="prototype-image" src={props.description.image}></img>
      <div className="prototype-content">
        <div>{props.description.title}</div>
        <div>{props.description.text}</div>
      </div>
    </motion.div>
  );
}
