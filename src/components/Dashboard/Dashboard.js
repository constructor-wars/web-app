import React from "react";
import Profile from "../Profile/Profile";
import ProgressBar from "../ProgressBar/ProgressBar";
import Questions from "../Questions/Questions";
import AskDimi from "../AskDimi/AskDimi";
import "./style.css";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }
  componentDidMount() {
    this.props.getProgress(this.props.user.username);
    this.fetchAllQuestions().then(questions => this.setState({ questions }));
  }

  fetchAllQuestions() {
    return fetch("/api/questions")
      .then(response => response.json())
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="dashboard__wrapper">
        <Profile {...this.props.user} />
        <div className="dashboard__bar__questions">
          <ProgressBar current={this.props.current} total={this.props.total} />
          <Questions
            title="Your questions or tasks"
            questions={this.state.questions.filter(
              item => item.github_username === this.props.user.username
            )}
          />
        </div>
        <Questions
          title="Questions or tasks"
          questions={this.state.questions.filter(
            item => item.github_username !== this.props.user.username
          )}
        />
        <AskDimi messages={this.props.messages} />
      </div>
    );
  }
}
