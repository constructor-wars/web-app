import React from "react";
import ReactMonacoEditor from "react-monaco-editor";
import update from "immutability-helper";
import { Hook, Console, Decode } from "console-feed";

class MonacoEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: [],
      code:
        "// type your code... \n console.log('hello'); \n let james = () => 1; \n james"
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(newValue, e) {
    this.setState({ code: newValue });
  }

  editorDidMount(editor) {
    // console.log("editorDidMount", editor, editor.getModel());
    // Hook(window.console, log => {
    //   this.setState(state =>
    //     update(state, { logs: { $push: [Decode(editor.getValue())] } })
    //   );
    // });
  }

  // componentDidMount() {}

  render() {
    const { code } = this.state;
    const options = {
      selectOnLineNumbers: true,
      roundedSelection: false,
      readOnly: false,
      cursorStyle: "line",
      automaticLayout: false
    };
    return (
      <div style={{ display: "flex" }}>
        <ReactMonacoEditor
          width="400"
          height="600"
          language="javascript"
          theme="vs-dark"
          value={code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
        {/* <div style={{ backgroundColor: "#242424" }}>
          <Console logs={this.state.logs} variant="dark" />
        </div> */}
      </div>
    );
  }
}

export default MonacoEditor;
