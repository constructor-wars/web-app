import React from "react";
import { connect } from "react-redux";

import { codeToEvalAction } from "../_Redux/actions/actions";

import Instructions from "../components/Instructions/Instructions";
import { MonacoEditor, DisplayConsole, EvalWindow } from "../components/Editor";

const mapReduxStateToProps = reduxState => ({
  user: {
    username: reduxState.GITHUB_DATA.username,
    displayName: reduxState.GITHUB_DATA.displayName
  },
  currentTask: {
    instructions: `# instruction`,
    startCode: "let question = 'Hello World' \n question",
    answer: `Hello world`
  }
});

const mapDispatchToProps = dispatch => ({
  // tranferCode: code => dispatch(codeToEvalAction(code)),
  // runcode: () => dispatch()
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
  }
  onChange(code) {
    this.setState({ currentCode: code });
  }
  runCode() {
    this.setState({ codeToEval: this.state.currentCode, performEval: true });
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
      <div>
        <div className="editor__wrap">
          <div className="editor__wrap__instructions editor__sections">
            <Instructions instructions={this.props.currentTask.instructions} />
          </div>
          <div className="editor__wrap__comments editor__sections">
            <div onClick={this.runCode}>\>- Run code -> </div>
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
