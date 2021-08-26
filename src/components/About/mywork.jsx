import React from "react";
import Navigator from "../navigator";
import { Link } from "react-router-dom";
import meteorrush from "../../assets/v0id2.gif";
import { Container, Row, Col } from "react-bootstrap";

const mywork = () => {
  return (
    <div className="rabbit">
      <div className="title2">
        <h3>
          <Link to="/">hidd3n r4bbit tr4cks</Link> &#10093;&#10093; about
          &#10093;&#10093; my work
        </h3>
        <small>vol 1.0.0</small>
      </div>
      <div className="content">
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col></Col>
            <Col md={4}>
              <h4>&#10063;my work</h4>
              <br />
              <br />
              <ul>
                <li>
                  <a
                    href="https://explorer-guide.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    explorer
                  </a>
                </li>
                <br />
                <li>
                  <a
                    href="https://my-techbook.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    techbook
                  </a>
                </li>
                <br />
                <li>
                  <a
                    href="https://weird-but-doable.github.io/SkewedNews/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    skewed news
                  </a>
                </li>
                <br />
                <li>
                  <a
                    href="https://whitewallet.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    whit3 wall3t
                  </a>
                </li>
                <br />
                <li>
                  <a
                    href="https://kemaldemirgil.github.io/meteor-rush/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    meteor rush
                  </a>
                </li>
                <br />
                <li>
                  <a
                    href="https://weird-but-doable.github.io/SkewedNews/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    skewed news
                  </a>
                </li>
                <br />
                <li>
                  <a
                    href="https://my-fit-track.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    fit track
                  </a>
                </li>
                <br />
                <li>
                  <a
                    href="https://g00gl3-b00ks.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    b00k s34rch
                  </a>
                </li>
                <br />
                <li>
                  <a
                    href="https://store-amazonia.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    amazonia
                  </a>
                </li>
                <br />
                <li>
                  <a
                    href="https://kemaldemirgil.github.io/html5-encyclopedia/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    html directory
                  </a>
                </li>
                <br />
              </ul>
            </Col>
            <Col md={4}>
              <img
                src={meteorrush}
                className="meteorrush"
                alt="meteorrush"
              ></img>
              <br />
              <small>meteor rush (2021)</small>
            </Col>
          </Row>
        </Container>
      </div>
      <Navigator />
    </div>
  );
};

export default mywork;
