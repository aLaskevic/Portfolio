import React from "react";
import "./Contact.css";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import gmail from "../../assets/gmail.svg";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-title">
        <div>CONTACT ME!</div>
        <div>Still have any questions?</div>
        <div className="headline-contact-links">
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
    </div>
  );
}
