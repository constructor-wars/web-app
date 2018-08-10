import React, { Component } from "react";
import { Console } from "console-feed/lib";
import { TestCase } from "./TestCase";

export default class EvalWindow extends Component {
  constructor(props) {
    super(props);
    this.setTargetFrame = element => {
      this.targetFrame = element;
    };
    this.state = {
      reply: [
        {
          id: 1,
          method: "result",
          data: ["Your code will run here!!"]
        }
      ]
    };
    this.handleFrameTasks = this.handleFrameTasks.bind(this);
  }

  componentDidMount() {
    window.addEventListener("message", this.handleFrameTasks);
  }
  componentWillUnmount() {
    window.removeEventListener("message", this.handleFrameTasks);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.performEval) {
      const data = {
        codeToEval: nextProps.codeToEval,
        test_spec: nextProps.test_spec
      };
      this.targetFrame.contentWindow.postMessage(data, "*");
    }
  }

  handleFrameTasks(event) {
    if (event.data.evalCode === "evalCode") {
      const reply = {
        id: this.state.reply.length + 1,
        method: "result",
        data: [event.data.result.output]
      };
      this.setState(prevState => ({
        reply: [...prevState.reply, reply],
        currentCode: event.data.result.output
      }));
    }
  }

  render() {
    return (
      <div>
        <TestCase
          evaledCode={this.state.reply[0].data[0]}
          expectedResult={this.props.test_spec.expectedResult}
        />

        <Console logs={this.state.reply} variant="dark" />
        <iframe
          ref={this.setTargetFrame}
          sandbox="allow-scripts"
          id="targetFrame"
          src="/dist/iframePage.html"
          style={{ display: "none" }}
        />
      </div>
    );
  }
}
