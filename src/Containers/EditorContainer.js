import React from "react";
import { connect } from "react-redux";

import { codeToEvalAction, fetchQuestionById } from "../_Redux/actions/actions";

import Instructions from "../components/Instructions/Instructions";
import { MonacoEditor, DisplayConsole, EvalWindow } from "../components/Editor";
import MDNhelp from "../components/MDNhelp/MDNhelp";

const mapReduxStateToProps = reduxState => ({
  user: {
    username: reduxState.GITHUB_DATA.username,
    displayName: reduxState.GITHUB_DATA.displayName
  },
  currentTask: {
    instructions: reduxState.questionById.instruction,
    startCode: reduxState.questionById.initial_code,
    answer: reduxState.questionById.test
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
      <div>
        <div className="editor__wrap__buttons">
          <div className="editor__wrap__button" onClick={this.runCode}>
            Run code ->
          </div>
          <div className="editor__wrap__button" onClick={this.saveCode}>
            Save code ->
          </div>
        </div>
        <div className="editor__wrap">
          <div className="editor__wrap__instructions editor__sections">
            <Instructions instructions={this.props.currentTask.instructions} />
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
            />
          </div>
          <div className="editor__wrap__test-window editor__sections">
            <DisplayConsole />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapReduxStateToProps,
  mapDispatchToProps
)(Editor);
