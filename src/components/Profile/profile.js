import React from "react";
import profilepic from "../../images/potatoe.jpg";
import "./Profile.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="profile_container">
          <img className="profileImg" src={profilepic} />
          <p>Username:{this.props.username}</p>
          <p>Cohort:{this.props.cohort}</p>
          <p>Last login:{this.props.lastLogin}</p>
        </div>
      </div>
    );
  }
}

export default Profile;
