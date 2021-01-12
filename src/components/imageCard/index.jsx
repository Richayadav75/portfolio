import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import slider from "../../assets/images/img_project_1_mono.png";
import "./style.css";
export default class ImageCard extends Component {
  render() {
    return (
      <div className="border">
        <Row>
          <Col xs="6" sm="4" lg="6" xl="5">
            <img className="d-block w-100" src={slider} alt="First slide" />
          </Col>
          <Col className="project-brief" xs="6" sm="4" lg="6" xl="7">
            <h5 className="project-title">
              Mobile and desktop app for London hostel store
            </h5>
            <p className="project-description">
              Do answered bachelor occasion in of offended no concerns. Supply
              worthy warmth branch of no ye. Voice tried known to as my to.
              Though wished merits or be. Alone visit use these smart rooms ham.
            </p>
            <p className="project-stack">Used stack:</p>
            <ul className="project-tech pl-0">
              <li>HTML</li>
              <li>css3</li>
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}
