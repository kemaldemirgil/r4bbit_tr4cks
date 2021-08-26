import React from "react";
import Navigator from "../navigator";
import { Link } from "react-router-dom";
import img from "../../assets/purple.webp";
import img2 from "../../assets/rabbits.webp";
import { Container, Row, Col } from "react-bootstrap";

const rabbit = () => {
  return (
    <div className="rabbit">
      <div className="title2">
        <h3>
          <Link to="/">hidd3n r4bbit tr4cks</Link> &#10093;&#10093; about
          &#10093;&#10093; the rabbit
        </h3>
        <small>vol 1.0.0</small>
      </div>
      <div className="content">
        <Container fluid>
          <Row>
            <Col>
              <h4>&#10063;Kemal Demirgil (b. 1997 RUS)</h4>
              <p>
                I've been living around the world since I was born, experienced
                many lifestyles, cultures and people.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <h4>&#10063;Vision</h4>
              <p>
                I think everything would've been better if we were away from all
                the distractions we have in our lifestyles. In the 2000s, life
                was so much more pure and simple, now with the internet and
                social media, life has become a simulation where everyone is
                under their masks and only showing what they want to be instead
                of who they are.
                <br />
                I'm hoping we can go back to our normal personalities, where
                small things made us happy, and we all lived a simple, humble
                life.
              </p>
            </Col>
            <Col md={2}>
              <img src={img} width="200" height="200" alt="faces"></img>
              <br />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <h4>&#10063;Objective</h4>
              <p>
                Every case I was a positive impact and a good example for
                others, there is a chance of spreading this effect and
                influencing others. I will continue to put out truth and
                kindness to people, hoping to see the number of people doing the
                same increase.{" "}
              </p>
            </Col>
            <Col md={2}>
              <img src={img2} width="200" height="200" alt="rabbits"></img>
              <br />
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>&#10063;Follow the rabbit</h4>
              <br />
              <p>
                linkedin:
                <a
                  href="https://www.linkedin.com/in/kemaldemirgil/"
                  target="_blank"
                  rel="noreferrer"
                >
                  kemaldemirgil
                </a>
              </p>
              <br />
              <p>
                github:
                <a
                  href="https://github.com/kemaldemirgil"
                  target="_blank"
                  rel="noreferrer"
                >
                  kemaldemirgil
                </a>
              </p>
              <br />
              <p>
                email:
                <a
                  href="mailto:kemal.demirgil@hotmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  kemal.demirgil@hotmail.com
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Navigator />
    </div>
  );
};

export default rabbit;
