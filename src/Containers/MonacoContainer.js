import React from "react";
import MonacoEditor from "../Editor/MonacoEditor";
import DisplayConsole from "../Editor/DisplayConsole";

class Monaco extends React.Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <MonacoEditor />
        <DisplayConsole />
      </div>
    );
  }
}

export default Monaco;
