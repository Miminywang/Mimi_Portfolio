import React from "react";
import 'animate.css';
import { Container, Row, Col } from "react-bootstrap";

export const ProjectCardOne = ({ title, description, imgUrl }) => {
  
  const redirectToGithub = () => {
    window.open ('https://github.com/Miminywang/Weather-app');
  };

  const redirectToDemo = () => {
    window.open ('https://weather-9qkros0mg-miminywangs-projects.vercel.app/');
  };

  return (
    <Container>
      <Row>
        <Col lg={6} className="mx-auto">
          <div className="proj-imgbx proj-card">
            <img src={imgUrl} alt={title} />
            <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>

          <div className="mt-5 btn-container">
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

          <div className="mt-5 d-flex">
            <h5 className="project-h5">
              透過ReactJS建立一個城市天氣查詢應用程式，運用Fetch API整合OpenWeatherMap以取得最新的天氣資料。
              </h5>
                </div>
              </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}