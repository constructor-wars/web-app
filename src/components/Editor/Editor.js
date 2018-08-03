import React from "react";
import "./StyleEditor.css";
import Instructions from "../Instructions/Instructions";
import MonacoEditor from "./MonacoEditor";
import DisplayConsole from "./DisplayConsole";
import EvalWindow from "./EvalWindow";
export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      codeToEval: ``
    };
  }
  tranferCode = x => {
    console.log(x);
  };
  render() {
    return (
      <div>
        <div className="editor__wrap">
          <div className="editor__wrap__instructions editor__sections">
            <Instructions instructions={this.props.instructions} />
          </div>
          <div className="editor__wrap__comments editor__sections">
            2 comments
          </div>
          <div className="editor__wrap__edit-window editor__sections">
            3 edit-window
            <MonacoEditor tranferCode={this.tranferCode} />
          </div>
          <div className="editor__wrap__display-window editor__sections">
            <EvalWindow codeToEval={this.state.codeToEval} />
          </div>
          <div className="editor__wrap__test-window editor__sections">
            <DisplayConsole data={this.state.codeToEval} />
          </div>
        </div>
      </div>
    );
  }
}
