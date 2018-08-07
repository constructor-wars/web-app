import React from "react";
import "./Profile.css";
class Profile extends React.Component {
  render() {
    return (
      <div>
        <div className="profile__container">
          <img className="profileImg" src={this.props.profilepic} />
          <p>Username:{this.props.username}</p>
          <p>displayName:{this.props.displayName}</p>
          <a href={this.props.profileUrl}>Github url:{this.props.profileUrl}</a>
        </div>
      </div>
    );
  }
}

export default Profile;
