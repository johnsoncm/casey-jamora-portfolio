import React from "react";
import "../../src/App.css";
import resume from "../assets/images/Casey_Johnson_Jamora_Resume.8.11.21.pdf";

const mystyle = {
  fontFamily: "Monofett",
  color: "black",
  textDecorationLine: "none",
  textAlign: "center",
  fontSize: "70px",
};

export default function Resume() {
  return (
    <div className="resume">
      <h2 className="resume-link" style={{ mystyle }}>
        {" "}
        <a
          className="resume-link2"
          href={resume}
          target="_blank"
          rel="noreferrer"
        >
          Link to Resume
        </a>{" "}
      </h2>

      <h3 className="resume-heading">Front End Languages</h3>
      <ul className="lang-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>jQuery</li>
        <li>React</li>
      </ul>
      <h3 className="resume-heading">Back End Languages</h3>
      <ul className="lang-list">
        <li>Node</li>
        <li>Express</li>
        <li>Apollo</li>
        <li>GraphQL</li>
        <li>MySQL</li>
        <li>Sequelize</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>Inquirer</li>
        <li>Jest</li>
      </ul>
      <h3 className="resume-heading">Other Technologies</h3>
      <ul className="lang-list">
        <li>Bootstrap</li>
        <li>Semantic UI</li>
        <li>Bycrypt</li>
        <li>Bulma</li>
        <li>Handlebars</li>
        <li>Google Fonts</li>
        <li>Font Awesome</li>
      </ul>
    </div>
  );
}
