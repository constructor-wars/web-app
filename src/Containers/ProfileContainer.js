import { connect } from "react-redux";
import Profile from "../components/Profile/Profile";

const mapReduxStateToProps = reduxState => {
  const {
    id,
    displayName,
    profileUrl,
    username,
    photos
  } = reduxState.GITHUB_DATA;
  return {
    id,
    username,
    displayName,
    profileUrl,
    profilepic: photos[0].value
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapReduxStateToProps,
  mapDispatchToProps
)(Profile);
