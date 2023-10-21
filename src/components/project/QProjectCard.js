import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const QProjectCard = ({ title, description, imgUrl }) => {

  const redirectToGithub = () => {
    window.open ('https://github.com/Miminywang/Mimi_Portfolio');
  };

  const redirectToDemo = () => {
    window.open ('https://mimi-portfolio.vercel.app/');
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={12} className="proj-container"> 
          <div className="proj-imgbx">
            <img src={imgUrl} alt={title} />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>

              <div className="btn-container">
                <div className="project-btnbx">
                  <button
                    className="btn btn-color-2"
                    onClick={redirectToGithub}
                  >
                    Github
                  </button>
                </div>

                <div className="project-btnbx">
                  <button
                    className="btn btn-color-2 "
                    onClick={redirectToDemo}
                  >
                    Demo
                  </button>
                </div>
              </div>
            </div>    
          </div>
        </Col>
      </Row>
    </Container>
  )
}
