import { connect } from "react-redux";
import Dashboard from "../components/Dashboard/Dashboard";

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
    total: "",
    current: "5",
    question: ["one quesiotn", " dos question"],
    messages: "poo poo"
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapReduxStateToProps,
  mapDispatchToProps
)(Dashboard);
