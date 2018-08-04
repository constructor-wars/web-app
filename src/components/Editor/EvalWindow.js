import React, { Component } from "react";

export default class EvalWindow extends Component {
  constructor(props) {
    super(props);
    this.setTargetFrame = element => {
      this.targetFrame = element;
    };
    this.setCodeTarget = element => {
      this.codeTarget = element;
    };
    this.state = {
      code: this.props.codeToEval,
      reply: ""
    };

    this.handelClick = this.handelClick.bind(this);
    this.handleFrameTasks = this.handleFrameTasks.bind(this);
  }

  componentDidMount() {
    window.addEventListener("message", this.handleFrameTasks);
    // this.targetFrame.contentWindow.postMessage(this.state.code, "*");
  }
  componentWillUnmount() {
    window.removeEventListener("message", this.handleFrameTasks);
  }
  handleFrameTasks(event) {
    if (event.data.evalCode === "evalCode") {
      this.setState({ reply: event.data.result }, () =>
        console.log(this.state)
      );
    }
  }
  handelClick() {
    this.targetFrame.contentWindow.postMessage(this.state.code, "*");
  }

  render() {
    return (
      <div>
        <pre ref={this.setCodeTarget}>
          <code>{this.state.reply}</code>
        </pre>
        <div onClick={this.handelClick}>click</div>
        <iframe
          ref={this.setTargetFrame}
          sandbox="allow-scripts"
          id="targetFrame"
          src="/dist/iframePage.html"
          // style={{ display: "none" }}
        />
      </div>
    );
  }
}
