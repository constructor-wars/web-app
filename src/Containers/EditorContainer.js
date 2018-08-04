import { connect } from "react-redux";
import Editor from "../components/Editor/Editor";
import { codeToEvalAction } from "../actions/actions";

const mapReduxStateToProps = reduxState => ({
  instructions: `#instruction`,
  codeToEval: reduxState.codeToEval
});

const mapDispatchToProps = dispatch => ({
  tranferCode: code => dispatch(codeToEvalAction(code))
});
export default connect(
  mapReduxStateToProps,
  mapDispatchToProps
)(Editor);
