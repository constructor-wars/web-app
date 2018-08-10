import React from "react";

import { FiPlayCircle, FiSave } from "react-icons/fi";

import Instructions from "../components/Instructions/Instructions";
import { MonacoEditor, DisplayConsole, EvalWindow } from "../components/Editor";
import MDNhelp from "../components/MDNhelp/MDNhelp";

const getQueryParams = new URLSearchParams(location.search);

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      codeToEval: "",
      currentCode: "",
      performEval: false,
      completed: false
    };
    this.onChange = this.onChange.bind(this);
    this.runCode = this.runCode.bind(this);
    this.saveCode = this.saveCode.bind(this);
    this.fetchQuestionById = this.fetchQuestionById.bind(this);
  }
  onChange(code) {
    this.setState({ currentCode: code });
  }
  runCode() {
    this.setState({ codeToEval: this.state.currentCode, performEval: true });
  }
  saveCode() {}

  fetchQuestionById(id) {
    return fetch(`/api/question/${id}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          currentCode: data.test_spec.initialCode,
          question_title: data.question_title,
          instructions: data.instruction,
          test_spec: data.test_spec,
          github_username: data.github_username
        })
      )
      .catch(error => console.log(error));
  }

  componentDidMount() {
    getQueryParams.has("question")
      ? this.fetchQuestionById(getQueryParams.get("question"))
      : this.fetchQuestionById(42);
  }

  componentDidUpdate() {
    if (this.state.performEval) {
      this.setState({
        performEval: false
      });
    }
  }
  render() {
    return (
      <div className="editor__wrap">
        <div className="editor__wrap__buttons">
          <div
            className="editor__wrap__button editor__wrap__button--save"
            onClick={this.saveCode}
          >
            <FiSave />
            <span>Save</span>
          </div>
          <div
            className="editor__wrap__button editor__wrap__button--run"
            onClick={this.runCode}
          >
            <FiPlayCircle />
            <span>Run</span>
          </div>
        </div>
        <div className="editor__wrap__instructions editor__sections">
          <Instructions
            question_title={this.state.question_title}
            instructions={this.state.instructions}
          />
        </div>
        <div className="editor__wrap__comments editor__sections">
          <MDNhelp />
        </div>
        <div className="editor__wrap__edit-window editor__sections">
          <MonacoEditor
            codeToEval={this.state.currentCode}
            onChange={this.onChange}
          />
        </div>
        <div className="editor__wrap__display-window editor__sections">
          <EvalWindow
            codeToEval={this.state.codeToEval}
            performEval={this.state.performEval}
            test_spec={this.state.test_spec}
          />
        </div>
        <div className="editor__wrap__test-window editor__sections">
          <DisplayConsole />
        </div>
      </div>
    );
  }
}
