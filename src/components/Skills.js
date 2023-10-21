import React from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { AiOutlineTool } from "react-icons/ai";
import { RiEnglishInput } from "react-icons/ri";
import { IoLanguageOutline } from "react-icons/io5";
import { TbLanguageHiragana } from "react-icons/tb";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <div className="container">
          <div className="skill-bx">
            <h2>Skills</h2>
            <p>MAKE THE MOST OF THE SKILLS</p>
            <Row>
              <Col md={6}>
                <div className="custom-box frontend">
                  <h3 className='mt-3'>Frontend</h3>
                  <div className="divider"></div>
                  <ul>
                    <li><FaHtml5 /> HTML5</li>
                    <li><FaCss3 /> CSS3</li>
                    <li><AiOutlineTool /> RWD</li>
                    <li><FaJs /> JavaScript</li>
                    <li><BsBootstrap /> Bootstrap</li>
                    <li><FaReact /> ReactJS</li>
                    <li><AiOutlineTool /> Webpack</li>
                    <li><AiOutlineTool /> Npm</li>
                    <li><AiOutlineTool /> Eslint</li>
                  </ul>
                </div>
              </Col>

              <Col md={6}>
                <Row>
                  <Col xs={12}>
                    <div className="custom-box backend">
                      <h3 className='mt-3 mb-4'>Backend</h3>
                      <div className="divider"></div>
                      <ul>
                        <li><AiOutlineTool /> API</li>
                        <li><FaNodeJs /> Node.js</li>
                        <li><AiOutlineTool />MongoDB</li>
                      </ul>
                    </div>
                  </Col>

                  <Col xs={12}>
                    <div className="custom-box language">
                      <h3 className='mt-3 mb-4'>Languages</h3>
                      <div className="divider"></div>
                      <ul>
                        <li><IoLanguageOutline /> Mandarin — Native</li>
                        <li><RiEnglishInput />  English — Professional proficiency</li>
                        <li><TbLanguageHiragana /> Japanese — Entry-level</li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}

export default Skills;
