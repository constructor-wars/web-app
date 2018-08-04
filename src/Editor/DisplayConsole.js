import React from "react";

import update from "immutability-helper";
import { Hook, Console, Decode } from "console-feed";

class DisplayConsole extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: []
    };
  }

  componentDidMount() {
    Hook(window.console, log => {
      this.setState(state => update(state, { logs: { $push: [Decode(log)] } }));
    });

    console.log(`Hello world!`);
  }

  render() {
    return (
      <div style={{ backgroundColor: "#242424" }}>
        <Console logs={this.state.logs} variant="dark" />
      </div>
    );
  }
}
export default DisplayConsole;
