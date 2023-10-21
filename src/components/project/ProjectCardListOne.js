import React from "react";
import { ProjectCardOne } from "./ProjectCardOne";
import projWeatherApp from "../../assets/img/project-weatherapp.png";
import { Container, Row, Col } from "react-bootstrap";

const projects = 
  {
    title: "Weather App",
    description: "#HTML #CSS #RWD #JavaScript",
    imgUrl: projWeatherApp,

  };

const ProjectCardList = () => {
  return (
    <Container>
      <Row>
        <Col>
          <ProjectCardOne {...projects} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectCardList;
