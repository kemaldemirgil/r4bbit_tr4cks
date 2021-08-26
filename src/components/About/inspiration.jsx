import React from "react";
import Navigator from "../navigator";
import { Link } from "react-router-dom";
import manu from "../../assets/manu.png";
import soundopamine from "../../assets/soundopamine.webp";
import { Container, Row, Col } from "react-bootstrap";

const inspiration = () => {
  return (
    <div className="rabbit">
      <div className="title2">
        <h3>
          <Link to="/">hidd3n r4bbit tr4cks</Link> &#10093;&#10093; about
          &#10093;&#10093; inspiration
        </h3>
        <small>vol 1.0.0</small>
      </div>
      <div className="content">
        <Container fluid>
          <Row>
            <Col></Col>
            <Col>
              <h4>&#10063;inspiration</h4>
              <p>
                I sometimes imagine the world in the 2000s (2003 was gold, I
                believe) or sometimes I just imagine it without any of the human
                made structures and just pure nature. Either way, thinking about
                it, makes the world more enjoyable in my view. However, there
                are many things that I get inspired from, I really enjoy some
                movies, songs and art.
              </p>
            </Col>
            <Col>
              <img
                src="https://media.giphy.com/media/3o6Zt0hNCfak3QCqsw/giphy.gif"
                width="250"
                height="200"
                alt="the matrix"
              ></img>
              <br />
              <small>the matrix (1999)</small>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <img
                  src="https://media.giphy.com/media/EoCPvzEv8Ha0g/giphy.gif"
                  alt="pulp fiction"
                ></img>
                <br />
                <small>pulp fiction (1994)</small>
              </div>
            </Col>
            <Col>
              <h4>favourite movies</h4>
              <ul>
                <li>the matrix</li>
                <li>lord of the rings</li>
                <li>pulp fiction</li>
                <li>the godfather</li>
                <li>schindler's list</li>
              </ul>
            </Col>
            <Col>
              <img src={manu} alt="faces"></img>
              <br />
              <small>manu shrine (1987-2015)</small>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                src="https://media.giphy.com/media/tHX5WFbUTrfGCfg7f8/giphy.gif"
                width="300"
                height="260"
                alt="low"
              ></img>
              <br />
              <small>low </small>
            </Col>
            <Col>
              <h4>&#10063;ASDASDASD</h4>
              <p>asdasdasdasd</p>
            </Col>
            <Col>
              <img src={soundopamine} alt="soundopamine"></img>
              <br />
              <small>soundopamine</small>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src="https://i.imgur.com/khiEuqeg.png" alt="mars"></img>
              <br />

              <small>gale crater, mars 2015</small>
            </Col>
            <Col>
              <h4>&#10063;ASDSAD</h4>
              <p>asdasdasd</p>
            </Col>
            <Col>
              <img src="https://i.redd.it/8wf9eztv67d61.jpg" alt="kenshi"></img>
              <br />
              <small>kenshi</small>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                src="https://cdn.mos.cms.futurecdn.net/pvD3MXce9gA3C6soY5cLa9-970-80.jpg.webp"
                alt="mars"
              ></img>
              <br />
              <small>middle earth, minecraft</small>
            </Col>
            <Col>asdas</Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
      <Navigator />
    </div>
  );
};

export default inspiration;
