import React from "react";
import MonacoEditor from "react-monaco-editor";

export default class Monaco extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "// type your code...",
      output: ""
    };
    this.onChange = this.onChange.bind(this);
  }
  componentDidUpdate() {}
  editorDidMount(editor, monaco) {
    // console.log("editorDidMount", editor);
    const model = editor.getModel();
    const value = model.getValue();
    console.log(value);
    editor.focus();
  }
  onChange(newValue, e) {
    // console.log("onChange", newValue, e);
    this.setState({ output: newValue });
  }
  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <div style={{ display: "flex" }}>
        <MonacoEditor
          width="800"
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
          {this.state.output}
        </div>
      </div>
    );
  }
}
