import React from "react";
import image from "../assets/images/Casey_portfolio_image.cropped.png";
import "../../src/App.css";

export default function About() {
  return (
    <section className="container">
      <div className="about-image-container">
        <img src={image} alt="casey" className="cj-image" />
      </div>
      <h3 className="about-name">Casey Johnson Jamora</h3>
      <h3 className="about-title">Full Stack Developer</h3>
      <div className="about-me">
        <div className="about-text">
          <p className="paragraph">
            Full Stack Web Developer, with a keen interest in front-end
            development. I am passionate about serving the fine arts community,
            and wish to use my software engineering skills to further
            technological advancements in the art world. I hold an MA in
            Contemporary Art History, and have an extensive background in
            non-profit arts fundraising, which has instilled an astute attention
            to detail and a friendly collaborative nature. Well versed in HTML,
            CSS, Javascript, Node.js, and React to build user-friendly web
            applications, and a drive and enthusiasm to learn more development
            languages. A recent graduate of the University of Richmond’s Full
            Stack Coding Boot Camp, I have experience working with a team,
            demonstrating strong leadership and communication skills.
          </p>
        </div>
      </div>
    </section>
  );
}
