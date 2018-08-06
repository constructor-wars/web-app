import React from "react";
import ReactMonacoEditor from "react-monaco-editor";

const monacoOptions = {
  selectOnLineNumbers: true,
  roundedSelection: false,
  readOnly: false,
  cursorStyle: "line",
  automaticLayout: false
};
class MonacoEditor extends React.Component {
  editorDidMount(editor) {
    // console.log("editorDidMount", editor, editor.getModel());
  }

  render() {
    return (
      <div style={{ display: "flex" }}>
        <ReactMonacoEditor
          height="1000"
          language="javascript"
          theme="vs-dark"
          value={this.props.codeToEval}
          options={monacoOptions}
          onChange={this.props.onChange}
          editorDidMount={this.editorDidMount}
        />
      </div>
    );
  }
}

export default MonacoEditor;
