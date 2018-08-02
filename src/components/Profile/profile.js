import React from 'react';
import Header from '../Header/Header';

import './Profile.css';
import Markdown from 'react-remarkable';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <div className="profile_container">
          <img className="profileImg" src={this.props.profilepic} />

          <p>Username:{this.props.username}</p>
          <p>Cohort:{this.props.cohort}</p>
          <p>Last login:{this.props.lastLogin}</p>

          <Markdown source={this.props.profileDesciption} />
        </div>
      </div>
    );
  }
}

export default Profile;
