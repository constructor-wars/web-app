import { connect } from 'react-redux';
import Editor from '../components/Editor/Editor';

const mapReduxStateToProps = reduxState => ({
  instructions: `hello`
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapReduxStateToProps,
  mapDispatchToProps
)(Editor);
