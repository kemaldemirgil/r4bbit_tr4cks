import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigator from "../navigator";
import { Link } from "react-router-dom";

const milestones = () => {
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
              <h4>&#10063;milestones</h4>
            </Col>
          </Row>
        </Container>
      </div>
      <Navigator />
    </div>
  );
};

export default milestones;
