import React from 'react';
import Header from '../Header/Header';
import profilepic from '../../images/potatoe.jpg';
import './Profile.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
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
