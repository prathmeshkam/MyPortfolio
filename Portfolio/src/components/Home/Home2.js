import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="theme-color"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am passionate about programming and constantly learning new things to improve my skills. 
              <br />
              <br />I am fluent in technologies like
              <i>
                <b className="purple"> C++, Java , Angular and React. </b>
              </i>
              <br />
              <br />
              My field of interest includes building innovative &nbsp;
              <i>
                <b className="purple">Web Applications, Microservices, </b>
                and exploring areas related to{" "}
                <b className="purple">Cloud Technologies and AI.</b>
              </i>
              <br />
              <br />
              Whenever possible, I love applying my knowledge to create scalable 
              and efficient systems using <b className="purple">Spring Boot</b> and
              <i>
                <b className="purple">
                  {" "}Modern Frontend Libraries and Frameworks
                </b>
              </i>
              &nbsp; such as
              <i>
                <b className="purple"> React and Angular</b>.
              </i>
              <br />
              <br />
              I am currently working on building a <b className="purple">Quiz Application </b> 
              using React and exploring tools like Docker and Kubernetes to enhance development workflows.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="theme-color">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/prathmeshkam"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/prathmesh-kamble-461a52237"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/prathmesh2001kamble"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
