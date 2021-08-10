import React from "react";
// import { Container, Row, Col } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import Navigator from "./navigator";

const home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>hidd3n r4bbit tr4cks</h1>
        <small>vol 1.0.0</small>
      </div>
      <Navigator />
    </div>
  );
};

export default home;
