import React from "react";
import { ProjectCardTwo } from "./ProjectCardTwo";
import projRockPaperScissors from "../../assets/img/project-rock-paper-scissors.png";
import { Container, Row, Col } from "react-bootstrap";

const projects = 
  {
    title: "Rock-Paper-Scissors Game",
    description: "#HTML #CSS #JavaScript",
    imgUrl: projRockPaperScissors,

  };

const ProjectCardListTwo = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <ProjectCardTwo {...projects} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectCardListTwo;
