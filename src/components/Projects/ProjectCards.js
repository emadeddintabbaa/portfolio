import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaApple, FaGooglePlay } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        {/* Play Store Button */}
        {props.playStoreLink && (
          <Button
            variant="primary"
            href={props.playStoreLink}
            target="_blank"
            style={{ marginRight: "10px" }}
          >
            <FaGooglePlay /> &nbsp;
            {"Play Store"}
          </Button>
        )}

        {/* App Store Button */}
        {props.appStoreLink && (
          <Button
            variant="primary"
            href={props.appStoreLink}
            target="_blank"
          >
            <FaApple /> &nbsp;
            {"App Store"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
