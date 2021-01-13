import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class ButtonComponent extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.props.onClickHandler} variant="primary">
          Primary
        </Button>
      </div>
    );
  }
}
