import React from "react";
import { Container, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import QProjectCardList  from "./QProjectCardList";
import ProjectCardListOne  from "./ProjectCardListOne";
import ProjectCardListTwo from "./ProjectCardListTwo";
import ProjectCardThree from "./ProjectCardListThree";


export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <div className="project-title">
                  <h2>Projects</h2>
                  <p>PRACTICE MAKES BETTER</p>
                </div>
                <div>
                  <QProjectCardList />
                </div>

                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Weather App</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Rock-Paper-Scissors Game</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Todo List</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <ProjectCardListOne />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <ProjectCardListTwo />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <ProjectCardThree />
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>

              </div>
            )}
          </TrackVisibility>
        </Col>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
