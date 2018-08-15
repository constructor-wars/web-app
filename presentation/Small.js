import React, { Component } from "react";

export default class Small extends Component {
  render() {
    return (
      <h4 style={{ fontSize: "10px" }}>
        "{this.props.name} : <em>{this.props.quote}</em>"
      </h4>
    );
  }
}
