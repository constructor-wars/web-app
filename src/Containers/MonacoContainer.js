import React from "react";
import MonacoEditor from "react-monaco-editor";
class Monaco extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code:
        "// type your code... \n console.log('hello'); \n let james = () => 1; \n james"
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(newValue, e) {
    this.setState({ code: newValue });
  }

  editorDidMount(editor) {
    console.log("editorDidMount", editor, editor.getValue(), editor.getModel());
  }

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
        <MonacoEditor
          width="400"
          height="600"
          language="javascript"
          theme="vs-dark"
          value={code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
        <div>
          <h1>console</h1>
          {eval(this.state.code)}
          {/* {this.state.code} */}
          <div id="logger" />
        </div>
      </div>
    );
  }
}

export default Monaco;
