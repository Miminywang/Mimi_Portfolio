import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { QProjectCard } from "./QProjectCard";
import projPortfolio from "../../assets/img/project-portfolio.png";

const projects = 
  {
    title: "Personal Portfolio",
    description: "#HTML5, #CSS3, #JavaScript, #Bootstrap, #ReactJS, #Nodejs",
    imgUrl: projPortfolio,
  };

const QProjectCardList = () => {
 
  return (      
    <Container>
      <div>
        <QProjectCard {...projects} />
      </div>

      <Row>
        <Col md={12} className="project-detail">
        <h3>Summary</h3>
          <p>MyPortfolio 是一個自行搭建個人網站，提供技能和專案作品的總攬。這個網站利用ReactJS和Bootstrap等相關套件實現了動態和交互式前端部分。其設計目的是為了實踐ReactJS的使用能力。</p>
      
        <h3>Tools</h3>
          <p>HTML5, CSS3, JavaScript, Bootstrap(5.3.2), ReactJS</p>
      
        <h3>Workflow</h3>
          <p>— 使用 HTML5 和 CSS3 構建整個網站結構，並利用 Bootstrap 實現響應式設計。</p>
          <p>— 運用 ReactJS 架構打造互動性高、動態的功能，並透過react-router實現網頁內部導航功能。</p>
          <p>— 整合 animate.css 添加動畫效果，提升使用者體驗。</p>
          <p>— 提供填寫表單聯繫方式，使用 emailjs-com 實現郵件發送，並透過 DOMPurify 確保表單安全性。
          </p>
          </Col>
      </Row>
    </Container>
  );
};

export default QProjectCardList;
