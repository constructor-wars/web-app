import React from "react";

import { Hook, Console, Decode, Unhook } from "console-feed/lib";

class DisplayConsole extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: []
    };
  }

  componentDidMount() {
    Hook(window.console, log => {
      this.setState({ logs: [Decode(log)] });
    });
  }
  // componentWillUnmount() {
  //   Unhook(true);
  // }

  render() {
    return (
      <div style={{ backgroundColor: "#242424" }}>
        <Console logs={this.state.logs} variant="dark" />
      </div>
    );
  }
}
export default DisplayConsole;
