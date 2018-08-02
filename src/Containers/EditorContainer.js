import { connect } from 'react-redux';
import Editor from '../components/Editor/Editor';

const mapReduxStateToProps = reduxState => ({
  instructions: `instruction`
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapReduxStateToProps,
  mapDispatchToProps
)(Editor);
