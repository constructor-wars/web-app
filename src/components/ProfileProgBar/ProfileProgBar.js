import React from "react";

class ProfileProgBar extends React.Component {
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
      </div>
    );
  }
}

export default ProfileProgBar;
