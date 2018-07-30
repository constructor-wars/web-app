import React from "react";
import monaco from "monaco-editor";

export default class Monaco extends React.Component {
  componentDidMount() {
    const { path, value, language, onValueChange, ...options } = this.props;
    const model = monaco.editor.createModel(value, language, path);

    this._editor = monaco.editor.create(this._node, options);
    this._editor.setModel(model);
    this._subscription = model.onDidChangeContent(() => {
      this.props.onValueChange(model.getValue());
    });
  }

  componentDidUpdate() {
    const { path, value, language, onValueChange, ...options } = this.props;

    this._editor.updateOptions(options);

    const model = this._editor.getModel();

    if (value !== model.getValue()) {
      model.pushEditOperations(
        [],
        [
          {
            range: model.getFullModelRange(),
            text: value
          }
        ]
      );
    }
  }

  componentWillUnmount() {
    this._editor && this._editor.dispose();
    this._subscription && this._subscription.dispose();
  }

  render() {
    return <div ref={c => (this._node = c)} />;
  }
}
