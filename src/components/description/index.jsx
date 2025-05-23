import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import ButtonComponent from "../button";

export default class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  isClickHandle = () => {
    let state = this.state;
    state.isOpen = !state.isOpen;
    this.setState({ ...state });
    console.log(state);
  };
  render() {
    return (
      <div>
        <section className="section">
          <Container>
            <Row>
              <Col>
                <h1 className="text-lg">Hi_</h1>
                <p className="py-5 person-description">
                  I am Richa Web developer able to build a Web presence from the
                  ground up - from concept, navigation, layout and programming
                  to UX and SEO. Skilled at writing well-designed, testable and
                  efficient code using current best practices in Web
                  development. Fast learner, hard worker and team player who is
                  proficient in an array of scripting languages and multimedia
                  Web tools.
                </p>
                <ButtonComponent onClickHandler={this.isClickHandle} />
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}
