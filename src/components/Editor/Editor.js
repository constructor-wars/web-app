import React from 'react';
import './StyleEditor.css';
import Instructions from '../Instructions/Instructions';
import Header from '../Header/Header';

export default class Editor extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="editor__wrap">
          <div className="editor__wrap__instructions editor__sections">
            <Instructions data={this.props.instructions} />
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
