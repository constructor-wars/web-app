import React from "react";
import Questions from "../Questions/Questions";

class ProgressBar extends React.Component {
  render() {
    return (
      <div className="profile__progress__bar">
        <h2>You current progress</h2>
        <div className="progress__bar">
          <div
            className="progress__bar__filler"
            style={{
              width: `${(this.props.current / this.props.total) * 100}%`
            }}
          />
        </div>
        <Questions questions={this.props.questions} />
      </div>
    );
  }
}

export default ProgressBar;
