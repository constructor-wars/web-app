import React from "react";
import ReactMonacoEditor from "react-monaco-editor";

class MonacoEditor extends React.Component {
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
    // console.log("editorDidMount", editor, editor.getModel());
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
        <ReactMonacoEditor
          language="javascript"
          theme="vs-dark"
          value={code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
      </div>
    );
  }
}

export default MonacoEditor;
