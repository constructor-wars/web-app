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
      const dataToSendToIframe = {
        codeToEval: nextProps.codeToEval,
        sampleInput: JSON.parse(this.props.test_spec.sampleInput),

        functionName: this.props.test_spec.functionName
      };
      this.targetFrame.contentWindow.postMessage(dataToSendToIframe, "*");
    }
  }

  handleFrameTasks(event) {
    if (event.data.evalCode === "evalCode") {
      const reply = {
        id: this.state.reply.length + 1,
        method: "result",
        data: [event.data.result]
      };
      this.setState(prevState => ({
        reply: [...prevState.reply, reply],
        evaledCode: event.data.result
      }));
    }
  }

  render() {
    return (
      <div>
        {this.state.evaledCode ? (
          <TestCase
            evaledCode={this.state.evaledCode}
            {...this.props.test_spec}
          />
        ) : null}
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
