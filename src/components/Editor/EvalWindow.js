import React, { Component } from "react";
import { Hook, Console, Decode, Unhook } from "console-feed/lib";

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
      reply: [
        {
          id: 1,
          method: "result",
          data: ["Your code will run here!!"]
        }
      ]
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
      const reply = {
        id: this.state.reply.length + 1,
        method: "result",
        data: [event.data.result]
      };
      this.setState(prevState => ({
        reply: [...prevState.reply, reply]
      }));
    }
  }
  handelClick() {
    this.targetFrame.contentWindow.postMessage(this.state.code, "*");
  }

  render() {
    return (
      <div>
        <Console logs={this.state.reply} variant="dark" />
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
