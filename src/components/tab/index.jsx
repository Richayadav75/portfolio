import React, { Component } from "react";
import { Tabs, Tab, Container, Row, Col } from "react-bootstrap";
import ImageCard from "../imageCard";
import "./style.css";

export default class TabComponent extends Component {
  render() {
    return (
      <div>
        <section className="section">
          <Container>
            <Row>
              <Col>
                <Tabs
                  className="project-tabs"
                  defaultActiveKey="home"
                  id="uncontrolled-tab-example"
                >
                  <Tab
                    className="project-tabs-list"
                    eventKey="home"
                    title="Home"
                  >
                    <div className="mb-3">
                      <ImageCard />
                    </div>
                    <div className="mb-3">
                      <ImageCard />
                    </div>
                    <div className="mb-3">
                      <ImageCard />
                    </div>
                    <div className="mb-3">
                      <ImageCard />
                    </div>
                  </Tab>
                  <Tab eventKey="profile" title="Profile">
                    <div className="mb-3">
                      <ImageCard />
                    </div>
                    <div className="mb-3">
                      <ImageCard />
                    </div>
                  </Tab>
                  <Tab eventKey="contact" title="Contact">
                    <div className="mb-3">
                      <ImageCard />
                    </div>
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}
