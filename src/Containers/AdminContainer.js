import { connect } from "react-redux";
import Admin from "../components/Admin/Admin";
import { sendToServerAction } from "../_Redux/actions/actions";

const LevelOptions = {
  3: "Hard",
  1: "Easy",
  2: "GodLevel"
};

const CategoryOptions = {
  1: "Arrays Methods",
  2: "funtions",
  3: "objects",
  4: "optertators"
};

const mapReduxStateToProps = reduxState => {
  const {
    id,
    displayName,
    profileUrl,
    username,
    photos
  } = reduxState.GITHUB_DATA;
  return {
    LevelOptions,
    CategoryOptions,
    username: username,
    GITHUB_DATA: {
      id,
      username,
      displayName,
      profileUrl,
      profilepic: photos[0].value
    }
  };
};

const mapDispatchToProps = dispatch => ({
  sendToServer: data => dispatch(sendToServerAction(data))
});

export default connect(
  mapReduxStateToProps,
  mapDispatchToProps
)(Admin);
