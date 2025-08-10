import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Emad Eddin Tabbaa </span>
            from <span className="purple"> Syria.</span>
            <br />
            I am currently employed as a mobile application developer.
            <br />
            I have completed my studies in Computer Science and Mobile Development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build mobile apps that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Emad Eddin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
