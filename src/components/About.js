import React from "react";
import 'animate.css';
import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import headshot from "../assets/img/headshot.jpg";

export const About = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section className="about" id="about">  
      <Container>
        <Row>
          <Col md={12} className="mx-auto">
            <div className="about-bx">
              <h2>About Me</h2>
              <p>CODING IS MY LIFE</p>
              <Carousel 
                responsive={responsive} 
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="row intro">
                  <Col lg={6}>
                    <img src={headshot} alt="my headshot" />
                  </Col>
                  <Col lg={6} className="custom-p">
                    <p>自2023年起，自主學習網頁前端工程相關之技術，具備HTML、CSS、RDW和JavaScript基礎能力，接續深造框架技術，包括ReactJs、Bootstrap等技能，並擁有實作的經驗。後端部分，使用 Node.js 作為主要工具，以實現用戶身份驗證、API整合、MongoDB資料庫串接等技術。</p>
                  </Col>
                </div>

                <div className="item">
                  <p>我曾任職英文編譯及採訪編輯。在過去的工作經驗中，我展現了出色的語言、精確的理解及良好的溝通能力。遇到困難時，善用資料查詢技巧、人脈以解決問題，並在截稿日前交付工作。後續與團隊共同整合專案，以確保成果順利完成。這些技能也適用於前端開發，我不僅能獨立工作，也擅長查閱外文技術資料以解決問題，且能夠與團隊進行良好的溝通與合作，而有效地提升專案成果。<br/><br/>新技術層出不窮，一入前端深似海。目前計畫未來深入學習React hooks、 TypeScript等技術，並提升debug及使用者體驗優化等技能。我將持續保持學習的動力，定期閱讀技術文章，期望成為一名優秀的前端開發人員。</p>
                </div>

                <div className="row intro">
                  <Col lg={6}>
                    <img src={headshot} alt="my headshot" />
                  </Col>
                  <Col lg={6} className="custom-p">
                    <p>Starting from 2023, I took initiative to learn web frontend technologies. I now have a solid foundation in HTML, CSS, RDW, and JavaScript, and have advanced my skills in frameworks like ReactJs and Bootstrap. <br/><br/>On the backend, I primarily utilize Node.js for tasks like user authentication, API integration, and MongoDB database work.</p>
                  </Col>
                </div>

                <div className="item">
                  <p>
                  Previously, I worked as an English translator and editor. In my previous job experiences, I showcase strong language skills, precise comprehension, and effective communication. I utilize research skills and networking to solve problems while ensuring to deliver projects on time. <br/><br/>Afterwards, I work with the team to integrate projects and secure the successful outcome. These skills are also applicable in front-end development, where I am not only capable of working independently but also proficient in accessing technical resources in foreign languages to address issues. My proficiency in collaboration and communication is a cornerstone for enhancing project outcomes.
                  </p>
                </div>

                <div className="item">
                  <p>
                  New technologies are constantly emerging. I plan to dive deeper into technologies like React hooks and TypeScript, while also enhancing skills in debugging and optimizing user experience. deeper into technologies like React hooks and TypeScript, while also enhancing skills in debugging and optimizing user experience. 
                  </p>
                </div>
              </Carousel>   
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

export default About;
