import React from "react";
import 'animate.css';
import { Container, Row, Col } from "react-bootstrap";

export const ProjectCardThree = ({ title, description, imgUrl }) => {
  
  const redirectToGithub = () => {
    window.open ('https://github.com/Miminywang/Todo-List');
  };

  const redirectToDemo = () => {
    window.open ('https://miminywang.github.io/Todo-List/');
  };

  return (
    <Container>
    <Row>
      <Col lg={6} className="mx-auto">
    <div className="proj-imgbx proj-card">
      <img src={imgUrl} />
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
          透過DOM操作，並運用事件處理、陣列遍歷以及日期物件等技巧，實現了用戶輸入代辦事項和指定日期，並將其即時添加至清單中的功能。
          </h5>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}