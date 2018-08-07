import React from "react";

class ProfileProgBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage: 0
    };
  }

  render() {
    return (
      <div className="profile__progress__bar">
        <p className="total__progress">
          {this.props.total}
          <p className="current__progress"> {this.props.current} </p>
        </p>
      </div>
    );
  }
}

const Filler = props => {
  return <div className="filler" style={{ width: `${props.percentage}%` }} />;
};

export default ProfileProgBar;
