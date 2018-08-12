import React from "react";
import "./Profile.css";
import {FaGithub} from "react-icons/fa"

class Profile extends React.Component {
  render() {
    return (
      <div>
        <div className="profile__container">
          <img className="profileImg" src={this.props.profilepic} />
          <a href={this.props.profileUrl} className="profile__name">
            <FaGithub/>
          
          <span >{this.props.username}</span> 
          </a> 
        </div>
      </div>
    );
  }
}

export default Profile;
