import React from "react";
import Profile from "../Profile/Profile";
import ProfileProgBar from "../ProfileProgBar/ProfileProgBar";
import ProfileQuestions from "../ProfileQuestions/ProfileQuestions";
import ProfileAskD from "../ProfileAskD/ProfileAskD";
import "./style.css";

export default class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getAllQuestions();
    this.props.getProgress(this.props.user.username);
  }

  render() {
    return (
      <div className="dashboard__wrapper">
        <Profile {...this.props.user} />
        <ProfileProgBar current={this.props.current} total={this.props.total} />
        <ProfileQuestions questions={this.props.questions} />
        <ProfileAskD messages={this.props.messages} />
      </div>
    );
  }
}
