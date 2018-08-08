import React from "react";
import "./instructions.css";
import Markdown from "react-remarkable";

class Instructions extends React.Component {
  render() {
    return (
      <div className="instructions__text">
        <h1>{this.props.question_title}</h1>
        <Markdown source={this.props.instructions} />
      </div>
    );
  }
}

export default Instructions;
