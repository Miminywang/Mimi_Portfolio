import React from "react";
import 'animate.css';
import { Container, Row, Col } from "react-bootstrap";

export const ProjectCardTwo = ({ title, description, imgUrl }) => {
  
  const redirectToGithub = () => {
    window.open ('https://github.com/Miminywang/Rock-Paper-Scissors');
  };

  const redirectToDemo = () => {
    window.open ('https://rock-paper-scissors-taupe-kappa.vercel.app/');
  };

  return (
    <Container>
    <Row>
      <Col lg={6} className="mx-auto">
    <div className="proj-imgbx proj-card" >
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
          這個猜拳遊戲利用DOM操作來動態更新頁面元素，及事件監聽、陣列遍歷等技巧實現遊戲邏輯，並使用localStorage保留分數統計數據。
          </h5>
        </div>
      </div>
    </div>
        </Col>
      </Row>
    </Container>
  )
}