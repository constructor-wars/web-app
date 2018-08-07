import { connect } from "react-redux";
import Dashboard from "../components/Dashboard/Dashboard";
import {
  allQuestionsAction,
  fetchAllQuestions,
  fetchUserProgress
} from "../_Redux/actions/actions";

const quesitons = [
  {
    id: 1,
    question_tile: "sefsdfs",
    test: "tobe equlal to()",
    difficulty_id: 1,
    category_id: 1,
    instruction: "play with it baby camel",
    link_syllabus: "https:findthecamel.com/babycamel",
    initial_code: "skhhfkshfkhsf"
  },
  {
    id: 2,
    question_tile: "anthoeronf",
    test: "tobe equlal to()",
    difficulty_id: 2,
    category_id: 2,
    instruction: "play with it baby camel",
    link_syllabus: "https:findthecamel.com/babycamel",
    initial_code: "skhhfkshfkhsf"
  }
];

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
