import React from 'react';
import './StyleEditor.css';
import Instructions from '../Instructions/Instructions';

export default class Editor extends React.Component {
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
          </div>
          <div className="editor__wrap__display-window editor__sections">
            4 display-window
          </div>
          <div className="editor__wrap__test-window editor__sections">
            5 test-window
          </div>
        </div>
      </div>
    );
  }
}
