import { connect } from "react-redux";
import Profile from "../components/Profile/profile";

const mapReduxStateToProps = reduxState => ({
  username: "It is ME, the user!",
  cohort: "#2",
  lastLogin: "01-01-2010 12:30"
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapReduxStateToProps,
  mapDispatchToProps
)(Profile);
