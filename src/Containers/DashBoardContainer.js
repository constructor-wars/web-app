import { connect } from "react-redux";
import Dashboard from "../components/Dashboard/Dashboard";
import {
  allQuestionsAction,
  fetchAllQuestions,
  fetchUserProgress
} from "../_Redux/actions/actions";

const mapReduxStateToProps = reduxState => {
  const {
    id,
    displayName,
    profileUrl,
    username,
    photos
  } = reduxState.GITHUB_DATA;

  return {
    user: {
      id,
      username,
      displayName,
      profileUrl,
      profilepic: photos[0].value
    },
    total: reduxState.allQuestions.length,
    current: reduxState.userProgress.count,
    messages: "poo poo",
    questions: reduxState.allQuestions
  };
};

const mapDispatchToProps = dispatch => ({
  getAllQuestions: () => dispatch(fetchAllQuestions()),
  getProgress: username => dispatch(fetchUserProgress(username))
});

export default connect(
  mapReduxStateToProps,
  mapDispatchToProps
)(Dashboard);
