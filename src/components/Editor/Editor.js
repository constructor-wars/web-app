import React from "react";
import "./StyleEditor.css";
import Instructions from "../Instructions/Instructions";
import MonacoEditor from "./MonacoEditor";
import DisplayConsole from "./DisplayConsole";
import EvalWindow from "./EvalWindow";

export default ({ instructions, tranferCode, codeToEval }) => (
  <div>
    <div className="editor__wrap">
      <div className="editor__wrap__instructions editor__sections">
        <Instructions instructions={instructions} />
      </div>
      <div className="editor__wrap__comments editor__sections">2 comments</div>
      <div className="editor__wrap__edit-window editor__sections">
        <MonacoEditor tranferCode={tranferCode} />
      </div>
      <div className="editor__wrap__display-window editor__sections">
        <EvalWindow codeToEval={`let camel = 'duck'; camel`} />
      </div>
      <div className="editor__wrap__test-window editor__sections">
        <DisplayConsole />
      </div>
    </div>
  </div>
);
