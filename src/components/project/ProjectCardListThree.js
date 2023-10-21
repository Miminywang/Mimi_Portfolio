import React from "react";
import { ProjectCardThree } from "./ProjectCardThree";
import projTodoList from "../../assets/img/project-todolist.png";
import { Container, Row, Col } from "react-bootstrap";

const projects = 
  {
    title: "Todo List",
    description: "#HTML #CSS #JavaScript",
    imgUrl: projTodoList,

  };

const ProjectCardListThree = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <ProjectCardThree {...projects} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectCardListThree;
