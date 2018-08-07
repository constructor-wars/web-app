import React from "react";
import Bar from "./Bar";

class ProfileProgBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage: 55
    };
  }

  render() {
    return (
      <div className="profile__progress__bar">
        <p>our fucking bar</p>
        <Bar percentage={this.state.percentage} />
      </div>
    );
  }
}

export default ProfileProgBar;

{
  /* <span className="total__progress">
          {this.props.total}
          <p className="current__progress"> {this.props.current} </p>
        </span> */
}
