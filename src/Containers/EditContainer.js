import { connect } from "react-redux";
import Edit from "../components/Edit/Edit";
import { sendToServerAction } from "../_Redux/actions/actions";

const LevelOptions = {
  3: "Hard",
  1: "Easy",
  2: "Medium"
};

const CategoryOptions = {
  1: "Arrays Methods",
  2: "Funtions",
  3: "Objects",
  4: "Optertators"
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
)(Edit);
