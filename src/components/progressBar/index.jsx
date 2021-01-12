import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

export default class Progress extends Component {
  render() {
    return (
      <div>
        <section className="section">
          <Container>
            <Row>
              <Col xs="12" sm="12" lg="12" xl="12">
                <h3 className="resume-title">{this.props.sName}</h3>
              </Col>
              <Col xs="6" sm="4" lg="6" xl="6">
                {this.props.slist.map((listItem, index) => (
                  <div className="progress-list" key={index}>
                    <div className="d-flex justify-content-between progress-list__skill">
                      <span className="">{listItem.skillName}</span>
                      <span className="">{listItem.skillPercent}</span>
                    </div>
                    <ProgressBar
                      className="progress-bar__skill"
                      now={60}
                      max={100}
                      min={0}
                      key={1}
                    />
                  </div>
                ))}
              </Col>
              <Col xs="6" sm="4" lg="6" xl="6">
                {this.props.slist.map((listItem, index) => (
                  <div className="progress-list" key={index}>
                    <div className="d-flex justify-content-between progress-list__skill">
                      <span className="">{listItem.skillName}</span>
                      <span className="">{listItem.skillPercent}</span>
                    </div>
                    <ProgressBar
                      className="progress-bar__skill"
                      now={60}
                      max={100}
                      min={0}
                      key={1}
                    />
                  </div>
                ))}
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}
