import React from "react";
import Profile from "../Profile/Profile";
import ProgressBar from "../ProgressBar/ProgressBar";
import Questions from "../Questions/Questions";
import AskDimi from "../AskDimi/AskDimi";
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
        <ProgressBar current={this.props.current} total={this.props.total} />
        <Questions questions={this.props.questions || []} />
        <AskDimi messages={this.props.messages} />
      </div>
    );
  }
}
