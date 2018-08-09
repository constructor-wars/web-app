import React from "react";
import { connect } from "react-redux";

import {
  fetchQuestionById,
  sendCurrentCodeToDatabaseAction
} from "../_Redux/actions/actions";
import { FiPlayCircle, FiSave } from "react-icons/fi";

import Instructions from "../components/Instructions/Instructions";
import { MonacoEditor, DisplayConsole, EvalWindow } from "../components/Editor";
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
  },
  user_id: reduxState.userData.user_id
});

const mapDispatchToProps = dispatch => ({
  saveCode: currentCode =>
    dispatch(sendCurrentCodeToDatabaseAction(currentCode)),
  getCurrentQuestion: id => dispatch(fetchQuestionById(id)),
  getUserData: user_id => dispatch(fetchUserData(user_id))
});

const getQueryParams = new URLSearchParams(location.search);

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      codeToEval: this.props.codeToEval,
      currentCode: this.props.currentTask.startCode,
      performEval: false,
      completed: false
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
    const dataToSendToSever = {
      user_id: this.props.user.username,
      question_id: getQueryParams.get("question") || 1,
      user_edits: this.state.currentCode,
      completed: this.state.completed,
      user_notes: this.props.currentTask.instructions,
      ask_for_help: false
    };
    this.props.saveCode(dataToSendToSever);
  }

  componentDidMount() {
    getQueryParams.has("question")
      ? this.props.getCurrentQuestion(getQueryParams.get("question"))
      : this.props.getCurrentQuestion(1);
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
