import { connect } from "react-redux";
import Dashboard from "../components/Dashboard/Dashboard";
import {
  allQuestionsAction,
  fetchAllQuestions
} from "../_Redux/actions/actions";

const mapReduxStateToProps = reduxState => {
  const {
    id,
    displayName,
    profileUrl,
    username,
    photos
  } = reduxState.GITHUB_DATA;

  const totalQuestionsAnswered = ["one quesiotn", " dos question"];

  return {
    user: {
      id,
      username,
      displayName,
      profileUrl,
      profilepic: photos[0].value
    },
    total: "100",
    current: "20",
    messages: "poo poo",
    questions: reduxState.allQuestions
  };
};

const mapDispatchToProps = dispatch => ({
  getAllQuestions: () => dispatch(fetchAllQuestions())
});

export default connect(
  mapReduxStateToProps,
  mapDispatchToProps
)(Dashboard);
