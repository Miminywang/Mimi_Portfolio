import { Container, Row, Col } from "react-bootstrap";
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import navIconGithub from "../assets/img/nav-icon-github.svg"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="mt-5 text-center justify-content-center">

          <Col lg={3} md={5} className="mx-auto">
            <h5>嗨！ 您好</h5>
            <p style={{ lineHeight: '2' }}>
              謝謝您造訪我的網站。 <br />
              如果您正在尋找一名具潛力的前端開發者，請不吝與我聯絡。 <br />
              期待與您有更多的合作機會。 <br />
              祝您有個美好的一天！ 
            </p>
          </Col>

          <Col lg={4} md={5} className="mx-auto">
            <h5 className="text-uppercase">Hi, there</h5>
            <p style={{ lineHeight: '2' }}>
              Thank you for visiting my website. <br />
              If you are looking for a promising front-end developer, you have found the right person! <br />
              Looking forward to more potential collaborations. <br />
              Have a nice day !
            </p>
          </Col>

        <Router>
          <Col lg={2} md={4} className="mx-auto">
            <h5 className="text-uppercase">Links</h5>

            <ul className="list-unstyled">
              <li className="list">
                <Link to='#home' className="link-list">Home</Link>
              </li>
              <li className="list">
                <Link to='#about' className="link-list">About</Link>
              </li>
              <li className="list">
                <Link to='#skills' className="link-list">Skills</Link>
              </li>
              <li className="list">
                <Link to='#projects' className="link-list">Projects</Link>
              </li>
              <li className="list">
                <Link to='#background' className="link-list">Background</Link>
              </li>
              <li className="list">
                <Link to='#contact' className="link-list">Contact</Link>
              </li>
            </ul>
          </Col>
        </Router>

        <Col lg={3} md={4} className="mx-auto">
          <h5 className="text-uppercase">My Email</h5>
          <p className="text-center">
            miny82525@gmail.com
          </p>
          <br />
          <div className="social-icon">
            <a href="https://github.com/Miminywang">
              <img src={navIconGithub} alt="Github icon" />
            </a>
          </div>
        </Col>
        
        </Row>

        <hr className="divider"/>
        
        <Row className="text-center justify-content-center">
          <Col className="mx-auto copyright">
            © Copyright 2023. All Rights Reserved
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
