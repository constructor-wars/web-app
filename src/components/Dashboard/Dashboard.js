import React from "react";
import Profile from "../Profile/Profile";
import ProgressBar from "../ProgressBar/ProgressBar";
import Questions from "../Questions/Questions";
import AskDimi from "../AskDimi/AskDimi";
import "./style.css";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: []
    }
  }
;  componentDidMount() {
    this.props.getProgress(this.props.user.username)
    this.fetchAllQuestions().then(questions => this.setState({questions}))
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
        <ProgressBar current={this.props.current} total={this.props.total} />
        <Questions questions={this.state.questions} />
        <AskDimi messages={this.props.messages} />
      </div>
    );
  }
}
