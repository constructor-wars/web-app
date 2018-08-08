import React from "react";
import { connect } from "react-redux";

import { fetchQuestionById } from "../_Redux/actions/actions";
import { FiPlayCircle, FiSave } from "react-icons/fi";

import Instructions from "../components/Instructions/Instructions";
import {
  MonacoEditor,
  DisplayConsole,
  EvalWindow,
  TestCase
} from "../components/Editor";
import MDNhelp from "../components/MDNhelp/MDNhelp";

const mapReduxStateToProps = reduxState => ({
  user: {
    username: reduxState.GITHUB_DATA.username,
    displayName: reduxState.GITHUB_DATA.displayName
  },
  currentTask: {
    question_title: reduxState.questionById.question_title,
    instructions: reduxState.questionById.instruction,
    startCode: reduxState.questionById.initial_code,
    testCase: reduxState.questionById.test
  }
});

const mapDispatchToProps = dispatch => ({
  saveCode: currentCode => console.log("saved", currentCode),
  getCurrentQuestion: id => dispatch(fetchQuestionById(id))
});

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      codeToEval: this.props.codeToEval,
      currentCode: this.props.currentTask.startCode,
      performEval: false
    };
    this.onChange = this.onChange.bind(this);
    this.runCode = this.runCode.bind(this);
    this.saveCode = this.saveCode.bind(this);
  }
  onChange(code) {
    this.setState({ currentCode: code });
  }
  runCode() {
    this.setState({ codeToEval: this.state.currentCode, performEval: true });
  }
  saveCode() {
    this.props.saveCode(this.state.currentCode);
  }

  componentDidMount() {
    const currentQuestionId = 1;
    this.props.getCurrentQuestion(currentQuestionId);
    console.log("componentDidUpdate()");
  }

  componentDidUpdate() {
    if (this.state.performEval) {
      this.setState({
        performEval: false
      });
    }
  }
  render() {
    console.log(
      this.state.codeToEval === this.props.currentTask.answer ? "yay" : "nahh"
    );
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
            question_title={this.props.currentTask.question_title}
            instructions={this.props.currentTask.instructions}
          />
        </div>
        <div className="editor__wrap__comments editor__sections">
          <MDNhelp />
        </div>
        <div className="editor__wrap__edit-window editor__sections">
          <MonacoEditor
            codeToEval={this.state.currentCode}
            onChange={this.onChange}
            user={this.props.user}
          />
        </div>
        <div className="editor__wrap__display-window editor__sections">
          <EvalWindow
            codeToEval={this.state.codeToEval}
            performEval={this.state.performEval}
            testCase={this.props.testCase}
          />
        </div>
        <div className="editor__wrap__test-window editor__sections">
          <DisplayConsole />
        </div>
      </div>
    );
  }
}

export default connect(
  mapReduxStateToProps,
  mapDispatchToProps
)(Editor);
